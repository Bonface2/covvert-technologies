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
            SOLUTIONS &amp; SERVICES
          </span>
          <h1 className="mt-6 max-w-[30ch] text-4xl leading-[1.14] font-extrabold text-white md:text-[44px]">
            We don&apos;t simply sell technology. We help you move from challenges to{" "}
            <span className="text-[#338DFF]">connected solutions</span>.
          </h1>
          <p className="mt-5 max-w-[60ch] text-[#C7D4EA]">
            From solutions to data, and from data to measurable results. Every area below has its own
            page with full detail.
          </p>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-6">
          {rows.map((row, i) => (
            <div
              key={row.href}
              className="rounded border border-line-soft bg-white p-8 shadow-sm md:p-12"
            >
              <div className="grid items-center gap-9 md:grid-cols-2">
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
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink px-6 py-14 text-center text-white">
        <h2 className="text-[28px] leading-[1.18] font-extrabold text-white">
          Not sure which solution fits your project?
        </h2>
        <p className="mt-2.5 text-[#B9BFC9]">Tell us what you&apos;re trying to build — we&apos;ll get back to you.</p>
        <div className="mt-5.5 flex justify-center gap-3">
          <Button href="/contact">Request a Consultation</Button>
          <Button href="/industries" variant="secondary-light">
            View Industries We Serve
          </Button>
        </div>
      </section>
    </>
  );
}
