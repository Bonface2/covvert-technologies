import type { Metadata } from "next";
import Button from "@/components/Button";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Solutions & Services",
  description:
    "Solution mapping, IoT hardware, technology & connectivity solutions, monitoring & evaluation, and completion reporting from Covvert Technologies.",
};

const rows = [
  {
    tag: "Consultancy",
    title: "Consultancy services",
    desc: "We help organizations identify the right technology solutions for their operational needs before procurement and implementation — needs assessments, solution architecture, infrastructure planning and implementation roadmaps.",
    href: "/solutions/consultancy",
    cta: "See Consultancy Services",
    photo: "Photo: consultancy / solution in use",
  },
  {
    tag: "Technology",
    title: "Technology & IoT solutions",
    desc: "We specialize in sourcing and supplying high-quality Internet of Things (IoT) devices — environmental monitoring, smart agriculture, energy metering, asset tracking and industrial monitoring solutions.",
    href: "/solutions/technology",
    cta: "See Technology & IoT Solutions",
    photo: "Photo: technology / IoT solution in use",
  },
  {
    tag: "Hardware",
    title: "IoT hardware",
    desc: "Devices and equipment for connectivity, monitoring and data collection, with specifications and imagery supplied by the client.",
    href: "/iot-hardware",
    cta: "See IoT Hardware",
    photo: "Photo: IoT hardware / device in the field",
  },
  {
    tag: "Monitoring",
    title: "Monitoring & evaluation",
    desc: "Structured monitoring and evaluation services to ensure projects remain on track and deliver measurable results.",
    href: "/monitoring-evaluation",
    cta: "See Monitoring & Evaluation",
    photo: "Photo: monitoring dashboard / field data collection",
  },
  {
    tag: "Reporting",
    title: "Completion reporting",
    desc: "How Covvert documents project achievements and formally closes projects with comprehensive completion reports.",
    href: "/completion-reporting",
    cta: "See Completion Reporting",
    photo: "Photo/document preview: sample completion report",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-2 text-xs font-bold text-ink-soft">SOLUTIONS &amp; SERVICES</div>
          <h1 className="max-w-[24ch] text-[28px] leading-[1.18] font-extrabold">
            Consultancy and technology, delivered together
          </h1>
          <p className="mt-3 max-w-[46ch] text-ink-soft">
            Every solution below has its own page with full detail.
          </p>
        </div>
      </section>

      {rows.map((row, i) => (
        <section key={row.href} className={i % 2 === 0 ? "bg-canvas px-6 py-14" : "px-6 py-14"}>
          <div className="mx-auto grid max-w-[1320px] items-center gap-9 md:grid-cols-2">
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <Placeholder label={row.photo} className="h-[260px]" />
            </div>
            <div>
              <div className="mb-2.5 inline-block rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-bold text-accent">
                {row.tag}
              </div>
              <h2 className="text-xl font-extrabold">{row.title}</h2>
              <p className="mt-2.5 text-ink-soft">{row.desc}</p>
              <div className="mt-4">
                <Button href={row.href} variant="ghost">
                  {row.cta}
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="px-6 py-14 text-center">
        <h2 className="text-xl font-bold">Not sure which solution fits your project?</h2>
        <div className="mt-4 flex justify-center">
          <Button href="/contact">Request a Consultation</Button>
        </div>
      </section>
    </>
  );
}
