import React from "react";
import { motion } from "motion/react";

export default function WomenEmpowerment() {
  const cards = [
    {
      icon: "🌸",
      title: "Respect & Dignity",
      desc: "We believe every individual deserves equal respect, recognition, and opportunity."
    },
    {
      icon: "🤝",
      title: "Inclusive Participation",
      desc: "Encouraging meaningful involvement and collaboration at every stage of growth."
    },
    {
      icon: "✨",
      title: "Shared Progress",
      desc: "Creating a future where growth and success are built together through trust and mutual support."
    }
  ];

  return (
    <section
      id="women-empowerment"
      className="py-16 px-6 sm:px-12 lg:px-24 relative overflow-hidden select-none"
      style={{ backgroundColor: "#FAF8F5" }}
    >

      {/* Background Soft Accents */}
      <div
        className="absolute top-1/4 right-0 w-[400px] h-[400px] pointer-events-none blur-[120px]"
        style={{ backgroundColor: "#B68A3508" }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] pointer-events-none blur-[120px]"
        style={{ backgroundColor: "#5C3A2108" }}
      />

      {/* Decorative Lotus Illustration */}
      <div
        className="absolute right-4 bottom-4 w-48 h-48 pointer-events-none ambient-float"
        style={{ color: "#5C3A21", opacity: 0.04 }}
      >
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 15C50 15 42 32 42 45C42 58 50 65 50 65C50 65 58 58 58 45C58 32 50 15 50 15Z" />
          <path d="M50 25C50 25 32 37 32 50C32 63 45 68 45 68C45 68 48 57 48 50C48 43 50 25 50 25Z" opacity="0.8" />
          <path d="M50 25C50 25 68 37 68 50C68 63 55 68 55 68C55 68 52 57 52 50C52 43 50 25 50 25Z" opacity="0.8" />
          <path d="M50 38C50 38 22 47 22 60C22 73 40 73 40 73C40 73 43 62 45 57C47 52 50 38 50 38Z" opacity="0.6" />
          <path d="M50 38C50 38 78 47 78 60C78 73 60 73 60 73C60 73 57 62 55 57C53 52 50 38 50 38Z" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">

        {/* Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          <span
            className="font-mono text-xs uppercase tracking-[0.3em] font-medium px-4 py-1.5 rounded-full border inline-block"
            style={{
              color: "#B68A35",
              backgroundColor: "#B68A3510",
              borderColor: "#B68A3525"
            }}
          >
            Women Empowerment
          </span>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight"
            style={{ color: "#3A2A1F" }}
          >
            Supporting Value &amp; Opportunity
          </h2>
          <p
            className="font-sans text-base sm:text-lg font-medium mt-4"
            style={{ color: "#3A2A1F99" }}
          >
            Creating opportunities through participation, respect, and shared progress.
          </p>
          <div
            className="w-12 h-[1px] mx-auto my-6"
            style={{ backgroundColor: "#D4AF37" }}
          />
        </div>

        {/* Narrative Description Block */}
        <div className="max-w-3xl mx-auto mb-12 text-center space-y-6">
          <p
            className="font-sans text-base sm:text-lg leading-relaxed font-light"
            style={{ color: "#3A2A1FCC" }}
          >
            At Bloom Purely Natural, we believe that meaningful change begins with opportunity.
          </p>
          <p
            className="font-sans text-base sm:text-lg leading-relaxed font-light"
            style={{ color: "#3A2A1FCC" }}
          >
            We value the contribution, dedication, and strength of women who play an important role in families, communities, and society. Through responsible business practices and inclusive participation, we aim to encourage growth, confidence, and long-term empowerment.
          </p>
          <p
            className="font-sans text-base sm:text-lg leading-relaxed font-light"
            style={{ color: "#3A2A1FCC" }}
          >
            Our vision is rooted in respect, dignity, and the belief that progress is strongest when everyone has the opportunity to move forward together.
          </p>
        </div>

        {/* Vision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left mb-12">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-2xl relative overflow-hidden group flex flex-col justify-between min-h-[240px] premium-card feature-card bg-bg-secondary border border-bg-tertiary/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <div className="text-3xl mb-5 inline-block feature-icon">
                  {card.icon}
                </div>
                <h4
                  className="font-serif text-xl font-bold mb-3"
                  style={{ color: "#3A2A1F" }}
                >
                  {card.title}
                </h4>
                <p
                  className="font-sans text-sm leading-relaxed font-light relative z-10"
                  style={{ color: "#5C3A21B3" }}
                >
                  {card.desc}
                </p>
              </div>

              {/* Subtle leaf accent */}
              <div
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full opacity-10"
                style={{ backgroundColor: "#7A8C55" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote Banner */}
        <motion.div
          className="max-w-2xl mx-auto py-8 px-6 text-center"
          style={{ borderTop: "1px solid #D4AF3730", borderBottom: "1px solid #D4AF3730" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-serif text-lg sm:text-xl italic tracking-wide"
            style={{ color: "#5C3A21" }}
          >
            "When women grow, communities grow stronger."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
