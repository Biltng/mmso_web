// ✅ All imports at the TOP
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
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
  Phone,
} from "lucide-react";

const solutions = [
  {
    slug: "ceramic-wear-lining",
    icon: Shield,
    title: "Ceramic & Wear Lining",
    description:
      "Protecting equipment for enhanced durability and efficiency. We offer industry-leading ceramic and wear lining solutions to protect machinery from abrasion and corrosion, ensuring optimal performance and extended lifespan in demanding environments.",
    features: ["Alumina ceramics", "Rubber lining", "Custom fabrication"],
    details: [
      "High-density alumina ceramic tiles and composite liners",
      "Rubber and polyurethane wear lining systems",
      "Custom-engineered solutions for chutes, hoppers, and pipes",
      "On-site installation and maintenance services",
      "Extended equipment lifecycle and reduced downtime",
    ],
  },
  {
    slug: "civil-construction",
    icon: HardHat,
    title: "Civil Construction",
    description:
      "Comprehensive civil engineering and construction services for mining infrastructure, from earthworks to structural builds.",
    features: ["Earthworks", "Concrete structures", "Site development"],
    details: [
      "Large-scale earthworks and site preparation",
      "Reinforced concrete foundations and structures",
      "Haul road construction and maintenance",
      "Drainage and water management systems",
      "Mine camp and facility construction",
    ],
  },
  {
    slug: "roof-bolter-torque-indicating-system",
    icon: Gauge,
    title: "Roof Bolter Torque Indicating System",
    description:
      "Advanced torque monitoring technology for roof bolters, ensuring safe and accurate bolt installation in underground operations.",
    features: ["Real-time monitoring", "Data logging", "Safety compliance"],
    details: [
      "Digital torque indication for precise bolt tensioning",
      "Real-time monitoring dashboards and alerts",
      "Comprehensive data logging and reporting",
      "Compliance with underground safety standards",
      "Easy retrofit to existing roof bolter equipment",
    ],
  },
  {
    slug: "mechanical",
    icon: Wrench,
    title: "Mechanical",
    description:
      "Expert mechanical maintenance, repair, and fabrication services for all types of heavy mining equipment and processing plants.",
    features: ["Plant maintenance", "Fabrication", "Shutdowns"],
    details: [
      "Planned and breakdown maintenance services",
      "Heavy equipment overhaul and refurbishment",
      "Custom steel fabrication and machining",
      "Shutdown and turnaround project management",
      "Conveyor system maintenance and upgrades",
    ],
  },
  {
    slug: "electrical",
    icon: Zap,
    title: "Electrical",
    description:
      "Complete electrical installation, maintenance, and automation services for mining operations and processing facilities.",
    features: ["HV/LV systems", "Instrumentation", "Automation"],
    details: [
      "High and low voltage installations and reticulation",
      "Switchgear, MCC, and transformer services",
      "PLC programming and SCADA systems",
      "Instrumentation and process control",
      "Electrical compliance testing and certification",
    ],
  },
  {
    slug: "earth-moving-parts",
    icon: Truck,
    title: "Earth Moving Parts",
    description:
      "OEM and aftermarket ground engaging tools and wear parts for excavators, dozers, loaders, and all earthmoving equipment.",
    features: ["GET components", "Wear parts", "Undercarriage"],
    details: [
      "Bucket teeth, adapters, and cutting edges",
      "Ripper boots, shanks, and protective shrouds",
      "Undercarriage components for track-type machines",
      "Compatible with CAT, Komatsu, Hitachi, and more",
      "Competitive pricing with fast delivery",
    ],
  },
  {
    slug: "logistics-and-supply",
    icon: Package,
    title: "Logistics and Supply",
    description:
      "End-to-end supply chain management ensuring timely delivery of critical parts, materials, and equipment to remote mine sites.",
    features: ["Procurement", "Warehousing", "Remote delivery"],
    details: [
      "Strategic procurement and vendor management",
      "Warehousing and inventory management",
      "Last-mile delivery to remote mine sites",
      "Import/export and customs clearance",
      "Emergency and breakdown supply response",
    ],
  },
  {
    slug: "precision-laser-alignment",
    icon: Focus,
    title: "Precision Laser Alignment",
    description:
      "Laser-based precision alignment and calibration services for rotating equipment, conveyors, and processing plant machinery.",
    features: ["Shaft alignment", "Belt tracking", "Vibration analysis"],
    details: [
      "Laser shaft alignment for pumps, motors, and gearboxes",
      "Conveyor belt tracking and pulley alignment",
      "Vibration analysis and condition monitoring",
      "Thermal imaging for electrical and mechanical faults",
      "Detailed alignment reports and recommendations",
    ],
  },
  {
    slug: "digital-infrastructure",
    icon: Wifi,
    title: "Digital Infrastructure",
    description:
      "Smart mining technology solutions including connectivity, IoT sensors, data platforms, and digital twin implementations.",
    features: ["IoT networks", "Data analytics", "Digital twins"],
    details: [
      "Underground and surface wireless network deployment",
      "IoT sensor networks for real-time monitoring",
      "Cloud-based data platforms and dashboards",
      "Digital twin modeling for mine planning",
      "Cybersecurity and network management",
    ],
  },
];

export default function MiningSolutionsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="pt-[4.5rem] lg:pt-[5rem]">

      {/* ✅ Helmet SEO block - FIRST inside return */}
      <Helmet>
        <title>Advanced Mining Solutions | Muthimunye Group MMSO South Africa</title>
        <meta name="description" content="Muthimunye Group offers 9 integrated mining solutions including ceramic wear lining, civil construction, mechanical, electrical, logistics and digital infrastructure across South Africa." />
        <meta property="og:title" content="Advanced Mining Solutions | Muthimunye Group MMSO South Africa" />
        <meta property="og:description" content="9 integrated mining solutions including ceramic wear lining, civil construction, mechanical, electrical and digital infrastructure." />
        <meta property="og:url" content="https://mmso.co.za/mining-solutions" />
        <meta property="og:image" content="https://mmso.co.za/muthimunye-logo.png" />
        <link rel="canonical" href="https://mmso.co.za/mining-solutions" />
      </Helmet>

      {/* ✅ Hero - unchanged */}
      <section className="relative bg-gradient-to-br from-graphite-900 via-graphite-800 to-graphite-900 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(230,126,34,0.24),transparent_26%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(230,126,34,0.14),transparent_22%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-5 border border-brand-500/30">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Mining <span className="text-brand-400">Solutions</span>
          </h1>
          <p className="text-lg text-steel-300 max-w-2xl mx-auto leading-relaxed">
            From wear protection to digital infrastructure, we provide comprehensive mining solutions that address every challenge across the mining value chain.
          </p>
        </div>
      </section>

      {/* ✅ Solutions Grid - unchanged */}
      <section className="relative pt-6 pb-14 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(230,126,34,0.06),transparent_18%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-graphite-900 mb-3">
              9 Integrated <span className="text-brand-500">Service Lines</span>
            </h2>
            <p className="text-steel-500 leading-relaxed text-sm">
              Each service line works independently or as part of an integrated solution tailored to your operation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((sol, idx) => (
              <Link
                key={idx}
                to={`/services/${sol.slug}`}
                className="group p-5 rounded-2xl bg-graphite-50 border border-steel-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 group-hover:from-brand-500 group-hover:to-brand-600 flex items-center justify-center mb-4 transition-all duration-300">
                  <sol.icon className="w-5 h-5 text-brand-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-bold text-graphite-900 group-hover:text-brand-600 transition-colors flex items-center gap-2 mb-1.5">
                  {sol.title}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-sm text-steel-500 leading-relaxed mb-3">
                  {sol.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {sol.features.map((feature, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-[11px] px-2 py-0.5 bg-white group-hover:bg-brand-50 text-steel-500 group-hover:text-brand-700 rounded transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CTA - unchanged */}
      <section className="relative py-14 bg-gradient-to-br from-graphite-900 via-graphite-800 to-graphite-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(230,126,34,0.16),transparent_26%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Need a Tailored Mining Solution?
          </h2>
          <p className="text-sm text-steel-300 mb-6 max-w-xl mx-auto">
            Our team is ready to discuss your requirements and develop a solution that delivers results.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              type="button"
              onClick={goToContact}
              className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold rounded-full shadow-lg shadow-brand-500/25 transition-all duration-300 text-sm"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+27609884542"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 text-sm transition-all duration-300"
            >
              <Phone className="w-4 h-4" /> 060 988 4542
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
