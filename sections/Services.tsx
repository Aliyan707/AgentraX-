"use client";

import { useInView } from "@/hooks/useInView";
import {
  Brain,
  Globe,
  Smartphone,
  Palette,
  Cloud,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Development",
    description:
      "Custom LLM integrations, intelligent automation, RAG pipelines, and AI-powered product features built to production standards.",
    color: "from-purple-600 to-violet-700",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance React & Next.js applications with pixel-perfect UI, server-side rendering, and sub-second load times.",
    color: "from-fuchsia-600 to-purple-700",
    glow: "rgba(217,70,239,0.3)",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform iOS & Android apps with React Native, delivering native performance and polished user experiences.",
    color: "from-violet-600 to-indigo-700",
    glow: "rgba(124,58,237,0.3)",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Human-centered design systems, brand identities, and Figma prototypes that convert — built for real people.",
    color: "from-pink-600 to-fuchsia-700",
    glow: "rgba(236,72,153,0.3)",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Scalable AWS / GCP infrastructure, CI/CD pipelines, Kubernetes orchestration, and 99.99% uptime architectures.",
    color: "from-indigo-600 to-violet-700",
    glow: "rgba(99,102,241,0.3)",
  },
  {
    icon: BarChart3,
    title: "Digital Strategy",
    description:
      "Data-driven growth roadmaps, technology audits, and strategic advisory to keep your business ahead of the curve.",
    color: "from-purple-500 to-pink-600",
    glow: "rgba(168,85,247,0.3)",
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-[#0d0d24] overflow-hidden"
    >
      {/* Background orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-purple-900/20 pointer-events-none"
        style={{ filter: "blur(100px)" }}
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
          <div className="section-badge mb-5 mx-auto w-fit">What We Do</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5">
            Comprehensive{" "}
            <span className="gradient-text">Digital Services</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            From strategy to deployment — every service crafted to give your
            business an unfair advantage.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="glass glow-card rounded-2xl p-7 border border-white/8 group cursor-pointer"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${i * 80}ms, transform 0.7s ease ${i * 80}ms`,
              }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                style={{
                  boxShadow: `0 0 20px ${service.glow}`,
                }}
              >
                <service.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title + arrow */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-bold text-xl">{service.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 mt-0.5" />
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div
                className={`mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r ${service.color} transition-all duration-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
