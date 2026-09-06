import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Technology & IoT Solutions",
  description:
    "Sourcing and supplying high-quality IoT devices for environmental monitoring, agriculture, energy, and asset tracking.",
};

export default function TechnologyPage() {
  return (
    <ServiceDetail
      kicker="TECHNOLOGY & IOT SOLUTIONS"
      title="Connectivity and monitoring technology"
      lede="We specialize in sourcing and supplying high-quality Internet of Things (IoT) devices, providing reliable, scalable solutions that enable real-time monitoring, improve efficiency, and maximize return on investment."
      photoLabel="Photo: technology / connectivity solution in use"
      primaryCtaHref="/iot-hardware"
      primaryCtaLabel="See IoT Hardware"
      cardsTitle="Solution areas"
      cards={[
        {
          title: "Connectivity solutions",
          desc: "IoT gateways and communication systems that keep field devices connected and reporting reliably.",
        },
        {
          title: "Remote monitoring",
          desc: "Environmental, water level & quality, energy and industrial monitoring sensors deployed in the field.",
        },
        {
          title: "Data collection",
          desc: "Smart agriculture devices and asset tracking & GPS devices for real-time data collection.",
        },
      ]}
    />
  );
}
