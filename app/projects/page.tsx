"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Expand } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] as any },
  }),
};

const PROJECTS = [
  { id: 1, title: "Salem Agricultural Farm Perimeter", category: "agricultural", location: "Salem, TN", year: "2024", area: "12,000 sq ft", type: "Barbed Wire + Chain Link", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80" },
  { id: 2, title: "Textile Factory Security Fencing", category: "industrial", location: "Coimbatore, TN", year: "2024", area: "8,500 sq ft", type: "Welded Mesh Panels", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80" },
  { id: 3, title: "Residential Compound Wall", category: "residential", location: "Salem, TN", year: "2023", area: "2,200 sq ft", type: "Iron Gate + Wire Mesh", img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=700&q=80" },
  { id: 4, title: "Highway Median Barrier Fencing", category: "highway", location: "NH-44, TN", year: "2023", area: "45,000 sq ft", type: "Chain Link Heavy Duty", img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=700&q=80" },
  { id: 5, title: "Poultry Farm Enclosure", category: "agricultural", location: "Erode, TN", year: "2023", area: "6,800 sq ft", type: "Hexagonal Wire Mesh", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80" },
  { id: 6, title: "Steel Plant Security Perimeter", category: "industrial", location: "Salem, TN", year: "2022", area: "22,000 sq ft", type: "Razor Wire + Welded Panels", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80" },
  { id: 7, title: "Luxury Villa Gate & Fencing", category: "residential", location: "Ooty, TN", year: "2022", area: "1,800 sq ft", type: "Custom Iron Gate", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80" },
  { id: 8, title: "National Highway Boundary", category: "highway", location: "NH-544, TN", year: "2022", area: "38,000 sq ft", type: "Barbed Wire Heavy Duty", img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=700&q=80" },
  { id: 9, title: "Mango Orchard Perimeter", category: "agricultural", location: "Dharmapuri, TN", year: "2021", area: "9,500 sq ft", type: "Galvanized Wire Mesh", img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=700&q=80" },
];

export default function ProjectsPage() {
  const { t, isTamil } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filters = [
    { key: "all", label: t.projects.filter.all },
    { key: "agricultural", label: t.projects.filter.agricultural },
    { key: "industrial", label: t.projects.filter.industrial },
    { key: "residential", label: t.projects.filter.residential },
    { key: "highway", label: t.projects.filter.highway },
  ];

  const filtered = activeFilter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="overflow-hidden pt-20">

      {/* ── Hero ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="glow-orb w-[700px] h-[400px] -top-20 left-1/2 -translate-x-1/2 opacity-20" />
        <div className="container-site relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge mb-6 inline-flex">
            {t.projects.badge}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={cn("text-5xl md:text-6xl font-heading font-black text-foreground mb-4", isTamil && "font-tamil")}>
            {t.projects.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={cn("section-subtitle mx-auto mb-12", isTamil && "font-tamil")}>
            {t.projects.subtitle}
          </motion.p>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { value: "2000+", label: "Projects Done" },
              { value: "38", label: "Districts Covered" },
              { value: "15+", label: "Sectors Served" },
              { value: "100%", label: "On-Time Delivery" },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <div className="text-2xl font-heading font-black text-gradient-red">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="pb-28 bg-background">
        <div className="container-site">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-14">
            {filters.map((f) => (
              <button key={f.key} onClick={() => setActiveFilter(f.key)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
                  activeFilter === f.key
                    ? "bg-brand-red text-white shadow-red-glow"
                    : "glass-card text-muted-foreground hover:text-foreground hover:border-brand-red/30"
                )}>
                {f.label}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <AnimatePresence mode="wait">
            <motion.div key={activeFilter}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.div key={project.id} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                  className={cn("glass-card overflow-hidden card-hover group", i === 0 ? "md:col-span-2 lg:col-span-1" : "")}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: i % 5 === 0 ? "16/9" : "4/3" }}>
                    <Image src={project.img} alt={project.title} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw" />
                    <div className="img-overlay" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="badge text-[10px] py-1 capitalize">{project.category}</span>
                    </div>

                    {/* Expand button */}
                    <button onClick={() => setLightboxImg(project.img)}
                      className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white hover:bg-brand-red">
                      <Expand size={14} />
                    </button>

                    {/* Info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-heading font-bold text-white text-lg leading-tight mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-3 text-xs text-white/70">
                        <span className="flex items-center gap-1"><MapPin size={11} />{project.location}</span>
                        <span className="flex items-center gap-1"><Calendar size={11} />{project.year}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div>
                        <p className="text-xs text-muted-foreground">Area</p>
                        <p className="font-semibold text-foreground">{project.area}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Type</p>
                        <p className="font-semibold text-foreground">{project.type}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <Image src={lightboxImg} alt="Project" fill className="object-cover" sizes="90vw" />
              <button onClick={() => setLightboxImg(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-brand-red transition-colors text-xl font-bold">
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="glow-orb w-full h-60 opacity-15" />
        <div className="container-site relative z-10 text-center">
          <h2 className="section-title mb-4">Your Project Could Be Next</h2>
          <p className="section-subtitle mx-auto mb-8">Join 2000+ satisfied clients across Tamil Nadu.</p>
          <Link href="/quote" className="btn-primary px-8 py-4 text-base">
            {t.common.getQuote} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
