import { Target, Eye, Gem, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver world-class mining solutions that maximize resource value while minimizing environmental impact.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be South Africa's preferred partner in sustainable mining innovation and responsible resource development.",
  },
  {
    icon: Gem,
    title: "Our Values",
    description:
      "Safety, integrity, innovation, and sustainability guide every decision we make and every project we undertake.",
  },
  {
    icon: TrendingUp,
    title: "Our Growth",
    description:
      "Continuous improvement and investment in our people, technology, and processes drive our sustained growth.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-graphite-900 mb-6">
            Building the Future of{" "}
            <span className="text-brand-500">Mining</span>
          </h2>
          <p className="text-lg text-steel-500 leading-relaxed">
            With over 25 years of combined experience, MUTHIMUNYE GROUP OF CO. has established
            itself as a trusted partner in mining operations, development, and
            consulting across South Africa.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-graphite-50 hover:bg-gradient-to-br hover:from-brand-50 hover:to-brand-100 border border-steel-200 hover:border-brand-200 transition-all duration-300 hover:shadow-lg hover:shadow-brand-100/50"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 group-hover:from-brand-500 group-hover:to-brand-600 flex items-center justify-center mb-5 transition-all duration-300">
                <item.icon className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-graphite-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-steel-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
