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
      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-2 text-xs font-bold text-ink-soft">INDUSTRIES</div>
          <h1 className="max-w-[28ch] text-[28px] leading-[1.18] font-extrabold">
            Industries we serve
          </h1>
          <p className="mt-3 max-w-[65ch] text-ink-soft">
            COVVERT Technologies works across sectors, helping organisations harness technology,
            connectivity, data, and practical expertise to solve challenges, improve performance, and
            deliver measurable results.
          </p>
        </div>
      </section>

      <section className="bg-canvas px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry.title} className="rounded border border-line-soft bg-white p-5.5">
                <IndustryIcon icon={industry.icon} className="mb-3 h-6 w-6 text-accent" />
                <h3 className="mb-1.5 text-[15px] font-extrabold">{industry.title}</h3>
                <p className="text-[13.5px] text-ink-soft">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 text-center">
        <h2 className="text-xl font-bold">Not sure where your organization fits?</h2>
        <div className="mt-4 flex justify-center">
          <Button href="/contact">Request a Consultation</Button>
        </div>
      </section>
    </>
  );
}
