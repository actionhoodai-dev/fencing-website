"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Grid3X3, Shield, Link2, LayoutGrid, DoorOpen, Wrench, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const iconMap: Record<string, React.ElementType> = {
  Grid: Grid3X3, Shield, Link: Link2, LayoutGrid, DoorOpen, Wrench,
};

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80",
  "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
];

const FEATURES = [
  "ISI & BIS certified materials",
  "Galvanized anti-rust coating",
  "Custom gauge & mesh sizes",
  "Bulk orders accepted",
  "Same-day site inspection",
  "10-year durability guarantee",
];

export default function ServicesPage() {
  const { t, isTamil } = useLanguage();

  return (
    <div className="overflow-hidden pt-20">

      {/* ── Hero ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="glow-orb w-[700px] h-[400px] -top-20 left-1/2 -translate-x-1/2 opacity-20" />
        <div className="container-site relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="badge mb-6 inline-flex">{t.services.badge}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={cn("text-5xl md:text-6xl font-heading font-black text-foreground mb-4 leading-tight", isTamil && "font-tamil")}>
            {t.services.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={cn("section-subtitle mx-auto mb-12", isTamil && "font-tamil")}>
            {t.services.subtitle}
          </motion.p>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section className="pb-28 bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, i) => {
              const Icon = iconMap[service.icon] || Grid3X3;
              return (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }} variants={fadeUp}
                  className="glass-card overflow-hidden card-hover group flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={SERVICE_IMAGES[i]} alt={service.title} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw" />
                    <div className="img-overlay" />
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: "rgba(192,57,43,0.9)" }}>
                        <Icon size={18} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <h3 className={cn("font-heading font-bold text-foreground text-xl mb-3", isTamil && "font-tamil")}>
                      {service.title}
                    </h3>
                    <p className={cn("text-muted-foreground text-sm leading-relaxed flex-1 mb-5", isTamil && "font-tamil")}>
                      {service.description}
                    </p>
                    <Link href="/quote"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-brand-red-light transition-colors group/link">
                      {t.common.getQuote}
                      <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section-py relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="glow-orb w-[500px] h-[500px] top-1/2 left-0 -translate-y-1/2 opacity-20" />
        <div className="container-site relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge mb-6 inline-flex">Our Standards</span>
              <h2 className={cn("section-title mb-6", isTamil && "font-tamil")}>
                Built to the Highest Industrial Standards
              </h2>
              <span className="red-line mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FEATURES.map((f, i) => (
                  <motion.div key={i} custom={i} initial="hidden" whileInView="visible"
                    viewport={{ once: true }} variants={fadeUp}
                    className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-4 mt-10">
                <Link href="/quote" className="btn-primary">{t.common.getQuote} <ArrowRight size={16} /></Link>
                <Link href="/contact" className="btn-outline">{t.nav.contact}</Link>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Industrial fencing quality" fill className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw" />
              <div className="img-overlay" />
              <div className="absolute bottom-6 left-6 glass-card px-5 py-3">
                <p className="text-xs text-muted-foreground">Quality Certified</p>
                <p className="font-heading font-bold text-foreground">ISI & BIS Standards</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="section-py bg-muted">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="badge mb-4">How It Works</span>
            <h2 className="section-title">Simple 4-Step Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Contact Us", desc: "Call or fill our quote form with your project details." },
              { step: "02", title: "Site Visit", desc: "Our team visits your location for accurate measurement." },
              { step: "03", title: "Custom Quote", desc: "Receive a detailed quote within 48 hours." },
              { step: "04", title: "Installation", desc: "Professional installation by our certified team." },
            ].map((item, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp}
                className="glass-card p-7 relative card-hover">
                <div className="text-6xl font-heading font-black text-brand-red/10 absolute top-4 right-5 leading-none">{item.step}</div>
                <div className="text-xs font-black tracking-widest text-brand-red mb-4 uppercase">{item.step}</div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
