import {
  Shield,
  HardHat,
  Gauge,
  Wrench,
  Zap,
  Truck,
  Package,
  Focus,
  Wifi,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Ceramic & Wear Lining",
    description:
      "Protecting equipment for enhanced durability and efficiency. We offer industry-leading ceramic and wear lining solutions to protect machinery from abrasion and corrosion, ensuring optimal performance and extended lifespan in demanding environments.",
    features: ["Alumina ceramics", "Rubber lining", "Custom fabrication"],
  },
  {
    icon: HardHat,
    title: "Civil Construction",
    description:
      "Comprehensive civil engineering and construction services for mining infrastructure, from earthworks to structural builds.",
    features: ["Earthworks", "Concrete structures", "Site development"],
  },
  {
    icon: Gauge,
    title: "Roof Bolter Torque Indicating System",
    description:
      "Advanced torque monitoring technology for roof bolters, ensuring safe and accurate bolt installation in underground operations.",
    features: ["Real-time monitoring", "Data logging", "Safety compliance"],
  },
  {
    icon: Wrench,
    title: "Mechanical",
    description:
      "Expert mechanical maintenance, repair, and fabrication services for all types of heavy mining equipment and processing plants.",
    features: ["Plant maintenance", "Fabrication", "Shutdowns"],
  },
  {
    icon: Zap,
    title: "Electrical",
    description:
      "Complete electrical installation, maintenance, and automation services for mining operations and processing facilities.",
    features: ["HV/LV systems", "Instrumentation", "Automation"],
  },
  {
    icon: Truck,
    title: "Earth Moving Parts",
    description:
      "OEM and aftermarket ground engaging tools and wear parts for excavators, dozers, loaders, and all earthmoving equipment.",
    features: ["GET components", "Wear parts", "Undercarriage"],
  },
  {
    icon: Package,
    title: "Logistics and Supply",
    description:
      "End-to-end supply chain management ensuring timely delivery of critical parts, materials, and equipment to remote mine sites.",
    features: ["Procurement", "Warehousing", "Remote delivery"],
  },
  {
    icon: Focus,
    title: "Precision Laser Alignment",
    description:
      "Laser-based precision alignment and calibration services for rotating equipment, conveyors, and processing plant machinery.",
    features: ["Shaft alignment", "Belt tracking", "Vibration analysis"],
  },
  {
    icon: Wifi,
    title: "Digital Infrastructure",
    description:
      "Smart mining technology solutions including connectivity, IoT sensors, data platforms, and digital twin implementations.",
    features: ["IoT networks", "Data analytics", "Digital twins"],
  },
];

export default function MiningSolutions() {
  return (
    <section id="mining-solutions" className="py-24 bg-graphite-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Mining Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-graphite-900 mb-6">
            End-to-End Mining{" "}
            <span className="text-brand-500">Expertise</span>
          </h2>
          <p className="text-lg text-steel-500 leading-relaxed">
            From wear protection to digital infrastructure, we provide
            comprehensive mining solutions that address every challenge across
            the mining value chain.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white border border-steel-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 group-hover:from-brand-500 group-hover:to-brand-600 flex items-center justify-center mb-5 transition-all duration-300">
                <sol.icon className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-graphite-900 group-hover:text-brand-600 transition-colors flex items-center gap-2 mb-2">
                {sol.title}
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-sm text-steel-500 leading-relaxed mb-4">
                {sol.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {sol.features.map((feature, fIdx) => (
                  <span
                    key={fIdx}
                    className="text-xs px-2.5 py-1 bg-graphite-50 group-hover:bg-brand-50 text-steel-500 group-hover:text-brand-700 rounded-md transition-colors"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
