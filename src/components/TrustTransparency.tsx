import React, { useState } from "react";
import { m } from "motion/react";
import { ShieldCheck, Calendar, Leaf, Sparkles, MapPin, Eye, Award } from "lucide-react";

interface SourcingNode {
  id: string;
  name: string;
  role: string;
  details: string;
  x: number;
  y: number;
}

export default function TrustTransparency() {
  const [activeNode, setActiveNode] = useState<string>("mithila");

  const sourcingNodes: SourcingNode[] = [
    {
      id: "mithila",
      name: "Mithila Wetlands, Bihar",
      role: "Premium Sourcing Hub",
      details: "Direct harvesting of Phool Makhana (lotus seeds) by 250+ traditional farming families in nutrient-rich organic wetlands.",
      x: 75,
      y: 45
    },
    {
      id: "varanasi",
      name: "Varanasi, Uttar Pradesh",
      role: "Artisanal Roasting Center",
      details: "Our central, all-women operated kitchen where popped seeds are slow-roasted in cold-pressed oils and packed fresh on-order.",
      x: 52,
      y: 52
    }
  ];

  const trustCards = [
    {
      icon: ShieldCheck,
      title: "No Artificial Preservatives",
      desc: "Zero chemical stabilizers, MSG, or artificial sulfites. We use natural airtight foil barrier packing to maintain optimal crunch."
    },
    {
      icon: Calendar,
      title: "Roasted Within 48 Hours",
      desc: "All orders are small-batch roasted on-demand and shipped directly from clean storage for ultimate freshness."
    },
    {
      icon: Leaf,
      title: "Small Batch Production",
      desc: "Prepared in controlled batches under 25kg to ensure uniform heat distribution, perfect seasoning, and crunch consistency."
    },
    {
      icon: Award,
      title: "Women-Led Manufacturing",
      desc: "Empowering rural women through 100% direct employment, dignified salaries, leadership roles, and financial independence."
    },
    {
      icon: Sparkles,
      title: "Farm-Sourced Ingredients",
      desc: "Direct traceability back to Mithila growers. We cut out multiple middlemen to ensure higher profit shares go to farmers."
    }
  ];

  const qualityStages = [
    {
      num: "01",
      name: "Size & Density Grading",
      details: "Every batch is sifted to isolate grade-A, uniform-sized seeds, removing unpopped kernels for an optimal bite."
    },
    {
      num: "02",
      name: "Pesticide Screen",
      details: "Independent lab validations verify zero chemical residue or synthetic pesticides, guaranteeing clinical purity."
    },
    {
      num: "03",
      name: "Moisture Validation",
      details: "Moisture analysis ensures moisture levels are strictly below 3%, locking in natural crunch without artificial preservatives."
    }
  ];

  return (
    <section id="trust-transparency" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#FAF9F6] border-b border-[#EAE4DB]/60 overflow-hidden relative select-none">
      
      {/* Ambient background decoration */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-nature/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-leaf/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C6A769] font-bold">
            Verified Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2F2924]">
            Trust &amp; Transparency
          </h2>
          <div className="w-12 h-[1px] bg-leaf mx-auto" />
          <p className="font-sans text-earth/80 max-w-xl mx-auto leading-relaxed text-sm sm:text-base font-light">
            We believe you deserve to know exactly where your food comes from, how it is roasted, and the lives it supports. Here is our honest path from farm to pouch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Sourcing Map (Interactive SVG) */}
          <div className="lg:col-span-5 bg-white border border-[#EAE4DB] p-6 sm:p-8 rounded-[2rem] shadow-xs flex flex-col justify-between h-full min-h-[500px]">
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#768364] uppercase font-bold block">
                Interactive Sourcing Map
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-earth">
                Trace Our Ingredients
              </h3>
              <p className="font-sans text-xs text-earth/70 font-light leading-relaxed">
                Click the map nodes to trace our direct supply chain route across North India.
              </p>
            </div>

            {/* Custom stylized Map Area */}
            <div className="relative w-full aspect-[4/3] bg-[#FAF8F5] border border-leaf/10 rounded-2xl overflow-hidden my-6 flex items-center justify-center shadow-inner">
              
              {/* Decorative SVG India Regional Map outline */}
              <svg viewBox="0 0 400 300" className="w-full h-full text-leaf/10 fill-current">
                {/* Simplified UP-Bihar map representation */}
                <path d="M 50 180 Q 90 120, 160 110 T 260 90 T 350 120 Q 380 180, 320 220 T 200 240 T 80 230 Z" />
                {/* Sourcing Link Line */}
                <line 
                  x1={`${sourcingNodes[0].x}%`} 
                  y1={`${sourcingNodes[0].y}%`} 
                  x2={`${sourcingNodes[1].x}%`} 
                  y2={`${sourcingNodes[1].y}%`} 
                  stroke="#C6A769" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  className="animate-[dash_10s_linear_infinite]"
                />
              </svg>

              {/* Sourcing Nodes */}
              {sourcingNodes.map((node) => {
                const isActive = activeNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node.id)}
                    className="absolute cursor-pointer -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    aria-label={`Sourcing Node: ${node.name}`}
                  >
                    {/* Ripple rings */}
                    <span className={`absolute -inset-3 rounded-full border border-[#C6A769] transition-all duration-500 scale-150 ${
                      isActive ? "opacity-40 animate-ping" : "opacity-0 group-hover:opacity-20"
                    }`} />
                    <span className={`absolute -inset-1.5 rounded-full bg-[#C6A769]/20 transition-all duration-300 ${
                      isActive ? "scale-100 opacity-100" : "scale-50 opacity-0 group-hover:opacity-50"
                    }`} />
                    
                    {/* Node Dot */}
                    <div className={`w-4.5 h-4.5 rounded-full border border-white flex items-center justify-center shadow-md transition-all duration-300 ${
                      isActive ? "bg-[#768364] scale-110" : "bg-[#C6A769] group-hover:bg-[#768364]"
                    }`}>
                      <MapPin className="w-2.5 h-2.5 text-white" />
                    </div>

                    {/* Simple label */}
                    <span className="absolute top-5 left-1/2 -translate-x-1/2 bg-earth/90 text-white text-[8px] font-mono uppercase px-2 py-0.5 rounded tracking-wider shadow-md whitespace-nowrap z-30">
                      {node.id === "mithila" ? "Mithila" : "Varanasi"}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Node Sourcing Profile Card */}
            <div className="bg-bg-secondary border border-leaf/15 p-4 rounded-xl text-left transition-all duration-300">
              <span className="text-[9px] font-mono text-[#C6A769] uppercase font-bold tracking-widest block">
                {sourcingNodes.find((n) => n.id === activeNode)?.role}
              </span>
              <h4 className="font-serif text-sm font-bold text-earth mt-0.5">
                {sourcingNodes.find((n) => n.id === activeNode)?.name}
              </h4>
              <p className="font-sans text-xs text-earth/80 font-light mt-1.5 leading-relaxed">
                {sourcingNodes.find((n) => n.id === activeNode)?.details}
              </p>
            </div>

          </div>

          {/* RIGHT: Quality stages & Trust grid */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Trust Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <m.div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#EAE4DB] p-6 text-left premium-card feature-card flex flex-col justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-leaf/10 flex items-center justify-center text-leaf feature-icon">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <h4 className="font-serif text-base font-bold text-earth">
                        {card.title}
                      </h4>
                      <p className="font-sans text-xs text-earth/70 leading-relaxed font-light">
                        {card.desc}
                      </p>
                    </div>
                  </m.div>
                );
              })}
            </div>

            {/* Quality testing stage timeline */}
            <div className="bg-white border border-[#EAE4DB] rounded-[2rem] p-8 space-y-6 text-left shadow-xs">
              <div className="border-b border-leaf/10 pb-4">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A769] font-bold uppercase block">
                  Purity Auditing
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-earth mt-1">
                  Our 3-Tier Quality Validation
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {qualityStages.map((stage, idx) => (
                  <div key={idx} className="space-y-2 border-l border-leaf/20 pl-4 relative group">
                    {/* Hover indicator dot */}
                    <div className="absolute w-1.5 h-1.5 rounded-full bg-nature left-[-4px] top-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <span className="font-mono text-xs text-leaf font-bold block">
                      Stage {stage.num}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-earth">
                      {stage.name}
                    </h4>
                    <p className="font-sans text-[11px] text-earth/70 leading-relaxed font-light">
                      {stage.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
