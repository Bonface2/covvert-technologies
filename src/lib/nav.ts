export type SolutionLink = {
  href: string;
  title: string;
  blurb: string;
  icon: "consultancy" | "technology" | "iot" | "me" | "reporting";
};

export const solutionLinks: SolutionLink[] = [
  {
    href: "/solutions/consultancy",
    title: "Consultancy Services",
    blurb: "Advisory for planning & implementation",
    icon: "consultancy",
  },
  {
    href: "/solutions/technology",
    title: "Technology & IoT Solutions",
    blurb: "Connectivity & monitoring tech",
    icon: "technology",
  },
  {
    href: "/iot-hardware",
    title: "IoT Hardware",
    blurb: "Product catalogue & specifications",
    icon: "iot",
  },
  {
    href: "/monitoring-evaluation",
    title: "Monitoring & Evaluation",
    blurb: "Tracking deployed solutions",
    icon: "me",
  },
  {
    href: "/completion-reporting",
    title: "Completion Reporting",
    blurb: "Reports on completed projects",
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
