import React from "react";
import { m } from "motion/react";
import { Sun, Search, Flame, ShieldCheck, Package, Truck } from "lucide-react";

interface JourneyStep {
  id: string;
  title: string;
  desc: string;
  timeSpent: string;
  involvement: string;
  imageUrl: string;
  icon: React.ComponentType<any>;
}

export default function IngredientHighlight() {
  const journey: JourneyStep[] = [
    {
      id: "farm",
      title: "Farm Cultivation",
      desc: "Harvested in organic wetlands, respecting age-old biological methods.",
      timeSpent: "2-3 Days Harvest",
      involvement: "Local Mithila Farmers",
      imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=400&auto=format&fit=crop",
      icon: Sun
    },
    {
      id: "selection",
      title: "Hand Selection",
      desc: "Seeds are hand-graded to separate uniform pops and discard immature kernels.",
      timeSpent: "4-6 Hours Sifting",
      involvement: "Artisanal Women Sorters",
      imageUrl: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=400&auto=format&fit=crop",
      icon: Search
    },
    {
      id: "roasting",
      title: "Clean Roasting",
      desc: "Slow-roasted to crispy perfection in small batches under 25kg.",
      timeSpent: "30 Minutes Roast",
      involvement: "Master Roaster Collective",
      imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=400&auto=format&fit=crop",
      icon: Flame
    },
    {
      id: "quality",
      title: "Quality Auditing",
      desc: "3-tier validation ensuring moisture levels stay strictly below 3%.",
      timeSpent: "1 Hour Audit",
      involvement: "QA Testing Team",
      imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=400&auto=format&fit=crop",
      icon: ShieldCheck
    },
    {
      id: "packaging",
      title: "Airtight Packaging",
      desc: "Sealed in multi-layer barrier foil pouches to naturally lock in crispness.",
      timeSpent: "2 Hours Packing",
      involvement: "Packaging Specialists",
      imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400&auto=format&fit=crop",
      icon: Package
    },
    {
      id: "delivery",
      title: "Direct Delivery",
      desc: "Shipped from dry storage to your doorstep for maximum freshness.",
      timeSpent: "24-48 Hours Transit",
      involvement: "Direct Delivery Network",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop",
      icon: Truck
    }
  ];

  return (
    <section id="ingredient-highlight" className="py-24 px-6 sm:px-12 lg:px-24 bg-bg-primary relative overflow-hidden select-none">
      
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
          {/* Timeline Line (Desktop) */}
          <div className="hidden lg:block absolute top-[148px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-transparent via-[#C6A769]/30 to-transparent" />
          
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
                  {/* Stage Image Visual Card */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 border border-[#EFE6D8] shadow-xs group-hover:shadow-md transition-shadow">
                    <img 
                      src={step.imageUrl} 
                      alt={step.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      decoding="async"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                  </div>

                  {/* Stage Circle Icon */}
                  <div className="w-16 h-16 rounded-full bg-white border border-leaf/30 shadow-xs flex items-center justify-center mb-4 relative transition-transform duration-300 feature-icon z-20">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-nature/20 animate-[spin_20s_linear_infinite]" />
                    <Icon className="w-6 h-6 text-leaf stroke-[1.5]" />
                  </div>

                  <div className="space-y-2.5 w-full">
                    <div className="flex flex-col items-center">
                      <span className="font-mono text-[9px] tracking-widest text-nature font-bold uppercase">
                        Stage 0{idx + 1}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-earth leading-tight mt-0.5">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="font-sans text-xs text-earth/70 leading-relaxed font-light min-h-[48px] px-1">
                      {step.desc}
                    </p>

                    {/* Metadata Badges */}
                    <div className="pt-2 border-t border-leaf/10 space-y-1.5 w-full text-[10px] font-mono">
                      <div className="bg-[#FAF8F4] py-1 px-2.5 rounded-md border border-[#EAE4DB]/50 text-[#8B5A2B] font-bold">
                        🕒 {step.timeSpent}
                      </div>
                      <div className="bg-[#FAF8F4] py-1 px-2.5 rounded-md border border-[#EAE4DB]/50 text-leaf font-bold">
                        👤 {step.involvement}
                      </div>
                    </div>
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
