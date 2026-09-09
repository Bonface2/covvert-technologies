import type { Metadata } from "next";
import Button from "@/components/Button";
import IndustryIcon, { type IndustryIconKey } from "@/components/IndustryIcon";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industries Covvert Technologies serves — Logistics & Transport, Infrastructure & Construction, Agriculture & Agribusiness, Government & Public Sector, Development & Humanitarian, and Energy & Mining.",
};

const industries: { icon: IndustryIconKey; title: string; desc: string }[] = [
  {
    icon: "logistics",
    title: "Logistics and Transport",
    desc: "Real-time visibility into fleets, cargo, and distributed assets across supply chains — asset tracking, GPS devices, and connectivity that stays online across borders.",
  },
  {
    icon: "infrastructure",
    title: "Infrastructure and Construction",
    desc: "Connected monitoring for large-scale infrastructure and construction projects, from site conditions to structural and environmental sensors.",
  },
  {
    icon: "agriculture",
    title: "Agriculture and Agribusiness",
    desc: "Smart sensors and data — soil moisture, irrigation control, and crop monitoring — that help farms and agribusinesses operate more efficiently.",
  },
  {
    icon: "government",
    title: "Government and Public Sector",
    desc: "Technology and advisory support for public-sector service delivery, infrastructure monitoring, and accountability reporting.",
  },
  {
    icon: "development",
    title: "Development and Humanitarian",
    desc: "Evidence-based monitoring and evaluation, and completion reporting, for donor-funded and humanitarian programs that require credible tracking.",
  },
  {
    icon: "energy",
    title: "Energy and Mining",
    desc: "Remote monitoring, smart metering, and connectivity for energy and mining operations working in remote or distributed sites.",
  },
];

export default function IndustriesPage() {
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
            INDUSTRIES
          </span>
          <h1 className="mt-6 max-w-[20ch] text-4xl leading-[1.14] font-extrabold text-white md:text-[44px]">
            Industries we <span className="text-[#338DFF]">serve</span>
          </h1>
          <p className="mt-5 max-w-[65ch] text-[#C7D4EA]">
            COVVERT Technologies works across sectors, helping organisations harness technology,
            connectivity, data, and practical expertise to solve challenges, improve performance, and
            deliver measurable results.
          </p>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1320px] rounded border border-line-soft bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="rounded border border-line-soft bg-canvas p-5.5 transition-shadow hover:shadow-md"
              >
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft">
                  <IndustryIcon icon={industry.icon} className="h-5 w-5 text-accent" />
                </span>
                <h3 className="mb-1.5 text-[15px] font-extrabold">{industry.title}</h3>
                <p className="text-[13.5px] text-ink-soft">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-14 text-center text-white">
        <h2 className="text-[28px] leading-[1.18] font-extrabold text-white">
          Not sure where your organization fits?
        </h2>
        <p className="mt-2.5 text-[#B9BFC9]">Tell us what you&apos;re trying to build — we&apos;ll get back to you.</p>
        <div className="mt-5.5 flex justify-center gap-3">
          <Button href="/contact">Request a Consultation</Button>
          <Button href="/solutions" variant="secondary-light">
            View Solutions &amp; Services
          </Button>
        </div>
      </section>
    </>
  );
}
