import React from "react";
import { m } from "motion/react";
import { Sparkles, Heart, Sprout, Users } from "lucide-react";

export default function AboutStory() {
  const highlights = [
    {
      icon: Sprout,
      title: "Preservative-Free Snacks",
      desc: "Freshly roasted premium makhana and dry-fruit blends crafted with zero artificial additives."
    },
    {
      icon: Users,
      title: "Women Empowerment",
      desc: "Employing exclusively female team members to support local livelihoods, income, and skills."
    },
    {
      icon: Heart,
      title: "Social Impact Brand",
      desc: "Connecting rural self-help collectives to everyday consumers through healthy, clean snacking."
    },
    {
      icon: Sparkles,
      title: "Accessible Quality",
      desc: "Strict hygiene and highly nutritious ingredients offered at accessible, everyday prices."
    }
  ];

  const PETALS = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    left: `${10 + i * 16}%`,
    delay: i * 1.5,
    duration: 14 + (i % 3) * 4,
    scale: 0.5 + (i % 3) * 0.3
  }));

  return (
    <section id="our-story" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#FAF8F5] relative overflow-hidden select-none">
      
      {/* Premium ambient backdrop lighting */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-leaf/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      {/* Floating Lotus Petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden sm:block">
        {PETALS.map((petal) => (
          <m.div
            key={petal.id}
            className="absolute top-[-10%] text-leaf opacity-[0.06]"
            initial={{ y: "-10vh", x: 0, rotate: 0 }}
            animate={{ 
              y: "110vh", 
              x: (petal.id % 2 === 0 ? 1 : -1) * 60,
              rotate: 200 
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ left: petal.left, scale: petal.scale }}
          >
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-16 h-16">
              <path d="M50 15C50 15 42 32 42 45C42 58 50 65 50 65C50 65 58 58 58 45C58 32 50 15 50 15Z" />
            </svg>
          </m.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Editorial Text Area (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-leaf font-bold bg-leaf/10 px-4 py-1.5 rounded-full border border-leaf/15 inline-block">
              Our Sincere Purpose
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-earth leading-[1.1]">
              Nourishing <br />
              <span className="italic font-normal text-cocoa">Communities &amp; Families</span>
            </h2>
            <div className="w-12 h-[2px] bg-leaf rounded-full" />
            <p className="font-sans text-earth/70 leading-relaxed text-base sm:text-lg font-light">
              We believe snacking should be a wholesome ritual that brings health to your home and prosperity to rural communities. 
            </p>
          </div>

          {/* Right Detailed Narrative Card (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <m.div 
              className="bg-white/80 border border-leaf/20 rounded-[2.5rem] p-8 sm:p-12 shadow-sm backdrop-blur-md relative overflow-hidden text-left premium-card feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Gold Leaf Corner Watermark */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.03] text-leaf pointer-events-none">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 15C50 15 42 32 42 45C42 58 50 65 50 65C50 65 58 58 58 45C58 32 50 15 50 15Z" />
                </svg>
              </div>

              {/* Main Narrative Paragraphs */}
              <div className="space-y-6 font-sans text-base sm:text-lg text-earth/80 leading-relaxed font-light relative z-10">
                <p>
                  <strong>Bloom Purely Natural</strong> is a social-impact food brand dedicated to producing preservative-free roasted makhana and dry-fruit snacks at affordable prices. Our products are crafted to ensure freshness, health, and natural taste, making snacking a wholesome experience.
                </p>
                <p>
                  We are committed to women empowerment, employing only women team members and helping increase their income and skills. By focusing on quality, hygiene, and nutritious ingredients, we provide snacks that are safe, tasty, and accessible to everyday consumers.
                </p>
                <p>
                  Our short shelf-life ensures every bite is fresh and flavorful. At <strong>Bloom Purely Natural</strong>, we believe in nourishing both people and communities through conscious food choices.
                </p>
              </div>

              {/* Decorative Brand Slogan Divider */}
              <div className="border-t border-leaf/10 mt-10 pt-8 flex flex-wrap gap-4 text-xs font-mono font-bold text-leaf uppercase tracking-widest relative z-10">
                <span>✦ Social-Impact</span>
                <span>✦ Women-Led</span>
                <span>✦ Freshly Roasted</span>
              </div>
            </m.div>
          </div>

        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 text-left">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <m.div
                key={idx}
                className="bg-white border border-[#EFE6D8]/80 rounded-2xl p-6 shadow-xs flex flex-col gap-4 premium-card feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-10 h-10 rounded-xl bg-leaf/10 text-leaf flex items-center justify-center shrink-0 feature-icon">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1 relative z-10">
                  <h4 className="font-serif text-base font-semibold text-earth">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-earth/65 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </m.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
