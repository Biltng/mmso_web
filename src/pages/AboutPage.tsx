import { useEffect } from "react";
import {
  Eye,
  Target,
  Layers,
  Zap,
  Award,
  TrendingUp,
  Leaf,
  Handshake,
  Users,
  ShieldCheck,
  TriangleAlert,
  BadgeCheck,
  HeartHandshake,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const missionPillars = [
  {
    icon: Layers,
    title: "Comprehensive Solutions",
    description:
      "Offering a diverse range of products and services tailored to meet the unique needs of our clients.",
  },
  {
    icon: Zap,
    title: "Competitiveness & Efficiency",
    description:
      "Maintaining a competitive edge by being cost-effective, efficient, and innovative in all aspects of our operations.",
  },
  {
    icon: Award,
    title: "Commitment to Quality",
    description:
      "Adhering to the highest standards of quality and consistently striving to improve our products and services.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "Enhancing and surpassing recognized industry benchmarks to ensure excellence.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious Practices",
    description:
      "Prioritizing sustainability and eco-friendly practices to protect our environment for future generations.",
  },
  {
    icon: BadgeCheck,
    title: "B-BBEE Commitment",
    description:
      "100% compliance with South Africa's B-BBEE regulations.",
  },
];

const commitments = [
  {
    icon: Handshake,
    title: "Customers",
    description:
      "To create long-term relationships with our suppliers and customers based on our products and service excellence.",
  },
  {
    icon: Leaf,
    title: "Environment",
    description:
      "We commit ourselves to conserving our environment and will make all efforts in this regard in our sphere of influence.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    description:
      "We commit ourselves to safety and strive for improvement through education and training for the benefit of our customers and employees.",
  },
  {
    icon: TriangleAlert,
    title: "Risk Management",
    description:
      "To identify, alleviate or eliminate risk to property, interests, and employees.",
  },
];

const qualityPoints = [
  "Safety of the highest standards",
  "Top quality products",
  "Top quality service",
  "Competitive prices",
  "Discipline",
  "Leadership",
  "Safe behaviour",
  "Personnel development and training",
  "Continuous monitoring of performance",
  "Monitor and review",
  "Continuous improvement of business systems, processes, service, and products",
];

const shePoints = [
  "Actively encourage continuous improvement in Health and Safety performance and commitment from all staff",
  "Committed to comply with all of our clients' lifesaving rules",
  "Providing adequate systems and resources to effectively manage hazards within the workplace",
  "Integrate environmental protection into every aspect of its business",
  "Complying with all laws, regulations, codes of practice, and standards",
  "Comply with all environmental regulations without regard to the degree of enforcement",
  "Participate in the development of environmental legislation, regulation, or policy issues that may significantly impact our business",
  "Work pro-actively with appropriate government agencies to ensure timely, reasonable, and cost-effective solutions",
  "Ensure adequate resources are available to comply with this policy",
  "Conserve company and natural resources by careful management of emissions and discharges, and by minimizing waste generation",
  "Ensure conformity with this policy and continual improvement through a comprehensive compliance program, including audits and the development and review of performance indicators",
  "Require that all employees are held responsible for compliance with all policies, procedures, practices, and laws applicable to their duties",
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="pt-[4.5rem] lg:pt-[5rem]">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-graphite-900 via-graphite-800 to-graphite-900 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(230,126,34,0.20),transparent_26%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(160,160,160,0.10),transparent_22%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-6 border border-brand-500/30">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Who We <span className="text-brand-400">Are</span>
          </h1>
          <p className="text-lg text-steel-300 max-w-3xl mx-auto leading-relaxed">
            MUTHIMUNYE GROUP OF CO. has established itself as a trusted partner
            in the mining and industrial sectors. With our head office in
            eMalahleni, Mpumalanga, and a strategic branch in Langebaan, Western
            Cape, we are well-positioned to serve clients across South Africa
            with excellence and efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-steel-300 border border-white/10">
              <MapPin className="w-4 h-4 text-brand-400" />
              eMalahleni, Mpumalanga — Head Office
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-steel-300 border border-white/10">
              <MapPin className="w-4 h-4 text-brand-400" />
              Langebaan, Western Cape — Branch
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative pt-6 pb-14 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(230,126,34,0.06),transparent_18%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Vision */}
            <div className="rounded-2xl border border-steel-200 bg-graphite-50 p-8 hover:border-brand-200 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-200">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-graphite-900 mb-4">
                Our Vision
              </h2>
              <p className="text-steel-500 leading-relaxed">
                To be the preferred Mining Solutions Company that provides unique
                problem-solving services in each of our divisions.
              </p>
            </div>

            {/* Mission */}
            <div className="rounded-2xl border border-steel-200 bg-graphite-50 p-8 hover:border-brand-200 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-graphite-700 to-graphite-800 flex items-center justify-center mb-6 shadow-lg shadow-graphite-200">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-graphite-900 mb-4">
                Our Mission
              </h2>
              <p className="text-steel-500 leading-relaxed">
                Our mission is to excel in delivering unparalleled quality and
                superior service to our customers. We are dedicated to achieving
                this through comprehensive solutions, competitiveness, and a
                commitment to continuous improvement.
              </p>
            </div>
          </div>

          {/* Mission Pillars */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 mb-4">
              What Drives <span className="text-brand-500">Our Mission</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group p-6 rounded-2xl bg-graphite-50 border border-steel-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 group-hover:from-brand-500 group-hover:to-brand-600 flex items-center justify-center mb-4 transition-all duration-300">
                  <pillar.icon className="w-5 h-5 text-brand-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-graphite-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-steel-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 bg-graphite-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 mb-4">
              Our <span className="text-brand-500">Commitments</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl p-6 border border-steel-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-white" />
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

      {/* Quality Policy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <HeartHandshake className="w-5 h-5 text-brand-500" />
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  Quality Policy
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 mb-6">
                Creating Value as{" "}
                <span className="text-brand-500">
                  "The Preferred Mining Solutions Company"
                </span>
              </h2>
              <p className="text-steel-500 leading-relaxed mb-6">
                Creating value for our stakeholders by being a market-driven
                company and continuously striving to become the preferred mining
                solutions company. Developing long-term relationships and
                understanding our customers' needs and exceeding their
                expectations by providing:
              </p>
            </div>

            <div className="bg-graphite-50 rounded-2xl p-8 border border-steel-200">
              <div className="grid sm:grid-cols-2 gap-3">
                {qualityPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-graphite-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Environmental Policy */}
      <section className="py-20 bg-graphite-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-brand-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                Safety & Environmental Policy
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 mb-4">
              Work Safe. Protect the Environment.{" "}
              <span className="text-brand-500">Deliver Quality.</span>
            </h2>
            <p className="text-steel-500 leading-relaxed max-w-3xl mx-auto">
              It is the policy of our company and its subsidiaries to conduct
              business in a socially responsible and ethical manner that seeks to
              work safe, protect the environment, and provide the best quality.
              Our goal is to be a leader in SHE practices by emphasizing and
              encouraging innovative and creative solutions, and continually
              improving our SHE performance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 border border-steel-200">
            <p className="text-sm font-semibold text-graphite-700 mb-5">
              All managers and supervisors are responsible and accountable for the
              safety of employees, contractors, and property under their control.
              MUTHIMUNYE GROUP OF CO. pledges to:
            </p>
            <div className="space-y-3">
              {shePoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-graphite-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Goals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 mb-4">
              Our <span className="text-brand-500">Service Pledge</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl bg-graphite-50 border border-steel-200 p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-graphite-900 mb-2">Customer Satisfaction</h3>
              <p className="text-sm text-steel-500 leading-relaxed">
                To deliver quality products, systems, and services that meet or
                exceed our customers' expectations. Identify and understand
                customers' expectations, measure perceptions, and implement
                improvements.
              </p>
            </div>
            <div className="rounded-2xl bg-graphite-50 border border-steel-200 p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-graphite-700 to-graphite-800 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-graphite-900 mb-2">People Development</h3>
              <p className="text-sm text-steel-500 leading-relaxed">
                To increase the motivation and skills of our people to add value
                to our customers and our businesses, through training and
                development.
              </p>
            </div>
            <div className="rounded-2xl bg-graphite-50 border border-steel-200 p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-brand-700 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-graphite-900 mb-2">Quality Standards</h3>
              <p className="text-sm text-steel-500 leading-relaxed">
                To set quality goals according to the perception and expectations
                of our customers and employees, and to monitor, review, and
                continually improve quality standards in all business aspects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
