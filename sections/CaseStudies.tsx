"use client";

import { useInView } from "@/hooks/useInView";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const projects = [
  {
    id: "finflow",
    title: "FinFlow Platform",
    category: "FinTech SaaS",
    result: "340% user growth in 6 months",
    description:
      "End-to-end financial management SaaS with AI-driven insights, real-time analytics, and enterprise-grade security.",
    gradient: "from-purple-900 via-violet-800 to-indigo-900",
    accent: "from-purple-400 to-violet-400",
    tag: "#1 Rated FinTech Tool",
  },
  {
    id: "medcore",
    title: "MedCore HMS",
    category: "Healthcare Tech",
    result: "60% efficiency gain for 50+ clinics",
    description:
      "Intelligent hospital management system unifying patient records, scheduling, and billing on a single platform.",
    gradient: "from-fuchsia-900 via-purple-800 to-violet-900",
    accent: "from-fuchsia-400 to-purple-400",
    tag: "HIPAA Compliant",
  },
  {
    id: "tradepulse",
    title: "TradePulse AI",
    category: "AI Trading Dashboard",
    result: "$2M ARR achieved in Year 1",
    description:
      "Real-time market intelligence platform powered by custom LLMs, pattern recognition, and predictive analytics.",
    gradient: "from-violet-900 via-purple-800 to-fuchsia-900",
    accent: "from-violet-400 to-fuchsia-400",
    tag: "AI-Powered",
  },
  {
    id: "shopstream",
    title: "ShopStream Commerce",
    category: "E-Commerce Platform",
    result: "250% conversion rate increase",
    description:
      "Headless commerce platform with personalised AI recommendations, lightning-fast checkout, and omnichannel sync.",
    gradient: "from-indigo-900 via-violet-800 to-purple-900",
    accent: "from-indigo-400 to-violet-400",
    tag: "Headless Commerce",
  },
];

export default function CaseStudies() {
  const { ref, inView } = useInView();

  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#0a0a1a] overflow-hidden">
      {/* Orbs */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-800/10 pointer-events-none"
        style={{ filter: "blur(120px)" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="section-badge mb-5 mx-auto w-fit">Our Work</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Projects That Define{" "}
            <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Real results for real clients. Every project is a story of
            transformation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-white/8 hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(139,92,246,0.2)]"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${i * 100}ms, transform 0.7s ease ${i * 100}ms`,
              }}
            >
              {/* Visual area */}
              <div
                className={`relative h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}
              >
                {/* Grid overlay */}
                <div className="absolute inset-0 grid-pattern opacity-30" />

                {/* Floating orb */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full opacity-40"
                  style={{
                    background: `radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)`,
                    filter: "blur(20px)",
                  }}
                />

                {/* Tag */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white text-xs font-semibold">
                  {project.tag}
                </div>

                {/* Arrow link */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>

                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span
                    className={`text-xs font-bold tracking-widest uppercase bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="glass p-6 border-t border-white/5">
                <h3 className="text-white font-bold text-xl mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Result badge */}
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-green-500/10 border border-green-500/20 w-fit">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm font-semibold">
                    {project.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-12"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.7s ease 0.5s",
          }}
        >
          <button className="btn-secondary">
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
