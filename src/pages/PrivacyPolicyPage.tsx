// ✅ All imports at the TOP
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, CircleAlert, Link as LinkIcon, Lock } from "lucide-react";

const privacyPoints = [
  "Use of this website is entirely at the end user's own risk.",
  "MUTHIMUNYE GROUP OF CO. makes reasonable efforts to keep website information accurate, but does not warrant that all content is complete, current, or error-free.",
  "Any reliance placed on information, downloads, pages, or website functionality is at the sole risk of the end user.",
  "External links, third-party websites, and linked services are provided for convenience only and are accessed entirely at the end user's own risk.",
  "MUTHIMUNYE GROUP OF CO. accepts no responsibility for the content, availability, security, or performance of third-party websites or services.",
  "Information submitted through the website, including contact form information, is provided voluntarily by the end user.",
  "We may use submitted information to respond to enquiries, provide requested information, and support business communication.",
  "While reasonable care is taken, no transmission over the internet can be guaranteed as fully secure, and use of the website remains at the end user's own risk.",
  "MUTHIMUNYE GROUP OF CO. shall not be liable for any loss, damage, interruption, or consequence arising from use of this website or any linked website.",
];

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="pt-[4.5rem] lg:pt-[5rem]">

      {/* ✅ Helmet SEO block - FIRST inside return */}
      <Helmet>
        <title>Privacy Policy | Muthimunye Group MMSO</title>
        <meta name="description" content="Read the privacy policy of Muthimunye Group of Companies. We are committed to protecting your personal information and explaining how website information is handled." />
        <meta property="og:title" content="Privacy Policy | Muthimunye Group MMSO" />
        <meta property="og:description" content="Muthimunye Group privacy policy - how we handle website information and protect your data." />
        <meta property="og:url" content="https://mmso.co.za/privacy-policy" />
        <meta property="og:image" content="https://mmso.co.za/muthimunye-logo.png" />
        <link rel="canonical" href="https://mmso.co.za/privacy-policy" />
      </Helmet>

      {/* ✅ Hero - unchanged */}
      <section className="relative bg-gradient-to-br from-graphite-900 via-graphite-800 to-graphite-900 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(230,126,34,0.18),transparent_26%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-5 border border-brand-500/30">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Privacy <span className="text-brand-400">Policy</span>
          </h1>
          <p className="text-lg text-steel-300 max-w-3xl mx-auto leading-relaxed">
            This page explains how website information is handled and makes clear that use of this website and any linked content is at the end user's own risk.
          </p>
        </div>
      </section>

      {/* ✅ Content - unchanged */}
      <section className="relative pt-6 pb-14 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(230,126,34,0.06),transparent_18%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-graphite-50 rounded-2xl p-6 border border-steel-200 sticky top-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-graphite-900">Privacy Notice</h2>
                    <p className="text-xs text-steel-500">
                      Website use and linked content remain at the user's own risk.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-steel-600 leading-relaxed">
                  <p>
                    By using this website, the end user acknowledges that browsing, interacting with content, and following any internal or external links is done entirely at their own discretion and risk.
                  </p>
                  <p>
                    MUTHIMUNYE GROUP OF CO. does not accept liability for third-party platforms, linked websites, or external services.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-5">
              <div className="rounded-2xl border border-steel-200 bg-graphite-50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-5 h-5 text-brand-500" />
                  <h2 className="text-xl font-bold text-graphite-900">
                    Privacy and Website Use
                  </h2>
                </div>
                <div className="space-y-3">
                  {privacyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CircleAlert className="w-4 h-4 text-brand-500 shrink-0 mt-1" />
                      <p className="text-sm text-graphite-700 leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-steel-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <LinkIcon className="w-5 h-5 text-brand-500" />
                  <h2 className="text-xl font-bold text-graphite-900">
                    External Links
                  </h2>
                </div>
                <p className="text-sm text-steel-600 leading-relaxed">
                  Any links to third-party websites, documents, services, or platforms are provided solely for convenience. MUTHIMUNYE GROUP OF CO. does not control or endorse third-party content and accepts no responsibility for accuracy, legality, availability, or security on those external platforms. The end user follows and uses such links entirely at their own risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
