import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import IndustryIcon, { type IndustryIconKey } from "@/components/IndustryIcon";
import ValueIcon, { type ValueIconKey } from "@/components/ValueIcon";
import StatIcon, { type StatIconKey } from "@/components/StatIcon";

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

const glanceStats: { icon: StatIconKey; value: string; label: string }[] = [
  { icon: "calendar", value: "2023", label: "FOUNDED IN NAIROBI" },
  { icon: "globe", value: "10+", label: "COUNTRIES SERVED" },
  { icon: "sectors", value: String(industries.length), label: "SECTORS SERVED" },
  { icon: "clock", value: "24/7", label: "FIELD SUPPORT" },
];

const values: { icon: ValueIconKey; title: string; desc: string }[] = [
  {
    icon: "innovation",
    title: "Innovation",
    desc: "We continuously seek smarter and better ways to solve problems.",
  },
  {
    icon: "integrity",
    title: "Integrity",
    desc: "We build relationships through honesty, accountability, and trust.",
  },
  {
    icon: "impact",
    title: "Impact",
    desc: "We focus on solutions that create practical, measurable, and lasting value.",
  },
];

export default function AboutPage() {
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
            ABOUT COVVERT TECHNOLOGIES
          </span>
          <div className="mt-6 grid gap-9 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div>
              <h1 className="text-5xl leading-[1.05] font-extrabold text-white md:text-[64px]">About Us</h1>
              <p className="mt-3 max-w-[22ch] text-xl font-semibold leading-snug text-[#C7D4EA] md:text-2xl">
                Turning Challenges into <span className="text-[#338DFF]">Smart Solutions</span> and
                Measurable Results
              </p>
            </div>
            <div>
              <p className="text-[#C7D4EA]">
                Covvert Technologies connects technology, connectivity, and insight to transform
                challenges into smart solutions and measurable results. We help organizations
                identify the right solutions, deploy intelligent technologies, keep connected
                assets reliably online across networks and borders, and turn data into actionable
                insights for better decisions and outcomes.
              </p>
              <p className="mt-4 font-semibold text-white">
                Our approach is simple: understand the challenge, connect the right solution, keep
                assets connected, measure what matters, and deliver results.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/contact">Request a Consultation</Button>
                <Button href="/solutions" variant="secondary-light">
                  View our solutions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1320px] rounded border border-line-soft bg-white p-8 shadow-sm md:p-12">
          <div className="grid items-center gap-9 md:grid-cols-2">
            <div className="relative mx-auto w-full max-w-[520px] md:order-2">
              <div className="absolute -inset-8 -z-10 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
              <div className="relative aspect-square w-full overflow-hidden rounded border border-line-soft bg-[#F6F7F9]">
                <Image
                  src="/images/jonah-kimotho-ceo.jpeg"
                  alt="Kimotho Maina, Chief Executive Officer of Covvert Technologies"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div>
              <div className="mb-2 text-lg font-bold text-accent">MESSAGE FROM THE CEO</div>
              <blockquote className="border-l-4 border-accent pl-5 text-xl leading-snug font-semibold text-ink">
                &ldquo;We founded COVVERT Technologies with a simple ambition: to help organisations
                turn complex challenges into practical, intelligent, and technology-driven
                solutions.&rdquo;
              </blockquote>
              <div className="mt-4 flex flex-col gap-3.5 text-ink-soft">
                <p>
                  With over 10 years of experience in the humanitarian and development space, Kimotho
                  Maina brings extensive experience leading complex projects, operations,
                  technology-enabled programmes, and strategic initiatives across Africa and
                  internationally.
                </p>
                <p>
                  This experience has shaped a delivery-focused approach centred on bridging the gap
                  between strategy and execution — helping organisations understand challenges,
                  connect the right solutions, implement effectively, and translate investments into
                  measurable results. It is this combination of practical field experience, technology,
                  and results-driven management that forms the foundation of COVVERT Technologies.
                </p>
                <p>
                  That philosophy is at the heart of COVVERT. From IoT and multi-network connectivity to
                  technology solutions, data, monitoring and evaluation, we connect the right
                  capabilities to help organisations move from ideas to implementation and from
                  implementation to measurable results.
                </p>
                <p>
                  As we grow, our commitment remains simple: understand the challenge, connect the right
                  solution, and deliver outcomes that matter.
                </p>
                <p className="font-semibold text-ink">
                  We are not just connecting devices or delivering technology. We are connecting
                  possibilities to outcomes.
                </p>
              </div>
              <p className="mt-4 font-bold text-ink">
                Kimotho Maina
                <span className="block font-normal text-ink-soft">Chief Executive Officer, COVVERT Technologies Ltd</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1320px] rounded border border-line-soft bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-9 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-extrabold text-accent">Our story</h2>
              <p className="mt-3.5 text-lg font-semibold text-ink">
                COVVERT Technologies was founded in 2023 in Nairobi with a simple ambition: to help
                organisations turn challenges into practical technology solutions and measurable
                results.
              </p>
              <div className="mt-3.5 flex flex-col gap-3.5 text-ink-soft">
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
            <div className="flex h-full min-h-[220px] flex-col rounded border border-line-soft bg-gradient-to-br from-accent-dark to-accent p-8 text-white">
              <div className="mb-5 text-xs font-bold text-[#C7D4EA]">COVVERT AT A GLANCE</div>
              <div className="grid flex-1 grid-cols-2 gap-4">
                {glanceStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col justify-center rounded border border-white/[.14] bg-white/[.06] p-5"
                  >
                    <StatIcon icon={stat.icon} className="mb-2.5 h-5 w-5 text-[#8FC1FF]" />
                    <b className="block text-3xl font-extrabold text-white">{stat.value}</b>
                    <span className="mt-1 text-[11px] font-bold text-[#C7D4EA]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-9 rounded border-l-4 border-accent bg-accent-soft p-6">
            <div className="mb-2 text-[11px] font-bold text-accent">OUR MISSION</div>
            <p className="text-lg font-semibold text-ink">
              To connect technology, expertise, and innovation to solve real-world challenges and
              deliver measurable results.
            </p>
          </div>

          <div className="mt-9">
            <h2 className="mb-4 text-xl font-extrabold">Our values</h2>
            <div className="grid gap-5.5 md:grid-cols-3">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded border border-line-soft bg-canvas p-5.5 transition-shadow hover:shadow-md"
                >
                  <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft">
                    <ValueIcon icon={v.icon} className="h-5 w-5 text-accent" />
                  </span>
                  <h3 className="mb-1.5 text-[15px] font-extrabold text-accent">{v.title}</h3>
                  <p className="text-[13.5px] text-ink-soft">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1320px] rounded border border-line-soft bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-[28px] leading-[1.18] font-extrabold">Industries we serve</h2>
          <p className="mt-2 max-w-[70ch] text-ink-soft">
            COVVERT Technologies works across sectors, helping organisations harness technology,
            connectivity, data, and practical expertise to solve challenges, improve performance, and
            deliver measurable results.
          </p>
          <div className="mt-6 grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
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
          <div className="mt-6">
            <Button href="/industries" variant="ghost">
              View all industries →
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-14 text-center text-white">
        <h2 className="text-[28px] leading-[1.18] font-extrabold text-white">Want to work with us?</h2>
        <p className="mt-2.5 text-[#B9BFC9]">Tell us what you&apos;re trying to build — we&apos;ll get back to you.</p>
        <div className="mt-5.5 flex justify-center gap-3">
          <Button href="/contact">Contact Us</Button>
          <Button href="/contact" variant="secondary-light">
            Send an Enquiry
          </Button>
        </div>
      </section>
    </>
  );
}
