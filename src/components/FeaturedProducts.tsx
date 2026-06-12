import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Check, ArrowRight, Leaf, Flame, ShieldCheck, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

interface FeaturedProductsProps {
  onAddToCart: (productName: string) => void;
}

interface ProductItem {
  id: string;
  name: string;
  category: "makhana" | "dryfruits" | "namkeen";
  categoryLabel: string;
  price: number;
  description: string;
  badge: string;
  calories: number;
  protein: string;
  foodImageUrl: string;
  benefits: string[];
  colorTheme: {
    gradient: string;
    shadow: string;
    glow: string;
    text: string;
  };
  particles: { x: number; y: number; scale: number; color: string; label: string }[];
}

const FEATURED_ITEMS: ProductItem[] = [
  // Roasted Makhana
  {
    id: "fp-makhana-salt",
    name: "Himalayan Pink Salt",
    category: "makhana",
    categoryLabel: "Roasted Makhana",
    price: 349,
    description: "Light, crunchy and naturally nutritious roasted makhana crafted for mindful snacking.",
    badge: "100% Organic",
    calories: 120,
    protein: "4.2g",
    foodImageUrl: "https://i.ibb.co/RTJ9J5BD/spicy-masala-phool-makhana.jpg",
    benefits: ["Zero Preservatives", "Freshly Roasted", "Women Crafted", "Small Batch Made"],
    colorTheme: {
      gradient: "from-[#F5EBE1] to-[#E5CCA6]",
      shadow: "shadow-amber-900/10",
      glow: "from-amber-205/30 via-transparent to-transparent",
      text: "text-amber-900"
    },
    particles: [
      { x: -35, y: -45, scale: 0.9, color: "bg-pink-300", label: "盐" },
      { x: 45, y: -25, scale: 0.7, color: "bg-[#C6A769]/40", label: "✨" },
      { x: -15, y: 55, scale: 0.8, color: "bg-amber-200", label: "▫️" }
    ]
  },
  {
    id: "fp-makhana-peri",
    name: "Spiced Peri Peri",
    category: "makhana",
    categoryLabel: "Roasted Makhana",
    price: 359,
    description: "Zesty, hot-baked bird's eye chili dust combined with structural crisp popped makhana for high metabolism.",
    badge: "Fiery Crunch",
    calories: 125,
    protein: "4.1g",
    foodImageUrl: "https://i.ibb.co/RTJ9J5BD/spicy-masala-phool-makhana.jpg",
    benefits: ["Zero Preservatives", "Freshly Roasted", "Women Crafted", "Small Batch Made"],
    colorTheme: {
      gradient: "from-[#FAE3DF] to-[#E9AE9E]",
      shadow: "shadow-red-900/10",
      glow: "from-red-200/30 via-transparent to-transparent",
      text: "text-red-900"
    },
    particles: [
      { x: -40, y: -30, scale: 0.85, color: "bg-red-400", label: "🌶️" },
      { x: 35, y: -45, scale: 0.7, color: "bg-amber-400", label: "✨" },
      { x: -20, y: 40, scale: 0.9, color: "bg-stone-300", label: "▫️" }
    ]
  },
  {
    id: "fp-makhana-pudina",
    name: "Slow-Baked Pudina Punch",
    category: "makhana",
    categoryLabel: "Roasted Makhana",
    price: 369,
    description: "A cool garden formulation featuring hand-crushed dehydrated mountain mint leaves and true rock salt.",
    badge: "Herbal Freshness",
    calories: 118,
    protein: "4.3g",
    foodImageUrl: "https://i.ibb.co/RTJ9J5BD/spicy-masala-phool-makhana.jpg",
    benefits: ["Zero Preservatives", "Freshly Roasted", "Women Crafted", "Small Batch Made"],
    colorTheme: {
      gradient: "from-[#ECF3E9] to-[#C7DEBA]",
      shadow: "shadow-emerald-950/10",
      glow: "from-emerald-200/35 via-transparent to-transparent",
      text: "text-emerald-900"
    },
    particles: [
      { x: -30, y: -50, scale: 0.95, color: "bg-emerald-300", label: "🍃" },
      { x: 40, y: -30, scale: 0.8, color: "bg-[#93A47D]/50", label: "✨" },
      { x: 15, y: 55, scale: 0.75, color: "bg-zinc-200", label: "▫️" }
    ]
  },
  {
    id: "fp-makhana-cheese",
    name: "White Cheddar & Sweet Herbs",
    category: "makhana",
    categoryLabel: "Roasted Makhana",
    price: 379,
    description: "Delicately dusted with premium unpasteurized gourmet cheddar cheese and dried sweet basil sprigs.",
    badge: "Gourmet Choice",
    calories: 135,
    protein: "4.5g",
    foodImageUrl: "https://i.ibb.co/RTJ9J5BD/spicy-masala-phool-makhana.jpg",
    benefits: ["Zero Preservatives", "Freshly Roasted", "Women Crafted", "Small Batch Made"],
    colorTheme: {
      gradient: "from-[#FCF9DF] to-[#EFE29E]",
      shadow: "shadow-yellow-900/10",
      glow: "from-yellow-200/40 via-transparent to-transparent",
      text: "text-yellow-950"
    },
    particles: [
      { x: -35, y: -45, scale: 0.8, color: "bg-yellow-300", label: "🧀" },
      { x: 30, y: -35, scale: 0.85, color: "bg-emerald-200", label: "🌿" },
      { x: -10, y: 50, scale: 0.7, color: "bg-[#C6A769]/30", label: "✨" }
    ]
  },

  // Dry Fruits
  {
    id: "fp-df-almonds",
    name: "Premium Saffron Mamra Almonds",
    category: "dryfruits",
    categoryLabel: "Dry Fruit Mix",
    price: 599,
    description: "Whole high-altitude Kashmiri Mamra almonds enriched with luxury Kashmiri saffron strands and ground cardamom.",
    badge: "Sovereign Grade",
    calories: 185,
    protein: "6.8g",
    foodImageUrl: "https://i.ibb.co/F4g1VSL4/image.png",
    benefits: ["Zero Preservatives", "Freshly Roasted", "Women Crafted", "Small Batch Made"],
    colorTheme: {
      gradient: "from-[#FCF1E1] to-[#EBC69F]",
      shadow: "shadow-amber-950/10",
      glow: "from-amber-200/30 via-transparent to-transparent",
      text: "text-amber-950"
    },
    particles: [
      { x: -30, y: -40, scale: 0.85, color: "bg-[#C6A769]", label: "✨" },
      { x: 35, y: -25, scale: 0.9, color: "bg-red-400", label: "🪡" },
      { x: -15, y: 45, scale: 0.75, color: "bg-yellow-300", label: "▫️" }
    ]
  },
  {
    id: "fp-df-cashews",
    name: "Imperial Roasted Cashews",
    category: "dryfruits",
    categoryLabel: "Dry Fruit Mix",
    price: 649,
    description: "Unmasked giant King size coastal cashews lightly baked with clean rock dust and raw natural sweetness.",
    badge: "Immune Booster",
    calories: 178,
    protein: "6.2g",
    foodImageUrl: "https://i.ibb.co/F4g1VSL4/image.png",
    benefits: ["Zero Preservatives", "Freshly Roasted", "Women Crafted", "Small Batch Made"],
    colorTheme: {
      gradient: "from-[#FAF6EE] to-[#E1D4BE]",
      shadow: "shadow-zinc-900/10",
      glow: "from-amber-100/30 via-transparent to-transparent",
      text: "text-zinc-900"
    },
    particles: [
      { x: -35, y: -35, scale: 0.8, color: "bg-[#C6A769]", label: "✨" },
      { x: 35, y: -45, scale: 0.85, color: "bg-stone-300", label: "▫️" }
    ]
  },
  {
    id: "fp-df-raisins",
    name: "Sun-Cured Golden Raisins",
    category: "dryfruits",
    categoryLabel: "Dry Fruit Mix",
    price: 449,
    description: "Premium plumpy natural seedless grapes cured slowly under the high desert sun to lock in natural energy.",
    badge: "Iron Abundant",
    calories: 145,
    protein: "3.2g",
    foodImageUrl: "https://i.ibb.co/F4g1VSL4/image.png",
    benefits: ["Zero Preservatives", "Freshly Roasted", "Women Crafted", "Small Batch Made"],
    colorTheme: {
      gradient: "from-[#FCF1E1] to-[#EDBD88]",
      shadow: "shadow-amber-900/15",
      glow: "from-yellow-105/30 via-transparent to-transparent",
      text: "text-amber-900"
    },
    particles: [
      { x: -25, y: -40, scale: 0.8, color: "bg-amber-300", label: "☀️" },
      { x: 40, y: -30, scale: 0.85, color: "bg-[#C6A769]", label: "✨" }
    ]
  },

  // Healthy Namkeen
  {
    id: "fp-nk-traditional",
    name: "Mithila Traditional Baked Mix",
    category: "namkeen",
    categoryLabel: "Healthy Namkeen",
    price: 299,
    description: "Ancient heritage formulation uniting baked beaten rice fields, healthy seeds, and dry native spices.",
    badge: "Heritage Recipe",
    calories: 110,
    protein: "5.1g",
    foodImageUrl: "https://i.ibb.co/XrwZhg76/image.png",
    benefits: ["Zero Preservatives", "Freshly Roasted", "Women Crafted", "Small Batch Made"],
    colorTheme: {
      gradient: "from-[#EDE8E4] to-[#CDBCB1]",
      shadow: "shadow-stone-900/10",
      glow: "from-stone-200/30 via-transparent to-transparent",
      text: "text-stone-900"
    },
    particles: [
      { x: -35, y: -40, scale: 0.9, color: "bg-stone-300", label: "🌾" },
      { x: 30, y: -30, scale: 0.8, color: "bg-[#C6A769]", label: "✨" }
    ]
  },
  {
    id: "fp-nk-roasted",
    name: "Ancient Five-Grain Roasted Mix",
    category: "namkeen",
    categoryLabel: "Healthy Namkeen",
    price: 329,
    description: "A clinical oven-baked blend of puffed amaranth, whole popped quinoa, watermelon seeds, and light herbs.",
    badge: "Ancient Superfood",
    calories: 115,
    protein: "5.5g",
    foodImageUrl: "https://i.ibb.co/XrwZhg76/image.png",
    benefits: ["Zero Preservatives", "Freshly Roasted", "Women Crafted", "Small Batch Made"],
    colorTheme: {
      gradient: "from-[#E4EEE9] to-[#AFD0C1]",
      shadow: "shadow-teal-950/10",
      glow: "from-teal-100/35 via-transparent to-transparent",
      text: "text-teal-950"
    },
    particles: [
      { x: -35, y: -45, scale: 0.8, color: "bg-teal-200", label: "▫️" },
      { x: 35, y: -35, scale: 0.85, color: "bg-yellow-200", label: "🌾" },
      { x: 10, y: 50, scale: 0.75, color: "bg-[#C6A769]", label: "✨" }
    ]
  },
  {
    id: "fp-nk-low-oil",
    name: "Low-Oil Weightless Amaranth Namkeen",
    category: "namkeen",
    categoryLabel: "Healthy Namkeen",
    price: 289,
    description: "Strictly puffed ancient crystalline amaranth designed for pure diet longevity and minimal fat weight.",
    badge: "Weight Control",
    calories: 104,
    protein: "4.9g",
    foodImageUrl: "https://i.ibb.co/XrwZhg76/image.png",
    benefits: ["Zero Preservatives", "Freshly Roasted", "Women Crafted", "Small Batch Made"],
    colorTheme: {
      gradient: "from-[#F5EDE1] to-[#DEC6AB]",
      shadow: "shadow-orange-950/10",
      glow: "from-orange-100/30 via-transparent to-transparent",
      text: "text-orange-950"
    },
    particles: [
      { x: -30, y: -40, scale: 0.85, color: "bg-orange-200", label: "🍃" },
      { x: 35, y: -30, scale: 0.8, color: "bg-[#C6A769]", label: "✨" }
    ]
  }
];

export default function FeaturedProducts({ onAddToCart }: FeaturedProductsProps) {
  const [activeCategory, setActiveCategory] = useState<"makhana" | "dryfruits" | "namkeen">("makhana");
  const [addingToCartId, setAddingToCartId] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredItems = FEATURED_ITEMS.filter((item) => item.category === activeCategory);

  const handleBuy = (item: ProductItem) => {
    setAddingToCartId(item.id);
    onAddToCart(`${item.categoryLabel} - ${item.name}`);
    setTimeout(() => {
      setAddingToCartId(null);
    }, 1200);
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmt = carouselRef.current.clientWidth * 0.85;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmt : scrollAmt,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="featured-products" className="py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-[#FAF8F4] to-white relative overflow-hidden select-none">
      
      {/* Elegantly styled organic cream-colored vector background blobs */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#FDFBF7] rounded-[40%_60%_50%_50%] -z-10 filter blur-[90px] opacity-90" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-[#FAF3E9] rounded-[50%_30%_60%_40%] -z-10 filter blur-[100px] opacity-80" />

      {/* Decorative leaf/branch outlines */}
      <div className="absolute top-24 right-12 w-32 h-32 opacity-10 text-gold pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M50 90 C 50 50, 20 40, 10 20 M50 70 C 60 50, 80 45, 90 30 M50 50 C 35 30, 40 10, 30 5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-left">
        
        {/* SECTION TITLE & SUBTITLE - Airy negative space and display typography */}
        <div className="max-w-3xl mb-16 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1.5px] w-12 bg-[#C6A769]"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C6A769] font-bold">Featured Collection</span>
          </div>
          
          <h2 className="font-serif text-[42px] sm:text-[56px] leading-[1.05] font-light text-[#222222] tracking-tight">
            Freshly Roasted.<br />
            <span className="italic font-normal text-[#4B3425]">Purely Natural.</span><br />
            <span className="font-serif italic font-light text-[#93A47D]">Zero Preservatives.</span>
          </h2>
          
          <div className="w-20 h-[1.5px] bg-[#C6A769] opacity-40" />
          
          <p className="font-sans text-sm sm:text-base text-[#4B3425]/75 max-w-xl font-light leading-relaxed">
            Every creation is popped on-demand and slow-roasted without chemical compromise. Our recipe preserves natural vitality while ensuring unmatched gourmet taste.
          </p>
        </div>

        {/* Dynamic Category Navigation Switchers (Apple-Tab Style) */}
        <div className="flex border-b border-[#C6A769]/15 pb-4 mb-16 gap-8 overflow-x-auto scrollbar-none">
          {([
            { key: "makhana", label: "Roasted Makhana", count: "4 Classic Flavors" },
            { key: "dryfruits", label: "Dry Fruit Mix", count: "3 Premium Blends" },
            { key: "namkeen", label: "Healthy Namkeen", count: "3 Ancient Recipes" }
          ] as const).map((tab) => {
            const isSelected = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className="group relative flex flex-col items-start pb-4 focus:outline-none shrink-0 cursor-pointer"
              >
                <span className={`font-serif text-lg sm:text-xl transition-colors duration-300 ${
                  isSelected ? "text-[#4B3425] font-light italic" : "text-[#4B3425]/45 group-hover:text-[#4B3425]"
                }`}>
                  {tab.label}
                </span>
                <span className="text-[8.5px] uppercase tracking-widest font-mono text-[#93A47D] mt-1 block">
                  {tab.count}
                </span>
                {isSelected && (
                  <motion.div
                    layoutId="activeTabOutline"
                    className="absolute bottom-0 inset-x-0 h-[2.5px] bg-[#C6A769]"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Premium Products Carousel/Grid Controller */}
        <div className="relative">
          
          {/* Navigation keys for smooth carousel movement on mobile */}
          <div className="absolute right-0 -top-12 flex gap-2 sm:hidden">
            <button
              onClick={() => scrollCarousel("left")}
              className="p-2 border border-[#C6A769]/30 rounded-full bg-white/80 text-cocoa transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              className="p-2 border border-[#C6A769]/30 rounded-full bg-white/80 text-cocoa transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Master horizontal list - swipeable snaps & desktop grids */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 scrollbar-none md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible"
          >
            {filteredItems.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ y: -12 }}
                  className="group relative flex-[0_0_88%] sm:flex-[0_0_46%] md:flex-none snap-start bg-[#FCFBF8]/95 backdrop-blur-md border border-[#C6A769]/30 rounded-[40px] p-6 flex flex-col justify-between shadow-[0_22px_50px_-20px_rgba(198,167,105,0.14)] hover:shadow-[0_40px_70px_-25px_rgba(198,167,105,0.22)] transition-all duration-700 overflow-hidden cursor-default min-h-[620px]"
                >
                  {/* Organic cream-colored shape and Soft golden halo backing depth */}
                  <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full filter blur-[32px] opacity-25 group-hover:opacity-35 transition-opacity duration-700 pointer-events-none -z-10 bg-gradient-to-br ${item.colorTheme.glow}`} />
                  <div className="absolute top-1/3 left-1/3 w-36 h-36 border border-amber-200/10 rounded-full -z-15 pointer-events-none" />

                  {/* Top indicators */}
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[8.5px] uppercase tracking-[0.25em] bg-[#93A47D]/15 text-[#4B3425] font-bold px-3 py-1 rounded-full border border-[#93A47D]/25">
                        {item.badge}
                      </span>
                      <div className="flex items-center gap-1 font-mono text-[9.5px] text-[#222222]/50 font-bold bg-white/75 px-3 py-1 rounded-full border border-gold-light/10">
                        <Flame className="w-3.5 h-3.5 text-gold" />
                        <span>{item.calories} Cal</span>
                      </div>
                    </div>

                    {/* IMAGE PRESENTATION: 60% HEIGHT HERO STACK */}
                    <div className="w-full h-64 relative flex items-center justify-center select-none pt-4 overflow-visible">
                      
                      {/* Interactive golden ambient lighting flash */}
                      <div className="absolute inset-0 bg-radial from-[#C6A769]/15 via-transparent to-transparent opacity-80 pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                      {/* Float frame containment for pouch & bowl synchrony */}
                      <div className="w-full h-full relative flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2">
                        {/* 1. LUXURY COLOURED CORE BRANDING POUCH (behind bowl) */}
                        <div className={`w-28 h-36 rounded-t-[32px] rounded-b-lg bg-gradient-to-b ${item.colorTheme.gradient} border border-white/60 p-3 shadow-md relative flex flex-col justify-between items-center z-10 transition-all duration-700 ease-out group-hover:scale-[1.03]`}>
                          
                          {/* Inner gold foil-drawn border */}
                          <div className="absolute inset-1.5 border border-[#C6A769]/25 rounded-t-[28px] rounded-b-md pointer-events-none" />
                          
                          {/* Golden foil glaze sweep effect on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10" />

                          {/* Mini brand crest badge */}
                          <div className="w-3.5 h-3.5 mt-0.5 opacity-70">
                            <svg viewBox="0 0 100 100" fill="#4B3425"><path d="M50 0 C60 30 90 40 100 50 C90 60 60 70 50 100 C40 70 10 60 0 50 C10 40 40 30 50 0" /></svg>
                          </div>

                          {/* Custom minimal foil card block */}
                          <div className="text-center w-full px-1">
                            <span className="text-[5px] uppercase tracking-[0.25em] font-mono text-[#4B3425]/50 block font-bold leading-none">BLOOM</span>
                            <div className="h-[0.5px] bg-[#4B3425]/15 w-1/4 mx-auto my-0.5" />
                            <h4 className="text-[7px] font-serif font-bold text-[#222222] truncate max-w-[70px] leading-tight">{item.name}</h4>
                            <span className="text-[4px] font-mono text-[#93A47D] block font-bold leading-none mt-0.5">NET WT. 150G</span>
                          </div>

                          {/* Sourcing stamp lock */}
                          <div className="w-4 h-4 rounded-full border border-gold/30 bg-white/90 flex items-center justify-center text-[4px] font-mono font-bold text-[#4B3425]">
                            OK
                          </div>
                        </div>

                        {/* 2. SPECIFIC INGREDIENT PARTICLES SLATE (positioned statically with optional CSS scale response) */}
                        {item.particles.map((particle, pIdx) => (
                          <div
                            key={pIdx}
                            className={`absolute w-6 h-6 rounded-full flex items-center justify-center text-[8px] border border-white/60 shadow-xs text-charcoal/80 z-15 transition-transform duration-500 group-hover:scale-110 ${particle.color}`}
                            style={{
                              transform: `translate(${particle.x}px, ${particle.y}px)`
                            }}
                          >
                            <span className="select-none scale-75">{particle.label}</span>
                          </div>
                        ))}

                        {/* 3. HERO DISPLAY: BOWL CONTAINING REAL SNACKS (stands proud in front of pouch) */}
                        <div className="absolute w-36 h-36 rounded-full border-[3px] border-white bg-white shadow-[0_12px_28px_rgba(0,0,0,0.12)] overflow-hidden z-25 translate-y-10 group-hover:scale-105 group-hover:translate-y-8 duration-500 ease-out transition-transform">
                          
                          {/* Symmetrical golden rim decoration */}
                          <div className="absolute inset-[1px] border border-[#C6A769] rounded-full z-10 pointer-events-none" />

                          <img
                            src={item.foodImageUrl}
                            alt="Gourmet Bowl View"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover rounded-full group-hover:scale-110 group-hover:rotate-6 transition-transform duration-1000 ease-out"
                          />

                          {/* Natural shading inside bowl */}
                          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/15 pointer-events-none" />

                          {/* Human curation label */}
                          <div className="absolute bottom-1 inset-x-0 bg-stone-900/60 backdrop-blur-xs py-1 text-center text-[7px] text-[#FAF8F4] tracking-widest font-mono font-extrabold uppercase z-10">
                            Real Natural Food
                          </div>
                        </div>

                        {/* 4. Natural shadow beneath the heavy ceramic bowl */}
                        <div className="absolute w-28 h-2 bg-black/15 rounded-full filter blur-[5px] translate-y-28 scale-100 opacity-80 group-hover:scale-95 group-hover:opacity-60 transition-all duration-500 pointer-events-none" />

                      </div>

                    </div>

                  </div>

                  {/* Card Bottom Description, Nutrition Facts & CTA */}
                  <div className="mt-8 border-t border-[#C6A769]/15 pt-5 space-y-4 relative z-30">
                    
                    {/* Category Label and Title */}
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-[#C6A769] block font-bold">
                        {item.categoryLabel}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-light text-charcoal leading-tight mt-0.5">
                        {item.name}
                      </h3>
                    </div>

                    {/* Highly descriptive and compliant Trust badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[9px] font-semibold bg-[#768364]/10 text-[#546241] px-2.5 py-0.5 rounded-full border border-[#768364]/20 flex items-center gap-1">
                        🌿 No Preservatives
                      </span>
                      <span className="text-[9px] font-semibold bg-[#C3A77D]/10 text-[#9E8154] px-2.5 py-0.5 rounded-full border border-[#C3A77D]/20 flex items-center gap-1">
                        👩 Women Crafted
                      </span>
                    </div>

                    <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light min-h-[40px] max-h-[40px] overflow-hidden">
                      {item.description}
                    </p>

                    {/* Premium Benefits checklist - Apple / FMCG style */}
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 py-1.5 border-y border-[#C6A769]/10">
                      {item.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-1 font-sans text-[10px] text-[#4B3425] font-light">
                          <Check className="w-3 h-3 text-[#93A47D] shrink-0" strokeWidth={2.5} />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price, Stats, and Elegant Primary Explorer CTA */}
                    <div className="space-y-3 pt-2">
                      <div className="flex justify-between items-center bg-[#FAF8F4] p-2 rounded-lg border border-[#EAE4DB]/55">
                        <span className="text-[8px] font-mono uppercase tracking-wider text-charcoal/50 font-bold block">PRICE</span>
                        <strong className="text-lg font-serif font-semibold text-[#4B3425]">₹{item.price}</strong>
                      </div>

                      {/* Add To Cart Primary Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBuy(item);
                        }}
                        disabled={addingToCartId !== null}
                        className="w-full py-3 bg-[#5C3E26] hover:bg-[#392312] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer luxury-glowing-btn disabled:opacity-50"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>{addingToCartId === item.id ? "Adding to Cart..." : "Add To Cart"}</span>
                      </button>

                      {/* View Details Secondary Link */}
                      <div className="text-center pt-1">
                        <button
                          onClick={() => {
                            const el = document.getElementById("bloom-collection");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="text-[10px] uppercase tracking-widest text-[#4B3425]/75 hover:text-[#523821] font-mono font-bold underline transition-colors"
                        >
                          View Details
                        </button>
                      </div>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Brand Promise Footer Quote */}
        <div className="mt-16 text-center max-w-xl mx-auto border-t border-[#C6A769]/10 pt-8 select-none">
          <p className="text-xs uppercase tracking-widest font-mono text-[#93A47D] font-bold">
            🌿 Direct Rural Woman Sourcing Guarantee
          </p>
          <p className="font-serif italic text-sm text-[#4B3425]/75 mt-2">
            Every pouch is sealed directly inside self-help village facilities to verify zero modern chemicals interfere with indigenous nutrition profiles.
          </p>
        </div>

      </div>
    </section>
  );
}
