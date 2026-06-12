import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Heart, Sparkles, Users, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroProps {
  onShopClick: () => void;
  onStoryClick: () => void;
}

export default function Hero({ onShopClick, onStoryClick }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel Images
  const carouselImages = [
    "https://i.ibb.co/RTJ9J5BD/spicy-masala-phool-makhana.jpg",
    "https://i.ibb.co/F4g1VSL4/image.png",
    "https://i.ibb.co/XrwZhg76/image.png" // Premium Mixed Namkeen
  ];

  // Track scroll progress within the Hero section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Create customized scroll transformations for vertical depth
  const pouchY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const bowlY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const floatingItemFastY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const floatingItemSlowY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textFadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Carousel Auto-play Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4500); // Change image every 4.5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#F9F7F2] select-none font-sans"
    >
      {/* Background Floral/Organic Illustrations (Subtle) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <svg className="absolute -bottom-20 -left-20 w-[600px] h-[600px] text-[#D8D0C1] opacity-30" viewBox="0 0 200 200" fill="currentColor">
          <path d="M45.7,-76.4C58.9,-69.3,69.1,-55.4,76.5,-40.5C83.9,-25.6,88.5,-9.7,85.6,4.8C82.8,19.3,72.4,32.3,61.8,44.1C51.2,55.9,40.4,66.4,27.1,72.8C13.8,79.2,-2,81.5,-16.9,79.2C-31.8,76.9,-45.8,70,-57.4,59.8C-68.9,49.6,-77.9,36.1,-82.9,21C-87.8,5.9,-88.7,-10.8,-82.6,-24.8C-76.4,-38.8,-63.3,-50.2,-49.6,-57.4C-35.8,-64.6,-21.3,-67.7,-5.7,-60.7C9.9,-53.8,25.4,-36.8,45.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side (Text & CTA) */}
        <motion.div 
          style={{ opacity: textFadeOut }}
          className="lg:col-span-6 flex flex-col items-start text-left"
        >
          {/* Top Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#868A71] font-semibold">
              EST. 2026 • PRESERVATIVE-FREE WELLNESS
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1 mb-6">
            <h1 className="font-serif text-[50px] sm:text-[68px] lg:text-[80px] leading-[1.05] text-[#2F2924]">
              Purely Natural. <br />
              <span className="italic text-[#C3A77D]">Zero Preservatives.</span><br />
              Crafted By Women.
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-[15px] sm:text-[17px] text-[#6A635A] max-w-[520px] leading-relaxed mb-10">
            Premium roasted makhana and healthy snack blends made with natural ingredients and small-batch freshness.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <button 
              onClick={() => {
                const el = document.getElementById("best-sellers");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 bg-[#5C3E26] text-white text-sm rounded-full hover:bg-[#392312] transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl cursor-pointer luxury-glowing-btn font-semibold"
            >
              Shop Best Sellers
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            
            <button 
              onClick={onShopClick}
              className="px-8 py-3.5 border-2 border-[#6B4A32]/70 text-[#2F2924] text-sm rounded-full hover:bg-[#6B4A32]/5 hover:border-[#6B4A32] transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer font-bold"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Trust Bar Features */}
          <div className="flex gap-x-8 gap-y-6 flex-wrap">
            <div className="flex items-center gap-3">
              <Leaf className="w-7 h-7 text-[#768364] stroke-[1.5]" />
              <div className="flex flex-col">
                <span className="text-[#2F2924] font-semibold text-sm leading-tight">Zero</span>
                <span className="text-[#847D75] text-xs">Preservatives</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="w-7 h-7 text-[#C3A77D] stroke-[1.5]" />
              <div className="flex flex-col">
                <span className="text-[#2F2924] font-semibold text-sm leading-tight">Women</span>
                <span className="text-[#847D75] text-xs">Crafted</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-[#C3A77D] stroke-[1.5]" />
              <div className="flex flex-col">
                <span className="text-[#2F2924] font-semibold text-sm leading-tight">Premium</span>
                <span className="text-[#847D75] text-xs">Ingredients</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-[#C3A77D] stroke-[1.5]" />
              <div className="flex flex-col">
                <span className="text-[#2F2924] font-semibold text-sm leading-tight">Made In</span>
                <span className="text-[#847D75] text-xs">India</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side (Image Composition with Scroll Parallax) */}
        <div className="lg:col-span-6 relative h-[600px] flex justify-center items-center pointer-events-none mt-10 lg:mt-0">
          
          {/* Main Mouse Interactive Wrapper */}
          <motion.div
            className="relative w-full h-full"
            animate={{
              x: mousePos.x * -10,
              y: mousePos.y * -10,
            }}
            transition={{ type: "spring", stiffness: 75, damping: 25 }}
          >
            {/* Background Pouch - Driven by scrollY */}
            <motion.div 
              style={{ y: pouchY, rotate: 5 }}
              className="absolute right-[5%] top-[10%] w-[260px] h-[380px] bg-white rounded-t-3xl rounded-b-xl shadow-2xl border border-[#EAE4DB] p-6 z-0 flex flex-col items-center justify-start pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
               <div className="w-12 h-12 mb-4 border border-[#C3A77D] rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-[#C3A77D]" />
               </div>
               <h3 className="font-serif text-2xl text-[#2F2924]">BLOOM</h3>
               <span className="text-[8px] uppercase tracking-widest text-[#847D75] mt-1 mb-8">Consumer Care</span>
               <div className="w-full h-[1px] bg-[#EAE4DB] mb-6"></div>
               <p className="text-sm font-semibold tracking-wide text-[#C3A77D] uppercase text-center">Roasted Makhana</p>
               <p className="text-xs mt-2 bg-[#EFC5B1] text-white px-3 py-1 rounded-full uppercase tracking-wider">Himalayan Pink Salt</p>
            </motion.div>

            {/* Foreground Bowl Area WITH CAROUSEL */}
            <motion.div 
              style={{ y: bowlY }}
              className="absolute left-[5%] bottom-[15%] w-[380px] h-[380px] rounded-full bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border-4 border-[#F4EFE8] flex items-center justify-center z-10 pointer-events-auto overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner bg-[#EFECE5]">
                
                {/* Carousel Image with Crossfade */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={carouselImages[currentImageIndex]}
                    alt={`Product View ${currentImageIndex + 1}`}
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                  />
                </AnimatePresence>

                {/* Left Navigation Arrow */}
                <button 
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/60 backdrop-blur-sm text-[#2F2924] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-110 z-20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Navigation Arrow */}
                <button 
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/60 backdrop-blur-sm text-[#2F2924] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-110 z-20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Carousel Pagination Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {carouselImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex 
                          ? "w-5 bg-[#C3A77D] shadow-md" 
                          : "w-2 bg-white/80 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Inner Shadow overlay to give the bowl depth over images */}
                <div className="absolute inset-0 shadow-[inset_0px_10px_30px_rgba(0,0,0,0.1)] pointer-events-none z-10 rounded-full" />
              </div>
            </motion.div>

            {/* Empowering Women Badge Overlay */}
            <motion.div
              className="absolute bottom-[5%] right-[15%] bg-[#F0EBE0]/90 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white z-20 text-center w-[160px] pointer-events-auto"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-8 h-8 text-[#C3A77D] stroke-[1.5] mx-auto mb-2" />
              <p className="font-semibold text-[#2F2924] text-sm leading-tight">Empowering<br/>Women</p>
              <p className="text-[#847D75] text-[10px] mt-2 border-t border-[#DED7CB] pt-2">Through Every Pack</p>
            </motion.div>

            {/* Floating Top Left Dryfruits */}
            <motion.div 
              style={{ y: floatingItemFastY }}
              className="absolute top-[18%] left-[12%] w-20 z-20 drop-shadow-lg"
            >
              <img 
                src="https://i.ibb.co/F4g1VSL4/image.png" 
                alt="Assorted Dry Fruits" 
                referrerPolicy="no-referrer"
                className="w-full h-auto transform hover:rotate-6 transition-transform duration-500"
              />
            </motion.div>
            
            {/* Floating Right Dryfruits */}
            <motion.div 
              style={{ y: floatingItemSlowY }}
              className="absolute top-[42%] right-[-8%] w-16 z-20 drop-shadow-md opacity-90 blur-[0.5px]"
            >
              <img 
                src="https://i.ibb.co/F4g1VSL4/image.png" 
                alt="Assorted Dry Fruits" 
                referrerPolicy="no-referrer"
                className="w-full h-auto transform hover:-rotate-12 transition-transform duration-500"
              />
            </motion.div>

            {/* Accent Particles */}
            <div className="absolute top-[55%] left-[45%] w-4 h-4 bg-[#D38B2D] rounded-full z-20 shadow-md" />
            <div className="absolute bottom-[35%] left-[5%] w-3 h-3 bg-[#D38B2D] rounded-full z-20 shadow-md" />
            
            {/* Green Leaf accent */}
            <div className="absolute top-[45%] left-[60%] z-20 text-[#607D3B]">
              <Leaf className="w-8 h-8 fill-current drop-shadow-sm" />
            </div>

          </motion.div>
        </div>
      </div>

      {/* Footer Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={onStoryClick}
      >
        <span className="text-[10px] sm:text-xs text-[#847D75] tracking-wider mb-2 uppercase font-medium">Discover Our Story</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#C3A77D] to-transparent"></div>
        <div className="w-5 h-8 border border-[#C3A77D] rounded-full flex justify-center pt-1.5 absolute bottom-[-15px] bg-[#F9F7F2]">
           <div className="w-1 h-2 bg-[#C3A77D] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}