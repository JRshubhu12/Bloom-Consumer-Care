import React, { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Is Bloom preservative free?",
      answer: "Yes, 100%. Bloom snacks are completely free from artificial preservatives, MSG, synthetic colorants, and BHA/BHT stabilizers. We rely entirely on small-batch roasting and multi-layer oxygen-barrier packaging to naturally lock in crispness."
    },
    {
      question: "Where is the makhana sourced?",
      answer: "Our Phool Makhana (lotus seeds) is sourced directly from certified organic wetlands of the Mithila region in Bihar, India. Sourcing directly from farming families ensures premium grade sizing and supports the local rural economy."
    },
    {
      question: "How long does freshness last?",
      answer: "Since we add zero chemical preservatives, our snacks are designed to be enjoyed fresh. Sealed bags maintain their crisp crunch for up to 90 days. Once opened, we recommend sealing in an airtight container and consuming within 7-10 days."
    },
    {
      question: "Are products vegan?",
      answer: "Our Mint, Chatpata Masala, Plain Salted, and Magic Masala Makhana varieties are 100% vegan. They are dry-roasted in cold-pressed seed oils with natural spices. The Energy Bar and Premium Dry Fruit Mix are also completely vegan."
    },
    {
      question: "Do purchases support women employment?",
      answer: "Absolutely. We are a social-impact food brand. Our central kitchens, sorting processes, and roasting facilities are operated exclusively by local women. By purchasing Bloom, you directly fund wages up to 4x the regional average, banking services, and educational programs for their families."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#FAF9F6] border-t border-[#EAE4DB]/60 overflow-hidden select-none">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C6A769] font-bold">
            Customer Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-earth">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[1px] bg-leaf mx-auto" />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-[#EAE4DB] rounded-2xl bg-white overflow-hidden shadow-xs transition-shadow duration-300 hover:shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-earth">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FAF8F5] border border-leaf/10 flex items-center justify-center text-earth">
                    {isOpen ? <Minus className="w-4 h-4 text-leaf" /> : <Plus className="w-4 h-4 text-leaf" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="pb-6 px-6 sm:px-8 font-sans text-sm text-earth/80 leading-relaxed font-light border-t border-[#FAF8F5] pt-4 bg-[#FAF9F6]/30">
                        {faq.answer}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
