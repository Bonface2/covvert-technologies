export default function Placeholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-line bg-[#F6F7F9] bg-[length:20px_20px] bg-[position:10px_0] p-3 text-center text-xs font-semibold text-[#8E97A3] ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, var(--color-panel) 25%, transparent 25%),
          linear-gradient(225deg, var(--color-panel) 25%, transparent 25%),
          linear-gradient(45deg, var(--color-panel) 25%, transparent 25%),
          linear-gradient(315deg, var(--color-panel) 25%, var(--color-canvas) 25%)`,
      }}
    >
      {label}
    </div>
  );
}
