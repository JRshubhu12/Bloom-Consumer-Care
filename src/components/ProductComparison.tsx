import React from "react";
import { m } from "motion/react";
import { Check, Flame, HelpCircle } from "lucide-react";

interface ComparisonRow {
  flavor: string;
  protein: string;
  spice: string;
  sweetness: string;
  highlight: string;
  isPopular?: boolean;
}

export default function ProductComparison() {
  const comparisonData: ComparisonRow[] = [
    {
      flavor: "Mint Flavour Makhana",
      protein: "High (4.2g)",
      spice: "Low-Medium",
      sweetness: "None",
      highlight: "Infused with cooling fresh garden mint",
      isPopular: false
    },
    {
      flavor: "Chatpata Masala Makhana",
      protein: "High (4.2g)",
      spice: "High (Tangy)",
      sweetness: "None",
      highlight: "Bold Indian chatpata street spice blend",
      isPopular: true
    },
    {
      flavor: "Plain Salted Makhana",
      protein: "High (4.2g)",
      spice: "None",
      sweetness: "None",
      highlight: "Lightly salted with pure Himalayan rock salt",
      isPopular: false
    },
    {
      flavor: "Magic Masala Makhana",
      protein: "High (4.2g)",
      spice: "Medium-High",
      sweetness: "None",
      highlight: "Aromatic blend of roasted masala spices",
      isPopular: false
    }
  ];

  return (
    <section id="product-comparison" className="py-20 px-6 sm:px-12 lg:px-24 bg-bg-secondary overflow-hidden select-none">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C6A769] font-bold">
            Flavor Mapping
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-earth">
            Find Your Match
          </h2>
          <p className="font-sans text-xs sm:text-sm text-earth/70 font-light">
            Compare our artisanal roasted makhana varieties side-by-side to choose the perfect profile for your palate.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <m.div 
          className="bg-white border border-[#EAE4DB] rounded-3xl shadow-xs overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#FAF9F6] border-b border-leaf/10 text-[10px] font-mono tracking-widest text-[#768364] uppercase font-bold">
                  <th className="py-5 px-6">Flavor Collection</th>
                  <th className="py-5 px-4 text-center">Protein (Per 100g)</th>
                  <th className="py-5 px-4 text-center">Spice Level</th>
                  <th className="py-5 px-4 text-center">Sweetness</th>
                  <th className="py-5 px-6">Distinctive Highlight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4EFE8]">
                {comparisonData.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={`text-sm hover:bg-[#FAF8F5] transition-colors duration-200 group ${
                      row.isPopular ? "bg-[#FAF8F5]/40" : ""
                    }`}
                  >
                    {/* Flavor Name */}
                    <td className="py-5 px-6 font-medium text-earth flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-nature group-hover:scale-125 transition-transform" />
                      <span className="font-serif font-bold text-base">{row.flavor}</span>
                      {row.isPopular && (
                        <span className="text-[8px] font-mono font-bold text-leaf bg-leaf/10 border border-leaf/20 px-2 py-0.5 rounded-full uppercase ml-2 select-none">
                          Popular
                        </span>
                      )}
                    </td>
                    
                    {/* Protein */}
                    <td className="py-5 px-4 text-center text-earth/80 font-mono font-medium">
                      {row.protein}
                    </td>
                    
                    {/* Spice Level */}
                    <td className="py-5 px-4 text-center text-earth/80">
                      <div className="flex items-center justify-center gap-1">
                        {row.spice === "None" ? (
                          <span className="text-earth/45 text-xs">None</span>
                        ) : (
                          <div className="flex items-center text-orange-500 gap-0.5">
                            <Flame className={`w-3.5 h-3.5 fill-current ${
                              row.spice === "High (Tangy)" || row.spice === "Medium-High" 
                                ? "animate-[pulse_1.5s_infinite]" 
                                : ""
                            }`} />
                            <span className="text-xs font-semibold">{row.spice}</span>
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Sweetness */}
                    <td className="py-5 px-4 text-center text-earth/80">
                      {row.sweetness === "None" ? (
                        <span className="text-earth/45 text-xs">None</span>
                      ) : (
                        <span className="text-xs font-semibold text-nature">{row.sweetness}</span>
                      )}
                    </td>

                    {/* Highlight */}
                    <td className="py-5 px-6 text-earth/70 font-light italic text-xs sm:text-sm">
                      {row.highlight}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Bottom info banner */}
          <div className="bg-[#FAF9F6] border-t border-leaf/10 py-4 px-6 text-center text-[10px] font-mono tracking-wide text-earth/60">
            🌿 ALL BLENDS ARE Gluten-Free • Sugar-Free • 100% Preservative-Free • Hand-Selected in Mithila
          </div>
        </m.div>

      </div>
    </section>
  );
}
