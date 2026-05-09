"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
  }),
};

export default function ContactPage() {
  const { t, isTamil } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="overflow-hidden pt-20">
      {/* ── Hero ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="glow-orb w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2 opacity-20" />
        <div className="container-site relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge mb-6 inline-flex">
            {t.contact.badge}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={cn("text-5xl md:text-6xl font-heading font-black text-foreground mb-4", isTamil && "font-tamil")}>
            {t.contact.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={cn("section-subtitle mx-auto mb-10", isTamil && "font-tamil")}>
            {t.contact.subtitle}
          </motion.p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="pb-28 relative z-10">
        <div className="container-site max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Contact Info */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="lg:col-span-2 flex flex-col gap-6">
              {[
                { icon: MapPin, title: "Our Factory", value: t.contact.address },
                { icon: Phone, title: "Phone", value: t.contact.phone, link: `tel:${t.contact.phone}` },
                { icon: Mail, title: "Email", value: t.contact.email, link: `mailto:${t.contact.email}` },
                { icon: Clock, title: "Working Hours", value: t.contact.hours },
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 flex gap-4 card-hover">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-brand-red/20 bg-brand-red/10 text-brand-red flex-shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="lg:col-span-3">
              <div className="glass-card p-8 md:p-10">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-8">Send us a Message</h3>
                
                {isSuccess ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-6 rounded-xl border border-green-500/30 bg-green-500/10 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-4">
                      <Send size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">Message Sent!</h4>
                    <p className="text-sm text-muted-foreground">Thank you for reaching out. We will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">{t.contact.form.name}</label>
                        <input type="text" required className="form-input" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">{t.contact.form.phone}</label>
                        <input type="tel" required className="form-input" placeholder="+91 98765 43210" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.contact.form.email}</label>
                      <input type="email" className="form-input" placeholder="john@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.contact.form.message}</label>
                      <textarea required rows={5} className="form-input resize-none" placeholder="How can we help you?" />
                    </div>
                    
                    <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-4">
                      {isSubmitting ? (
                        <><Loader2 size={18} className="animate-spin" /> Sending...</>
                      ) : (
                        <>{t.contact.form.submit} <Send size={18} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="h-[400px] w-full relative">
        <div className="absolute inset-0 bg-[#F1F5F9]">
          {/* Placeholder for actual Google Map */}
          <div className="w-full h-full opacity-30 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Salem,Tamil+Nadu&zoom=11&size=1920x400&style=feature:all|element:geometry|color:0x242f3e&style=feature:all|element:labels.text.stroke|color:0x242f3e&style=feature:all|element:labels.text.fill|color:0x746855&style=feature:administrative.locality|element:labels.text.fill|color:0xd59563&style=feature:poi|element:labels.text.fill|color:0xd59563&style=feature:poi.park|element:geometry|color:0x263c3f&style=feature:poi.park|element:labels.text.fill|color:0x6b9a76&style=feature:road|element:geometry|color:0x38414e&style=feature:road|element:geometry.stroke|color:0x212a37&style=feature:road|element:labels.text.fill|color:0x9ca5b3&style=feature:road.highway|element:geometry|color:0x746855&style=feature:road.highway|element:geometry.stroke|color:0x1f2835&style=feature:road.highway|element:labels.text.fill|color:0xf3d19c&style=feature:water|element:geometry|color:0x17263c&style=feature:water|element:labels.text.fill|color:0x515c6d&style=feature:water|element:labels.text.stroke|color:0x17263c&key=YOUR_API_KEY')] bg-cover bg-center" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass-card-red p-6 text-center max-w-sm mx-4">
              <MapPin size={32} className="text-brand-red mx-auto mb-3" />
              <h4 className="font-heading font-bold text-foreground mb-2">Main Manufacturing Unit</h4>
              <p className="text-sm text-muted-foreground">Salem, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
