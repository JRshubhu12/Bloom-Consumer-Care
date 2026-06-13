import React from "react";

export default function FloatingParticles() {
  // Renders a small set of GPU-accelerated ambient glowing orbs that float using CSS keyframes.
  // will-change: transform ensures the browser promotes these elements to their own GPU composite layers.
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 min-h-full">
      <div 
        className="absolute top-[12%] left-[4%] w-80 h-80 rounded-full bg-[#FAF3E9] blur-[120px] opacity-60" 
        style={{
          animation: "float-slow 28s ease-in-out infinite alternate",
          willChange: "transform",
        }}
      />
      <div 
        className="absolute top-[38%] right-[6%] w-[420px] h-[420px] rounded-full bg-[#E6EFE2] blur-[140px] opacity-45" 
        style={{
          animation: "float-reverse 32s ease-in-out infinite alternate",
          willChange: "transform",
        }}
      />
      <div 
        className="absolute bottom-[18%] left-[8%] w-[450px] h-[450px] rounded-full bg-[#FCF1E1] blur-[150px] opacity-50" 
        style={{
          animation: "float-slow 36s ease-in-out infinite alternate",
          willChange: "transform",
        }}
      />
    </div>
  );
}

