export type FeatureIconKey =
  | "pin" | "globe" | "shield" | "clock" | "chart" | "network" | "leaf" | "drop"
  | "database" | "cloud" | "headset" | "wifi" | "sensor" | "bridge" | "hardhat"
  | "truck" | "tractor" | "gear" | "thermometer" | "layers" | "monitor" | "dollar"
  | "doc" | "tools" | "users" | "building" | "bolt" | "target" | "check";

const paths: Record<FeatureIconKey, React.ReactNode> = {
  pin: (
    <>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.6 2.4 4 5.3 4 8.5s-1.4 6.1-4 8.5c-2.6-2.4-4-5.3-4-8.5s1.4-6.1 4-8.5z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  chart: <path d="M5 20v-8M11 20V6M17 20v-9M3 20h18" />,
  network: (
    <>
      <circle cx="12" cy="12" r="2" />
      <circle cx="5" cy="6" r="1.6" />
      <circle cx="19" cy="6" r="1.6" />
      <circle cx="5" cy="18" r="1.6" />
      <circle cx="19" cy="18" r="1.6" />
      <path d="M6.2 7l4.3 3.6M17.8 7l-4.3 3.6M6.2 17l4.3-3.6M17.8 17l-4.3-3.6" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 5-14 14-14 0 9-6 14-14 14z" />
      <path d="M5 19l7-7" />
    </>
  ),
  drop: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </>
  ),
  cloud: <path d="M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6 1.5A3.5 3.5 0 0 1 17 18z" />,
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <path d="M4 13h3v5H5a1 1 0 0 1-1-1zM20 13h-3v5h2a1 1 0 0 0 1-1z" />
      <path d="M17 18v1a2 2 0 0 1-2 2h-2" />
    </>
  ),
  wifi: (
    <>
      <path d="M3 9a13 13 0 0 1 18 0M6 12.5a8.5 8.5 0 0 1 12 0M9 16a4 4 0 0 1 6 0" />
      <circle cx="12" cy="19" r="0.8" />
    </>
  ),
  sensor: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9.5 4v3M14.5 4v3M9.5 17v3M14.5 17v3M4 9.5h3M4 14.5h3M17 9.5h3M17 14.5h3" />
    </>
  ),
  bridge: (
    <>
      <path d="M3 17h18M4 17V8M20 17V8M4 8c3 6 5 7 8 7s5-1 8-7" />
      <path d="M8 17v-3M12 17v-2M16 17v-3" />
    </>
  ),
  hardhat: (
    <>
      <path d="M4 17h16M6 17a6 6 0 0 1 12 0" />
      <path d="M12 8v4M9 11V9M15 11V9" />
    </>
  ),
  truck: (
    <>
      <path d="M2 7h11v9H2zM13 10h4l3 3v3h-7z" />
      <circle cx="6" cy="17.5" r="1.6" />
      <circle cx="17" cy="17.5" r="1.6" />
    </>
  ),
  tractor: (
    <>
      <circle cx="7" cy="16" r="3.5" />
      <circle cx="18" cy="17" r="2" />
      <path d="M10.5 16H16M4 13V7h6l2 6M12 10h6l2 5" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </>
  ),
  thermometer: (
    <>
      <path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z" />
      <path d="M12 9v6" />
    </>
  ),
  layers: <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5" />,
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4M7 12l3-3 3 2 4-4" />
    </>
  ),
  dollar: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.5 0-2.7.8-2.7 2s1 1.7 2.7 2 2.7.8 2.7 2-1.2 2-2.7 2c-1 0-2-.5-2.5-1.5M12 6.5V8M12 16v1.5" />
    </>
  ),
  doc: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4M9.5 12h6M9.5 15.5h6" />
    </>
  ),
  tools: <path d="M14.5 6.5a4 4 0 0 0-5 5L3.5 17.5l3 3 6-6a4 4 0 0 0 5-5l-2.5 2.5-2-.5-.5-2z" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <circle cx="17.5" cy="9" r="2.3" />
      <path d="M15.3 19c0-2.2 1.6-3.9 3.7-4.3" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5h10v16M14 10h6v11M3 21h18" />
      <path d="M7.5 9h3M7.5 13h3M7.5 17h3" />
    </>
  ),
  bolt: <path d="M13 3L5 13h6l-1 8 8-10h-6z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 12.5l2.3 2.3L15.8 9" />
    </>
  ),
};

export function FeatureGlyph({ icon, className = "h-5 w-5" }: { icon: FeatureIconKey; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[icon]}
    </svg>
  );
}

export default function FeatureIcon({ icon, size = "md" }: { icon: FeatureIconKey; size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-14 w-14" : "h-11 w-11";
  const glyph = size === "lg" ? "h-6 w-6" : "h-5 w-5";
  return (
    <span className={`flex ${box} shrink-0 items-center justify-center rounded-full bg-accent text-white`}>
      <FeatureGlyph icon={icon} className={glyph} />
    </span>
  );
}
