"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/products", label: t.nav.products },
    { href: "/projects", label: t.nav.projects },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
            : "py-5 bg-transparent"
        )}
      >
        <div className="container-site flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-tight">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-red transition-colors group-hover:text-brand-red-light">
              திருப்பதி
            </span>
            <span className="text-lg font-heading font-bold text-foreground leading-none tracking-tight">
              Iron Wire Fencing
            </span>
            <span className="block w-0 group-hover:w-full h-px bg-brand-red transition-all duration-500 mt-0.5" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link",
                  pathname === link.href && "active text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "ta" : "en")}
              className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 border border-black/10 hover:border-brand-red/40 hover:bg-brand-red/8 text-muted-foreground hover:text-foreground"
            >
              <span className={language === "en" ? "text-foreground" : "text-muted-foreground"}>EN</span>
              <span className="text-muted-foreground/40">|</span>
              <span className={language === "ta" ? "text-foreground font-tamil" : "text-muted-foreground font-tamil"}>தமிழ்</span>
            </button>

            <Link href="/quote" className="btn-primary text-xs py-2.5 px-5">
              {t.nav.quote}
              <ChevronRight size={14} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-10">
              <nav className="flex-1 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between py-4 border-b border-black/5 text-lg font-medium transition-colors",
                        pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.label}
                      <ChevronRight size={18} className="text-brand-red" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="flex flex-col gap-3 mt-8">
                <button
                  onClick={() => setLanguage(language === "en" ? "ta" : "en")}
                  className="btn-outline justify-center"
                >
                  {language === "en" ? "தமிழில் காண்க" : "View in English"}
                </button>
                <Link href="/quote" className="btn-primary justify-center">
                  {t.nav.quote} <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
