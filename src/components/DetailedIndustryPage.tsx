import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Placeholder from "@/components/Placeholder";
import ApproachSteps from "@/components/ApproachSteps";
import FeatureIcon, { FeatureGlyph } from "@/components/FeatureIcon";
import type { Industry } from "@/lib/industries";

const card = "mx-auto max-w-[1320px] rounded border border-line-soft bg-white p-8 shadow-sm md:p-12";

function Eyebrow({ children }: { children: string }) {
  return <p className="text-[11px] font-bold tracking-[0.14em] text-accent">{children}</p>;
}

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mt-2 text-2xl leading-[1.15] font-extrabold text-accent md:text-[32px]">{children}</h2>;
}

export default function DetailedIndustryPage({ industry }: { industry: Industry }) {
  const { overview, spotlight, solutions, useCases, process, audience, closing } = industry;

  return (
    <>
      <section
        className="relative overflow-hidden px-6 pt-12 pb-14 text-white"
        style={{
          backgroundColor: "#002452",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1.6px), linear-gradient(115deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(245deg, rgba(255,255,255,0.05) 1px, transparent 1px), radial-gradient(120% 140% at 85% 0%, #005ACC 0%, #003880 55%, #002452 100%)",
          backgroundSize: "26px 26px, 52px 52px, 52px 52px, 100% 100%",
        }}
      >
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-8 md:px-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <nav className="flex items-center gap-2 text-[13px] text-[#C7D4EA]">
              <Link href="/industries" className="hover:text-white">
                Industries
              </Link>
              <span aria-hidden>›</span>
              <span className="text-white">{industry.name}</span>
            </nav>
            <h1 className="mt-6 text-5xl leading-[1.05] font-extrabold text-white md:text-[60px]">{industry.name}</h1>
            <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-[#C7D4EA]">{industry.tagline}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact">Talk to Our Team</Button>
              <Button href="/solutions" variant="secondary-light">
                Explore Our Solutions
              </Button>
            </div>
          </div>
          {industry.heroImage && (
            <div className="relative h-[280px] overflow-hidden rounded-lg border border-white/15 shadow-2xl md:h-[340px]">
              <Image src={industry.heroImage} alt={industry.name} fill priority className="object-cover" />
            </div>
          )}
        </div>
      </section>

      <section className="px-6 py-10">
        <div className={card}>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Eyebrow>{overview.eyebrow}</Eyebrow>
              <SectionHeading>{overview.heading}</SectionHeading>
              <div className="mt-4 flex flex-col gap-4">
                {overview.body.map((p, i) => (
                  <p key={i} className="text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2 xl:grid-cols-3">
              {overview.items.map((item) => (
                <div key={item.title}>
                  <FeatureIcon icon={item.icon} />
                  <h3 className="mt-3 mb-1 text-[14.5px] font-extrabold">{item.title}</h3>
                  <p className="text-[13px] text-ink-soft">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className={card}>
          <div className="grid items-center gap-9 md:grid-cols-2">
            {spotlight.image ? (
              <div className="relative h-[300px] overflow-hidden rounded border border-line-soft">
                <Image src={spotlight.image} alt={spotlight.heading} fill className="object-cover" />
              </div>
            ) : (
              <Placeholder label={`Photo: ${industry.name}`} className="h-[300px]" />
            )}
            <div>
              <Eyebrow>{spotlight.eyebrow}</Eyebrow>
              <SectionHeading>{spotlight.heading}</SectionHeading>
              <p className="mt-4 text-ink-soft">{spotlight.body}</p>
              {spotlight.list && (
                <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {spotlight.list.map((entry) => (
                    <li key={entry.label} className="flex items-center gap-2.5 text-[13.5px] text-ink">
                      <FeatureGlyph icon={entry.icon} className="h-5 w-5 shrink-0 text-accent" />
                      {entry.label}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-6">
                <Button href="/contact">Get in Touch</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className={card}>
          <Eyebrow>{solutions.eyebrow}</Eyebrow>
          <SectionHeading>{solutions.heading}</SectionHeading>
          {solutions.body && <p className="mt-4 max-w-[80ch] text-ink-soft">{solutions.body}</p>}
          <div
            className={`mt-7 grid gap-5 sm:grid-cols-2 ${
              solutions.items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5"
            }`}
          >
            {solutions.items.map((item) => (
              <div
                key={item.title}
                className="rounded border border-line-soft bg-canvas p-5 transition-shadow hover:shadow-md"
              >
                <FeatureIcon icon={item.icon} />
                <h3 className="mt-3 mb-1.5 text-[14.5px] font-extrabold">{item.title}</h3>
                <p className="text-[13px] text-ink-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {useCases && (
        <section className="px-6 py-10">
          <div className={card}>
            <Eyebrow>{useCases.eyebrow}</Eyebrow>
            <SectionHeading>{useCases.heading}</SectionHeading>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {useCases.items.map((item) => (
                <div key={item.title}>
                  <div className="relative aspect-[3/2] overflow-hidden rounded border border-line-soft">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <h3 className="mt-3 mb-1 text-[14.5px] font-extrabold">{item.title}</h3>
                  <p className="text-[13px] text-ink-soft">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {process && (
        <section className="px-6 py-10">
          <div className={card}>
            <Eyebrow>{process.eyebrow}</Eyebrow>
            <SectionHeading>{process.heading}</SectionHeading>
            <p className="mt-4 max-w-[80ch] text-ink-soft">{process.body}</p>
            <ApproachSteps steps={process.steps} />
          </div>
        </section>
      )}

      {audience && (
        <section className="px-6 py-10">
          <div className={card}>
            <Eyebrow>{audience.eyebrow}</Eyebrow>
            <SectionHeading>{audience.heading}</SectionHeading>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {audience.items.map((item) => (
                <div key={item.title} className="rounded border border-line-soft bg-canvas p-5">
                  <FeatureIcon icon={item.icon} />
                  <h3 className="mt-3 mb-1.5 text-[14.5px] font-extrabold">{item.title}</h3>
                  <p className="text-[13px] text-ink-soft">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-ink px-6 py-14 text-center text-white">
        <h2 className="mx-auto max-w-[28ch] text-[28px] leading-[1.18] font-extrabold text-white">{closing.heading}</h2>
        <p className="mx-auto mt-2.5 max-w-[60ch] text-[#B9BFC9]">{closing.body}</p>
        <div className="mt-5.5 flex flex-wrap justify-center gap-3">
          <Button href="/contact">Contact Our Team</Button>
          <Button href="/industries" variant="secondary-light">
            ← All Industries
          </Button>
        </div>
      </section>
    </>
  );
}
