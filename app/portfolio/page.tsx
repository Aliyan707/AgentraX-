"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TrendingUp, ArrowUpRight, ExternalLink } from "lucide-react";
import CTASection from "@/components/CTASection";

const categories = ["All", "AI", "Web", "Mobile", "Design"];

const projects = [
  {
    id: "ai-employee-dashboard",
    title: "AI Employee Dashboard",
    category: "AI",
    tags: ["AI", "Web"],
    result: "10x faster workforce insights with AI",
    description: "Intelligent employee management dashboard powered by AI — providing real-time analytics, performance tracking, and automated HR workflows in one unified platform.",
    gradient: "from-purple-900 via-indigo-800 to-blue-900",
    accent: "from-purple-400 to-blue-400",
    tag: "AI-Powered",
    tech: ["Next.js", "OpenAI", "TypeScript", "Tailwind CSS"],
    impact: ["Real-time AI analytics", "Automated HR workflows", "Unified team overview"],
    live: "https://ai-employee-dashboard-nine.vercel.app/login?from=%2Fdashboard%2Foverview",
    image: "https://image.thum.io/get/width/800/crop/500/https://ai-employee-dashboard-nine.vercel.app/dashboard/overview",
  },
  {
    id: "technova",
    title: "Technova",
    category: "Web",
    tags: ["Web", "AI"],
    result: "Next-gen tech platform live in production",
    description: "A cutting-edge technology platform delivering innovative digital solutions — built with modern web architecture for speed, scalability, and seamless user experience.",
    gradient: "from-blue-900 via-cyan-800 to-teal-900",
    accent: "from-blue-400 to-cyan-400",
    tag: "Tech Platform",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    impact: ["Production deployed", "Modern UI/UX", "Scalable architecture"],
    live: "https://technova-zeta.vercel.app/",
    image: "https://image.thum.io/get/width/800/crop/500/https://technova-zeta.vercel.app/",
  },
  {
    id: "hiringmine",
    title: "HiringMine",
    category: "Web",
    tags: ["Web"],
    result: "Streamlined hiring for hundreds of companies",
    description: "A full-featured recruitment platform connecting top talent with leading companies — featuring smart job matching, applicant tracking, and an intuitive hiring workflow.",
    gradient: "from-emerald-900 via-green-800 to-teal-900",
    accent: "from-emerald-400 to-green-400",
    tag: "HR Tech",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    impact: ["Smart job matching", "End-to-end ATS", "Seamless recruiter dashboard"],
    live: "https://www.hiringmine.com/",
    image: "https://image.thum.io/get/width/800/crop/500/https://www.hiringmine.com/",
  },
  {
    id: "aqareo",
    title: "Aqareo",
    category: "Web",
    tags: ["Web"],
    result: "Modern real estate platform live in production",
    description: "A sleek real estate marketplace enabling buyers, sellers, and agents to connect effortlessly — featuring advanced property search, listings management, and a polished UX.",
    gradient: "from-amber-900 via-orange-800 to-red-900",
    accent: "from-amber-400 to-orange-400",
    tag: "PropTech",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    impact: ["Advanced property search", "Agent & listing management", "Mobile-responsive design"],
    live: "https://aqareo.vercel.app/",
    image: "https://image.thum.io/get/width/800/crop/500/https://aqareo.vercel.app/",
  },
  {
    id: "localface",
    title: "Local Face",
    category: "Web",
    tags: ["Web"],
    result: "Connecting local communities through digital presence",
    description: "A community-focused platform that gives local businesses and individuals a powerful digital presence — bridging the gap between neighbourhood services and modern users.",
    gradient: "from-rose-900 via-pink-800 to-fuchsia-900",
    accent: "from-rose-400 to-pink-400",
    tag: "Community",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    impact: ["Local discovery engine", "Business profiles", "Community-first design"],
    live: "https://milestone-3-nine-drab.vercel.app/",
    image: "https://image.thum.io/get/width/800/crop/500/https://milestone-3-nine-drab.vercel.app/",
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
        {(project as any).image ? (
          <Image
            src={(project as any).image}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
        ) : (
          <>
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full opacity-40"
              style={{
                background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
          </>
        )}
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
            <div className="flex flex-col gap-2 mt-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm py-2.5 w-full justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Live Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <Link
                href="/contact"
                className="btn-primary text-sm py-2.5 w-full justify-center group"
                onClick={(e) => e.stopPropagation()}
              >
                Build something similar
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
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
