import React, { useState } from "react";
import { ShoppingBag, Check, X, Eye } from "lucide-react";

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
  price: number;
}

const products: Product[] = [
  {
    id: "prod-1",
    name: "Roasted Makhana",
    description: "Light and crunchy roasted fox nuts crafted for healthy everyday snacking.",
    image: "/makhana.png",
    benefits: ["Zero Preservatives", "Freshly Roasted", "Light & Crunchy"],
    weight: "100g",
    price: 149,
  },
  {
    id: "prod-2",
    name: "Dry Fruit Mix",
    description: "A wholesome blend of premium almonds, cashews, and raisins.",
    image: "/almonds.png",
    benefits: ["Quality Ingredients", "Naturally Nutritious", "Freshly Packed"],
    weight: "100g",
    price: 249,
  },
  {
    id: "prod-3",
    name: "Healthy Namkeen",
    description: "Traditional savory snacks prepared with a focus on taste and quality.",
    image: "/cashews.png",
    benefits: ["Crispy & Flavorful", "Made With Care", "Quality Focused"],
    weight: "100g",
    price: 129,
  }
];

export default function FeaturedProducts({ onAddToCart }: FeaturedProductsProps) {
  const [addingToCartId, setAddingToCartId] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleBuy = (id: string, name: string) => {
    setAddingToCartId(id);
    onAddToCart(name);
    setTimeout(() => {
      setAddingToCartId(null);
    }, 1200);
  };

  return (
    <section id="featured-products" className="py-24 px-6 sm:px-12 lg:px-24 bg-bg-primary select-none">
      <div className="max-w-[1400px] mx-auto text-center space-y-16">
        
        {/* Header */}
        <div className="space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
            Our Collection
          </h2>
          <p className="font-sans text-base sm:text-lg text-charcoal/70 max-w-xl mx-auto">
            Freshly crafted snacks made with quality ingredients and a commitment to freshness.
          </p>
        </div>

        {/* 3 Products Grid (Carousel on Mobile) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-none md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-12 text-left md:overflow-visible">
          {products.map((prod) => (
            <div 
              key={prod.id}
              className="group flex-[0_0_90%] sm:flex-[0_0_80%] md:flex-none snap-center bg-[#F7EFE5] rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-250 border border-gold-light/20 flex flex-col"
            >
              {/* Image Area - 70% visually */}
              <div className="relative h-64 sm:h-72 lg:h-80 w-full bg-[#EBE3D5] overflow-hidden flex items-center justify-center cursor-pointer" onClick={() => setSelectedProduct(prod)}>
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
              <div className="p-6 sm:p-8 flex flex-col flex-grow bg-[#F7EFE5]">
                {/* Title & Desc */}
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                    {prod.name}
                  </h3>
                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                    {prod.description}
                  </p>
                </div>
                
                {/* Benefits Row */}
                <div className="space-y-2 mb-8">
                  {prod.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-charcoal/80 font-medium text-sm">
                      <Check className="w-4 h-4 text-sage flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Bottom Details & Actions */}
                <div className="mt-auto">
                  {/* Price & Weight */}
                  <div className="flex items-end justify-between mb-6 pb-6 border-b border-gold-light/30">
                    <div>
                      <span className="text-[10px] font-sans text-charcoal/50 uppercase tracking-wider block font-bold mb-1">Net Weight</span>
                      <span className="font-sans text-sm font-semibold text-charcoal">{prod.weight}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-sans text-charcoal/50 uppercase tracking-wider block font-bold mb-1">Price</span>
                      <strong className="text-2xl font-serif font-bold text-gold">₹{prod.price}</strong>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="w-full py-3.5 border-2 border-charcoal text-charcoal font-bold rounded-xl transition-colors flex items-center justify-center gap-2 group-hover:bg-charcoal group-hover:text-white"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button
                      onClick={() => handleBuy(prod.id, prod.name)}
                      disabled={addingToCartId !== null}
                      className="w-full py-3.5 bg-gold text-white hover:bg-[#D47E10] font-bold rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
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
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/60 backdrop-blur-sm p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-[#F7EFE5] rounded-[24px] max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 text-charcoal/50 hover:text-charcoal bg-white/50 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-1/2 bg-[#EBE3D5] flex items-center justify-center p-8 min-h-[300px]">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>
            
            {/* Modal Content */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-3xl text-charcoal mb-2">
                  {selectedProduct.name}
                </h3>
                <p className="text-sm text-charcoal/80 leading-relaxed font-sans mb-6">
                  {selectedProduct.description}
                </p>

                <h4 className="text-[11px] font-sans tracking-widest text-charcoal/50 uppercase font-bold mb-3">Highlights</h4>
                <div className="space-y-2 mb-6">
                  {selectedProduct.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-charcoal/80">
                      <Check className="w-4 h-4 text-sage" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <div className="bg-white/50 p-4 rounded-xl border border-gold-light/30 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm font-sans">
                    <div>
                      <span className="block text-[10px] text-charcoal/60 uppercase tracking-widest font-bold mb-1">Weight Options</span>
                      <span className="font-bold text-charcoal bg-white px-2 py-1 rounded border border-gold-light/40">{selectedProduct.weight}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-charcoal/60 uppercase tracking-widest font-bold mb-1">Ingredients</span>
                      <span className="font-semibold text-charcoal text-xs">Premium natural ingredients.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gold-light/40 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] font-sans text-charcoal/50 uppercase block font-bold">Total Price</span>
                  <strong className="text-3xl font-serif font-bold text-gold">₹{selectedProduct.price}</strong>
                </div>

                <button
                  onClick={() => {
                    handleBuy(selectedProduct.id, selectedProduct.name);
                    setSelectedProduct(null);
                  }}
                  className="py-4 px-6 sm:px-8 bg-gold hover:bg-[#D47E10] text-white text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
