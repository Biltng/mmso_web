// ✅ All imports at the TOP
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import {
  Building2,
  Hammer,
  PenTool,
  ClipboardList,
  Wrench,
  ArrowRight,
  Phone,
} from "lucide-react";

const services = [
  { slug: "property-development", icon: Building2, title: "Property Development", description: "End-to-end property development solutions from site acquisition and feasibility through to handover, maximising value at every stage.", color: "from-brand-500 to-brand-600", features: ["Site acquisition", "Feasibility studies", "Project delivery"] },
  { slug: "construction", icon: Hammer, title: "Construction", description: "Commercial and residential construction services delivered on time and on budget with rigorous quality and safety standards.", color: "from-graphite-600 to-graphite-700", features: ["Commercial builds", "Residential builds", "Project execution"] },
  { slug: "architecture-design", icon: PenTool, title: "Architecture Design", description: "Innovative architectural design that balances aesthetics, functionality, and sustainability for modern living and working spaces.", color: "from-brand-600 to-brand-700", features: ["Concept design", "Planning", "Sustainable design"] },
  { slug: "property-management", icon: ClipboardList, title: "Property Management", description: "Professional property management and oversight including tenant relations, financial reporting, and asset performance optimisation.", color: "from-graphite-700 to-graphite-800", features: ["Tenant relations", "Financial reporting", "Asset performance"] },
  { slug: "property-maintenance", icon: Wrench, title: "Property Maintenance", description: "Comprehensive ongoing maintenance and facilities management to protect your investment and keep properties in peak condition.", color: "from-brand-500 to-brand-700", features: ["Preventive maintenance", "Repairs", "Facilities care"] },
];

export default function DevelopmentPage() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  const goToContact = () => { navigate("/contact"); };

  return (
    <div className="pt-[4.5rem] lg:pt-[5rem]">

      {/* ✅ Helmet SEO block - FIRST inside return */}
      <Helmet>
        <title>Infrastructure & Property Development Services | MMSO South Africa</title>
        <meta name="description" content="Muthimunye Group offers end-to-end property development, construction, architecture design, property management and maintenance services across South Africa." />
        <meta property="og:title" content="Infrastructure & Property Development Services | MMSO South Africa" />
        <meta property="og:description" content="End-to-end property development, construction and architecture design services in South Africa." />
        <meta property="og:url" content="https://mmso.co.za/development" />
        <meta property="og:image" content="https://mmso.co.za/muthimunye-logo.png" />
        <link rel="canonical" href="https://mmso.co.za/development" />
      </Helmet>

      {/* ✅ Hero - unchanged */}
      <section className="relative bg-gradient-to-br from-graphite-900 via-graphite-800 to-graphite-900 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(230,126,34,0.22),transparent_26%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_25%,rgba(230,126,34,0.12),transparent_22%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-5 border border-brand-500/30">Our Services</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Property <span className="text-brand-400">Development</span>
          </h1>
          <p className="text-lg text-steel-300 max-w-2xl mx-auto leading-relaxed">
            From concept to completion and beyond, our development division delivers exceptional property outcomes across every stage of the lifecycle.
          </p>
        </div>
      </section>

      {/* ✅ Services Grid - unchanged */}
      <section className="relative pt-6 pb-14 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_90%,rgba(230,126,34,0.06),transparent_18%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-graphite-900 mb-3">
              5 End-to-End <span className="text-brand-500">Development Services</span>
            </h2>
            <p className="text-steel-500 leading-relaxed text-sm">
              We support property and construction projects through every phase.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-5">
            {services.map((service, idx) => (
              <Link
                key={idx}
                to={`/services/${service.slug}`}
                className={`group p-5 rounded-2xl bg-graphite-50 border border-steel-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 lg:col-span-2 ${idx === 3 ? "lg:col-start-2" : ""} ${idx === 4 ? "lg:col-start-4" : ""}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg shadow-graphite-900/5`}>
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-graphite-900 group-hover:text-brand-600 transition-colors flex items-center gap-2 mb-1.5">
                  {service.title}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-sm text-steel-500 leading-relaxed mb-3">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feature, fIdx) => (
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

      {/* ✅ CTA Section - unchanged */}
      <section className="relative py-14 bg-gradient-to-br from-graphite-900 via-graphite-800 to-graphite-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(230,126,34,0.16),transparent_26%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Start Your Next Property Project?
          </h2>
          <p className="text-sm text-steel-300 mb-6 max-w-xl mx-auto">
            Let's discuss how we can support your development, construction, and property management goals.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              type="button"
              onClick={goToContact}
              className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold rounded-full shadow-lg shadow-brand-500/25 transition-all duration-300 text-sm"
            >
              Contact Our Team <ArrowRight className="w-4 h-4" />
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
