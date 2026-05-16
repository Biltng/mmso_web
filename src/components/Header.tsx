import { useState, useRef, useEffect, useMemo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Search,
  X,
  Menu,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

interface DropdownItem {
  label: string;
  description?: string;
  route?: string;
}

interface NavItem {
  label: string;
  href: string;
  route?: string;
  dropdown?: DropdownItem[];
}

interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
}

const searchableContent: SearchItem[] = [
  // Pages
  { title: "Home", description: "Return to the homepage", href: "#home", category: "Pages" },
  { title: "About Us", description: "Learn about MUTHIMUNYE GROUP OF CO.", href: "/about", category: "Pages" },
  { title: "Contact Us", description: "Get in touch with our team", href: "/contact", category: "Pages" },

  // Mining Solutions
  { title: "Ceramic & Wear Lining", description: "Protecting equipment for enhanced durability and efficiency", href: "/services/ceramic-wear-lining", category: "Mining Solutions" },
  { title: "Civil Construction", description: "Structural & civil engineering works", href: "/services/civil-construction", category: "Mining Solutions" },
  { title: "Roof Bolter Torque Indicating System", description: "Precision torque monitoring technology", href: "/services/roof-bolter-torque-indicating-system", category: "Mining Solutions" },
  { title: "Mechanical", description: "Heavy mechanical maintenance & fabrication", href: "/services/mechanical", category: "Mining Solutions" },
  { title: "Electrical", description: "Electrical systems installation & maintenance", href: "/services/electrical", category: "Mining Solutions" },
  { title: "Earth Moving Parts", description: "OEM & aftermarket ground engaging tools", href: "/services/earth-moving-parts", category: "Mining Solutions" },
  { title: "Logistics and Supply", description: "End-to-end supply chain management", href: "/services/logistics-and-supply", category: "Mining Solutions" },
  { title: "Precision Laser Alignment", description: "Laser-based alignment & calibration services", href: "/services/precision-laser-alignment", category: "Mining Solutions" },
  { title: "Digital Infrastructure", description: "Smart mining technology & connectivity", href: "/services/digital-infrastructure", category: "Mining Solutions" },

  // Development
  { title: "Property Development", description: "End-to-end property development solutions", href: "/services/property-development", category: "Development" },
  { title: "Construction", description: "Commercial & residential construction", href: "/services/construction", category: "Development" },
  { title: "Architecture Design", description: "Innovative architectural design services", href: "/services/architecture-design", category: "Development" },
  { title: "Property Management", description: "Professional property management & oversight", href: "/services/property-management", category: "Development" },
  { title: "Property Maintenance", description: "Ongoing maintenance & facilities management", href: "/services/property-maintenance", category: "Development" },

  // General keywords
  { title: "Get a Quote", description: "Request a quote for our services", href: "/contact", category: "Quick Actions" },
  { title: "Our Mission", description: "World-class mining solutions with minimal impact", href: "/about", category: "About" },
  { title: "Our Vision", description: "South Africa's preferred partner in sustainable mining innovation", href: "/about", category: "About" },
  { title: "Mpumalanga, South Africa", description: "Our office location", href: "/contact", category: "Contact" },
  { title: "Email Us", description: "info@mmso.co.za", href: "/contact", category: "Contact" },
  { title: "Call Us", description: "060 988 4542", href: "/contact", category: "Contact" },
];

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "/about", route: "/about" },
  {
    label: "Mining Solutions",
    href: "/mining-solutions",
    route: "/mining-solutions",
    dropdown: [
      { label: "Ceramic & Wear Lining", description: "Protecting equipment for enhanced durability and efficiency", route: "/services/ceramic-wear-lining" },
      { label: "Civil Construction", description: "Structural & civil engineering works", route: "/services/civil-construction" },
      { label: "Roof Bolter Torque Indicating System", description: "Precision torque monitoring technology", route: "/services/roof-bolter-torque-indicating-system" },
      { label: "Mechanical", description: "Heavy mechanical maintenance & fabrication", route: "/services/mechanical" },
      { label: "Electrical", description: "Electrical systems installation & maintenance", route: "/services/electrical" },
      { label: "Earth Moving Parts", description: "OEM & aftermarket ground engaging tools", route: "/services/earth-moving-parts" },
      { label: "Logistics and Supply", description: "End-to-end supply chain management", route: "/services/logistics-and-supply" },
      { label: "Precision Laser Alignment", description: "Laser-based alignment & calibration services", route: "/services/precision-laser-alignment" },
      { label: "Digital Infrastructure", description: "Smart mining technology & connectivity", route: "/services/digital-infrastructure" },
    ],
  },
  {
    label: "Development",
    href: "/development",
    route: "/development",
    dropdown: [
      { label: "Property Development", description: "End-to-end property development solutions", route: "/services/property-development" },
      { label: "Construction", description: "Commercial & residential construction", route: "/services/construction" },
      { label: "Architecture Design", description: "Innovative architectural design services", route: "/services/architecture-design" },
      { label: "Property Management", description: "Professional property management & oversight", route: "/services/property-management" },
      { label: "Property Maintenance", description: "Ongoing maintenance & facilities management", route: "/services/property-maintenance" },
    ],
  },
  { label: "Contact Us", href: "/contact", route: "/contact" },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollYRef = useRef(0);

  const handleNavClick = (href: string, route?: string) => {
    if (route) {
      navigate(route);
    } else if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY <= 20) {
        setHeaderVisible(true);
      } else if (currentScrollY > lastScrollYRef.current) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const clearDropdownTimeout = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  };

  const handleDropdownEnter = (label: string) => {
    clearDropdownTimeout();
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    clearDropdownTimeout();
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      dropdownTimeoutRef.current = null;
    }, 400);
  };

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    ).slice(0, 8);
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleSearchNavigate(searchResults[0].href);
    }
  };

  const handleSearchNavigate = (href: string) => {
    setSearchQuery("");
    setSearchOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
    } else if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        searchOpen || headerVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-graphite-900/5"
          : "bg-white"
      }`}
    >
      {/* Top Bar */}
      {!searchOpen && (
        <div className="bg-graphite-900 text-steel-300 text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
            <div className="hidden sm:flex items-center gap-5">
              <a
                href="tel:+27609884542"
                className="flex items-center gap-1.5 hover:text-brand-400 transition-colors"
              >
                <Phone className="w-3 h-3" />
                060 988 4542
              </a>
              <a
                href="mailto:info@mmso.co.za"
                className="flex items-center gap-1.5 hover:text-brand-400 transition-colors"
              >
                <Mail className="w-3 h-3" />
                info@mmso.co.za
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-steel-400">
              <MapPin className="w-3 h-3" />
              <span>Mpumalanga, South Africa</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center h-18 lg:h-20 ${searchOpen ? "justify-center" : "justify-between"}`}>
          {!searchOpen && (
            <>
              {/* Logo */}
              <Link to="/" className="shrink-0">
                <img
                  src="/images/muthimunye-logo-full.png"
                  alt="MUTHIMUNYE GROUP OF CO."
                  className="h-10 lg:h-12 w-auto object-contain"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex flex-1 items-center justify-center gap-0.5 xl:gap-1 px-3 min-w-0">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative shrink-0"
                    onMouseEnter={() =>
                      item.dropdown && handleDropdownEnter(item.label)
                    }
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.href, item.route)}
                      className={`flex items-center gap-1 whitespace-nowrap px-2.5 xl:px-3.5 py-2 rounded-lg text-[13px] xl:text-sm font-medium transition-all duration-200 ${
                        activeDropdown === item.label
                          ? "text-brand-500 bg-brand-50"
                          : "text-graphite-700 hover:text-brand-500 hover:bg-graphite-50"
                      }`}
                    >
                      {item.label}
                      {item.dropdown && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* Dropdown */}
                    {item.dropdown && activeDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 pt-2 w-72 animate-in fade-in slide-in-from-top-1 duration-200"
                        onMouseEnter={() => handleDropdownEnter(item.label)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="bg-white rounded-xl shadow-xl shadow-graphite-900/10 border border-steel-200 overflow-hidden">
                          <div className="p-2">
                            {item.dropdown.slice(0, 4).map((subItem, idx) => (
                              <button
                                type="button"
                                key={idx}
                                onClick={() => {
                                  handleNavClick(subItem.route || item.href, subItem.route || item.route);
                                  setActiveDropdown(null);
                                }}
                                className="w-full flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-brand-50 transition-colors group text-left"
                              >
                                <div className="mt-0.5 w-8 h-8 rounded-lg bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center shrink-0 group-hover:from-brand-200 group-hover:to-brand-100 transition-colors">
                                  <ChevronRight className="w-4 h-4 text-brand-500" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-graphite-800 group-hover:text-brand-600 transition-colors">
                                    {subItem.label}
                                  </div>
                                  {subItem.description && (
                                    <div className="text-xs text-steel-400 mt-0.5">
                                      {subItem.description}
                                    </div>
                                  )}
                                </div>
                              </button>
                            ))}
                          </div>
                          <div className="bg-graphite-50 px-5 py-3 border-t border-steel-200">
                            <button
                              type="button"
                              onClick={() => {
                                handleNavClick(item.href, item.route);
                                setActiveDropdown(null);
                              }}
                              className="text-xs font-semibold text-brand-500 hover:text-brand-600 transition-colors"
                            >
                              View all {item.label.toLowerCase()} →
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Search + Mobile Toggle */}
          <div className={`flex items-center ${searchOpen ? "w-full max-w-3xl justify-center" : "gap-2"}`}>
            {/* Search */}
            <div className={`relative ${searchOpen ? "w-full" : ""}`}>
              {searchOpen ? (
                <div className="animate-in fade-in slide-in-from-right-2 duration-200 w-full">
                  <form
                    onSubmit={handleSearch}
                    className="flex items-center w-full"
                  >
                    <div className="relative w-full">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-steel-400" />
                      <input
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search services, pages..."
                        className="w-full pl-9 pr-10 py-2.5 text-sm border border-steel-200 rounded-full bg-graphite-50 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-steel-200 transition-colors"
                      >
                        <X className="w-4 h-4 text-steel-500" />
                      </button>
                    </div>
                  </form>

                  {/* Search Suggestions Dropdown */}
                  {searchQuery.trim() && (
                    <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-xl shadow-graphite-900/10 border border-steel-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                      {searchResults.length > 0 ? (
                        <>
                          <div className="p-2 max-h-80 overflow-y-auto">
                            {(() => {
                              let lastCategory = "";
                              return searchResults.map((result, idx) => {
                                const showCategory = result.category !== lastCategory;
                                lastCategory = result.category;
                                return (
                                  <div key={idx}>
                                    {showCategory && (
                                      <div className="px-3 pt-3 pb-1 text-[10px] font-bold uppercase tracking-wider text-steel-400">
                                        {result.category}
                                      </div>
                                    )}
                                    <button
                                      type="button"
                                      onClick={() => handleSearchNavigate(result.href)}
                                      className="w-full flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-brand-50 transition-colors text-left group"
                                    >
                                      <div className="mt-0.5 w-7 h-7 rounded-lg bg-brand-50 group-hover:bg-brand-100 flex items-center justify-center shrink-0 transition-colors">
                                        <ArrowRight className="w-3.5 h-3.5 text-brand-500" />
                                      </div>
                                      <div className="min-w-0">
                                        <div className="text-sm font-semibold text-graphite-800 group-hover:text-brand-600 transition-colors truncate">
                                          {result.title}
                                        </div>
                                        <div className="text-xs text-steel-400 truncate">
                                          {result.description}
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                );
                              });
                            })()}
                          </div>
                          <div className="bg-graphite-50 px-4 py-2.5 border-t border-steel-200 flex items-center justify-between">
                            <span className="text-xs text-steel-400">
                              {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} found
                            </span>
                            <span className="text-[10px] text-steel-400">
                              Press Enter for first result
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="p-6 text-center">
                          <Search className="w-8 h-8 text-steel-300 mx-auto mb-2" />
                          <p className="text-sm font-medium text-graphite-700">No results found</p>
                          <p className="text-xs text-steel-400 mt-1">
                            Try searching for services, pages, or keywords
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2.5 rounded-full text-graphite-600 hover:text-brand-500 hover:bg-brand-50 transition-all"
                  aria-label="Open search"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {!searchOpen && (
              <>
                {/* CTA Button (Desktop) */}
                <button
                  type="button"
                  onClick={() => handleNavClick("/contact", "/contact")}
                  className="hidden xl:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white text-sm font-semibold rounded-full shadow-md shadow-brand-200 hover:shadow-lg hover:shadow-brand-300 transition-all duration-300"
                >
                  Get a Quote
                </button>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2.5 rounded-lg text-graphite-600 hover:text-brand-500 hover:bg-brand-50 transition-all"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && !searchOpen && (
        <div className="lg:hidden bg-white border-t border-steel-200 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="flex-1 text-left px-4 py-3 text-sm font-medium text-graphite-700 hover:text-brand-500 hover:bg-brand-50 rounded-lg transition-colors"
                    onClick={() => {
                      if (!item.dropdown) {
                        handleNavClick(item.href, item.route);
                        setMobileMenuOpen(false);
                      } else {
                        handleNavClick(item.href, item.route);
                        setMobileMenuOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </button>
                  {item.dropdown && (
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.label ? null : item.label
                        )
                      }
                      className="p-3 rounded-lg text-steel-400 hover:text-brand-500 hover:bg-brand-50 transition-colors"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.dropdown && mobileDropdown === item.label && (
                  <div className="ml-4 pl-4 border-l-2 border-brand-200 space-y-1 pb-2 animate-in fade-in slide-in-from-top-1 duration-200">
                    {item.dropdown.slice(0, 4).map((subItem, idx) => (
                      <button
                        type="button"
                        key={idx}
                        className="w-full text-left block px-4 py-2.5 text-sm text-graphite-600 hover:text-brand-500 hover:bg-brand-50 rounded-lg transition-colors"
                        onClick={() => {
                          handleNavClick(subItem.route || item.href, subItem.route || item.route);
                          setMobileMenuOpen(false);
                        }}
                      >
                        <div className="font-medium">{subItem.label}</div>
                        {subItem.description && (
                          <div className="text-xs text-steel-400 mt-0.5">
                            {subItem.description}
                          </div>
                        )}
                      </button>
                    ))}
                    <button
                      type="button"
                      className="w-full text-left px-4 py-2.5 text-sm font-semibold text-brand-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
                      onClick={() => {
                        handleNavClick(item.href, item.route);
                        setMobileMenuOpen(false);
                      }}
                    >
                      View all {item.label.toLowerCase()} →
                    </button>
                  </div>
                )}
              </div>
            ))}

            <div className="pt-3 border-t border-steel-200">
                <button
                  type="button"
                  className="block w-full text-center px-5 py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold rounded-xl shadow-md shadow-brand-200 transition-all"
                  onClick={() => {
                    handleNavClick("/contact", "/contact");
                    setMobileMenuOpen(false);
                  }}
                >
                  Get a Quote
                </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
