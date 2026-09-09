"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function TopProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;

      setVisible(true);
      setProgress(15);
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        setProgress((p) => (p < 88 ? p + (88 - p) * 0.1 : p));
      }, 150);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    setProgress(100);
    const hide = window.setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 200);
    return () => window.clearTimeout(hide);
  }, [pathname, searchParams]);

  if (!visible) return null;

  return (
    <div className="fixed left-0 top-0 z-[100] h-[3px] w-full">
      <div
        className="h-full bg-accent transition-[width] duration-200 ease-out"
        style={{ width: `${progress}%`, boxShadow: "0 0 8px rgba(0,80,181,0.6)" }}
      />
    </div>
  );
}
