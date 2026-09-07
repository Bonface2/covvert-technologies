import type { Metadata } from "next";
import Button from "@/components/Button";
import Placeholder from "@/components/Placeholder";
import DetailedSolutionPage from "@/components/DetailedSolutionPage";

export const metadata: Metadata = {
  title: "IoT Hardware Sourcing & Supply",
  description:
    "We source, supply, and support high-quality IoT hardware — matched to your environment, not just your spec sheet.",
};

const devices = [
  "Environmental monitoring sensor",
  "Water level & quality sensor",
  "Smart agriculture device",
  "Asset tracking & GPS device",
];

export default function IotHardwarePage() {
  return (
    <>
      <DetailedSolutionPage
        kicker="IOT HARDWARE SOURCING & SUPPLY"
        headline="The right devices, sourced right, supported for the long run."
        subheading="We source, supply, and support high-quality IoT hardware — matched to your environment, not just your spec sheet."
        heroPhoto="Photo: IoT hardware / device in the field"
        overviewPhoto="Photo: field installation / commissioning"
        closingPhoto="Photo: technician servicing IoT hardware"
        overview={[
          "IoT hardware only delivers value if it survives the environment it's deployed in, integrates with the systems around it, and keeps running long after installation day. Covvert Technologies sources and supplies IoT devices across a wide range of use cases, with the sourcing discipline of engineers who have to stand behind what they recommend — because we also install, commission, and support it.",
          "We work with a vetted network of manufacturers and distributors, allowing us to specify hardware based on performance and durability rather than being tied to a single brand.",
        ]}
        includes={[
          {
            title: "Environmental monitoring sensors",
            desc: "air quality, weather, soil, and ecological monitoring equipment for climate and environmental programs",
          },
          {
            title: "Water level & quality sensors",
            desc: "for water resource management, flood early-warning, and WASH (water, sanitation and hygiene) programs",
          },
          {
            title: "Smart agriculture devices",
            desc: "soil moisture, irrigation control, and crop-monitoring sensors for precision agriculture",
          },
          {
            title: "Energy & smart metering",
            desc: "smart meters and energy-monitoring devices for utilities and off-grid energy providers",
          },
          {
            title: "Asset tracking & GPS devices",
            desc: "for fleet management, logistics, and high-value asset protection",
          },
          {
            title: "Industrial monitoring sensors",
            desc: "vibration, temperature, and equipment-condition sensors for predictive maintenance",
          },
          {
            title: "IoT gateways & communication hardware",
            desc: "the connective layer that gets field data reliably from sensor to cloud",
          },
          {
            title: "Installation & commissioning",
            desc: "professional, field-tested installation, not just drop-shipped boxes",
          },
          {
            title: "Systems integration support",
            desc: "ensuring hardware talks correctly to dashboards, databases, and existing enterprise systems",
          },
          {
            title: "Technical support & maintenance",
            desc: "ongoing hardware support so devices keep reporting long after go-live",
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
      />

      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-[28px] leading-[1.18] font-extrabold">Sample hardware categories</h2>
          <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-4">
            {devices.map((device) => (
              <div key={device} className="rounded border border-line-soft bg-white p-5.5">
                <Placeholder label="Photo: device" className="mb-3 h-[130px]" />
                <h3 className="text-[14px] font-extrabold">{device}</h3>
                <p className="mt-1.5 text-[13px] text-ink-soft">
                  Short spec summary — voltage, connectivity, use case.
                </p>
                <span className="mt-2 inline-block text-[13px] font-bold text-accent">
                  View specifications →
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] italic text-[#8E97A3]">
            Full catalogue and specifications to be supplied by client.
          </p>
        </div>
      </section>

      <section className="bg-canvas px-6 py-14 text-center">
        <h2 className="text-xl font-bold">Need a device for a specific use case?</h2>
        <div className="mt-4 flex justify-center">
          <Button href="/contact">Request Product Information</Button>
        </div>
      </section>
    </>
  );
}
