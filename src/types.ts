export interface Product {
  id: string;
  name: string;
  category: "makhana" | "dryfruits" | "namkeen";
  description: string;
  shortDescription: string;
  price: number;
  rating: number;
  weightOptions: string[];
  flavors: string[];
  originalIngredients: string[];
  calories: number;
  macros: {
    protein: string;
    fiber: string;
    carbs: string;
    fat: string;
  };
  healthHighlights: string[];
  rotationDegree?: number;
}

export interface Ingredient {
  id: string;
  name: string;
  scientificName: string;
  origin: string;
  description: string;
  protein: string;
  fiber: string;
  minerals: string;
  energy: string;
  luxuryRating: string;
}

export interface Statistics {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface TimelineMilestone {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  impactMetric: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  frequency: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export interface GiftBoxRegistry {
  id: string;
  name: string;
  description: string;
  price: number;
  itemsIncluded: string[];
  imageType: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  location: string;
  empowermentNote?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  readTime: string;
  summary: string;
  category: string;
}
