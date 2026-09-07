export type WhyChooseIconKey =
  | "client-centred"
  | "connected"
  | "technology-driven"
  | "solution-focused"
  | "agile"
  | "results-oriented";

const paths: Record<WhyChooseIconKey, React.ReactNode> = {
  "client-centred": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  connected: (
    <>
      <circle cx="5" cy="7" r="2" />
      <circle cx="19" cy="7" r="2" />
      <circle cx="12" cy="17" r="2" />
      <path d="M6.7 8.3L11 15.5M17.3 8.3L13 15.5M7 7h10" />
    </>
  ),
  "technology-driven": (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l1.5 1.5M18 6l-1.5 1.5M6 18l1.5-1.5M18 18l-1.5-1.5" />
    </>
  ),
  "solution-focused": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 12.5l2.3 2.3L15.8 9" />
    </>
  ),
  agile: (
    <>
      <path d="M13 3L5 13h5l-1 8 8-10h-5l1-8z" />
    </>
  ),
  "results-oriented": (
    <>
      <path d="M4 20V11M10 20V4M16 20v-8M20 20v-5" />
    </>
  ),
};

export default function WhyChooseIcon({
  icon,
  className = "h-5 w-5",
}: {
  icon: WhyChooseIconKey;
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
