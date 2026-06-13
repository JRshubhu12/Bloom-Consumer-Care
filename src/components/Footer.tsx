import React from "react";
import { ArrowUp, Mail, Phone, MapPin, Sparkles, Send, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = React.useState("");
  const [newsSigned, setNewsSigned] = React.useState(false);

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setNewsSigned(true);
    setTimeout(() => {
      setNewsSigned(false);
      setEmail("");
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF8F4] text-charcoal border-t-2 border-[#EAE4DB] py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden select-none">
      
      {/* Exquisite Subtle Botanical Backdrop Watermark Graphics */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none mix-blend-multiply flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[600px] h-[600px] text-cocoa">
          <path d="M400 100 C350 250 200 400 100 400 C200 400 350 550 400 700 C450 550 600 400 700 400 C600 400 450 250 400 100 Z" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
          <circle cx="400" cy="400" r="150" stroke="currentColor" strokeWidth="1" />
          <path d="M150 150 L650 650 M150 650 L650 150" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Decorative Champagne Gold Warm Ambient Blur */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C3A77D]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-[#768364]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* ==================== CENTRALIZED LOGO & CORE SLOGAN ==================== */}
        <div className="flex flex-col items-center text-center space-y-6 pb-16 border-b border-[#EAE4DB]">
          
          {/* Centered Large Premium Bloom Logo - 200% size increment */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#C3A77D]/10 to-[#768364]/10 rounded-full blur-xl group-hover:opacity-100 transition duration-500 opacity-60" />
            <img 
              src="/company-logo.png" 
              alt="BLOOM Logo Centered" 
              className="h-28 sm:h-32 w-auto object-contain transition-transform duration-700 hover:scale-105 relative"
              loading="lazy"
            />
          </div>

          <div className="space-y-3 max-w-2xl">
            <h3 className="font-serif text-3xl sm:text-4xl tracking-[0.2em] font-medium text-charcoal uppercase">
              BLOOM<span className="text-xs align-super text-[#C3A77D] font-mono font-bold">TM</span>
            </h3>
            <span className="text-[11px] font-mono tracking-[0.4em] text-[#C3A77D] font-bold uppercase block">
              Consumer Care
            </span>
            <span className="text-xs font-semibold bg-[#768364]/10 text-[#546241] px-4 py-1 rounded-full border border-[#768364]/15 inline-block font-mono tracking-wider">
              🌿 Purely Natural • Zero Preservatives
            </span>
            <p className="font-serif text-base text-cocoa leading-relaxed font-light italic pt-2 max-w-lg mx-auto">
              Premium healthy snacks crafted with care, freshness and purpose.
            </p>
          </div>

        </div>

        {/* ==================== MAIN COLUMNAR GRID ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          
          {/* Column 1: Quick Links */}
          <div className="space-y-5 text-left">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-[#C3A77D] font-bold uppercase border-b border-[#EAE4DB] pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans text-sm text-[#5C554D]">
              <li>
                <a href="#" className="hover:text-[#C3A77D] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#C3A77D] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#featured-products" className="hover:text-[#C3A77D] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#C3A77D] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Products</span>
                </a>
              </li>
              <li>
                <a href="#founder-reviews" className="hover:text-[#C3A77D] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#C3A77D] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Our Story</span>
                </a>
              </li>
              <li>
                <a href="#contact-partners" className="hover:text-[#C3A77D] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#C3A77D] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-5 text-left">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-[#C3A77D] font-bold uppercase border-b border-[#EAE4DB] pb-2">
              Products
            </h4>
            <ul className="space-y-3 font-sans text-sm text-[#5C554D]">
              <li>
                <a href="#featured-products" className="hover:text-[#C3A77D] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#C3A77D] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Roasted Makhana</span>
                </a>
              </li>
              <li>
                <a href="#featured-products" className="hover:text-[#C3A77D] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#C3A77D] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Dry Fruit Mixes</span>
                </a>
              </li>
              <li>
                <a href="#featured-products" className="hover:text-[#C3A77D] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#C3A77D] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Healthy Namkeen</span>
                </a>
              </li>
              <li>
                <a href="#corporate-gifts" className="hover:text-[#C3A77D] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#C3A77D] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Upcoming Collections</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-5 text-left">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-[#C3A77D] font-bold uppercase border-b border-[#EAE4DB] pb-2">
              Contact
            </h4>
            <ul className="space-y-3 font-sans text-sm text-[#5C554D]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C3A77D] shrink-0 mt-0.5" />
                <span>Varanasi, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C3A77D] shrink-0" />
                <a href="tel:+918005484365" className="hover:text-[#C3A77D] transition-colors">
                  +91 8005484365
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C3A77D] shrink-0" />
                <a href="mailto:deep131281@gmail.com" className="hover:text-[#C3A77D] transition-colors underline break-all text-xs sm:text-sm">
                  deep131281@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-5 text-left">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-[#C3A77D] font-bold uppercase border-b border-[#EAE4DB] pb-2">
              Social Media
            </h4>
            <ul className="space-y-3 font-sans text-sm text-[#5C554D]">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C3A77D] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3A77D]" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C3A77D] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3A77D]" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Newsletter Subscription Drawer */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE4DB] max-w-xl mx-auto shadow-xs text-center space-y-4">
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#C3A77D] font-bold block">Exclusive Roasting Desk</span>
          <h4 className="font-serif text-base font-semibold text-charcoal">Sign up for Fresh Harvest Priority Access</h4>
          {!newsSigned ? (
            <form onSubmit={handleNewsSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email to receive secret seasonal catalogs..."
                className="flex-1 bg-white border border-[#EAE4DB] rounded-lg px-4 py-2.5 text-xs focus:border-[#C3A77D] outline-none text-[#2F2924]"
              />
              <button type="submit" className="px-5 py-2.5 bg-cocoa text-bg-primary rounded-lg hover:bg-charcoal transition-all text-xs font-mono tracking-wider font-bold uppercase cursor-pointer">
                Subscribe
              </button>
            </form>
          ) : (
            <div className="bg-[#768364]/10 border border-[#768364]/20 p-3 rounded-lg text-xs flex gap-2 items-center justify-center text-[#546241] font-mono font-medium">
              <Check className="w-4 h-4" />
              <span>Priority reservation completed. Seasonal catalogue dispatched!</span>
            </div>
          )}
        </div>

        {/* ==================== BOTTOM STATUS BAR ==================== */}
        <div className="border-t border-[#EAE4DB]/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-[10px] sm:text-xs font-mono text-charcoal/50 text-center md:text-left space-y-1">
            <p>© 2026 Bloom Consumer Care. All rights reserved.</p>
            <p className="text-[#C3A77D]/80">Varansi Headworks • Sourced by hand from village wetland clusters.</p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#C3A77D] font-bold uppercase sm:block hidden">
              ✦ Crafted With Purpose.
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#C3A77D] font-mono text-[10px] sm:text-xs font-bold transition-all uppercase tracking-widest border border-[#EAE4DB] bg-white px-4 py-2 rounded-full cursor-pointer h-10 select-none shadow-xs hover:shadow-md"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C3A77D]" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
