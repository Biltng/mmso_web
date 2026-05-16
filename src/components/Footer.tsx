import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-graphite-900 text-steel-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="mb-3 inline-flex rounded-xl bg-white p-2 shadow-sm">
              <img
                src="/images/muthimunye-logo-full.png"
                alt="MUTHIMUNYE GROUP OF CO."
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-xs leading-relaxed max-w-xs">
              MUTHIMUNYE GROUP OF CO. delivers innovative mining solutions and
              development services that drive efficiency, sustainability, and
              profitability across South Africa.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col gap-2 md:items-end md:text-right md:pt-10 shrink-0">
            <Link
              to="/mining-solutions"
              className="inline-flex text-sm hover:text-brand-400 transition-colors"
            >
              Mining Solutions
            </Link>
            <Link
              to="/development"
              className="inline-flex text-sm hover:text-brand-400 transition-colors"
            >
              Developments
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-graphite-800 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-steel-500 text-center sm:text-left">
            © {new Date().getFullYear()} MUTHIMUNYE GROUP OF CO. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-steel-500">
            <Link to="/privacy-policy" className="hover:text-brand-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-brand-400 transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-8 h-8 rounded-lg bg-graphite-800 hover:bg-brand-500 flex items-center justify-center text-steel-400 hover:text-white transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
