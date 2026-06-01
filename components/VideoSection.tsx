"use client";

import { useState } from "react";
import { Play, X, CheckCircle } from "lucide-react";

const VIDEO_ID = "dQw4w9WgXcQ"; // ← Replace with your YouTube video ID

const highlights = [
  "AI-powered solutions built to scale",
  "End-to-end product delivery",
  "300+ successful launches",
];

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#0b0b18]">
      {/* Orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-purple-900/15 pointer-events-none"
        style={{ filter: "blur(120px)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-badge mb-5 mx-auto w-fit">In Action</div>
          <h2 className="section-title text-white mb-4">
            See How We Build{" "}
            <span className="gradient-text">Digital Futures</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Watch how our team transforms ambitious ideas into elegant, powerful
            digital products that move markets.
          </p>
        </div>

        {/* Video container */}
        <div className="max-w-5xl mx-auto">
          {/* Gradient border wrapper */}
          <div
            className="p-px rounded-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.6), rgba(168,85,247,0.2) 50%, rgba(192,132,252,0.5))",
            }}
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-[#0d0d20]">
              {playing ? (
                <>
                  <iframe
                    src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    title="AgentraX Agency Showreel"
                  />
                  <button
                    onClick={() => setPlaying(false)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-colors"
                    aria-label="Close video"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <>
                  {/* Poster */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #1a0533 0%, #0d0d24 40%, #120524 100%)",
                    }}
                  >
                    <div className="absolute inset-0 grid-pattern opacity-25" />
                    <div
                      className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-purple-700/25"
                      style={{ filter: "blur(70px)" }}
                    />
                    <div
                      className="absolute bottom-1/4 right-1/3 w-56 h-56 rounded-full bg-fuchsia-700/20"
                      style={{ filter: "blur(60px)" }}
                    />
                  </div>

                  {/* Overlay content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-7 px-8 text-center">
                    <p className="eyebrow">Agency Showreel 2025</p>

                    {/* Play button */}
                    <button
                      onClick={() => setPlaying(true)}
                      className="relative group"
                      aria-label="Play video"
                    >
                      <span
                        className="absolute inset-0 rounded-full bg-purple-500/25"
                        style={{ animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite" }}
                      />
                      <span
                        className="absolute inset-0 rounded-full bg-purple-500/15 scale-[1.35] group-hover:scale-[1.6] transition-transform duration-500"
                        style={{ filter: "blur(12px)" }}
                      />
                      <span className="relative w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_40px_rgba(139,92,246,0.7)]">
                        <Play className="w-7 h-7 text-white fill-white ml-1" />
                      </span>
                    </button>

                    <div>
                      <h3 className="text-white text-2xl font-bold mb-2">
                        What We Do in Action
                      </h3>
                      <p className="text-gray-400 max-w-sm text-sm">
                        3 minutes that capture 5 years of building world-class digital products
                      </p>
                    </div>
                  </div>

                  {/* Bottom label strip */}
                  <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="flex flex-wrap justify-center gap-4">
                      {highlights.map((h) => (
                        <div key={h} className="flex items-center gap-1.5 text-gray-300 text-xs">
                          <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { v: "300+", l: "Products Shipped" },
              { v: "98%", l: "Client Satisfaction" },
              { v: "5+", l: "Years in Business" },
            ].map(({ v, l }) => (
              <div key={l} className="glass-card border border-white/7 p-4 text-center rounded-2xl">
                <div className="text-2xl font-black gradient-text">{v}</div>
                <div className="text-gray-500 text-xs mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
