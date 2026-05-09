"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" },
  }),
};

const TEAM = [
  { name: "Murugan R.", role: "Founder & MD", exp: "25 yrs", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Selvi K.", role: "Operations Head", exp: "18 yrs", img: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&q=80" },
  { name: "Rajan P.", role: "Chief Engineer", exp: "20 yrs", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
];

const TIMELINE = [
  { year: "1998", event: "Founded in Salem, Tamil Nadu with a small workshop" },
  { year: "2004", event: "Expanded to full-scale manufacturing unit" },
  { year: "2010", event: "Crossed 500 projects across Tamil Nadu" },
  { year: "2016", event: "Launched installation services division" },
  { year: "2020", event: "Achieved ISO-compliant production standards" },
  { year: "2024", event: "2000+ projects — still growing strong" },
];

export default function AboutPage() {
  const { t, isTamil } = useLanguage();

  return (
    <div className="overflow-hidden pt-20">

      {/* ── Hero ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="glow-orb w-[600px] h-[400px] top-0 right-0 opacity-25" />
        <div className="container-site relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="badge mb-6 inline-flex">
                {t.about.badge}
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={cn("section-title text-5xl lg:text-6xl mb-6", isTamil && "font-tamil")}>
                {t.about.title}
              </motion.h1>
              <span className="red-line mb-6" />
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className={cn("text-muted-foreground text-lg leading-relaxed mb-8", isTamil && "font-tamil")}>
                {t.about.subtitle}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="flex flex-wrap gap-2 mb-10">
                {t.about.values.map((v) => (
                  <span key={v} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-brand-red-light border border-brand-red/25 bg-brand-red/8">
                    <CheckCircle2 size={13} /> {v}
                  </span>
                ))}
              </motion.div>
              <Link href="/contact" className="btn-primary">Contact Us <ArrowRight size={16} /></Link>
            </div>

            {/* Image collage */}
            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" alt="Fencing work" fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
                <div className="img-overlay" />
              </div>
              <div className="flex flex-col gap-3 mt-8">
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" alt="Wire mesh" fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
                  <div className="img-overlay" />
                </div>
                <div className="glass-card-red p-5 rounded-2xl">
                  <div className="text-3xl font-heading font-black text-gradient-red">25+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-py bg-muted">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: t.about.mission, text: t.about.missionText, accent: "Mission" },
              { title: t.about.vision, text: t.about.visionText, accent: "Vision" },
            ].map((item, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="glass-card p-10 card-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[8rem] font-heading font-black text-brand-red/4 leading-none select-none">{item.accent}</div>
                <h3 className={cn("font-heading text-2xl font-bold text-foreground mb-4", isTamil && "font-tamil")}>{item.title}</h3>
                <span className="red-line mb-5" />
                <p className={cn("text-muted-foreground leading-relaxed", isTamil && "font-tamil")}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section-py relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-site relative z-10">
          <div className="text-center mb-16">
            <span className="badge mb-4">Our Journey</span>
            <h2 className="section-title">Built Over Decades</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-red via-brand-red/30 to-transparent" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="flex gap-8 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full glass-card-red flex items-center justify-center">
                      <span className="text-xs font-black text-brand-red font-heading">{item.year}</span>
                    </div>
                  </div>
                  <div className="glass-card p-5 flex-1 card-hover mt-2">
                    <p className={cn("text-muted-foreground", isTamil && "font-tamil")}>{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section-py bg-muted">
        <div className="container-site">
          <div className="text-center mb-14">
            <span className="badge mb-4">{t.about.team.title}</span>
            <h2 className={cn("section-title", isTamil && "font-tamil")}>{t.about.team.subtitle}</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {TEAM.map((member, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="glass-card overflow-hidden card-hover group">
                <div className="relative aspect-square">
                  <Image src={member.img} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:640px) 100vw, 33vw" />
                  <div className="img-overlay" />
                </div>
                <div className="p-5">
                  <h4 className="font-heading font-bold text-foreground text-lg">{member.name}</h4>
                  <p className="text-sm text-brand-red mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.exp} experience</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
