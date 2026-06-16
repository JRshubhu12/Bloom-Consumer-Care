import React, { useState, useEffect } from "react";
import { ArrowRight, Leaf, ShieldCheck, Heart, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroProps {
  onShopClick: () => void;
  onStoryClick: () => void;
}

interface CarouselItem {
  src: string;
  flavor: string;
  description: string;
}

const CAROUSEL_IMAGES: CarouselItem[] = [
  {
    src: "https://m.media-amazon.com/images/I/71paW2uT-kL.jpg",
    flavor: "Mint Flavour",
    description: "Fresh garden mint meets slow-roasted premium lotus seeds."
  },
  {
    src: "https://img1.exportersindia.com/product_images/bc-full/2025/10/14951820/chatpata-masala-makhana-1761546855-8402310.jpeg",
    flavor: "Chatpata Masala",
    description: "A tangy, appetizing blend of classic spices."
  },
  {
    src: "https://5.imimg.com/data5/SELLER/Default/2025/9/545694968/TX/LZ/SH/99605915/plain-salted-roasted-makhana.jpeg",
    flavor: "Plain Salted",
    description: "Crispy perfection finished with a touch of mineral rock salt."
  },
  {
    src: "https://cdn2.foodviva.com/static-content/food-images/snacks-recipes/roasted-makhana-masala/roasted-makhana-masala.jpg",
    flavor: "Magic Masala",
    description: "A premium aromatic blend of roasted makhana and magic spices."
  }
];

export default function Hero({ onShopClick, onStoryClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-bg-primary select-none"
    >
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side (Text & CTA) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left mt-10 lg:mt-0">
          
          {/* Top Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-leaf font-semibold bg-leaf/10 px-3 py-1 rounded-full border border-leaf/20">
              100% Natural • Farm Fresh
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2 mb-6">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-earth">
              Pure Goodness. <br />
              <span className="text-leaf italic">Naturally Crafted.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="font-sans text-base sm:text-lg text-earth/80 max-w-[500px] leading-relaxed mb-10">
            Made with carefully selected ingredients, crafted with care, and delivered with freshness.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
            <button 
              onClick={() => {
                const el = document.getElementById("featured-products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-leaf text-white text-sm sm:text-base rounded-xl flex items-center justify-center gap-3 shadow-md hover:shadow-lg font-semibold w-full sm:w-auto premium-btn cursor-pointer"
            >
              Explore Collection
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => {
                const el = document.getElementById("our-story");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 border border-leaf/30 text-earth text-sm sm:text-base rounded-xl bg-transparent hover:bg-leaf/5 hover:border-leaf transition-all duration-300 flex items-center justify-center gap-3 font-semibold w-full sm:w-auto premium-btn cursor-pointer"
            >
              Our Story
            </button>
          </div>

          {/* Trust Bar Features */}
          <div className="flex gap-x-6 gap-y-4 flex-wrap">
            <div className="flex items-center gap-3 bg-white/60 px-4 py-2.5 rounded-lg border border-[#EFE6D8]/80 premium-card feature-card shadow-xs group">
              <Leaf className="w-6 h-6 text-nature feature-icon" />
              <div className="flex flex-col relative z-10">
                <span className="text-earth font-bold text-sm leading-none mb-1">Natural</span>
                <span className="text-earth/60 text-[10px] uppercase font-bold tracking-wider">Ingredients</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/60 px-4 py-2.5 rounded-lg border border-[#EFE6D8]/80 premium-card feature-card shadow-xs group">
              <Heart className="w-6 h-6 text-[#E46B6B] feature-icon" />
              <div className="flex flex-col relative z-10">
                <span className="text-earth font-bold text-sm leading-none mb-1">Crafted</span>
                <span className="text-earth/60 text-[10px] uppercase font-bold tracking-wider">With Care</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/60 px-4 py-2.5 rounded-lg border border-[#EFE6D8]/80 premium-card feature-card shadow-xs group">
              <Sparkles className="w-6 h-6 text-leaf feature-icon" />
              <div className="flex flex-col relative z-10">
                <span className="text-earth font-bold text-sm leading-none mb-1">Premium</span>
                <span className="text-earth/60 text-[10px] uppercase font-bold tracking-wider">Quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Hero Food Photography Carousel) */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-cocoa/10 border-4 border-white group">
            
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {CAROUSEL_IMAGES.map((item, index) => (
                <img
                  key={index}
                  src={item.src}
                  alt={`Roasted Makhana - ${item.flavor}`}
                  className="w-full h-full object-cover shrink-0"
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              ))}
            </div>

            {/* Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 pt-16 flex flex-col justify-end text-left pointer-events-none select-none text-white z-10">
              <span className="text-[10px] font-mono tracking-widest text-[#E88D14] uppercase font-bold block mb-1">
                Roasted Makhana Collection
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                {CAROUSEL_IMAGES[currentSlide].flavor}
              </h3>
              <p className="font-sans text-xs text-white/80 mt-1 max-w-[85%] leading-relaxed">
                {CAROUSEL_IMAGES[currentSlide].description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white text-earth z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white text-earth z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots (Translucent Top-Right Pill) */}
            <div className="absolute top-6 right-6 flex gap-2 z-10 bg-black/30 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
              {CAROUSEL_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === index ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            {/* Soft inner shadow for depth */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none rounded-[2rem]" />
          </div>

          {/* Floating freshness badge */}
          <div className="absolute -bottom-6 -right-4 sm:bottom-8 sm:-right-8 bg-white p-4 rounded-2xl shadow-xl border border-leaf/20 flex items-center gap-4 transition-transform hover:-translate-y-1 z-20">
            <div className="w-12 h-12 bg-nature/10 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-nature" />
            </div>
            <div>
              <p className="font-bold text-earth text-sm">Freshly Roasted</p>
              <p className="text-xs text-earth/60">Sealed for crispness</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}