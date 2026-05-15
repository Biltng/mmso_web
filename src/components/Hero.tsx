import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Users } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-graphite-900 via-graphite-800 to-graphite-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,126,34,0.28),transparent_32%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(230,126,34,0.18),transparent_26%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(160,160,160,0.12),transparent_24%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-900/90 via-graphite-900/75 to-graphite-800/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/20 border border-brand-400/30 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            <span className="text-brand-300 text-sm font-medium">
              Industry-Leading Mining Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Powering the Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
              Mining Excellence
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-steel-300 leading-relaxed mb-10 max-w-2xl">
            We deliver innovative mining solutions and development services that
            drive efficiency, sustainability, and profitability across every
            stage of the mining lifecycle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              to="/mining-solutions"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold rounded-full shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-300"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-brand-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-xs text-steel-400">Years of Combined Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-brand-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-xs text-steel-400">Projects Done</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-brand-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-steel-400">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
