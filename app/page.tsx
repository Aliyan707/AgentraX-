"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight, Sparkles, Brain, Globe, Smartphone,
  Palette, ChevronDown, ArrowUpRight,
} from "lucide-react";
import VideoSection from "@/components/VideoSection";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";

/* ── Data ──────────────────────────────────────────────────── */
const rotatingWords = ["Scale Businesses", "Delight Users", "Drive Revenue", "Win Markets"];

const clients = ["FinFlow", "MedCore", "TradePulse", "ShopStream", "LegalEdge", "LogiCore", "DataVault", "CloudSync"];

const homeServices = [
  {
    icon: Brain,
    title: "AI Development",
    description: "Custom LLM integrations, intelligent automation pipelines, and AI-powered features built for production.",
    gradient: "from-purple-600 to-violet-700",
    glowColor: "rgba(139,92,246,0.35)",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance React & Next.js applications with perfect UX, server-side rendering, and sub-second load times.",
    gradient: "from-fuchsia-600 to-purple-700",
    glowColor: "rgba(217,70,239,0.3)",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform iOS & Android apps with React Native delivering native-quality performance.",
    gradient: "from-violet-600 to-indigo-700",
    glowColor: "rgba(124,58,237,0.3)",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered design systems, brand identities, and Figma prototypes that convert.",
    gradient: "from-pink-600 to-fuchsia-600",
    glowColor: "rgba(236,72,153,0.3)",
  },
];

const featuredProjects = [
  {
    title: "FinFlow Platform",
    category: "FinTech SaaS",
    result: "340% user growth in 6 months",
    description: "AI-driven financial management SaaS with real-time analytics and enterprise-grade security.",
    gradient: "from-purple-900 via-violet-800 to-indigo-900",
    accent: "from-purple-400 to-violet-400",
    tag: "#1 Rated FinTech Tool",
  },
  {
    title: "MedCore HMS",
    category: "Healthcare Tech",
    result: "60% efficiency gain across 50+ clinics",
    description: "Intelligent hospital management unifying patient records, scheduling, and billing.",
    gradient: "from-fuchsia-900 via-purple-800 to-violet-900",
    accent: "from-fuchsia-400 to-purple-400",
    tag: "HIPAA Compliant",
  },
  {
    title: "TradePulse AI",
    category: "AI Trading Dashboard",
    result: "$2M ARR achieved in Year 1",
    description: "Real-time market intelligence platform powered by custom LLMs and predictive analytics.",
    gradient: "from-violet-900 via-purple-800 to-fuchsia-900",
    accent: "from-violet-400 to-fuchsia-400",
    tag: "AI-Powered",
  },
  {
    title: "ShopStream Commerce",
    category: "E-Commerce",
    result: "250% conversion rate increase",
    description: "Headless commerce with personalised AI recommendations and omnichannel sync.",
    gradient: "from-indigo-900 via-violet-800 to-purple-900",
    accent: "from-indigo-400 to-violet-400",
    tag: "Headless Commerce",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "FinFlow",
    avatar: "SC",
    gradient: "from-purple-600 to-violet-600",
    quote: "AgentraX didn't just build our platform — they architected our entire technical foundation. The quality of their AI integrations was miles ahead of anything we'd seen. 340% user growth in 6 months speaks for itself.",
  },
  {
    name: "Marcus Rivera",
    role: "CEO & Founder",
    company: "TradePulse AI",
    avatar: "MR",
    gradient: "from-fuchsia-600 to-purple-600",
    quote: "Exceptional technical depth, impeccable communication, zero surprises. The team delivered our AI trading dashboard ahead of schedule with every feature we'd spec'd — plus several they suggested that made the product genuinely better.",
  },
  {
    name: "Emily Watson",
    role: "VP of Product",
    company: "MedCore",
    avatar: "EW",
    gradient: "from-violet-600 to-indigo-600",
    quote: "Healthcare software is notoriously difficult. AgentraX navigated every regulatory requirement with ease. Our clinicians now save 3+ hours per day. That's the real metric that matters.",
  },
];

/* ── Hero ──────────────────────────────────────────────────── */
function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % rotatingWords.length);
        setWordVisible(true);
      }, 380);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#09090f]">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-48 -left-48 w-[900px] h-[900px] rounded-full bg-purple-800/20"
          style={{ filter: "blur(130px)", animation: "float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute top-20 -right-40 w-[700px] h-[700px] rounded-full bg-violet-700/15"
          style={{ filter: "blur(110px)", animation: "float 11s ease-in-out 3s infinite" }}
        />
        <div
          className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full bg-fuchsia-800/12"
          style={{ filter: "blur(120px)", animation: "float 9s ease-in-out 5s infinite" }}
        />
      </div>

      {/* Grid + vignette */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, #09090f 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center max-w-6xl mx-auto px-6 pt-28 pb-8"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        {/* Badge */}
        <div className="section-badge mb-8 mx-auto w-fit">
          <Sparkles className="w-3 h-3" />
          Trusted by 150+ companies worldwide
        </div>

        {/* Headline */}
        <h1 className="display-1 text-white mb-5">
          We Build Products
          <br />
          <span className="relative">
            That{" "}
            <span
              className="gradient-text"
              style={{
                display: "inline-block",
                minWidth: "9ch",
                opacity: wordVisible ? 1 : 0,
                transform: wordVisible ? "translateY(0) scale(1)" : "translateY(-10px) scale(0.97)",
                transition: "opacity 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.35s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {rotatingWords[wordIdx]}
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-400 text-base sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10">
          From AI-powered platforms to enterprise software — we craft digital
          solutions that transform how businesses operate and compete.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/portfolio" className="btn-primary text-base group">
            View Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="btn-secondary text-base">
            Contact Us
          </Link>
        </div>

        {/* Trusted by */}
        <div>
          <p className="text-gray-700 text-xs font-semibold tracking-widest uppercase mb-5">
            Trusted by innovative companies
          </p>
          {/* Scrolling marquee */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#09090f] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#09090f] to-transparent z-10 pointer-events-none" />
            <div className="flex gap-12 items-center" style={{ animation: "scrollLeft 25s linear infinite" }}>
              {[...clients, ...clients].map((name, i) => (
                <span
                  key={i}
                  className="text-gray-600 font-bold text-sm tracking-wide hover:text-gray-400 transition-colors whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-700 text-[10px] font-medium tracking-widest uppercase">
        <span>Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#09090f] to-transparent pointer-events-none" />
    </section>
  );
}

/* ── Services Preview ──────────────────────────────────────── */
function ServicesPreview() {
  return (
    <section className="py-24 md:py-28 bg-[#0b0b18] relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] rounded-full bg-purple-900/12 pointer-events-none"
        style={{ filter: "blur(100px)" }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-badge mb-5">What We Do</div>
            <h2 className="section-title text-white">
              Services Built for{" "}
              <span className="gradient-text">Scale</span>
            </h2>
          </div>
          <Link href="/services" className="btn-ghost flex-shrink-0">
            All services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {homeServices.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Featured Projects ─────────────────────────────────────── */
function FeaturedProjects() {
  return (
    <section className="py-24 md:py-32 bg-[#09090f] relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-[600px] h-[500px] rounded-full bg-purple-900/12 pointer-events-none"
        style={{ filter: "blur(120px)" }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-badge mb-5">Our Work</div>
            <h2 className="section-title text-white">
              Projects That Define{" "}
              <span className="gradient-text">Excellence</span>
            </h2>
          </div>
          <Link href="/portfolio" className="btn-ghost flex-shrink-0">
            All projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ──────────────────────────────────────────── */
function TestimonialsPreview() {
  return (
    <section className="py-24 md:py-32 bg-[#0b0b18] relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-fuchsia-900/10 pointer-events-none"
        style={{ filter: "blur(100px)" }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-badge mb-5 mx-auto w-fit">Client Love</div>
          <h2 className="section-title text-white mb-4">
            Trusted by <span className="gradient-text">Builders & Leaders</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-lg">
            Real words from the founders and CTOs we&apos;ve helped build
            something remarkable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/about" className="btn-ghost">
            Read more stories <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Page ──────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <ServicesPreview />
      <FeaturedProjects />
      <StatsSection />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}
