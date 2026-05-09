"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, Send, FileText, Ruler, ShieldCheck, Truck } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function QuotePage() {
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
    }, 2000);
  };

  return (
    <div className="overflow-hidden pt-20">
      {/* ── Hero ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="glow-orb w-[600px] h-[400px] top-0 right-0 opacity-20" />
        <div className="container-site relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge mb-6 inline-flex">
            {t.quote.badge}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={cn("text-5xl md:text-6xl font-heading font-black text-foreground mb-4", isTamil && "font-tamil")}>
            {t.quote.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={cn("section-subtitle mx-auto mb-10", isTamil && "font-tamil")}>
            {t.quote.subtitle}
          </motion.p>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className="pb-28 relative z-10">
        <div className="container-site max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Benefits Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="glass-card p-8">
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">Why Request a Quote?</h3>
                <ul className="space-y-6">
                  {[
                    { icon: FileText, title: "Detailed Breakdown", desc: "Get a clear itemized list of materials and labor costs." },
                    { icon: Ruler, title: "Custom Measurement", desc: "We provide options based on your exact land dimensions." },
                    { icon: ShieldCheck, title: "No Obligations", desc: "Our estimates are free with no commitment required." },
                    { icon: Truck, title: "Site Assessment", desc: "Request includes a free preliminary site assessment." },
                  ].map((benefit, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red border border-brand-red/20">
                        <benefit.icon size={18} />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm">{benefit.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{benefit.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="glass-card-red p-8">
                <p className="text-sm text-white/90 leading-relaxed italic">
                  &quot;Tirupathi Fencing provided the most competitive quote for our 5-acre farm. The installation was seamless.&quot;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-red/20 border border-brand-red/30" />
                  <div>
                    <p className="text-xs font-bold text-foreground">Anand Kumar</p>
                    <p className="text-[10px] text-muted-foreground">Farm Owner, Salem</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quote Form */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2} className="lg:col-span-2">
              <div className="glass-card p-8 md:p-12 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 blur-3xl rounded-full" />
                
                {isSuccess ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center mx-auto mb-6 shadow-red-glow">
                      <Check size={40} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{t.quote.form.success}</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto mb-8">
                      Our technical team is reviewing your requirements and will contact you via phone within 48 hours.
                    </p>
                    <button onClick={() => setIsSuccess(false)} className="btn-outline">
                      Send Another Request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{t.quote.form.name}</label>
                        <input type="text" required className="form-input" placeholder="Enter your full name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{t.quote.form.phone}</label>
                        <input type="tel" required className="form-input" placeholder="+91 90000 00000" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{t.quote.form.email}</label>
                        <input type="email" required className="form-input" placeholder="email@address.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{t.quote.form.projectType}</label>
                        <select className="form-input appearance-none bg-white">
                          <option>Agricultural</option>
                          <option>Industrial</option>
                          <option>Residential</option>
                          <option>Commercial</option>
                          <option>Highway</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{t.quote.form.fencingType}</label>
                        <select className="form-input appearance-none bg-white">
                          <option>Chain Link Fencing</option>
                          <option>Barbed Wire Fencing</option>
                          <option>Iron Wire Mesh</option>
                          <option>Welded Mesh Panels</option>
                          <option>Razor Wire Security</option>
                          <option>Custom Industrial Gate</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{t.quote.form.area}</label>
                        <input type="text" className="form-input" placeholder="e.g. 5000 sq ft or 100 meters" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{t.quote.form.location}</label>
                      <input type="text" className="form-input" placeholder="City / District in Tamil Nadu" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{t.quote.form.details}</label>
                      <textarea rows={4} className="form-input resize-none" placeholder="Describe any special requirements, terrain details, or desired height..." />
                    </div>

                    <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-4 text-base">
                      {isSubmitting ? (
                        <><Loader2 size={20} className="animate-spin" /> Processing...</>
                      ) : (
                        <>{t.quote.form.submit} <Send size={20} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-py bg-muted">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="badge mb-4">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto grid gap-4">
            {[
              { q: "How long does a site visit take?", a: "Typically 30-45 minutes depending on the area size and terrain complexity." },
              { q: "Do you offer installation across South India?", a: "We primarily serve all districts of Tamil Nadu, but we also handle large industrial projects in Karnataka and Kerala." },
              { q: "What is the warranty on the materials?", a: "Our galvanized products come with a 10-year anti-rust durability guarantee." },
            ].map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="glass-card p-6">
                <h4 className="font-heading font-bold text-foreground mb-2">{faq.q}</h4>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
