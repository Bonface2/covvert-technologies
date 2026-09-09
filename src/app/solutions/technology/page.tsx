import type { Metadata } from "next";
import DetailedSolutionPage from "@/components/DetailedSolutionPage";

export const metadata: Metadata = {
  title: "Connectivity Solutions",
  description:
    "Global IoT connectivity built on a cloud-native, distributed core — so your devices stay online, wherever they are.",
};

export default function ConnectivitySolutionsPage() {
  return (
    <DetailedSolutionPage
      kicker="CONNECTIVITY SOLUTIONS"
      headline="One SIM. Every network. No borders."
      subheading="Global IoT connectivity built on a cloud-native, distributed core — so your devices stay online, wherever they are."
      overviewPhoto="Photo: connected device in the field"
      closingPhoto="Photo: cross-border logistics or fleet in motion"
      overview={[
        "Connectivity is often the weakest link in an IoT deployment — and traditional cellular roaming makes it worse, adding latency, cost, and single-points-of-failure by routing traffic back through a device's home network no matter where it physically is. Covvert Technologies' connectivity solution takes a fundamentally different approach: a cloud-native, distributed core network with local points of presence (PoPs) around the world, so devices connect to infrastructure that's actually close to them.",
        "Each SIM we deploy carries multiple operator profiles (IMSIs) and autonomously switches between available mobile networks — with no manual intervention and no device downtime — keeping connected assets online across multiple African countries on a single SIM.",
      ]}
      includes={[
        {
          title: "Cloud-native distributed core network",
          desc: "traffic is processed through local infrastructure rather than being backhauled through a single national core, reducing latency and improving resilience",
        },
        {
          title: "Local points of presence (PoPs)",
          desc: "regional infrastructure that keeps device connections local, fast, and less dependent on any single network path",
        },
        {
          title: "Multi-IMSI SIMs",
          desc: "each SIM carries multiple operator profiles rather than being locked to a single carrier",
        },
        {
          title: "Autonomous network switching",
          desc: "the platform selects and switches between available mobile networks automatically, based on signal quality and availability, with zero manual reconfiguration",
        },
        {
          title: "Cross-border coverage",
          desc: "one SIM stays connected as assets move across multiple African countries, without swapping hardware or renegotiating contracts per country",
        },
        {
          title: "Real-time connectivity management",
          desc: "visibility and control over connected devices and their network status from a single platform",
        },
      ]}
      approach={[
        {
          title: "Assess",
          desc: "understand where devices will operate, how they move, and what coverage and latency requirements matter",
        },
        {
          title: "Provision",
          desc: "issue multi-IMSI SIMs configured for the relevant regions and operator networks",
        },
        {
          title: "Deploy",
          desc: "integrate connectivity into new or existing IoT hardware deployments, including devices supplied through our IoT hardware line",
        },
        {
          title: "Monitor & optimize",
          desc: "ongoing visibility into connection quality and network switching behavior, with proactive intervention where coverage gaps emerge",
        },
      ]}
      whyItMatters="Traditional roaming was built for phones changing countries occasionally — not for fixed or mobile IoT assets that need to stay online continuously, cost-effectively, and without a person around to swap a SIM. Our architecture treats connectivity as infrastructure to be engineered, not a roaming fee to be tolerated."
      whoThisIsFor="Organizations operating connected assets across borders or across multiple mobile network footprints — fleet and logistics operators, cross-border agricultural or environmental monitoring programs, and any IoT deployment where “it should just stay connected” is a hard requirement, not a nice-to-have."
    />
  );
}
