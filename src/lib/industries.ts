import type { FeatureIconKey } from "@/components/FeatureIcon";

export type IndustryItem = { icon: FeatureIconKey; title: string; desc: string };

export type Industry = {
  slug: string;
  name: string;
  tagline: string;
  heroImage?: string;
  overview: { eyebrow: string; heading: string; body: string[]; items: IndustryItem[] };
  spotlight: {
    eyebrow: string;
    heading: string;
    body: string;
    image?: string;
    list?: { icon: FeatureIconKey; label: string }[];
  };
  solutions: { eyebrow: string; heading: string; body?: string; items: IndustryItem[] };
  useCases?: { eyebrow: string; heading: string; items: { title: string; desc: string; image: string }[] };
  process?: { eyebrow: string; heading: string; body: string; steps: { title: string; desc: string }[] };
  audience?: { eyebrow: string; heading: string; items: IndustryItem[] };
  closing: { heading: string; body: string };
};

const img = (slug: string, file: string) => `/images/industries/${slug}/${file}.jpg`;

export const industries: Industry[] = [
  {
    slug: "logistics",
    name: "Logistics & Transport",
    tagline:
      "Real-time visibility into fleets, cargo, and distributed assets across supply chains — asset tracking, GPS devices, and connectivity that stays online across borders.",
    heroImage: img("logistics", "hero"),
    overview: {
      eyebrow: "OVERVIEW",
      heading: "Smarter logistics. Greater control.",
      body: [
        "COVVERT's logistics and transport solutions give you end-to-end visibility and control over your fleet, cargo and assets. From real-time tracking and geo-fencing to multi-network connectivity, we help you keep your operations moving — safely, efficiently and across borders.",
      ],
      items: [
        { icon: "pin", title: "Real-Time Tracking", desc: "Know where your assets are, at all times." },
        { icon: "globe", title: "Cross-Border Connectivity", desc: "Seamless multi-network coverage across regions and countries." },
        { icon: "shield", title: "Enhanced Security", desc: "Geo-fencing, alerts and faster incident response." },
        { icon: "clock", title: "Operational Efficiency", desc: "Reduce downtime, optimise routes and cut costs." },
        { icon: "chart", title: "Data-Driven Decisions", desc: "Actionable insights for better planning and performance." },
        { icon: "network", title: "Scalable Solutions", desc: "From a few assets to large fleets, we scale with your needs." },
      ],
    },
    spotlight: {
      eyebrow: "OUR SOLUTIONS IN ACTION",
      heading: "Connected assets. Smarter operations.",
      body: "Using GPS devices, IoT and our intelligent connectivity platform, we provide real-time visibility and control across your supply chain — whether you're managing trucks, containers, or remote assets.",
      image: img("logistics", "spotlight"),
    },
    solutions: {
      eyebrow: "KEY SOLUTION COMPONENTS",
      heading: "Everything you need for end-to-end visibility",
      items: [
        { icon: "pin", title: "GPS & IoT Devices", desc: "Rugged, reliable devices for vehicles, cargo and mobile assets." },
        { icon: "wifi", title: "Multi-Network Connectivity", desc: "Automatic network switching to keep your operations online across borders." },
        { icon: "cloud", title: "SIM Management Portal", desc: "Manage connectivity, monitor usage and control your devices — all in one place." },
        { icon: "chart", title: "Tracking & Analytics Platform", desc: "Real-time dashboards, alerts and detailed reports for better decisions." },
        { icon: "headset", title: "Ongoing Support", desc: "Local and regional support to keep your operations running smoothly." },
      ],
    },
    closing: {
      heading: "Keep your supply chain moving — across every border.",
      body: "Let's build a smarter, more connected logistics and transport operation together.",
    },
  },
  {
    slug: "infrastructure",
    name: "Infrastructure & Construction",
    tagline:
      "Connected monitoring for large-scale infrastructure and construction projects, from site conditions to structural and environmental sensors.",
    heroImage: img("infrastructure", "hero"),
    overview: {
      eyebrow: "OVERVIEW",
      heading: "Smarter data. Safer sites. Stronger infrastructure.",
      body: [
        "COVVERT's infrastructure and construction solutions help you monitor assets, people and environments in real time — reducing risks, improving efficiency and ensuring projects are delivered on time and within budget.",
      ],
      items: [
        { icon: "thermometer", title: "Site Condition Monitoring", desc: "Track weather, soil, water and other site conditions in real time." },
        { icon: "bridge", title: "Structural Health Monitoring", desc: "Monitor the integrity and performance of critical infrastructure." },
        { icon: "leaf", title: "Environmental Monitoring", desc: "Track air quality, noise, water and environmental impacts." },
        { icon: "tools", title: "Asset & Equipment Tracking", desc: "Monitor the location and status of heavy equipment, vehicles and materials." },
        { icon: "hardhat", title: "Worker Safety & Compliance", desc: "Enhance safety with wearables and real-time alerts." },
        { icon: "chart", title: "Project Performance Insights", desc: "Use data and analytics to improve decision-making and project outcomes." },
      ],
    },
    spotlight: {
      eyebrow: "THE CHALLENGE",
      heading: "Complex projects. Multiple variables.",
      body: "Large-scale infrastructure and construction projects involve multiple sites, assets, people and environmental factors. Without real-time visibility, risks increase, resources can be wasted and delays become costly.",
      image: img("infrastructure", "spotlight"),
      list: [
        { icon: "gear", label: "Equipment downtime" },
        { icon: "clock", label: "Delayed decision-making" },
        { icon: "shield", label: "Safety risks" },
        { icon: "dollar", label: "Cost overruns" },
        { icon: "leaf", label: "Environmental impact" },
        { icon: "doc", label: "Regulatory compliance" },
      ],
    },
    solutions: {
      eyebrow: "OUR SOLUTIONS",
      heading: "End-to-end visibility for smarter project delivery.",
      body: "From sensors and IoT devices to connectivity and advanced analytics, we provide the technology and expertise to keep your infrastructure and construction projects on track.",
      items: [
        { icon: "sensor", title: "IoT Sensors & Devices", desc: "Track site conditions, structure health, equipment and more." },
        { icon: "wifi", title: "Connectivity", desc: "Reliable multi-network connectivity across multiple sites and regions." },
        { icon: "cloud", title: "Data & Analytics", desc: "Turn real-time data into actionable insights and alerts." },
        { icon: "monitor", title: "Monitoring Platform", desc: "Manage assets, sites and projects from a central dashboard." },
      ],
    },
    useCases: {
      eyebrow: "USE CASES",
      heading: "Built for every stage of your project.",
      items: [
        { title: "Roads & Bridges", desc: "Monitor structural health and site conditions.", image: img("infrastructure", "usecase-1") },
        { title: "Buildings & Facilities", desc: "Improve safety and asset performance.", image: img("infrastructure", "usecase-2") },
        { title: "Rail & Transport", desc: "Track assets and ensure operational efficiency.", image: img("infrastructure", "usecase-3") },
        { title: "Energy & Utilities", desc: "Monitor critical infrastructure and environmental impact.", image: img("infrastructure", "usecase-4") },
        { title: "Water & Environment", desc: "Track water levels, quality and conditions.", image: img("infrastructure", "usecase-5") },
      ],
    },
    closing: {
      heading: "Stronger projects. Lasting impact.",
      body: "Let's build safer, smarter and more connected infrastructure and construction projects — together.",
    },
  },
  {
    slug: "agriculture",
    name: "Agriculture & Agribusiness",
    tagline:
      "Smart sensors and data — soil moisture, irrigation control, and crop monitoring — that help farms and agribusinesses operate more efficiently.",
    heroImage: img("agriculture", "hero"),
    overview: {
      eyebrow: "THE OPPORTUNITY",
      heading: "Smarter farming. Greater productivity.",
      body: [
        "Agriculture and agribusiness face increasing pressure to produce more, use resources efficiently and manage risks from climate change, pests and market volatility.",
        "COVVERT helps farms, cooperatives and agribusinesses leverage technology and data to make better decisions, reduce waste and improve productivity — from the field to the market.",
      ],
      items: [
        { icon: "leaf", title: "Higher Yields", desc: "Improve crop health and productivity." },
        { icon: "drop", title: "Efficient Resource Use", desc: "Optimise water, fertiliser and input application." },
        { icon: "shield", title: "Reduced Risk", desc: "Detect issues early and respond faster." },
        { icon: "dollar", title: "Lower Costs", desc: "Minimise waste and improve efficiency." },
        { icon: "globe", title: "Sustainable Farming", desc: "Support long-term soil and land health." },
        { icon: "chart", title: "Data-Driven Decisions", desc: "Turn field data into actionable insights." },
      ],
    },
    spotlight: {
      eyebrow: "INSIGHTS AT YOUR FINGERTIPS",
      heading: "Real-time visibility. Better decisions.",
      body: "Our platform brings together data from across your farm — soil, weather, irrigation, crops and equipment — giving you a clear view of what's happening and what to do next.",
      image: img("agriculture", "spotlight"),
    },
    solutions: {
      eyebrow: "OUR SOLUTIONS",
      heading: "End-to-end monitoring for modern agriculture.",
      body: "We provide the sensors, connectivity and platforms to help you monitor your fields, assets and operations in real time — whether you're managing a small farm or a large agribusiness operation.",
      items: [
        { icon: "leaf", title: "Soil Moisture Monitoring", desc: "Track soil conditions and optimise irrigation and fertiliser use." },
        { icon: "drop", title: "Irrigation Control", desc: "Automate and manage irrigation for water efficiency." },
        { icon: "sensor", title: "Crop Monitoring", desc: "Monitor crop health, growth and weather conditions." },
        { icon: "thermometer", title: "Weather & Climate Data", desc: "Access real-time weather data to plan and mitigate risks." },
        { icon: "tractor", title: "Equipment Tracking", desc: "Monitor farm machinery and improve utilisation and uptime." },
      ],
    },
    useCases: {
      eyebrow: "USE CASES",
      heading: "Built for every agri-business need.",
      items: [
        { title: "Crop Farming", desc: "Monitor soil, water and crop health for higher yields.", image: img("agriculture", "usecase-1") },
        { title: "Greenhouses & Horticulture", desc: "Control conditions and improve productivity.", image: img("agriculture", "usecase-2") },
        { title: "Livestock Management", desc: "Track assets, water and feed conditions.", image: img("agriculture", "usecase-3") },
        { title: "Supply Chain & Logistics", desc: "Monitor temperature, location and asset movement.", image: img("agriculture", "usecase-4") },
        { title: "Agri-Processing & Export", desc: "Ensure quality, compliance and traceability.", image: img("agriculture", "usecase-5") },
      ],
    },
    process: {
      eyebrow: "THE COVVERT ADVANTAGE",
      heading: "From field to market. We've got you covered.",
      body: "Our solutions are designed to work in real farming environments — with local expertise, regional connectivity and a focus on measurable results.",
      steps: [
        { title: "Understand", desc: "Assess your land, crops, assets and objectives." },
        { title: "Connect", desc: "Deploy sensors, devices and connectivity." },
        { title: "Monitor", desc: "Collect real-time data from your operations." },
        { title: "Analyse", desc: "Turn data into insights and recommendations." },
        { title: "Optimise", desc: "Improve productivity, reduce costs and build resilience." },
      ],
    },
    audience: {
      eyebrow: "WHO WE WORK WITH",
      heading: "Supporting every player in the agri-value chain.",
      items: [
        { icon: "leaf", title: "Smallholder Farmers", desc: "Improve productivity and resilience." },
        { icon: "tractor", title: "Commercial Farms", desc: "Scale operations and efficiency." },
        { icon: "users", title: "Cooperatives & Producer Groups", desc: "Enable collective growth and value." },
        { icon: "truck", title: "Agri-Businesses", desc: "Optimise supply chain and operations." },
        { icon: "building", title: "Government & NGOs", desc: "Support food security and rural development." },
      ],
    },
    closing: {
      heading: "Smarter technology. Healthier crops. A more resilient future.",
      body: "Let's build a smarter, more productive and sustainable agriculture sector — together.",
    },
  },
  {
    slug: "government",
    name: "Government & Public Sector",
    tagline:
      "Technology and advisory support for public-sector service delivery, infrastructure monitoring, and accountability reporting.",
    heroImage: img("government", "hero"),
    overview: {
      eyebrow: "OVERVIEW",
      heading: "Better services. Greater accountability.",
      body: [
        "COVVERT supports public-sector organisations to plan, deploy and monitor technology that improves service delivery. From independent solution mapping to connected devices, monitoring and evaluation, and completion reporting, we help agencies show what was delivered and what it achieved.",
      ],
      items: [
        { icon: "layers", title: "Solution Mapping", desc: "Independent, vendor-neutral assessments before budget is committed." },
        { icon: "sensor", title: "Infrastructure Monitoring", desc: "Connected sensors and devices to track the condition of public assets." },
        { icon: "truck", title: "Fleet & Asset Visibility", desc: "GPS tracking for vehicles, equipment and distributed assets." },
        { icon: "wifi", title: "Reliable Connectivity", desc: "Multi-network SIMs that keep devices online across sites and regions." },
        { icon: "chart", title: "Monitoring & Evaluation", desc: "Structured evidence that projects are delivering their intended outcomes." },
        { icon: "doc", title: "Accountability Reporting", desc: "Completion reports documenting what was delivered and what should happen next." },
      ],
    },
    spotlight: {
      eyebrow: "HOW WE HELP",
      heading: "Technology that can be accounted for.",
      body: "Public projects need clear evidence of what was procured, deployed and delivered. We combine connected technology with structured monitoring and reporting, so decisions and results can be verified.",
      image: img("government", "spotlight"),
      list: [
        { icon: "doc", label: "Procurement-ready technical specifications" },
        { icon: "shield", label: "Vendor-neutral recommendations" },
        { icon: "check", label: "Documented handover and close-out" },
      ],
    },
    solutions: {
      eyebrow: "KEY SOLUTION COMPONENTS",
      heading: "Everything needed to deliver and prove results",
      items: [
        { icon: "layers", title: "Solution Mapping", desc: "Invest in the right technology, from day one." },
        { icon: "sensor", title: "IoT Hardware", desc: "Devices sourced right and supported for the long run." },
        { icon: "wifi", title: "Connectivity Solutions", desc: "One SIM. Every network. No borders." },
        { icon: "chart", title: "Monitoring & Evaluation", desc: "Know what's working, before it's too late to fix." },
        { icon: "doc", title: "Completion Reporting", desc: "Close every project with clarity, not loose ends." },
      ],
    },
    closing: {
      heading: "Better public services, backed by evidence.",
      body: "Let's plan, deliver and document technology projects that stand up to scrutiny — together.",
    },
  },
  {
    slug: "development",
    name: "Development & Humanitarian",
    tagline:
      "Evidence-based monitoring and evaluation, and completion reporting, for donor-funded and humanitarian programs that require credible tracking.",
    heroImage: img("development", "hero"),
    overview: {
      eyebrow: "OVERVIEW",
      heading: "Credible evidence. Lasting impact.",
      body: [
        "Donor-funded and humanitarian programmes are expected to show what they delivered and what changed as a result. COVVERT combines field-based monitoring, technology-enabled data collection and formal completion reporting to give programmes credible, defensible tracking.",
      ],
      items: [
        { icon: "pin", title: "Field-Based Assessment", desc: "On-the-ground evaluation of how a deployment is actually performing." },
        { icon: "sensor", title: "Technology-Enabled Monitoring", desc: "Connected devices that capture data continuously, not just at visit time." },
        { icon: "wifi", title: "Reliable Connectivity", desc: "Devices that stay online in remote and cross-border locations." },
        { icon: "chart", title: "Evidence for Decisions", desc: "The data to course-correct while there is still time to act." },
        { icon: "doc", title: "Donor Accountability", desc: "Records and verification that donors and partners can rely on." },
        { icon: "layers", title: "Learning & Continuity", desc: "Documentation that turns a single project into reusable knowledge." },
      ],
    },
    spotlight: {
      eyebrow: "HOW WE HELP",
      heading: "From delivery to verified results.",
      body: "Programmes are judged on evidence. We help teams build monitoring into how a project runs, then close it with a formal record of what was delivered, what it achieved, and what should happen next.",
      image: img("development", "spotlight"),
      list: [
        { icon: "chart", label: "Monitoring built into delivery" },
        { icon: "doc", label: "Formal completion reports" },
        { icon: "check", label: "Verification of what was delivered" },
      ],
    },
    solutions: {
      eyebrow: "KEY SOLUTION COMPONENTS",
      heading: "Everything needed to track and prove impact",
      items: [
        { icon: "layers", title: "Solution Mapping", desc: "Independent assessment before technology is committed." },
        { icon: "sensor", title: "IoT Hardware", desc: "Field devices sourced and supported for remote conditions." },
        { icon: "wifi", title: "Connectivity Solutions", desc: "Multi-network SIMs that keep devices online." },
        { icon: "chart", title: "Monitoring & Evaluation", desc: "Structured, evidence-backed programme tracking." },
        { icon: "doc", title: "Completion Reporting", desc: "A clear, documented close to every project." },
      ],
    },
    closing: {
      heading: "Programmes that can prove their impact.",
      body: "Let's build monitoring and reporting that donors and communities can trust — together.",
    },
  },
  {
    slug: "energy",
    name: "Energy & Mining",
    tagline:
      "Remote monitoring, smart metering, and connectivity for energy and mining operations working in remote or distributed sites.",
    heroImage: img("energy", "hero"),
    overview: {
      eyebrow: "OVERVIEW",
      heading: "Remote sites. Reliable visibility.",
      body: [
        "Energy and mining operations run across remote and distributed sites, where problems are expensive to find late. COVVERT provides connected monitoring, smart metering and resilient connectivity so operators can see what is happening on site without being there.",
      ],
      items: [
        { icon: "monitor", title: "Remote Monitoring", desc: "Track site conditions and equipment status from a central view." },
        { icon: "bolt", title: "Smart Metering", desc: "Measure consumption and output with connected meters." },
        { icon: "drop", title: "Fuel & Liquid Monitoring", desc: "Level and flow sensors to track consumption and detect theft." },
        { icon: "truck", title: "Asset & Fleet Tracking", desc: "GPS tracking for vehicles, equipment and remote assets." },
        { icon: "globe", title: "Resilient Connectivity", desc: "Multi-network coverage where a single carrier falls short." },
        { icon: "shield", title: "Safety & Video", desc: "Dashcams and driver monitoring for safer operations." },
      ],
    },
    spotlight: {
      eyebrow: "HOW WE HELP",
      heading: "See your operation, wherever it is.",
      body: "Connected sensors, trackers and devices report back over multi-network connectivity, giving operators a live picture of remote sites, fuel, fleets and equipment.",
      image: img("energy", "spotlight"),
      list: [
        { icon: "wifi", label: "Connectivity that stays online" },
        { icon: "drop", label: "Fuel and liquid level monitoring" },
        { icon: "pin", label: "Vehicle and asset tracking" },
      ],
    },
    solutions: {
      eyebrow: "KEY SOLUTION COMPONENTS",
      heading: "Everything needed for remote-site visibility",
      items: [
        { icon: "layers", title: "Solution Mapping", desc: "The right technology for your sites, before procurement." },
        { icon: "sensor", title: "IoT Hardware", desc: "Trackers, fuel sensors, locks and dashcams for the field." },
        { icon: "wifi", title: "Connectivity Solutions", desc: "One SIM across multiple networks and borders." },
        { icon: "chart", title: "Monitoring & Evaluation", desc: "Evidence that deployed technology is performing." },
        { icon: "headset", title: "Ongoing Support", desc: "Maintenance and technical support so failures are caught early." },
      ],
    },
    closing: {
      heading: "Keep remote operations visible and under control.",
      body: "Let's build a more connected energy and mining operation together.",
    },
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
