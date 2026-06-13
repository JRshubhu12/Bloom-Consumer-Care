import React from "react";
import { motion } from "motion/react";

export default function WomenEmpowerment() {
  const cards = [
    {
      icon: "🌸",
      title: "Respect & Dignity",
      desc: "We believe every individual deserves equal respect, recognition, and opportunity."
    },
    {
      icon: "🤝",
      title: "Inclusive Participation",
      desc: "Encouraging meaningful involvement and collaboration at every stage of growth."
    },
    {
      icon: "✨",
      title: "Shared Progress",
      desc: "Creating a future where growth and success are built together through trust and mutual support."
    }
  ];

  return (
    <section id="women-empowerment" className="py-16 px-6 sm:px-12 lg:px-24 bg-[#FAF8F5] relative overflow-hidden select-none">
      
      {/* Background Soft Accents & Elegant Lotus Illustration */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#E88D14]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#5C3A21]/3 blur-[120px] pointer-events-none" />

      {/* Decorative Elegant Lotus Illustration (SVG) */}
      <div className="absolute right-4 bottom-4 w-48 h-48 opacity-[0.04] pointer-events-none text-cocoa">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 15C50 15 42 32 42 45C42 58 50 65 50 65C50 65 58 58 58 45C58 32 50 15 50 15Z" />
          <path d="M50 25C50 25 32 37 32 50C32 63 45 68 45 68C45 68 48 57 48 50C48 43 50 25 50 25Z" opacity="0.8" />
          <path d="M50 25C50 25 68 37 68 50C68 63 55 68 55 68C55 68 52 57 52 50C52 43 50 25 50 25Z" opacity="0.8" />
          <path d="M50 38C50 38 22 47 22 60C22 73 40 73 40 73C40 73 43 62 45 57C47 52 50 38 50 38Z" opacity="0.6" />
          <path d="M50 38C50 38 78 47 78 60C78 73 60 73 60 73C60 73 57 62 55 57C53 52 50 38 50 38Z" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-medium bg-[#E88D14]/10 px-4 py-1.5 rounded-full border border-[#E88D14]/15 inline-block">
            Women Empowerment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal">
            Supporting Value & Opportunity
          </h2>
          <p className="font-sans text-charcoal/60 text-base sm:text-lg font-medium mt-4">
            Creating opportunities through participation, respect, and shared progress.
          </p>
          <div className="w-12 h-[1px] bg-gold mx-auto my-6" />
        </div>

        {/* Narrative Description Block */}
        <div className="max-w-3xl mx-auto mb-12 text-center space-y-6">
          <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
            At Bloom Consumer Care, we believe that meaningful change begins with opportunity.
          </p>
          <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
            We value the contribution, dedication, and strength of women who play an important role in families, communities, and society. Through responsible business practices and inclusive participation, we aim to encourage growth, confidence, and long-term empowerment.
          </p>
          <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
            Our vision is rooted in respect, dignity, and the belief that progress is strongest when everyone has the opportunity to move forward together.
          </p>
        </div>

        {/* Vision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left mb-12">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              className="bg-white border border-gold-light/20 p-8 rounded-2xl shadow-sm transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[240px]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{
                y: -4,
                borderColor: "rgba(232, 141, 20, 0.3)",
                boxShadow: "0 12px 24px rgba(92, 58, 33, 0.05)"
              }}
            >
              <div>
                <div className="text-3xl mb-5 transition-transform group-hover:scale-110 duration-300 inline-block">
                  {card.icon}
                </div>
                <h4 className="font-serif text-xl font-bold text-charcoal mb-3">
                  {card.title}
                </h4>
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote Banner */}
        <motion.div
          className="max-w-2xl mx-auto border-t border-b border-gold-light/30 py-8 px-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-serif text-lg sm:text-xl italic text-cocoa tracking-wide">
            "When women grow, communities grow stronger."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
