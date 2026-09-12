import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";
import { PinIcon, PhoneIcon, MailIcon, GlobeIcon } from "@/components/ContactIcons";
import { contactDetails } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Covvert Technologies Ltd — request a consultation or send an enquiry.",
};

export default function ContactPage() {
  const digits = contactDetails.phones[0].replace(/[^0-9]/g, "");

  return (
    <>
      <section
        className="relative overflow-hidden px-6 pt-16 pb-14 text-white"
        style={{
          backgroundColor: "#002452",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1.6px), linear-gradient(115deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(245deg, rgba(255,255,255,0.05) 1px, transparent 1px), radial-gradient(120% 140% at 85% 0%, #005ACC 0%, #003880 55%, #002452 100%)",
          backgroundSize: "26px 26px, 52px 52px, 52px 52px, 100% 100%",
        }}
      >
        <div className="mx-auto max-w-[1320px] px-8 md:px-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[.14] bg-white/[.06] py-1.5 pl-3.5 pr-3.5 text-xs font-bold text-[#C7D4EA]">
            CONTACT US
          </span>
          <h1 className="mt-6 max-w-[16ch] text-4xl leading-[1.14] font-extrabold text-white md:text-[44px]">
            Get in <span className="text-[#338DFF]">touch</span>
          </h1>
          <p className="mt-5 max-w-[46ch] text-[#C7D4EA]">
            Send an enquiry, request a consultation or ask about a specific product — the form
            below routes to the same enquiry inbox.
          </p>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1320px] rounded border border-line-soft bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-9 md:grid-cols-2">
            <div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-[13.5px] text-ink-soft">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <PinIcon />
                  </span>
                  {contactDetails.address}
                </div>
                <div className="flex items-center gap-3 text-[13.5px] text-ink-soft">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <PhoneIcon />
                  </span>
                  {contactDetails.phones.join(" / ")}
                </div>
                <div className="flex items-center gap-3 text-[13.5px] text-ink-soft">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <MailIcon />
                  </span>
                  {contactDetails.email}
                </div>
                <div className="flex items-center gap-3 text-[13.5px] text-ink-soft">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <GlobeIcon />
                  </span>
                  {contactDetails.site}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={`tel:${digits}`} variant="secondary">
                  Call Us
                </Button>
                <Button href={`mailto:${contactDetails.email}`} variant="secondary">
                  Email Us
                </Button>
                <Button href={`https://wa.me/${digits}`} variant="whatsapp">
                  WhatsApp Us
                </Button>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
