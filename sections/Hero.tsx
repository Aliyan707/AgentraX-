"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

const stats = [
  { value: "150+", label: "Happy Clients" },
  { value: "300+", label: "Projects Shipped" },
  { value: "5+", label: "Years of Excellence" },
  { value: "$50M+", label: "Value Delivered" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a1a]"
    >
      {/* ── Background orbs ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-32 w-[700px] h-[700px] rounded-full bg-purple-700/20"
          style={{ filter: "blur(120px)", animation: "float 7s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-48 -right-32 w-[600px] h-[600px] rounded-full bg-violet-600/15"
          style={{ filter: "blur(100px)", animation: "float 9s ease-in-out 3s infinite" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-fuchsia-700/10"
          style={{ filter: "blur(150px)" }}
        />
      </div>

      {/* ── Grid pattern ─────────────────────────────────── */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* ── Content ──────────────────────────────────────── */}
      <div
        className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24 pb-10"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Badge */}
        <div className="section-badge mb-8 mx-auto w-fit">
          <Sparkles className="w-3.5 h-3.5" />
          Premium AI &amp; Software Agency
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
          We Build{" "}
          <span className="gradient-text">Digital Experiences</span>
          <br className="hidden sm:block" /> That Drive Results
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          From AI-powered applications to enterprise platforms — we craft
          solutions that scale businesses, delight users, and deliver measurable
          impact at every stage.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#work" className="btn-primary group">
            View Our Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link href="#contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>

      {/* ── Stats ────────────────────────────────────────── */}
      <div
        className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-16"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.9s ease 0.3s",
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mt-14 border border-white/8 rounded-2xl overflow-hidden glass">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-3 py-4 sm:px-6 sm:py-6 text-center ${
                i < stats.length - 1 ? "border-r border-white/8" : ""
              }`}
            >
              <div className="text-2xl sm:text-3xl font-black gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll hint ───────────────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 text-xs animate-bounce">
        <span className="tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>

      {/* ── Bottom fade ───────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a0a1a] to-transparent pointer-events-none" />
    </section>
  );
}
