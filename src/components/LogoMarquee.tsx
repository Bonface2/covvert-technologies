import Image from "next/image";

type Partner = { name: string; src?: string };

const partners: Partner[] = [
  { name: "PMBD Consulting", src: "/images/partners/pmbd-consulting.png" },
  { name: "Eonsfleet", src: "/images/partners/eonsfleet.png" },
  { name: "Nsoroma GPS", src: "/images/partners/nsoroma-gps.png" },
  { name: "Zitra Africa", src: "/images/partners/zitra-africa.png" },
  { name: "Horizon IoT", src: "/images/partners/horizon-iot.png" },
];

// Repeated enough times that one half of the track is always wider than the
// visible marquee area — otherwise the loop point (translateX(-50%)) shows a
// gap before the duplicated set scrolls into view.
const track = [...partners, ...partners, ...partners];

export default function LogoMarquee() {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div className="animate-marquee flex w-max gap-6 [&:hover]:[animation-play-state:paused]">
        {[...track, ...track].map((partner, i) => (
          <div
            key={i}
            className="relative flex h-14 w-[140px] shrink-0 items-center justify-center rounded border border-line-soft bg-white p-2"
          >
            {partner.src ? (
              <Image src={partner.src} alt={partner.name} fill className="object-contain" />
            ) : (
              <span className="text-center text-[11px] font-semibold text-[#9AA1AC]">{partner.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
