import React from "react";

// Beautiful premium botanical leaf silhouettes
const LEAF_SHAPES = [
  <path d="M12,2 C16,6 20,12 18,17 C16.5,20.5 12,22 12,22 C12,22 7.5,20.5 6,17 C4,12 8,6 12,2 Z" />,
  <path d="M12,2 C14,6 17,13 14,18 C12,21 12,22 12,22 C12,22 12,21 10,18 C7,13 10,6 12,2 Z" />,
  <path d="M2,22 C8,18 18,12 22,2 C18,6 10,12 2,22 Z" />,
];

interface LeafConfig {
  id: number;
  shapeIndex: number;
  color: string;
  sizeClass: string;
  animationClass: string;
  delay: string;
  blur: string;
  scale: number;
}

const LEAVES: LeafConfig[] = [
  { id: 1, shapeIndex: 0, color: "rgba(122, 140, 85, 0.12)", sizeClass: "w-14 h-14", animationClass: "animate-leaf-drift-1", delay: "-8s", blur: "blur-[0.5px]", scale: 1.0 },
  { id: 2, shapeIndex: 1, color: "rgba(109, 122, 77, 0.10)", sizeClass: "w-12 h-12", animationClass: "animate-leaf-drift-2", delay: "-18s", blur: "blur-0", scale: 0.8 },
  { id: 3, shapeIndex: 2, color: "rgba(182, 138, 53, 0.08)", sizeClass: "w-16 h-16", animationClass: "animate-leaf-drift-3", delay: "-32s", blur: "blur-[2px]", scale: 1.2 },
  { id: 4, shapeIndex: 0, color: "rgba(212, 197, 185, 0.15)", sizeClass: "w-10 h-10", animationClass: "animate-leaf-drift-4", delay: "-42s", blur: "blur-0", scale: 0.7 },
  { id: 5, shapeIndex: 1, color: "rgba(122, 140, 85, 0.08)", sizeClass: "w-16 h-16", animationClass: "animate-leaf-drift-1", delay: "-28s", blur: "blur-[3px]", scale: 1.4 },
  { id: 6, shapeIndex: 2, color: "rgba(212, 197, 185, 0.12)", sizeClass: "w-12 h-12", animationClass: "animate-leaf-drift-2", delay: "-48s", blur: "blur-[0.5px]", scale: 0.9 },
  { id: 7, shapeIndex: 0, color: "rgba(182, 138, 53, 0.09)", sizeClass: "w-14 h-14", animationClass: "animate-leaf-drift-3", delay: "-12s", blur: "blur-0", scale: 1.1 },
  { id: 8, shapeIndex: 1, color: "rgba(109, 122, 77, 0.12)", sizeClass: "w-10 h-10", animationClass: "animate-leaf-drift-4", delay: "-22s", blur: "blur-[1px]", scale: 0.75 },
];

const DUST_PARTICLES = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  size: Math.random() * 3 + 1, // 1px to 4px
  x: Math.random() * 100, // starting viewport width %
  delay: `-${Math.random() * 45}s`,
  color: Math.random() > 0.5 ? "rgba(212, 179, 106, 0.6)" : "rgba(234, 223, 203, 0.5)", // #D4B36A or #EADFCB
  animationClass: i % 2 === 0 ? "animate-golden-dust" : "animate-golden-dust-alt",
}));

const SUN_RAYS = [
  { id: 1, top: "-10%", left: "-10%", width: "40%", height: "150%", rotation: "-15deg", delay: "0s" },
  { id: 2, top: "-20%", left: "30%", width: "50%", height: "150%", rotation: "-20deg", delay: "-5s" },
  { id: 3, top: "10%", left: "60%", width: "30%", height: "150%", rotation: "-10deg", delay: "-10s" }
];

export default function FloatingParticles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1] w-full h-full select-none mix-blend-plus-lighter">
      
      {/* Sun Rays Layer */}
      <div className="absolute inset-0 opacity-50">
        {SUN_RAYS.map((ray) => (
          <div
            key={`ray-${ray.id}`}
            className="absolute bg-gradient-to-r from-transparent via-[#F9F4E8] to-transparent animate-sun-ray"
            style={{
              top: ray.top,
              left: ray.left,
              width: ray.width,
              height: ray.height,
              transform: `rotate(${ray.rotation})`,
              animationDelay: ray.delay,
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>

      {/* Botanical Leaves Layer */}
      {LEAVES.map((leaf) => (
        <div
          key={`leaf-${leaf.id}`}
          className={`absolute ${leaf.sizeClass} ${leaf.animationClass} ${leaf.blur}`}
          style={{
            animationDelay: leaf.delay,
            transform: `scale(${leaf.scale})`,
            willChange: "transform, opacity",
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full" style={{ fill: leaf.color }}>
            {LEAF_SHAPES[leaf.shapeIndex]}
          </svg>
        </div>
      ))}

      {/* Golden Dust Particles Layer */}
      {DUST_PARTICLES.map((dust) => (
        <div
          key={`dust-${dust.id}`}
          className={`absolute rounded-full ${dust.animationClass}`}
          style={{
            left: `${dust.x}%`,
            width: `${dust.size}px`,
            height: `${dust.size}px`,
            backgroundColor: dust.color,
            animationDelay: dust.delay,
            filter: "blur(1px)",
            boxShadow: `0 0 ${dust.size * 2}px ${dust.color}`,
          }}
        />
      ))}

    </div>
  );
}
