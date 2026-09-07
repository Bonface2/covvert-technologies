export type IndustryIconKey =
  | "logistics"
  | "infrastructure"
  | "agriculture"
  | "government"
  | "development"
  | "energy";

const paths: Record<IndustryIconKey, React.ReactNode> = {
  logistics: (
    <>
      <rect x="1.5" y="8" width="12" height="8" rx="1" />
      <path d="M13.5 11h4l3 3v2h-7z" />
      <circle cx="6" cy="18.5" r="1.6" />
      <circle cx="17" cy="18.5" r="1.6" />
    </>
  ),
  infrastructure: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V9l7-5 7 5v12" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  agriculture: (
    <>
      <path d="M12 21c0-6 4-9 8-10-1 5-3 9-8 10z" />
      <path d="M12 21c0-6-4-9-8-10 1 5 3 9 8 10z" />
      <path d="M12 21V11" />
    </>
  ),
  government: (
    <>
      <path d="M4 10l8-5 8 5" />
      <path d="M5 10v9M10 10v9M14 10v9M19 10v9" />
      <path d="M3 21h18" />
    </>
  ),
  development: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M8 8l2.5 2.5M13.5 13.5L16 16M16 8l-2.5 2.5M10.5 13.5L8 16" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  energy: (
    <>
      <path d="M13 3L6 13h5l-1 8 8-10h-5l1-8z" />
    </>
  ),
};

export default function IndustryIcon({
  icon,
  className = "h-6 w-6",
}: {
  icon: IndustryIconKey;
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
