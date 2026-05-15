import { useEffect } from "react";
import { FileText, CircleAlert, Scale, Link as LinkIcon } from "lucide-react";

const termsPoints = [
  "By accessing or using this website, the end user accepts that all use of the website is at their own risk.",
  "The website and its content are provided on an 'as is' and 'as available' basis without warranties of any kind, whether express or implied.",
  "MUTHIMUNYE GROUP OF CO. does not guarantee uninterrupted availability, error-free content, or compatibility with every device, browser, or system.",
  "All decisions made based on information found on this website remain the sole responsibility of the end user.",
  "Use of any third-party links, external platforms, downloads, references, or connected services is entirely at the end user’s own risk.",
  "MUTHIMUNYE GROUP OF CO. shall not be liable for any direct, indirect, incidental, special, or consequential loss arising from the use of this website or any linked website.",
  "Website content may be changed, updated, or removed at any time without notice.",
  "Nothing on this website constitutes a guaranteed offer, warranty, or binding undertaking unless separately confirmed in writing by the company.",
  "The end user remains responsible for assessing suitability, safety, legality, and relevance of any information, service description, or external reference accessed through the website.",
];

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="pt-[4.5rem] lg:pt-[5rem]">
      <section className="relative bg-gradient-to-br from-graphite-900 via-graphite-800 to-graphite-900 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(230,126,34,0.18),transparent_26%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-5 border border-brand-500/30">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Terms of <span className="text-brand-400">Service</span>
          </h1>
          <p className="text-lg text-steel-300 max-w-3xl mx-auto leading-relaxed">
            These terms clarify that use of this website, its information, and any internal or external links is entirely at the end user’s own risk and not that of the company.
          </p>
        </div>
      </section>

      <section className="relative pt-6 pb-14 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(230,126,34,0.06),transparent_18%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-graphite-50 rounded-2xl p-6 border border-steel-200 sticky top-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-graphite-900">User Responsibility</h2>
                    <p className="text-xs text-steel-500">The end user assumes responsibility for website use.</p>
                  </div>
                </div>
                <p className="text-sm text-steel-600 leading-relaxed">
                  Access to this website, reliance on its content, and use of any referenced or linked service remain entirely the responsibility of the end user, not MUTHIMUNYE GROUP OF CO.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-5">
              <div className="rounded-2xl border border-steel-200 bg-graphite-50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-brand-500" />
                  <h2 className="text-xl font-bold text-graphite-900">Terms of Use</h2>
                </div>
                <div className="space-y-3">
                  {termsPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CircleAlert className="w-4 h-4 text-brand-500 shrink-0 mt-1" />
                      <p className="text-sm text-graphite-700 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-steel-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <LinkIcon className="w-5 h-5 text-brand-500" />
                  <h2 className="text-xl font-bold text-graphite-900">Linked Content and Third Parties</h2>
                </div>
                <p className="text-sm text-steel-600 leading-relaxed">
                  Where the website refers to or links to third-party websites, software, documents, or services, those resources are outside the control of MUTHIMUNYE GROUP OF CO. Use of those resources is entirely at the end user’s own risk, and the company accepts no liability for any issue, damage, interruption, or consequence arising from such use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
