import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, MapPin, Phone, Mail, Check, MessageCircleOff, Send, HelpCircle } from "lucide-react";

export default function ContactSection() {
  const [sentMessage, setSentMessage] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Please complete required contact details.");
      return;
    }
    setSentMessage(true);
    setTimeout(() => {
      setSentMessage(false);
      setName("");
      setEmail("");
      setPhone("");
      setDesc("");
    }, 4000);
  };

  return (
    <section id="contact-partners" className="py-24 px-6 sm:px-12 lg:px-24 bg-white relative overflow-hidden">
      
      {/* Decorative backing frames */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header content styling */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold font-semibold">Join the Restorations Circle</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal">
            Connect With Our Desk <br />
            <span className="italic font-normal text-cocoa">Purely Natural. Zero Preservatives.</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
        </div>

        {/* Master layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN (Lg: 7 columns): Interactive Large luxury form switcher */}
          <div className="lg:col-span-7 bg-bg-primary/55 border border-gold-light/35 rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(107,74,50,0.06)] relative text-left">
            
            <div className="space-y-6">
              
              <div className="space-y-1">
                <span className="font-mono text-[9px] uppercase tracking-widest text-gold font-bold">Proposal Lodging Registry</span>
                <h3 className="font-serif text-lg font-semibold text-charcoal">
                  Write to Customer Care Desks
                </h3>
              </div>

              {/* Real form rendering */}
              <AnimatePresence mode="wait">
                {!sentMessage ? (
                  <motion.form
                    key="active-contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-4 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-sans text-xs text-charcoal/70 font-semibold block">Full Name</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Anandita Choudhary"
                          className="w-full bg-white border border-gold-light/35 rounded-lg p-3 text-xs focus:border-gold outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-sans text-xs text-charcoal/70 font-semibold block">Contact Number</label>
                        <input
                          type="text"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 80054..."
                          className="w-full bg-white border border-gold-light/35 rounded-lg p-3 text-xs focus:border-gold outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-xs text-charcoal/70 font-semibold block">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@gmail.com"
                        className="w-full bg-white border border-gold-light/35 rounded-lg p-3 text-xs focus:border-gold outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-xs text-charcoal/70 font-semibold block font-light">Describe details of inquiry</label>
                      <textarea
                        rows={3}
                        required
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Type your questions or inquiries here..."
                        className="w-full bg-white border border-gold-light/35 rounded-lg p-3 text-xs focus:border-gold outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 py-4 bg-cocoa text-bg-primary font-medium tracking-wide text-xs uppercase rounded-lg hover:bg-charcoal transition-colors flex items-center justify-center gap-2 cursor-pointer luxury-glowing-btn"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send General Inquiry</span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-sage text-white flex items-center justify-center shadow-md animate-bounce">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-charcoal">Enquiry Proposal Lodged!</h4>
                    <p className="font-sans text-xs text-charcoal/70 max-w-sm leading-relaxed font-light">
                      Thank you for trusting Bloom. Our dedicated customer desk will review details and respond back to your email: <strong className="text-cocoa font-semibold">{email}</strong>.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

          {/* RIGHT COLUMN (Lg: 5 columns): WhatsApp integration and Aesthetic Maps */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between text-left h-full">
            
            {/* Direct WhatsApp trigger */}
            <div className="bg-bg-secondary/45 border border-gold-light/40 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-sage/10 rounded-full text-sage">
                  <MessageSquare className="w-5 h-5 animate-pulse" />
                </span>
                <div className="space-y-0.5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#B39359] font-bold block">Connoisseurs live link</span>
                  <h4 className="font-serif text-base font-semibold text-charcoal">WhatsApp Support Available</h4>
                </div>
              </div>
              <p className="font-sans text-xs text-charcoal/70 font-light leading-relaxed">
                Connect instantly with our customer care and product desk on WhatsApp for zero-wait guidance, custom gifting support, or general help.
              </p>
              <button
                onClick={() => window.open(`https://wa.me/918005484365?text=Hello%20Bloom%20Care%20representative`)}
                className="w-full py-2.5 bg-sage text-white font-mono text-[10px] uppercase font-bold rounded-lg hover:bg-cocoa transition-colors tracking-widest flex items-center justify-center gap-2"
              >
                <span>Initiate WhatsApp Chat</span>
              </button>
            </div>

            {/* Aesthetic luxury map showcase */}
            <div className="bg-bg-primary/55 border border-gold-light/35 rounded-2xl p-4 space-y-3 relative overflow-hidden shadow-sm">
              <div className="flex items-center gap-1.5 border-b border-gold-light/20 pb-2">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="font-mono text-[9px] tracking-widest text-gold uppercase font-bold">Our Headquarters & Origins</span>
              </div>

              {/* Beautiful interactive SVG/vector canvas representing map coordinate */}
              <div className="h-44 bg-white rounded-lg border border-gold-light/10 relative overflow-hidden flex items-center justify-center">
                {/* Simulated clean cartography lines */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <svg className="w-full h-full text-gold-light" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="0" y1="60" x2="100" y2="60" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="30" y1="0" x2="30" y2="100" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="70" y1="0" x2="70" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  </svg>
                </div>

                {/* Simulated Pin Locations */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <motion.div
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-4 h-4 rounded-full bg-cocoa border-2 border-white mx-auto shadow flex items-center justify-center"
                    title="Varanasi Head Office"
                  >
                    <span className="w-2 h-2 rounded-full bg-gold" />
                  </motion.div>
                  <span className="font-mono text-[8px] text-charcoal bg-white border border-gold-light/35 px-1.5 py-0.5 rounded shadow-sm mt-1 block leading-none font-bold">Varanasi HQ</span>
                </div>

                <span className="font-serif text-[10px] text-charcoal/40 select-none tracking-widest italic uppercase">Bloom Sourcing & Admin Map</span>

              </div>

              {/* List details below */}
              <div className="space-y-1.5 text-xs text-charcoal/70 font-sans font-light">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Varanasi, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>+91 8005484365</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>deep131281@gmail.com</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
