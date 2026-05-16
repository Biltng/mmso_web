import { useState } from "react";
import { Link } from "react-router-dom";
import { Pickaxe, Building2, ArrowRight, MessageSquareMore, Download } from "lucide-react";
import { services } from "../data/services";
import { generatePortfolioPdf } from "../utils/generatePortfolioPdf";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState("");

  const serviceOptions = services.map((service) => service.title);
  const contactLink = selectedService
    ? `/contact?service=${encodeURIComponent(selectedService)}`
    : "/contact";

  return (
    <>
      <section
        id="home"
        className="min-h-[70vh] flex items-center bg-gradient-to-br from-white via-graphite-50 to-brand-50/40 pt-28 pb-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-graphite-900 mb-6">
              Welcome to <span className="text-brand-500">MUTHIMUNYE GROUP OF CO.</span>
            </h1>
            <p className="text-lg text-steel-500 leading-relaxed">
              We are the preferred Mining Solutions company that provides unique
              problem-solving services in each of our divisions. We offer
              specialized services across industries, from mining to property
              development, with a mission to deliver excellence, efficiency,
              and innovation in every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Link
              to="/mining-solutions"
              className="group rounded-2xl border border-steel-200 bg-white p-8 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mb-5 shadow-lg shadow-brand-200">
                <Pickaxe className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-graphite-900 mb-3 group-hover:text-brand-600 transition-colors">
                Mining Solutions
              </h2>
              <p className="text-steel-500 leading-relaxed mb-5">
                Explore our specialised mining services, including ceramic wear
                lining, civil construction, mechanical, electrical, logistics,
                and digital infrastructure solutions.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-500 group-hover:text-brand-600 transition-colors">
                View Mining Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/development"
              className="group rounded-2xl border border-steel-200 bg-white p-8 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-graphite-700 to-graphite-800 flex items-center justify-center mb-5 shadow-lg shadow-graphite-200">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-graphite-900 mb-3 group-hover:text-brand-600 transition-colors">
                Development
              </h2>
              <p className="text-steel-500 leading-relaxed mb-5">
                Learn more about our development capabilities, from property
                development and construction to architecture design, property
                management, and maintenance services.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-500 group-hover:text-brand-600 transition-colors">
                View Development Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto mt-8 rounded-2xl border border-steel-200 bg-white px-6 py-6 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
                  <MessageSquareMore className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-graphite-900">
                    Contact Us
                  </h3>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[380px] max-w-2xl">
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border border-steel-200 bg-graphite-50 text-sm text-graphite-800 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <Link
                  to={contactLink}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-brand-200 transition-all duration-300 whitespace-nowrap"
                >
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-5 text-center">
            <button
              type="button"
              onClick={generatePortfolioPdf}
              className="inline-flex items-center gap-2 px-6 py-3 bg-graphite-50 border border-steel-200 hover:border-brand-200 hover:bg-brand-50 text-sm font-semibold text-graphite-700 hover:text-brand-600 rounded-xl transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download Services Portfolio (PDF)
            </button>
          </div>
        </div>
      </section>


    </>
  );
}
