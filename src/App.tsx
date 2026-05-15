import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import ConsentBanner from "./components/ConsentBanner";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MiningSolutionsPage from "./pages/MiningSolutionsPage";
import DevelopmentPage from "./pages/DevelopmentPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import ServicePage from "./pages/ServicePage";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setLoading(true);
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setLoading(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div className="min-h-screen bg-white">
      <ConsentBanner />
      {loading && <PageLoader />}
      <Header />
      <main>
        <Routes location={displayLocation}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/mining-solutions" element={<MiningSolutionsPage />} />
          <Route path="/development" element={<DevelopmentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
