import { m } from "motion/react";
import { Flame, Package, Store, Sparkles } from "lucide-react";

export default function WhatsComingNext() {
  const cards = [
    {
      id: "flavours",
      icon: Flame,
      iconEmoji: "🌶️",
      title: "New Flavours",
      description: "Exciting makhana flavours inspired by Indian tastes and preferences.",
      status: "Coming Soon",
      color: "from-orange-50 to-amber-50/20"
    },
    {
      id: "packaging",
      icon: Package,
      iconEmoji: "🎁",
      title: "Premium Packaging",
      description: "Enhanced packaging designed to preserve freshness and improve the unboxing experience.",
      status: "In Development",
      color: "from-amber-50 to-yellow-50/20"
    },
    {
      id: "availability",
      icon: Store,
      iconEmoji: "🏪",
      title: "Wider Availability",
      description: "Expanding product availability through retail stores and new distribution channels.",
      status: "Future Expansion",
      color: "from-emerald-50 to-teal-50/20"
    },
    {
      id: "collections",
      icon: Sparkles,
      iconEmoji: "✨",
      title: "More Product Collections",
      description: "Exploring additional healthy snack options to complement the Bloom range.",
      status: "Future Collection",
      color: "from-purple-50 to-pink-50/20"
    }
  ];

  return (
    <section id="whats-next" className="py-24 px-6 sm:px-12 lg:px-24 bg-bg-primary relative overflow-hidden select-none">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-leaf font-bold">
            Roadmap
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-earth">
            What's Coming Next
          </h2>
          <div className="w-12 h-[2px] bg-leaf mx-auto" />
          <p className="font-sans text-earth/80 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            We're continuously improving our products, packaging, and customer experience to bring better snacking to more people.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 max-w-4xl mx-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <m.div
                key={card.id}
                className="bg-white rounded-3xl p-8 flex flex-col justify-between text-left relative overflow-hidden min-h-[220px] premium-card feature-card border border-[#EFE6D8]/80"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="space-y-4">
                  {/* Icon & Emoji Row */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-leaf/10 border border-leaf/10 flex items-center justify-center text-xl feature-icon">
                      <Icon className="w-6 h-6 text-leaf stroke-[2]" />
                    </div>
                    
                    {/* Status Pill */}
                    <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-leaf bg-leaf/10 px-3 py-1.5 rounded-full">
                      {card.status}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-2 relative z-10">
                    <h3 className="font-serif text-2xl font-bold text-earth flex items-center gap-2">
                      <span className="text-xl">{card.iconEmoji}</span>
                      <span>{card.title}</span>
                    </h3>
                    <p className="font-sans text-sm text-earth/70 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="py-12 border-t border-leaf/30 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl italic font-normal text-cocoa tracking-tight leading-relaxed">
            Crafted Today. <br className="sm:hidden" />
            <span className="font-bold not-italic text-earth ml-2 sm:ml-3">Growing Tomorrow.</span>
          </h3>
        </div>

      </div>
    </section>
  );
}
