import React, { useState, useRef, useEffect } from "react";
import { ShoppingBag, Check, X, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { m, AnimatePresence } from "motion/react";
import { playWoodClick, playPaperRustle, playSeedDrop } from "../utils/audioUtils";

interface FeaturedProductsProps {
  onAddToCart: (productName: string) => void;
}

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  benefits: string[];
  weight: string;
  flavors?: string[];
}

const products: Product[] = [
  {
    id: "prod-1",
    name: "Mint Flavour Makhana",
    description: "Freshly roasted lotus seeds infused with refreshing mint, prepared for the perfect crunch.",
    image: "https://m.media-amazon.com/images/I/71paW2uT-kL.jpg",
    benefits: ["Zero Preservatives", "Freshly Roasted", "Quality Ingredients"],
    weight: "100g"
  },
  {
    id: "prod-2",
    name: "Chatpata Masala Makhana",
    description: "Tangy and spicy roasted makhana, bursting with authentic Indian chatpata flavors.",
    image: "https://img1.exportersindia.com/product_images/bc-full/2025/10/14951820/chatpata-masala-makhana-1761546855-8402310.jpeg",
    benefits: ["Zero Preservatives", "Spicy & Tangy", "High Fiber Crunch"],
    weight: "100g"
  },
  {
    id: "prod-3",
    name: "Plain Salted Makhana",
    description: "Lightly salted, classic roasted makhana that brings out the natural, wholesome taste.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/9/545694968/TX/LZ/SH/99605915/plain-salted-roasted-makhana.jpeg",
    benefits: ["Lightly Salted", "Healthy Snacking", "Zero Trans Fat"],
    weight: "100g"
  },
  {
    id: "prod-4",
    name: "Magic Masala Makhana",
    description: "An irresistible blend of magical spices coating perfectly roasted crunchy makhana.",
    image: "https://cdn2.foodviva.com/static-content/food-images/snacks-recipes/roasted-makhana-masala/roasted-makhana-masala.jpg",
    benefits: ["Bold Flavor", "Freshly Roasted", "Quality Ingredients"],
    weight: "100g"
  },
  {
    id: "prod-5",
    name: "Energy Bar",
    description: "Naturally delicious snack bar made entirely from premium dry fruits.",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/6/DA/PX/HQ/64879238/dry-fruit-sweet-500x500.jpeg",
    benefits: ["Made from Dry Fruits", "Naturally Nutritious", "Zero Preservatives"],
    weight: "40g"
  },
  {
    id: "prod-6",
    name: "Premium Dry Fruit Mix",
    description: "A perfect premium blend of wholesome California almonds, whole cashews, and leafen raisins.",
    image: "https://m.media-amazon.com/images/I/71m18e2dMAL._AC_UF894,1000_QL80_.jpg",
    benefits: ["Mamra Almonds", "Whole Cashews", "Golden Raisins"],
    weight: "150g"
  },
  {
    id: "prod-7",
    name: "Makhana Mix Namkeen",
    description: "Traditional Indian namkeen blend prepared using premium makhana and light spices.",
    image: "https://myheartbeets.com/wp-content/uploads/2022/02/roasted-makhana-mix.jpg",
    benefits: ["Baked - Zero Frying", "Traditional Savory Blend", "High Fiber Crunch"],
    weight: "120g"
  }
];

export default function FeaturedProducts({ onAddToCart }: FeaturedProductsProps) {
  const [addingToCartId, setAddingToCartId] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<string>("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Caching State
  const [recentlyViewedIds, setRecentlyViewedIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("bloom_recently_viewed");
      if (saved) {
        setRecentlyViewedIds(JSON.parse(saved));
      }
    } catch (e) {
      console.warn("localStorage block", e);
    }
  }, []);

  const addToRecentlyViewed = (id: string) => {
    try {
      const next = [id, ...recentlyViewedIds.filter((x) => x !== id)].slice(0, 4);
      setRecentlyViewedIds(next);
      localStorage.setItem("bloom_recently_viewed", JSON.stringify(next));
    } catch (e) {
      console.warn("localStorage save block", e);
    }
  };

  const scroll = (direction: "left" | "right") => {
    playWoodClick();
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth > 768 ? current.clientWidth / 3 : current.clientWidth * 0.8;
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  const handleBuy = (id: string, name: string) => {
    setAddingToCartId(id);
    playWoodClick();
    playSeedDrop();
    const displayName = selectedFlavor && id === "prod-1" ? `${name} (${selectedFlavor})` : name;
    onAddToCart(displayName);
    setTimeout(() => {
      setAddingToCartId(null);
    }, 1200);
  };

  const handleOpenDetails = (prod: Product) => {
    if (prod.flavors) {
      setSelectedFlavor(prod.flavors[0]);
    }
    setSelectedProduct(prod);
    addToRecentlyViewed(prod.id);
    playPaperRustle();
  };

  return (
    <section id="featured-products" className="py-24 px-6 sm:px-12 lg:px-24 bg-bg-primary select-none overflow-hidden relative">
      
      {/* Background Soft Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nature/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-leaf/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto text-center space-y-12 relative z-10">
        
        {/* Header with Navigation Arrows */}
        <m.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="space-y-4 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-leaf font-bold">
              Pure Offerings
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-earth">
              Our Collection
            </h2>
            <div className="w-16 h-[1px] bg-leaf/40 mx-auto md:mx-0 my-6" />
            <p className="font-sans text-base sm:text-lg text-earth/80 font-light">
              Freshly crafted foods made with quality ingredients and a commitment to pure goodness.
            </p>
          </div>
        </m.div>

        {/* Carousel Grid */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 text-left scrollbar-hide"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {products.map((prod) => (
              <div 
                key={prod.id}
                className="group flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%] snap-start bg-white rounded-3xl overflow-hidden border border-[#EFE6D8]/80 flex flex-col premium-card product-card"
              >
              {/* Image Area - 70% visually */}
              <div className="relative h-64 sm:h-72 w-full bg-bg-secondary overflow-hidden flex items-center justify-center cursor-pointer" onClick={() => handleOpenDetails(prod)}>
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full h-full object-cover product-image"
                  decoding="async"
                  loading="lazy"
                />
                
                {/* Explore Product overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="hover-action-btn bg-white/95 text-earth text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full shadow-md">
                    Explore Product
                  </span>
                </div>
                
                {/* Product Pouch Representation (Secondary) */}
                <div className="absolute bottom-4 right-4 w-[25%] aspect-[3/4] bg-white rounded-xl shadow-lg border border-leaf/20 flex flex-col items-center justify-center p-2 opacity-95">
                   <img src="/company-logo.png" alt="Bloom Pouch" className="w-8 h-8 object-contain opacity-50 mb-1" decoding="async" />
                   <div className="text-[6px] font-sans font-bold text-earth uppercase tracking-widest text-center">Bloom</div>
                   <div className="text-[5px] font-sans text-earth/60 uppercase tracking-widest text-center mt-1">{prod.name}</div>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col flex-grow bg-white relative z-10">
                {/* Title & Desc */}
                <div className="mb-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-earth mb-2 line-clamp-2 min-h-[64px]">
                    {prod.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-earth/70 leading-relaxed font-light min-h-[60px] line-clamp-3">
                    {prod.description}
                  </p>
                </div>
                
                {/* Benefits Row */}
                <div className="space-y-2 mb-6">
                  {prod.benefits.map((benefit, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-2 text-earth/80 font-medium text-xs transition-all duration-500 group-hover:translate-x-1.5"
                      style={{ transitionDelay: `${i * 75}ms` }}
                    >
                      <Check className="w-3.5 h-3.5 text-leaf flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Bottom Details & Actions */}
                <div className="mt-auto">
                  {/* Weight */}
                  <div className="flex items-end justify-between mb-4 pb-4 border-b border-leaf/10">
                    <div>
                      <span className="text-[9px] font-sans text-earth/50 uppercase tracking-wider block font-bold mb-0.5">Net Weight</span>
                      <span className="font-sans text-xs font-semibold text-earth">{prod.weight}</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-2.5">
                    <button
                      onClick={() => handleOpenDetails(prod)}
                      className="w-full py-3 border border-earth text-earth text-xs font-bold uppercase tracking-wide rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow premium-btn"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button
                      onClick={() => handleBuy(prod.id, prod.name)}
                      disabled={addingToCartId !== null}
                      className="w-full py-3 bg-leaf text-white hover:bg-nature text-xs font-bold uppercase tracking-wide rounded-xl flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer shadow-sm hover:shadow premium-btn"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      {addingToCartId === prod.id ? "Adding..." : "Add To Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions & Message */}
        <div className="pt-10 flex flex-col items-center gap-8 border-t border-leaf/10">
          {/* Carousel Arrows */}
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => scroll("left")} 
              className="p-3 sm:p-4 rounded-full border border-earth/20 text-earth hover:bg-earth hover:text-white transition-colors cursor-pointer shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => scroll("right")} 
              className="p-3 sm:p-4 rounded-full border border-earth/20 text-earth hover:bg-earth hover:text-white transition-colors cursor-pointer shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
            </button>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="font-serif text-xl sm:text-2xl text-earth font-medium mb-2">
              More products coming soon.
            </p>
            <p className="font-sans text-earth/70 font-light text-base">
              We're focused on perfecting every recipe before expanding our collection.
            </p>
          </div>
        </div>
      </div>

      {/* Recently Viewed Products */}
      {recentlyViewedIds.length > 0 && (
        <div className="max-w-[1400px] mx-auto pt-16 mt-16 border-t border-leaf/10 text-left relative z-10">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#C6A769] font-bold uppercase block mb-3">
            Your Journey History
          </span>
          <h3 className="font-serif text-2xl font-bold text-earth mb-8">
            Recently Viewed Snacks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {recentlyViewedIds.map((id) => {
              const prod = products.find((p) => p.id === id);
              if (!prod) return null;
              return (
                <div 
                  key={prod.id} 
                  onClick={() => handleOpenDetails(prod)}
                  className="bg-white rounded-2xl border border-[#EFE6D8]/80 p-4 flex flex-col gap-3 cursor-pointer hover:border-[#C6A769] transition-all duration-300 shadow-2xs hover:shadow-xs group"
                >
                  <div className="w-full aspect-[4/3] bg-bg-secondary rounded-xl overflow-hidden flex items-center justify-center p-2">
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-earth line-clamp-1 group-hover:text-leaf transition-colors">
                      {prod.name}
                    </h4>
                    <span className="text-[10px] text-earth/50 font-sans font-semibold uppercase tracking-wider block mt-0.5">
                      {prod.weight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-earth/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <m.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-bg-primary rounded-[24px] max-w-4xl w-full max-h-[90vh] relative shadow-2xl flex flex-col overflow-hidden border border-leaf/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button (Fixed relative to modal) */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-[70] text-earth bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white hover:scale-105 transition-all shadow-sm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Content Wrapper */}
              <div className="flex flex-col md:flex-row w-full h-full overflow-y-auto scrollbar-none">
                
                {/* Modal Image (Sticky on Desktop) */}
                <div className="w-full md:w-[45%] bg-bg-secondary flex items-center justify-center p-8 min-h-[300px] sm:min-h-[350px] md:sticky md:top-0 h-auto md:h-[90vh]">
                  <m.img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-full max-h-[400px] md:max-h-none object-cover rounded-2xl shadow-xl"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                
                {/* Modal Content */}
                <div className="w-full md:w-[55%] p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-medium text-3xl sm:text-4xl text-earth mb-3">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-sm sm:text-base text-earth/80 leading-relaxed font-sans font-light mb-8">
                      {selectedProduct.description}
                    </p>

                    {/* Flavors Selector if available */}
                    {selectedProduct.flavors && (
                      <div className="mb-8">
                        <span className="block text-[11px] text-earth/50 uppercase tracking-widest font-bold mb-3">Select Flavour</span>
                        <div className="flex flex-wrap gap-2.5">
                          {selectedProduct.flavors.map((flv) => (
                            <button
                              key={flv}
                              onClick={() => setSelectedFlavor(flv)}
                              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-sans font-bold transition-all border cursor-pointer ${
                                selectedFlavor === flv
                                  ? "bg-earth border-earth text-white shadow-md scale-105"
                                  : "bg-white border-leaf/30 text-earth hover:border-earth/60 hover:bg-bg-secondary"
                              }`}
                            >
                              {flv}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <h4 className="text-[11px] font-sans tracking-widest text-earth/50 uppercase font-bold mb-4">Highlights</h4>
                    <div className="space-y-3 mb-8">
                      {selectedProduct.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-medium text-earth/80">
                          <div className="w-6 h-6 rounded-full bg-nature/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-nature" />
                          </div>
                          {benefit}
                        </div>
                      ))}
                    </div>

                    <div className="bg-white/60 p-5 rounded-2xl border border-leaf/20 mb-8">
                      <div className="grid grid-cols-2 gap-6 text-sm font-sans">
                        <div>
                          <span className="block text-[10px] text-earth/50 uppercase tracking-widest font-bold mb-2">Weight Options</span>
                          <span className="font-bold text-earth bg-white px-3 py-1.5 rounded-lg border border-leaf/30 shadow-sm">{selectedProduct.weight}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] text-earth/50 uppercase tracking-widest font-bold mb-2">Ingredients</span>
                          <span className="font-medium text-earth text-xs">Premium natural ingredients.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-leaf/20 flex items-center justify-between mt-4">
                    <div>
                      <span className="text-[10px] font-sans text-earth/50 uppercase block font-bold mb-1">Package</span>
                      <span className="text-base font-sans font-semibold text-earth">{selectedProduct.weight} pack</span>
                    </div>

                    <button
                      onClick={() => {
                        handleBuy(selectedProduct.id, selectedProduct.name);
                        setSelectedProduct(null);
                      }}
                      className="py-4 px-8 sm:px-10 bg-leaf hover:bg-nature text-white text-sm sm:text-base font-bold tracking-wide uppercase rounded-full shadow-lg transition-all flex items-center gap-3 cursor-pointer"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
