"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { value: "150+", numericValue: 150, suffix: "+", label: "Happy Clients", description: "Companies that trust us globally" },
  { value: "300+", numericValue: 300, suffix: "+", label: "Projects Shipped", description: "Products launched to production" },
  { value: "98%", numericValue: 98, suffix: "%", label: "Client Satisfaction", description: "Measured across all engagements" },
  { value: "$50M+", numericValue: 50, suffix: "M+", prefix: "$", label: "Value Delivered", description: "Business impact created for clients" },
];

function CountUp({ target, suffix, prefix = "" }: { target: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setCount(target);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatsSection({ dark = false }: { dark?: boolean }) {
  return (
    <section
      className={`py-20 relative overflow-hidden ${dark ? "bg-[#09090f]" : "bg-[#0b0b18]"}`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,92,246,0.07) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="px-3 py-5 md:px-4 md:py-6 lg:px-8 lg:py-10 text-center bg-[#09090f] hover:bg-purple-900/10 transition-colors duration-300"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black gradient-text mb-1 sm:mb-2">
                <CountUp target={s.numericValue} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <div className="text-white font-semibold text-xs sm:text-sm mb-1">{s.label}</div>
              <div className="text-gray-600 text-xs leading-relaxed hidden xl:block">{s.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
