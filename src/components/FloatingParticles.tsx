import React from "react";
import { motion } from "motion/react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  rotationSpeed: number;
  type: "particle" | "sparkle" | "glow";
}

export default function FloatingParticles() {
  const particles = React.useMemo<Particle[]>(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (i % 3 === 0 ? 30 : Math.random() * 8 + 4), 
      delay: Math.random() * 5,
      duration: Math.random() * 20 + 20,
      opacity: i % 4 === 0 ? 0.08 : Math.random() * 0.15 + 0.05,
      rotationSpeed: Math.random() * 360 - 180,
      type: i % 5 === 0 ? "glow" : i % 3 === 0 ? "particle" : "sparkle",
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {particles.map((p) => {
        if (p.type === "glow") {
          return (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-gold/10 blur-3xl"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size * 5}px`,
                height: `${p.size * 5}px`,
                opacity: p.opacity,
              }}
              animate={{
                x: [0, 40, -40, 0],
                y: [0, -40, 40, 0],
              }}
              transition={{
                duration: p.duration * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            />
          );
        }

        if (p.type === "particle") {
          // Drawing a beautiful abstract organic seed shape representing pop makhana seed
          return (
            <motion.div
              key={p.id}
              className="absolute bg-white border border-gold-light/25 shadow-sm"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size * 0.9}px`,
                opacity: p.opacity + 0.15,
                borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%", // unique organic bulb
              }}
              animate={{
                x: [0, p.x > 50 ? -25 : 25, 0],
                y: [0, p.y > 50 ? -40 : 40, 0],
                rotate: [0, p.rotationSpeed, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            />
          );
        }

        // Luxurious golden spark
        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-gold"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size / 2}px`,
              height: `${p.size / 2}px`,
              opacity: p.opacity + 0.3,
              boxShadow: "0 0 10px rgba(200, 169, 107, 0.4)",
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.sin(p.id) * 20, 0],
              scale: [1, 1.4, 0.8, 1],
            }}
            transition={{
              duration: p.duration * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        );
      })}
    </div>
  );
}
