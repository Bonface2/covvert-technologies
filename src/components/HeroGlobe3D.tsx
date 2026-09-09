"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type City = { name: string; lat: number; lon: number };

const HUB: City = { name: "Nairobi", lat: -1.29, lon: 36.82 };
const SPOKES: City[] = [
  { name: "Kampala", lat: 0.31, lon: 32.58 },
  { name: "Dar es Salaam", lat: -6.79, lon: 39.28 },
  { name: "Kigali", lat: -1.94, lon: 30.06 },
  { name: "Addis Ababa", lat: 9.03, lon: 38.74 },
  { name: "Lagos", lat: 6.52, lon: 3.38 },
  { name: "Accra", lat: 5.6, lon: -0.19 },
  { name: "Dakar", lat: 14.72, lon: -17.47 },
];

const RADIUS = 2;

function latLonToVector3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function loadInvertedLandMask(url: string, onReady: (texture: THREE.CanvasTexture) => void) {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d")!;
    // Source mask is land=black, ocean=white; invert so land is bright (visible) and ocean is dark (masked out).
    ctx.filter = "invert(1)";
    ctx.drawImage(img, 0, 0);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    onReady(texture);
  };
  img.src = url;
}

function makePingTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(120,180,255,0.9)");
  gradient.addColorStop(0.6, "rgba(80,150,255,0.35)");
  gradient.addColorStop(1, "rgba(80,150,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

export default function HeroGlobe3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.3, 6.1);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    globeGroup.rotation.x = 0.15;
    scene.add(globeGroup);

    // Lit, glassy sphere body — gives the wireframe genuine 3D depth via lighting.
    const bodyGeometry = new THREE.SphereGeometry(RADIUS, 64, 48);
    const bodyMaterial = new THREE.MeshPhongMaterial({
      color: 0x03306e,
      transparent: true,
      opacity: 0.75,
      shininess: 60,
      specular: 0x6fa8ff,
    });
    globeGroup.add(new THREE.Mesh(bodyGeometry, bodyMaterial));

    // Wireframe overlay for the latitude/longitude grid look.
    const wireGeometry = new THREE.WireframeGeometry(new THREE.SphereGeometry(RADIUS * 1.002, 24, 16));
    const wireMaterial = new THREE.LineBasicMaterial({
      color: 0x6fa8ff,
      transparent: true,
      opacity: 0.28,
    });
    globeGroup.add(new THREE.LineSegments(wireGeometry, wireMaterial));

    // Continent silhouettes, so the surface reads as a map rather than bare dots.
    let continentsMesh: THREE.Mesh | undefined;
    let continentsGeometry: THREE.SphereGeometry | undefined;
    let continentsMaterial: THREE.MeshPhongMaterial | undefined;
    let continentsTexture: THREE.CanvasTexture | undefined;
    let cancelled = false;
    loadInvertedLandMask("/textures/earth-landmask.jpg", (texture) => {
      if (cancelled) {
        texture.dispose();
        return;
      }
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      continentsTexture = texture;
      continentsGeometry = new THREE.SphereGeometry(RADIUS * 1.001, 96, 72);
      continentsMaterial = new THREE.MeshPhongMaterial({
        color: 0x9fc6ff,
        emissive: 0x050f1f,
        emissiveMap: texture,
        alphaMap: texture,
        transparent: true,
        shininess: 15,
      });
      continentsMesh = new THREE.Mesh(continentsGeometry, continentsMaterial);
      globeGroup.add(continentsMesh);
    });

    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    const key = new THREE.PointLight(0x99ccff, 4.2, 20);
    key.position.set(6.5, 3, -1.5);
    const fill = new THREE.PointLight(0x3a6fd6, 0.9, 20);
    fill.position.set(-5, -2, 3);
    scene.add(ambient, key, fill);

    const cities = [HUB, ...SPOKES];
    const positions = cities.map((c) => latLonToVector3(c.lat, c.lon, RADIUS));

    const pingTexture = makePingTexture();
    const markers: { sprite: THREE.Sprite; offset: number }[] = [];

    positions.forEach((pos, i) => {
      const dotGeometry = new THREE.SphereGeometry(i === 0 ? 0.055 : 0.04, 16, 16);
      const dotMaterial = new THREE.MeshBasicMaterial({ color: i === 0 ? 0xffffff : 0x9fc6ff });
      const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      dot.position.copy(pos);
      globeGroup.add(dot);

      const spriteMaterial = new THREE.SpriteMaterial({
        map: pingTexture,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.copy(pos).multiplyScalar(1.01);
      sprite.scale.setScalar(0.01);
      globeGroup.add(sprite);
      markers.push({ sprite, offset: i * 0.6 });
    });

    // Flowing arcs from the hub (Nairobi) out to each spoke city.
    const arcLines: {
      line: THREE.Line;
      material: THREE.LineDashedMaterial;
      distanceAttr: THREE.BufferAttribute;
      baseDistances: Float32Array;
    }[] = [];
    const hubPos = positions[0];
    positions.slice(1).forEach((pos) => {
      const mid = hubPos.clone().add(pos).multiplyScalar(0.5).normalize().multiplyScalar(RADIUS * 1.35);
      const curve = new THREE.QuadraticBezierCurve3(hubPos, mid, pos);
      const points = curve.getPoints(48);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineDashedMaterial({
        color: 0x338dff,
        transparent: true,
        opacity: 0.85,
        dashSize: 0.14,
        gapSize: 0.1,
      });
      const line = new THREE.Line(geometry, material);
      line.computeLineDistances();
      globeGroup.add(line);
      const distanceAttr = geometry.getAttribute("lineDistance") as THREE.BufferAttribute;
      arcLines.push({ line, material, distanceAttr, baseDistances: distanceAttr.array.slice() as Float32Array });
    });

    function resize() {
      if (!container) return;
      const { clientWidth, clientHeight } = container;
      if (clientWidth === 0 || clientHeight === 0) return;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const rotationRef = { current: 0 };
    const dragRef = { current: { dragging: false, startX: 0, startRotation: 0 } };

    function onPointerDown(e: PointerEvent) {
      dragRef.current = { dragging: true, startX: e.clientX, startRotation: rotationRef.current };
      container!.style.cursor = "grabbing";
    }
    function onPointerMove(e: PointerEvent) {
      if (!dragRef.current.dragging) return;
      const deltaX = e.clientX - dragRef.current.startX;
      rotationRef.current = dragRef.current.startRotation + deltaX * 0.01;
    }
    function onPointerUp() {
      if (!dragRef.current.dragging) return;
      dragRef.current.dragging = false;
      if (container) container.style.cursor = "grab";
    }
    container.style.cursor = "grab";
    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    let frameId: number;
    let lastElapsed = 0;
    const clock = new THREE.Clock();

    function animate() {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const delta = elapsed - lastElapsed;
      lastElapsed = elapsed;

      if (!prefersReducedMotion && !dragRef.current.dragging) {
        rotationRef.current += delta * 0.18;
      }
      globeGroup.rotation.y = rotationRef.current;

      arcLines.forEach(({ distanceAttr, baseDistances }, i) => {
        const shift = prefersReducedMotion ? 0 : elapsed * 0.6 + i * 0.3;
        for (let v = 0; v < baseDistances.length; v++) {
          distanceAttr.array[v] = baseDistances[v] + shift;
        }
        distanceAttr.needsUpdate = true;
      });

      markers.forEach(({ sprite, offset }) => {
        const t = ((elapsed + offset) % 2.4) / 2.4;
        const scale = 0.05 + t * 0.55;
        sprite.scale.setScalar(scale);
        const material = sprite.material as THREE.SpriteMaterial;
        material.opacity = 1 - t;
      });

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      renderer.dispose();
      bodyGeometry.dispose();
      bodyMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      pingTexture.dispose();
      continentsGeometry?.dispose();
      continentsMaterial?.dispose();
      continentsTexture?.dispose();
      arcLines.forEach(({ line, material }) => {
        line.geometry.dispose();
        material.dispose();
      });
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="h-full w-full touch-none" />;
}
