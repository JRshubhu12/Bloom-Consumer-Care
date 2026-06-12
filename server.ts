import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Safe lazy initializer for Google Gen AI
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is missing.");
      }
      aiClient = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
    return aiClient;
  }

  // API endpoint for AI Snack Recommendation
  app.post("/api/recommend", async (req, res) => {
    try {
      const { preferences, healthGoals, ageGroup, dietType } = req.body;
      
      const prompt = `You are the premium nutrition chef & empowerment advisor at Bloom Consumer Care.
Based on the customer's profile:
- Diet Type: ${dietType || "General / Organic"}
- Primary Health/Wellness Goals: ${healthGoals || "Healthy snacking, higher energy, weight management"}
- Flavor Preferences: ${preferences || "Savory, slight spice, natural sweetness"}
- Age Bracket: ${ageGroup || "Adult"}

Provide an ultra-premium personalized recommendation. Suggest a specific combination of Bloom's core products (Roasted Makhana, Premium Dry Fruits, or Healthy Namkeen) and explain:
1. "The Pairing": Why this specific combo fits their profile.
2. "Macro Highlights": Protein, Fiber, and minerals (e.g., magnesium in makhana).
3. "Empowerment Connection": A brief, inspiring note about how our women artisans handcrafted this makhana with love, connecting rural community development to wellness.
4. "Chef's Tip": How to enjoy it in a daily ritual (e.g., pairing with green tea in the afternoon).

Keep the tone highly refined, luxury, inspiring, warm, and elite (comparable to Forest Essentials, Aesop, or Laduree). Return your response strictly in structured JSON matching this schema:
{
  "recommendedSnacks": ["Snack Name 1", "Snack Name 2"],
  "pairingRationale": "Rationale description here",
  "nutritionalValue": "Protein, minerals, and caloric highlight here",
  "empowermentStory": "Empowerment impact story here",
  "lifestyleTip": "Daily wellness ritual recommendation here"
}`;

      const ai = getGeminiClient();
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      });

      const textResult = response.text;
      if (!textResult) {
        return res.status(500).json({ error: "Failed to generate recommendations from AI." });
      }

      const parsedJSON = JSON.parse(textResult.trim());
      return res.json(parsedJSON);
    } catch (error: any) {
      console.warn("Gemini recommendation error or key not set, sending ultra-premium curated defaults:", error.message);
      // Fallback response with premium styling in case API key is not fully configured or fails
      return res.json({
        recommendedSnacks: ["Roasted Himalayan Pink Salt Makhana", "Rich Cocoa Almond-Cashew Royale"],
        pairingRationale: "A pristine curation of fiber-rich lotus crop minerals and toasted healthy fats, curated for clean, sustained energy release.",
        nutritionalValue: "High in raw Magnesium, containing 6.8g clean vegan Protein, low glycemic index, and robust dietary Fiber under 140 kcal.",
        empowermentStory: "Lovingly hand-harvested from self-help women's collectives in rural India, directly sponsoring education and livelihood for female farmers.",
        lifestyleTip: "Indulge in this pairing during the golden transition of 4 PM afternoon tea, accompanied by soft meditation or green tea.",
        isFallback: true,
        error: error.message
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start fullstack server", err);
});
