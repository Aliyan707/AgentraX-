"use client";

import { useInView } from "@/hooks/useInView";
import {
  Search,
  Map,
  Code2,
  Rocket,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description:
      "We immerse ourselves in your business — understanding goals, users, competitors, and technical constraints before writing a single line of code.",
    color: "from-purple-600 to-violet-700",
    bg: "rgba(124,58,237,0.15)",
  },
  {
    icon: Map,
    step: "02",
    title: "Strategy & Planning",
    description:
      "We design a detailed technical roadmap: architecture, stack, milestones, and KPIs — so every decision is deliberate and measurable.",
    color: "from-fuchsia-600 to-purple-600",
    bg: "rgba(217,70,239,0.15)",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development",
    description:
      "Agile sprints with daily updates, weekly demos, and continuous delivery. Clean code, comprehensive tests, and performance-first engineering.",
    color: "from-violet-600 to-indigo-700",
    bg: "rgba(139,92,246,0.15)",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Deploy",
    description:
      "Rigorous QA, staging environments, and zero-downtime deployment. We don't ship until every check is green and every edge case is covered.",
    color: "from-pink-600 to-fuchsia-600",
    bg: "rgba(236,72,153,0.15)",
  },
  {
    icon: BarChart3,
    step: "05",
    title: "Growth & Optimise",
    description:
      "Post-launch analytics, A/B testing, performance monitoring, and ongoing iterations to keep your product evolving with your users.",
    color: "from-indigo-600 to-purple-600",
    bg: "rgba(99,102,241,0.15)",
  },
];

export default function Process() {
  const { ref, inView } = useInView();

  return (
    <section id="process" className="relative py-24 md:py-32 bg-[#0a0a1a] overflow-hidden">
      {/* Orb */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full bg-violet-900/15 pointer-events-none"
        style={{ filter: "blur(120px)" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-20"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="section-badge mb-5 mx-auto w-fit">How We Work</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5">
            From Idea to{" "}
            <span className="gradient-text">Successful Launch</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            A proven five-step process refined over 300+ projects to ensure
            every delivery is on time, on budget, and beyond expectations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className="relative flex flex-col items-start lg:items-center text-left lg:text-center"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms`,
                }}
              >
                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-7 top-16 w-px h-full bg-gradient-to-b from-purple-500/40 to-transparent -z-10" />
                )}

                {/* Number + icon */}
                <div className="relative mb-5">
                  {/* Ring */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                    style={{ boxShadow: `0 0 25px ${step.bg}` }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0a0a1a] border-2 border-purple-500 flex items-center justify-center">
                    <span className="text-[9px] font-black text-purple-400">
                      {step.step}
                    </span>
                  </div>
                </div>

                <h3 className="text-white font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="text-center mt-20 glass rounded-3xl p-6 sm:p-10 border border-white/8"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.7s ease 0.7s",
          }}
        >
          <h3 className="text-white font-black text-2xl md:text-3xl mb-3">
            Ready to start your project?
          </h3>
          <p className="text-gray-400 mb-7">
            Let&apos;s book a free 30-minute discovery call and map out your roadmap together.
          </p>
          <a href="#contact" className="btn-primary inline-flex">
            Book a Free Discovery Call →
          </a>
        </div>
      </div>
    </section>
  );
}
