import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Trophy, Heart, Activity, ArrowRight, ActivityIcon } from "lucide-react";

interface BenefitSection {
  id: string;
  num: string;
  title: string;
  sub: string;
  description: string;
  macroLabel: string;
  macroValue: string;
  chemicalAsset: string;
  chemicalHighlight: string;
  icon: any;
  colorTheme: string;
}

export default function HealthBenefits() {
  const [activeSectionIdx, setActiveSectionIdx] = useState<number>(0);

  const benefits: BenefitSection[] = [
    {
      id: "preservation",
      num: "01",
      title: "Cell preservation.",
      sub: "Kaempferol Glycosides",
      description: "Organic Phool Makhana is rich in Kaempferol, a powerful natural anti-inflammatory flavonoid that prevents skin oxidation breakdown, promotes natural collagen retention, and supports vital cellular longevity.",
      macroLabel: "Youth Flavonoids index",
      macroValue: "Rich Kaempferol Potency",
      chemicalAsset: "Collagen Support",
      chemicalHighlight: "High Antioxidant Capacity",
      icon: Trophy,
      colorTheme: "border-gold text-gold"
    },
    {
      id: "cardiac",
      num: "02",
      title: "Cardiac stability.",
      sub: "Magnesium & Potassium",
      description: "Low glycemic seeds with high Magnesium minerals directly expand oxygen channels, while high Potassium levels manage blood flow pressures safely. Complete with zero chemical preservatives and minimal sodium.",
      macroLabel: "Magnesium Minerals",
      macroValue: "68mg / 100g pristine serving",
      chemicalAsset: "Cardio Integrity",
      chemicalHighlight: "Under 15mg Natural Sodium",
      icon: Heart,
      colorTheme: "border-sage text-sage"
    },
    {
      id: "metabolic",
      num: "03",
      title: "Clean glycemic energy.",
      sub: "Low GI Vegan Protein",
      description: "Our roasting excludes heavy grease frying entirely, trapping natural proteins and complex starches with an exceptionally low glycemic load. This secures balanced, sustained glucose release.",
      macroLabel: "Soluble Dietary Fiber",
      macroValue: "7.6% organic fiber ratio",
      chemicalAsset: "Sustained Burn",
      chemicalHighlight: "Zero Refined Sugar Spikes",
      icon: Activity,
      colorTheme: "border-cocoa text-cocoa"
    }
  ];

  const curr = benefits[activeSectionIdx];
  const IconComponent = curr.icon;

  return (
    <section id="health-science" className="min-h-screen py-24 px-6 sm:px-12 lg:px-24 bg-bg-primary relative flex flex-col justify-center overflow-hidden">
      
      {/* Visual background luxury accents */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-between">
        
        {/* Apple Style Section Name */}
        <div className="flex items-center justify-between border-b border-gold-light/25 pb-6 mb-16 text-left">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C8A96B] font-semibold">
              The Science of Nutrition
            </span>
            <h3 className="font-serif text-sm tracking-widest text-[#222222] uppercase font-bold">
              BLOOM CLINICAL ARCHITECTURE
            </h3>
          </div>

          <span className="font-mono text-xs text-charcoal/50 uppercase tracking-widest font-bold">
            Mithila Crop Research
          </span>
        </div>

        {/* Massive Typography Grid Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Lg: 7 columns): Interactive benefits list with massive typography */}
          <div className="lg:col-span-7 space-y-12 text-left">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
                Clinical Highlight
              </span>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-charcoal leading-[1.05] mt-2 select-none">
                {curr.title}
              </h2>
              <span className="font-serif text-2xl sm:text-3xl lg:text-4xl italic text-cocoa block mt-4 font-normal">
                {curr.sub}
              </span>
            </div>

            <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed font-light max-w-xl">
              {curr.description}
            </p>

            {/* Benefit toggle stepping bars */}
            <div className="flex items-center gap-4 pt-4">
              {benefits.map((benef, index) => (
                <button
                  key={benef.id}
                  onClick={() => setActiveSectionIdx(index)}
                  className={`flex flex-col items-start p-4 border rounded-xl transition-all duration-300 w-36 text-left relative ${
                    index === activeSectionIdx
                      ? "bg-white border-gold shadow-sm scale-103"
                      : "bg-white/45 border-gold-light/15 hover:border-gold/50"
                  }`}
                >
                  <span className="font-mono text-[9px] tracking-widest text-gold font-bold">BENEFIT 0{index + 1}</span>
                  <span className="font-serif text-xs font-semibold text-charcoal mt-1 block truncate w-full">
                    {benef.id.charAt(0).toUpperCase() + benef.id.slice(1)}
                  </span>
                  {index === activeSectionIdx && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 inset-x-4 h-[2px] bg-gold"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column (Lg: 5 columns): Heavy data highlighting visual card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={curr.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-gold-light/35 rounded-3xl p-8 sm:p-10 shadow-[0_25px_60px_-15px_rgba(107,74,50,0.06)] text-left relative overflow-hidden"
              >
                {/* Visual grid overlay to emulate surgical clinical documentation card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-6">
                  
                  {/* Top indicator icon */}
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center bg-bg-primary shadow-xs ${curr.colorTheme}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[9px] tracking-widest text-gold font-bold uppercase block">
                      Macro Nutrient Rating
                    </span>
                    <h4 className="font-serif text-lg font-semibold text-charcoal">
                      Validated Organic Index
                    </h4>
                  </div>

                  {/* Large visual metrics highlights */}
                  <div className="bg-bg-primary/75 border border-gold-light/20 p-5 rounded-2xl space-y-4">
                    <div className="space-y-0.5">
                      <span className="font-mono text-[9px] text-charcoal/50 uppercase font-semibold block">{curr.macroLabel}</span>
                      <span className="font-serif text-xl sm:text-2xl text-cocoa font-medium">{curr.macroValue}</span>
                    </div>

                    <div className="h-[0.5px] bg-gold-light/25" />

                    <div className="space-y-0.5">
                      <span className="font-mono text-[9px] text-charcoal/50 uppercase font-semibold block">{curr.chemicalAsset}</span>
                      <span className="font-sans text-xs sm:text-sm text-charcoal/85 font-medium">{curr.chemicalHighlight}</span>
                    </div>
                  </div>

                  {/* Supporting clean check lines */}
                  <ul className="space-y-2.5 text-xs text-charcoal/70 font-mono">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                      <span>Certified Gluten-Free</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                      <span>Zero Chemical Preservatives</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                      <span>Pesticide-Free Wetland Harvested</span>
                    </li>
                  </ul>

                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
