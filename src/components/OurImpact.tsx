import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { STATS } from "../data";
import { Heart, Landmark, Target, Award, Users, Archive, Smile, Leaf } from "lucide-react";

// Helper component for count animation, designed to be performant on React 18+
function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // Assuming standard ~60fps
    let timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={elementRef} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-cocoa">
      {count}
      {suffix}
    </div>
  );
}

export default function OurImpact() {
  // Mapping statistical IDs to premium luxury outline icons from Lucide
  const getIconForStat = (id: string) => {
    switch (id) {
      case "stat-women":
        return Users;
      case "stat-production":
        return Archive;
      case "stat-customers":
        return Smile;
      default:
        return Leaf;
    }
  };

  return (
    <section id="future-vision" className="py-24 px-6 sm:px-12 lg:px-24 bg-white relative overflow-hidden">
      
      {/* Absolute Decorative ambient background details */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Core section copy and luxury tagline */}
        <div className="max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Social Mission & Purpose
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-charcoal tracking-tight lg:leading-tight">
            Every bite contributes to <br />
            <span className="italic font-normal text-cocoa">true social restoration.</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
          <p className="font-sans text-charcoal/70 max-w-lg mx-auto font-light leading-relaxed text-sm sm:text-base">
            We operate on a shared wellness paradigm: nutrition that preserves clinical strength for consumers, and fair-wage economies that drive female farmer independence.
          </p>
        </div>

        {/* 4 Multi-column statistical floating cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => {
            const Icon = getIconForStat(stat.id);
            return (
              <motion.div
                key={stat.id}
                className="bg-bg-primary/75 border border-gold-light/40 rounded-2xl p-8 hover:bg-white transition-all duration-500 flex flex-col items-center justify-between text-center relative group shadow-[0_15px_40px_-5px_rgba(107,74,50,0.03)]"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 25px 50px -12px rgba(107, 74, 50, 0.08)",
                  borderColor: "rgba(200, 169, 107, 1)" 
                }}
              >
                {/* Decorative golden corner details */}
                <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-gold/10 group-hover:border-gold/65 transition-colors duration-500" />
                <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-gold/10 group-hover:border-gold/65 transition-colors duration-500" />
                <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-gold/10 group-hover:border-gold/65 transition-colors duration-500" />
                <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-gold/10 group-hover:border-gold/65 transition-colors duration-500" />

                {/* Ambient glow in background on card hover */}
                <span className="absolute inset-x-8 top-8 bottom-8 rounded-full bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />

                {/* Icon wrapper */}
                <div className="p-4 rounded-full bg-white border border-gold-light/35 text-gold group-hover:scale-110 group-hover:bg-cocoa group-hover:text-bg-primary transition-all duration-300 relative z-10 shadow-sm">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                {/* Real-time Count Animation */}
                <div className="mt-6 relative z-10">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>

                {/* Subtitle Label */}
                <h3 className="font-serif text-base text-charcoal font-medium mt-3 uppercase tracking-wide relative z-10">
                  {stat.label}
                </h3>

                {/* Small description support summary */}
                <p className="font-sans text-xs text-charcoal/65 leading-relaxed font-light mt-2 relative z-10">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
