import { useState } from "react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";
import { Quote, Sparkles, Award, Star, ArrowRight, HeartHandshake, Eye } from "lucide-react";

export default function FounderTestimonials() {
  const [activeTimelineYear, setActiveTimelineYear] = useState<string>("2026 (Q1)");

  const timelineYears = [
    { year: "2026 (Q1)", title: "The Wetland Sabbatical", desc: "Founder resides in Mithila, studying water lily poppy cultivation standards and forming direct ties with 10 female household heads." },
    { year: "2026 (Q2)", title: "Empowerment Seed Cluster 01", desc: "Constructing our first eco-roasting plant. Integrating 100 women with high salary cards, providing banking accounts and health camps." },
    { year: "2026 (Q3)", title: "Flagship Canister launch", desc: "Introducing the flagship premium Himalayan Salt and Saffron Royal lines into premium gourmet spaces, supporting 500 women." },
    { year: "2026 (Q4)", title: "The ₹100 Crore Restoration", desc: "Aiming to build a nationwide organic brand to fully fund village colleges and modern solar drying beds across Bihar." }
  ];

  const currentTimeline = timelineYears.find((t) => t.year === activeTimelineYear) || timelineYears[0];

  return (
    <section id="founder-reviews" className="py-24 bg-bg-primary relative overflow-hidden">
      
      {/* Absolute visual elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      {/* INFINITE CAROUSEL TESTIMONIALS (First sub-block) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 mb-24">
        
        {/* Carousel Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-medium">Customer & Artisan Whispers</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-charcoal">Voice of the Circle</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
        </div>

        {/* Outer continuous container carousel */}
        <div className="relative w-full overflow-hidden select-none py-4">
          
          {/* Mask gradients at the edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

          {/* Scrolling tape wrapper */}
          <div className="flex animate-infinite-scroll gap-6">
            
            {/* Array duplicated twice for perfect infinite cycle wraps */}
            {[...TESTIMONIALS, ...TESTIMONIALS].map((test, idx) => (
              <div
                key={`${test.id}-${idx}`}
                className="w-[280px] sm:w-[350px] bg-white border border-gold-light/25 rounded-2xl p-6 flex flex-col justify-between shrink-0 hover:border-gold transition-colors shadow-[0_10px_25px_-5px_rgba(107,74,50,0.03)] text-left"
              >
                <div className="space-y-4">
                  {/* Stars indicators */}
                  <div className="flex items-center gap-1.5 text-gold">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-gold" />
                    ))}
                    <span className="font-mono text-[9px] text-charcoal/50 uppercase tracking-widest font-bold ml-1">
                      {test.empowermentNote}
                    </span>
                  </div>

                  <p className="font-serif text-charcoal/85 text-xs sm:text-sm leading-relaxed font-light italic">
                    "{test.text}"
                  </p>
                </div>

                <div className="border-t border-gold-light/20 pt-4 mt-6 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <strong className="font-serif text-cocoa font-semibold block">{test.name}</strong>
                    <span className="font-sans text-[10px] text-charcoal/50 leading-none">{test.role}</span>
                  </div>
                  <span className="font-mono text-[9px] uppercase font-bold text-sage bg-sage/5 px-2.5 py-1 rounded-full border border-sage/10">
                    {test.location.split(",")[0]}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* FOUNDER SECTION & TIMELINE INDEX (Second sub-block) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Panel: Founder Visual Portrait with social goals */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-white border border-gold-light/35 rounded-3xl p-8 shadow-[0_20px_50px_rgba(107,74,50,0.06)] relative text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
              
              {/* Symmetrical border frames */}
              <div className="absolute inset-2.5 border border-gold-light/20 rounded-[20px] pointer-events-none" />

              <div className="space-y-6 relative z-10">
                
                {/* Simulated portrait vector profile styling */}
                <div className="relative w-full h-64 bg-bg-secondary rounded-2xl flex flex-col items-center justify-center border border-gold/15 overflow-hidden shadow-inner select-none">
                  <img
                    src="https://i.ibb.co/JWM9tdJx/Screenshot-2026-06-13-00-04-10.png"
                    alt="Shiwani Narayan"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-xs border border-gold/20 p-3 rounded-xl text-center shadow-md">
                    <h4 className="font-serif text-sm font-semibold text-cocoa">Shiwani Narayan</h4>
                    <span className="font-mono text-[8px] tracking-widest text-[#4B3425] uppercase block mt-1 font-bold">Founder, Bloom Consumer Care</span>
                  </div>
                </div>

                {/* Portrait Sub Copy */}
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gold font-bold block">Founder Biography</span>
                  <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light">
                    Shiwani Narayan holds a BA/MA/MCA and has worked as a financial consultant at HDFC Life (2022–2026), where she gained experience serving lower-income groups by providing tailored insurance solutions. She brings strong business acumen and a passion for social impact to Bloom Consumer Care.
                  </p>
                </div>

                <div className="border-t border-gold-light/20 pt-4 flex items-center gap-3">
                  <div className="p-2 rounded bg-bg-primary text-gold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-xs font-semibold text-charcoal">₹100 Cr Village Return Pledge</h5>
                    <span className="font-sans text-[10px] text-charcoal/50 font-light block">Directing wholesale margins to sponsor local female education.</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Panel: Story Timeline Stepper */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-semibold">The Growth Saga</span>
              <h3 className="font-serif text-3xl font-medium tracking-tight text-charcoal leading-snug">
                From Wetland Study to <br />
                <span className="italic font-normal text-cocoa">Nationwide Organic Rehabilitation</span>
              </h3>
              <div className="w-12 h-[2px] bg-cocoa mt-2" />
            </div>

            {/* Timesteping list */}
            <div className="space-y-4">
              <div className="flex gap-2">
                {timelineYears.map((t) => (
                  <button
                    key={t.year}
                    onClick={() => setActiveTimelineYear(t.year)}
                    className={`px-4 py-2 rounded-lg font-mono text-xs transition-all duration-350 border ${
                      t.year === activeTimelineYear
                        ? "bg-cocoa border-gold text-bg-primary font-bold shadow-sm"
                        : "bg-white border-gold-light/25 text-charcoal/65 hover:border-gold"
                    }`}
                  >
                    {t.year}
                  </button>
                ))}
              </div>

              {/* Display card representing active year */}
              <div className="bg-bg-secondary/40 border border-gold-light/30 rounded-2xl p-6 min-h-[160px] flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    <h4 className="font-serif text-base sm:text-lg font-semibold text-charcoal">
                      {currentTimeline.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                    {currentTimeline.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 mt-4 text-[10px] text-gold uppercase tracking-wider font-mono font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Sovereign Standard Locked</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
