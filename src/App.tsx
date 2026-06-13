import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence, MotionConfig } from "motion/react";
import { ShoppingBag, ChevronRight, Check, Trash2, Menu, X, ArrowRight } from "lucide-react";

import Lenis from "lenis";

// Component imports
import Hero from "./components/Hero";
import BestSellersStrip from "./components/BestSellersStrip";
import AboutBloom from "./components/AboutBloom";
import OurImpact from "./components/OurImpact";
import IngredientHighlight from "./components/IngredientHighlight";
import WomenEmpowerment from "./components/WomenEmpowerment";
import HealthBenefits from "./components/HealthBenefits";
import FeaturedProducts from "./components/FeaturedProducts";
import SidebarScroller from "./components/SidebarScroller";
import LuxuryLoader from "./components/LuxuryLoader";
import WhatsComingNext from "./components/WhatsComingNext";
import FounderTestimonials from "./components/FounderTestimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

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
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like easeOutExpo
      smoothWheel: true,
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
  }, [isLoading]);

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
    // Standard mapping prices for cart selections
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

    // Auto open drawer to fast track checkout conversion
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const triggerCheckout = () => {
    setCheckoutStep("success");
    setTimeout(() => {
      setCart([]);
      setIsCartOpen(false);
      setCheckoutStep("cart");
    }, 4500);
  };

  const navLinks = [
    { href: "#about-story", label: "Story" },
    { href: "#featured-products", label: "Shop" },
    { href: "#our-promise", label: "Impact" },
    { href: "#contact-partners", label: "Contact" },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {isLoading && (
          <LuxuryLoader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative min-h-screen bg-bg-primary overflow-x-hidden scroll-smooth"
      >
      
      {/* FLOATING LUXURY APPLE-STYLE SIDEBAR SCROLLER */}
      <SidebarScroller />

      {/* PREMIUM FOOD BRAND HEADER */}
      <div className={`fixed top-0 left-0 right-0 z-50 w-full select-none pointer-events-none transition-all duration-300 ${
        scrolled ? "py-3 px-4 sm:px-6 lg:px-8" : "py-5 px-4 sm:px-6 lg:px-8"
      }`}>

        <header className={`max-w-5xl mx-auto flex items-center justify-between transition-all duration-300 pointer-events-auto bg-[#F7EFE5]/95 backdrop-blur-md border border-charcoal/5 rounded-full ${
          scrolled 
            ? "px-5 sm:px-6 py-2.5 shadow-md" 
            : "px-6 sm:px-8 py-3.5 shadow-sm"
        }`}>
          
          {/* Lotus Brand Logo Title */}
          <a href="#" className="flex items-center gap-3 group text-left">
            <img 
              src="/company-logo.png" 
              alt="BLOOM Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              loading="eager"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold leading-none text-charcoal">BLOOM</span>
              <span className="font-sans text-[8px] tracking-[0.2em] text-charcoal/70 uppercase font-bold mt-0.5 whitespace-nowrap">Consumer Care</span>
            </div>
          </a>

          {/* Premium Desktop Navigation Linkages */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-xs uppercase tracking-widest text-charcoal/80 hover:text-charcoal transition-colors font-bold relative py-1 group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 inset-x-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250" />
              </a>
            ))}
          </nav>

          {/* Premium Cart/Buy Icon Trigger */}
          <div className="flex items-center gap-3">
            
            <button
              onClick={() => {
                const el = document.getElementById("featured-products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative px-5 py-2.5 bg-charcoal text-white hover:bg-charcoal/90 rounded-full transition-all duration-250 shadow-sm cursor-pointer flex items-center gap-2 group"
              title="Shop Collection"
              id="header-buy-vessel"
            >
              <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform duration-250" />
              <span className="font-sans text-[11px] font-bold uppercase tracking-widest hidden sm:inline-block">Shop</span>
              {totalCartCount > 0 && (
                <motion.span 
                  key={totalCartCount}
                  initial={{ scale: 0.6, opacity: 0.5 }}
                  animate={{ scale: [0.6, 1.25, 1], opacity: 1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 12 }}
                  className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1.5 rounded-full bg-sage text-white text-[10px] font-sans font-bold flex items-center justify-center shadow-sm"
                >
                  {totalCartCount}
                </motion.span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-charcoal/10 bg-white text-charcoal hover:bg-[#EBE3D5] transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </header>

        {/* Mobile Responsive Navigation menu drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 bg-[#FAF8F4] border border-[#C6A769]/25 shadow-xl rounded-2xl p-4 space-y-2 text-left"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 px-3 font-sans text-[11px] uppercase tracking-widest text-[#222222] hover:text-[#C6A769] rounded-lg hover:bg-white/60 transition-all font-medium border-b border-[#C6A769]/10"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* LUXURY SLIDING CART DRAWER CASE */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 select-none">
            {/* Dark background canopy overlay */}
            <div 
              className="absolute inset-0 bg-charcoal/20 backdrop-blur-xs" 
              onClick={() => setIsCartOpen(false)}
            />

            {/* Visual sliding tray */}
            <motion.div
              className="absolute right-0 inset-y-0 w-full sm:w-[420px] bg-white shadow-2xl flex flex-col justify-between border-l border-gold/30 text-left"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 85, damping: 20 }}
            >
              {/* Drawer Top logo */}
              <div className="p-6 border-b border-gold-light/20 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <ShoppingBag className="w-4 h-4 text-gold" />
                  <h3 className="font-serif text-base font-semibold text-charcoal">Your Roasting Bag</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-full bg-bg-primary border border-gold-light/45 text-charcoal/60"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Slider Interior content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <AnimatePresence mode="wait">
                  {checkoutStep === "cart" ? (
                    <motion.div key="items-list" className="space-y-4">
                      {cart.length === 0 ? (
                        <div className="py-16 text-center space-y-3">
                          <ShoppingBag className="w-12 h-12 text-gold-light/60 mx-auto" strokeWidth="1" />
                          <p className="font-serif text-charcoal/50 italic text-sm">Your roasting bag is empty.</p>
                          <button
                            onClick={() => setIsCartOpen(false)}
                            className="text-xs font-mono uppercase tracking-widest text-gold font-bold hover:underline"
                          >
                            Explore Collection
                          </button>
                        </div>
                      ) : (
                        cart.map((item) => (
                          <div key={item.id} className="flex items-center justify-between gap-4 p-3 bg-bg-primary border border-gold-light/10 rounded-xl relative overflow-hidden">
                            <div className="space-y-0.5">
                              <h4 className="font-serif text-xs font-semibold text-charcoal max-w-[200px] truncate">{item.name}</h4>
                              <div className="flex items-baseline gap-1.5">
                                <span className="font-mono text-xs text-cocoa">₹{item.price * item.qty}</span>
                                <span className="text-[10px] text-charcoal/40 font-light">Qty: {item.qty}</span>
                              </div>
                            </div>
                            <button
                              onClick={() => handleRemoveFromCart(item.id)}
                              className="p-1.5 bg-white border border-gold-light/25 rounded-md text-cocoa/70 hover:text-red-500 hover:border-red-400 transition-colors"
                              title="Delete Item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="checkout-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-sage text-white flex items-center justify-center shadow-lg animate-bounce">
                        <Check className="w-8 h-8" />
                      </div>
                      <h4 className="font-serif text-lg font-semibold text-[#6B4A32] uppercase">Roasting Queue Registered!</h4>
                      <p className="font-sans text-xs text-charcoal/70 max-w-sm leading-relaxed font-light">
                        Artisans have logged your gourmet snack specifications inside direct village roasting plants. Prepare for warm, pesticide-free clinical crunch soon!
                      </p>
                      <span className="text-[9px] font-mono text-sage bg-sage/10 px-3 py-1 rounded-full border border-sage/20">
                        DIRECT ACCOUNT BANK PROMPT CREDITED
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Drawer bottom billing aggregations */}
              {cart.length > 0 && checkoutStep === "cart" && (
                <div className="p-6 border-t border-gold-light/20 bg-bg-primary space-y-4">
                  <div className="space-y-2 font-mono text-xs text-charcoal/80">
                    <div className="flex justify-between">
                      <span>Subtotal value:</span>
                      <span>₹{totalCartPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fresh Roast Shipping:</span>
                      <span className="text-sage font-bold">FREE COMPLIMENTARY</span>
                    </div>
                    <div className="flex justify-between border-t border-gold-light/15 pt-2 text-sm sm:text-base text-cocoa">
                      <span className="font-serif font-bold">Total price:</span>
                      <strong className="font-serif font-bold">₹{totalCartPrice}</strong>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleClearCart}
                      className="py-3 px-4 border border-gold-light/35 text-cocoa rounded-lg font-mono text-[9px] hover:bg-white transition-colors"
                    >
                      Clear Items
                    </button>
                    <button
                      onClick={triggerCheckout}
                      className="flex-1 py-3 bg-cocoa text-bg-primary rounded-lg text-xs font-mono font-bold uppercase tracking-widest hover:bg-charcoal transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer luxury-glowing-btn"
                    >
                      <span>Checkout & fresh-roast</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CORE EXPERIENCE PAGES */}
      <main>
        
        {/* HERO SECTION */}
        <Hero 
          onShopClick={() => {
            const el = document.getElementById("featured-products");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          onStoryClick={() => {
            const el = document.getElementById("about-story");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* PRODUCTS QUICK BUY STRIP & TRUST SEGMENT */}
        <BestSellersStrip onAddToCart={handleAddToCart} />

        {/* ABOUT STORY PATHS */}
        <AboutBloom />

        {/* METRICS COUNT UP */}
        <OurImpact />

        {/* ORGANIC INGREDIENTS HOVER PROFILES */}
        <IngredientHighlight />

        {/* WOMEN ARTISANS SIGNATURE CYCLE TIMELINE */}
        <WomenEmpowerment />

        {/* APPLE HEALTH SCIENCE METHOLOGY */}
        <HealthBenefits />

        {/* LUXURY FLOATING FeaturedProducts INSPIRED BY COHESIVE FMCG BRAND */}
        <FeaturedProducts onAddToCart={handleAddToCart} />

        {/* WHAT'S COMING NEXT PRODUCT ROADMAP */}
        <WhatsComingNext />

        {/* CUSTOMERS ORAL HISTORY & FOUNDER GROWTH SAGA */}
        <FounderTestimonials />

        {/* SUPPORT TOUCHPOINTS CONTACT PARTNERS FORMS */}
        <ContactSection />

      </main>

      {/* LUXURY FOOTER BRAND NAV LINKS */}
      <Footer />

      {/* PERSISTENT FLOATING STICKY BUY BAR COHESION */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none">
        {cart.length > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
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
            const el = document.getElementById("featured-products");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-gradient-to-r from-[#5C3E26] to-[#452B18] hover:from-[#452B18] hover:to-[#221005] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg transition-all duration-300 luxury-glowing-btn cursor-pointer flex items-center gap-2"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>BUY NOW</span>
        </button>
      </div>

      </motion.div>
    </MotionConfig>
  );
}
