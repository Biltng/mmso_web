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
            Privacy 
