import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "060 988 4542",
    href: "tel:+27609884542",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@mmso.co.za",
    href: "mailto:info@mmso.co.za",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Mpumalanga, South Africa",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri: 07:00 - 17:30",
    href: "#",
  },
];

const serviceOptions = [
  "Ceramic & Wear Lining",
  "Civil Construction",
  "Roof Bolter Torque Indicating System",
  "Mechanical",
  "Electrical",
  "Earth Moving Parts",
  "Logistics and Supply",
  "Precision Laser Alignment",
  "Digital Infrastructure",
  "Property Development",
  "Construction",
  "Architecture Design",
  "Property Management",
  "Property Maintenance",
  "Other",
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const requestedService = searchParams.get("service") || "";
    if (requestedService && serviceOptions.includes(requestedService)) {
      setSelectedService(requestedService);
    }
  }, [searchParams]);

  const handleSubmit = (_e: React.FormEvent<HTMLFormElement>) => {
    // FormSubmit will handle the form submission
    // Just update the UI to show success
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-graphite-900 mb-6">
            Let's Start a <span className="text-brand-500">Conversation</span>
          </h2>
          <p className="text-lg text-steel-500 leading-relaxed">
            Whether you have a question about our services, need a quote, or
            want to discuss a potential project, our team is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-brand-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 group-hover:from-brand-500 group-hover:to-brand-600 flex items-center justify-center shrink-0 transition-all">
                  <item.icon className="w-5 h-5 text-brand-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-medium text-steel-400 mb-1">
                    {item.label}
                  </div>
                  <div className="text-graphite-800 font-semibold">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Map placeholder */}
            <div className="aspect-[4/3] rounded-2xl bg-graphite-100 overflow-hidden relative mt-8">
              <div className="absolute inset-0 bg-gradient-to-br from-graphite-200 to-graphite-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-brand-500 mx-auto mb-2" />
                  <p className="text-sm text-graphite-600 font-medium">Mpumalanga, South Africa</p>
                  <p className="text-xs text-steel-400">Click to open in Maps</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-graphite-50 rounded-2xl p-8 border border-steel-200">
              <h3 className="text-xl font-bold text-graphite-900 mb-6">
                Send us a message
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-graphite-900 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-steel-500 max-w-md">
                    Your enquiry has been sent to info@mmso.co.za. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} action="https://formsubmit.co/info@mmso.co.za" method="POST" className="space-y-5">
                  {/* FormSubmit configuration fields */}
                  <input type="hidden" name="_subject" value="New website enquiry from MUTHIMUNYE GROUP OF CO." />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  {/* Honeypot field for spam protection */}
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-graphite-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-xl border border-steel-200 bg-white text-sm text-graphite-800 placeholder:text-steel-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-graphite-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-xl border border-steel-200 bg-white text-sm text-graphite-800 placeholder:text-steel-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-graphite-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-steel-200 bg-white text-sm text-graphite-800 placeholder:text-steel-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-graphite-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 rounded-xl border border-steel-200 bg-white text-sm text-graphite-800 placeholder:text-steel-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-graphite-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service_interest"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-steel-200 bg-white text-sm text-graphite-800 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-graphite-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-3 rounded-xl border border-steel-200 bg-white text-sm text-graphite-800 placeholder:text-steel-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 disabled:opacity-50 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-95"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
