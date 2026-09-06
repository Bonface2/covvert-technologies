import type { SolutionLink } from "@/lib/nav";

const paths: Record<SolutionLink["icon"], React.ReactNode> = {
  consultancy: <path d="M4 5h16v11H8l-4 4V5z" />,
  technology: (
    <>
      <path d="M8 3h8l4 7-4 7H8l-4-7 4-7z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  iot: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="1.5" />
      <path d="M9 6V4h6v2" />
    </>
  ),
  me: (
    <>
      <path d="M4 15l5-6 4 4 7-8" />
      <circle cx="20" cy="5" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  reporting: (
    <>
      <path d="M7 3h7l4 4v14H7V3z" />
      <path d="M9 12h6M9 16h6" />
    </>
  ),
};

export default function SolutionIcon({
  icon,
  className = "h-[17px] w-[17px]",
}: {
  icon: SolutionLink["icon"];
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
