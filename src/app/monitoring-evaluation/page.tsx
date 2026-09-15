import type { Metadata } from "next";
import DetailedSolutionPage from "@/components/DetailedSolutionPage";

export const metadata: Metadata = {
  title: "Project Monitoring & Evaluation",
  description:
    "Structured monitoring and evaluation that keeps technology-driven projects on track, evidence-backed, and accountable.",
};

export default function MonitoringEvaluationPage() {
  return (
    <DetailedSolutionPage
      title="Project Monitoring & Evaluation"
      overviewPhoto="Photo: field assessment in progress"
      overviewImage="/images/solutions/monitoring-field.png"
      closingPhoto="Photo: stakeholder reporting session"
      closingImage="/images/solutions/monitoring-session.png"
      overview={[
        "Deploying technology is not the same as delivering results. Project Monitoring & Evaluation (M&E) is how Covvert Technologies helps clients understand whether a deployed solution is actually performing — operationally, financially, and against the outcomes it was meant to achieve — and gives them the evidence to course-correct while there's still time to do so.",
        "We combine field-based assessment with the technology-enabled monitoring made possible by the same IoT and connectivity solutions we deploy, so M&E isn't a separate afterthought bolted onto a project, but built into how the project runs.",
      ]}
      includes={[
        {
          title: "Monitoring frameworks",
          desc: "clear indicators, data collection methods, and reporting cadences defined at project start, not retrofitted later",
        },
        {
          title: "Progress & milestone tracking",
          desc: "structured tracking against agreed project plans and delivery milestones",
        },
        {
          title: "Performance measurement",
          desc: "quantitative assessment of whether deployed systems are meeting their intended operational targets",
        },
        {
          title: "Risk identification & mitigation",
          desc: "early flagging of technical, operational, or delivery risks, with recommended mitigation actions",
        },
        {
          title: "Data collection & analysis",
          desc: "both field-based and technology-enabled (leveraging connected sensors and devices where deployed)",
        },
        {
          title: "Quality assurance",
          desc: "verification that installed systems and processes meet the specifications they were designed against",
        },
        {
          title: "Compliance monitoring",
          desc: "tracking adherence to donor, regulatory, or organizational requirements where applicable",
        },
        {
          title: "Performance dashboards",
          desc: "real-time or periodic visualizations that make project status legible to decision-makers, not buried in spreadsheets",
        },
        {
          title: "Stakeholder reporting",
          desc: "structured reporting tailored to the audience, from field teams to funders to executive boards",
        },
      ]}
      approach={[
        {
          title: "Frame",
          desc: "agree on what \"success\" looks like and how it will be measured, before implementation begins",
        },
        {
          title: "Track",
          desc: "ongoing structured data collection against the agreed framework, combining field assessment and technology-enabled monitoring",
        },
        {
          title: "Analyze",
          desc: "regular analysis to surface trends, risks, and deviations from plan early",
        },
        {
          title: "Report",
          desc: "clear, decision-ready reporting to stakeholders at the cadence they need",
        },
        {
          title: "Adjust",
          desc: "feed findings back into project delivery so monitoring changes outcomes, not just documents them",
        },
      ]}
      whyItMatters="Projects that aren't monitored don't fail loudly — they drift quietly off track until the final report reveals a gap nobody caught in time. Structured M&E turns that failure mode into an early warning system."
      whoThisIsFor="Development partners, NGOs, government agencies, and any organization delivering donor-funded or accountability-sensitive projects that require credible, evidence-based tracking of progress and performance."
    />
  );
}
