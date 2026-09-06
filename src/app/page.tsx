import Link from "next/link";
import Button from "@/components/Button";
import HeroGlobe3D from "@/components/HeroGlobe3D";
import LogoMarquee from "@/components/LogoMarquee";
import Placeholder from "@/components/Placeholder";

export default function HomePage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-6 pb-21 pt-18 text-white"
        style={{
          background:
            "radial-gradient(120% 140% at 85% 0%, #005ACC 0%, #003880 55%, #002452 100%)",
        }}
      >
        <div className="mx-auto grid max-w-[1320px] items-center gap-2 md:grid-cols-2 md:gap-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[.14] bg-white/[.06] py-1.5 pl-2.5 pr-3.5 text-xs text-[#C7D4EA]">
              <span className="h-[7px] w-[7px] rounded-full bg-[#3DDC84] shadow-[0_0_0_3px_rgba(61,220,132,0.2)]" />
              Live across Africa and beyond
            </span>
            <h1 className="mt-6 max-w-[12ch] text-5xl leading-[1.08] font-extrabold text-white md:text-[64px]">
              Connectivity, <span className="text-[#338DFF]">built for the field.</span>
            </h1>
            <div className="mt-9 flex gap-3">
              <Button href="/contact">Request a Consultation</Button>
            </div>
            <div className="mt-10 flex gap-6 sm:gap-10">
              <div>
                <b className="block text-3xl text-white">50+</b>
                <span className="text-xs text-[#8FA0BF]">PROJECTS DEPLOYED</span>
              </div>
              <div>
                <b className="block text-3xl text-white">5</b>
                <span className="text-xs text-[#8FA0BF]">COUNTRIES SERVED</span>
              </div>
              <div>
                <b className="block text-3xl text-white">24/7</b>
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
          <h2 className="text-[28px] leading-[1.18] font-extrabold">Why teams work with Covvert</h2>
          <div className="mt-7 grid gap-5.5 md:grid-cols-3">
            <div className="rounded border border-line-soft bg-white p-5.5">
              <div className="mb-2.5 inline-block rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-bold text-accent">
                Built for the field
              </div>
              <h3 className="mb-2 text-[15px] font-extrabold">Hardware that survives deployment</h3>
              <p className="text-[13.5px] text-ink-soft">
                IoT devices engineered for the connectivity and environmental conditions of the markets we serve.
              </p>
            </div>
            <div className="rounded border border-line-soft bg-white p-5.5">
              <div className="mb-2.5 inline-block rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-bold text-accent">
                End-to-end
              </div>
              <h3 className="mb-2 text-[15px] font-extrabold">From design to completion report</h3>
              <p className="text-[13.5px] text-ink-soft">
                We take projects from consultancy and installation through to monitoring, evaluation and reporting.
              </p>
            </div>
            <div className="rounded border border-line-soft bg-white p-5.5">
              <div className="mb-2.5 inline-block rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-bold text-accent">
                Trusted locally
              </div>
              <h3 className="mb-2 text-[15px] font-extrabold">On-the-ground expertise</h3>
              <p className="text-[13.5px] text-ink-soft">
                Local implementation knowledge paired with technical depth in connectivity and IoT.
              </p>
            </div>
          </div>
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
          <div className="mt-7 grid gap-5.5 md:grid-cols-3">
            <div className="rounded border border-line-soft bg-white p-5.5">
              <h3 className="mb-2 text-[15px] font-extrabold">IoT Hardware</h3>
              <p className="text-[13.5px] text-ink-soft">
                Devices and equipment for connectivity, monitoring and data collection.
              </p>
              <Link href="/iot-hardware" className="mt-2 inline-block text-[13px] font-bold text-accent">
                Explore hardware →
              </Link>
            </div>
            <div className="rounded border border-line-soft bg-white p-5.5">
              <h3 className="mb-2 text-[15px] font-extrabold">Consultancy Services</h3>
              <p className="text-[13.5px] text-ink-soft">
                Technical advisory to plan and implement connectivity and IoT projects.
              </p>
              <Link href="/solutions/consultancy" className="mt-2 inline-block text-[13px] font-bold text-accent">
                Explore services →
              </Link>
            </div>
            <div className="rounded border border-line-soft bg-white p-5.5">
              <h3 className="mb-2 text-[15px] font-extrabold">Monitoring &amp; Evaluation</h3>
              <p className="text-[13.5px] text-ink-soft">
                Tracking deployed solutions and measuring project impact over time.
              </p>
              <Link href="/monitoring-evaluation" className="mt-2 inline-block text-[13px] font-bold text-accent">
                Explore M&amp;E →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-[28px] leading-[1.18] font-extrabold">Completed projects</h2>
          <p className="mt-2 max-w-[60ch] text-ink-soft">
            A selection of deployments across our connectivity and IoT work.
          </p>
          <div className="mt-6 grid gap-5.5 md:grid-cols-3">
            <Placeholder label="Photo: completed project #1" className="h-[170px]" />
            <Placeholder label="Photo: completed project #2" className="h-[170px]" />
            <Placeholder label="Photo: completed project #3" className="h-[170px]" />
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
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
          <Button href="/contact">Contact Us</Button>
          <Button href="/contact" variant="secondary-light">
            Send an Enquiry
          </Button>
        </div>
      </section>
    </>
  );
}
