import Link from "next/link";
import LogoMark from "./LogoMark";
import Button from "./Button";
import { contactDetails, solutionLinks } from "@/lib/nav";

const footerLink = "mb-2 block text-ink-soft hover:text-ink transition-colors";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-6 py-11 text-[13px] md:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
        <div>
          <div className="mb-3.5">
            <LogoMark size="h-10" />
          </div>
          <p className="max-w-[26ch] text-ink-soft">
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
        </div>

        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-ink">Get in touch</h4>
          <p className="mb-1.5 text-ink-soft">{contactDetails.address}</p>
          <p className="mb-1.5 text-ink-soft">{contactDetails.phones.join(" / ")}</p>
          <p className="mb-4 text-ink-soft">{contactDetails.email}</p>
          <Button href="/contact" className="!px-4.5 !py-2.5 !text-[13px]">
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
