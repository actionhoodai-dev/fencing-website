"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Package } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

const PRODUCTS = [
  { id: 1, name: "Hexagonal Wire Mesh", category: "Wire Mesh", price: "₹45/sq ft", gauge: "18-22 BWG", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80", rating: 4.9, badge: "Bestseller" },
  { id: 2, name: "Galvanized Wire Mesh", category: "Wire Mesh", price: "₹55/sq ft", gauge: "16-20 BWG", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80", rating: 4.8, badge: null },
  { id: 3, name: "Single Strand Barbed Wire", category: "Barbed Wire", price: "₹28/meter", gauge: "14-16 BWG", img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&q=80", rating: 4.7, badge: null },
  { id: 4, name: "Double Strand Barbed Wire", category: "Barbed Wire", price: "₹38/meter", gauge: "12-14 BWG", img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=500&q=80", rating: 4.9, badge: "Premium" },
  { id: 5, name: "Chain Link Fencing 50mm", category: "Chain Link", price: "₹65/sq ft", gauge: "10-12 BWG", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80", rating: 4.6, badge: null },
  { id: 6, name: "Chain Link Fencing 75mm", category: "Chain Link", price: "₹75/sq ft", gauge: "8-10 BWG", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80", rating: 4.8, badge: null },
  { id: 7, name: "Sliding Iron Gate", category: "Gates", price: "₹850/sq ft", gauge: "Custom", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80", rating: 4.9, badge: "Custom" },
  { id: 8, name: "Swing Iron Gate", category: "Gates", price: "₹780/sq ft", gauge: "Custom", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80", rating: 4.7, badge: null },
  { id: 9, name: "Welded Mesh Panel 50x50", category: "Panels", price: "₹120/sq ft", gauge: "12 BWG", img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&q=80", rating: 4.8, badge: "Industrial" },
  { id: 10, name: "Welded Mesh Panel 100x100", category: "Panels", price: "₹95/sq ft", gauge: "10 BWG", img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=500&q=80", rating: 4.6, badge: null },
  { id: 11, name: "Concertina Razor Wire", category: "Barbed Wire", price: "₹125/meter", gauge: "Razor", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80", rating: 4.9, badge: "Security" },
  { id: 12, name: "Agricultural Fencing Roll", category: "Wire Mesh", price: "₹42/sq ft", gauge: "20 BWG", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80", rating: 4.7, badge: null },
];

export default function ProductsPage() {
  const { t, isTamil } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const categories = ["All", "Wire Mesh", "Barbed Wire", "Chain Link", "Gates", "Panels"];

  return (
    <div className="overflow-hidden pt-20">

      {/* ── Hero ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="glow-orb w-[600px] h-[400px] top-0 right-0 opacity-20" />
        <div className="container-site relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge mb-6 inline-flex">
            {t.products.badge}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={cn("text-5xl md:text-6xl font-heading font-black text-foreground mb-4", isTamil && "font-tamil")}>
            {t.products.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={cn("section-subtitle mx-auto mb-10", isTamil && "font-tamil")}>
            {t.products.subtitle}
          </motion.p>

          {/* Stats bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Package, label: "50+ Products" },
              { icon: Star, label: "4.8★ Average Rating" },
              { icon: ArrowRight, label: "Bulk Orders Accepted" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <s.icon size={14} className="text-brand-red" />
                {s.label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section className="pb-28 bg-background">
        <div className="container-site">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-14">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
                  activeCategory === cat
                    ? "bg-brand-red text-white shadow-red-glow"
                    : "glass-card text-muted-foreground hover:text-foreground hover:border-brand-red/30"
                )}>
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <motion.div key={product.id} custom={i} initial="hidden" animate="visible" variants={fadeUp}
                  className="glass-card overflow-hidden card-hover group flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={product.img} alt={product.name} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw" />
                    <div className="img-overlay" />
                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="badge text-[10px] py-1">{product.badge}</span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm">
                      <Star size={11} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-xs font-semibold text-white">{product.rating}</span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-xs text-brand-red font-semibold tracking-wider uppercase mb-1">{product.category}</p>
                    <h3 className="font-heading font-bold text-foreground text-base mb-1 leading-snug">{product.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3">Gauge: {product.gauge}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-lg font-black text-brand-red font-heading">{product.price}</span>
                      <Link href="/quote"
                        className="text-xs font-semibold text-white bg-brand-red/20 hover:bg-brand-red transition-colors px-3 py-1.5 rounded-lg border border-brand-red/30">
                        Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="glow-orb w-full h-60 opacity-20" />
        <div className="container-site relative z-10 text-center">
          <h2 className="section-title mb-4">Need a Custom Product?</h2>
          <p className="section-subtitle mx-auto mb-8">We manufacture to your exact specifications — gauge, size, coating, and finish.</p>
          <Link href="/quote" className="btn-primary px-8 py-4 text-base">
            {t.common.getQuote} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
