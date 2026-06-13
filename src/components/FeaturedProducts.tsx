import React, { useState } from "react";
import { ShoppingBag, Check, X, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
    name: "Roasted Makhana",
    description: "Freshly roasted lotus seeds prepared with a commitment to crunch and freshness.",
    image: "https://m.media-amazon.com/images/I/71paW2uT-kL.jpg",
    benefits: ["Zero Preservatives", "Freshly Roasted", "Quality Ingredients"],
    weight: "100g",
    flavors: ["Mint Flavour", "Chatpata Masala", "Plain Salted", "Magic Masala"]
  },
  {
    id: "prod-2",
    name: "Energy Bar",
    description: "Naturally delicious snack bar made entirely from premium dry fruits.",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/6/DA/PX/HQ/64879238/dry-fruit-sweet-500x500.jpeg",
    benefits: ["Made from Dry Fruits", "Naturally Nutritious", "Zero Preservatives"],
    weight: "40g"
  },
  {
    id: "prod-3",
    name: "Premium Dry Fruit Mix",
    description: "A perfect premium blend of wholesome California almonds, whole cashews, and golden raisins.",
    image: "https://m.media-amazon.com/images/I/71m18e2dMAL._AC_UF894,1000_QL80_.jpg",
    benefits: ["Mamra Almonds", "Whole Cashews", "Golden Raisins"],
    weight: "150g"
  },
  {
    id: "prod-4",
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

  const handleBuy = (id: string, name: string) => {
    setAddingToCartId(id);
    const displayName = selectedFlavor && id === "prod-1" ? `${name} (${selectedFlavor})` : name;
    onAddToCart(displayName);
    setTimeout(() => {
      setAddingToCartId(null);
    }, 1200);
  };

  return (
    <section id="featured-products" className="py-16 px-6 sm:px-12 lg:px-24 bg-bg-primary select-none">
      <div className="max-w-[1400px] mx-auto text-center space-y-10">
        
        {/* Header */}
        <div className="space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
            Our Collection
          </h2>
          <p className="font-sans text-base sm:text-lg text-charcoal/70 max-w-xl mx-auto">
            Freshly crafted snacks made with quality ingredients and a commitment to freshness.
          </p>
        </div>

        {/* 4 Products Grid (Carousel on Mobile) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-none md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-8 text-left md:overflow-visible">
          {products.map((prod) => (
            <div 
              key={prod.id}
              className="group flex-[0_0_90%] sm:flex-[0_0_80%] md:flex-none snap-center bg-[#F7EFE5] rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-250 border border-gold-light/20 flex flex-col"
            >
              {/* Image Area - 70% visually */}
              <div className="relative h-64 sm:h-72 w-full bg-[#EBE3D5] overflow-hidden flex items-center justify-center cursor-pointer" onClick={() => setSelectedProduct(prod)}>
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-250"
                />
                
                {/* Product Pouch Representation (Secondary) */}
                <div className="absolute bottom-4 right-4 w-[25%] aspect-[3/4] bg-white rounded-xl shadow-lg border border-gold-light/20 flex flex-col items-center justify-center p-2 opacity-95">
                   <img src="/company-logo.png" alt="Bloom Pouch" className="w-8 h-8 object-contain opacity-50 mb-1" />
                   <div className="text-[6px] font-sans font-bold text-charcoal uppercase tracking-widest text-center">Bloom</div>
                   <div className="text-[5px] font-sans text-charcoal/60 uppercase tracking-widest text-center mt-1">{prod.name}</div>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col flex-grow bg-[#F7EFE5]">
                {/* Title & Desc */}
                <div className="mb-4">
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                    {prod.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed min-h-[40px]">
                    {prod.description}
                  </p>
                </div>
                
                {/* Benefits Row */}
                <div className="space-y-2 mb-6">
                  {prod.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-charcoal/80 font-medium text-xs">
                      <Check className="w-3.5 h-3.5 text-sage flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Bottom Details & Actions */}
                <div className="mt-auto">
                  {/* Weight */}
                  <div className="flex items-end justify-between mb-4 pb-4 border-b border-gold-light/35">
                    <div>
                      <span className="text-[9px] font-sans text-charcoal/50 uppercase tracking-wider block font-bold mb-0.5">Net Weight</span>
                      <span className="font-sans text-xs font-semibold text-charcoal">{prod.weight}</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-2.5">
                    <button
                      onClick={() => {
                        if (prod.flavors) {
                          setSelectedFlavor(prod.flavors[0]);
                        }
                        setSelectedProduct(prod);
                      }}
                      className="w-full py-3 border border-charcoal text-charcoal text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 hover:bg-charcoal hover:text-white"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button
                      onClick={() => handleBuy(prod.id, prod.name)}
                      disabled={addingToCartId !== null}
                      className="w-full py-3 bg-gold text-white hover:bg-[#D47E10] text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
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

        {/* Bottom Message */}
        <div className="pt-8 max-w-2xl mx-auto border-t border-gold-light/30">
          <p className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-2">
            More products coming soon.
          </p>
          <p className="font-sans text-charcoal/70 text-base">
            We're focused on perfecting every product before expanding our collection.
          </p>
        </div>
      </div>

      {/* Product Details Modal */}
      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/60 backdrop-blur-md p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-[#F7EFE5] rounded-[24px] max-w-4xl w-full max-h-[90vh] relative shadow-2xl flex flex-col overflow-hidden border border-gold-light/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button (Fixed relative to modal) */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-[70] text-charcoal bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white hover:scale-105 transition-all shadow-sm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Content Wrapper */}
              <div className="flex flex-col md:flex-row w-full h-full overflow-y-auto scrollbar-none">
                
                {/* Modal Image (Sticky on Desktop) */}
                <div className="w-full md:w-[45%] bg-[#EBE3D5] flex items-center justify-center p-8 min-h-[300px] sm:min-h-[350px] md:sticky md:top-0 h-auto md:h-[90vh]">
                  <motion.img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-full max-h-[400px] md:max-h-none object-cover rounded-2xl shadow-xl"
                  />
                </div>
                
                {/* Modal Content */}
                <div className="w-full md:w-[55%] p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-3xl sm:text-4xl text-charcoal mb-3">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-sans mb-8">
                      {selectedProduct.description}
                    </p>

                    {/* Flavors Selector if available */}
                    {selectedProduct.flavors && (
                      <div className="mb-8">
                        <span className="block text-[11px] text-charcoal/50 uppercase tracking-widest font-bold mb-3">Select Flavour</span>
                        <div className="flex flex-wrap gap-2.5">
                          {selectedProduct.flavors.map((flv) => (
                            <button
                              key={flv}
                              onClick={() => setSelectedFlavor(flv)}
                              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-sans font-bold transition-all border cursor-pointer ${
                                selectedFlavor === flv
                                  ? "bg-charcoal border-charcoal text-white shadow-md scale-105"
                                  : "bg-white border-gold-light/40 text-charcoal hover:border-charcoal/60 hover:bg-[#F2EFE9]"
                              }`}
                            >
                              {flv}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <h4 className="text-[11px] font-sans tracking-widest text-charcoal/50 uppercase font-bold mb-4">Highlights</h4>
                    <div className="space-y-3 mb-8">
                      {selectedProduct.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-charcoal/80">
                          <div className="w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-sage" />
                          </div>
                          {benefit}
                        </div>
                      ))}
                    </div>

                    <div className="bg-white/60 p-5 rounded-2xl border border-gold-light/20 mb-8">
                      <div className="grid grid-cols-2 gap-6 text-sm font-sans">
                        <div>
                          <span className="block text-[10px] text-charcoal/50 uppercase tracking-widest font-bold mb-2">Weight Options</span>
                          <span className="font-bold text-charcoal bg-white px-3 py-1.5 rounded-lg border border-gold-light/30 shadow-sm">{selectedProduct.weight}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] text-charcoal/50 uppercase tracking-widest font-bold mb-2">Ingredients</span>
                          <span className="font-semibold text-charcoal text-xs">Premium natural ingredients.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gold-light/30 flex items-center justify-between mt-4">
                    <div>
                      <span className="text-[10px] font-sans text-charcoal/50 uppercase block font-bold mb-1">Package</span>
                      <span className="text-base font-sans font-semibold text-charcoal">{selectedProduct.weight} pack</span>
                    </div>

                    <button
                      onClick={() => {
                        handleBuy(selectedProduct.id, selectedProduct.name);
                        setSelectedProduct(null);
                      }}
                      className="py-4 px-8 sm:px-10 bg-[#8B5A2B] hover:bg-[#6B4A32] text-white text-sm sm:text-base font-bold rounded-full shadow-lg transition-all flex items-center gap-3 cursor-pointer"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
