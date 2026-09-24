import type { IndustryIconKey } from "@/components/IndustryIcon";

export type SolutionLink = {
  href: string;
  title: string;
  blurb: string;
  icon: "consultancy" | "technology" | "iot" | "me" | "reporting";
};

export const solutionLinks: SolutionLink[] = [
  {
    href: "/solutions/consultancy",
    title: "Solution Mapping",
    blurb: "Invest in the right technology, from day one",
    icon: "consultancy",
  },
  {
    href: "/iot-hardware",
    title: "IoT Hardware Sourcing & Supply",
    blurb: "Devices sourced right, supported for the long run",
    icon: "iot",
  },
  {
    href: "/solutions/technology",
    title: "Connectivity Solutions",
    blurb: "One SIM. Every network. No borders.",
    icon: "technology",
  },
  {
    href: "/monitoring-evaluation",
    title: "Project Monitoring & Evaluation",
    blurb: "Know what's working, before it's too late",
    icon: "me",
  },
  {
    href: "/completion-reporting",
    title: "Completion Reporting",
    blurb: "Close every project with clarity, not loose ends",
    icon: "reporting",
  },
];

export const solutionPaths = solutionLinks.map((l) => l.href).concat("/solutions");

export const industryLinks: { href: string; title: string; blurb: string; icon: IndustryIconKey }[] = [
  { href: "/industries/logistics", title: "Logistics & Transport", blurb: "Fleet, cargo and asset visibility", icon: "logistics" },
  { href: "/industries/infrastructure", title: "Infrastructure & Construction", blurb: "Connected monitoring for sites and structures", icon: "infrastructure" },
  { href: "/industries/agriculture", title: "Agriculture & Agribusiness", blurb: "Smart sensors for farms and agribusiness", icon: "agriculture" },
  { href: "/industries/government", title: "Government & Public Sector", blurb: "Technology and accountability reporting", icon: "government" },
  { href: "/industries/development", title: "Development & Humanitarian", blurb: "Credible M&E for programmes", icon: "development" },
  { href: "/industries/energy", title: "Energy & Mining", blurb: "Remote monitoring for distributed sites", icon: "energy" },
];

export const industryPaths = industryLinks.map((l) => l.href).concat("/industries");

export const contactDetails = {
  address: "Covvert Technologies Ltd, Nairobi, Kenya",
  phones: ["+254 780 073 245", "+254 714 073 245"],
  email: "info@covverttechnologies.net",
  site: "www.covverttechnologies.net",
};
