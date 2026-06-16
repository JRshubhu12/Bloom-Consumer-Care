import React, { useEffect, useRef, useState } from "react";

export default function PremiumCursor() {
  const leafRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Detect mobile touch screen or reduced motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    
    if (prefersReducedMotion || isTouchDevice) {
      setEnabled(false);
      return;
    }
    
    setEnabled(true);

    const mouse = { x: 0, y: 0 };
    const leaf = { x: 0, y: 0 };
    const trails = Array.from({ length: 5 }, () => ({ x: 0, y: 0 }));

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (leafRef.current) {
        leafRef.current.style.opacity = "1";
      }
      trailRefs.current.forEach((el) => {
        if (el) el.style.opacity = "0.4";
      });
    };

    const handleMouseLeave = () => {
      if (leafRef.current) leafRef.current.style.opacity = "0";
      trailRefs.current.forEach((el) => {
        if (el) el.style.opacity = "0";
      });
    };

    // Global click ripple handler
    const handleClick = (e: MouseEvent) => {
      if (!rippleRef.current) return;
      const ripple = rippleRef.current;
      
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ripple.style.transform = "translate(-50%, -50%) scale(0)";
      ripple.style.opacity = "0.75";
      
      // Trigger reflow
      void ripple.offsetWidth;
      
      ripple.style.transition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease-out";
      ripple.style.transform = "translate(-50%, -50%) scale(1.8)";
      ripple.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Animation Loop (lerping coordinates for smooth spring-like ease)
    let animationFrameId: number;
    const tick = () => {
      // Lerp leaf
      leaf.x += (mouse.x - leaf.x) * 0.15;
      leaf.y += (mouse.y - leaf.y) * 0.15;

      if (leafRef.current) {
        leafRef.current.style.transform = `translate3d(${leaf.x - 8}px, ${leaf.y - 8}px, 0)`;
      }

      // Lerp trailing particles
      trails.forEach((trail, i) => {
        const targetX = i === 0 ? leaf.x : trails[i - 1].x;
        const targetY = i === 0 ? leaf.y : trails[i - 1].y;

        trail.x += (targetX - trail.x) * (0.25 - i * 0.03);
        trail.y += (targetY - trail.y) * (0.25 - i * 0.03);

        const el = trailRefs.current[i];
        if (el) {
          el.style.transform = `translate3d(${trail.x - 3}px, ${trail.y - 3}px, 0)`;
        }
      });

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Click gold ripple ring */}
      <div 
        ref={rippleRef}
        className="absolute w-12 h-12 rounded-full border border-[#C6A769] opacity-0"
        style={{ transform: "translate(-50%, -50%) scale(0)" }}
      />

      {/* Trailing seed particles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) trailRefs.current[i] = el;
          }}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#C6A769]/30 transition-opacity duration-300 opacity-0"
          style={{ 
            transform: "translate3d(0,0,0)",
            width: `${6 - i * 0.8}px`,
            height: `${6 - i * 0.8}px`
          }}
        />
      ))}

      {/* Main leaf tip */}
      <div 
        ref={leafRef}
        className="absolute w-4 h-4 transition-opacity duration-300 opacity-0"
        style={{ transform: "translate3d(0,0,0)" }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full text-[#768364] fill-current drop-shadow-xs rotate-45">
          <path d="M17 8C8 10 7 21 7 21C7 21 16 18 17 8Z" />
        </svg>
      </div>
    </div>
  );
}
