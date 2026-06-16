# Bloom Purely Natural - Website Details & Architecture

This document provides a comprehensive overview of the design, libraries, layout sections, components, cards, buttons, and performance specifications for the **Bloom Purely Natural** website.

---

## 📖 Brand Overview
**Bloom Purely Natural** is a premium, social-impact food brand dedicated to producing preservative-free roasted makhana and dry-fruit snacks. The brand is built on two core pillars:
1. **Healthy, Wholesome Snacking**: Crafting small-batch, freshly roasted snacks using 100% natural ingredients.
2. **Women Empowerment**: Employing only women team members, helping increase their incomes, livelihoods, and skills in rural communities.

---

## 🛠️ Technology Stack & Libraries

The website is constructed as a modern, high-performance Vite React single-page application (SPA).

| Library / Tool | Version | Purpose |
| :--- | :--- | :--- |
| **React** | `^19.0.1` | UI Library (Core application logic) |
| **Vite** | `^6.2.3` | Next-generation frontend bundler & dev server |
| **TailwindCSS** | `^4.1.14` | Utility-first styling framework |
| **Framer Motion (`motion/react`)** | `^12.23.24` | Animation engine for premium layout transitions |
| **Lenis** | `^1.3.23` | GPU-accelerated smooth scrolling (Apple-like feel) |
| **Lucide React** | `^0.546.0` | High-quality, clean vector stroke icons |
| **Express** | `^4.21.2` | Backend server for hosting endpoints and Gemini API routing |
| **@google/genai** | `^2.4.0` | Google Gemini API SDK for the AI Snacking Assistant |
| **TypeScript** | `~5.8.2` | Strong type-safety and developer tooling |

---

## 🗂️ Website Sections & Architecture

The single-page landing page is structured into distinct, scroll-synchronized sections:

### 1. Preloader Screen (`LuxuryLoader.tsx`)
* **Visual Concept**: An immersive loading overlay reflecting growth stages: `Seed` ➔ `Sprout` ➔ `Leaf` ➔ `Lotus` ➔ `Brand Logo`.
* **Details**: Computes progress with random organic increments. Accompanied by a growing golden vine progress track and rotating luxury taglines. Disables page scrolling during active states.

### 2. Sidebar Navigation Track (`SidebarScroller.tsx`)
* **Visual Concept**: A left-aligned vertical scrollbar that tracks screen depth.
* **Details**: Dynamically fills a golden timeline path based on scroll position. Renders morphing SVG indicators representing growth stages (Seed, Leaf, Flower) and reveals text tooltips on hover.

### 3. Hero Landing Area (`Hero.tsx`)
* **Details**: High-impact editorial headline, nature-inspired badge ("100% Natural • Farm Fresh"), and CTA buttons to explore the store.
* **Media Carousel**: A smooth fade-in slider showing different roasted makhana collections. Utilizes `fetchPriority="high"` on the initial slide to optimize First Contentful Paint (FCP) and Largest Contentful Paint (LCP).

### 4. Brand Story Section (`AboutStory.tsx`)
* **Details**: The editorial introduction of the brand's social impact model, woman-first workforce, and health dedication. Contains secondary feature callouts highlighting the village clusters and preservative-free snack specifications.

### 5. Why Choose Bloom (`WhyBloom.tsx`)
* **Details**: A 3x2 grid outlining the brand's core values: Preservative-Free Crafting, Wholesome Snacking, Direct From Farm Sourcing, Empowering Communities, Honest Taste, and Transparency.

### 6. Women Empowerment (`WomenEmpowerment.tsx`)
* **Details**: A dedicated section explaining the brand's social commitment. Contains glassmorphic stats cards showing Respect & Dignity, Inclusive Participation, and Shared Progress, followed by a luxury quote banner: *"When women grow, communities grow stronger."*

### 7. Core Promises (`OurImpact.tsx`)
* **Details**: Highlights the brand commitments (Preservative-Free, Quality Ingredients, Freshly Crafted, and Trust) using micro-interactive floating cards.

### 8. Seed to Soul Journey (`IngredientHighlight.tsx`)
* **Details**: A horizontal timeline tracking the lifecycle of Bloom's ingredients from crop cultivation, manual selection, gentle roasting, airtight packaging, to home delivery.

### 9. Featured Collections Carousel (`FeaturedProducts.tsx`)
* **Details**: A horizontal scrolling product shelf containing various makhana flavors and dry fruit mixes.
* **Product Detail Modals**: Clicking "View Details" opens a modal overlay displaying descriptions, flavor selectors, key nutrition highlights, package weight details, and direct cart additions.

### 10. Gourmet Wellness Shelf (`BestSellersStrip.tsx`)
* **Details**: Displays product cards featuring micro-nutrition breakdowns (protein, fiber, carbs, calories) and detailed ingredients lists. Includes an overlay panel providing detailed specifications on hover (or click on mobile).

### 11. Interactive AI Assistant (`App.tsx`)
* **Details**: A toggleable chat widget powered by Google's Gemini API. The assistant represents "Bloom Purely Natural" and helps users with nutritional queries, flavor recommendations, recipe ideas, and sourcing details.

### 12. Contact & Sourcing Partners (`ContactSection.tsx`)
* **Details**: Contains an active query submission form (Name, Phone, Email, Message) with validation and success states, a direct WhatsApp chat launch button, an embedded Google Map indicating the Varanasi hub, and a premium food-photography banner.

### 13. Footer (`Footer.tsx`)
* **Details**: Contains logo, brand slogan ("Purely Natural. Zero Preservatives."), footer navigation links, active contact info (Varanasi, India), and social media link paths.

---

## 🎨 Interactive Elements & Design System

The styling framework combines Tailwind CSS utility classes with bespoke CSS declarations in `index.css` to build an organic, luxury aesthetic.

### Card Hover & Breeze Interactions
All components follow nature-inspired "breeze" interactions (calm, slow transitions avoiding tech glows):
* **`.premium-card` / `.feature-card`**:
  * Hover raises the card by `-8px` on the Y-axis.
  * Slight scaling factor (`scale(1.02)`).
  * Smooth border transition to warm gold (`#C6A769`).
  * Ambient drop shadow expands softly (`0 20px 40px rgba(0,0,0,0.05)`).
  * Background shows a subtle dot grid pattern and soft light overlay.
* **`.feature-icon`**: Hover triggers a gentle `3-degree` rotation and minor scale.
* **`.product-image`**: On card hover, the image performs a slow `1.03` zoom and subtle floating drift.
* **`.premium-btn`**: Includes smooth background color animations, sliding Arrow symbols, and gold-highlight lines.
* **`.ambient-float`**: GPU-accelerated background graphic drift using `@keyframes ambient-drift-slow` to slowly rotate and float SVG leaves over a `20s - 24s` loop.

---

## 🚀 Performance Optimization Features
* **Framer Motion Lazy Loading**: Configured `<LazyMotion features={domAnimation}>` wrapping the root render tree to defer chunk loading for all layout components using `<m.*>` tags.
* **CLS Prevention**: All image wrappers feature fixed aspect ratios (`aspect-[4/3]`, `aspect-square`, `h-64`) preventing Cumulative Layout Shift during load.
* **Lazy Sourcing**: Below-the-fold assets, including product images and iframe maps, utilize `loading="lazy"`.
* **Hardware Acceleration**: Transitions use `will-change: transform` and `transform: translateZ(0)` to offload rendering to the GPU, maintaining a stable 60 FPS scrolling experience on mobile.
