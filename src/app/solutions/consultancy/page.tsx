import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Consultancy Services",
  description:
    "Solution mapping and advisory support to help organizations invest in the right technology from the beginning.",
};

export default function ConsultancyPage() {
  return (
    <ServiceDetail
      kicker="CONSULTANCY SERVICES"
      title="Solution mapping — advisory support, from planning to rollout"
      lede="We help organizations identify the right technology solutions for their operational needs before procurement and implementation, ensuring clients invest in the right technology from the beginning, reducing costs, minimizing risks, and improving operational efficiency."
      photoLabel="Photo: consultancy session / site assessment"
      primaryCtaHref="/contact"
      primaryCtaLabel="Request a Consultation"
      cardsTitle="What's included"
      cards={[
        {
          title: "Needs assessment & planning",
          desc: "Needs assessments, business process analysis, and cost-benefit analysis to scope the right solution.",
        },
        {
          title: "Solution architecture & design",
          desc: "Solution architecture, infrastructure planning, and technical specifications for implementation.",
        },
        {
          title: "Implementation roadmaps",
          desc: "Clear, staged roadmaps that guide a project from planning through to procurement and rollout.",
        },
      ]}
    />
  );
}
