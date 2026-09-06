import type { Metadata } from "next";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Completion Reporting",
  description:
    "How Covvert Technologies documents project achievements and formally closes projects with comprehensive completion reports.",
};

const included = [
  "Project completion reports",
  "Asset verification reports",
  "Commissioning documentation",
  "Performance evaluations",
  "Financial utilization summaries",
  "Lessons learned & compliance documentation",
  "Handover reports",
  "Sustainability assessments",
];

export default function CompletionReportingPage() {
  return (
    <>
      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-2 text-xs font-bold text-ink-soft">COMPLETION REPORTING</div>
          <h1 className="text-[28px] leading-[1.18] font-extrabold">How we report on completed projects</h1>
          <p className="mt-2.5 max-w-[60ch] text-ink-soft">
            We help organizations demonstrate accountability, measure impact, and capture knowledge for
            continuous improvement.
          </p>
        </div>
      </section>

      <section className="bg-canvas px-6 py-14">
        <div className="mx-auto grid max-w-[1320px] items-center gap-9 md:grid-cols-2">
          <Placeholder label="Photo/document preview: sample completion report" className="h-[260px]" />
          <div>
            <h2 className="text-xl font-extrabold">What&apos;s included in a completion report</h2>
            <div className="mt-3.5 flex flex-col gap-2.5">
              {included.map((item) => (
                <p key={item} className="text-ink-soft">
                  — {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-[28px] leading-[1.18] font-extrabold">Sample completed projects</h2>
          <div className="mt-5.5 grid gap-5.5 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded border border-line-soft bg-white p-5.5">
                <Placeholder label="Photo" className="mb-2.5 h-[120px]" />
                <h3 className="text-[15px] font-extrabold">Project name</h3>
                <p className="text-[13.5px] text-ink-soft">One-line result or outcome.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
