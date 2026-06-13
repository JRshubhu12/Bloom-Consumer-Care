import React, { useState, useEffect } from "react";
import { ArrowRight, Leaf, ShieldCheck, Heart, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroProps {
  onShopClick: () => void;
  onStoryClick: () => void;
}

const CAROUSEL_IMAGES = [
  "/makhana.png",
  "/almonds.png",
  "/cashews.png",
  "/raisins.png",
];

export default function Hero({ onShopClick, onStoryClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
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
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gold font-semibold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
              100% Natural • Zero Preservatives
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2 mb-6">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-charcoal">
              Healthy Snacking. <br />
              <span className="text-gold italic">Honestly Delicious.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="font-sans text-base sm:text-lg text-charcoal/80 max-w-[500px] leading-relaxed mb-10">
            Premium roasted makhana, cashews, almonds, and dried fruits. Handcrafted with care using natural ingredients and small-batch freshness for your everyday wellness.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
            <button 
              onClick={() => {
                const el = document.getElementById("featured-products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-gold text-white text-sm sm:text-base rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 font-semibold w-full sm:w-auto"
            >
              Shop Products
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => {
                const el = document.getElementById("about-story");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 border-2 border-gold/30 text-charcoal text-sm sm:text-base rounded-xl bg-transparent hover:bg-gold/5 hover:border-gold transition-all duration-300 flex items-center justify-center gap-3 font-semibold w-full sm:w-auto"
            >
              Explore Collection
            </button>
          </div>

          {/* Trust Bar Features */}
          <div className="flex gap-x-6 gap-y-4 flex-wrap">
            <div className="flex items-center gap-3 bg-white/60 px-4 py-2.5 rounded-lg border border-gold-light/20 shadow-sm">
              <Leaf className="w-6 h-6 text-sage" />
              <div className="flex flex-col">
                <span className="text-charcoal font-bold text-sm leading-none mb-1">Natural</span>
                <span className="text-charcoal/60 text-[10px] uppercase font-bold tracking-wider">Ingredients</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/60 px-4 py-2.5 rounded-lg border border-gold-light/20 shadow-sm">
              <Heart className="w-6 h-6 text-[#E46B6B]" />
              <div className="flex flex-col">
                <span className="text-charcoal font-bold text-sm leading-none mb-1">Crafted</span>
                <span className="text-charcoal/60 text-[10px] uppercase font-bold tracking-wider">With Care</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/60 px-4 py-2.5 rounded-lg border border-gold-light/20 shadow-sm">
              <Sparkles className="w-6 h-6 text-gold" />
              <div className="flex flex-col">
                <span className="text-charcoal font-bold text-sm leading-none mb-1">Premium</span>
                <span className="text-charcoal/60 text-[10px] uppercase font-bold tracking-wider">Quality</span>
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
              {CAROUSEL_IMAGES.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Premium healthy snack - ${index + 1}`}
                  className="w-full h-full object-cover shrink-0"
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white text-charcoal"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white text-charcoal"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {CAROUSEL_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>

            {/* Soft inner shadow for depth */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none rounded-[2rem]" />
          </div>

          {/* Floating freshness badge */}
          <div className="absolute -bottom-6 -left-6 sm:bottom-10 sm:-left-10 bg-white p-4 rounded-2xl shadow-xl border border-gold/20 flex items-center gap-4 transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-sage" />
            </div>
            <div>
              <p className="font-bold text-charcoal text-sm">Freshly Roasted</p>
              <p className="text-xs text-charcoal/60">Sealed for crispness</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}