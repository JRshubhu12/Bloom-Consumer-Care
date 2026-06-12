import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Heart, Sparkles, Sprout, Shield, ShoppingBag, Plus, Sparkle, Eye } from "lucide-react";
import { PRODUCTS } from "../data";

interface BestSellersStripProps {
  onAddToCart: (productName: string) => void;
}

export default function BestSellersStrip({ onAddToCart }: BestSellersStripProps) {
  const [addingId, setAddingId] = useState<string | null>(null);

  // Mapped food images from premium workspace assets
  const productImages: Record<string, string> = {
    "makhana-pink-salt": "https://i.ibb.co/RTJ9J5BD/spicy-masala-phool-makhana.jpg",
    "makhana-mint-basil": "https://images.unsplash.com/photo-1599490659213-e2b9527bd08c?auto=format&fit=crop&w=600&q=80",
    "dryfruit-royal": "https://i.ibb.co/F4g1VSL4/image.png",
    "namkeen-quinoa": "https://i.ibb.co/XrwZhg76/image.png"
  };

  const handleQuickAdd = (name: string, id: string) => {
    setAddingId(id);
    onAddToCart(name);
    setTimeout(() => {
      setAddingId(null);
    }, 800);
  };

  return (
    <section id="best-sellers" className="py-20 px-6 sm:px-12 lg:px-20 bg-[#FAF9F6] border-y border-[#EAE4DB]/60 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto space-y-16">
        
        {/* ==================== TRUST SEGMENT ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 bg-white/60 p-8 rounded-3xl border border-[#EAE4DB] shadow-xs">
          
          {/* Trust 1 */}
          <div className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-white transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-[#768364]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6 text-[#768364]" />
            </div>
            <span className="text-sm font-semibold text-[#2F2924] leading-tight block">100% Preservative Free</span>
            <span className="text-[10px] text-[#847D75] mt-1">Zero Chemicals Added</span>
          </div>

          {/* Trust 2 */}
          <div className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-white transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-[#C3A77D]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 text-[#C3A77D]" />
            </div>
            <span className="text-sm font-semibold text-[#2F2924] leading-tight block">Made By Women</span>
            <span className="text-[10px] text-[#847D75] mt-1">Direct Village Clusters</span>
          </div>

          {/* Trust 3 */}
          <div className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-white transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-[#C3A77D]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-[#C3A77D]" />
            </div>
            <span className="text-sm font-semibold text-[#2F2924] leading-tight block">Premium Ingredients</span>
            <span className="text-[10px] text-[#847D75] mt-1">Hand-Selected Popped Seeds</span>
          </div>

          {/* Trust 4 */}
          <div className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-white transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-[#768364]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Sprout className="w-6 h-6 text-[#768364]" />
            </div>
            <span className="text-sm font-semibold text-[#2F2924] leading-tight block">Small Batch Freshness</span>
            <span className="text-[10px] text-[#847D75] mt-1">Ready Roasted On-Order</span>
          </div>

          {/* Trust 5 - FSSAI */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center p-4 rounded-2xl hover:bg-white transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-[#C3A77D]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-[#C3A77D]" />
            </div>
            <span className="text-sm font-semibold text-[#2F2924] leading-tight block">FSSAI Certified</span>
            <span className="text-[10px] text-[#847D75] mt-1">Clinical Safety Assured</span>
          </div>

        </div>

        {/* ==================== QUICK BUY STRIP ==================== */}
        <div className="space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#EAE4DB] pb-5">
            <div className="text-left">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#C3A77D] font-bold uppercase block">EXCLUSIVE BEST SELLERS</span>
              <h2 className="font-serif text-3xl text-[#2F2924] font-medium mt-1">Gourmet Wellness Favourites</h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#847D75] max-w-sm text-center sm:text-right">
              Skipping retailers to provide premium hand-roasted packs direct from dry storage. Hover cards to check clinical nutrition.
            </p>
          </div>

          {/* Horizontal Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PRODUCTS.map((prod) => {
              const image = productImages[prod.id] || "https://i.ibb.co/RTJ9J5BD/spicy-masala-phool-makhana.jpg";
              const isAdding = addingId === prod.id;

              return (
                <motion.div
                  key={prod.id}
                  className="bg-white rounded-2xl border border-[#EAE4DB] p-4 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group overflow-hidden h-[380px]"
                  whileHover={{ y: -6 }}
                >
                  {/* Preservative Free Badge */}
                  <div className="absolute top-3 left-3 z-10 bg-[#768364]/95 text-white text-[9px] font-semibold tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                    <Sparkle className="w-2.5 h-2.5 text-white animate-pulse" />
                    <span>Preservative Free</span>
                  </div>

                  {/* Product Image Stage */}
                  <div className="relative h-44 w-full bg-[#F4EFE8]/50 rounded-xl overflow-hidden mb-4 flex items-center justify-center p-2">
                    <img
                      src={image}
                      alt={prod.name}
                      className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/3 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    
                    {/* Hover tooltip hint */}
                    <div className="absolute right-2 bottom-2 bg-charcoal/80 backdrop-blur-xs p-1.5 rounded-full text-white opacity-85 group-hover:opacity-0 transition-opacity">
                      <Eye className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Core product descriptors */}
                  <div className="flex-1 flex flex-col justify-between space-y-2">
                    <div className="space-y-1 text-left">
                      <span className="text-[9px] uppercase tracking-wider text-[#C3A77D] font-bold font-mono">
                        {prod.category === "makhana" ? "Roasted Makhana" : prod.category === "dryfruits" ? "Gourmet Dry Fruit" : "Healthy Namkeen"}
                      </span>
                      <h3 className="font-serif text-[#2F2924] font-semibold text-sm leading-snug group-hover:text-[#C3A77D] transition-colors line-clamp-2 h-10">
                        {prod.name}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#F4EFE8]">
                      <span className="font-serif text-base font-bold text-[#4B3425]">
                        ₹{prod.price}
                      </span>
                      
                      <button
                        onClick={() => handleQuickAdd(prod.name, prod.id)}
                        disabled={isAdding}
                        className="py-2 px-4 bg-[#5C3E26] hover:bg-[#392312] text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-sm hover:shadow-md cursor-pointer luxury-glowing-btn disabled:opacity-80"
                      >
                        {isAdding ? (
                          <>
                            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add To Cart</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* ================== PRODUCT HOVER PANEL OVERLAY ================== */}
                  <div className="absolute inset-0 bg-white/98 p-5 border border-[#C6A769]/30 rounded-2xl translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out z-20 flex flex-col justify-between h-full select-none text-left">
                    <div className="space-y-4">
                      
                      {/* Title Segment */}
                      <div>
                        <span className="text-[8.5px] uppercase tracking-[0.25em] font-mono text-[#C3A77D] font-bold block">Reserve Specs</span>
                        <h4 className="font-serif font-bold text-charcoal text-xs mt-0.5 tracking-tight line-clamp-2">{prod.name}</h4>
                      </div>

                      {/* Nutrition facts mini-grid */}
                      <div className="space-y-1.5">
                        <span className="text-[8.5px] font-mono tracking-wider text-[#768364] uppercase font-bold block">🌿 Nutritional Facts:</span>
                        <div className="grid grid-cols-2 gap-1 text-[9.5px] font-mono">
                          <div className="bg-[#FAF8F4] p-1.5 rounded border border-[#EAE4DB]/55">Protein: <strong className="text-[#4B3425]">{prod.macros?.protein || "4.2g"}</strong></div>
                          <div className="bg-[#FAF8F4] p-1.5 rounded border border-[#EAE4DB]/55">Fiber: <strong className="text-[#4B3425]">{prod.macros?.fiber || "3.1g"}</strong></div>
                          <div className="bg-[#FAF8F4] p-1.5 rounded border border-[#EAE4DB]/55">Carbs: <strong className="text-[#4B3425]">{prod.macros?.carbs || "18.5g"}</strong></div>
                          <div className="bg-[#FAF8F4] p-1.5 rounded border border-[#EAE4DB]/55 font-bold">Kcal: <span className="text-cocoa">{prod.calories || "120"} cal</span></div>
                        </div>
                      </div>

                      {/* Ingredients list */}
                      <div className="space-y-1">
                        <span className="text-[8.5px] font-mono tracking-wider text-cocoa uppercase font-bold block">✨ Ingredients:</span>
                        <p className="text-[10px] font-sans text-charcoal/75 leading-relaxed">
                          {prod.originalIngredients?.join(", ") || "Premium Selections"}
                        </p>
                      </div>

                    </div>

                    {/* Price and Add button footer */}
                    <div className="pt-3 border-t border-[#F4EFE8] flex items-center justify-between">
                      <div>
                        <span className="text-[7.5px] font-mono text-charcoal/40 uppercase block font-bold">Price value:</span>
                        <strong className="text-base font-serif font-bold text-cocoa">₹{prod.price}</strong>
                      </div>

                      <button
                        onClick={() => handleQuickAdd(prod.name, prod.id)}
                        disabled={isAdding}
                        className="py-2.5 px-4 bg-[#5C3E26] hover:bg-[#392312] text-white text-[9.5px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-sm cursor-pointer luxury-glowing-btn"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Quick Add</span>
                      </button>
                    </div>

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
