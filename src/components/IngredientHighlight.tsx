import { motion } from "motion/react";
import { Check, ShieldCheck } from "lucide-react";

export default function IngredientHighlight() {
  const ingredientsList = [
    {
      id: "makhana",
      name: "Roasted Makhana (Mint Flavour)",
      image: "https://m.media-amazon.com/images/I/71paW2uT-kL.jpg",
      description: "Wholesome popped lotus seeds, slow-roasted to crispy perfection and seasoned naturally with garden mint and salt.",
      highlights: ["Naturally Light", "Zero Preservatives", "Slow-Roasted", "Crispy & Wholesome"]
    },
    {
      id: "energy-bar",
      name: "Energy Bar",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/6/DA/PX/HQ/64879238/dry-fruit-sweet-500x500.jpeg",
      description: "Wholesome energy bar made entirely from premium dates, whole almonds, cashews, and golden raisins.",
      highlights: ["No Added Sugar", "Rich in Fiber", "Premium Dry Fruits", "Naturally Energizing"]
    },
    {
      id: "dryfruit-mix",
      name: "Premium Dry Fruit Mix",
      image: "https://m.media-amazon.com/images/I/71m18e2dMAL._AC_UF894,1000_QL80_.jpg",
      description: "A hand-selected curated premium blend of California almonds, whole cashews, and golden raisins.",
      highlights: ["Mamra Almonds", "Choice Cashews", "Golden Kishmish", "Packed Fresh"]
    },
    {
      id: "namkeen",
      name: "Makhana Mix Namkeen",
      image: "https://myheartbeets.com/wp-content/uploads/2022/02/roasted-makhana-mix.jpg",
      description: "A traditional crispy snack mix prepared using premium slow-roasted makhana and healthy grain seeds.",
      highlights: ["Baked - Zero Frying", "Spiced Naturally", "Ancient Grains", "High Fiber Crunch"]
    }
  ];

  const promises = [
    "No Unnecessary Preservatives",
    "Carefully Selected Ingredients",
    "Quality-Focused Production",
    "Freshly Packed",
    "Transparent Product Information"
  ];

  return (
    <section id="inside-pack" className="py-16 px-6 sm:px-12 lg:px-24 bg-bg-primary relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-bold">
            Inside Every Pack
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal">
            Simple ingredients. <br />
            <span className="italic font-normal text-cocoa">Naturally nutritious. Carefully selected.</span>
          </h2>
          <div className="w-12 h-[2px] bg-gold mx-auto" />
          <p className="font-sans text-charcoal/80 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Every Bloom product begins with quality ingredients chosen for their taste, freshness, and nutritional value. We focus on creating wholesome snacks with ingredients people know and trust.
          </p>
        </div>

        {/* Floating Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {ingredientsList.map((ing, idx) => {
            return (
              <motion.div
                key={ing.id}
                className="bg-white border border-gold-light/40 rounded-[2rem] p-6 flex flex-col justify-between text-left relative overflow-hidden transition-all duration-300 min-h-[460px] shadow-sm group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{
                  y: -4,
                  borderColor: "rgba(232, 141, 20, 0.4)",
                  boxShadow: "0 15px 35px -10px rgba(92, 58, 33, 0.1)"
                }}
              >
                <div>
                  {/* Large High-Res Image Container */}
                  <div className="w-full h-48 rounded-xl overflow-hidden bg-bg-secondary relative flex items-center justify-center mb-6">
                    <img 
                      src={ing.image} 
                      alt={ing.name} 
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                    {ing.name}
                  </h3>

                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-6">
                    {ing.description}
                  </p>
                </div>

                {/* Highlights row */}
                <div className="border-t border-gold-light/40 pt-5">
                  <ul className="space-y-2.5">
                    {ing.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2.5 text-[11px] font-sans font-semibold text-charcoal/80 uppercase tracking-wide">
                        <div className="bg-sage/10 p-1 rounded-full">
                          <Check className="w-3 h-3 text-sage stroke-[3]" />
                        </div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section - Ingredient Promise */}
        <motion.div 
          className="bg-white border-2 border-gold-light/50 rounded-3xl p-8 sm:p-10 max-w-5xl mx-auto text-center shadow-sm"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5 text-gold">
            <ShieldCheck className="w-8 h-8 stroke-[2]" />
            <h3 className="font-serif text-2xl font-bold text-charcoal">Our Ingredient Promise</h3>
          </div>
          
          <div className="w-16 h-[2px] bg-gold/40 mx-auto mb-8" />

          <div className="flex flex-wrap justify-center items-center gap-y-5 gap-x-10">
            {promises.map((promise, pIdx) => (
              <div key={pIdx} className="flex items-center gap-2 text-sm font-sans font-semibold tracking-wide text-charcoal/85 uppercase">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span>{promise}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
