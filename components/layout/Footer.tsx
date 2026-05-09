"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Facebook, Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/products", label: t.nav.products },
    { href: "/projects", label: t.nav.projects },
    { href: "/contact", label: t.nav.contact },
  ];

  const services = [
    "Iron Wire Mesh Fencing",
    "Barbed Wire Fencing",
    "Chain Link Fencing",
    "Welded Mesh Panels",
    "Gate Fabrication",
    "Installation Services",
  ];

  return (
    <footer className="relative bg-muted border-t border-black/5 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-32 bg-brand-red/5 blur-[80px] pointer-events-none" />

      <div className="container-site pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-red mb-1">திருப்பதி</p>
              <h3 className="text-xl font-heading font-bold text-foreground">Iron Wire Fencing</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t.footer.tagline}</p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-black/8 text-muted-foreground hover:text-foreground hover:border-brand-red/40 hover:bg-brand-red/10 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-widest uppercase mb-5">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-brand-red transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-widest uppercase mb-5">{t.footer.services}</h4>
            <ul className="space-y-3">
              {services.map((svc) => (
                <li key={svc}>
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-brand-red flex-shrink-0" />
                    {svc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-widest uppercase mb-5">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-red mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground whitespace-pre-line">{t.contact.address}</span>
              </li>
              <li>
                <a href={`tel:${t.contact.phone}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                  <Phone size={16} className="text-brand-red flex-shrink-0" />
                  {t.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${t.contact.email}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={16} className="text-brand-red flex-shrink-0" />
                  {t.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-brand-red flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{t.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="glass-card-red p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div>
            <p className="font-heading text-lg font-bold text-foreground">Ready to start your project?</p>
            <p className="text-sm text-muted-foreground">Get a free quote within 48 hours.</p>
          </div>
          <Link href="/quote" className="btn-primary whitespace-nowrap">
            {t.common.getQuote} <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-black/5">
          <p className="text-xs text-muted-foreground">{t.footer.copyright}</p>
          <p className="text-xs text-muted-foreground">
            Crafted with precision in{" "}
            <span className="text-brand-red">Tamil Nadu, India 🇮🇳</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
