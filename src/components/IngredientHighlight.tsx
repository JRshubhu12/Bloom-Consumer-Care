import { motion } from "motion/react";
import { Leaf, Search, Sun, Package, Truck } from "lucide-react";

export default function IngredientHighlight() {
  const journey = [
    {
      id: "farm",
      title: "The Farm",
      desc: "Cultivated in nutrient-rich soils, respecting traditional farming methods.",
      icon: Sun,
    },
    {
      id: "selection",
      title: "Careful Selection",
      desc: "Hand-picked to ensure only the highest quality ingredients make the cut.",
      icon: Search,
    },
    {
      id: "processing",
      title: "Gentle Processing",
      desc: "Slow-roasted and naturally dried to retain maximum nutrients and authentic flavor.",
      icon: Leaf,
    },
    {
      id: "packaging",
      title: "Fresh Packaging",
      desc: "Sealed immediately in premium packaging to lock in aroma and freshness.",
      icon: Package,
    },
    {
      id: "delivery",
      title: "To Your Table",
      desc: "Delivered fresh to your home, bringing pure goodness straight from the source.",
      icon: Truck,
    }
  ];

  return (
    <section id="ingredient-highlight" className="py-24 px-6 sm:px-12 lg:px-24 bg-bg-primary relative overflow-hidden">
      
      {/* Botanical Background Textures */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none text-nature ambient-float">
        <svg width="400" height="400" viewBox="0 0 100 100">
          <path d="M10,90 Q50,10 90,90" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M30,50 Q50,30 70,50" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-nature/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
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
            Every product has a story. Ours begins in the soil and ends with your well-being. Follow the journey of our ingredients as they are carefully nurtured, selected, and crafted for you.
          </p>
        </div>

        {/* Curved Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-leaf/30 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {journey.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  className="flex flex-col items-center text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="w-24 h-24 rounded-full bg-white border border-leaf/30 shadow-xs flex items-center justify-center mb-6 relative transition-transform duration-300 feature-icon">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-nature/20 animate-[spin_20s_linear_infinite]" />
                    <Icon className="w-8 h-8 text-leaf stroke-[1.5]" />
                  </div>
                  <div className="space-y-3">
                    <span className="font-sans text-[10px] tracking-widest text-nature font-bold uppercase">
                      Step 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-earth">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-earth/70 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
