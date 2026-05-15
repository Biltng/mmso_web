import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

const CONSENT_KEY = "muthimunye_consent_accepted";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(CONSENT_KEY);
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-[200] bg-graphite-900/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="fixed inset-0 z-[201] flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl shadow-graphite-900/20 border border-steel-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-graphite-900 via-graphite-800 to-graphite-900 px-6 py-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(230,126,34,0.20),transparent_40%)]" />
            <div className="relative flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/20 shrink-0">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Before You Continue</h2>
                <p className="text-sm text-steel-300">Please review and accept our policies</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            <p className="text-sm text-graphite-700 leading-relaxed mb-4">
              By continuing to use this website, you acknowledge and agree that all use of this website, its content, and any internal or external links is entirely at your own risk and not the responsibility of MUTHIMUNYE GROUP OF CO.
            </p>

            <p className="text-sm text-graphite-700 leading-relaxed mb-5">
              Please review our policies before proceeding:
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                to="/privacy-policy"
                onClick={handleAccept}
                className="flex-1 text-center px-4 py-3 rounded-xl border border-steel-200 bg-graphite-50 text-sm font-semibold text-graphite-800 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600 transition-all duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                onClick={handleAccept}
                className="flex-1 text-center px-4 py-3 rounded-xl border border-steel-200 bg-graphite-50 text-sm font-semibold text-graphite-800 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600 transition-all duration-200"
              >
                Terms of Service
              </Link>
            </div>

            <button
              onClick={handleAccept}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white text-sm font-semibold rounded-xl shadow-lg shadow-brand-200 transition-all duration-300"
            >
              I Agree — Continue Browsing
            </button>

            <p className="text-[11px] text-steel-400 text-center mt-4 leading-relaxed">
              By clicking "I Agree", you confirm that you have read and accepted the Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
