import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Product Specifications",
  description:
    "Full IoT hardware catalogue — GPS trackers, electronic locks, fuel & liquid sensors, and dashcams/MDVR — sourced and supported by Covvert Technologies.",
};

type Spec = { field: string; value: string };
type Product = { name: string; tag?: string; quote?: string; specs?: Spec[] };
type Brand = { brand: string; image: string; imageProduct: string; products: Product[] };
type Category = {
  id: string;
  title: string;
  desc: string;
  brands: Brand[];
};

const categories: Category[] = [
  {
    id: "trackers",
    title: "GPS Trackers & Asset Tracking",
    desc: "Vehicle, asset, and personal GPS trackers across 2G, 4G LTE, Bluetooth, and OBD-II form factors.",
    brands: [
      {
        brand: "Teltonika",
        image: "/images/catalogue/fmb920.png",
        imageProduct: "Teltonika FMB920",
        products: [
          { name: "FMB920", tag: "2G", quote: "Compact GPS tracker with Bluetooth, backup battery, and remote immobilization capability." },
          { name: "FMB140", tag: "2G", quote: "Tracker with integrated CAN data reading for vehicle diagnostics and advanced fleet monitoring." },
          { name: "FMB003", tag: "2G", quote: "Mini OBDII tracker for accurate real-time GPS tracking and diagnostics data." },
          { name: "FMB125", tag: "2G", quote: "Universal tracker with multiple I/O, Bluetooth, and dual SIM support for high flexibility." },
          { name: "FMB130", tag: "2G", quote: "Professional tracker with configurable inputs and outputs for advanced vehicle control." },
          { name: "FMB150", tag: "2G", quote: "Tracker with CAN data reading and advanced telematics features for heavy-duty fleets." },
          { name: "FMB965", tag: "2G", quote: "Compact GPS tracker with Bluetooth, backup battery, and remote immobilization capability." },
          { name: "FMC920", tag: "4G LTE Cat 1", quote: "Compact GPS tracker with Bluetooth, backup battery, and remote immobilization capability." },
          { name: "FMC125", tag: "4G LTE Cat 1", quote: "Versatile 4G LTE Cat 1 tracker with RS232, RS485 interfaces" },
          { name: "FMC130", tag: "4G LTE Cat 1", quote: "Advanced 4G LTE Cat 1 tracker with flexible inputs" },
          { name: "FMC150", tag: "4G LTE Cat 1", quote: "Advanced 4G LTE Cat 1 GPS tracker with integrated CAN data processor" },
          { name: "FMC650", tag: "4G LTE Cat 1", quote: "4G LTE Cat 1 tracker for advanced applications with high capacity backup battery and external antennas" },
          { name: "FMP100", tag: "2G", quote: "Plug-and-play tracker for easy installation via OBDII port with Bluetooth and GNSS connectivity." },
          { name: "FMT100", tag: "2G", quote: "Compact waterproof tracker designed for motorcycles, scooters, and power sports." },
          { name: "FTC921", tag: "4G LTE Cat 1", quote: "LTE Cat 1 tracker for modern fleets needing faster data, reliability, and long-term support." },
          { name: "FTC961", tag: "4G LTE Cat 1", quote: "LTE Cat 1 tracker for modern fleets needing faster data, reliability, and long-term support." },
        ],
      },
      {
        brand: "Concox",
        image: "/images/catalogue/Wetrack2.png",
        imageProduct: "Concox Wetrack 2",
        products: [
          { name: "Wetrack 2", quote: "Compact and cost-effective GPS tracker for real-time vehicle and asset tracking." },
          { name: "Wetrack Lite", quote: "Perfect for car rental, fleet management and logistics, the best-in-class Wetrack Lite mini vehicle GPS tracker is a feather-light, multi-function tracker." },
          { name: "V5", tag: "4G", quote: "4G GPS vehicle tracker with remote cut-off and ignition detection features." },
          { name: "VG03", tag: "4G LTE", quote: "Vehicle GPS tracker supporting 4G LTE, ignition detection, and remote immobilization." },
          { name: "AT1", quote: "Compact GPS tracker ideal for motorcycles and small vehicles, supporting real-time tracking and geo-fencing." },
          { name: "AT4", tag: "4G LTE", quote: "4G LTE waterproof GPS tracker with magnetic mount and long battery life for assets and vehicles." },
          { name: "LG300", tag: "4G LTE", quote: "Vehicle GPS tracker supporting 4G LTE and wide voltage input for versatile installations." },
          { name: "Personal Tracker PL601", quote: "The PL601 is a compact, portable personal tracker designed to safeguard children and the elderly." },
          { name: "Personal Tracker QBit M", quote: "Small volume, compact structure, the Qbit M is an advanced portable tracker designed to handle the personal security of the elderly, children and vulnerable people." },
        ],
      },
      {
        brand: "Other brands",
        image: "/images/catalogue/tk303.avif",
        imageProduct: "TK303F",
        products: [
          { name: "TK303F", tag: "2G", quote: "Reliable 2G GPS tracker designed for vehicle security, fleet tracking, and personal use." },
          { name: "TK311C", tag: "4G LTE", quote: "Compact 4G LTE tracker designed for real-time vehicle tracking and remote monitoring." },
          { name: "LW2G-4B", tag: "2G", quote: "Durable 2G GPS tracker optimized for motorbikes, small vehicles, and electric scooters." },
          { name: "GT06N", tag: "2G", quote: "One of the most popular 2G vehicle GPS trackers known for reliability and versatility." },
          { name: "TK905", quote: "Magnetic waterproof GPS tracker designed for asset tracking and car security." },
          { name: "Queclink GV57", tag: "LTE", quote: "Compact LTE GPS tracker with integrated antennas and advanced I/O interface." },
          { name: "LTS 3YS Magnetic Tracker", quote: "Ultra-long battery life magnetic GPS tracker with light sensor for advanced asset monitoring." },
          { name: "MT009 Tracker with Light Sensor", quote: "Compact GPS tracker with light sensor technology for enhanced security monitoring." },
        ],
      },
    ],
  },
  {
    id: "e-locks",
    title: "Electronic Locks & Container Security",
    desc: "GPS-enabled padlocks and e-seals for container, trailer, and high-value cargo security.",
    brands: [
      {
        brand: "Jointech",
        image: "/images/catalogue/jt705.jpg",
        imageProduct: "Jointech JT705A",
        products: [
          { name: "JT705A", quote: "door lock monitoring inteligentGPS container padlock for ISO container tracking, transportation access control security solution" },
          { name: "JT705C", quote: "advanced security solution for valuable cargo, offering real-time tracking and remote video monitoring" },
          { name: "JT701", quote: "GPS remote intelligent eseal lock tracker device, which is special designed for container tracking, monitoring and management solution" },
          { name: "JT709A", quote: "Bluetooth-enabled GPS padlock that supports various unlocking methods including Bluetooth, RFID, SMS, and app-based unlocking" },
          { name: "JT802", quote: "suitable for GPS tracking of tank trucks and tank assets, explosion proof GPS tracker for oil & fuel & gas assets tracking" },
          { name: "JT709C", quote: "compact, intelligent seal lock designed for logistics and asset management" },
        ],
      },
      {
        brand: "Topfly",
        image: "/images/catalogue/KnightX-100-front-45-degree-view-768x567.png",
        imageProduct: "Topfly KnightX 100",
        products: [
          { name: "SolarX 110", tag: "4G CAT-1", quote: "suitable for tracking and monitoring assets such as containers, trailers, trucks, etc." },
          { name: "SolarX 310", tag: "4G CAT-M1", quote: "suitable for tracking and monitoring assets such as containers, trailers, trucks, etc." },
          { name: "KnightX 100", quote: "Compact 4G GPS tracker designed for vehicles and logistics operations — delivering reliable real-time tracking and smart alerts." },
          { name: "SolarX 120", tag: "4G CAT-1", quote: "suitable for tracking and monitoring assets such as containers, trailers, trucks, etc." },
          { name: "TLP2-SFB", tag: "4G LTE", quote: "suitable for tracking and monitoring assets such as containers, trailers, trucks, etc." },
          { name: "WarriorX 300", quote: "Rugged 4G AI-powered tracker built for heavy-duty vehicles, offering advanced diagnostics, driver behavior analytics, and multi-sensor support." },
          { name: "TLW2-2BL", tag: "4G LTE", quote: "basic hardwired tracker for tracking powered assets and vehicles, with ignition detection and output for relay." },
          { name: "PioneerX 100", tag: "4G CAT-1", quote: "entry level hardwired tracker that has I/Os that could be used for ignition detection, relay, buzzer, SOS button, or your own accessories." },
          { name: "PioneerX 101", tag: "4G CAT-1", quote: "entry to medium level hardwired tracker that has I/Os that could be used for ignition detection, relay, buzzer, SOS button, or other accessories." },
        ],
      },
    ],
  },
  {
    id: "fuel-liquid",
    title: "Fuel & Liquid Monitoring Sensors",
    desc: "Capacitive, ultrasonic, and radar level sensors plus flowmeters for fuel and liquid monitoring, theft detection, and consumption control.",
    brands: [
      {
        brand: "Escort",
        image: "/images/catalogue/fls-bte-768x768.png",
        imageProduct: "Escort TD BLE",
        products: [
          { name: "Escort TD BLE", quote: "Wireless BLE fuel level sensor providing real-time data accuracy with easy installation and robust battery life." },
          { name: "Escort TD-150 BLE", quote: "High-precision BLE fuel sensor offering extended battery life and advanced anti-fraud monitoring for fleet safety." },
          { name: "Escort TD-150", quote: "High precision capacitive fuel level sensors (FLS), designed to monitor the fuel consumption, loadings, offloadings and thefts on all types of vehicles" },
          { name: "Escort TD 500", quote: "Ideal solution in the complex monitoring and control system of fuel consumption management." },
          { name: "Escort TD 600", quote: "Universal capacitive fuel level sensor that has 5 operational modes and is able to communicate with any GPS monitoring device." },
          { name: "eCargosens", quote: "Used to monitor and fix the load on the axle of the vehicle." },
          { name: "Escort I 5", quote: "is required to display the actual fuel level in the tank…" },
          { name: "Escort TH-BLE", quote: "is a device to measure temperature, humidity and magnetic field based on the…" },
          { name: "Escort ALS", quote: "is used for monitoring the level of liquid in storage containers in various…" },
          { name: "Escort DU-BLE", quote: "is designed to measure the angle at which certain parts of the heavy machinery…" },
          { name: "Escort DU-180", quote: "is a measuring device providing permanent control of the angle change status in…" },
          { name: "Escort DB-2", quote: "enables to keep control of the dynamics in the level fill change of the container…" },
        ],
      },
      {
        brand: "Eurosens — Liquid Level",
        image: "/images/catalogue/Dominator-AFRS_1.jpg",
        imageProduct: "Eurosens Dominator",
        products: [
          {
            name: "Eurosens Dominator",
            specs: [
              { field: "Power voltage", value: "10–50 V" },
              { field: "Reverse polarity protection", value: "Yes" },
              { field: "Max. measurement error", value: "±1%" },
              { field: "Temperature range", value: "-40 to +85 °C" },
              { field: "Output interfaces", value: "analog/frequency, RS232/RS485, CAN" },
              { field: "Service interface", value: "ISO 9141 (K-Line)" },
              { field: "IP protection class", value: "IP 67" },
              { field: "Built-in galvanic isolation", value: "up to 500 V" },
            ],
          },
          {
            name: "Eurosens Dominator Bt",
            specs: [
              { field: "Relative measurement error", value: "±1%" },
              { field: "Battery operating time", value: "5 years" },
              { field: "Output interface", value: "Bluetooth BLE (Advertising-packets protocol)" },
              { field: "Data transmission range", value: "200 m" },
              { field: "Transmitter power", value: "+8 dBm" },
              { field: "Degree of protection", value: "IP 67" },
              { field: "Temperature range", value: "-40 to +85 °C" },
            ],
          },
          {
            name: "Eurosens Dominator Mini",
            specs: [
              { field: "Power voltage", value: "10–50 V" },
              { field: "Reverse polarity protection", value: "Yes" },
              { field: "Max. measurement error", value: "±1%" },
              { field: "Temperature range", value: "-40 to +85 °C" },
              { field: "Output interfaces", value: "analog/frequency, RS232/RS485, CAN" },
              { field: "Service interface", value: "ISO 9141 (K-Line)" },
              { field: "IP protection class", value: "IP 67" },
              { field: "Min. case height", value: "22 mm" },
              { field: "Certification", value: "CE, E-mark" },
            ],
          },
          {
            name: "Eurosens MWS 2",
            specs: [
              { field: "Power voltage", value: "10–50 V" },
              { field: "Measuring range", value: "100–10000 mm" },
              { field: "Reverse polarity protection", value: "Yes" },
              { field: "Temperature range", value: "-40 to +85 °C" },
              { field: "Output interface", value: "RS-485" },
              { field: "Communication protocols", value: "LLS, MODBUS RTU" },
              { field: "Overall dimensions", value: "100 × 90 × 25 mm" },
              { field: "IP protection class", value: "IP 67" },
              { field: "Max. current consumption", value: "50 mA (12 VDC)" },
            ],
          },
          {
            name: "Eurosens Dizzi",
            specs: [
              { field: "Supply voltage", value: "11–30 V" },
              { field: "Tank bottom thickness", value: "0–5 mm" },
              { field: "Resolution (at rest)", value: "0.1 mm" },
              { field: "Reverse polarity protection", value: "Yes" },
              { field: "Temperature range", value: "-40 to +85 °C" },
              { field: "Output interface", value: "RS485" },
              { field: "Digital protocols", value: "LLS, Modbus" },
              { field: "IP protection class", value: "IP 67" },
            ],
          },
          {
            name: "Eurosens Dock",
            specs: [
              { field: "Power supply voltage", value: "9–15 V" },
              { field: "Temperature range", value: "-40 to +85 °C" },
              { field: "Output interfaces", value: "RS485" },
              { field: "Digital protocols", value: "LLS" },
              { field: "Current consumption", value: "40 mA" },
            ],
          },
          {
            name: "Eurosens Dash",
            specs: [
              { field: "Power supply voltage", value: "9–32 V" },
              { field: "Temperature range", value: "-40 to +85 °C" },
              { field: "Output interfaces", value: "RS485" },
              { field: "Digital protocols", value: "LLS" },
              { field: "Current consumption", value: "40 mA" },
            ],
          },
          {
            name: "Eurosens LPS",
            specs: [
              { field: "Supply voltage", value: "9–32 V" },
              { field: "Temperature range", value: "-40 to +85 °C" },
              { field: "Output interfaces", value: "RS485" },
              { field: "Digital protocols", value: "LLS" },
              { field: "Current consumption", value: "40 mA" },
            ],
          },
        ],
      },
      {
        brand: "Eurosens — Fuel Consumption",
        image: "/images/catalogue/Direct_580x508.jpg",
        imageProduct: "Eurosens Direct",
        products: [
          {
            name: "Eurosens Direct",
            specs: [
              { field: "Power voltage", value: "10–50 V" },
              { field: "Reverse polarity protection", value: "Yes" },
              { field: "Max. measurement error", value: "±1%" },
              { field: "Temperature range", value: "-40 to +85 °C" },
              { field: "Output interfaces", value: "RS485, K-Line, CAN" },
              { field: "Service interface", value: "ISO 9141 (K-Line)" },
              { field: "IP protection class", value: "IP 67" },
              { field: "Flow range", value: "up to 500 l/h" },
            ],
          },
          {
            name: "Eurosens Delta",
            specs: [
              { field: "Power voltage", value: "10–50 V" },
              { field: "Connection thread", value: "M14×1.5" },
              { field: "Reverse polarity protection", value: "Yes" },
              { field: "Max. measurement error", value: "±1%" },
              { field: "Temperature range", value: "-40 to +85 °C" },
              { field: "Output interfaces", value: "RS485, K-Line, CAN" },
              { field: "Service interface", value: "ISO 9141 (K-Line)" },
              { field: "IP protection class", value: "IP 67" },
              { field: "Flow range", value: "10–500 l/h" },
              { field: "Warranty", value: "2 years, no fuel flow limitation" },
            ],
          },
          {
            name: "Eurosens Direct 1500",
            specs: [
              { field: "Measurement range", value: "30–1500 l/h" },
              { field: "Power voltage", value: "10–50 V" },
              { field: "Max. measurement error", value: "±1%" },
              { field: "Temperature range", value: "-40 to +85 °C" },
              { field: "Output interfaces", value: "RS485, K-Line, CAN" },
              { field: "IP protection class", value: "IP 67" },
            ],
          },
          {
            name: "Eurosens Direct 3000",
            specs: [
              { field: "Measurement range", value: "60–3000 l/h" },
              { field: "Power voltage", value: "10–50 V" },
              { field: "Max. measurement error", value: "±1%" },
              { field: "Temperature range", value: "-40 to +85 °C" },
              { field: "Output interfaces", value: "RS485, K-Line, CAN" },
              { field: "IP protection class", value: "IP 67" },
            ],
          },
          {
            name: "Eurosens Direct 5000",
            specs: [
              { field: "Measurement range", value: "250–5000 l/h" },
              { field: "Power voltage", value: "10–50 V" },
              { field: "Max. measurement error", value: "±1%" },
              { field: "Temperature range", value: "-40 to +85 °C" },
              { field: "Output interfaces", value: "RS485, K-Line, CAN" },
              { field: "IP protection class", value: "IP 67" },
            ],
          },
          { name: "Eurosens Deaerator", quote: "Fuel system air-removal accessory used alongside Eurosens flowmeters." },
          { name: "Installation Kits", quote: "Mounting and wiring accessory kits for Eurosens flowmeter installation." },
          { name: "Test Stands", quote: "Calibration and verification equipment for flowmeter testing." },
        ],
      },
    ],
  },
  {
    id: "dashcams",
    title: "Dashcams & Mobile DVR (MDVR)",
    desc: "AI-powered dashcams and multi-channel MDVR systems with driver monitoring (DMS), ADAS alerts, and live 4G video telematics.",
    brands: [
      {
        brand: "Howen",
        image: "/images/catalogue/Howen-Hero-ME40-02-v8-AI-DashCam_www.devicestech.co_.ke_.jpg.webp",
        imageProduct: "Howen Hero-ME40-02 V8",
        products: [
          { name: "Hero-ME40-02 V8", quote: "AI-powered dashcam built for professional fleet management" },
          { name: "Hero-ME31-08 V5", quote: "Advanced multi-channel AI MDVR for fleet video surveillance and intelligent monitoring", tag: "12CH" },
          { name: "Hero-ME41-04", quote: "Compact 5-channel mobile DVR supporting AHD cameras and SD card storage for fleet video monitoring", tag: "5CH" },
          { name: "Hero-ME40-02 V3", quote: "Crystal-clear dual-channel recording, 4G LTE connectivity, and GPS tracking for real-time fleet visibility" },
          { name: "Hero-MC30-01", quote: "Next-generation AI DashCam featuring advanced driver monitoring (DMS), ADAS alerts, 4G connectivity, and GPS tracking" },
        ],
      },
      {
        brand: "MettaX",
        image: "/images/catalogue/MC201.webp",
        imageProduct: "MettaX MC201",
        products: [
          { name: "MC201", quote: "Dual 2K camera AI dashcam featuring DMS, ADAS, and real-time GPS tracking", tag: "2CH" },
          { name: "MC202X", quote: "Intelligent 2-channel AI dashcam designed for fleet safety", tag: "2CH" },
          { name: "MC202N", quote: "AI-powered dual dashcam offering fatigue detection, lane departure, and collision warnings", tag: "2CH" },
          { name: "MC202E", quote: "Dual dashcam for enhanced visual clarity with night vision and GPS-enabled tracking", tag: "2CH" },
          { name: "MC202A", quote: "Compact single-channel AI dashcam with DMS, GPS, and LTE", tag: "1CH" },
          { name: "MC401X", quote: "4-channel AI dashcam providing complete vehicle coverage, DMS/ADAS alerts, and 4G live view", tag: "4CH" },
          { name: "MC401N", quote: "AI-powered dashcam system capturing multiple vehicle angles", tag: "4CH" },
          { name: "MC402", quote: "Professional 4-channel AI dashcam built for large fleet surveillance", tag: "4CH" },
          { name: "MC403", quote: "Advanced 4-channel recording system with AI driver safety", tag: "4CH" },
          { name: "MC403L", quote: "Enhanced 4-channel AI dashcam with wide-angle coverage, LTE streaming", tag: "4CH" },
          { name: "MC904", quote: "4-channel AI MDVR with GPS and LTE streaming", tag: "MDVR" },
          { name: "MC904P", quote: "Ruggedized 4-channel AI MDVR with GPS and LTE streaming", tag: "MDVR" },
          { name: "MC908", quote: "8-channel AI MDVR for large-fleet video management", tag: "8CH MDVR" },
          { name: "MC908F", quote: "8-channel AI MDVR with IP66 waterproof design", tag: "8CH MDVR" },
          { name: "MC912", quote: "12-channel AI MDVR system", tag: "12CH MDVR" },
          { name: "MC912I", quote: "12-channel AI MDVR system with cloud integration", tag: "12CH MDVR" },
        ],
      },
      {
        brand: "JimiIoT",
        image: "/images/catalogue/jc450.png",
        imageProduct: "JimiIoT JC450 Series",
        products: [
          { name: "JC450 Series", quote: "LTE dashcam system designed specifically for use in commercial vehicles." },
          { name: "JC261P", quote: "Dual-channel AI-powered MDVR delivering enhanced video surveillance and driver assistance for professional fleet management." },
          { name: "JC261", quote: "Reliable dual-channel AI dashcam offering video surveillance, recording, and driver assistance for modern fleets." },
          { name: "JC400D", quote: "DMS-enabled dual-channel LTE dashcam for real-time event recording, driver monitoring, and behavior analysis." },
          { name: "JC400", quote: "Dual-channel LTE dashcam offering multiple alerts, video surveillance, and reliable fleet monitoring." },
          { name: "JC400P", quote: "Compact 4G-enabled dashcam featuring dual-channel recording, cloud connectivity, and alert capabilities." },
          { name: "JC181", quote: "Compact dual-channel dashcam with built-in GPS and high-definition video capture for front-facing monitoring." },
          { name: "JC120", quote: "Compact single-channel dashcam supporting dual-mode positioning and video surveillance for small fleets." },
          { name: "JC170 DMS AI Camera", quote: "Advanced DMS camera equipped with visual AI algorithms and a compact, highly integrated design for driver monitoring." },
        ],
      },
    ],
  },
];

export default function IotHardwareCataloguePage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-6 pt-16 pb-14 text-white"
        style={{
          backgroundColor: "#002452",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1.6px), linear-gradient(115deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(245deg, rgba(255,255,255,0.05) 1px, transparent 1px), radial-gradient(120% 140% at 85% 0%, #005ACC 0%, #003880 55%, #002452 100%)",
          backgroundSize: "26px 26px, 52px 52px, 52px 52px, 100% 100%",
        }}
      >
        <div className="mx-auto max-w-[1320px] px-8 md:px-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[.14] bg-white/[.06] py-1.5 pl-3.5 pr-3.5 text-xs font-bold text-[#C7D4EA]">
            IOT HARDWARE CATALOGUE
          </span>
          <h1 className="mt-6 max-w-[20ch] text-4xl leading-[1.14] font-extrabold text-white md:text-[44px]">
            Product <span className="text-[#338DFF]">Specifications</span>
          </h1>
          <p className="mt-5 max-w-[62ch] text-[#C7D4EA]">
            Every model listed below is quoted directly from the manufacturer or distributor
            listing — full datasheets, pricing, and lead times are shared during Solution Mapping
            and procurement.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-full border border-white/[.14] bg-white/[.06] px-3.5 py-1.5 text-xs font-bold text-[#C7D4EA] transition-colors hover:bg-white/[.12]"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className="scroll-mt-20 px-6 py-10">
          <div className="mx-auto max-w-[1320px] rounded border border-line-soft bg-white p-8 shadow-sm md:p-12">
            <h2 className="text-xl font-extrabold">{cat.title}</h2>
            <p className="mt-2 max-w-[80ch] text-[13.5px] text-ink-soft">{cat.desc}</p>

            <div className="mt-7 flex flex-col gap-9">
              {cat.brands.map((b) => (
                <div key={b.brand} className="grid gap-5 sm:grid-cols-[160px_1fr]">
                  <div>
                    <div className="relative h-[160px] overflow-hidden rounded border border-line-soft bg-[#F6F7F9]">
                      <Image src={b.image} alt={b.imageProduct} fill className="object-cover" />
                    </div>
                    <p className="mt-1.5 text-center text-[11px] font-bold text-accent">{b.imageProduct}</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[420px] border-collapse text-left text-[13px]">
                      <thead>
                        <tr className="border-b border-line-soft text-[11px] font-bold text-ink-soft">
                          <th className="w-[26%] py-2 pr-4">Product</th>
                          <th className="py-2">Specifications</th>
                        </tr>
                      </thead>
                      <tbody>
                        {b.products.map((p) => (
                          <tr key={p.name} className="border-b border-line-soft/70 align-top">
                            <td className="py-2.5 pr-4 font-bold text-ink">
                              {p.name}
                              {p.tag && (
                                <span className="ml-1.5 inline-block rounded-full bg-accent-soft px-2 py-0.5 align-middle text-[10px] font-bold text-accent">
                                  {p.tag}
                                </span>
                              )}
                            </td>
                            <td className="py-2.5 text-ink-soft">
                              {p.specs ? (
                                <dl className="grid grid-cols-1 gap-x-5 gap-y-1 sm:grid-cols-2">
                                  {p.specs.map((s) => (
                                    <div key={s.field} className="flex gap-1">
                                      <dt className="shrink-0 font-semibold text-ink">{s.field}:</dt>
                                      <dd>{s.value}</dd>
                                    </div>
                                  ))}
                                </dl>
                              ) : (
                                <span className="italic">&ldquo;{p.quote}&rdquo;</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-ink px-6 py-14 text-center text-white">
        <h2 className="text-[28px] leading-[1.18] font-extrabold text-white">
          Need a device for a specific use case?
        </h2>
        <p className="mt-2.5 text-[#B9BFC9]">
          Full datasheets, pricing, and lead times are shared once we understand your deployment.
        </p>
        <div className="mt-5.5 flex flex-wrap justify-center gap-3">
          <Button href="/contact">Request Product Information</Button>
          <Button href="/iot-hardware" variant="secondary-light">
            ← Back to IoT Hardware
          </Button>
        </div>
      </section>
    </>
  );
}
