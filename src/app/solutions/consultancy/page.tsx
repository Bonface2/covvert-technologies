import type { Metadata } from "next";
import DetailedSolutionPage from "@/components/DetailedSolutionPage";

export const metadata: Metadata = {
  title: "Solution Mapping",
  description:
    "We help organizations identify, design, and validate the technology solutions that actually fit their operations — before a single shilling is spent on procurement.",
};

export default function SolutionMappingPage() {
  return (
    <DetailedSolutionPage
      kicker="SOLUTION MAPPING"
      headline="Invest in the right technology, from day one."
      subheading="We help organizations identify, design, and validate the technology solutions that actually fit their operations — before a single shilling is spent on procurement."
      overviewPhoto="Photo: solution architecture / planning session"
      closingPhoto="Photo: team reviewing technical specifications"
      overview={[
        "Too many technology investments fail not because the hardware or software is bad, but because it was never the right fit to begin with. Solution Mapping is Covvert Technologies' answer to that problem: a structured, evidence-based process for understanding what an organization actually needs, and translating that into a clear, costed, implementable technology roadmap.",
        "We sit between the client's operational reality and the technology marketplace — independent of any single vendor — so that recommendations are driven by fit and outcomes, not by what happens to be easiest to sell.",
      ]}
      includes={[
        {
          title: "Needs assessments",
          desc: "structured stakeholder interviews, site visits, and operational reviews to surface the real problem, not just the stated one",
        },
        {
          title: "Business process analysis",
          desc: "mapping current workflows to identify inefficiencies, bottlenecks, and where technology can create leverage",
        },
        {
          title: "Solution architecture & design",
          desc: "translating requirements into a coherent technical architecture, including system components, data flows, and integration points",
        },
        {
          title: "Infrastructure planning",
          desc: "assessing power, connectivity, physical siting, and environmental constraints that will shape what's actually deployable",
        },
        {
          title: "Technical specifications",
          desc: "vendor-neutral, procurement-ready specifications that let clients tender competitively without being locked into one supplier's ecosystem",
        },
        {
          title: "Cost-benefit analysis",
          desc: "modelling total cost of ownership against expected operational or financial return, so decisions are made with eyes open",
        },
        {
          title: "Implementation roadmaps",
          desc: "phased rollout plans that sequence deployment realistically against budget cycles, staffing, and risk",
        },
      ]}
      approach={[
        {
          title: "Discover",
          desc: "we start on the ground, not in a boardroom, understanding how the organization actually operates today",
        },
        {
          title: "Define",
          desc: "we translate findings into clear problem statements and success criteria, agreed with the client before any solution is proposed",
        },
        {
          title: "Design",
          desc: "we develop 2–3 viable technical approaches, with trade-offs made explicit, rather than presenting a single \"take it or leave it\" recommendation",
        },
        {
          title: "Decide",
          desc: "we support the client through the decision, including budget and procurement implications",
        },
        {
          title: "Document",
          desc: "every engagement ends with a specification and roadmap the client owns outright, usable with any vendor",
        },
      ]}
      whyItMatters="A wrong technology decision is expensive twice — once to buy, and again to unwind. Solution Mapping de-risks that decision at the point where it's cheapest to change course: before procurement."
      whoThisIsFor="Organizations planning a new monitoring system, digital infrastructure upgrade, or IoT rollout who want an independent, structured assessment before committing budget — including government agencies, development partners, NGOs, and private-sector operators managing distributed assets."
    />
  );
}
