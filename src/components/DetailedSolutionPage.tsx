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

export default function DetailedSolutionPage({
  kicker,
  headline,
  subheading,
  heroPhoto,
  overview,
  overviewPhoto,
  includes,
  approach,
  whyItMatters,
  whoThisIsFor,
  closingPhoto,
}: {
  kicker: string;
  headline: string;
  subheading: string;
  heroPhoto: string;
  overview: string[];
  overviewPhoto: string;
  includes: ListItem[];
  approach: ListItem[];
  whyItMatters: string;
  whoThisIsFor: string;
  closingPhoto: string;
}) {
  return (
    <>
      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid items-center gap-9 md:grid-cols-2">
            <div>
              <div className="mb-3 inline-block rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-bold text-accent">
                {kicker}
              </div>
              <h1 className="max-w-[16ch] text-[28px] leading-[1.18] font-extrabold md:text-4xl">
                {headline}
              </h1>
              <p className="mt-3 max-w-[52ch] text-lg text-ink-soft">{subheading}</p>
              <div className="mt-5">
                <Button href="/contact">Request a Consultation</Button>
              </div>
            </div>
            <Placeholder label={heroPhoto} className="h-[280px]" />
          </div>
        </div>
      </section>

      <section className="bg-canvas px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid items-center gap-9 md:grid-cols-2">
            <Placeholder label={overviewPhoto} className="h-[280px] md:order-2" />
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

      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-xl font-extrabold">What this includes</h2>
          <div className="mt-6 grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {includes.map((item) => (
              <div key={item.title} className="rounded border border-line-soft bg-white p-5.5">
                <CheckIcon className="mb-3 h-5 w-5 text-accent" />
                <h3 className="mb-1.5 text-[15px] font-extrabold">{item.title}</h3>
                <p className="text-[13.5px] text-ink-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-xl font-extrabold">Our approach</h2>
          <div className="mt-6 grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {approach.map((step, i) => (
              <div key={step.title} className="rounded border border-line-soft bg-white p-5.5">
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

      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid items-center gap-9 md:grid-cols-2">
            <Placeholder label={closingPhoto} className="h-full min-h-[280px]" />
            <div className="flex flex-col gap-5.5">
              <div className="rounded border border-line-soft bg-white p-6">
                <h3 className="mb-2 text-[15px] font-extrabold">Why it matters</h3>
                <p className="text-ink-soft">{whyItMatters}</p>
              </div>
              <div className="rounded border border-line-soft bg-white p-6">
                <h3 className="mb-2 text-[15px] font-extrabold">Who this is for</h3>
                <p className="text-ink-soft">{whoThisIsFor}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas px-6 py-10 text-center">
        <Button href="/solutions" variant="ghost">
          ← Back to Solutions &amp; Services
        </Button>
      </section>
    </>
  );
}
