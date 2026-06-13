import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Sparkles, Calendar, ChevronRight, Award } from "lucide-react";

export default function FounderTestimonials() {
  const [activeTab, setActiveTab] = useState<"2026" | "future">("2026");

  const timelineData = {
    "2026": {
      title: "The Beginning of Bloom",
      content: "Bloom Consumer Care was founded with a simple vision: to create fresh, preservative-free snacks made with quality ingredients and a commitment to better everyday snacking. Inspired by the growing demand for healthier food choices, Bloom began its journey with carefully crafted roasted makhana and wholesome snack blends designed for modern families. Every product reflects our focus on freshness, quality, transparency, and customer trust. This is only the beginning of our journey as we continue building a brand dedicated to better snacking experiences.",
      quote: "Purely Natural. Zero Preservatives. Crafted With Care."
    },
    "future": {
      title: "Growing Responsibly",
      content: "Expanding product offerings, improving packaging, and increasing availability while maintaining the brand's commitment to quality and freshness.",
      quote: "Crafted With Care. Growing With Purpose."
    }
  };

  return (
    <section id="founder-reviews" className="py-24 bg-[#FAF8F5] relative overflow-hidden select-none">
      
      {/* Background soft blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[130px] pointer-events-none" />

      {/* 1. MEET THE FOUNDER SECTION */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 mb-28">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Leadership
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal">
            Meet The Founder
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
        </div>

        {/* Founder Row Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Panel: Luxury Frame with Founder Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-white border border-[#C6A769]/20 rounded-3xl p-6 shadow-[0_15px_40px_rgba(107,74,50,0.03)] relative max-w-sm w-full">
              <div className="absolute inset-3 border border-[#C6A769]/10 rounded-2xl pointer-events-none" />
              
              <div className="relative w-full h-80 bg-[#FCFBF8] rounded-2xl border border-[#C6A769]/10 overflow-hidden shadow-inner">
                <img
                  src="https://i.ibb.co/JWM9tdJx/Screenshot-2026-06-13-00-04-10.png"
                  alt="Shiwani Narayan"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="text-center mt-5">
                <h4 className="font-serif text-lg font-semibold text-charcoal leading-none">Shiwani Narayan</h4>
                <span className="font-mono text-[9px] tracking-widest text-[#C6A769] uppercase font-bold block mt-1.5">
                  Founder, Bloom Consumer Care
                </span>
              </div>
            </div>
          </div>

          {/* Right Panel: Biography and Vision */}
          <div className="lg:col-span-7 text-left space-y-8">
            <div className="space-y-4">
              <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light">
                Shiwani Narayan holds a BA, MA, and MCA and brings experience from the financial services sector, where she worked as a Financial Consultant at HDFC Life.
              </p>
              <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light">
                Her professional journey helped her understand the importance of trust, quality, and long-term customer relationships. Inspired by the growing demand for healthier food choices, she founded Bloom Consumer Care with a vision to create preservative-free snacks that combine freshness, quality ingredients, and honest food practices.
              </p>
              <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light">
                Today, Bloom Consumer Care focuses on delivering better snacking experiences through carefully crafted products designed for modern households.
              </p>
            </div>

            {/* Vision Callout Box */}
            <div className="bg-white/60 border-l-2 border-[#C6A769] p-6 rounded-r-2xl shadow-[0_8px_20px_rgba(107,74,50,0.01)] relative">
              <Quote className="w-8 h-8 text-[#C6A769]/15 absolute -top-3 left-4" />
              <p className="font-serif text-base italic text-cocoa leading-relaxed relative z-10">
                "Our goal is simple — to create snacks that people can enjoy with confidence, knowing they are made with quality ingredients and a commitment to freshness."
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 2. THE BLOOM JOURNEY TIMELINE */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 border-t border-[#C6A769]/15 pt-20">
        
        {/* Timeline Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Chronology
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-charcoal">
            The Bloom Journey
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("2026")}
            className={`px-6 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 border ${
              activeTab === "2026"
                ? "bg-[#452B18] border-[#452B18] text-white font-semibold shadow-md"
                : "bg-white border-[#C6A769]/20 text-charcoal/70 hover:border-[#C6A769]/60"
            }`}
          >
            2026
          </button>
          <button
            onClick={() => setActiveTab("future")}
            className={`px-6 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 border ${
              activeTab === "future"
                ? "bg-[#452B18] border-[#452B18] text-white font-semibold shadow-md"
                : "bg-white border-[#C6A769]/20 text-charcoal/70 hover:border-[#C6A769]/60"
            }`}
          >
            Future
          </button>
        </div>

        {/* Timeline Display Card */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 border border-[#C6A769]/15 rounded-3xl p-8 sm:p-10 text-left shadow-[0_12px_24px_rgba(107,74,50,0.015)] relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4 text-[#C6A769]">
                <Calendar className="w-5 h-5" />
                <h4 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal">
                  {timelineData[activeTab].title}
                </h4>
              </div>

              <p className="font-sans text-sm sm:text-base text-charcoal/75 leading-relaxed font-light mb-8">
                {timelineData[activeTab].content}
              </p>

              {/* Elegant quote highlight */}
              <div className="border-t border-[#C6A769]/15 pt-6 text-center">
                <span className="font-serif text-lg sm:text-xl italic text-cocoa/90 tracking-wide block">
                  {timelineData[activeTab].quote}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Statement */}
        <div className="text-center pt-24 pb-12">
          <h3 className="font-serif text-xl sm:text-2xl italic font-normal text-cocoa/90 tracking-tight leading-relaxed">
            Crafted With Care. <br className="sm:hidden" />
            <span className="font-medium not-italic text-charcoal ml-2 sm:ml-3">Growing With Purpose.</span>
          </h3>
        </div>

      </div>

    </section>
  );
}
