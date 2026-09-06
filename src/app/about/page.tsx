import type { Metadata } from "next";
import Button from "@/components/Button";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Covvert Technologies Ltd — our vision, mission, values, and the industries we serve.",
};

const industries = [
  "Government & Public Sector",
  "Development Partners",
  "Non-Governmental Organizations (NGOs)",
  "Agriculture & Food Security",
  "Environmental & Climate Monitoring",
  "Water & Sanitation",
  "Energy & Utilities",
  "Education & Healthcare",
  "Infrastructure, Logistics & Transport",
  "Corporate & Private Sector",
];

const values = ["Integrity", "Innovation", "Excellence", "Accountability", "Collaboration", "Customer Focus"];

export default function AboutPage() {
  return (
    <>
      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-2 text-xs font-bold text-ink-soft">ABOUT COVVERT TECHNOLOGIES</div>
          <div className="grid items-center gap-9 md:grid-cols-2">
            <div>
              <h1 className="text-[28px] leading-[1.18] font-extrabold">
                A Kenyan technology and consultancy company turning data into decisions
              </h1>
              <p className="mt-3.5 max-w-[46ch] text-ink-soft">
                Covvert Technologies Ltd specializes in the design, deployment, and evaluation of
                technology-driven solutions that enable organizations to make informed decisions, improve
                operational efficiency, and achieve measurable project outcomes. We provide end-to-end
                services that bridge the gap between identifying organizational needs and delivering
                practical, data-driven solutions.
              </p>
            </div>
            <Placeholder label="Photo: company / team photograph" className="h-[220px]" />
          </div>
        </div>
      </section>

      <section className="bg-canvas px-6 py-14">
        <div className="mx-auto max-w-[1320px] grid gap-9 md:grid-cols-2">
          <div className="rounded border border-line-soft bg-white p-6">
            <div className="mb-2 text-[11px] font-bold text-accent">VISION</div>
            <p className="text-ink-soft">
              To be a leading provider of innovative technology and project delivery solutions that
              empower organizations through intelligent systems, real-time data, and measurable results.
            </p>
          </div>
          <div className="rounded border border-line-soft bg-white p-6">
            <div className="mb-2 text-[11px] font-bold text-accent">MISSION</div>
            <p className="text-ink-soft">
              To deliver reliable technology solutions and professional consultancy services that
              transform organizational challenges into sustainable, data-driven outcomes through
              innovation, quality, and integrity.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-7 max-w-[1320px]">
          <h2 className="mb-4 text-xl font-extrabold">Core values</h2>
          <div className="flex flex-wrap gap-3">
            {values.map((v) => (
              <span
                key={v}
                className="rounded-full bg-accent-soft px-4 py-1.5 text-[13px] font-bold text-accent"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-[28px] leading-[1.18] font-extrabold">Industries we serve</h2>
          <p className="mt-2 max-w-[60ch] text-ink-soft">
            Connectivity and IoT solutions applied across sectors.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
            {industries.map((industry) => (
              <div key={industry} className="rounded border border-line-soft bg-white p-4 text-center">
                <Placeholder label="Icon" className="mb-3 h-[60px]" />
                <h3 className="text-[13px] font-bold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-[28px] leading-[1.18] font-extrabold">Our team</h2>
          <div className="mt-6 grid grid-cols-2 gap-5.5 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col gap-3.5">
                <Placeholder label="Photo: team member" className="h-[140px]" />
                <p className="text-[12.5px] font-bold">Name — Role</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 text-center">
        <h2 className="text-xl font-bold">Want to work with us?</h2>
        <div className="mt-4 flex justify-center">
          <Button href="/contact">Contact Us</Button>
        </div>
      </section>
    </>
  );
}
