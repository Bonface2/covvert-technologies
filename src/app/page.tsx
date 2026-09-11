import Link from "next/link";
import Button from "@/components/Button";
import CountUpStat from "@/components/CountUpStat";
import HeroGlobe3D from "@/components/HeroGlobe3D";
import LogoMarquee from "@/components/LogoMarquee";
import SolutionIcon from "@/components/SolutionIcon";
import WhyChooseIcon, { type WhyChooseIconKey } from "@/components/WhyChooseIcon";

const whyChooseItems: { icon: WhyChooseIconKey; title: string; desc: string }[] = [
  {
    icon: "client-centred",
    title: "Client-Centred",
    desc: "We understand your challenge before designing the solution.",
  },
  {
    icon: "connected",
    title: "Connected",
    desc: "We connect people, devices, systems, and data.",
  },
  {
    icon: "technology-driven",
    title: "Technology-Driven",
    desc: "We embrace innovative technologies that create practical value.",
  },
  {
    icon: "solution-focused",
    title: "Solution-Focused",
    desc: "We deliver solutions designed to work, scale, and make an impact.",
  },
  {
    icon: "agile",
    title: "Agile",
    desc: "We adapt quickly and think creatively to solve complex problems.",
  },
  {
    icon: "results-oriented",
    title: "Results-Oriented",
    desc: "We measure success through tangible outcomes and measurable value.",
  },
];

const whatWeDoItems: { icon: "iot" | "consultancy" | "technology" | "me" | "reporting"; title: string; desc: string; href: string; cta: string }[] = [
  {
    icon: "iot",
    title: "Technology & IoT",
    desc: "Sourcing and deploying smart hardware and IoT technologies for real-world applications.",
    href: "/iot-hardware",
    cta: "Explore hardware →",
  },
  {
    icon: "consultancy",
    title: "Solution Mapping & Advisory",
    desc: "Identifying the right technologies and approaches to solve specific organisational challenges.",
    href: "/solutions/consultancy",
    cta: "Explore solution mapping →",
  },
  {
    icon: "technology",
    title: "Connectivity Solutions",
    desc: "Connecting people, devices, systems, and data through reliable connectivity solutions.",
    href: "/solutions/technology",
    cta: "Explore connectivity →",
  },
  {
    icon: "me",
    title: "Monitoring, Evaluation & Data",
    desc: "Turning project data into insights that improve performance and decision-making.",
    href: "/monitoring-evaluation",
    cta: "Explore M&E →",
  },
  {
    icon: "reporting",
    title: "Completion Reporting",
    desc: "Documenting implementation, achievements, results, and lessons through evidence-based reporting.",
    href: "/completion-reporting",
    cta: "Explore reporting →",
  },
];

export default function HomePage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-6 pb-21 pt-18 text-white"
        style={{
          backgroundColor: "#002452",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1.6px), linear-gradient(115deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(245deg, rgba(255,255,255,0.05) 1px, transparent 1px), radial-gradient(120% 140% at 85% 0%, #005ACC 0%, #003880 55%, #002452 100%)",
          backgroundSize: "26px 26px, 52px 52px, 52px 52px, 100% 100%",
        }}
      >
        <div className="mx-auto grid max-w-[1320px] items-center gap-2 md:grid-cols-2 md:gap-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[.14] bg-white/[.06] py-1.5 pl-2.5 pr-3.5 text-xs text-[#C7D4EA]">
              <span className="h-[7px] w-[7px] rounded-full bg-[#3DDC84] shadow-[0_0_0_3px_rgba(61,220,132,0.2)]" />
              Live across Africa and beyond
            </span>
            <h1 className="mt-6 max-w-[13ch] text-5xl leading-[1.08] font-extrabold text-white md:text-[64px]">
              Technology, <span className="text-[#338DFF]">connected to outcomes.</span>
            </h1>
            <div className="mt-9 flex gap-3">
              <Button href="/contact">Request a Consultation</Button>
            </div>
            <div className="mt-10 flex gap-6 sm:gap-10">
              <div>
                <b className="block text-3xl text-white">
                  <CountUpStat end={10} suffix="+" />
                </b>
                <span className="text-xs text-[#8FA0BF]">COUNTRIES SERVED</span>
              </div>
              <div>
                <b className="block text-3xl text-white">
                  <CountUpStat end={24} suffix="/7" />
                </b>
                <span className="text-xs text-[#8FA0BF]">FIELD SUPPORT</span>
              </div>
            </div>
          </div>
          <div className="relative h-[340px] md:h-[560px]">
            <HeroGlobe3D />
          </div>
        </div>
      </section>

      <section className="bg-canvas px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-[28px] leading-[1.18] font-extrabold">Why choose Covvert Technologies?</h2>
          <p className="mt-2 max-w-[60ch] text-ink-soft">
            We don&apos;t just provide technology. We connect the right solutions to real-world
            challenges.
          </p>
          <div className="mt-7 grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.map((item) => (
              <div key={item.title} className="rounded border border-line-soft bg-white p-5.5">
                <WhyChooseIcon icon={item.icon} className="mb-3 h-6 w-6 text-accent" />
                <h3 className="mb-1.5 text-[15px] font-extrabold">{item.title}</h3>
                <p className="text-[13px] text-ink-soft">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg font-extrabold tracking-tight text-ink">
            Understand. <span className="text-accent">Connect.</span> Innovate. Deliver.
          </p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-[28px] leading-[1.18] font-extrabold">What we do</h2>
            <Button href="/solutions" variant="ghost">
              View all solutions →
            </Button>
          </div>
          <div className="mt-7 grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDoItems.map((item) => (
              <div key={item.title} className="rounded border border-line-soft bg-white p-5.5">
                <SolutionIcon icon={item.icon} className="mb-3 h-6 w-6 text-accent" />
                <h3 className="mb-2 text-[15px] font-extrabold">{item.title}</h3>
                <p className="text-[13.5px] text-ink-soft">{item.desc}</p>
                <Link href={item.href} className="mt-2 inline-block text-[13px] font-bold text-accent">
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-xl font-bold text-ink-soft">Trusted by / working alongside</h2>
          <div className="mt-5">
            <LogoMarquee />
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-14 text-center text-white">
        <h2 className="text-[28px] leading-[1.18] font-extrabold text-white">Have a project in mind?</h2>
        <p className="mt-2.5 text-[#B9BFC9]">Tell us what you&apos;re trying to build — we&apos;ll get back to you.</p>
        <div className="mt-5.5 flex justify-center gap-3">
          <Button href="/contact">Send an Enquiry</Button>
        </div>
      </section>
    </>
  );
}
