import { MapPin, Calendar, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Kalgoorlie Gold Mine Expansion",
    location: "Mpumalanga, SA",
    year: "2024",
    category: "Surface Mining",
    description:
      "Major open-pit expansion project increasing annual gold production by 40% with advanced grade control systems.",
    color: "from-brand-500 to-brand-600",
  },
  {
    title: "Limpopo Iron Ore Processing",
    location: "Limpopo, SA",
    year: "2023",
    category: "Mineral Processing",
    description:
      "Design and construction of a 15 MTPA iron ore processing plant with wet and dry beneficiation circuits.",
    color: "from-graphite-600 to-graphite-700",
  },
  {
    title: "Lithium Valley Development",
    location: "Nevada, USA",
    year: "2024",
    category: "Development",
    description:
      "Greenfield lithium mine development from feasibility through to first production in record timeframes.",
    color: "from-brand-400 to-brand-500",
  },
  {
    title: "Copper Mountain Underground",
    location: "Chile",
    year: "2023",
    category: "Underground Mining",
    description:
      "Transition from open pit to block cave underground mining with fully autonomous haulage systems.",
    color: "from-graphite-700 to-graphite-800",
  },
  {
    title: "Rare Earths Feasibility Study",
    location: "North West, SA",
    year: "2024",
    category: "Feasibility Studies",
    description:
      "Comprehensive DFS for a world-class rare earths deposit including processing and off-take analysis.",
    color: "from-brand-600 to-brand-700",
  },
  {
    title: "Digital Mine Transformation",
    location: "Gauteng, SA",
    year: "2023",
    category: "Technology",
    description:
      "Full digital transformation of a coal mining operation including IoT sensors, AI analytics, and automation.",
    color: "from-graphite-500 to-graphite-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-graphite-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-graphite-900 mb-6">
            Featured <span className="text-brand-500">Projects</span>
          </h2>
          <p className="text-lg text-steel-500 leading-relaxed">
            Explore our portfolio of successful mining projects delivered across
            the globe with excellence and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl border border-steel-200 overflow-hidden hover:shadow-xl hover:shadow-graphite-900/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Color Bar */}
              <div
                className={`h-2 bg-gradient-to-r ${project.color}`}
              />

              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-graphite-100 text-graphite-600 text-xs font-medium rounded-full mb-4">
                  {project.category}
                </span>

                <h3 className="text-lg font-bold text-graphite-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-steel-500 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-steel-400 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.year}
                  </span>
                </div>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors"
                >
                  View Case Study
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
