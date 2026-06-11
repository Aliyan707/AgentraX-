"use client";

import { useInView } from "@/hooks/useInView";
import {
  Cpu,
  ShieldCheck,
  Rocket,
  Users2,
  Eye,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    icon: Cpu,
    title: "AI-First Thinking",
    description:
      "Every solution we build has AI baked in from day one — not bolted on. We leverage the latest models and tooling to future-proof your product.",
    stat: "10x",
    statLabel: "Faster with AI",
    color: "from-purple-600 to-violet-700",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "SOC 2, GDPR, and HIPAA-compliant by design. Your data and your users' data are protected with industry-best practices at every layer.",
    stat: "99.99%",
    statLabel: "Uptime SLA",
    color: "from-fuchsia-600 to-purple-700",
  },
  {
    icon: Rocket,
    title: "Speed Without Compromise",
    description:
      "We ship fast — but never recklessly. Rigorous QA, automated testing, and CI/CD pipelines ensure every release is production-ready.",
    stat: "2–4wk",
    statLabel: "Avg. MVP Sprint",
    color: "from-violet-600 to-indigo-700",
  },
  {
    icon: Users2,
    title: "Dedicated Expert Teams",
    description:
      "No outsourcing, no juniors-only squads. You get senior engineers, designers, and PMs who own your project end-to-end.",
    stat: "40+",
    statLabel: "In-House Experts",
    color: "from-pink-600 to-fuchsia-600",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "Weekly demos, real-time dashboards, and direct Slack access to your team. You always know exactly where your project stands.",
    stat: "100%",
    statLabel: "Visibility",
    color: "from-indigo-600 to-violet-600",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description:
      "We don't disappear after launch. 87% of our clients retain us for ongoing work because we become a true extension of their team.",
    stat: "87%",
    statLabel: "Client Retention",
    color: "from-purple-500 to-pink-600",
  },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView();

  return (
    <section
      id="why-us"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0d0d24 0%, #0a0a1a 50%, #0d0d24 100%)",
      }}
    >
      {/* Centre glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple-900/15 pointer-events-none"
        style={{ filter: "blur(120px)" }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="section-badge mb-5 mx-auto w-fit">
            Why AgentraX
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5">
            The Standard for{" "}
            <span className="gradient-text">Digital Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Six reasons 150+ companies trust us to build the technology that
            powers their future.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="glass glow-card rounded-2xl p-7 border border-white/8"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${i * 80}ms, transform 0.7s ease ${i * 80}ms`,
              }}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center`}
                >
                  <r.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black gradient-text">{r.stat}</div>
                  <div className="text-gray-600 text-xs">{r.statLabel}</div>
                </div>
              </div>

              <h3 className="text-white font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
