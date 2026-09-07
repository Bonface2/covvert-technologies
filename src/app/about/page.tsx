import type { Metadata } from "next";
import Button from "@/components/Button";
import Placeholder from "@/components/Placeholder";
import IndustryIcon, { type IndustryIconKey } from "@/components/IndustryIcon";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Covvert Technologies connects technology, connectivity, and insight to transform challenges into smart solutions and measurable results.",
};

const industries: { icon: IndustryIconKey; title: string; desc: string }[] = [
  {
    icon: "logistics",
    title: "Logistics and Transport",
    desc: "Real-time visibility into fleets, cargo, and distributed assets across supply chains.",
  },
  {
    icon: "infrastructure",
    title: "Infrastructure and Construction",
    desc: "Connected monitoring for large-scale infrastructure and construction projects.",
  },
  {
    icon: "agriculture",
    title: "Agriculture and Agribusiness",
    desc: "Smart sensors and data that help farms and agribusinesses operate more efficiently.",
  },
  {
    icon: "government",
    title: "Government and Public Sector",
    desc: "Technology and advisory support for public-sector service delivery and accountability.",
  },
  {
    icon: "development",
    title: "Development and Humanitarian",
    desc: "Evidence-based monitoring and reporting for donor-funded and humanitarian programs.",
  },
  {
    icon: "energy",
    title: "Energy and Mining",
    desc: "Remote monitoring and connectivity for energy and mining operations in the field.",
  },
];

const values = [
  {
    title: "Innovation",
    desc: "We continuously seek smarter and better ways to solve problems.",
  },
  {
    title: "Integrity",
    desc: "We build relationships through honesty, accountability, and trust.",
  },
  {
    title: "Impact",
    desc: "We focus on solutions that create practical, measurable, and lasting value.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-2 text-xs font-bold text-ink-soft">ABOUT COVVERT TECHNOLOGIES</div>
          <div className="grid items-center gap-9 md:grid-cols-2">
            <div>
              <h1 className="text-[28px] leading-[1.18] font-extrabold">
                Turning Challenges into Smart Solutions and Measurable Results
              </h1>
              <p className="mt-3.5 max-w-[52ch] text-ink-soft">
                Covvert Technologies connects technology, connectivity, and insight to transform
                challenges into smart solutions and measurable results. We help organizations identify
                the right solutions, deploy intelligent technologies, keep connected assets reliably
                online across networks and borders, and turn data into actionable insights for better
                decisions and outcomes.
              </p>
              <p className="mt-3.5 max-w-[52ch] font-semibold text-ink">
                Our approach is simple: understand the challenge, connect the right solution, keep
                assets connected, measure what matters, and deliver results.
              </p>
            </div>
            <Placeholder label="Photo: company / team photograph" className="h-[220px]" />
          </div>
        </div>
      </section>

      <section className="bg-canvas px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid items-center gap-9 md:grid-cols-2">
            <Placeholder label="Photo: Jonah Kimotho, Founder & CEO" className="h-[280px] md:order-2" />
            <div>
              <div className="mb-2 text-[11px] font-bold text-accent">MESSAGE FROM THE CEO</div>
              <div className="flex flex-col gap-3.5 text-ink-soft">
                <p>
                  &ldquo;At COVVERT Technologies, we believe technology should do more than solve
                  problems—it should create possibilities, connect people and assets, and deliver
                  measurable value.
                </p>
                <p>
                  We founded COVVERT with a simple ambition: to help organisations navigate complex
                  challenges with practical, intelligent and technology-driven solutions. From IoT and
                  seamless multi-network connectivity to data, monitoring and evaluation, we bring
                  together technology, insight and expertise to turn ideas into solutions and solutions
                  into results.
                </p>
                <p>
                  As we grow, our commitment remains the same: to understand our clients&rsquo; needs,
                  deliver solutions that work in the real world, and build lasting partnerships that
                  create sustainable impact.
                </p>
                <p>
                  We are not just connecting devices or delivering technology. We are connecting
                  possibilities to outcomes.&rdquo;
                </p>
              </div>
              <p className="mt-4 font-bold text-ink">
                Jonah Kimotho
                <span className="block font-normal text-ink-soft">Founder &amp; CEO, Covvert Technologies Ltd</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-9 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-extrabold">Our story</h2>
              <div className="mt-3.5 flex flex-col gap-3.5 text-ink-soft">
                <p>
                  COVVERT Technologies was founded in 2023 in Nairobi with a simple ambition: to help
                  organisations turn challenges into practical technology solutions and measurable
                  results.
                </p>
                <p>
                  We recognised that many organisations struggle not because solutions don&apos;t exist,
                  but because finding the right technology, the right expertise, and the right
                  implementation approach can be difficult. COVVERT was created to bridge that gap.
                </p>
                <p>
                  What began as a technology solutions venture has grown into a broader technology and
                  consultancy partner, bringing together technology sourcing, IoT solutions, data,
                  project monitoring, and practical advisory services.
                </p>
                <p>
                  As we continue to grow, our focus remains unchanged — understand the challenge,
                  connect the right solution, and deliver measurable value.
                </p>
              </div>
            </div>
            <Placeholder label="Photo: founding moment / early project / office" className="h-full min-h-[220px]" />
          </div>

          <div className="mt-9 rounded border border-line-soft bg-white p-6">
            <div className="mb-2 text-[11px] font-bold text-accent">OUR MISSION</div>
            <p className="text-ink-soft">
              To connect technology, expertise, and innovation to solve real-world challenges and
              deliver measurable results.
            </p>
          </div>

          <div className="mt-9">
            <h2 className="mb-4 text-xl font-extrabold">Our values</h2>
            <div className="grid gap-5.5 md:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="rounded border border-line-soft bg-white p-5.5">
                  <h3 className="mb-1.5 text-[15px] font-extrabold text-accent">{v.title}</h3>
                  <p className="text-[13.5px] text-ink-soft">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-[28px] leading-[1.18] font-extrabold">Industries we serve</h2>
          <p className="mt-2 max-w-[70ch] text-ink-soft">
            COVVERT Technologies works across sectors, helping organisations harness technology,
            connectivity, data, and practical expertise to solve challenges, improve performance, and
            deliver measurable results.
          </p>
          <div className="mt-6 grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry.title} className="rounded border border-line-soft bg-white p-5.5">
                <IndustryIcon icon={industry.icon} className="mb-3 h-6 w-6 text-accent" />
                <h3 className="mb-1.5 text-[15px] font-extrabold">{industry.title}</h3>
                <p className="text-[13.5px] text-ink-soft">{industry.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button href="/industries" variant="ghost">
              View all industries →
            </Button>
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
