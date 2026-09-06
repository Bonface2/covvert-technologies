import type { Metadata } from "next";
import Button from "@/components/Button";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Monitoring & Evaluation",
  description:
    "Structured monitoring and evaluation services that ensure projects remain on track and deliver measurable results.",
};

export default function MonitoringEvaluationPage() {
  return (
    <>
      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-2 text-xs font-bold text-ink-soft">MONITORING &amp; EVALUATION</div>
          <div className="grid items-center gap-9 md:grid-cols-2">
            <div>
              <h1 className="text-[28px] leading-[1.18] font-extrabold">
                Tracking projects from deployment to impact
              </h1>
              <p className="mt-3 max-w-[46ch] text-ink-soft">
                We provide structured monitoring and evaluation services to ensure projects remain on
                track and deliver measurable results — timely, evidence-based information that supports
                informed decision-making, strengthens accountability, and improves project performance.
              </p>
              <div className="mt-5">
                <Button href="/contact">Request a Consultation</Button>
              </div>
            </div>
            <Placeholder label="Photo: monitoring dashboard / field data collection" className="h-[240px]" />
          </div>
        </div>
      </section>

      <section className="bg-canvas px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-[28px] leading-[1.18] font-extrabold">Our approach</h2>
          <div className="mt-6 grid gap-5.5 md:grid-cols-3">
            <div className="rounded border border-line-soft bg-white p-5.5">
              <h3 className="mb-2 text-[15px] font-extrabold">1. Monitoring frameworks &amp; baseline</h3>
              <p className="text-[13.5px] text-ink-soft">
                Monitoring frameworks and quality assurance set up at the start of a project.
              </p>
            </div>
            <div className="rounded border border-line-soft bg-white p-5.5">
              <h3 className="mb-2 text-[15px] font-extrabold">2. Ongoing monitoring</h3>
              <p className="text-[13.5px] text-ink-soft">
                Progress &amp; milestone tracking, performance measurement, data collection &amp; analysis,
                and risk identification &amp; mitigation.
              </p>
            </div>
            <div className="rounded border border-line-soft bg-white p-5.5">
              <h3 className="mb-2 text-[15px] font-extrabold">3. Evaluation &amp; reporting</h3>
              <p className="text-[13.5px] text-ink-soft">
                Compliance monitoring, performance dashboards, and stakeholder reporting on project
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 text-center">
        <Button href="/completion-reporting" variant="ghost">
          See how we report on completed work →
        </Button>
      </section>
    </>
  );
}
