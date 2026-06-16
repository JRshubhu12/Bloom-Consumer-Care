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
    <section id="our-promise" className="py-16 px-6 sm:px-12 lg:px-24 bg-bg-secondary relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Core section copy and luxury tagline */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-leaf font-bold">
            Our Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-earth tracking-tight lg:leading-tight">
            Simple ingredients. <br />
            <span className="italic font-normal text-cocoa">Honest snacking. Freshly crafted.</span>
          </h2>
          <div className="w-12 h-[2px] bg-leaf mx-auto" />
          <p className="font-sans text-earth/80 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            At Bloom Purely Natural, we believe healthy snacks should be transparent, delicious, and made with care. Our commitment is to provide preservative-free products crafted with quality ingredients and a focus on freshness, nutrition, and trust.
          </p>
        </div>

        {/* 4 Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((promise, idx) => {
            const Icon = promise.icon;
            return (
              <motion.div
                key={promise.id}
                className="bg-white rounded-[2rem] p-8 flex flex-col items-center justify-start text-center relative group premium-card feature-card min-h-[260px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Icon wrapper inside leaf base */}
                <div className="p-4 rounded-full bg-leaf/10 text-leaf transition-colors duration-300 relative z-10 feature-icon">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Subtitle Label */}
                <h3 className="font-serif text-xl text-earth font-bold mt-6 relative z-10">
                  {promise.title}
                </h3>

                {/* Description summary */}
                <p className="font-sans text-sm text-earth/70 leading-relaxed mt-3 relative z-10">
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
