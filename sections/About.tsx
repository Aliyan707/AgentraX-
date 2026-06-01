"use client";

import { useInView } from "@/hooks/useInView";
import { Users, Target, Eye, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "150+", label: "Global Clients", color: "from-purple-500 to-violet-600" },
  { icon: Award, value: "300+", label: "Projects Delivered", color: "from-fuchsia-500 to-purple-600" },
  { icon: Target, value: "98%", label: "Client Satisfaction", color: "from-pink-500 to-fuchsia-500" },
  { icon: Eye, value: "5+", label: "Years of Innovation", color: "from-violet-500 to-indigo-600" },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0a0a1a] overflow-hidden">
      {/* Accent orb */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-800/10 pointer-events-none"
        style={{ filter: "blur(100px)" }}
      />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Text ─────────────────────────────────── */}
          <div className="space-y-8">
            <div className="section-badge w-fit">About AgentraX</div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              We&apos;re Not Just Builders —
              <br />
              <span className="gradient-text">We&apos;re Your Partners</span>
            </h2>

            <div className="space-y-5 text-gray-400 leading-relaxed text-base">
              <p>
                Founded in 2019, AgentraX started as a small team of visionary
                engineers who believed great software could transform any
                business. Today, we&apos;re a full-stack agency trusted by
                startups and Fortune 500 companies alike.
              </p>
              <p>
                We combine deep technical expertise with sharp product thinking
                to deliver solutions that aren&apos;t just functional — they&apos;re
                exceptional. Every pixel, every line of code, every architecture
                decision is made with purpose.
              </p>
            </div>

            {/* Mission / Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-5 border border-white/8">
                <Target className="w-6 h-6 text-purple-400 mb-3" />
                <h4 className="text-white font-semibold mb-1">Our Mission</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Empower businesses through technology that scales, performs,
                  and delights.
                </p>
              </div>
              <div className="glass rounded-2xl p-5 border border-white/8">
                <Eye className="w-6 h-6 text-fuchsia-400 mb-3" />
                <h4 className="text-white font-semibold mb-1">Our Vision</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  To be the world&apos;s most trusted AI-native digital agency by
                  2030.
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Stats ───────────────────────────────── */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass glow-card rounded-2xl p-6 border border-white/8 flex flex-col gap-3"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-black gradient-text">{stat.value}</div>
                  <div className="text-gray-500 text-sm font-medium mt-0.5">{stat.label}</div>
                </div>
              </div>
            ))}

            {/* Decorative card */}
            <div className="col-span-2 glass rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-fuchsia-900/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  {["SC", "MR", "EW", "JL"].map((initials) => (
                    <div
                      key={initials}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-500 flex items-center justify-center text-white text-xs font-bold border-2 border-[#0a0a1a]"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <span className="text-gray-400 text-sm">Team of 40+ experts</span>
              </div>
              <p className="text-purple-300 text-sm font-medium">
                "The team that built tomorrow's software, today."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
