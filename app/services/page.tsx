import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain, Globe, Smartphone, Palette, Cloud, BarChart3,
  CheckCircle2, ArrowRight,
} from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive AI development, web apps, mobile, design, cloud, and digital strategy services. End-to-end delivery by senior specialists.",
};

const services = [
  {
    icon: Brain,
    title: "AI Development",
    subtitle: "Intelligent systems that scale",
    description: "We build production-grade AI solutions — from custom LLM integrations and RAG pipelines to intelligent automation workflows and AI-first product features.",
    benefits: [
      "Custom LLM fine-tuning & integration",
      "Retrieval-Augmented Generation (RAG)",
      "AI-powered automation pipelines",
      "Computer vision & NLP solutions",
      "ML model development & deployment",
      "AI product strategy & architecture",
    ],
    gradient: "from-purple-600 to-violet-700",
    glowColor: "rgba(139,92,246,0.35)",
    accent: "from-purple-400 to-violet-400",
    highlight: true,
  },
  {
    icon: Globe,
    title: "Web Development",
    subtitle: "Performant at any scale",
    description: "High-performance React & Next.js applications built for scale. Server-side rendering, edge functions, pixel-perfect UI, and sub-second Core Web Vitals.",
    benefits: [
      "React & Next.js applications",
      "Full-stack TypeScript development",
      "API design & integration",
      "Performance optimisation (Core Web Vitals)",
      "Headless CMS & e-commerce",
      "SaaS product development",
    ],
    gradient: "from-fuchsia-600 to-purple-700",
    glowColor: "rgba(217,70,239,0.3)",
    accent: "from-fuchsia-400 to-purple-400",
    highlight: false,
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    subtitle: "Native quality, cross-platform speed",
    description: "Cross-platform iOS & Android apps with React Native. Native performance, beautiful UI, and seamless backend integration — shipped to both stores simultaneously.",
    benefits: [
      "React Native cross-platform apps",
      "iOS & Android native development",
      "App Store & Play Store optimisation",
      "Offline-first architecture",
      "Push notifications & deep linking",
      "Performance profiling & optimisation",
    ],
    gradient: "from-violet-600 to-indigo-700",
    glowColor: "rgba(124,58,237,0.3)",
    accent: "from-violet-400 to-indigo-400",
    highlight: false,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    subtitle: "Design that converts",
    description: "Human-centered design that looks stunning and performs even better. We build design systems, brand identities, and Figma prototypes that your users will love.",
    benefits: [
      "Product design & UX strategy",
      "Design systems & component libraries",
      "Brand identity & visual language",
      "Figma prototyping & user testing",
      "Accessibility (WCAG 2.2 AA)",
      "Motion design & micro-interactions",
    ],
    gradient: "from-pink-600 to-fuchsia-600",
    glowColor: "rgba(236,72,153,0.3)",
    accent: "from-pink-400 to-fuchsia-400",
    highlight: false,
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    subtitle: "Infrastructure that never sleeps",
    description: "Scalable, secure cloud architecture on AWS, GCP, and Azure. CI/CD pipelines, Kubernetes orchestration, and 99.99% uptime SLAs — so you can focus on building.",
    benefits: [
      "AWS, GCP & Azure architecture",
      "Kubernetes & Docker orchestration",
      "CI/CD pipeline design",
      "Infrastructure as Code (Terraform)",
      "Security audits & compliance",
      "24/7 monitoring & incident response",
    ],
    gradient: "from-indigo-600 to-violet-700",
    glowColor: "rgba(99,102,241,0.3)",
    accent: "from-indigo-400 to-violet-400",
    highlight: false,
  },
  {
    icon: BarChart3,
    title: "Digital Strategy",
    subtitle: "Data-driven growth",
    description: "Technology audits, growth roadmaps, and strategic advisory. We help you make the right technology bets so your business stays ahead of the competition.",
    benefits: [
      "Technology audit & assessment",
      "Digital transformation roadmaps",
      "Product strategy & prioritisation",
      "Market & competitive analysis",
      "OKR & KPI framework design",
      "Quarterly business reviews",
    ],
    gradient: "from-purple-500 to-pink-600",
    glowColor: "rgba(168,85,247,0.3)",
    accent: "from-purple-400 to-pink-400",
    highlight: false,
  },
];

const process = [
  { step: "01", title: "Discovery Call", description: "We learn your goals, constraints, and vision in a focused 30-minute session." },
  { step: "02", title: "Proposal & Scope", description: "Receive a detailed proposal with timeline, tech stack, team composition, and pricing." },
  { step: "03", title: "Kickoff & Sprint 1", description: "Design and development begin. You get daily async updates and weekly live demos." },
  { step: "04", title: "QA & Launch", description: "Rigorous testing, staging review, and zero-downtime deployment to production." },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#09090f]">
        <div
          className="absolute -top-32 right-0 w-[700px] h-[700px] rounded-full bg-purple-800/16 pointer-events-none"
          style={{ filter: "blur(120px)" }}
        />
        <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative text-center">
          <div className="section-badge mb-6 mx-auto w-fit">Our Services</div>
          <h1 className="display-2 text-white mb-6 max-w-3xl mx-auto">
            Everything You Need to{" "}
            <span className="gradient-text">Win Digitally</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Six core practices. One integrated team. Whether you need a single
            service or end-to-end delivery, we have the expertise to execute at
            the highest level.
          </p>
          <Link href="/contact" className="btn-primary text-base group">
            Start a Conversation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────── */}
      <section className="py-20 bg-[#0b0b18] relative overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] rounded-full bg-purple-900/10 pointer-events-none"
          style={{ filter: "blur(100px)" }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className={`card p-8 group flex flex-col h-full ${
                  s.highlight
                    ? "border-purple-500/30 bg-purple-900/10"
                    : ""
                }`}
              >
                {s.highlight && (
                  <div className="tag-purple mb-4 w-fit text-xs">Most Popular</div>
                )}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 0 22px ${s.glowColor}` }}
                >
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <p className="eyebrow mb-1">{s.subtitle}</p>
                <h3 className="text-white font-bold text-2xl mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-2.5 flex-1">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="btn-ghost mt-6 border-t border-white/5 pt-5 w-full"
                >
                  Get started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────── */}
      <section className="py-24 bg-[#09090f] relative overflow-hidden">
        <div
          className="absolute top-1/2 right-0 w-[500px] h-[600px] rounded-full bg-violet-900/12 pointer-events-none"
          style={{ filter: "blur(100px)" }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-badge mb-5 mx-auto w-fit">How It Works</div>
            <h2 className="section-title text-white mb-4">
              From First Call to{" "}
              <span className="gradient-text">Launch Day</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              A clear, predictable process so you always know what&apos;s happening
              and what&apos;s next.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-gradient-to-r from-purple-500/40 to-transparent z-10" style={{ width: "calc(100% - 2rem)", transform: "translateX(1rem)" }} />
                )}
                <div className="card p-6 h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-black text-lg">{p.step}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Talk About"
        highlight="Your Project"
        description="Tell us what you're building and we'll tell you how we can make it exceptional."
        primaryLabel="Book a Free Call"
        primaryHref="/contact"
        secondaryLabel="View Case Studies"
        secondaryHref="/portfolio"
      />
    </>
  );
}
