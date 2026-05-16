import {
  Building2,
  Hammer,
  PenTool,
  ClipboardList,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Property Development",
    description:
      "End-to-end property development solutions from site acquisition and feasibility through to handover, maximising value at every stage.",
    color: "from-brand-500 to-brand-600",
  },
  {
    icon: Hammer,
    title: "Construction",
    description:
      "Commercial and residential construction services delivered on time and on budget with rigorous quality and safety standards.",
    color: "from-graphite-600 to-graphite-700",
  },
  {
    icon: PenTool,
    title: "Architecture Design",
    description:
      "Innovative architectural design that balances aesthetics, functionality, and sustainability for modern living and working spaces.",
    color: "from-brand-600 to-brand-700",
  },
  {
    icon: ClipboardList,
    title: "Property Management",
    description:
      "Professional property management and oversight including tenant relations, financial reporting, and asset performance optimisation.",
    color: "from-graphite-700 to-graphite-800",
  },
  {
    icon: Wrench,
    title: "Property Maintenance",
    description:
      "Comprehensive ongoing maintenance and facilities management to protect your investment and keep properties in peak condition.",
    color: "from-brand-500 to-brand-700",
  },
];

export default function Development() {
  return (
    <section id="development" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Development
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-graphite-900 mb-6">
            Full-Spectrum Property{" "}
            <span className="text-brand-500">Development</span>
          </h2>
          <p className="text-lg text-steel-500 leading-relaxed">
            From concept to completion and beyond, our development division
            delivers exceptional property outcomes across every stage of the
            lifecycle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-2xl bg-white border border-steel-200 hover:border-brand-200 shadow-sm hover:shadow-xl transition-all duration-300 ${
                idx >= 3 ? "lg:col-span-1 md:col-span-1" : ""
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg shadow-graphite-900/5`}
              >
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-graphite-900 mb-3">
                {service.title}
              </h3>
              <p className="text-steel-500 leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-brand-500 hover:text-brand-600 transition-colors cursor-pointer">
                <span>Learn more</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 relative overflow-hidden rounded-2xl bg-gradient-to-r from-graphite-900 via-graphite-800 to-graphite-900 p-8 md:p-12">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/images/development.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to start your next project?
              </h3>
              <p className="text-steel-400">
                Let's discuss how we can bring your property development vision
                to life.
              </p>
            </div>
            <a
              href="#/contact"
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold rounded-full shadow-lg shadow-brand-500/25 transition-all duration-300"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
