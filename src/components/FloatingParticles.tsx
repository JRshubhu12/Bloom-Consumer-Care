import React from "react";

export default function FloatingParticles() {
  // Renders beautiful, GPU-accelerated slow-floating leaves and seeds
  // that drift in the background to convey a gentle farm breeze.
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 min-h-full select-none">
      
      {/* Leaf 1 - Top Left */}
      <div 
        className="absolute top-[12%] left-[6%] w-10 h-10 text-leaf/10 fill-leaf/10 ambient-float"
        style={{ willChange: "transform" }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M17 2C17 2 10 8 6 12C4 14 3 17 3 20C6 20 9 19 11 17C15 13 21 6 21 6C21 6 19 4 17 2Z" />
        </svg>
      </div>

      {/* Leaf 2 - Mid Right */}
      <div 
        className="absolute top-[35%] right-[8%] w-12 h-12 text-nature/10 fill-nature/10 ambient-float-delayed"
        style={{ willChange: "transform" }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M2 22C2 22 10 18 14 10C16 6 22 2 22 2C22 2 18 8 14 10C10 12 2 22 2 22Z" />
        </svg>
      </div>

      {/* Seed/Grain 3 - Lower Left */}
      <div 
        className="absolute top-[65%] left-[5%] w-8 h-8 text-gold/10 fill-gold/5 ambient-float"
        style={{ willChange: "transform" }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 3C12 3 6 8.5 6 13.5C6 16.8 8.7 19.5 12 19.5C15.3 19.5 18 16.8 18 13.5C18 8.5 12 3 12 3Z" />
        </svg>
      </div>

      {/* Leaf 4 - Footer Area Left */}
      <div 
        className="absolute bottom-[20%] left-[12%] w-11 h-11 text-leaf/10 fill-leaf/10 ambient-float-delayed"
        style={{ willChange: "transform" }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M17 2C17 2 10 8 6 12C4 14 3 17 3 20C6 20 9 19 11 17C15 13 21 6 21 6C21 6 19 4 17 2Z" />
        </svg>
      </div>

      {/* Seed 5 - Mid Left */}
      <div 
        className="absolute top-[48%] left-[15%] w-7 h-7 text-nature/10 fill-none ambient-float"
        style={{ willChange: "transform" }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22V10M12 10C12 7.5 9.5 5.5 6.5 5.5C4 5.5 4 10 12 10ZM12 10C12 7.5 14.5 5.5 17.5 5.5C20 5.5 20 10 12 10Z" />
        </svg>
      </div>

    </div>
  );
}
