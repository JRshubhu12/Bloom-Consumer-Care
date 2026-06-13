import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { INGREDIENTS } from "../data";
import { Sparkles, Sprout, Landmark, ShieldCheck } from "lucide-react";

export default function IngredientHighlight() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 bg-bg-secondary relative overflow-hidden">
      
      {/* Visual luxury framing layouts */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header content comparable to Forest Essentials */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Natural Chemical Assets
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal">
            The Living Ingredients Showcase <br />
            <span className="italic font-normal text-cocoa">Superfoods Graded with Sovereignty</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
          <p className="font-sans text-charcoal/70 max-w-lg mx-auto font-light leading-relaxed text-sm sm:text-base">
            Hover over each biological superfood to reveal its verified micro-nutrient density, ancient biological classification, and certified farming location.
          </p>
        </div>

        {/* Floating cards grid representing the core luxury ingredients list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INGREDIENTS.map((ing, idx) => {
            const IsHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={ing.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="bg-white border border-gold-light/25 rounded-2xl p-6 flex flex-col justify-between text-left relative overflow-hidden transition-all duration-300 min-h-[380px] shadow-[0_15px_45px_-5px_rgba(107,74,50,0.04)]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{
                  y: -3,
                  borderColor: "rgba(200, 169, 107, 0.75)",
                  boxShadow: "0 20px 40px -10px rgba(107,74,50,0.08)"
                }}
              >
                
                {/* 3D abstract element float rendering representing the crop piece */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-gold/15 to-transparent rounded-full filter blur-xl transform translate-x-4 -translate-y-4 pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  
                  {/* Top line scientific name */}
                  <div className="flex items-center justify-between border-b border-gold-light/25 pb-3">
                    <span className="font-mono text-[9px] tracking-widest text-[#B39359] uppercase font-bold">
                      {ing.luxuryRating}
                    </span>
                    <Sprout className="w-4 h-4 text-gold" />
                  </div>

                  {/* Scientific binomial classification */}
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal">
                      {ing.name}
                    </h3>
                    <p className="font-mono text-[10px] text-cocoa/70 italic tracking-wide">
                      {ing.scientificName}
                    </p>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light">
                    {ing.description}
                  </p>
                </div>

                {/* Info block displaying micro nutrients on hover or default styling */}
                <div className="border-t border-gold-light/35 pt-4 mt-6 relative z-10 space-y-3">
                  
                  <div className="flex items-center gap-1.5 text-gold font-mono text-[9px] uppercase tracking-wider font-semibold">
                    <Landmark className="w-3.5 h-3.5" />
                    <span>Origin: {ing.origin.split(",").slice(0, 1)}</span>
                  </div>

                  {/* Micro-table parameters */}
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                    <div className="bg-bg-primary p-2 rounded-lg border border-gold-light/10">
                      <span className="text-charcoal/50 block uppercase text-[8px]">Protein Density</span>
                      <strong className="text-cocoa font-semibold mt-0.5 block">{ing.protein}</strong>
                    </div>
                    <div className="bg-bg-primary p-2 rounded-lg border border-gold-light/10">
                      <span className="text-charcoal/50 block uppercase text-[8px]">Dietary Fiber</span>
                      <strong className="text-cocoa font-semibold mt-0.5 block">{ing.fiber}</strong>
                    </div>
                  </div>

                  {/* Hover full details */}
                  <AnimatePresence>
                    {IsHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 pt-2 border-t border-gold-light/20 text-[10px] font-mono text-charcoal/85 text-left"
                      >
                        <div className="flex justify-between">
                          <span>Mineral Salts:</span>
                          <span className="text-cocoa font-semibold">{ing.minerals.split(",")[0]}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Energy Multiplier:</span>
                          <span className="text-cocoa font-semibold">{ing.energy}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

                {/* Ambient glowing spotlight corner highlight */}
                <div className={`absolute bottom-0 right-0 w-1.5 h-1.5 bg-gold transition-transform duration-500 origin-bottom-right ${IsHovered ? "scale-x-[15] scale-y-[15]" : ""}`} style={{ opacity: 0.12 }} />

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
