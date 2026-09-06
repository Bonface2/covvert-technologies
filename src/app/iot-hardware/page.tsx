import type { Metadata } from "next";
import Button from "@/components/Button";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "IoT Hardware",
  description: "Product catalogue of IoT devices for connectivity, monitoring and data collection.",
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
      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-2 text-xs font-bold text-ink-soft">IOT HARDWARE</div>
          <h1 className="text-[28px] leading-[1.18] font-extrabold">Product catalogue</h1>
          <p className="mt-2.5 max-w-[60ch] text-ink-soft">
            Devices and equipment, with specifications and imagery supplied by the client.
          </p>
        </div>
      </section>

      <section className="bg-canvas px-6 pb-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
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
            Grid filters by category on the live site (e.g. connectivity, sensors, monitoring). Full
            catalogue and specifications to be supplied by client.
          </p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-[28px] leading-[1.18] font-extrabold">Specification sheet</h2>
          <div className="mt-4.5 rounded border border-line-soft px-4.5">
            <div className="grid grid-cols-[1.4fr_1fr_1fr_0.8fr] gap-3 border-b border-line-soft py-3.5 text-[11.5px] font-bold text-ink-soft">
              <div>Product</div>
              <div>Connectivity</div>
              <div>Power</div>
              <div>Datasheet</div>
            </div>
            {devices.map((device) => (
              <div
                key={device}
                className="grid grid-cols-[1.4fr_1fr_1fr_0.8fr] items-center gap-3 border-b border-line-soft py-3.5 text-[13px] last:border-b-0"
              >
                <div>{device}</div>
                <div>4G / LoRaWAN</div>
                <div>Solar / battery</div>
                <div className="font-bold text-accent">Download</div>
              </div>
            ))}
          </div>
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
