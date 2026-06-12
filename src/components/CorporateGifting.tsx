import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, MapPin, Gift, ShoppingBag, ArrowRight, Layers, Zap, Calendar, Star, Check } from "lucide-react";

interface Milestone {
  id: string;
  chapter: string;
  title: string;
  description: string;
  initiatives: string[];
  icon: any;
  colorTheme: {
    gradient: string;
    border: string;
    text: string;
    bg: string;
  };
  timelinePeriod: string;
}

interface CorporateGiftingProps {
  onAddToCart?: (productName: string) => void;
}

export default function CorporateGifting({ onAddToCart }: CorporateGiftingProps = {}) {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);

  // Upcoming Bespoke Gift Builder states (Chapter II Exclusive Upcoming Feature)
  const [giftBoxCanister, setGiftBoxCanister] = useState<"ivory-gold" | "crimson-ruby" | "emerald-sage">("ivory-gold");
  const [giftBoxFlavor, setGiftBoxFlavor] = useState<"pink-salt" | "peri-peri" | "saffron">("pink-salt");
  const [giftMessage, setGiftMessage] = useState<string>("Wishing you divine well-being and abundant joy.");
  const [giftPreordered, setGiftPreordered] = useState<boolean>(false);

  const milestones: Milestone[] = [
    {
      id: "vanguard",
      chapter: "Chapter I",
      title: "Flavor Vanguard & Enhanced Branding",
      description: "Pioneering the taste profile of healthy Indian snacks with sophisticated organic spices, packed inside modern barrier-proof canisters.",
      initiatives: [
        "Introduction of new flavored makhana variants",
        "Enhanced product packaging and premium branding"
      ],
      icon: Sparkles,
      colorTheme: {
        gradient: "from-[#F3E7DC] to-[#E9D7C5]",
        border: "border-[#C6A769]/40",
        text: "text-cocoa",
        bg: "bg-[#FAF8F4]"
      },
      timelinePeriod: "Phase 1 - In Progress"
    },
    {
      id: "sovereign",
      chapter: "Chapter II",
      title: "Connoisseur's Gift & Custom Gifting",
      description: "Expanding into high-end celebrations, wedding rituals, and official corporate partnership packages across the subcontinent.",
      initiatives: [
        "Premium festive handcrafted gift collections",
        "Corporate gifting custom-engrubbed solutions"
      ],
      icon: Gift,
      colorTheme: {
        gradient: "from-[#FCEFD8] to-[#ECCDA0]",
        border: "border-amber-500/35",
        text: "text-amber-900",
        bg: "bg-amber-50/40"
      },
      timelinePeriod: "Phase 2 - Upcoming Autumn"
    },
    {
      id: "footprint",
      chapter: "Chapter III",
      title: "Nationwide Metropolitan Expansion",
      description: "Establishing central logistical nodes to pipeline direct farm-sourced gourmet snacks straight into tier-1 metro hubs.",
      initiatives: [
        "Expansion across major North, West & South Indian cities",
        "Direct-to-consumer express supply chain networks"
      ],
      icon: MapPin,
      colorTheme: {
        gradient: "from-[#E6EFE2] to-[#CCE2C4]",
        border: "border-emerald-600/30",
        text: "text-emerald-900",
        bg: "bg-emerald-50/30"
      },
      timelinePeriod: "Phase 3 - Winter Strategy"
    },
    {
      id: "omnichannel",
      chapter: "Chapter IV",
      title: "Omnichannel Supermarket & Quick-Commerce",
      description: "Bringing zero-preservative crunch literally to your doorstep within 10 minutes through leading modern micro-fulfillment stores.",
      initiatives: [
        "Retail and supermarket regional partnerships",
        "Quick-commerce dark store availability across metro regions"
      ],
      icon: ShoppingBag,
      colorTheme: {
        gradient: "from-[#FCF5DC] to-[#F3E5AB]",
        border: "border-yellow-600/30",
        text: "text-yellow-900",
        bg: "bg-yellow-50/30"
      },
      timelinePeriod: "Phase 4 - Horizon Vision"
    }
  ];

  const currentMilestone = milestones[activeMilestoneIndex];

  return (
    <section id="corporate-gifts" className="py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-white to-[#FAF8F4] relative overflow-hidden select-none">
      
      {/* Golden Aura Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-sage/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Core Header Section */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-semibold bg-gold/10 px-4 py-1.5 rounded-full border border-gold/15 inline-block">
            Saga of Intent
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal">
            Growing With Purpose
          </h2>
          <p className="font-serif text-lg italic text-cocoa leading-relaxed">
            Building the future of healthy, preservative-free snacking across India.
          </p>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
          <p className="font-sans text-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed text-xs sm:text-sm pt-2">
            Bloom Consumer Care is continuously expanding its product range, distribution network, and customer reach. Our vision is to make fresh, preservative-free snacks accessible to every household while creating meaningful employment opportunities for women.
          </p>
        </div>

        {/* Master layout grid: Timeline navigation list on the left, Detailed presentation card on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
          {/* LEFT PANEL (Lg: 5 columns): Interactive Milestone Stepper List */}
          <div className="lg:col-span-5 space-y-4 relative">
            
            {/* Elegant Vertical Golden connecting line behind steps */}
            <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#C6A769] via-[#C6A769]/50 to-transparent hidden sm:block" />

            <div className="space-y-4">
              {milestones.map((milestone, idx) => {
                const IconComponent = milestone.icon;
                const isActive = activeMilestoneIndex === idx;

                return (
                  <button
                    key={milestone.id}
                    onClick={() => setActiveMilestoneIndex(idx)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-500 flex items-start gap-4 relative overflow-hidden group ${
                      isActive
                        ? "bg-white border-[#C6A769] shadow-md translate-x-2"
                        : "bg-[#FAF8F4]/30 border-gold-light/10 hover:border-gold-light/30 hover:bg-white/50"
                    }`}
                  >
                    {/* Glowing highlight ribbon for active */}
                    {isActive && (
                      <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#C6A769]" />
                    )}

                    {/* Step Icon with interactive ripple background */}
                    <div className={`w-12 h-12 rounded-xl shrink-0 border flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-[#C6A769] text-white border-[#C6A769]"
                        : "bg-white text-charcoal/60 border-gold-light/35 group-hover:text-[#C6A769] group-hover:border-[#C6A769]/40"
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Brief outline details */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#C6A769] font-bold block">
                          {milestone.chapter}
                        </span>
                        <span className="text-[8px] font-mono font-bold bg-gold/10 px-2 py-0.5 rounded text-cocoa">
                          {milestone.timelinePeriod}
                        </span>
                      </div>
                      <h4 className="font-serif text-sm sm:text-base font-semibold text-charcoal tracking-tight">
                        {milestone.title}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Micro Roadmap Interactive Hint */}
            <div className="p-4 bg-cocoa/5 rounded-2xl border border-gold-light/15 flex items-center gap-3 select-none">
              <Calendar className="w-5 h-5 text-gold shrink-0" />
              <p className="font-sans text-[10px] text-charcoal/70 leading-normal font-light">
                <span className="font-bold text-cocoa block">Interactive Timeline:</span>
                Select a chapter on the list above to explore specific expansion plans, product extensions, and partnership developments.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL (Lg: 7 columns): Animated Presentation Dashboard Grid */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMilestone.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className={`bg-white border ${currentMilestone.colorTheme.border} rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden`}
              >
                {/* Decorative watermarked icon backdrop */}
                <div className="absolute -bottom-8 -right-8 w-44 h-44 opacity-[0.03] text-charcoal pointer-events-none">
                  {(() => {
                    const IconComp = currentMilestone.icon;
                    return <IconComp className="w-full h-full" />;
                  })()}
                </div>

                {/* Card Title Header */}
                <div className="space-y-3 pb-6 border-b border-gold-light/20">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
                      {currentMilestone.chapter}
                    </span>
                    <span className="font-mono text-[10px] uppercase font-bold text-sage px-3 py-1 rounded-full bg-sage/10 border border-sage/20">
                      {currentMilestone.timelinePeriod}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal">
                    {currentMilestone.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light">
                    {currentMilestone.description}
                  </p>
                </div>

                {/* Bullet Objectives detail layout - The core future initiatives mapped beautifully */}
                <div className="py-6 space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#B39359] font-bold block">
                    Strategic Focus & Initiatives
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentMilestone.initiatives.map((init, i) => (
                      <div
                        key={i}
                        className="p-4 bg-bg-secondary/45 border border-gold-light/10 rounded-2xl flex items-start gap-3 hover:border-[#C6A769]/30 transition-all group"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#C6A769]/10 border border-[#C6A769]/25 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A769]" />
                        </div>
                        <span className="font-sans text-xs text-charcoal/85 leading-normal font-light">
                          {init}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming App Feature Showcase - Rendered exclusively for Sovereign Chapter II */}
                {currentMilestone.id === "sovereign" && (
                  <div className="mt-2 mb-6 p-6 rounded-3xl bg-gradient-to-br from-[#1E1916] via-[#2A231E] to-[#14100E] border-2 border-[#C6A769]/40 text-white shadow-2xl space-y-4 relative overflow-hidden">
                    {/* Background faint warm ambient glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A769]/5 rounded-full blur-2xl pointer-events-none" />
                    
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping shrink-0" />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#EBC69F] font-bold bg-[#FAF5EC]/10 border border-[#C6A769]/20 px-2 py-0.5 rounded-md">
                          Interactive App Feature Preview
                        </span>
                      </div>
                      <span className="font-mono text-[8.5px] text-[#C6A769] font-bold uppercase tracking-wider">
                        Coming Q3 2026
                      </span>
                    </div>

                    <div className="space-y-1 relative z-10">
                      <h4 className="font-serif text-base sm:text-lg font-medium text-[#FAF5EC] flex items-center gap-2">
                        <span className="text-xl">⚜️</span>
                        <span>Bloom Bespoke Gift Builder</span>
                      </h4>
                      <p className="font-sans text-[11px] text-[#E5DCD3] font-light leading-relaxed">
                        An upcoming interactive feature enabling consumers or corporate clients to craft premium custom hampers dynamically inside the Bloom app wrapper. Try selecting choices to project your specimen below:
                      </p>
                    </div>

                    {/* Left & Right customizer grids */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-1 relative z-10">
                      {/* Interactive knobs */}
                      <div className="md:col-span-7 space-y-4">
                        {/* Canister Palette Selection */}
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-mono uppercase tracking-wider text-[#EBC69F] block font-bold">1. Select Canister Palette</span>
                          <div className="flex flex-wrap gap-2">
                            <button
                              onClick={() => setGiftBoxCanister("ivory-gold")}
                              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[10px] font-mono transition-all cursor-pointer ${
                                giftBoxCanister === "ivory-gold"
                                  ? "bg-[#C6A769] border-[#C6A769] text-stone-950 font-bold"
                                  : "bg-stone-900/40 border-stone-800 text-[#FAF5EC] hover:bg-stone-800/40"
                              }`}
                            >
                              <span className="w-2 h-2 rounded-full bg-[#FAF8F4] border border-[#C6A769]" />
                              <span>Ivory & Gold</span>
                            </button>
                            <button
                              onClick={() => setGiftBoxCanister("crimson-ruby")}
                              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[10px] font-mono transition-all cursor-pointer ${
                                giftBoxCanister === "crimson-ruby"
                                  ? "bg-[#C6A769] border-[#C6A769] text-stone-950 font-bold"
                                  : "bg-stone-900/40 border-stone-800 text-[#FAF5EC] hover:bg-stone-800/40"
                              }`}
                            >
                              <span className="w-2 h-2 rounded-full bg-[#A33B31] border border-white/20" />
                              <span>Crimson Ruby</span>
                            </button>
                            <button
                              onClick={() => setGiftBoxCanister("emerald-sage")}
                              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[10px] font-mono transition-all cursor-pointer ${
                                giftBoxCanister === "emerald-sage"
                                  ? "bg-[#C6A769] border-[#C6A769] text-stone-950 font-bold"
                                  : "bg-stone-900/40 border-stone-800 text-[#FAF5EC] hover:bg-stone-800/40"
                              }`}
                            >
                              <span className="w-2 h-2 rounded-full bg-[#495E4D] border border-white/20" />
                              <span>Emerald Sage</span>
                            </button>
                          </div>
                        </div>

                        {/* Roasted Mix Choice */}
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-mono uppercase tracking-wider text-[#EBC69F] block font-bold">2. Select Snack Filling</span>
                          <div className="flex flex-wrap gap-2">
                            <button
                              onClick={() => setGiftBoxFlavor("pink-salt")}
                              className={`px-3 py-1.5 rounded-lg border text-[10px] font-mono transition-all cursor-pointer ${
                                giftBoxFlavor === "pink-salt"
                                  ? "bg-[#C6A769] border-[#C6A769] text-stone-950 font-bold"
                                  : "bg-stone-900/40 border-stone-800 text-[#FAF5EC] hover:bg-stone-800/40"
                              }`}
                            >
                              Pink Salt Makhana
                            </button>
                            <button
                              onClick={() => setGiftBoxFlavor("peri-peri")}
                              className={`px-3 py-1.5 rounded-lg border text-[10px] font-mono transition-all cursor-pointer ${
                                giftBoxFlavor === "peri-peri"
                                  ? "bg-[#C6A769] border-[#C6A769] text-stone-950 font-bold"
                                  : "bg-stone-900/40 border-stone-800 text-[#FAF5EC] hover:bg-stone-800/40"
                              }`}
                            >
                              Peri Peri Crisps
                            </button>
                            <button
                              onClick={() => setGiftBoxFlavor("saffron")}
                              className={`px-3 py-1.5 rounded-lg border text-[10px] font-mono transition-all cursor-pointer ${
                                giftBoxFlavor === "saffron"
                                  ? "bg-[#C6A769] border-[#C6A769] text-stone-950 font-bold"
                                  : "bg-stone-900/40 border-stone-800 text-[#FAF5EC] hover:bg-stone-800/40"
                              }`}
                            >
                              Saffron Dry Fruits
                            </button>
                          </div>
                        </div>

                        {/* Custom Gold-embossed Message text */}
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-mono uppercase tracking-wider text-[#EBC69F] block font-bold">3. Custom Brass Plaque Engraving</span>
                          <input
                            type="text"
                            value={giftMessage}
                            onChange={(e) => setGiftMessage(e.target.value.slice(0, 50))}
                            placeholder="e.g. Congratulations, Best Wishes..."
                            className="w-full px-3 py-2 text-xs font-sans rounded-xl bg-stone-900/90 border border-[#C6A769]/30 text-[#FAF5EC] placeholder-stone-600 focus:outline-none focus:border-[#C6A769]"
                          />
                          <span className="text-[8px] font-mono text-zinc-500 block text-right leading-none">Max 50 characters</span>
                        </div>
                      </div>

                      {/* Right customized real-time projection viewport */}
                      <div className="md:col-span-5 bg-stone-950/90 border border-[#C6A769]/25 rounded-2xl p-4 flex flex-col justify-between items-center relative overflow-hidden min-h-[220px] shadow-inner">
                        
                        {/* Background radial soft light gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#C6A769]/10 via-transparent to-transparent pointer-events-none" />

                        {/* Top alignment tag */}
                        <span className="text-[7.5px] font-mono uppercase font-bold text-[#C6A769] tracking-wider bg-stone-900 border border-[#C6A769]/20 px-2 py-0.5 rounded z-10">
                          Live 3D Projection
                        </span>

                        {/* Composite Virtual Gift Hampers Illustration */}
                        <div className="relative w-28 h-28 flex items-center justify-center pt-2">
                          
                          {/* Main canister container vector layout based on palette state */}
                          <motion.div
                            key={giftBoxCanister + giftBoxFlavor}
                            className={`w-14 h-24 rounded-t-2xl rounded-b-md shadow-md border relative flex flex-col items-center justify-between p-2 z-10 transition-all ${
                              giftBoxCanister === "ivory-gold"
                                ? "bg-gradient-to-b from-[#FFFDF9] to-[#FAF1E4] border-[#C6A769]/50 text-[#4B3425]"
                                : giftBoxCanister === "crimson-ruby"
                                ? "bg-gradient-to-b from-[#B84D43] to-[#862D25] border-amber-500/40 text-rose-100"
                                : "bg-gradient-to-b from-[#58725D] to-[#3B4F3F] border-amber-400/40 text-emerald-100"
                            }`}
                            initial={{ scale: 0.8, rotate: -3 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            {/* Inner Gold Foil Seal */}
                            <div className="absolute inset-1 border border-amber-400/30 rounded-t-xl rounded-b-sm pointer-events-none" />

                            {/* Luxury Wax-Stamp Emblem or Ribbon Bow */}
                            <div className="absolute -top-1.5 w-6 h-6 bg-[#C6A769] rounded-full z-20 flex items-center justify-center shadow-sm">
                              <span className="text-[6.5px] text-white flex items-center justify-center font-bold font-mono">⚜️</span>
                            </div>

                            {/* Micro content details */}
                            <span className="text-[5px] font-mono uppercase tracking-[0.25em] font-bold text-center mt-3 z-10 select-none block leading-none">
                              {giftBoxCanister === "ivory-gold" ? "IVORY" : giftBoxCanister === "crimson-ruby" ? "RUBY" : "SAGE"} COUTURE
                            </span>

                            {/* Tiny bowl illustration loaded in micro frame */}
                            <div className="w-8 h-8 rounded-full bg-white border border-amber-500/25 p-0.5 flex items-center justify-center shadow-xs z-15 overflow-hidden">
                              <img
                                src={
                                  giftBoxFlavor === "saffron"
                                    ? "https://i.ibb.co/F4g1VSL4/image.png"
                                    : "https://i.ibb.co/RTJ9J5BD/spicy-masala-phool-makhana.jpg"
                                }
                                alt="Foil Cured item"
                                className="w-full h-full object-cover rounded-full"
                              />
                            </div>

                            {/* Wax Seal Base label representation */}
                            <div className={`text-[4.5px] font-sans text-center truncate italic leading-none max-w-[48px] z-10 font-bold ${
                              giftBoxCanister === 'ivory-gold' ? 'text-[#4B3425]' : 'text-white'
                            }`}>
                              {giftBoxFlavor === "pink-salt" ? "Pink Salt" : giftBoxFlavor === "peri-peri" ? "Spiced Peri" : "Saffron Mix"}
                            </div>
                          </motion.div>

                          {/* Secondary overlapping card label for custom engraving */}
                          <div className="absolute -right-4 bottom-1 w-20 bg-[#FAF6EE] border border-[#C6A769]/50 rounded p-1.5 z-20 rotate-6 flex flex-col justify-start shadow-md text-[#4B3425]">
                            <span className="text-[3.5px] font-mono text-[#C6A769] uppercase font-extrabold block">Gold-Engraved</span>
                            <p className="text-[4px] font-sans line-clamp-2 italic font-light leading-normal mt-0.5 text-stone-800">
                              "{giftMessage || "Divine Well-being"}"
                            </p>
                          </div>
                        </div>

                        {/* Exclusive VIP Waitlist registration for Chapter II Concept Teaser */}
                        <div className="w-full mt-3 flex flex-col items-center">
                          <button
                            onClick={() => {
                              setGiftPreordered(true);
                              // We do NOT call onAddToCart anymore because this is a teaser concept!
                              // This fulfills the "user cant add this in bag" instruction.
                              setTimeout(() => setGiftPreordered(false), 4500);
                            }}
                            disabled={giftPreordered}
                            className={`w-full py-2.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest border transition-all cursor-pointer ${
                              giftPreordered 
                                ? "bg-[#93A47D] border-[#93A47D] text-[#1E1F1A]" 
                                : "bg-[#C6A769] border-[#C6A769] text-stone-950 hover:bg-[#DBC396] hover:shadow-[0_4px_12px_rgba(198,167,105,0.35)] luxury-glowing-btn"
                            }`}
                          >
                            {giftPreordered ? "✓ RSVP Received - Added to Waitlist!" : "Notify Me When Active"}
                          </button>
                          <span className="text-[7px] font-mono text-stone-400 mt-1.5 tracking-wider block text-center uppercase">
                            ✦ CONCEPT PREVIEW ONLY • CHAPTER II RESERVATION ACTIVE
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                )}

                {/* Animated vector roadmap representation */}
                <div className="bg-[#FAF8F4]/55 border border-gold-light/25 rounded-2xl p-5 space-y-3 relative overflow-hidden select-none">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 text-gold animate-spin" style={{ animationDuration: "12s" }} />
                      <span className="font-mono text-[9px] tracking-widest text-cocoa uppercase font-bold">
                        Pesticide-Free Standard Pipeline
                      </span>
                    </div>
                    <span className="font-mono text-[8px] text-[#93A47D] uppercase font-bold tracking-widest">
                      100% Traceable
                    </span>
                  </div>

                  {/* Visual animation representing progress roadmap */}
                  <div className="h-16 relative bg-white/45 border border-gold-light/15 rounded-xl flex items-center justify-between px-6 overflow-hidden">
                    
                    {/* Static high-end pipeline vector bars */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full bg-[linear-gradient(45deg,transparent_25%,#C6A769_25%,#C6A769_50%,transparent_50%,transparent_75%,#C6A769_75%)] bg-[length:24px_24px]" />
                    </div>

                    {/* Interactive dots representing nodes */}
                    <div className="flex justify-between items-center w-full z-10 font-mono text-[8px] font-bold text-cocoa">
                      <div className="flex flex-col items-center">
                        <span className="w-2 h-2 rounded-full bg-sage" />
                        <span className="mt-1">Mithila Sourcing</span>
                      </div>
                      <div className="w-full h-[1px] bg-gold-light/40 mx-2" border-style="dashed" />
                      <div className="flex flex-col items-center">
                        <span className="w-2 h-2 rounded-full bg-[#C6A769] animate-ping absolute" />
                        <span className="w-2 h-2 rounded-full bg-[#C6A769]" />
                        <span className="mt-1">Varanasi Lab</span>
                      </div>
                      <div className="w-full h-[1px] bg-gold-light/40 mx-2" border-style="dashed" />
                      <div className="flex flex-col items-center opacity-75">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                        <span className="mt-1">Our Homes</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Quick contact / Support nudge */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gold-light/20 text-xs font-mono">
                  <span className="text-charcoal/50">
                    Bespoke variants and bulk catalog planning is fully open.
                  </span>
                  <a
                    href="#contact-partners"
                    className="text-gold font-bold uppercase tracking-wider hover:underline flex items-center gap-1 shrink-0"
                  >
                    <span>Connect with our desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Highly polished, minimalist luxury Bottom Statement */}
        <div className="mt-24 text-center space-y-4">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#C6A769] mx-auto" />
          <p className="font-serif text-3xl sm:text-4xl italic font-medium tracking-wide text-charcoal/80">
            "The journey has just begun."
          </p>
          <div className="w-1 h-1 rounded-full bg-gold mx-auto" />
        </div>

      </div>
    </section>
  );
}

