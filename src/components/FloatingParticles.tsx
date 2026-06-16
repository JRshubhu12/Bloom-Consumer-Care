import React from "react";

// Beautiful premium botanical leaf silhouettes
const LEAF_SHAPES = [
  // Silhouette A: Sage leaf (classic, elegant)
  <path d="M12,2 C16,6 20,12 18,17 C16.5,20.5 12,22 12,22 C12,22 7.5,20.5 6,17 C4,12 8,6 12,2 Z" />,
  // Silhouette B: Olive leaf (slender, tapered)
  <path d="M12,2 C14,6 17,13 14,18 C12,21 12,22 12,22 C12,22 12,21 10,18 C7,13 10,6 12,2 Z" />,
  // Silhouette C: Willow leaf (gently curved crescent)
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
  {
    id: 1,
    shapeIndex: 0,
    color: "rgba(122, 140, 85, 0.12)", // Sage Green
    sizeClass: "w-14 h-14",
    animationClass: "animate-leaf-drift-1",
    delay: "-8s",
    blur: "blur-[0.5px]",
    scale: 1.0,
  },
  {
    id: 2,
    shapeIndex: 1,
    color: "rgba(109, 122, 77, 0.10)", // Olive Green
    sizeClass: "w-12 h-12",
    animationClass: "animate-leaf-drift-2",
    delay: "-18s",
    blur: "blur-0",
    scale: 0.8,
  },
  {
    id: 3,
    shapeIndex: 2,
    color: "rgba(182, 138, 53, 0.08)", // Warm Gold
    sizeClass: "w-16 h-16",
    animationClass: "animate-leaf-drift-3",
    delay: "-32s",
    blur: "blur-[2px]",
    scale: 1.2,
  },
  {
    id: 4,
    shapeIndex: 0,
    color: "rgba(212, 197, 185, 0.15)", // Soft Beige
    sizeClass: "w-10 h-10",
    animationClass: "animate-leaf-drift-4",
    delay: "-42s",
    blur: "blur-0",
    scale: 0.7,
  },
  {
    id: 5,
    shapeIndex: 1,
    color: "rgba(122, 140, 85, 0.08)", // Sage Green
    sizeClass: "w-16 h-16",
    animationClass: "animate-leaf-drift-1",
    delay: "-28s",
    blur: "blur-[3px]", // Foreground deep parallax
    scale: 1.4,
  },
  {
    id: 6,
    shapeIndex: 2,
    color: "rgba(212, 197, 185, 0.12)", // Soft Beige
    sizeClass: "w-12 h-12",
    animationClass: "animate-leaf-drift-2",
    delay: "-48s",
    blur: "blur-[0.5px]",
    scale: 0.9,
  },
  {
    id: 7,
    shapeIndex: 0,
    color: "rgba(182, 138, 53, 0.09)", // Warm Gold
    sizeClass: "w-14 h-14",
    animationClass: "animate-leaf-drift-3",
    delay: "-12s",
    blur: "blur-0",
    scale: 1.1,
  },
  {
    id: 8,
    shapeIndex: 1,
    color: "rgba(109, 122, 77, 0.12)", // Olive Green
    sizeClass: "w-10 h-10",
    animationClass: "animate-leaf-drift-4",
    delay: "-22s",
    blur: "blur-[1px]",
    scale: 0.75,
  },
];

export default function FloatingParticles() {
  // Renders premium, minimalist, GPU-accelerated leaf drift animations.
  // Using fixed position layer to drift across viewport, pointer-events disabled.
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1] w-full h-full select-none">
      {LEAVES.map((leaf) => (
        <div
          key={leaf.id}
          className={`absolute ${leaf.sizeClass} ${leaf.animationClass} ${leaf.blur}`}
          style={{
            animationDelay: leaf.delay,
            transform: `scale(${leaf.scale})`,
            willChange: "transform, opacity",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full"
            style={{ fill: leaf.color }}
          >
            {LEAF_SHAPES[leaf.shapeIndex]}
          </svg>
        </div>
      ))}
    </div>
  );
}
