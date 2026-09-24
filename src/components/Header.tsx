"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LogoMark from "./LogoMark";
import Button from "./Button";
import SolutionIcon from "./SolutionIcon";
import IndustryIcon from "./IndustryIcon";
import { industryLinks, industryPaths, solutionLinks, solutionPaths } from "@/lib/nav";

const navLink =
  "border-b-2 border-transparent px-0.5 py-1.5 text-[13.5px] font-semibold text-ink-soft hover:text-ink transition-colors";
const navLinkCurrent = "!text-ink !border-accent";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isCurrent = (href: string) => pathname === href;
  const solutionsCurrent = solutionPaths.includes(pathname);
  const industriesCurrent = industryPaths.includes(pathname);

  return (
    <header className="relative z-50 border-b border-line-soft bg-paper">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-6 py-2">
        <LogoMark size="h-[72px]" />

        <nav className="hidden items-center gap-7 md:flex">
          <Link href="/" className={`${navLink} ${isCurrent("/") ? navLinkCurrent : ""}`}>
            Home
          </Link>
          <Link href="/about" className={`${navLink} ${isCurrent("/about") ? navLinkCurrent : ""}`}>
            About Us
          </Link>

          <div className="group relative py-1.5">
            <Link
              href="/solutions"
              className={`${navLink} inline-flex items-center gap-1 ${solutionsCurrent ? navLinkCurrent : ""}`}
            >
              Solutions &amp; Services
              <span className="text-[9px] text-ink-soft">▾</span>
            </Link>
            <div className="invisible absolute left-1/2 top-full w-[460px] -translate-x-1/2 translate-y-1 rounded-lg border border-line-soft bg-white p-3.5 opacity-0 shadow-[0_14px_34px_rgba(20,24,32,0.14)] transition-all duration-150 group-hover:visible group-hover:translate-y-0.5 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0.5 group-focus-within:opacity-100">
              <div className="grid grid-cols-2 gap-1">
                {solutionLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-start gap-2.5 rounded-md p-3 hover:bg-accent-soft"
                  >
                    <SolutionIcon icon={link.icon} className="mt-0.5 h-[17px] w-[17px] shrink-0 text-ink-soft" />
                    <span className="flex flex-col gap-0.5">
                      <span className="text-[13px] font-semibold text-ink">{link.title}</span>
                      <span className="text-[11.5px] font-normal text-ink-soft">{link.blurb}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative py-1.5">
            <Link
              href="/industries"
              className={`${navLink} inline-flex items-center gap-1 ${industriesCurrent ? navLinkCurrent : ""}`}
            >
              Industries
              <span className="text-[9px] text-ink-soft">▾</span>
            </Link>
            <div className="invisible absolute left-1/2 top-full w-[460px] -translate-x-1/2 translate-y-1 rounded-lg border border-line-soft bg-white p-3.5 opacity-0 shadow-[0_14px_34px_rgba(20,24,32,0.14)] transition-all duration-150 group-hover:visible group-hover:translate-y-0.5 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0.5 group-focus-within:opacity-100">
              <div className="grid grid-cols-2 gap-1">
                {industryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-start gap-2.5 rounded-md p-3 hover:bg-accent-soft"
                  >
                    <IndustryIcon icon={link.icon} className="mt-0.5 h-[17px] w-[17px] shrink-0 text-ink-soft" />
                    <span className="flex flex-col gap-0.5">
                      <span className="text-[13px] font-semibold text-ink">{link.title}</span>
                      <span className="text-[11.5px] font-normal text-ink-soft">{link.blurb}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/contact" className={`${navLink} ${isCurrent("/contact") ? navLinkCurrent : ""}`}>
            Contact Us
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" className="!px-4.5 !py-2.5 !text-[13px]">
            Request a Consultation
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="h-0.5 w-6 bg-ink" />
          <span className="h-0.5 w-6 bg-ink" />
          <span className="h-0.5 w-6 bg-ink" />
        </button>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-1 border-t border-line-soft px-6 py-4 md:hidden">
          <Link href="/" className="rounded px-2 py-2.5 text-sm font-semibold text-ink">
            Home
          </Link>
          <Link href="/about" className="rounded px-2 py-2.5 text-sm font-semibold text-ink">
            About Us
          </Link>
          <span className="px-2 pt-2 text-xs font-bold uppercase text-ink-soft">Solutions &amp; Services</span>
          {solutionLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2.5 rounded px-4 py-2 text-sm text-ink-soft"
            >
              <SolutionIcon icon={link.icon} className="h-4 w-4 shrink-0" />
              {link.title}
            </Link>
          ))}
          <span className="px-2 pt-2 text-xs font-bold uppercase text-ink-soft">Industries</span>
          {industryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2.5 rounded px-4 py-2 text-sm text-ink-soft"
            >
              <IndustryIcon icon={link.icon} className="h-4 w-4 shrink-0" />
              {link.title}
            </Link>
          ))}
          <Link href="/contact" className="rounded px-2 py-2.5 text-sm font-semibold text-ink">
            Contact Us
          </Link>
          <Button href="/contact" className="mt-2 w-full">
            Request a Consultation
          </Button>
        </nav>
      )}
    </header>
  );
}
