import Link from "next/link";
import LogoMark from "./LogoMark";
import { contactDetails } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 px-6 py-9 text-[13px] md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-3.5">
            <LogoMark />
          </div>
          <p className="mb-1.5 text-ink-soft">{contactDetails.address}</p>
          <p className="mb-1.5 text-ink-soft">{contactDetails.phones.join(" / ")}</p>
          <p className="mb-1.5 text-ink-soft">{contactDetails.email}</p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold text-ink">Site</h4>
          <Link href="/about" className="mb-1.5 block text-ink-soft hover:text-ink">
            About Us
          </Link>
          <Link href="/solutions" className="mb-1.5 block text-ink-soft hover:text-ink">
            Solutions &amp; Services
          </Link>
          <Link href="/iot-hardware" className="mb-1.5 block text-ink-soft hover:text-ink">
            IoT Hardware
          </Link>
          <Link href="/monitoring-evaluation" className="mb-1.5 block text-ink-soft hover:text-ink">
            Monitoring &amp; Evaluation
          </Link>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold text-ink">Get in touch</h4>
          <Link href="/completion-reporting" className="mb-1.5 block text-ink-soft hover:text-ink">
            Completion Reporting
          </Link>
          <Link href="/contact" className="mb-1.5 block text-ink-soft hover:text-ink">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1320px] justify-between border-t border-line-soft px-6 py-5 text-xs text-[#9AA1AC]">
        <span>© {new Date().getFullYear()} Covvert Technologies Ltd</span>
      </div>
    </footer>
  );
}
