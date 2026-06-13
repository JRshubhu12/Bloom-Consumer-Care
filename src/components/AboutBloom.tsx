import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trees, ShieldCheck, HeartHandshake, PackageCheck, HelpCircle } from "lucide-react";

interface PathwayStage {
  id: string;
  num: string;
  name: string;
  label: string;
  title: string;
  description: string;
  icon: any;
  highlight: string;
}

export default function AboutBloom() {
  const [activeStageId, setActiveStageId] = useState<string>("farm");

  const stages: PathwayStage[] = [
    {
      id: "farm",
      num: "01",
      name: "The Pristine Wetlands",
      label: "Lotus Farm Sourcing",
      title: "Sustainable Wetland Agriculture in Mithila",
      description: "Our premium gorgon lotus crop seeds are cultivated by independent farmers in protected Indian wetlands. The natural ecosystem requires pure, pesticide-free pond systems, resulting in clean seeds naturally fortified with rich soil minerals.",
      icon: Trees,
      highlight: "Regenerative Aqua Farms"
    },
    {
      id: "ingredients",
      num: "02",
      name: "Supreme Grading",
      label: "Zero Preservative Audit",
      title: "Handpicked Premium Selection Sizing",
      description: "Only 1 in 4 popped seeds completes our luxury density grading process. Every kernel must measure between 16mm and 20mm, securing the premium light-as-air crunch and optimal roasting compatibility.",
      icon: ShieldCheck,
      highlight: "Organic Seed Validation"
    },
    {
      id: "workforce",
      num: "03",
      name: "Empowerment Roasting",
      label: "The Women Workforce",
      title: "Pure Handcrafted Artisanal Dedication",
      description: "Our core empowerment mission, where proud women artisans slow-roast popped seeds in shallow premium olive oil. Every batch represents localized skill generation, certified high wages, and total family independence.",
      icon: HeartHandshake,
      highlight: "500+ Proud Female Artisans"
    },
    {
      id: "product",
      num: "04",
      name: "The Luxury Canopy",
      label: "Finished Luxury Box",
      title: "Hermetic Freshness Protection",
      description: "Sealed in gold-trimmed airtight canisters immediately after roasting to trap the rich herbal aroma of garden mint and ancient salts. Truly fresh, direct from farm village to your high-end table.",
      icon: PackageCheck,
      highlight: "Cold-Pressed Freshness Retention"
    }
  ];

  const currentStage = stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <section id="about-story" className="py-24 px-6 sm:px-12 lg:px-24 bg-bg-secondary relative overflow-hidden">
      
      {/* Decorative luxury architectural columns/grid style in the background */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-gold/15 hidden md:block" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-gold/15 hidden md:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header styling */}
        <div className="mb-16 md:mb-20 text-center max-w-2xl mx-auto space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Artisanal Origin Story
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal">
            Nourished by the earth, <br />
            <span className="italic font-normal text-cocoa/90">handcrafted with dignity.</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story & Interactive Selection Display */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4 text-left">
              <h3 className="font-display text-sm tracking-widest text-gold uppercase">
                The Bloom Philosophy
              </h3>
              <p className="font-sans text-xl font-light text-charcoal/90 leading-relaxed">
                Bloom bridges premium food science with extreme social responsibility. We believe eating healthy should never rely on highly processed chemical preservatives.
              </p>
              <p className="font-sans text-base text-charcoal/70 leading-relaxed font-light">
                Our process bypasses massive automated factory farms. Instead, we collaborate directly with women self-help collectives, giving ancient organic crops a place at the world's most luxurious table.
              </p>
            </div>

            {/* List of Pathway Stages for interaction */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {stages.map((stage) => {
                const Selected = stage.id === activeStageId;
                const IconComponent = stage.icon;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageId(stage.id)}
                    className={`flex items-start gap-4 p-4 rounded-xl border text-left transition-all duration-300 relative overflow-hidden ${
                      Selected
                        ? "bg-white border-gold shadow-[0_10px_30px_rgba(107,74,50,0.08)] scale-[1.02]"
                        : "bg-white/45 border-gold/15 hover:bg-white/95 hover:border-gold/60"
                    }`}
                  >
                    <div className={`p-2.5 rounded-lg ${Selected ? "bg-cocoa text-bg-primary" : "bg-bg-primary text-gold"}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[10px] text-gold font-semibold">{stage.num}</span>
                        <span className="w-1 h-1 rounded-full bg-gold-light" />
                        <h4 className="font-sans text-xs uppercase tracking-wider text-charcoal font-semibold">
                          {stage.name}
                        </h4>
                      </div>
                      <p className="font-sans text-xs text-charcoal/65 font-light mt-0.5 mt-1">
                        {stage.label}
                      </p>
                    </div>
                    {Selected && (
                      <div className="absolute right-2 top-2 w-1.5 h-1.5 rounded-full bg-gold" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive 3D Pathway Visualization Map */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Visual Pathway Map Container */}
            <div className="bg-white/80 border border-gold-light/40 rounded-3xl p-8 shadow-[0_20px_50px_rgba(107,74,50,0.08)] relative overflow-hidden min-h-[380px] flex flex-col justify-between">
              
              {/* Top ambient spotlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[50px] pointer-events-none" />

              {/* Connected pathways drawing layer */}
              <div className="absolute inset-0 z-0 pointer-events-none md:flex justify-center items-center py-12 px-6 hidden">
                <svg className="w-full h-full text-gold-light/40" viewBox="0 0 400 200" fill="none">
                  {/* Farm to Ingredients Path */}
                  <path 
                    d="M 50 100 C 100 50, 150 50, 150 100" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeDasharray="4 4"
                  />
                  {/* Ingredients to Workforce Path */}
                  <path 
                    d="M 150 100 C 200 150, 250 150, 250 100" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeDasharray="4 4"
                  />
                  {/* Workforce to Finished Product Path */}
                  <path 
                    d="M 250 100 C 300 50, 350 50, 350 100" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>

              {/* Pathway Circular Ring representation (Interactive Nodes) */}
              <div className="relative z-10 flex flex-wrap justify-between items-center gap-4 py-4 md:px-6">
                {stages.map((stg) => {
                  const NodeSelected = stg.id === activeStageId;
                  const StageIcon = stg.icon;
                  return (
                    <motion.div
                      key={stg.id}
                      onClick={() => setActiveStageId(stg.id)}
                      className={`relative flex flex-col items-center cursor-pointer group ${NodeSelected ? "scale-105" : ""}`}
                      animate={{ y: NodeSelected ? -5 : 0 }}
                    >
                      {/* Node circle */}
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 relative border ${
                        NodeSelected
                          ? "bg-cocoa border-gold text-bg-primary shadow-lg scale-110"
                          : "bg-bg-primary border-gold/30 text-gold group-hover:border-gold/85"
                      }`}>
                        <StageIcon className="w-5 h-5" />
                        {/* Golden orbit ring */}
                        {NodeSelected && (
                          <div className="absolute inset-[-4px] border border-gold/40 rounded-full" />
                        )}
                      </div>
                      <span className="font-mono text-[9px] text-cocoa/55 mt-2 uppercase tracking-widest group-hover:text-gold font-semibold transition-colors">
                        {stg.id}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Spotlight description block */}
              <div className="border-t border-gold-light/30 pt-6 mt-4 relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStageId}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 text-left"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] font-semibold">
                        {currentStage.highlight}
                      </span>
                      <span className="text-[10px] bg-sage/10 text-cocoa px-2 py-0.5 rounded-full font-mono">
                        Certified Stage {currentStage.num}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-charcoal">
                      {currentStage.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light">
                      {currentStage.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
