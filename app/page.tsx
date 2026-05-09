"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Shield, Award, Users, Zap } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const SERVICES_PREVIEW = [
  { title: "Wire Mesh Fencing", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { title: "Barbed Wire", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" },
  { title: "Chain Link", img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80" },
  { title: "Iron Gates", img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400&q=80" },
];

export default function HomePage() {
  const { t, isTamil } = useLanguage();

  return (
    <div className="overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
        {/* Grid BG */}
        <div className="absolute inset-0 grid-bg opacity-60" />
        {/* Red glow */}
        <div className="glow-orb w-[600px] h-[600px] -top-32 -right-32 opacity-50" />
        <div className="glow-orb w-[400px] h-[400px] bottom-0 -left-32 opacity-30" />
        {/* Noise */}
        <div className="noise-overlay" />

        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=70"
            alt="Industrial fencing"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 container-site pt-32 pb-24 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-8"
          >
            <span className="badge">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black text-foreground leading-none tracking-tight mb-4"
          >
            {t.hero.title1}
            <br />
            <span className="text-gradient-red">{t.hero.title2}</span>
          </motion.h1>

          {/* Tamil name */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "text-base md:text-lg mb-3 font-medium tracking-wide",
              "font-tamil text-brand-red/80"
            )}
          >
            திருப்பதி இரும்பு கம்பி வேலி உற்பத்தியகம்
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed",
              isTamil && "font-tamil"
            )}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Link href="/products" className="btn-primary text-sm px-7 py-3.5">
              {t.hero.cta1} <ArrowRight size={16} />
            </Link>
            <Link href="/quote" className="btn-outline text-sm px-7 py-3.5">
              {t.hero.cta2}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[t.hero.stat1, t.hero.stat2, t.hero.stat3, t.hero.stat4].map((stat, i) => (
              <div key={i} className="stat-card card-hover">
                <div className="text-3xl md:text-4xl font-heading font-black text-gradient-red mb-1">{stat.value}</div>
                <div className={cn("text-xs text-muted-foreground", isTamil && "font-tamil")}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={18} className="text-brand-red" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Marquee ───────────────────────────────────────── */}
      <div className="py-5 bg-brand-red/10 border-y border-brand-red/20 overflow-hidden">
        <div className="marquee-content">
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-6 text-sm font-semibold tracking-widest uppercase text-brand-red/80">
              Wire Mesh Fencing
              <span className="text-brand-red">✦</span>
              Barbed Wire
              <span className="text-brand-red">✦</span>
              Chain Link
              <span className="text-brand-red">✦</span>
              Iron Gates
              <span className="text-brand-red">✦</span>
              Industrial Security
              <span className="text-brand-red">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Services Preview ──────────────────────────────── */}
      <section className="section-py bg-muted">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="badge mb-4">{t.services.badge}</span>
              <h2 className={cn("section-title", isTamil && "font-tamil")}>{t.services.title}</h2>
              <span className="red-line mt-4" />
            </div>
            <Link href="/services" className="btn-outline self-start md:self-auto whitespace-nowrap">
              {t.common.viewAll} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES_PREVIEW.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer card-hover"
              >
                <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <div className="img-overlay" />
                <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-heading font-bold text-white text-lg drop-shadow-md">{s.title}</p>
                  <span className="block w-0 group-hover:w-8 h-0.5 bg-brand-red transition-all duration-500 mt-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────── */}
      <section className="section-py relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="glow-orb w-[500px] h-[500px] top-1/2 -translate-y-1/2 right-0 opacity-20" />
        <div className="container-site relative z-10">
          <div className="text-center mb-16">
            <span className="badge mb-4">Why Choose Us</span>
            <h2 className="section-title mb-4">Tamil Nadu&apos;s Trusted Choice</h2>
            <p className={cn("section-subtitle mx-auto", isTamil && "font-tamil")}>
              Decades of craftsmanship, precision engineering, and unmatched after-sales support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "25+ Years Experience", desc: "Trusted by thousands across Tamil Nadu since 1998." },
              { icon: Shield, title: "ISO Quality Standards", desc: "Every product meets strict industrial quality benchmarks." },
              { icon: Users, title: "2000+ Satisfied Clients", desc: "From farmers to factory owners — we deliver excellence." },
              { icon: Zap, title: "Fast Delivery & Install", desc: "Quick turnaround with professional installation teams." },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="glass-card p-7 group card-hover"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ background: "rgba(192,57,43,0.12)", border: "1px solid rgba(192,57,43,0.25)" }}>
                  <item.icon size={22} className="text-brand-red" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #FFF5F4 0%, #FFFFFF 50%, #FFF5F4 100%)" }} />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="glow-orb w-full h-[300px] top-0 opacity-30" />
        <div className="container-site relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-4">
              Ready to Secure Your <span className="text-gradient-red">Boundary?</span>
            </h2>
            <p className={cn("text-muted-foreground max-w-xl mx-auto mb-10 text-lg", isTamil && "font-tamil")}>
              Get a free, no-obligation quote for your fencing project within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary px-8 py-4 text-base">
                {t.common.getQuote} <ArrowRight size={18} />
              </Link>
              <a href={`tel:${t.contact.phone}`} className="btn-outline px-8 py-4 text-base">
                {t.common.callNow}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
