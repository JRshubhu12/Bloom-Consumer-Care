import React from "react";
import { Calendar } from "lucide-react";

export default function FounderTestimonials() {
  return (
    <section id="founder-reviews" className="py-16 bg-[#FAF8F5] relative overflow-hidden select-none">
      
      {/* Background soft blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[130px] pointer-events-none" />

      {/* THE BLOOM JOURNEY */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Chronology
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal">
            Our Journey
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
        </div>

        {/* Journey Card */}
        <div className="bg-white/80 border border-gold-light/20 rounded-3xl p-8 sm:p-12 text-left shadow-[0_12px_24px_rgba(107,74,50,0.015)] relative overflow-hidden max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6 text-[#C6A769]">
            <Calendar className="w-5 h-5" />
            <h4 className="font-serif text-2xl font-semibold text-charcoal">
              2026: The Beginning of Bloom
            </h4>
          </div>

          <div className="space-y-4 font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light mb-8">
            <p>
              Bloom Consumer Care was founded with a simple vision:
            </p>
            <p className="font-semibold text-charcoal text-lg">
              To create fresh, preservative-free snacks made with quality ingredients and a commitment to better everyday snacking.
            </p>
            <p>
              Inspired by the growing demand for healthier food choices, Bloom began its journey with carefully crafted roasted makhana and wholesome snack blends designed for modern families.
            </p>
            <p>
              Every product reflects our focus on freshness, quality, transparency, and customer trust.
            </p>
          </div>

          {/* Elegant bottom highlight */}
          <div className="border-t border-gold-light/20 pt-8 text-center space-y-1">
            <span className="font-serif text-lg sm:text-xl italic text-cocoa/90 tracking-wide block">
              Purely Natural.
            </span>
            <span className="font-serif text-lg sm:text-xl italic text-cocoa/90 tracking-wide block">
              Zero Preservatives.
            </span>
            <span className="font-serif text-lg sm:text-xl italic text-cocoa/90 tracking-wide block">
              Crafted With Care.
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
