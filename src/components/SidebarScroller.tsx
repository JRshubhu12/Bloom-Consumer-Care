import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "women-empowerment", label: "Empowerment" },
  { id: "our-promise", label: "Our Promise" },
  { id: "featured-products", label: "Our Collection" },
  { id: "founder-reviews", label: "Our Story" },
  { id: "contact-partners", label: "Contact" },
];

// Seed → Leaf → Flower Visual Concept Icons
const SeedIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#C6A769] fill-[#C6A769]/30" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 3C12 3 6 8.5 6 13.5C6 16.8 8.7 19.5 12 19.5C15.3 19.5 18 16.8 18 13.5C18 8.5 12 3 12 3Z" />
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#C6A769] fill-[#C6A769]/20" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 21V10M12 10C12 7.5 9.5 5.5 6.5 5.5C4 5.5 4 10 12 10ZM12 10C12 7.5 14.5 5.5 17.5 5.5C20 5.5 20 10 12 10Z" />
  </svg>
);

const FlowerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#C6A769] fill-[#C6A769]/20" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22C17.5 22 21 17.5 21 14C17.5 14 14.5 16 12 20C9.5 16 6.5 14 2 14C2 17.5 5.5 22 12 22Z" />
    <path d="M12 3C13.5 7 17 9 20 9C17 11 15 15 12 21C9 15 7 11 4 9C7 9 10.5 7 12 3Z" opacity="0.8" />
  </svg>
);

export default function SidebarScroller() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Check which section is in view
      for (const section of SECTIONS) {
        if (section.id === "hero") {
          if (window.scrollY < 200) {
            setActiveSection("hero");
            continue;
          }
        }

        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Determine current active brand concept stage based on scroll depth
  const getConceptIcon = () => {
    if (scrollProgress < 30) return <SeedIcon />;
    if (scrollProgress < 70) return <LeafIcon />;
    return <FlowerIcon />;
  };

  const getConceptLabel = () => {
    if (scrollProgress < 30) return "Seed";
    if (scrollProgress < 70) return "Leaf";
    return "Flower";
  };

  // Circumference for 16px radius circle = 2 * PI * 16 = 100.53
  const strokeDashoffset = 100.53 - (scrollProgress / 100) * 100.53;

  return (
    <>
      {/* ================== DESKTOP LUXURY FLOATING SIDEBAR (FIXED LEFT) ================== */}
      <div className="fixed left-3 lg:left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3.5 py-4 px-2.5 rounded-full border border-white/25 bg-white/20 backdrop-blur-xl shadow-[0_15px_30px_rgba(107,74,50,0.04)] select-none">
        
        {/* Metaphor Concept Icon Header */}
        <div className="relative flex flex-col items-center group cursor-help mb-0.5">
          <AnimatePresence mode="wait">
            <motion.div
              key={getConceptLabel()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="p-1.5 rounded-full bg-white border border-[#C6A769]/20 shadow-xs flex items-center justify-center will-change-transform"
            >
              {getConceptIcon()}
            </motion.div>
          </AnimatePresence>
          {/* Label tooltip */}
          <span className="absolute left-10 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-150 bg-charcoal text-[#C6A769] text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-md pointer-events-none whitespace-nowrap border border-[#C6A769]/20 shadow-lg">
            Bloom: {getConceptLabel()}
          </span>
        </div>

        {/* Progress Track and Sections container */}
        <div className="relative flex flex-col items-center gap-3 py-1">
          
          {/* Background vertical progress path */}
          <div className="w-[1px] bg-[#C6A769]/15 absolute top-1.5 bottom-1.5 left-1/2 -translate-x-1/2 z-0 rounded-full" />
          
          {/* Filled golden progress path */}
          <div 
            className="w-[1px] bg-gradient-to-b from-[#C6A769] to-[#E5D5B8] absolute top-1.5 left-1/2 -translate-x-1/2 z-10 rounded-full transition-[height] duration-75 ease-out origin-top will-change-[height]"
            style={{ height: `${scrollProgress}%`, maxHeight: "100%" }}
          />

          {/* Individual Navigation Dots */}
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="group relative flex items-center justify-center w-4 h-4 z-20 cursor-pointer"
                aria-label={`Scroll to ${sec.label}`}
              >
                {/* Champagne Gold active ring glow */}
                <span className={`absolute inset-0 rounded-full border border-[#C6A769]/80 transition-all duration-200 ease-out will-change-transform ${
                  isActive ? "scale-100 opacity-90 shadow-[0_0_6px_rgba(198,167,105,0.3)]" : "scale-50 opacity-0"
                }`} />

                {/* Central Dot */}
                <span className={`w-1.5 h-1.5 rounded-full transition-all duration-150 ease-out will-change-transform ${
                  isActive 
                    ? "bg-[#C6A769] scale-110 shadow-[0_0_4px_rgba(198,167,105,0.7)]" 
                    : "bg-[#C6A769]/30 group-hover:bg-[#C6A769]/75"
                }`} />

                {/* Apple-style floating text label reveal */}
                <span className="absolute left-7 scale-95 opacity-0 translate-x-2 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out bg-white border border-[#C6A769]/25 text-charcoal text-[8px] font-mono tracking-widest uppercase px-2 py-1 rounded-md pointer-events-none whitespace-nowrap shadow-md will-change-[transform,opacity]">
                  {sec.label}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* ================== MOBILE FLOATING PROGRESS INDICATOR (BOTTOM LEFT) ================== */}
      <div className="fixed bottom-6 left-6 z-40 md:hidden flex items-center justify-center select-none">
        
        {/* Glassmorphic Container hosting both Metaphor and circular stroke */}
        <div className="relative w-12 h-12 bg-white/95 border border-[#C6A769]/30 rounded-full shadow-lg flex items-center justify-center backdrop-blur-md">
          
          {/* SVG Circular Progress bar enclosing container */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            {/* Background ring */}
            <circle
              cx="24"
              cy="24"
              r="16"
              className="stroke-[#C6A769]/10"
              strokeWidth="2"
              fill="transparent"
            />
            {/* Filled champagne ring */}
            <circle
              cx="24"
              cy="24"
              r="16"
              className="stroke-[#C6A769] transition-all duration-150"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray="100.53"
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>

          {/* Morphing Concept Icon */}
          <div className="scale-85 flex items-center justify-center">
            {getConceptIcon()}
          </div>

        </div>

      </div>
    </>
  );
}
