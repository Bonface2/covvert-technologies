import Link from "next/link";
import LogoMark from "./LogoMark";
import Button from "./Button";
import { PinIcon, PhoneIcon, MailIcon } from "./ContactIcons";
import { contactDetails, industryLinks, solutionLinks } from "@/lib/nav";

const footerLink = "mb-2 block text-ink-soft hover:text-ink transition-colors";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-6 py-11 text-[13px] md:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
        <div>
          <div className="mb-4 flex justify-center md:justify-start">
            <LogoMark size="h-16" />
          </div>
          <p className="mx-auto max-w-[28ch] text-center text-[15px] leading-relaxed text-ink-soft md:mx-0 md:text-left">
            Technology, <span className="font-semibold text-ink">connected to outcomes.</span>
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-ink">Services</h4>
          {solutionLinks.map((link) => (
            <div key={link.href}>
              <Link href={link.href} className={footerLink}>
                {link.title}
              </Link>
              {link.icon === "iot" && (
                <Link href="/iot-hardware/catalogue" className={`${footerLink} pl-3 text-[12px]`}>
                  ↳ Product Catalogue
                </Link>
              )}
            </div>
          ))}
        </div>

        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-ink">Company</h4>
          <Link href="/about" className={footerLink}>
            About Us
          </Link>
          <Link href="/industries" className={footerLink}>
            Industries
          </Link>
          {industryLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`${footerLink} pl-3 text-[12px]`}>
              ↳ {link.title}
            </Link>
          ))}
        </div>

        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-ink">Get in touch</h4>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5 text-ink-soft">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <PinIcon className="h-3.5 w-3.5" />
              </span>
              {contactDetails.address}
            </div>
            <div className="flex items-center gap-2.5 text-ink-soft">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <PhoneIcon className="h-3.5 w-3.5" />
              </span>
              {contactDetails.phones.join(" / ")}
            </div>
            <div className="flex items-center gap-2.5 text-ink-soft">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <MailIcon className="h-3.5 w-3.5" />
              </span>
              {contactDetails.email}
            </div>
          </div>
          <Button href="/contact" className="mt-4 !px-4.5 !py-2.5 !text-[13px]">
            Request a Consultation
          </Button>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1320px] justify-between border-t border-line-soft px-6 py-5 text-xs text-[#9AA1AC]">
        <span>© {new Date().getFullYear()} Covvert Technologies Ltd</span>
      </div>
    </footer>
  );
}
