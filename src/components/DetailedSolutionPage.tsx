import Image from "next/image";
import Button from "@/components/Button";
import Placeholder from "@/components/Placeholder";

type ListItem = { title: string; desc: string };

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.3 2.3L15.8 9" />
    </svg>
  );
}

function TargetIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function UsersIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <circle cx="17.5" cy="9" r="2.3" />
      <path d="M15.3 19c0-2.2 1.6-3.9 3.7-4.3" />
    </svg>
  );
}

export default function DetailedSolutionPage({
  kicker,
  headline,
  subheading,
  overview,
  overviewPhoto,
  overviewImage,
  includes,
  approach,
  whyItMatters,
  whoThisIsFor,
  closingPhoto,
  closingImage,
  children,
}: {
  kicker: string;
  headline: string;
  subheading: string;
  overview: string[];
  overviewPhoto: string;
  overviewImage?: string;
  includes: ListItem[];
  approach: ListItem[];
  whyItMatters: string;
  whoThisIsFor: string;
  closingPhoto: string;
  closingImage?: string;
  children?: React.ReactNode;
}) {
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
            {kicker}
          </span>
          <h1 className="mt-6 max-w-[20ch] text-4xl leading-[1.14] font-extrabold text-white md:text-[44px]">
            {headline}
          </h1>
          <p className="mt-5 max-w-[62ch] text-[#C7D4EA]">{subheading}</p>
          <div className="mt-7">
            <Button href="/contact">Request a Consultation</Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1320px] rounded border border-line-soft bg-white p-8 shadow-sm md:p-12">
          <div className="grid items-center gap-9 md:grid-cols-2">
            {overviewImage ? (
              <div className="relative h-[280px] overflow-hidden rounded border border-line-soft md:order-2">
                <Image src={overviewImage} alt={overviewPhoto} fill className="object-cover" />
              </div>
            ) : (
              <Placeholder label={overviewPhoto} className="h-[280px] md:order-2" />
            )}
            <div>
              <h2 className="text-xl font-extrabold">Overview</h2>
              <div className="mt-3 flex flex-col gap-4">
                {overview.map((para, i) => (
                  <p key={i} className="text-ink-soft">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1320px] rounded border border-line-soft bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-xl font-extrabold">What this includes</h2>
          <div className="mt-6 grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {includes.map((item) => (
              <div
                key={item.title}
                className="rounded border border-line-soft bg-canvas p-5.5 transition-shadow hover:shadow-md"
              >
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft">
                  <CheckIcon className="h-5 w-5 text-accent" />
                </span>
                <h3 className="mb-1.5 text-[15px] font-extrabold">{item.title}</h3>
                <p className="text-[13.5px] text-ink-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1320px] rounded border border-line-soft bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-xl font-extrabold">Our approach</h2>
          <div className="mt-6 grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {approach.map((step, i) => (
              <div
                key={step.title}
                className="rounded border border-line-soft bg-canvas p-5.5 transition-shadow hover:shadow-md"
              >
                <span className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-accent-soft text-[13px] font-bold text-accent">
                  {i + 1}
                </span>
                <h3 className="mb-1.5 text-[15px] font-extrabold">{step.title}</h3>
                <p className="text-[13.5px] text-ink-soft">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1320px] rounded border border-line-soft bg-white p-8 shadow-sm md:p-12">
          <div className="grid items-center gap-9 md:grid-cols-2">
            {closingImage ? (
              <div className="relative h-full min-h-[280px] overflow-hidden rounded border border-line-soft">
                <Image src={closingImage} alt={closingPhoto} fill className="object-cover" />
              </div>
            ) : (
              <Placeholder label={closingPhoto} className="h-full min-h-[280px]" />
            )}
            <div className="flex flex-col gap-5.5">
              <div className="rounded border border-line-soft bg-canvas p-6">
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft">
                  <TargetIcon className="h-4 w-4 text-accent" />
                </span>
                <h3 className="mb-2 text-[15px] font-extrabold">Why it matters</h3>
                <p className="text-ink-soft">{whyItMatters}</p>
              </div>
              <div className="rounded border border-line-soft bg-canvas p-6">
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft">
                  <UsersIcon className="h-4 w-4 text-accent" />
                </span>
                <h3 className="mb-2 text-[15px] font-extrabold">Who this is for</h3>
                <p className="text-ink-soft">{whoThisIsFor}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {children}

      <section className="bg-ink px-6 py-14 text-center text-white">
        <h2 className="text-[28px] leading-[1.18] font-extrabold text-white">Ready to get started?</h2>
        <p className="mt-2.5 text-[#B9BFC9]">Tell us what you&apos;re trying to build — we&apos;ll get back to you.</p>
        <div className="mt-5.5 flex flex-wrap justify-center gap-3">
          <Button href="/contact">Request a Consultation</Button>
          <Button href="/solutions" variant="secondary-light">
            ← Back to Solutions &amp; Services
          </Button>
        </div>
      </section>
    </>
  );
}
