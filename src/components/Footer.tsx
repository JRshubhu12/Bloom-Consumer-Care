import React from "react";
import { ArrowUp, Mail, Phone, MapPin, Check } from "lucide-react";

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
    <footer className="bg-bg-secondary text-earth border-t-2 border-leaf/10 py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden select-none">
      
      {/* Exquisite Subtle Botanical Backdrop Watermark Graphics */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] select-none flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[600px] h-[600px] text-nature">
          <path d="M400 100 C350 250 200 400 100 400 C200 400 350 550 400 700 C450 550 600 400 700 400 C600 400 450 250 400 100 Z" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
          <circle cx="400" cy="400" r="150" stroke="currentColor" strokeWidth="1" />
          <path d="M150 150 L650 650 M150 650 L650 150" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* ==================== CENTRALIZED LOGO & CORE SLOGAN ==================== */}
        <div className="flex flex-col items-center text-center space-y-6 pb-16 border-b border-leaf/10">
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-leaf/10 to-nature/10 rounded-full blur-xl group-hover:opacity-100 transition duration-500 opacity-60" />
            <img 
              src="/company-logo.png" 
              alt="BLOOM Logo Centered" 
              className="h-28 sm:h-32 w-auto object-contain transition-transform duration-700 hover:scale-105 relative"
              loading="lazy"
            />
          </div>

          <div className="space-y-3 max-w-2xl">
            <h3 className="font-serif text-3xl sm:text-4xl tracking-[0.2em] font-medium text-earth uppercase">
              BLOOM<span className="text-xs align-super text-leaf font-mono font-bold">TM</span>
            </h3>
            <span className="text-[11px] font-sans tracking-[0.4em] text-nature font-bold uppercase block">
              Consumer Care
            </span>
            <span className="text-xs font-semibold bg-leaf/10 text-leaf px-4 py-1 rounded-full border border-leaf/15 inline-block font-sans tracking-wider">
              🌿 Purely Natural • Farm Fresh
            </span>
            <p className="font-serif text-base text-earth/80 leading-relaxed font-light italic pt-2 max-w-lg mx-auto">
              Premium healthy foods crafted with care, freshness and purpose.
            </p>
          </div>

        </div>

        {/* ==================== MAIN COLUMNAR GRID ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          
          <div className="space-y-5 text-left">
            <h4 className="font-sans text-[10px] tracking-[0.3em] text-leaf font-bold uppercase border-b border-leaf/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans text-sm text-earth/80">
              <li><a href="#" className="hover:text-leaf transition-colors">Home</a></li>
              <li><a href="#featured-products" className="hover:text-leaf transition-colors">Products</a></li>
              <li><a href="#founder-reviews" className="hover:text-leaf transition-colors">Our Story</a></li>
              <li><a href="#contact-partners" className="hover:text-leaf transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-5 text-left">
            <h4 className="font-sans text-[10px] tracking-[0.3em] text-leaf font-bold uppercase border-b border-leaf/10 pb-2">
              Products
            </h4>
            <ul className="space-y-3 font-sans text-sm text-earth/80">
              <li><a href="#featured-products" className="hover:text-leaf transition-colors">Premium Makhana</a></li>
              <li><a href="#featured-products" className="hover:text-leaf transition-colors">Dry Fruits</a></li>
              <li><a href="#featured-products" className="hover:text-leaf transition-colors">Healthy Seeds</a></li>
              <li><a href="#corporate-gifts" className="hover:text-leaf transition-colors">Gifting</a></li>
            </ul>
          </div>

          <div className="space-y-5 text-left">
            <h4 className="font-sans text-[10px] tracking-[0.3em] text-leaf font-bold uppercase border-b border-leaf/10 pb-2">
              Contact
            </h4>
            <ul className="space-y-3 font-sans text-sm text-earth/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                <span>Varanasi, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-leaf shrink-0" />
                <a href="tel:+918005484365" className="hover:text-leaf transition-colors">+91 8005484365</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-leaf shrink-0" />
                <a href="mailto:deep131281@gmail.com" className="hover:text-leaf transition-colors">deep131281@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="space-y-5 text-left">
            <h4 className="font-sans text-[10px] tracking-[0.3em] text-leaf font-bold uppercase border-b border-leaf/10 pb-2">
              Social Media
            </h4>
            <ul className="space-y-3 font-sans text-sm text-earth/80">
              <li><a href="https://instagram.com" className="hover:text-leaf transition-colors">Instagram</a></li>
              <li><a href="https://facebook.com" className="hover:text-leaf transition-colors">Facebook</a></li>
            </ul>
          </div>

        </div>

        {/* Newsletter Subscription Drawer */}
        <div className="bg-bg-primary p-6 sm:p-8 rounded-2xl border border-leaf/10 max-w-xl mx-auto shadow-sm text-center space-y-4">
          <span className="font-sans text-[9px] uppercase tracking-widest text-nature font-bold block">Exclusive Access</span>
          <h4 className="font-serif text-lg font-semibold text-earth">Sign up for Fresh Harvest Updates</h4>
          {!newsSigned ? (
            <form onSubmit={handleNewsSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email..."
                className="flex-1 bg-white border border-leaf/20 rounded-lg px-4 py-2.5 text-xs focus:border-leaf outline-none text-earth"
              />
              <button type="submit" className="px-6 py-2.5 bg-leaf text-white rounded-lg hover:bg-nature transition-all text-xs font-sans tracking-wider font-bold uppercase cursor-pointer">
                Subscribe
              </button>
            </form>
          ) : (
            <div className="bg-leaf/10 border border-leaf/20 p-3 rounded-lg text-xs flex gap-2 items-center justify-center text-nature font-sans font-medium">
              <Check className="w-4 h-4" />
              <span>Subscribed successfully!</span>
            </div>
          )}
        </div>

        {/* ==================== BOTTOM STATUS BAR ==================== */}
        <div className="border-t border-leaf/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] sm:text-xs font-sans text-earth/60 text-center md:text-left space-y-1">
            <p>© 2026 Bloom Consumer Care. All rights reserved.</p>
            <p className="text-leaf">Sourced by hand from village wetland clusters.</p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-leaf font-sans text-[10px] sm:text-xs font-bold transition-all uppercase tracking-widest border border-leaf/20 bg-white px-5 py-2.5 rounded-full cursor-pointer shadow-sm hover:shadow-md"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
