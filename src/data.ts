import { Product, Ingredient, Statistics, TimelineMilestone, SubscriptionPlan, Testimonial, GiftBoxRegistry, BlogPost } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "makhana-roasted",
    name: "Roasted Makhana",
    category: "makhana",
    description: "Handpicked premium Phool Makhana slow-roasted to absolute perfection in light cold-pressed oil, tossed with premium spices. Light, crunchy, and freshly prepared.",
    shortDescription: "Slow-roasted premium lotus seeds available in Mint, Chatpata Masala, Plain Salted, and Magic Masala.",
    price: 0,
    rating: 4.9,
    weightOptions: ["100g", "250g"],
    flavors: ["Mint Flavour", "Chatpata Masala", "Plain Salted", "Magic Masala"],
    originalIngredients: ["Premium Lotus Seeds", "Cold-Pressed Oil", "Natural Spices", "Organic Salt"],
    calories: 120,
    macros: {
      protein: "4.2g",
      fiber: "3.1g",
      carbs: "18.5g",
      fat: "3.2g"
    },
    healthHighlights: ["100% Preservative-Free", "Zero Trans Fats", "Gluten-Free", "Rich in Antioxidants"],
    imageUrl: "https://m.media-amazon.com/images/I/71paW2uT-kL.jpg"
  },
  {
    id: "energy-bar",
    name: "Energy Bar",
    category: "dryfruits",
    description: "A premium energy bar made entirely from wholesome dry fruits. Naturally sweetened with zero added sugar or preservatives.",
    shortDescription: "Wholesome energy bar crafted with premium almonds, cashews, and dates.",
    price: 0,
    rating: 4.8,
    weightOptions: ["40g", "120g"],
    flavors: ["Premium Dry Fruit Bar"],
    originalIngredients: ["Premium Almonds", "Rich Cashews", "Soft Dates", "Golden Raisins"],
    calories: 175,
    macros: {
      protein: "5.5g",
      fiber: "4.0g",
      carbs: "22.0g",
      fat: "8.5g"
    },
    healthHighlights: ["No Added Sugar", "100% Natural Ingredients", "High Fiber", "Clean Energy"],
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/6/DA/PX/HQ/64879238/dry-fruit-sweet-500x500.jpeg"
  },
  {
    id: "dryfruit-mix",
    name: "Premium Dry Fruit Mix",
    category: "dryfruits",
    description: "A hand-selected premium blend of California almonds, whole cashews, golden raisins, and choice dry fruits. Packed fresh for maximum flavor and nutrition.",
    shortDescription: "A premium curated mix of almonds, cashews, raisins, and select dry fruits.",
    price: 0,
    rating: 5.0,
    weightOptions: ["200g", "500g"],
    flavors: ["Classic Raw Mix", "Lightly Salted"],
    originalIngredients: ["Mamra Almonds", "Whole Cashews", "Golden Kishmish", "Pistachios"],
    calories: 180,
    macros: {
      protein: "6.5g",
      fiber: "4.2g",
      carbs: "14.0g",
      fat: "11.0g"
    },
    healthHighlights: ["Heart Friendly", "Rich in Vitamin E", "High Copper & Zinc", "Ethically Sourced"],
    imageUrl: "https://m.media-amazon.com/images/I/71m18e2dMAL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: "makhana-namkeen",
    name: "Makhana Mix Namkeen",
    category: "namkeen",
    description: "A crispy, traditional namkeen blend prepared using premium makhana, puffed amaranth, and seeds. Slow-roasted without frying for guilt-free everyday snacking.",
    shortDescription: "Traditional crispy namkeen blend featuring slow-roasted premium makhana.",
    price: 0,
    rating: 4.7,
    weightOptions: ["150g", "300g"],
    flavors: ["Classic Masala", "Tangy Herb"],
    originalIngredients: ["Slow-Roasted Makhana", "Puffed Amaranth", "Melon Seeds", "Traditional Spices"],
    calories: 115,
    macros: {
      protein: "4.8g",
      fiber: "3.5g",
      carbs: "16.5g",
      fat: "2.8g"
    },
    healthHighlights: ["Baked - Zero Frying", "Low Saturated Fats", "High Fiber", "No Artificial Flavours"],
    imageUrl: "https://myheartbeets.com/wp-content/uploads/2022/02/roasted-makhana-mix.jpg"
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
