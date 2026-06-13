import { motion } from "motion/react";
import { Sprout, Award, Sparkles, Heart } from "lucide-react";

export default function OurImpact() {
  const promises = [
    {
      id: "preservative-free",
      title: "Preservative-Free",
      icon: Sprout,
      description: "No unnecessary preservatives. Just simple, quality ingredients."
    },
    {
      id: "quality-ingredients",
      title: "Quality Ingredients",
      icon: Award,
      description: "Carefully selected ingredients chosen for taste and nutrition."
    },
    {
      id: "freshly-crafted",
      title: "Freshly Crafted",
      icon: Sparkles,
      description: "Prepared in small batches to maintain freshness and flavor."
    },
    {
      id: "built-on-trust",
      title: "Built On Trust",
      icon: Heart,
      description: "Committed to transparency, quality, and customer satisfaction."
    }
  ];

  return (
    <section id="our-promise" className="py-24 px-6 sm:px-12 lg:px-24 bg-bg-secondary relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Core section copy and luxury tagline */}
        <div className="max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-bold">
            Our Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal tracking-tight lg:leading-tight">
            Simple ingredients. <br />
            <span className="italic font-normal text-cocoa">Honest snacking. Freshly crafted.</span>
          </h2>
          <div className="w-12 h-[2px] bg-gold mx-auto" />
          <p className="font-sans text-charcoal/80 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            At Bloom Consumer Care, we believe healthy snacks should be transparent, delicious, and made with care. Our commitment is to provide preservative-free products crafted with quality ingredients and a focus on freshness, nutrition, and trust.
          </p>
        </div>

        {/* 4 Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((promise, idx) => {
            const Icon = promise.icon;
            return (
              <motion.div
                key={promise.id}
                className="bg-white border-2 border-gold-light/30 rounded-[2rem] p-8 transition-all duration-300 flex flex-col items-center justify-start text-center relative group shadow-sm min-h-[260px]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ 
                  y: -4, 
                  boxShadow: "0 15px 30px -10px rgba(92, 58, 33, 0.1)",
                  borderColor: "rgba(232, 141, 20, 0.4)" 
                }}
              >
                {/* Icon wrapper inside gold base */}
                <div className="p-4 rounded-full bg-gold/10 text-gold group-hover:scale-105 group-hover:bg-gold group-hover:text-white transition-all duration-300 relative z-10">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Subtitle Label */}
                <h3 className="font-serif text-xl text-charcoal font-bold mt-6 relative z-10">
                  {promise.title}
                </h3>

                {/* Description summary */}
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed mt-3 relative z-10">
                  {promise.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
