import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TIMELINE } from "../data";
import { Quote, Award, Sparkles, ShieldCheck, CheckCircle } from "lucide-react";

export default function WomenEmpowerment() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  return (
    <section id="women-empowerment" className="py-24 px-6 sm:px-12 lg:px-24 bg-white relative overflow-hidden">
      
      {/* Absolute Decorative ambient lights background */}
      <div className="absolute top-12 left-12 w-[1.5px] h-[92%] bg-gold/15 hidden md:block" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Core title structure */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-medium bg-gold/10 px-4 py-1.5 rounded-full border border-gold/15 inline-block">
            Our Signature Mission
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal">
            The Women Empowerment Cycle <br />
            <span className="italic font-normal text-cocoa">From Classroom training to absolute self-rule</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
          <p className="font-sans text-charcoal/70 max-w-lg mx-auto font-light leading-relaxed text-sm sm:text-base">
            We don't merely hire workers. We build local financial autonomy circles managed entirely by rural female leaders, providing a generational leap for regional farming.
          </p>
        </div>

        {/* Master layout containing: Timeline and Gayatri Devi Quote Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Lg: 7 columns): Interactive Timeline Stepper */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-sm tracking-widest text-[#B39359] uppercase font-bold text-left">
                The Generational Stepping Path
              </h3>
              <p className="font-sans text-sm text-charcoal/65 leading-relaxed font-light text-left">
                Click on each stage of the lifecycle below to trace how a woman farmer elevates herself and her entire household through our hand-popping and eco-roasting infrastructure.
              </p>
            </div>

            {/* Timesteping container */}
            <div className="space-y-4">
              {TIMELINE.map((milestone, index) => {
                const Selected = index === activeStepIdx;
                return (
                  <div
                    key={milestone.step}
                    onClick={() => setActiveStepIdx(index)}
                    className={`cursor-pointer border p-6 rounded-2xl text-left transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row gap-6 ${
                      Selected
                        ? "bg-bg-primary border-gold shadow-[0_15px_35px_rgba(107,74,50,0.06)]"
                        : "bg-white border-gold-light/15 hover:border-gold/50"
                    }`}
                  >
                    {/* Index step bold display */}
                    <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-1 shrink-0">
                      <span className="font-serif text-3xl font-semibold text-gold/30 group-hover:text-gold block leading-none">
                        {milestone.step}
                      </span>
                      <span className="text-[10px] bg-cocoa text-bg-primary font-mono px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">
                        Phase {milestone.step}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-lg font-semibold text-charcoal">
                          {milestone.title}
                        </h4>
                        {Selected && (
                          <CheckCircle className="w-4 h-4 text-sage animate-bounce" />
                        )}
                      </div>
                      
                      <span className="font-mono text-[9px] uppercase tracking-widest text-gold font-bold block">
                        {milestone.subtitle}
                      </span>

                      <AnimatePresence initial={false}>
                        {Selected && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-3 pt-2 border-t border-gold-light/20"
                          >
                            <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light">
                              {milestone.description}
                            </p>
                            <div className="flex items-center gap-1.5 font-mono text-[10px] text-sage font-bold">
                              <Award className="w-4 h-4" />
                              <span>Impact Goal Metric: {milestone.impactMetric}</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Absolute indicator */}
                    <span className={`absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold ${Selected ? "scale-150 animate-ping" : "opacity-0"}`} />

                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (Lg: 5 columns): Custom Gayatri Devi Quote block (simulates luxury editorial styling) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="bg-gradient-to-tr from-bg-secondary/40 via-white to-white border border-gold-light/35 rounded-3xl p-8 sm:p-10 shadow-[0_22px_60px_-10px_rgba(107,74,50,0.06)] relative text-left">
              
              {/* Gold double decorative framing outline */}
              <div className="absolute inset-2.5 border border-gold-light/25 rounded-[20px] pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                
                {/* Large visual quote mark */}
                <div className="text-gold/45">
                  <Quote className="w-10 h-10 stroke-[1.2]" />
                </div>

                <p className="font-serif text-lg sm:text-xl text-charcoal/90 leading-relaxed font-light italic">
                  "Before joining the Bloom cluster, my household survived on temporary agricultural wage scraps. Bloom placed independent bank accounts direct into our names. For the first time, our girls go to fine central schools, and we make decisions as family captains. We pour our hearts and blessings into every seed popped."
                </p>

                <div className="border-t border-gold-light/25 pt-6 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h4 className="font-serif text-[#6B4A32] font-semibold text-base">Gayatri Devi</h4>
                    <span className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest block mt-0.5">
                      Senior Quality Inspector / Lead Artisan
                    </span>
                  </div>

                  <span className="text-[10px] bg-sage/10 text-cocoa px-3 py-1 rounded-full font-mono font-semibold">
                    Mithila Region, India
                  </span>
                </div>

              </div>
              
              {/* Ambient flower badge */}
              <div className="absolute -bottom-4 right-10 bg-cocoa text-bg-primary px-4 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-widest font-semibold border border-gold shadow-sm">
                Artisan Pride Sourced
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
