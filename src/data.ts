import { Product, Ingredient, Statistics, TimelineMilestone, SubscriptionPlan, Testimonial, GiftBoxRegistry, BlogPost } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "makhana-pink-salt",
    name: "Himalayan Pink Salt Roasted Makhana",
    category: "makhana",
    description: "Handpicked premium Phool Makhana (gorgon nuts) slow-roasted to absolute perfection in light cold-pressed extra virgin olive oil, lightly tossed with micro-ground organic Himalayan pink rock salt.",
    shortDescription: "Pristine crunch. Finished with mineral-rich Himalayan pink salt.",
    price: 349,
    rating: 4.9,
    weightOptions: ["120g", "250g"],
    flavors: ["Pristine Pink Salt", "Cracked Black Pepper", "Smoked Truffle Aura"],
    originalIngredients: ["Premium Lotus Seeds", "Cold-Pressed Extra Virgin Olive Oil", "Himalayan Pink Salt", "Sea Minerals"],
    calories: 120,
    macros: {
      protein: "4.2g",
      fiber: "3.1g",
      carbs: "18.5g",
      fat: "3.2g"
    },
    healthHighlights: ["Zero Trans Fats", "Gluten-Free Certified", "Low Glycemic Index", "Rich in Anti-Aging Flavonoids"],
    imageUrl: "https://i.ibb.co/RTJ9J5BD/spicy-masala-phool-makhana.jpg"
  },
  {
    id: "makhana-mint-basil",
    name: "Classic Mint & Sweet Basil Roasted Makhana",
    category: "makhana",
    description: "An elegant herbal fusion that brings the cool, refreshing breeze of fresh kitchen gardens. Tossed with fine dry organic garden mint sheets and sweet basil flakes for an elite culinary experience.",
    shortDescription: "A cool garden breeze. Garden mint meets sweet basil leaves.",
    price: 379,
    rating: 4.8,
    weightOptions: ["120g", "250g"],
    flavors: ["Garden Mint & Basil", "Lemon Pepper Fusion", "Zesty Herbs"],
    originalIngredients: ["Premium Lotus Seeds", "Cold-Pressed Olive Oil", "Dehydrated Mint Leaves", "Sweet Basil", "Organic Rock Salt"],
    calories: 118,
    macros: {
      protein: "4.1g",
      fiber: "3.2g",
      carbs: "18.1g",
      fat: "3.0g"
    },
    healthHighlights: ["Promotes Digestion", "Rich in Antioxidants", "Heart Friendly", "No Added Preservatives"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI9SurnUsQhwnAD0rR6zsL4fP3EQiG5ae6xamRyTyLIA&s=10"
  },
  {
    id: "dryfruit-royal",
    name: "Royal Almond & Golden Saffron Crown Mix",
    category: "dryfruits",
    description: "A super-luxury mélange of whole Californian Mamra almonds, rich buttery cashews, and organic raisins infused overnight with real Kashmiri saffron strands and ground green cardamom.",
    shortDescription: "The sovereign blend of high-energy Mamra nuts with true saffron.",
    price: 699,
    rating: 5.0,
    weightOptions: ["200g", "450g"],
    flavors: ["Saffron Cardamom", "Vanilla Glaze Essence", "Raw UnSalted Natural"],
    originalIngredients: ["Mamra Almonds", "Premium Cashews", "Kashmiri Saffron", "Green Cardamom Essence", "Kishmish"],
    calories: 185,
    macros: {
      protein: "6.8g",
      fiber: "4.5g",
      carbs: "12.0g",
      fat: "11.5g"
    },
    healthHighlights: ["Brain-Boosting Vitamin E", "High Copper & Zinc", "Immune Strength", "Natural Antioxidant Infusion"],
    imageUrl: "https://i.ibb.co/F4g1VSL4/image.png"
  },
  {
    id: "namkeen-quinoa",
    name: "Quinoa Seed & Crisp Amaranth Wellness Namkeen",
    category: "namkeen",
    description: "A light, delicious reimagining of traditional namkeen. Popped nutritious quinoa grain, organic amaranth, and healthy watermelon seeds tossed with simple herbs. Completely oil-roasted, not fried.",
    shortDescription: "A baked, crunch-rich celebration of ancient super-grains and seeds.",
    price: 299,
    rating: 4.7,
    weightOptions: ["150g", "300g"],
    flavors: ["Spiced Herbs", "Simple Sea Salt", "Tangy Raw Mango Dust"],
    originalIngredients: ["Popped Quinoa", "Puffed Amaranth", "Pumpkin Seeds", "Watermelon Seeds", "Natural Herb Seasoning"],
    calories: 110,
    macros: {
      protein: "5.5g",
      fiber: "3.8g",
      carbs: "15.2g",
      fat: "2.5g"
    },
    healthHighlights: ["Over 5g complete Protein", "Baked - Zero Frying", "Low Saturated Fats", "High Iron & Magnesium"],
    imageUrl: "https://i.ibb.co/XrwZhg76/image.png"
  }
];

export const INGREDIENTS: Ingredient[] = [
  {
    id: "ing-makhana",
    name: "Gorgon Nut (Makhana)",
    scientificName: "Euryale Ferox",
    origin: "Prastine Wetlands of Mithila, Bihar",
    description: "Harvested through rigorous manual labor, lotus seeds are popped into premium makhana. Rich in kaempferol (a powerful natural anti-aging compound) and highly alkalizing.",
    protein: "9.7%",
    fiber: "7.6%",
    minerals: "Magnesium, Potassium, Calcium",
    energy: "350 kcal / 100g",
    luxuryRating: "Sovereign Gold Grade"
  },
  {
    id: "ing-almond",
    name: "Mamra Almonds",
    scientificName: "Prunus Dulcis",
    origin: "Kashmir Highlands",
    description: "Prized Mamra almonds contain higher oil content than regular almonds. Highly effective for brain development and supporting natural glowing skin health.",
    protein: "21.2%",
    fiber: "12.5%",
    minerals: "Vitamin E, Phosphorus, Riboflavin",
    energy: "579 kcal / 100g",
    luxuryRating: "Premium Mamra Grade"
  },
  {
    id: "ing-cashew",
    name: "Whole W180 Cashews",
    scientificName: "Anacardium Occidentale",
    origin: "Konkan Coastal Estates",
    description: "Known globally as the King of Cashews for their giant size and unblemished ivory texture. Delivers clean monounsaturated healthy fats crucial for cardiovascular strength.",
    protein: "18.2%",
    fiber: "3.3%",
    minerals: "Copper, Zinc, Magnesium, Iron",
    energy: "553 kcal / 100g",
    luxuryRating: "King Size W180 Grade"
  },
  {
    id: "ing-raisin",
    name: "Kandahari Golden Raisins",
    scientificName: "Vitis Vinifera",
    origin: "Sunny Valleys of Kandahar",
    description: "Sun-dried natural grape clusters with zero artificial sulfur processing. Plump, sweet, and bursting with blood-purifying iron properties.",
    protein: "3.1%",
    fiber: "4.0%",
    minerals: "Iron, Potassium, Vitamin B6",
    energy: "299 kcal / 100g",
    luxuryRating: "Imperial Jumbo Grade"
  }
];

export const STATS: Statistics[] = [
  {
    id: "stat-women",
    value: 500,
    suffix: "+",
    label: "Women Artisans Employed",
    description: "Leading self-help programs, establishing financial pride and high training."
  },
  {
    id: "stat-production",
    value: 200,
    suffix: "K+",
    label: "Healthy Packs Delivered",
    description: "Serving direct-to-home luxury orders across the country with fresh stock."
  },
  {
    id: "stat-customers",
    value: 50,
    suffix: "K+",
    label: "Happy Families Nourished",
    description: "Spreading the joy of guilt-free wellness and organic household snacking."
  },
  {
    id: "stat-purity",
    value: 100,
    suffix: "%",
    label: "Organic & Non-GMO",
    description: "Strict quality control keeping your food free of synthetic preservatives."
  }
];

export const TIMELINE: TimelineMilestone[] = [
  {
    step: "01",
    title: "Artisanal Training & Setup",
    subtitle: "Sourcing Skill Development",
    description: "Women from rural communities undergo rigorous culinary and quality standards training. We establish local cluster centers equipped with luxury grade state-of-the-art roasting machines.",
    impactMetric: "8 Weeks Elite Certification"
  },
  {
    step: "02",
    title: "Durable Clean Employment",
    subtitle: "Dignified Wages",
    description: "Securing permanent and certified employment opportunities with salaries up to 4x the regional average, providing robust work boundaries and health coverage.",
    impactMetric: "500+ Rural Women Integrated"
  },
  {
    step: "03",
    title: "Micro-Entrepreneurship",
    subtitle: "Leadership Roles",
    description: "Transitioning top artisans into management roles heading logistics, roasting plants, quality auditing, and micro-financing clusters.",
    impactMetric: "45 Women Plant Leaders"
  },
  {
    step: "04",
    title: "Financial Independence",
    subtitle: "Generation Shift",
    description: "Artisans open direct, individual bank accounts; financing the schooling of daughters, constructing smart homes, and uplifting deep village micro-economies.",
    impactMetric: "100% Zero-Debt Households"
  }
];

export const PLANS: SubscriptionPlan[] = [
  {
    id: "sub-monthly",
    name: "Lux Harmony Monthly",
    frequency: "Every 4 Weeks",
    price: 1199,
    features: [
      "4 Custom Curated Snack Pouches",
      "Freshly Popped On-Demand",
      "Complimentary Sample of Secret Herb Line",
      "Sponsor 1 Day Training for local artisan",
      "Free Express Delivery"
    ],
    popular: false
  },
  {
    id: "sub-wellness",
    name: "Sovereign Wellness Corporate Box",
    frequency: "Custom / Quarterly",
    price: 3499,
    features: [
      "12 Luxury Multi-Flavor Tins",
      "Personalized Custom Branding Plates",
      "Direct Artisan Signed Greeting Letter",
      "Sponsor 1 Complete Health Camp for collective",
      "Premium Silk Ribbon Packaging"
    ],
    popular: true
  },
  {
    id: "sub-festival",
    name: "Bloom Grand Festive Box",
    frequency: "One-Time Selection",
    price: 1999,
    features: [
      "6 Luxury Celebrations Packaging Tins",
      "Premium Walnut Wooden Gift Case",
      "Authentic Diya Hand-crafted by local artisans",
      "Sponsor child education program",
      "Gold Foil Engraved Gift Wrapping"
    ],
    popular: false
  }
];

export const GIFT_REGISTRY: GiftBoxRegistry[] = [
  {
    id: "gift-empress",
    name: "The Empress Ivory Gifting Chest",
    description: "A gorgeous brass-buttoned, cream-clothed luxury gift chest containing three high-potency tins: Pink Salt Makhana, Mamra Almond crown, and Crisp Amaranth snack.",
    price: 1499,
    itemsIncluded: ["Pink Salt Makhana (150g)", "Mama Almonds (200g)", "Crisp Amaranth Seed Mix (150g)", "Artisan Pride Letter"],
    imageType: "empress"
  },
  {
    id: "gift-royal",
    name: "The Imperial Rose-Gold Basket",
    description: "A woven premium natural seagrass basket with a velvet golden touch containing our limited saffron infused wellness mixtures and slow-roasted basil crunch makhana.",
    price: 2499,
    itemsIncluded: ["Saffron Crown Mix (300g)", "Mint & Basil Makhana (200g)", "Wellness Namkeen (200g)", "Handmade Decorative Linen Bag"],
    imageType: "royal"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Gayatri Devi",
    role: "Senior Makhana Popping Supervisor",
    rating: 5,
    text: "Before joining Bloom, our lives depended on seasonal farming. Today, I lead a team of 40 women. We earn respect in our village and are sending our girls to college. We put our heart and pride in every grain we roast.",
    location: "Mithila region, Bihar",
    empowermentNote: "Artisan Impact Profile"
  },
  {
    id: "test-2",
    name: "Nandini R. Sharma",
    role: "Premium Customer & Wellness Blogger",
    rating: 5,
    text: "The freshness is incomparable. The Makhana doesn't have that heavy stale flavor ordinary brands do. It's clean, crunchy, and beautifully seasoned. Knowing my healthy snack empowers fine women makes it double luxury.",
    location: "Mumbai, Maharashtra",
    empowermentNote: "Premium Consumer Verified"
  },
  {
    id: "test-3",
    name: "Chef Kunal Sen",
    role: "Luxury Culinary Curator",
    rating: 5,
    text: "As a culinary expert, the grading here is exceptional. Pop sizes are perfectly uniform, roasted exactly to dry-crisp snap without a single droplet of rancid oily weight. The Saffron Mamra mix is a masterful masterpiece.",
    location: "New Delhi",
    empowermentNote: "Connoisseur Choice"
  },
  {
    id: "test-4",
    name: "Ambika Pradhan",
    role: "Quality Assurance Head / Artisan Partner",
    rating: 5,
    text: "Maintaining strict pesticide-free validation is tough, but Bloom supports us with modern testing. I feel secure knowing that my family's clinical health and my financial health are completely protected here.",
    location: "Darbhanga District",
    empowermentNote: "Artisan Impact Profile"
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Mithila's Lotus Farms: The Mystical Journey of Gorgon Nuts",
    readTime: "5 min read",
    summary: "Delve deep into the sustainable organic wetlands of Mithila where pristine purple lotus flowers produce the nutrient-rich superfood known as Phool Makhana.",
    category: "Heritage & Agriculture"
  },
  {
    id: "blog-2",
    title: "The Anti-Aging Power of Kaempferol in Roasted Makhana",
    readTime: "4 min read",
    summary: "Scientific analysis of why gorgon nuts are valued heavily as youth preservation tools. Understanding natural flavonoids and low glycemic snacking benefits.",
    category: "Science & Wellness"
  },
  {
    id: "blog-3",
    title: "Guiding Rural Financial Joy: How Self-Help Groups Transform Lives",
    readTime: "6 min read",
    summary: "An inside look at our specialized micro-banking framework that empowers female farmers to become direct decision makers of household spending.",
    category: "Empowerment & Impact"
  }
];
