import Link from "next/link";

export default function LogoMark({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-md border-2 text-[13px] font-extrabold ${
          dark ? "border-white text-white" : "border-ink text-ink"
        }`}
      >
        CT
      </span>
      <span className={`text-[15px] font-extrabold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        COVVERT <span className="text-accent">TECHNOLOGIES</span>
      </span>
    </Link>
  );
}
