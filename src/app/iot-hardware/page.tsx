import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import DetailedSolutionPage from "@/components/DetailedSolutionPage";

export const metadata: Metadata = {
  title: "IoT Hardware Sourcing & Supply",
  description:
    "We source, supply, and support high-quality IoT hardware — matched to your environment, not just your spec sheet.",
};

function ChipIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l1.5 1.5M18 6l-1.5 1.5M6 18l1.5-1.5M18 18l-1.5-1.5" />
    </svg>
  );
}

const deviceCategories = [
  {
    title: "GPS Trackers & Asset Tracking",
    desc: "Teltonika, Concox, and other vetted brands across 2G, 4G LTE, and Bluetooth.",
    href: "/iot-hardware/catalogue#trackers",
  },
  {
    title: "Electronic Locks & Container Security",
    desc: "GPS-enabled padlocks and e-seals for container, trailer, and cargo security.",
    href: "/iot-hardware/catalogue#e-locks",
  },
  {
    title: "Fuel & Liquid Monitoring Sensors",
    desc: "Capacitive, ultrasonic, and radar level sensors, plus fuel flowmeters.",
    href: "/iot-hardware/catalogue#fuel-liquid",
  },
  {
    title: "Dashcams & Mobile DVR (MDVR)",
    desc: "AI dashcams and multi-channel MDVR with driver monitoring and live video.",
    href: "/iot-hardware/catalogue#dashcams",
  },
];

export default function IotHardwarePage() {
  return (
    <DetailedSolutionPage
      title="IoT Hardware Sourcing & Supply"
      overviewPhoto="Photo: field installation / commissioning"
      overviewImage="/images/iot-hardware/field-devices-connectivity.png"
      closingPhoto="Photo: technician servicing IoT hardware"
      closingImage="/images/iot-hardware/fleet-tracking.png"
      overview={[
          "IoT hardware only delivers value if it survives the environment it's deployed in, integrates with the systems around it, and keeps running long after installation day. Covvert Technologies sources and supplies IoT devices across a wide range of use cases, with the sourcing discipline of engineers who have to stand behind what they recommend — because we also install, commission, and support it.",
          "We work with a vetted network of manufacturers and distributors, allowing us to specify hardware based on performance and durability rather than being tied to a single brand.",
        ]}
        includes={[
          {
            title: "Environmental monitoring sensors",
            desc: "air quality, weather, soil, and ecological monitoring equipment for climate and environmental programs",
          icon: "/images/icons/iot-hardware/devices-sensors.png",
          },
          {
            title: "Water level & quality sensors",
            desc: "for water resource management, flood early-warning, and WASH (water, sanitation and hygiene) programs",
          icon: "/images/icons/iot-hardware/devices-sensors.png",
          },
          {
            title: "Smart agriculture devices",
            desc: "soil moisture, irrigation control, and crop-monitoring sensors for precision agriculture",
          icon: "/images/icons/iot-hardware/ruggedized-hardware.png",
          },
          {
            title: "Energy & smart metering",
            desc: "smart meters and energy-monitoring devices for utilities and off-grid energy providers",
          icon: "/images/icons/iot-hardware/monitoring-analytics.png",
          },
          {
            title: "Asset tracking & GPS devices",
            desc: "for fleet management, logistics, and high-value asset protection",
          icon: "/images/icons/iot-hardware/connectivity-networks.png",
          },
          {
            title: "Industrial monitoring sensors",
            desc: "vibration, temperature, and equipment-condition sensors for predictive maintenance",
          icon: "/images/icons/iot-hardware/ruggedized-hardware.png",
          },
          {
            title: "IoT gateways & communication hardware",
            desc: "the connective layer that gets field data reliably from sensor to cloud",
          icon: "/images/icons/iot-hardware/connectivity-networks.png",
          },
          {
            title: "Installation & commissioning",
            desc: "professional, field-tested installation, not just drop-shipped boxes",
          icon: "/images/icons/iot-hardware/installation-support.png",
          },
          {
            title: "Systems integration support",
            desc: "ensuring hardware talks correctly to dashboards, databases, and existing enterprise systems",
          icon: "/images/icons/iot-hardware/integration-apis.png",
          },
          {
            title: "Technical support & maintenance",
            desc: "ongoing hardware support so devices keep reporting long after go-live",
          icon: "/images/icons/iot-hardware/installation-support.png",
          },
        ]}
        approach={[
          {
            title: "Specify",
            desc: "hardware selection grounded in the Solution Mapping output (or a standalone hardware assessment if that's all that's needed)",
          },
          {
            title: "Source",
            desc: "procurement from vetted manufacturers, balancing cost, durability, lead time, and after-sales support availability",
          },
          {
            title: "Supply & deploy",
            desc: "logistics, installation, and commissioning handled end-to-end, including field testing under real conditions",
          },
          {
            title: "Support",
            desc: "maintenance agreements and technical support so hardware failures are caught and resolved before they become data gaps",
          },
        ]}
      whyItMatters="IoT failure in the field is rarely about the sensor chip — it's about heat, dust, power instability, poor mounting, or a device nobody is watching. We build for the conditions devices will actually face, not the datasheet conditions they were tested in."
      whoThisIsFor="Organizations deploying field sensors, monitoring networks, or connected assets across remote, harsh, or distributed environments — particularly in agriculture, environmental monitoring, water and energy utilities, and logistics."
    >
      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1320px] rounded border border-line-soft bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-xl font-extrabold">Hardware categories</h2>
          <p className="mt-2 max-w-[70ch] text-ink-soft">
            A sample of the device families in our sourcing catalogue. Each category links to full
            product specifications.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {deviceCategories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="rounded border border-line-soft bg-canvas p-5.5 transition-shadow hover:shadow-md"
              >
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft">
                  <ChipIcon className="h-5 w-5 text-accent" />
                </span>
                <h3 className="text-[14px] font-extrabold">{category.title}</h3>
                <p className="mt-1.5 text-[13px] text-ink-soft">{category.desc}</p>
                <span className="mt-2 inline-block text-[13px] font-bold text-accent">
                  View specifications →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line-soft pt-6">
            <Button href="/iot-hardware/catalogue" variant="ghost">
              View Full Product Catalogue →
            </Button>
            <Button href="/contact" variant="ghost">
              Request Product Information
            </Button>
          </div>
        </div>
      </section>
    </DetailedSolutionPage>
  );
}
