import { m } from "motion/react";
import { Leaf, Sprout, ShieldCheck, Sparkles, Wheat, Heart } from "lucide-react";

interface WhyCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  bulletPoints: string[];
}

export default function WhyBloom() {
  const cards: WhyCard[] = [
    {
      id: "natural",
      title: "Natural Ingredients",
      subtitle: "Pure & Organic",
      description: "Sourced directly from nature. We ensure every ingredient retains its natural goodness, vitamins, and authentic taste without any chemical processing.",
      icon: Leaf,
      bulletPoints: ["100% Organic Sourcing", "Rich in Nutrients", "Pure Ingredients"]
    },
    {
      id: "freshly-packed",
      title: "Freshly Packed",
      subtitle: "Sealed for Crispness",
      description: "Our ingredients are freshly packed straight from the farm to lock in aroma, texture, and the wholesome goodness of nature.",
      icon: Sprout,
      bulletPoints: ["Small Batch Packing", "Aroma Lock Technology", "Farm to Home"]
    },
    {
      id: "premium-quality",
      title: "Premium Quality",
      subtitle: "Handpicked Excellence",
      description: "We hold ourselves to the highest standards. Only the finest, most perfect grains, nuts, and spices make it into our premium collections.",
      icon: Sparkles,
      bulletPoints: ["Imperial Grade Sizing", "Careful Selection", "Uncompromised Quality"]
    },
    {
      id: "no-preservatives",
      title: "No Artificial Preservatives",
      subtitle: "100% Clean Label",
      description: "We refuse to include artificial chemicals, colors, or synthetic shelf-life extenders. What you eat is simply what nature created.",
      icon: ShieldCheck,
      bulletPoints: ["Zero Chemicals", "No Artificial Colors", "Clean Ingredients"]
    },
    {
      id: "farm-inspired",
      title: "Farm Inspired",
      subtitle: "Rooted in Tradition",
      description: "Our recipes and preparation methods are inspired by traditional farming practices that respect the earth and celebrate natural flavors.",
      icon: Wheat,
      bulletPoints: ["Traditional Methods", "Sustainable Farming", "Earthy Flavors"]
    },
    {
      id: "trusted-care",
      title: "Trusted Care",
      subtitle: "From Our Family to Yours",
      description: "Every step of our process is managed with care and transparency, ensuring you can trust every product that bears the Bloom name.",
      icon: Heart,
      bulletPoints: ["100% Transparency", "Community Driven", "Family Values"]
    }
  ];

  return (
    <section id="why-bloom" className="py-24 px-6 sm:px-12 lg:px-24 bg-bg-primary relative overflow-hidden">
      
      {/* Premium backdrop glow ambient light effect */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-leaf/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-[350px] h-[350px] rounded-full bg-nature/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Core title and subtitle */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-leaf font-medium">
            Our Commitment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-earth">
            Why Choose <br />
            <span className="italic font-normal text-cocoa">Bloom Purely Natural</span>
          </h2>
          <div className="w-12 h-[1px] bg-leaf mx-auto" />
          <p className="font-sans text-earth/80 max-w-lg mx-auto font-light leading-relaxed text-sm sm:text-base">
            We hold ourselves to a level of detail that redefines the standards of premium organic food crafting, ensuring every product honors your trust.
          </p>
        </div>

        {/* 6 Luxury Glassmorphic Cards with 3D hover translations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const CardIcon = card.icon;
            return (
              <m.div
                key={card.id}
                className="group relative bg-white rounded-2xl border border-[#EFE6D8]/80 p-8 lg:p-10 flex flex-col justify-between text-left premium-card feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Floating soft green background light bubble */}
                <span className="absolute inset-x-12 top-12 bottom-12 bg-leaf/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Top card header */}
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    {/* Outline icon inside simple nature base */}
                    <div className="p-3.5 rounded-xl bg-bg-primary border border-leaf/30 text-leaf group-hover:bg-leaf group-hover:text-white transition-colors duration-300 shadow-xs feature-icon">
                      <CardIcon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-leaf font-bold">
                      {card.subtitle}
                    </span>
                    <h3 className="font-serif text-xl lg:text-2xl font-medium text-earth">
                      {card.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-earth/80 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                {/* Micro premium bullet highlights inside the card */}
                <div className="border-t border-leaf/20 pt-6 mt-8 relative z-10">
                  <ul className="flex flex-col gap-2 text-[11px] font-sans font-medium text-earth/70 uppercase tracking-wide">
                    {card.bulletPoints.map((point, ptIdx) => (
                      <li key={ptIdx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-nature" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </m.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
