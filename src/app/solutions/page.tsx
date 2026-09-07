import type { Metadata } from "next";
import Button from "@/components/Button";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Solutions & Services",
  description:
    "Solution mapping, IoT hardware sourcing & supply, connectivity solutions, project monitoring & evaluation, and completion reporting from Covvert Technologies.",
};

const rows = [
  {
    tag: "Solution Mapping",
    title: "Invest in the right technology, from day one",
    desc: "We help organizations identify, design, and validate the technology solutions that actually fit their operations — before a single shilling is spent on procurement.",
    href: "/solutions/consultancy",
    cta: "See Solution Mapping",
    photo: "Photo: consultancy / solution in use",
  },
  {
    tag: "IoT Hardware",
    title: "The right devices, sourced right, supported for the long run",
    desc: "We source, supply, and support high-quality IoT hardware — matched to your environment, not just your spec sheet.",
    href: "/iot-hardware",
    cta: "See IoT Hardware Sourcing & Supply",
    photo: "Photo: IoT hardware / device in the field",
  },
  {
    tag: "Connectivity",
    title: "One SIM. Every network. No borders.",
    desc: "Global IoT connectivity built on a cloud-native, distributed core — so your devices stay online, wherever they are.",
    href: "/solutions/technology",
    cta: "See Connectivity Solutions",
    photo: "Photo: technology / connectivity solution in use",
  },
  {
    tag: "Monitoring",
    title: "Know what's working, before it's too late to fix",
    desc: "Structured monitoring and evaluation that keeps technology-driven projects on track, evidence-backed, and accountable.",
    href: "/monitoring-evaluation",
    cta: "See Project Monitoring & Evaluation",
    photo: "Photo: monitoring dashboard / field data collection",
  },
  {
    tag: "Reporting",
    title: "Close every project with clarity, not loose ends",
    desc: "Comprehensive completion reporting that documents what was delivered, what it achieved, and what should happen next.",
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
          <h1 className="max-w-[30ch] text-[28px] leading-[1.18] font-extrabold">
            We don&apos;t simply sell technology. We help you move from challenges to connected solutions.
          </h1>
          <p className="mt-3 max-w-[60ch] text-ink-soft">
            From solutions to data, and from data to measurable results. Every area below has its own
            page with full detail.
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
