export type ValueIconKey = "innovation" | "integrity" | "impact";

const paths: Record<ValueIconKey, React.ReactNode> = {
  innovation: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.45 1.1 1.2 1.2 1.9v.3h4.8v-.3c.1-.7.6-1.45 1.2-1.9A6 6 0 0 0 12 3z" />
    </>
  ),
  integrity: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  impact: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      <path d="M12 3v2.5M21 12h-2.5M12 21v-2.5M3 12h2.5" />
    </>
  ),
};

export default function ValueIcon({
  icon,
  className = "h-5 w-5",
}: {
  icon: ValueIconKey;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[icon]}
    </svg>
  );
}
