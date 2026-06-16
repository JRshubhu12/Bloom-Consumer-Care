import { m } from "motion/react";
import { Calendar } from "lucide-react";

export default function FounderTestimonials() {
  return (
    <section id="founder-reviews" className="py-24 bg-bg-secondary relative overflow-hidden select-none">
      
      {/* Background soft blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-leaf/5 blur-[130px] pointer-events-none" />

      {/* THE BLOOM JOURNEY */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-leaf font-bold">
            Chronology
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-earth">
            Our Journey
          </h2>
          <div className="w-12 h-[1px] bg-leaf/40 mx-auto" />
        </div>

        {/* Journey Card */}
        <m.div 
          className="bg-white/80 border border-[#EFE6D8]/80 rounded-3xl p-8 sm:p-12 text-left relative overflow-hidden max-w-3xl mx-auto backdrop-blur-md premium-card feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-6 text-leaf feature-icon">
            <Calendar className="w-5 h-5" />
            <h4 className="font-serif text-2xl font-semibold text-earth">
              2026: The Beginning of Bloom
            </h4>
          </div>

          <div className="space-y-4 font-sans text-sm sm:text-base text-earth/80 leading-relaxed font-light mb-8">
            <p>
              Bloom Purely Natural was founded with a simple vision:
            </p>
            <p className="font-semibold text-earth text-lg">
              To create fresh, preservative-free foods made with quality ingredients and a commitment to better everyday living.
            </p>
            <p>
              Inspired by the growing demand for natural food choices, Bloom began its journey with carefully crafted roasted makhana and wholesome snack blends designed for modern families.
            </p>
            <p>
              Every product reflects our focus on freshness, quality, transparency, and customer trust.
            </p>
          </div>

          {/* Elegant bottom highlight */}
          <div className="border-t border-leaf/20 pt-8 text-center space-y-1">
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
        </m.div>

      </div>

    </section>
  );
}
