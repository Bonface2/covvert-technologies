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

export const contactDetails = {
  address: "Covvert Technologies Ltd, Nairobi, Kenya",
  phones: ["+254 780 073 245", "+254 714 073 245"],
  email: "info@covverttechnologies.net",
  site: "www.covverttechnologies.net",
};
