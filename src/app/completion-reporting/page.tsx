import type { Metadata } from "next";
import DetailedSolutionPage from "@/components/DetailedSolutionPage";

export const metadata: Metadata = {
  title: "Completion Reporting",
  description:
    "Comprehensive completion reporting that documents what was delivered, what it achieved, and what should happen next.",
};

export default function CompletionReportingPage() {
  return (
    <DetailedSolutionPage
      title="Completion Reporting"
      overviewPhoto="Photo: project handover / commissioning"
      overviewImage="/images/solutions/project-handover.png"
      closingPhoto="Photo: completed project site"
      closingImage="/images/solutions/completed-site.png"
      overview={[
        "How a project ends shapes what an organization can prove, learn, and build on afterward. Completion Reporting is where Covvert Technologies brings a project to a formal, well-documented close — producing the records, verifications, and analysis that clients need for accountability, audit, and institutional memory.",
        "This isn't a formality tacked onto the end of a project. Done well, completion reporting is what turns a single deployment into reusable organizational knowledge.",
      ]}
      includes={[
        {
          title: "Project completion reports",
          desc: "comprehensive documentation of what was delivered, against what was originally scoped and budgeted",
          icon: "/images/icons/completion-reporting/project-completion-reports.png",
        },
        {
          title: "Asset verification reports",
          desc: "physical and digital verification that installed hardware and systems match procurement and deployment records",
          icon: "/images/icons/completion-reporting/asset-verification-reports.png",
        },
        {
          title: "Commissioning documentation",
          desc: "formal records confirming that systems were tested, accepted, and handed over correctly",
          icon: "/images/icons/completion-reporting/commissioning-documentation.png",
        },
        {
          title: "Performance evaluations",
          desc: "assessment of how the completed project performed against its original objectives",
          icon: "/images/icons/completion-reporting/performance-evaluations.png",
        },
        {
          title: "Financial utilization summaries",
          desc: "clear accounting of how project funds were used, structured for audit and donor review",
          icon: "/images/icons/completion-reporting/financial-utilization-summaries.png",
        },
        {
          title: "Lessons learned",
          desc: "structured capture of what worked, what didn't, and what should be done differently next time",
          icon: "/images/icons/completion-reporting/lessons-learned.png",
        },
        {
          title: "Compliance documentation",
          desc: "records demonstrating adherence to relevant regulatory, donor, or organizational requirements",
          icon: "/images/icons/completion-reporting/compliance-documentation.png",
        },
        {
          title: "Handover reports",
          desc: "everything the receiving team or department needs to take ownership of a completed system with confidence",
          icon: "/images/icons/completion-reporting/handover-reports.png",
        },
        {
          title: "Sustainability assessments",
          desc: "an honest look at whether the delivered solution is positioned to keep running, and what's needed to keep it that way",
          icon: "/images/icons/completion-reporting/sustainability-assessments.png",
        },
      ]}
      approach={[
        {
          title: "Verify",
          desc: "physical and documentary verification that what was meant to be delivered, was delivered",
        },
        {
          title: "Evaluate",
          desc: "assessment of performance against original project objectives and success criteria",
        },
        {
          title: "Document",
          desc: "comprehensive, audit-ready reporting covering delivery, finances, and compliance",
        },
        {
          title: "Capture",
          desc: "lessons learned recorded while the project is still fresh, not reconstructed months later",
        },
        {
          title: "Hand over",
          desc: "a clean, complete handover package for whoever takes ownership of the system going forward",
        },
      ]}
      whyItMatters="Without rigorous completion reporting, organizations lose the ability to prove what was achieved, learn from what wasn't, and confidently maintain what was built. It's the difference between a project that ends and a project that's actually finished."
      whoThisIsFor="Organizations closing out donor-funded, government, or infrastructure projects that require formal accountability documentation — as well as any client who wants a clean, well-documented handover before taking a system fully in-house."
    />
  );
}
