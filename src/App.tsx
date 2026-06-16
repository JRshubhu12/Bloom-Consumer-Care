import { useState, useMemo, useEffect } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence, MotionConfig } from "motion/react";
import { ShoppingBag, ChevronRight, Check, Trash2, Menu, X, ArrowRight, Volume2, VolumeX } from "lucide-react";

import Lenis from "lenis";

// Component imports
import Hero from "./components/Hero";
import AboutStory from "./components/AboutStory";
import TrustTransparency from "./components/TrustTransparency";
import WomenEmpowerment from "./components/WomenEmpowerment";
import OurImpact from "./components/OurImpact";
import IngredientHighlight from "./components/IngredientHighlight";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductComparison from "./components/ProductComparison";
import BestSellersStrip from "./components/BestSellersStrip";
import SidebarScroller from "./components/SidebarScroller";
import LuxuryLoader from "./components/LuxuryLoader";
import FounderTestimonials from "./components/FounderTestimonials";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingParticles from "./components/FloatingParticles";
import PremiumCursor from "./components/PremiumCursor";

import { playWoodClick, playPaperRustle, playSeedDrop } from "./utils/audioUtils";

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "success">("cart");

  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  // Sound Toggle State
  const [natureSounds, setNatureSounds] = useState(() => {
    try {
      return localStorage.getItem("bloom_nature_sounds") === "true";
    } catch {
      return false;
    }
  });

  // Prefers Reduced Motion State
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    try {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      
      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } catch (e) {
      console.warn("Media query reduced motion not supported", e);
    }
  }, []);

  const handleToggleSounds = () => {
    const next = !natureSounds;
    setNatureSounds(next);
    try {
      localStorage.setItem("bloom_nature_sounds", String(next));
    } catch (e) {
      console.warn("localStorage save block", e);
    }
    if (next) {
      // Temporarily set value so that the synthesis function starts immediately
      localStorage.setItem("bloom_nature_sounds", "true");
      playWoodClick();
    }
  };

  // SEO Schema Injection
  useEffect(() => {
    try {
      // FAQ Schema
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Bloom preservative free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 100%. Bloom snacks are completely free from artificial preservatives, MSG, synthetic colorants, and BHA/BHT stabilizers."
            }
          },
          {
            "@type": "Question",
            "name": "Where is the makhana sourced?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our Phool Makhana is sourced directly from certified organic wetlands of the Mithila region in Bihar, India."
            }
          },
          {
            "@type": "Question",
            "name": "How long does freshness last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sealed bags maintain their crisp crunch for up to 90 days. Once opened, we recommend sealing in an airtight container."
            }
          },
          {
            "@type": "Question",
            "name": "Are products vegan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our Mint, Chatpata Masala, Plain Salted, and Magic Masala Makhana varieties, alongside the Energy Bar, are 100% vegan."
            }
          },
          {
            "@type": "Question",
            "name": "Do purchases support women employment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Sourcing, sorting, and roasting facilities are operated exclusively by rural women, paying wages up to 4x the regional average."
            }
          }
        ]
      };

      // Organization Schema
      const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Bloom Purely Natural",
        "url": window.location.origin,
        "logo": `${window.location.origin}/company-logo.png`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-8005484365",
          "contactType": "customer service"
        }
      };

      const sOrg = document.createElement("script");
      sOrg.type = "application/ld+json";
      sOrg.id = "jsonld-org";
      sOrg.innerHTML = JSON.stringify(orgSchema);
      document.head.appendChild(sOrg);

      const sFaq = document.createElement("script");
      sFaq.type = "application/ld+json";
      sFaq.id = "jsonld-faq";
      sFaq.innerHTML = JSON.stringify(faqSchema);
      document.head.appendChild(sFaq);

      return () => {
        document.getElementById("jsonld-org")?.remove();
        document.getElementById("jsonld-faq")?.remove();
      };
    } catch (e) {
      console.warn("JSON-LD Injection failed", e);
    }
  }, []);

  useEffect(() => {
    const sections = [
      "featured-products", 
      "why-bloom", 
      "founder-reviews", 
      "contact-partners", 
      "trust-transparency", 
      "product-comparison", 
      "best-sellers",
      "faq-section"
    ];
    
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleHomeScroll = () => {
      if (window.scrollY < 300) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleHomeScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleHomeScroll);
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) return;
    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0 : 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like easeOutExpo
      smoothWheel: !prefersReducedMotion,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Global hash link click handler for Lenis smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        const targetId = anchor.hash;
        playWoodClick();
        if (targetId === "#") {
          e.preventDefault();
          lenis.scrollTo(0);
          return;
        }
        const targetElement = document.querySelector(targetId);
        if (targetElement && targetElement instanceof HTMLElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement);
          setIsMobileMenuOpen(false);
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, [isLoading, prefersReducedMotion]);

  useEffect(() => {
    let lastScrolled = false;
    const handleScroll = () => {
      const isScrolled = window.scrollY > 15;
      if (isScrolled !== lastScrolled) {
        lastScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalCartCount = useMemo(() => {
    return cart.reduce((acc, curr) => acc + curr.qty, 0);
  }, [cart]);

  const totalCartPrice = useMemo(() => {
    return cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0);
  }, [cart]);

  const handleAddToCart = (productName: string) => {
    let price = 349;
    if (productName.includes("Saffron")) price = 699;
    if (productName.includes("Namkeen") || productName.includes("Amaranth")) price = 299;
    if (productName.includes("Mint")) price = 379;

    const itemId = productName.replace(/\s+/g, "-").toLowerCase();

    setCart((prev) => {
      const exists = prev.find((item) => item.id === itemId);
      if (exists) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { id: itemId, name: productName, price, qty: 1 }];
    });

    playWoodClick();
    playSeedDrop();
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (itemId: string) => {
    playWoodClick();
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    playWoodClick();
    setCart([]);
  };

  const triggerCheckout = () => {
    playWoodClick();
    playSeedDrop();
    setCheckoutStep("success");
    setTimeout(() => {
      setCart([]);
      setIsCartOpen(false);
      setCheckoutStep("cart");
    }, 4500);
  };

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#featured-products", label: "Products" },
    { href: "#our-story", label: "Our Story" },
    { href: "#trust-transparency", label: "Trust" },
    { href: "#ingredient-highlight", label: "Journey" },
    { href: "#women-empowerment", label: "Community" },
    { href: "#contact-partners", label: "Contact" },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "user"}>
        <AnimatePresence>
          {isLoading && (
            <LuxuryLoader onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        <PremiumCursor />

        <m.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-screen bg-bg-primary overflow-x-hidden scroll-smooth"
        >
      
      {/* Floating background leaf and seed graphics */}
      <FloatingParticles />
      
      {/* FLOATING LUXURY APPLE-STYLE SIDEBAR SCROLLER */}
      <SidebarScroller />

      {/* WORLD-CLASS LUXURY HEADER */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full select-none pointer-events-none">
        
        {/* MAIN HEADER */}
        <header className={`pointer-events-auto w-full transition-all duration-500 bg-[#F8F4EE]/90 backdrop-blur-md border-b border-[#B68A35]/30 ${
          scrolled ? "py-3 lg:py-4 shadow-[0_10px_40px_-10px_rgba(43,33,27,0.12)]" : "py-5 lg:py-6 shadow-[0_4px_20px_-10px_rgba(43,33,27,0.05)]"
        }`}>
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
            
            {/* LEFT: Brand Identity */}
            <a href="#" className="flex items-center gap-3 lg:gap-4 group cursor-pointer text-left">
              <div className="relative flex items-center justify-center">
                <img 
                  src="/company-logo.png" 
                  alt="BLOOM" 
                  className={`w-auto object-contain transition-all duration-500 origin-left ${scrolled ? 'h-9 lg:h-10' : 'h-11 lg:h-12'}`}
                  decoding="async"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif text-xl lg:text-2xl font-bold leading-none text-earth tracking-wide">BLOOM</span>
                <span className="font-sans text-[8px] lg:text-[9px] tracking-[0.25em] text-leaf uppercase font-semibold mt-1">Purely Natural</span>
              </div>
            </a>

            {/* CENTER: Premium Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = (link.href === "#" && activeSection === "") || (link.href === `#${activeSection}`);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative group py-2"
                  >
                    <span className={`font-sans text-[11px] uppercase tracking-[0.15em] font-semibold transition-colors duration-300 ${
                      isActive ? "text-leaf" : "text-earth/70 group-hover:text-earth"
                    }`}>
                      {link.label}
                    </span>
                    
                    {/* Gold Dot Indicator */}
                    <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-leaf transition-all duration-300 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-50"
                    }`} />
                  </a>
                );
              })}
            </nav>

            {/* RIGHT: Actions */}
            <div className="flex items-center gap-5 sm:gap-6 lg:gap-8 pointer-events-auto">

              {/* Nature Sounds Toggle */}
              <button
                onClick={handleToggleSounds}
                className="text-[#2B211B] hover:text-[#B68A35] transition-colors cursor-pointer"
                title={natureSounds ? "Disable Nature Sounds" : "Enable Nature Sounds"}
              >
                {natureSounds ? (
                  <Volume2 className="w-5 h-5 text-[#768364] animate-pulse" />
                ) : (
                  <VolumeX className="w-5 h-5 text-earth/50" />
                )}
              </button>

              {/* Cart Icon */}
              <button
                onClick={() => {
                  playPaperRustle();
                  setIsCartOpen(true);
                }}
                className="relative text-[#2B211B] hover:text-[#B68A35] transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                {totalCartCount > 0 && (
                  <m.span 
                    key={totalCartCount}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute -top-1.5 -right-2 min-w-[18px] h-[18px] rounded-full bg-[#B68A35] text-white text-[9px] font-sans font-bold flex items-center justify-center shadow-sm px-1"
                  >
                    {totalCartCount}
                  </m.span>
                )}
              </button>

              {/* Luxury Shop Now Button */}
              <button
                onClick={() => {
                  playWoodClick();
                  const el = document.getElementById("featured-products");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="hidden md:flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-leaf bg-bg-primary text-leaf hover:bg-leaf hover:text-white hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <span className="font-sans text-[10px] lg:text-[11px] font-bold uppercase tracking-widest">Shop Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2} />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => {
                  playWoodClick();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="lg:hidden p-2 text-[#2B211B] hover:text-[#B68A35] transition-colors cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Responsive Navigation overlay & menu drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay Background */}
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-[#2B211B]/80 backdrop-blur-md z-45 lg:hidden pointer-events-auto"
                onClick={() => {
                  playWoodClick();
                  setIsMobileMenuOpen(false);
                }}
              />

              {/* Premium Drawer Content */}
              <m.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#F8F4EE] z-50 lg:hidden shadow-2xl p-8 flex flex-col justify-between pointer-events-auto border-l border-[#B68A35]/20"
              >
                <div className="space-y-10">
                  {/* Top Bar inside Drawer */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#B68A35]/20">
                    <div className="flex flex-col text-left">
                      <span className="font-serif text-xl font-bold leading-none text-[#2B211B]">BLOOM</span>
                      <span className="font-sans text-[8px] tracking-[0.2em] text-[#B68A35] uppercase font-bold mt-1">Purely Natural</span>
                    </div>
                    <button
                      onClick={() => {
                        playWoodClick();
                        setIsMobileMenuOpen(false);
                      }}
                      className="p-2 rounded-full border border-[#B68A35]/30 text-[#2B211B] hover:bg-[#EDE5DA] transition-colors"
                    >
                      <X className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex flex-col gap-6 text-left">
                    {navLinks.map((link) => {
                      const isActive = (link.href === "#" && activeSection === "") || (link.href === `#${activeSection}`);
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={() => {
                            playWoodClick();
                            setIsMobileMenuOpen(false);
                          }}
                          className={`font-sans text-lg uppercase tracking-[0.1em] transition-colors py-2 font-medium flex items-center gap-4 ${
                            isActive ? "text-[#B68A35]" : "text-[#2B211B] hover:text-[#B68A35]"
                          }`}
                        >
                          {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#B68A35]" />}
                          {link.label}
                        </a>
                      );
                    })}
                  </nav>
                </div>

                {/* Bottom of Drawer */}
                <div className="space-y-6 text-center">
                  <button
                    onClick={() => {
                      playWoodClick();
                      setIsMobileMenuOpen(false);
                      const el = document.getElementById("featured-products");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full py-4 bg-[#B68A35] hover:bg-[#D4AF37] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_4px_20px_rgba(182,138,53,0.3)] transition-colors flex items-center justify-center gap-3"
                  >
                    <span>Shop Collection</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-[#2B211B]/50 font-sans uppercase tracking-[0.2em] font-medium">
                    100% Natural • Zero Preservatives
                  </p>
                </div>
              </m.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* LUXURY SLIDING CART DRAWER CASE */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 select-none">
            {/* Dark background canopy overlay */}
            <div 
              className="absolute inset-0 bg-earth/20 backdrop-blur-xs" 
              onClick={() => {
                playWoodClick();
                setIsCartOpen(false);
              }}
            />

            {/* Visual sliding tray */}
            <m.div
              className="absolute right-0 inset-y-0 w-full sm:w-[420px] bg-white shadow-2xl flex flex-col justify-between border-l border-leaf/30 text-left"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 85, damping: 20 }}
            >
              {/* Drawer Top logo */}
              <div className="p-6 border-b border-leaf/20 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <ShoppingBag className="w-4 h-4 text-leaf" />
                  <h3 className="font-serif text-base font-semibold text-earth">Your Roasting Bag</h3>
                </div>
                <button
                  onClick={() => {
                    playWoodClick();
                    setIsCartOpen(false);
                  }}
                  className="p-1.5 rounded-full bg-bg-primary border border-leaf/45 text-earth/60"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Slider Interior content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <AnimatePresence mode="wait">
                  {checkoutStep === "cart" ? (
                    <m.div key="items-list" className="space-y-4">
                      {cart.length === 0 ? (
                        <div className="py-16 text-center space-y-3">
                          <ShoppingBag className="w-12 h-12 text-leaf/60 mx-auto" strokeWidth="1" />
                          <p className="font-serif text-earth/50 italic text-sm">Your roasting bag is empty.</p>
                          <button
                            onClick={() => {
                              playWoodClick();
                              setIsCartOpen(false);
                            }}
                            className="text-xs font-mono uppercase tracking-widest text-leaf font-bold hover:underline"
                          >
                            Explore Collection
                          </button>
                        </div>
                      ) : (
                        cart.map((item) => (
                          <div key={item.id} className="flex items-center justify-between gap-4 p-3 bg-bg-primary border border-leaf/10 rounded-xl relative overflow-hidden">
                            <div className="space-y-0.5">
                              <h4 className="font-serif text-xs font-semibold text-earth max-w-[200px] truncate">{item.name}</h4>
                              <div className="flex items-baseline gap-1.5">
                                <span className="text-[10px] text-earth/60 font-bold">Qty: {item.qty}</span>
                              </div>
                            </div>
                            <button
                              onClick={() => handleRemoveFromCart(item.id)}
                              className="p-1.5 bg-white border border-leaf/25 rounded-md text-cocoa/70 hover:text-red-500 hover:border-red-400 transition-colors"
                              title="Delete Item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))
                      )}
                    </m.div>
                  ) : (
                    <m.div
                      key="checkout-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-nature text-white flex items-center justify-center shadow-lg animate-bounce">
                        <Check className="w-8 h-8" />
                      </div>
                      <h4 className="font-serif text-lg font-semibold text-[#6B4A32] uppercase">Roasting Queue Registered!</h4>
                      <p className="font-sans text-xs text-earth/70 max-w-sm leading-relaxed font-light">
                        Artisans have logged your gourmet snack specifications inside direct village roasting plants. Prepare for warm, pesticide-free clinical crunch soon!
                      </p>
                      <span className="text-[9px] font-mono text-nature bg-nature/10 px-3 py-1 rounded-full border border-nature/20">
                        DIRECT ACCOUNT BANK PROMPT CREDITED
                      </span>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Drawer bottom billing aggregations */}
              {cart.length > 0 && checkoutStep === "cart" && (
                <div className="p-6 border-t border-leaf/20 bg-bg-primary space-y-4">
                  <div className="space-y-2 font-sans text-xs text-earth/80">
                    <div className="flex justify-between">
                      <span>Total Items:</span>
                      <span className="font-bold">{totalCartCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fresh Roast Shipping:</span>
                      <span className="text-nature font-bold">FREE COMPLIMENTARY</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleClearCart}
                      className="py-3 px-4 border border-leaf/35 text-cocoa rounded-lg font-mono text-[9px] hover:bg-white transition-colors"
                    >
                      Clear All
                    </button>
                    <button
                      onClick={triggerCheckout}
                      className="flex-1 py-3 bg-[#5C3E26] hover:bg-[#392312] text-white text-xs font-bold uppercase tracking-wider rounded-lg text-center transition-colors shadow-xs"
                    >
                      Process Fresh Roasts
                    </button>
                  </div>
                </div>
              )}

            </m.div>
          </div>
        )}
      </AnimatePresence>

      {/* CORE EXPERIENCE PAGES */}
      <main>
        
         {/* HERO SECTION */}
        <Hero 
          onShopClick={() => {
            playWoodClick();
            const el = document.getElementById("featured-products");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          onStoryClick={() => {
            playWoodClick();
            const el = document.getElementById("our-story");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
         />

         <AboutStory />

         <TrustTransparency />

         <WomenEmpowerment />

         {/* METRICS COUNT UP */}
         <m.div id="our-promise">
           <OurImpact />
         </m.div>

        {/* ORGANIC INGREDIENTS HOVER PROFILES */}
        <IngredientHighlight />

        {/* LUXURY FLOATING FeaturedProducts INSPIRED BY COHESIVE FMCG BRAND */}
        <FeaturedProducts onAddToCart={handleAddToCart} />

        {/* PRODUCT FLAVORS COMPARISON */}
        <ProductComparison />

        {/* BEST SELLERS STRIP */}
        <BestSellersStrip onAddToCart={handleAddToCart} />

        {/* CUSTOMERS ORAL HISTORY & FOUNDER GROWTH SAGA */}
        <FounderTestimonials />

        {/* FREQUENTLY ASKED QUESTIONS SECTION */}
        <FAQSection />

        {/* SUPPORT TOUCHPOINTS CONTACT PARTNERS FORMS */}
        <ContactSection />

      </main>

      {/* LUXURY FOOTER BRAND NAV LINKS */}
      <Footer />

      {/* PERSISTENT FLOATING STICKY BUY BAR COHESION */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none pointer-events-auto">
        {cart.length > 0 && (
          <button
            onClick={() => {
              playPaperRustle();
              setIsCartOpen(true);
            }}
            className="w-12 h-12 rounded-full bg-white border border-[#C6A769]/30 shadow-lg flex items-center justify-center relative text-[#4B3425] hover:bg-[#FAF8F4] transition-all cursor-pointer"
            title="Open Roasting Bag"
          >
            <ShoppingBag className="w-5 h-5 text-cocoa" />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#93A47D] text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
              {totalCartCount}
            </span>
          </button>
        )}

        <button
          onClick={() => {
            playWoodClick();
            const el = document.getElementById("featured-products");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-gradient-to-r from-[#5C3E26] to-[#452B18] hover:from-[#452B18] hover:to-[#221005] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg transition-all duration-300 luxury-glowing-btn cursor-pointer flex items-center gap-2"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>BUY NOW</span>
        </button>
      </div>

      </m.div>
    </MotionConfig>
  </LazyMotion>
  );
}
