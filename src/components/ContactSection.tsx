import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Mail, Check, Send, MessageCircle } from "lucide-react";

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
    <section id="contact-partners" className="py-20 px-6 sm:px-12 lg:px-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header content styling */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6 mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900">
            Let's Connect
          </h2>
          <p className="text-xl sm:text-2xl font-serif text-[#8B5A2B]">
            Questions, feedback, or product inquiries?<br/>
            We're always happy to hear from you.
          </p>
          <p className="font-sans text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Whether you're curious about our products, need assistance, or simply want to learn more about Bloom Purely Natural, our team is here to help.
          </p>
        </motion.div>

        {/* Master layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[24px] p-8 sm:p-10 shadow-sm border border-neutral-100 h-full flex flex-col justify-center"
          >
            <div className="space-y-8">
              
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-semibold text-neutral-900">
                  Send Us A Message
                </h3>
                <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                  Have a question about our products or need assistance?<br/>
                  Fill out the form below and we'll get back to you soon.
                </p>
              </div>

              {/* Real form rendering */}
              <AnimatePresence mode="wait">
                {!sentMessage ? (
                  <motion.form
                    key="active-contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="space-y-1.5">
                      <label className="font-sans text-sm text-neutral-700 font-medium block">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl p-3.5 text-sm focus:border-[#8B5A2B] focus:ring-1 focus:ring-[#8B5A2B] transition-colors outline-none"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="font-sans text-sm text-neutral-700 font-medium block">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl p-3.5 text-sm focus:border-[#8B5A2B] focus:ring-1 focus:ring-[#8B5A2B] transition-colors outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans text-sm text-neutral-700 font-medium block">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl p-3.5 text-sm focus:border-[#8B5A2B] focus:ring-1 focus:ring-[#8B5A2B] transition-colors outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans text-sm text-neutral-700 font-medium block">Your Message</label>
                      <textarea
                        rows={4}
                        required
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl p-3.5 text-sm focus:border-[#8B5A2B] focus:ring-1 focus:ring-[#8B5A2B] transition-colors outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-4 bg-[#8B5A2B] text-white font-medium text-base rounded-xl hover:bg-[#6B4A32] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow group"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span>Send Message</span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 flex flex-col items-center justify-center text-center space-y-4 bg-neutral-50/50 rounded-2xl border border-neutral-100"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#8B5A2B]/10 text-[#8B5A2B] flex items-center justify-center mb-2">
                      <Check className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl font-semibold text-neutral-900">Thank You!</h4>
                    <p className="font-sans text-base text-neutral-600 max-w-sm leading-relaxed">
                      We've received your message and will get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: Info + WhatsApp + Promise + Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 flex flex-col h-full"
          >
            
            {/* Card 1: WhatsApp Support */}
            <div className="bg-white border border-neutral-100 rounded-[24px] p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="p-3.5 bg-[#25D366]/10 rounded-2xl text-[#25D366] shrink-0">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div className="space-y-4 w-full">
                  <div>
                    <h4 className="font-serif text-xl font-semibold text-neutral-900">WhatsApp Support</h4>
                    <p className="font-sans text-sm text-neutral-600 mt-1.5 leading-relaxed">
                      Need a quick response?<br className="hidden sm:block" /> Connect with us directly on WhatsApp.
                    </p>
                  </div>
                  <button
                    onClick={() => window.open(`https://wa.me/918005484365?text=Hello%20Bloom%20Purely%20Natural`)}
                    className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-white font-medium text-sm rounded-xl hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat On WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 2: Contact Information */}
              <div className="bg-white border border-neutral-100 rounded-[24px] p-8 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-serif text-lg font-semibold text-neutral-900 mb-6">Contact Information</h4>
                <div className="space-y-5 text-sm text-neutral-600 font-sans">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-1.5 bg-[#8B5A2B]/10 rounded-lg text-[#8B5A2B] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="leading-relaxed">Varanasi, Uttar Pradesh, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-[#8B5A2B]/10 rounded-lg text-[#8B5A2B] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>+91 8005484365</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-[#8B5A2B]/10 rounded-lg text-[#8B5A2B] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <a href="mailto:deep131281@gmail.com" className="hover:text-[#8B5A2B] transition-colors">deep131281@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Map Interface replacing Our Promise */}
              <div className="bg-white border border-neutral-100 rounded-[24px] p-2 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.0979822606!2d82.90870635489721!3d25.320739744673898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="min-h-[220px]"
                  style={{ border: 0, borderRadius: '18px' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bloom Purely Natural Location"
                ></iframe>
              </div>
            </div>

            {/* Replace Map Section: Premium Food-Inspired Visual Card */}
            <div className="relative rounded-[24px] overflow-hidden shadow-sm h-56 sm:flex-1 mt-6 border border-neutral-100 bg-[#FAF8F5] group">
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Premium Assorted Dry Fruits" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex flex-col gap-2">
                  <h4 className="font-serif text-3xl font-semibold text-white tracking-wide">Bloom</h4>
                  <div className="w-10 h-0.5 bg-[#8B5A2B] rounded-full"></div>
                  <p className="font-sans text-sm text-white/90 font-medium leading-relaxed mt-2 tracking-wide uppercase">
                    Purely Natural.<br/>
                    Zero Preservatives.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>



      </div>
    </section>
  );
}
