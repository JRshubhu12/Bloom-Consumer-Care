import { motion } from "motion/react";
import { Sprout, ShieldAlert, Sparkles, Scale } from "lucide-react";

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
      title: "Healthy & Natural",
      subtitle: "Unprocessed Farm Integrity",
      description: "Harvested directly in pristine wetlands. We preserve the organic cell structure of the lotus seed by avoiding high-temperature machine extraction and cheap industrial processing.",
      icon: Sprout,
      bulletPoints: ["100% Organic Sourcing", "Minerals Fully Intact", "Pure Sea Salt Sprinkles"]
    },
    {
      id: "preservative-free",
      title: "Preservative-Free",
      subtitle: "Absolute Freshness Protection",
      description: "We refuse to include artificial chemicals, artificial colors, texturizers, or shelf-prolonging sodium compounds. Our snacks are packaged hot from the roasting trays directly on-demand.",
      icon: ShieldAlert,
      bulletPoints: ["No Monosodium Glutamate", "No Hydrogenated Oils", "BPA-Free Recyclable Tins"]
    },
    {
      id: "empowerment",
      title: "Women Empowerment",
      subtitle: "Bridging the Gender Divide",
      description: "Our entire supply chain represents direct social rehabilitation. By shifting hand-popping and roasting clusters directly to female artisans, we help rebuild rural domestic economies from the ground up.",
      icon: Scale,
      bulletPoints: ["Dignified Living Wage Set", "Skill Certification Programs", "100% Financial Auto-Payments"]
    },
    {
      id: "affordable-luxury",
      title: "Affordable Premium Quality",
      subtitle: "No Middleman Markup",
      description: "We bring elite premium grading (comparable to expensive imported gourmet canisters) to consumers at honest, reasonable direct-to-home prices by bypassing heavy layer retailers.",
      icon: Sparkles,
      bulletPoints: ["Imperial Grade Sizing", "Direct Farm Partnerships", "Zero Luxury Markup Costs"]
    }
  ];

  return (
    <section id="why-bloom" className="py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-bg-secondary to-bg-primary relative overflow-hidden">
      
      {/* Premium backdrop glow ambient light effect */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-[350px] h-[350px] rounded-full bg-sage/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Core title and subtitle matching Forest Essentials or Apple styles */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Brand Differentiators
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal">
            The Golden Standards of <br />
            <span className="italic font-normal text-cocoa">Bloom Consumer Care</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
          <p className="font-sans text-charcoal/70 max-w-lg mx-auto font-light leading-relaxed text-sm sm:text-base">
            We hold ourselves to a level of detail that redefines the standards of premium organic food crafting, ensuring every grain honors your trust.
          </p>
        </div>

        {/* 4 Luxury Glassmorphic Cards with 3D hover translations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, index) => {
            const CardIcon = card.icon;
            return (
              <motion.div
                key={card.id}
                className="group relative bg-white rounded-2xl border border-gold-light/25 p-8 lg:p-10 flex flex-col justify-between text-left transition-all duration-300 shadow-[0_15px_40px_rgba(107,74,50,0.03)]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{
                  y: -3,
                  borderColor: "rgba(200, 169, 107, 0.75)",
                  boxShadow: "0 20px 40px -10px rgba(107,74,50,0.08)",
                }}
              >
                {/* Floating soft gold background light bubble */}
                <span className="absolute inset-x-12 top-12 bottom-12 bg-gold/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Top card header */}
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    {/* Outline icon inside simple gold base */}
                    <div className="p-3.5 rounded-xl bg-bg-primary border border-gold-light/40 text-gold group-hover:bg-cocoa group-hover:text-bg-primary transition-colors duration-300 shadow-xs">
                      <CardIcon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    {/* Small tag index number */}
                    <span className="font-mono text-[9px] tracking-widest text-[#B39359] font-bold uppercase py-1 px-3 rounded-full bg-white border border-gold/15">
                      Standard {index + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
                      {card.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-charcoal">
                      {card.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                {/* Micro premium bullet highlights inside the card */}
                <div className="border-t border-gold-light/35 pt-6 mt-8 relative z-10">
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] font-mono text-charcoal/70">
                    {card.bulletPoints.map((point, ptIdx) => (
                      <li key={ptIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle bottom decorative line */}
                <div className="absolute bottom-0 inset-x-10 h-[1.5px] bg-gradient-to-r from-transparent via-gold/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
