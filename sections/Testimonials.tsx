"use client";

import { useInView } from "@/hooks/useInView";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "FinFlow",
    avatar: "SC",
    gradient: "from-purple-600 to-violet-600",
    stars: 5,
    quote:
      "AgentraX didn't just build our platform — they architected our entire technical foundation. The quality of their AI integrations and performance optimisations were miles ahead of any agency we'd worked with before. Our user base grew 340% in 6 months.",
  },
  {
    name: "Marcus Rivera",
    role: "CEO & Founder",
    company: "TradePulse AI",
    avatar: "MR",
    gradient: "from-fuchsia-600 to-purple-600",
    stars: 5,
    quote:
      "Exceptional technical depth, impeccable communication, and zero surprises. The team delivered our AI trading dashboard ahead of schedule with every feature we'd spec'd — plus several they suggested that made the product genuinely better.",
  },
  {
    name: "Emily Watson",
    role: "VP of Product",
    company: "MedCore",
    avatar: "EW",
    gradient: "from-violet-600 to-indigo-600",
    stars: 5,
    quote:
      "Healthcare software is notoriously difficult — regulatory requirements, data sensitivity, complex workflows. AgentraX navigated all of it with ease. Our clinicians now save 3+ hours per day. That's the real metric that matters.",
  },
  {
    name: "James Liu",
    role: "Head of Engineering",
    company: "ShopStream",
    avatar: "JL",
    gradient: "from-pink-600 to-fuchsia-600",
    stars: 5,
    quote:
      "I've worked with a dozen agencies over my career. AgentraX is in a different league. Their code is clean, their process is transparent, and their design sensibility is rare. Our conversion rate literally doubled after launch.",
  },
  {
    name: "Priya Sharma",
    role: "Founder",
    company: "LegalEdge AI",
    avatar: "PS",
    gradient: "from-indigo-600 to-violet-600",
    stars: 5,
    quote:
      "We came with a rough idea and left with a fully polished AI-powered SaaS product. The AgentraX team held our hand through every decision without making us feel out of the loop. First-class experience from kickoff to launch.",
  },
  {
    name: "Tom Becker",
    role: "CTO",
    company: "LogiCore",
    avatar: "TB",
    gradient: "from-purple-500 to-pink-600",
    stars: 5,
    quote:
      "Speed, quality, communication — usually you get two out of three. With AgentraX you somehow get all three. We shipped a complex logistics platform in 10 weeks that would have taken our in-house team 6 months.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-[#0d0d24] overflow-hidden"
    >
      {/* Orbs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-800/12 pointer-events-none"
        style={{ filter: "blur(120px)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-fuchsia-800/10 pointer-events-none"
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
          <div className="section-badge mb-5 mx-auto w-fit">Client Success</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5">
            Trusted by <span className="gradient-text">Builders & Leaders</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Don&apos;t take our word for it — hear from the founders and CTOs
            we&apos;ve helped build something remarkable.
          </p>
        </div>

        {/* Masonry-ish grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="glass glow-card rounded-2xl p-7 border border-white/8 flex flex-col gap-5"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${i * 80}ms, transform 0.7s ease ${i * 80}ms`,
              }}
            >
              {/* Quote mark */}
              <Quote className="w-8 h-8 text-purple-600/60 fill-purple-600/20" />

              {/* Stars */}
              <Stars count={t.stars} />

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/6">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">
                    {t.role} @ {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
