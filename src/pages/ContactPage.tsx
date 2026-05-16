import { useEffect } from "react";
import Contact from "../components/Contact";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="pt-[4.5rem] lg:pt-[5rem]">
      <section className="relative bg-gradient-to-br from-graphite-900 via-graphite-800 to-graphite-900 py-20 lg:py-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-6 border border-brand-500/30">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact <span className="text-brand-400">Us</span>
          </h1>
          <p className="text-lg text-steel-300 max-w-2xl mx-auto leading-relaxed">
            Whether you need a quote, want to discuss a project, or have a
            general enquiry, our team is ready to assist you.
          </p>
        </div>
      </section>

      <Contact />
    </div>
  );
}
