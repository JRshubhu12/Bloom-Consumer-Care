import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import { Sparkles, Eye, Flame, ShieldAlert, ShoppingBag, RotateCcw, ArrowRight, ZoomIn } from "lucide-react";

interface ProductExperienceProps {
  onAddToCart: (productName: string) => void;
}

const FOOD_IMAGES: Record<string, string> = {
  makhana: "https://i.ibb.co/RTJ9J5BD/spicy-masala-phool-makhana.jpg",
  dryfruits: "https://i.ibb.co/F4g1VSL4/image.png",
  namkeen: "https://i.ibb.co/XrwZhg76/image.png"
};

export default function ProductExperience({ onAddToCart }: ProductExperienceProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "makhana" | "dryfruits" | "namkeen">("all");
  const [activeProductId, setActiveProductId] = useState<string>("makhana-pink-salt");
  const [zoomScales, setZoomScales] = useState<Record<string, number>>({
    "makhana-pink-salt": 100,
    "makhana-mint-basil": 100,
    "dryfruit-royal": 100,
    "namkeen-quinoa": 100
  });
  const [activeFlavors, setActiveFlavors] = useState<Record<string, string>>({
    "makhana-pink-salt": "Pristine Pink Salt",
    "makhana-mint-basil": "Garden Mint & Basil",
    "dryfruit-royal": "Saffron Cardamom",
    "namkeen-quinoa": "Spiced Herbs"
  });
  const [addingToCartId, setAddingToCartId] = useState<string | null>(null);

  const activeProduct = PRODUCTS.find((p) => p.id === activeProductId) || PRODUCTS[0];

  const filteredProducts = PRODUCTS.filter(
    (p) => selectedCategory === "all" || p.category === selectedCategory
  );

  const handleZoomToggle = (id: string) => {
    setZoomScales((prev) => ({
      ...prev,
      [id]: (prev[id] || 100) >= 150 ? 100 : 150
    }));
  };

  const handleSelectFlavor = (productId: string, flavor: string) => {
    setActiveFlavors((prev) => ({
      ...prev,
      [productId]: flavor
    }));
  };

  const triggerAddToCart = (product: Product) => {
    setAddingToCartId(product.id);
    onAddToCart(`${product.name} (${activeFlavors[product.id] || "Original"})`);
    setTimeout(() => {
      setAddingToCartId(null);
    }, 1200);
  };

  return (
    <section id="bloom-collection" className="py-24 px-6 sm:px-12 lg:px-24 bg-bg-primary relative overflow-hidden">
      
      {/* Visual luxury architecture backdrop columns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-gold-light/25 pb-8 text-left">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Flagship Curation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal">
              Empowered Taste Creations <br />
              <span className="italic font-normal text-cocoa">Freshly Roasting Daily</span>
            </h2>
          </div>

          {/* Filtering navigation badges */}
          <div className="flex flex-wrap gap-2.5">
            {([
              { key: "all", label: "All Products" },
              { key: "makhana", label: "Roasted Makhana" },
              { key: "dryfruits", label: "Dry Fruit Mixes" },
              { key: "namkeen", label: "Healthy Namkeen" }
            ] as const).map((filter) => (
              <button
                key={filter.key}
                onClick={() => {
                  setSelectedCategory(filter.key);
                  // Auto focus first available product in filter
                  const firstOfCat = PRODUCTS.find((p) => filter.key === "all" || p.category === filter.key);
                  if (firstOfCat) setActiveProductId(firstOfCat.id);
                }}
                className={`px-5 py-2 font-mono text-[10px] uppercase tracking-widest rounded-full border transition-all duration-300 ${
                  selectedCategory === filter.key
                    ? "bg-cocoa border-gold text-bg-primary shadow-sm"
                    : "bg-white/50 border-gold-light/30 text-charcoal/75 hover:bg-white hover:border-gold"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Premium Layout - Focused Column Product Detail & Secondary Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT PANEL (Lg: 7 columns): The Hero Floating Glass Showcase for selected active product */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white/70 backdrop-blur-lg border border-gold-light/40 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(107,74,50,0.06)] relative overflow-hidden flex flex-col justify-between min-h-[580px]">
              
              {/* Product Category & Seal logo */}
              <div className="flex items-center justify-between relative z-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold font-semibold">
                  Bloom Reserve • {activeProduct.category}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-sage animate-pulse" />
              </div>

              {/* Floating Large 3D Display Showcase */}
              <div className="my-8 flex flex-col items-center justify-center relative z-10">
                
                {/* Simulated Glass showcase podium */}
                <div className="absolute bottom-0 w-64 h-8 bg-gradient-to-t from-gold-light/20 to-transparent rounded-full shadow-[0_15px_30px_rgba(200,169,107,0.15)] filter blur-xs" />
                
                {/* Main Product Tin / Visual */}
                <motion.div
                  className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-gradient-to-br from-white/95 to-bg-secondary/90 border border-gold/45 shadow-2xl flex flex-col items-center justify-between p-6 relative cursor-pointer"
                  style={{
                    perspective: 1000
                  }}
                  onClick={() => handleZoomToggle(activeProduct.id)}
                  whileHover={{ scale: 1.03, y: -4 }}
                >
                  {/* Luxury Inner Tin Border decoration */}
                  <div className="absolute inset-1.5 border border-gold-light/35 rounded-xl pointer-events-none" />
                  
                  {/* Symmetrical golden framing lines */}
                  <div className="w-full text-center space-y-1">
                    <span className="font-display text-[9px] tracking-[0.3em] text-[#C8A96B] font-bold block">BLOOM</span>
                    <div className="h-[0.5px] bg-gold/30 w-3/4 mx-auto" strokeDasharray="3 3" />
                  </div>

                  {/* Core product title inside tin */}
                  <div className="text-center px-2">
                    <h3 className="font-serif text-sm sm:text-base font-semibold leading-relaxed tracking-tight text-charcoal">
                      {activeProduct.name.split(" ").slice(0, 3).join(" ")}
                    </h3>
                    <span className="font-mono text-[9px] text-sage/90 mt-1 block tracking-wider uppercase font-bold">
                      {activeFlavors[activeProduct.id] || "Pink Salt"}
                    </span>
                  </div>

                  {/* Circular Natural Food Dish representation inside the tin window */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#C6A769] overflow-hidden shadow-inner bg-white pointer-events-none relative z-10 select-none flex items-center justify-center">
                    <img
                      src={FOOD_IMAGES[activeProduct.category] || FOOD_IMAGES.makhana}
                      alt={activeProduct.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 ease-out"
                      style={{
                        transform: `scale(${(zoomScales[activeProduct.id] || 100) / 100})`
                      }}
                    />
                  </div>

                  {/* Nutrition small circular badge bottom */}
                  <div className="w-12 h-12 rounded-full border border-gold/25 bg-white flex flex-col items-center justify-center shadow-inner">
                    <span className="font-mono text-[9px] text-cocoa leading-none">VEGAN</span>
                    <span className="font-mono text-[7px] text-cocoa/60 mt-0.5 font-bold">100%</span>
                  </div>

                  {/* Absolute subtle visual indicator for Zoom */}
                  <div className="absolute bottom-2 right-4 text-gold/60">
                    <ZoomIn className="w-3.5 h-3.5 animate-pulse" />
                  </div>

                  {/* Dynamic Product Detail Floating Badge that shows up during Zoom magnification */}
                  <AnimatePresence>
                    {(zoomScales[activeProduct.id] || 100) > 105 && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        className="absolute inset-2 bg-[#FAF8F4]/98 backdrop-blur-md z-20 rounded-xl p-4 flex flex-col justify-between text-left border border-gold/45 shadow-2xl"
                      >
                        <div className="space-y-2.5">
                          <div className="flex justify-between items-center border-b border-gold-light/35 pb-1.5">
                            <span className="font-mono text-[9px] tracking-wider text-gold font-bold uppercase">Inspect Integrity details</span>
                            <span className="text-[8px] font-mono text-[#768364] bg-[#768364]/10 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                              <ZoomIn className="w-2.5 h-2.5" /> Checked
                            </span>
                          </div>
                          
                          <div className="space-y-1">
                            <span className="text-[8px] uppercase tracking-wider text-charcoal/50 font-bold block">100% PURE & SOURCE VERIFIED:</span>
                            <p className="text-[10px] font-sans text-[#2F2924] leading-relaxed font-light">
                              Each seed is selected from wetland clusters by certified self-help groups, graded carefully, and air-roasted to preserve dietary fibers.
                            </p>
                          </div>

                          <div className="space-y-1.5 bg-white/70 p-2 rounded-lg border border-gold-light/20">
                            <span className="text-[8px] font-mono tracking-wider text-cocoa uppercase block font-bold">🌿 Nutrition Metrics:</span>
                            <div className="grid grid-cols-2 gap-1 text-[9px] font-mono">
                              <div>Protein: <strong className="text-cocoa">{activeProduct.macros?.protein || "4.2g"}</strong></div>
                              <div>Fiber: <strong className="text-cocoa">{activeProduct.macros?.fiber || "3.1g"}</strong></div>
                              <div>Sodium: <strong className="text-cocoa">Trace (Zero High Salt)</strong></div>
                              <div>Preservatives: <strong className="text-[#768364]">0% Added</strong></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-gold-light/20">
                          <span className="text-[8px] font-mono text-charcoal/40">Micro-Magnified: {((zoomScales[activeProduct.id] || 100) / 100).toFixed(2)}x</span>
                          <span className="text-[8px] font-mono font-bold text-gold uppercase tracking-wider">🌿 Luxury Wellness</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Adding to Cart Particle Success Animation Overlay */}
                <AnimatePresence>
                  {addingToCartId === activeProduct.id && (
                    <motion.div
                      className="absolute inset-0 bg-white/95 backdrop-blur-xs rounded-2xl flex flex-col items-center justify-center z-30"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        initial={{ scale: 0.8, y: 10 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: -10 }}
                        className="flex flex-col items-center space-y-3"
                      >
                        <div className="w-14 h-14 rounded-full bg-cocoa text-bg-primary flex items-center justify-center shadow-lg">
                          <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <span className="font-serif text-[#FAF8F4] bg-gold/90 text-xs tracking-widest uppercase font-bold px-4 py-1.5 rounded-full shadow-sm">
                          Added To Cart Royale
                        </span>
                        <p className="font-sans text-[10px] text-charcoal/65 font-mono">
                          Roasting queue logged...
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Zoom & Detail Discovery Control Panel */}
              <div className="border-t border-gold-light/30 pt-6 mt-4 space-y-4 relative z-10 text-left">
                
                {/* Discovery slider instead of rotation */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-gold font-mono text-[10px] uppercase tracking-wider font-semibold">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Ingredient Detail Zoom Explorer</span>
                  </div>
                  <span className="font-mono text-[10px] text-charcoal/50">
                    Zoom: {zoomScales[activeProduct.id] || 100}%
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="200"
                  value={zoomScales[activeProduct.id] || 100}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    setZoomScales((prev) => ({ ...prev, [activeProduct.id]: val }));
                  }}
                  className="w-full h-1 bg-gold-light/35 rounded-full appearance-none cursor-pointer accent-gold"
                />

                {/* Flavor choices */}
                <div className="space-y-2">
                  <span className="font-sans text-xs font-semibold text-charcoal tracking-wide block">
                    Luxury Flavor Explorations:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeProduct.flavors.map((flv) => {
                      const Selected = activeFlavors[activeProduct.id] === flv;
                      return (
                        <button
                          key={flv}
                          onClick={() => handleSelectFlavor(activeProduct.id, flv)}
                          className={`px-4 py-1.5 rounded-full font-sans text-xs transition-all duration-300 ${
                            Selected
                              ? "bg-gold text-bg-primary font-medium border border-gold"
                              : "bg-bg-primary border border-gold-light/20 text-charcoal/85 hover:border-gold"
                          }`}
                        >
                          {flv}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT DETAIL PANEL (Lg: 5 columns): Nutrition highlights & Cart buying */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left h-full space-y-6">
            
            {/* Active product text detailing */}
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-gold font-semibold bg-gold/10 px-3 py-1 rounded-full col-span-1 border border-gold/15 inline-block">
                ★ Highly Graded {activeProduct.rating} / 5.0 Rating
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal leading-tight">
                {activeProduct.name}
              </h3>
              <div className="w-16 h-[2.5px] bg-cocoa" />
              <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light">
                {activeProduct.description}
              </p>
            </div>

            {/* Nutrition facts sliding container */}
            <div className="bg-bg-secondary/45 border border-gold-light/40 rounded-2xl p-6 space-y-4 shadow-sm">
              <div className="flex items-center gap-1.5 border-b border-gold-light/25 pb-3">
                <Flame className="w-4 h-4 text-gold" />
                <h4 className="font-serif text-sm font-semibold text-charcoal uppercase tracking-wider">
                  Nutritional Integrity (per pouch)
                </h4>
              </div>

              {/* Grid listing macromolecular keys */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-white/80 p-2.5 rounded-xl border border-gold-light/20 shadow-2xs">
                  <span className="font-sans text-[10px] text-charcoal/50 block font-medium uppercase">Kcal</span>
                  <span className="font-mono text-xs sm:text-sm text-cocoa font-semibold mt-1 block">{activeProduct.calories}</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded-xl border border-gold-light/20 shadow-2xs">
                  <span className="font-sans text-[10px] text-charcoal/50 block font-medium uppercase">Protein</span>
                  <span className="font-mono text-xs sm:text-sm text-cocoa font-semibold mt-1 block">{activeProduct.macros.protein}</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded-xl border border-gold-light/20 shadow-2xs">
                  <span className="font-sans text-[10px] text-charcoal/50 block font-medium uppercase">Fiber</span>
                  <span className="font-mono text-xs sm:text-sm text-cocoa font-semibold mt-1 block">{activeProduct.macros.fiber}</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded-xl border border-gold-light/20 shadow-2xs">
                  <span className="font-sans text-[10px] text-charcoal/50 block font-medium uppercase">Fat</span>
                  <span className="font-mono text-xs sm:text-sm text-cocoa font-semibold mt-1 block">{activeProduct.macros.fat}</span>
                </div>
              </div>

              {/* Bullet highlights list */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-charcoal/70 pt-2">
                {activeProduct.healthHighlights.map((hl) => (
                  <li key={hl} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing & Checkout Block */}
            <div className="flex items-center justify-between gap-6 pt-4 border-t border-gold-light/35">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal/50">Elite Pricing</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-3xl font-medium text-cocoa">₹{activeProduct.price}</span>
                  <span className="font-sans text-xs text-charcoal/60">/ {activeProduct.weightOptions[0]}</span>
                </div>
              </div>

              {/* Add to Cart button */}
              <button
                onClick={() => triggerAddToCart(activeProduct)}
                disabled={addingToCartId !== null}
                className="flex items-center gap-3 px-8 py-4 bg-cocoa text-bg-primary font-medium tracking-wide text-sm rounded-lg hover:bg-charcoal transition-all duration-300 shadow-lg hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer luxury-glowing-btn"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add To Cart Prestige</span>
              </button>
            </div>

            {/* Simple slider navigation indicator list */}
            <div className="pt-4 flex items-center gap-2">
              <span className="font-mono text-[9px] text-charcoal/40 uppercase tracking-widest font-semibold mr-2">Featured Collection:</span>
              {filteredProducts.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProductId(p.id)}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 border ${
                    p.id === activeProductId
                      ? "bg-gold border-gold scale-125"
                      : "bg-white border-gold-light/40 hover:border-gold"
                  }`}
                  title={p.name}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
