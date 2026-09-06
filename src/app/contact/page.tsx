import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";
import { contactDetails } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Covvert Technologies Ltd — request a consultation or send an enquiry.",
};

export default function ContactPage() {
  const digits = contactDetails.phones[0].replace(/[^0-9]/g, "");

  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-2 text-xs font-bold text-ink-soft">CONTACT US</div>
        <div className="grid gap-9 md:grid-cols-2">
          <div>
            <h1 className="text-[28px] leading-[1.18] font-extrabold">Get in touch</h1>
            <p className="mt-2.5 max-w-[46ch] text-ink-soft">
              Send an enquiry, request a consultation or ask about a specific product — the form
              below routes to the same enquiry inbox.
            </p>

            <div className="mt-7 flex flex-col gap-2.5">
              <div className="flex gap-2.5 text-[13.5px]">
                <span className="mt-0.5 h-[18px] w-[18px] shrink-0 rounded border-[1.5px] border-ink-soft" />
                {contactDetails.address}
              </div>
              <div className="flex gap-2.5 text-[13.5px]">
                <span className="mt-0.5 h-[18px] w-[18px] shrink-0 rounded border-[1.5px] border-ink-soft" />
                {contactDetails.phones.join(" / ")}
              </div>
              <div className="flex gap-2.5 text-[13.5px]">
                <span className="mt-0.5 h-[18px] w-[18px] shrink-0 rounded border-[1.5px] border-ink-soft" />
                {contactDetails.email}
              </div>
              <div className="flex gap-2.5 text-[13.5px]">
                <span className="mt-0.5 h-[18px] w-[18px] shrink-0 rounded border-[1.5px] border-ink-soft" />
                {contactDetails.site}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
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
  );
}
