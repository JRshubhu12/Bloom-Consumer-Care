import React, { useRef } from "react";
import { m, useScroll, useSpring, useTransform } from "motion/react";
import { Sun, Flame, ShieldCheck, Package, Truck, Sprout, Leaf } from "lucide-react";

interface JourneyStep {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
}

export default function IngredientHighlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  const journey: JourneyStep[] = [
    { id: "farm", title: "Seed Sourcing", icon: Sprout },
    { id: "selection", title: "Hand Selection", icon: Leaf },
    { id: "roasting", title: "Clean Roasting", icon: Flame },
    { id: "quality", title: "Quality Auditing", icon: ShieldCheck },
    { id: "packaging", title: "Airtight Packaging", icon: Package },
    { id: "delivery", title: "Direct Delivery", icon: Truck }
  ];

  return (
    <section ref={containerRef} id="ingredient-highlight" className="py-24 px-6 sm:px-12 lg:px-24 bg-bg-primary relative overflow-hidden select-none">
      
      {/* Botanical Background Textures */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none text-nature ambient-float">
        <svg width="400" height="400" viewBox="0 0 100 100">
          <path d="M10,90 Q50,10 90,90" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M30,50 Q50,30 70,50" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-nature/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-nature font-bold">
            The Journey
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-earth">
            From Seed to <span className="italic font-normal text-leaf">Soul</span>
          </h2>
          <div className="w-12 h-[1px] bg-nature mx-auto my-6" />
          <p className="font-sans text-earth/80 max-w-xl mx-auto leading-relaxed text-sm sm:text-base font-light">
            Every grain tells our story of purity and community care. Track the lifecycle of our organic wellness snacks.
          </p>
        </div>

        {/* Curved Timeline */}
        <div className="relative max-w-[1300px] mx-auto">
          {/* Timeline Line Base (Desktop) */}
          <div className="hidden lg:block absolute top-[32px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-transparent via-[#C6A769]/10 to-transparent overflow-hidden rounded-full">
            {/* Animated Growing Vine */}
            <m.div 
              className="w-full h-full bg-gold origin-left"
              style={{ scaleX: scaleProgress }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6 relative z-10">
            {journey.map((step, idx) => {
              const Icon = step.icon;
              return (
                <m.div
                  key={step.id}
                  className="flex flex-col items-center text-center group bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl border border-leaf/10 lg:border-none shadow-xs lg:shadow-none"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Stage Circle Icon */}
                  <div className="w-16 h-16 rounded-full bg-white border border-leaf/30 shadow-xs flex items-center justify-center mb-4 relative transition-transform duration-500 feature-icon z-20 group-hover:border-gold">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-nature/20 animate-[spin_20s_linear_infinite]" />
                    <Icon className="w-6 h-6 text-leaf stroke-[1.5] group-hover:text-gold transition-colors duration-500" />
                  </div>

                  <div className="space-y-1 w-full">
                    <span className="font-mono text-[9px] tracking-widest text-nature font-bold uppercase block">
                      Stage 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-earth leading-tight">
                      {step.title}
                    </h3>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
