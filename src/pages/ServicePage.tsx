// ✅ All imports at the TOP
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ArrowLeft,
  Factory,
  Crosshair,
  Lightbulb,
  PackageOpen,
} from "lucide-react";
import { getServiceBySlug, getServicesByCategory } from "../data/services";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!service) {
    return (
      <div className="pt-[4.5rem] lg:pt-[5rem] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-graphite-900 mb-4">
            Service Not Found
          </h1>
          <p className="text-steel-500 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 text-white rounded-full font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  const parentRoute =
    service.category === "mining-solutions" ? "/mining-solutions" : "/development";
  const parentLabel =
    service.category === "mining-solutions" ? "Mining Solutions" : "Development";
  const relatedServices = getServicesByCategory(service.category).filter(
    (s) => s.slug !== service.slug
  );
  const Icon = service.icon;

  return (
    <div className="pt-[4.5rem] lg:pt-[5rem]">

      {/* ✅ Dynamic Helmet SEO - updates per service page automatically */}
      <Helmet>
        <title>{service.title} | Muthimunye Group MMSO South Africa</title>
        <meta
          name="description"
          content={`${service.tagline} - Muthimunye Group of Companies offers expert ${service.title.toLowerCase()} services across South Africa.`}
        />
        <meta
          property="og:title"
          content={`${service.title} | Muthimunye Group MMSO South Africa`}
        />
        <meta
          property="og:description"
          content={`${service.tagline} - Expert ${service.title.toLowerCase()} services by Muthimunye Group across South Africa.`}
        />
        <meta
          property="og:url"
          content={`https://mmso.co.za/services/${service.slug}`}
        />
        <meta
          property="og:image"
          content="https://mmso.co.za/muthimunye-logo.png"
        />
        <link
          rel="canonical"
          href={`https://mmso.co.za/services/${service.slug}`}
        />
      </Helmet>

      {/* ✅ Hero - unchanged */}
      <section className="relative bg-gradient-to-br from-graphite-900 via-graphite-800 to-graphite-900 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(230,126,34,0.25),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(160,160,160,0.12),transparent_25%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-steel-400 mb-6">
            <Link to="/" className="hover:text-brand-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to={parentRoute} className="hover:text-brand-400 transition-colors">
              {parentLabel}
            </Link>
            <span>/</span>
            <span className="text-brand-400">{service.title}</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div
              className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl shadow-brand-500/20 shrink-0`}
            >
              <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-3 border border-brand-500/30">
                {parentLabel}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                {service.title}
              </h1>
              <p className="text-lg text-steel-300 max-w-2xl leading-relaxed">
                {service.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Overview - unchanged */}
      <section className="relative pb-14 pt-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-graphite-900 mb-4">Overview</h2>
              <p className="text-steel-500 leading-relaxed mb-4">{service.overview}</p>
              <p className="text-steel-500 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {service.features.map((f, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 bg-brand-50 text-brand-700 rounded-full font-medium"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-graphite-50 rounded-2xl p-6 border border-steel-200 sticky top-28">
                <h3 className="text-base font-bold text-graphite-900 mb-4">
                  Key Capabilities
                </h3>
                <div className="space-y-2.5">
                  {service.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-graphite-700 leading-snug">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Industries - unchanged */}
      {service.industries && service.industries.length > 0 && (
        <section className="relative py-14 bg-graphite-50 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(230,126,34,0.10),transparent_22%)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-2">
              <Factory className="w-5 h-5 text-brand-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                Industries We Serve
              </span>
            </div>
            <h2 className="text-2xl font-bold text-graphite-900 mb-8">
              Trusted Across <span className="text-brand-500">Key Industries</span>
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {service.industries.map((industry, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-3 bg-white p-4 rounded-xl border border-steel-200 hover:border-brand-200 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className={`w-9 h-9 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0`}
                  >
                    <Factory className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-sm text-graphite-800 group-hover:text-brand-600 transition-colors">
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ✅ Focus Areas - unchanged */}
      {service.focusAreas && service.focusAreas.length > 0 && (
        <section className="relative py-14 bg-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(230,126,34,0.08),transparent_20%)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-2">
              <Crosshair className="w-5 h-5 text-brand-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                Service Areas
              </span>
            </div>
            <h2 className="text-2xl font-bold text-graphite-900 mb-8">
              Core <span className="text-brand-500">Service Areas</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="group p-5 rounded-2xl bg-graphite-50 border border-steel-200 hover:border-brand-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0 mt-0.5`}
                    >
                      <Crosshair className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-graphite-900 mb-1.5 group-hover:text-brand-600 transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-sm text-steel-500 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ✅ Key Points - unchanged */}
      {service.keyPoints && service.keyPoints.length > 0 && (
        <section className="relative py-14 bg-graphite-50 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(230,126,34,0.10),transparent_22%)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5 text-brand-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                Highlights
              </span>
            </div>
            <h2 className="text-2xl font-bold text-graphite-900 mb-8">
              Key <span className="text-brand-500">Highlights</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.keyPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-steel-200 hover:border-brand-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0 mt-0.5`}
                    >
                      <Lightbulb className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-graphite-900 mb-1">{point.title}</h3>
                      <p className="text-sm text-steel-500 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ✅ Products - unchanged */}
      {service.products && service.products.length > 0 && (
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-2">
              <PackageOpen className="w-5 h-5 text-brand-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                Products & Materials
              </span>
            </div>
            <h2 className="text-2xl font-bold text-graphite-900 mb-8">
              Our <span className="text-brand-500">Product Range</span>
            </h2>
            <div
              className={`grid gap-6 ${
                service.products.length === 2
                  ? "md:grid-cols-2"
                  : service.products.length >= 3
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : ""
              }`}
            >
              {service.products.map((pg, idx) => (
                <div
                  key={idx}
                  className="bg-graphite-50 rounded-2xl p-6 border border-steel-200"
                >
                  <h3 className="font-bold text-graphite-900 mb-4 flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0`}
                    >
                      <PackageOpen className="w-4 h-4 text-white" />
                    </div>
                    {pg.category}
                  </h3>
                  <div className="space-y-2">
                    {pg.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-graphite-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ✅ Process - unchanged */}
      <section className="py-14 bg-graphite-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(230,126,34,0.08),transparent_20%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-graphite-900 mb-8">Our Process</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {service.process.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl p-5 border border-steel-200 h-full hover:shadow-md hover:border-brand-200 transition-all duration-300">
                  <div
                    className={`w-9 h-9 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-3`}
                  >
                    <span className="text-white font-bold text-sm">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-bold text-graphite-900 mb-1.5 text-sm">{step.step}</h3>
                  <p className="text-xs text-steel-500 leading-relaxed">{step.description}</p>
                </div>
                {idx < service.process.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-steel-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us - unchanged */}
      <section className="py-14 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_50%,rgba(230,126,34,0.06),transparent_18%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-graphite-900 mb-4">
                Why Choose MUTHIMUNYE GROUP OF CO.?
              </h2>
              <p className="text-steel-500 leading-relaxed mb-6">
                Here's what sets us apart in {service.title.toLowerCase()}.
              </p>
              <div className="space-y-3">
                {service.whyChooseUs.map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-graphite-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-graphite-100 to-graphite-200 aspect-square">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,126,34,0.12),transparent_50%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-4 shadow-xl shadow-brand-200`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-graphite-800 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-xs text-steel-500">
                      {service.features.join(" • ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Related Services - unchanged */}
      {relatedServices.length > 0 && (
        <section className="py-14 bg-graphite-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-graphite-900 mb-6">
              Other {parentLabel} Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {relatedServices.map((related) => {
                const RelIcon = related.icon;
                return (
                  <Link
                    key={related.slug}
                    to={`/services/${related.slug}`}
                    className="group bg-white rounded-xl p-4 border border-steel-200 hover:border-brand-200 hover:shadow-md transition-all duration-300"
                  >
                    <div
                      className={`w-9 h-9 rounded-lg bg-gradient-to-br ${related.color} flex items-center justify-center mb-2`}
                    >
                      <RelIcon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-bold text-graphite-900 group-hover:text-brand-600 transition-colors text-xs leading-tight">
                      {related.title}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ✅ CTA - unchanged */}
      <section className="relative py-14 bg-gradient-to-br from-graphite-900 via-graphite-800 to-graphite-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(230,126,34,0.18),transparent_28%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Interested in {service.title}?
          </h2>
          <p className="text-steel-300 mb-6 max-w-xl mx-auto text-sm">
            Get in touch to discuss how we can support your project.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              type="button"
              onClick={() =>
                navigate(`/contact?service=${encodeURIComponent(service.title)}`)
              }
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
