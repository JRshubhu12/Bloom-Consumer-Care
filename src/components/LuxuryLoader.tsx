import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// Stage Definitions for the morphing center icon
type LoadingStage = "seed" | "sprout" | "leaf" | "lotus" | "logo";

interface LuxuryLoaderProps {
  onComplete: () => void;
}

export default function LuxuryLoader({ onComplete }: LuxuryLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<LoadingStage>("seed");
  const [textIndex, setTextIndex] = useState(0);

  const loadingTexts = [
    "Welcome To Bloom",
    "Crafted By Women",
    "Premium Ingredients",
    "Zero Preservatives",
    "Freshly Roasted",
    "Made With Purpose",
  ];

  // Organically increment progress
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Allow the final animation sequence to finish, then trigger complete callback
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        
        // Random organic increment sizes for realism
        const increment = Math.random() > 0.7 ? Math.floor(Math.random() * 4) + 1 : 1;
        const next = Math.min(prev + increment, 100);

        // Update visual stage based on progress
        if (next < 20) setStage("seed");
        else if (next < 45) setStage("sprout");
        else if (next < 70) setStage("leaf");
        else if (next < 90) setStage("lotus");
        else setStage("logo");

        return next;
      });
    };

    // Fast-paced but natural intervals
    timer = setInterval(updateProgress, 35);
    return () => clearInterval(timer);
  }, [onComplete]);

  // Rotate tagline text with smooth transitions
  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 900);
    return () => clearInterval(textInterval);
  }, []);

  // Center SVG animations
  const renderStageIcon = () => {
    switch (stage) {
      case "seed":
        return (
          <motion.svg
            key="seed"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewBox="0 0 24 24"
            className="w-16 h-16 text-[#C6A769] fill-[#C6A769]/10 stroke-[1.2]"
            stroke="currentColor"
          >
            <path d="M12 3C12 3 6 8.5 6 13.5C6 16.8 8.7 19.5 12 19.5C15.3 19.5 18 16.8 18 13.5C18 8.5 12 3 12 3Z" />
          </motion.svg>
        );
      case "sprout":
        return (
          <motion.svg
            key="sprout"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewBox="0 0 24 24"
            className="w-16 h-16 text-[#C6A769] fill-none stroke-[1.2]"
            stroke="currentColor"
          >
            <path d="M12 22V12M12 12C12 9.5 10.5 7.5 7.5 7.5M12 12C13.5 10.5 15.5 10.5 17 12" strokeLinecap="round" />
          </motion.svg>
        );
      case "leaf":
        return (
          <motion.svg
            key="leaf"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewBox="0 0 24 24"
            className="w-16 h-16 text-[#C6A769] fill-[#C6A769]/15 stroke-[1.2]"
            stroke="currentColor"
          >
            <path d="M12 21V10M12 10C12 7.5 9.5 5.5 6.5 5.5C4 5.5 4 10 12 10ZM12 10C12 7.5 14.5 5.5 17.5 5.5C20 5.5 20 10 12 10Z" />
          </motion.svg>
        );
      case "lotus":
        return (
          <motion.svg
            key="lotus"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewBox="0 0 24 24"
            className="w-20 h-20 text-[#C6A769] fill-[#C6A769]/20 stroke-[1.2]"
            stroke="currentColor"
          >
            <path d="M12 22C17.5 22 21 17.5 21 14C17.5 14 14.5 16 12 20C9.5 16 6.5 14 2 14C2 17.5 5.5 22 12 22Z" />
            <path d="M12 3C13.5 7 17 9 20 9C17 11 15 15 12 21C9 15 7 11 4 9C7 9 10.5 7 12 3Z" opacity="0.8" />
          </motion.svg>
        );
      case "logo":
        return (
          <motion.img
            key="logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            src="/company-logo.png"
            alt="Bloom Consumer Care Logo"
            className="w-24 h-24 object-contain filter drop-shadow-[0_4px_12px_rgba(198,167,105,0.15)]"
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#FAF8F5] via-[#F6F1EA] to-[#FAF8F5] select-none overflow-hidden">
      
      {/* VECTOR GRAIN NOISE BACKGROUND OVERLAY */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none mix-blend-overlay">
        <filter id="loaderNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#loaderNoise)" />
      </svg>

      {/* AMBIENT FLOATING LIGHT GOLDEN PARTICLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#FAF3E9] blur-[100px] opacity-70 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-[#EBF1E8] blur-[120px] opacity-55 animate-pulse" />
      </div>

      {/* CENTER METAPHOR STAGE GRAPHIC */}
      <div className="relative flex items-center justify-center w-32 h-32 mb-6">
        <div className="absolute inset-0 rounded-full border border-[#C6A769]/10 bg-white/40 backdrop-blur-[2px] scale-110" />
        <div className="absolute inset-2 rounded-full border border-[#C6A769]/5 bg-[#FCFAF7] shadow-inner" />
        
        <AnimatePresence mode="wait">
          {renderStageIcon()}
        </AnimatePresence>
      </div>

      {/* LUXURY EDITORIAL BRAND DISPLAY */}
      <div className="text-center space-y-2 max-w-sm px-4">
        <h1 className="font-serif text-[#4B3425] text-3xl sm:text-4xl tracking-[0.25em] uppercase font-semibold leading-none pl-[0.25em]">
          BLOOM<span className="text-xs align-super text-[#C6A769]">™</span>
        </h1>
        <p className="font-mono text-[#C6A769] text-[9px] uppercase tracking-[0.4em] font-medium pl-[0.4em]">
          Consumer Care
        </p>

        {/* Dynamic Tagline Rotator */}
        <div className="h-6 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 0.75 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="font-sans text-[11px] text-charcoal tracking-widest font-light uppercase"
            >
              {loadingTexts[textIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* GOLDEN VINE PROGRESS TRACK */}
      <div className="mt-8 flex flex-col items-center w-full max-w-[280px]">
        <svg width="280" height="50" viewBox="0 0 280 50" fill="none" className="overflow-visible">
          {/* Faint elegant background track */}
          <path 
            d="M 10 25 Q 75 5, 140 25 T 270 25" 
            stroke="rgba(198, 167, 105, 0.15)" 
            strokeWidth="1.5" 
            strokeDasharray="4 4" 
          />
          
          {/* Growing golden vine */}
          <path 
            d="M 10 25 Q 75 5, 140 25 T 270 25" 
            stroke="#C6A769" 
            strokeWidth="1.75" 
            strokeLinecap="round" 
            strokeDasharray="300" 
            strokeDashoffset={300 - (progress / 100) * 260} 
            className="transition-all duration-100 ease-out"
          />

          {/* Leaf 1 sprout at 25% */}
          {progress > 25 && (
            <motion.path 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              d="M 75 14 Q 65 2, 80 2 Q 85 14 75 14" 
              fill="#C6A769" 
              className="origin-bottom-left"
            />
          )}

          {/* Leaf 2 sprout at 55% */}
          {progress > 55 && (
            <motion.path 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              d="M 140 25 Q 150 13, 140 7 Q 130 17 140 25" 
              fill="#C6A769" 
              className="origin-bottom"
            />
          )}

          {/* Leaf 3 sprout at 80% */}
          {progress > 80 && (
            <motion.path 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              d="M 205 27 Q 215 15, 208 9 Q 198 21 205 27" 
              fill="#C6A769" 
              className="origin-bottom"
            />
          )}

          {/* Lotus blooming at 100% */}
          {progress === 100 ? (
            <motion.g 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 0.85, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              transform="translate(270, 25)"
            >
              <path d="M 0 -8 Q -10 -22 0 -30 Q 10 -22 0 -8" fill="#C6A769" />
              <path d="M 0 -8 Q -20 -16 -24 -8 Q -16 0 0 -8" fill="#C6A769" opacity="0.85" />
              <path d="M 0 -8 Q 20 -16 24 -8 Q 16 0 0 -8" fill="#C6A769" opacity="0.85" />
            </motion.g>
          ) : (
            <circle cx={10 + (progress / 100) * 260} cy={25} r="3" fill="#C6A769" className="transition-all duration-100 ease-out" />
          )}
        </svg>

        {/* Minimal Percentage number */}
        <span className="font-mono text-[9px] text-[#C6A769]/70 tracking-widest mt-1">
          {progress}%
        </span>
      </div>

      {/* BOTTOM ESTABLISHED STAMP & BRAND SLOGAN */}
      <div className="absolute bottom-8 text-center space-y-1">
        <span className="font-sans text-[8px] text-charcoal/45 tracking-[0.3em] uppercase block">
          Purely Natural. Zero Preservatives.
        </span>
        <span className="font-sans text-[7px] text-[#C6A769]/55 tracking-[0.2em] uppercase block">
          EST. 2026
        </span>
      </div>

    </div>
  );
}
