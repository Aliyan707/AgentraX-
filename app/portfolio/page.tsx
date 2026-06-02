"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, ArrowUpRight, ExternalLink } from "lucide-react";
import CTASection from "@/components/CTASection";

const categories = ["All", "AI", "Web", "Mobile", "Design"];

const projects = [
  {
    id: "finflow",
    title: "FinFlow Platform",
    category: "Web",
    tags: ["Web", "AI"],
    result: "340% user growth in 6 months",
    description: "AI-driven financial management SaaS with real-time analytics, custom LLM integrations, and enterprise-grade security for B2B teams.",
    gradient: "from-purple-900 via-violet-800 to-indigo-900",
    accent: "from-purple-400 to-violet-400",
    tag: "#1 Rated FinTech Tool",
    tech: ["Next.js", "OpenAI", "PostgreSQL", "AWS"],
    impact: ["340% MAU growth", "4.9★ App Store", "$8M raised after launch"],
  },
  {
    id: "medcore",
    title: "MedCore HMS",
    category: "Web",
    tags: ["Web", "AI"],
    result: "60% efficiency gain across 50+ clinics",
    description: "Intelligent hospital management system unifying patient records, scheduling, billing, and compliance in a single secure platform.",
    gradient: "from-fuchsia-900 via-purple-800 to-violet-900",
    accent: "from-fuchsia-400 to-purple-400",
    tag: "HIPAA Compliant",
    tech: ["React", "Node.js", "MongoDB", "Azure"],
    impact: ["60% time savings", "50+ clinics onboarded", "HIPAA certified"],
  },
  {
    id: "tradepulse",
    title: "TradePulse AI",
    category: "AI",
    tags: ["AI", "Web"],
    result: "$2M ARR achieved in Year 1",
    description: "Real-time market intelligence powered by custom LLMs, pattern recognition, and predictive analytics for professional traders.",
    gradient: "from-violet-900 via-purple-800 to-fuchsia-900",
    accent: "from-violet-400 to-fuchsia-400",
    tag: "AI-Powered",
    tech: ["Next.js", "Python", "Custom LLM", "GCP"],
    impact: ["$2M ARR Year 1", "15ms latency", "12K active users"],
  },
  {
    id: "shopstream",
    title: "ShopStream Commerce",
    category: "Web",
    tags: ["Web"],
    result: "250% conversion rate increase",
    description: "Headless commerce platform with personalised AI recommendations, lightning-fast checkout, and omnichannel inventory synchronisation.",
    gradient: "from-indigo-900 via-violet-800 to-purple-900",
    accent: "from-indigo-400 to-violet-400",
    tag: "Headless Commerce",
    tech: ["Next.js", "Shopify", "Vercel", "Redis"],
    impact: ["250% CVR increase", "1.2s avg load time", "$15M GMV/month"],
  },
  {
    id: "legaledge",
    title: "LegalEdge AI",
    category: "AI",
    tags: ["AI", "Web"],
    result: "80% faster contract review",
    description: "AI-powered legal document analysis platform that reviews, summarises, and flags risks in contracts — in seconds, not hours.",
    gradient: "from-pink-900 via-fuchsia-800 to-purple-900",
    accent: "from-pink-400 to-fuchsia-400",
    tag: "Legal Tech",
    tech: ["React", "GPT-4", "Python", "AWS"],
    impact: ["80% time saved", "94% accuracy", "200+ law firms"],
  },
  {
    id: "pocketfit",
    title: "PocketFit App",
    category: "Mobile",
    tags: ["Mobile", "AI"],
    result: "500K downloads in 3 months",
    description: "AI personal trainer app that builds adaptive workout plans, tracks form via camera, and adjusts intensity based on real-time biometrics.",
    gradient: "from-green-900 via-emerald-800 to-teal-900",
    accent: "from-green-400 to-emerald-400",
    tag: "Health Tech",
    tech: ["React Native", "TensorFlow", "Node.js", "Firebase"],
    impact: ["500K downloads", "4.8★ rating", "38% Day-30 retention"],
  },
  {
    id: "designsync",
    title: "DesignSync Platform",
    category: "Design",
    tags: ["Design", "Web"],
    result: "3x faster design-to-dev handoff",
    description: "Collaborative design system platform that bridges the gap between Figma and code — generating production-ready components automatically.",
    gradient: "from-orange-900 via-red-800 to-pink-900",
    accent: "from-orange-400 to-pink-400",
    tag: "DesignOps",
    tech: ["Next.js", "Figma API", "OpenAI", "Supabase"],
    impact: ["3x faster handoff", "90% less rework", "500+ designers using"],
  },
  {
    id: "logicoreops",
    title: "LogiCore Ops",
    category: "Web",
    tags: ["Web", "AI"],
    result: "45% reduction in delivery delays",
    description: "End-to-end logistics operations platform with AI-optimised routing, real-time fleet tracking, and predictive maintenance alerts.",
    gradient: "from-cyan-900 via-blue-800 to-indigo-900",
    accent: "from-cyan-400 to-blue-400",
    tag: "Logistics Tech",
    tech: ["Next.js", "Python", "PostgreSQL", "Mapbox"],
    impact: ["45% fewer delays", "22% fuel savings", "8 countries"],
  },
];

function ProjectCard({
  project,
  expanded,
  onToggle,
}: {
  project: (typeof projects)[0];
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer ${
        expanded
          ? "border-purple-500/50 shadow-[0_0_60px_rgba(139,92,246,0.2)]"
          : "border-white/7 hover:border-purple-500/40 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(139,92,246,0.15)]"
      }`}
      onClick={onToggle}
    >
      {/* Visual */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white text-xs font-semibold">
          {project.tag}
        </div>
        <div className="absolute top-4 right-4">
          <ArrowUpRight
            className={`w-5 h-5 text-white transition-all duration-300 ${expanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
          />
        </div>
        <div className="absolute bottom-4 left-4">
          <span
            className={`text-xs font-bold tracking-widest uppercase bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[rgba(255,255,255,0.02)] p-5 border-t border-white/5">
        <h3 className="text-white font-bold text-lg mb-1.5">{project.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center gap-1.5 text-green-400 text-xs font-semibold">
          <TrendingUp className="w-3.5 h-3.5" />
          {project.result}
        </div>

        {/* Expanded details */}
        {expanded && (
          <div className="mt-5 pt-5 border-t border-white/8 space-y-4">
            <div>
              <p className="text-gray-600 text-xs font-semibold uppercase tracking-widest mb-2">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-xs font-semibold uppercase tracking-widest mb-2">
                Key Results
              </p>
              <div className="space-y-1">
                {project.impact.map((i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    {i}
                  </div>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="btn-primary text-sm py-2.5 w-full justify-center mt-2 group"
              onClick={(e) => e.stopPropagation()}
            >
              Build something similar
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(active));

  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#09090f]">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-purple-800/16 pointer-events-none"
          style={{ filter: "blur(130px)" }}
        />
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative text-center">
          <div className="section-badge mb-6 mx-auto w-fit">Our Portfolio</div>
          <h1 className="display-2 text-white mb-6 max-w-3xl mx-auto">
            Work We&apos;re{" "}
            <span className="gradient-text">Proud Of</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Each project is a story of transformation — a business challenge met
            with elegant technology and relentless execution. Click any card to
            see the full story.
          </p>
        </div>
      </section>

      {/* ── Filter + Grid ─────────────────────────── */}
      <section className="py-16 bg-[#09090f]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActive(cat);
                  setExpanded(null);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                    : "glass-card border border-white/7 text-gray-400 hover:text-white hover:border-purple-500/30"
                }`}
              >
                {cat}
                {active === cat && cat !== "All" && (
                  <span className="ml-1.5 text-purple-300">
                    ({filtered.length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                expanded={expanded === project.id}
                onToggle={() =>
                  setExpanded(expanded === project.id ? null : project.id)
                }
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-600">
              <p className="text-lg">No projects in this category yet.</p>
              <p className="text-sm mt-1">Check back soon or explore all projects.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Want Results Like"
        highlight="These?"
        description="Let's build your next project together. Book a free discovery call and let's map out your success story."
      />
    </>
  );
}
