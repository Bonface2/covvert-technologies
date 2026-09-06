const chips = ["Partner logo", "Partner logo", "Client logo", "Partner logo", "Client logo", "Partner logo"];

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
        {[...chips, ...chips].map((label, i) => (
          <div
            key={i}
            className="flex h-12 w-[110px] shrink-0 items-center justify-center rounded border border-line-soft text-[11px] font-semibold text-[#9AA1AC]"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
