"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setActive(true);
    const el = ref.current;
    if (!el) return;

    let rafId: number;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX - 350}px, ${e.clientY - 350}px)`;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!active) return null;

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 pointer-events-none z-[9998] w-[700px] h-[700px] rounded-full"
      style={{
        background:
          "radial-gradient(circle at center, rgba(139,92,246,0.045) 0%, rgba(139,92,246,0.015) 45%, transparent 70%)",
        willChange: "transform",
        transition: "transform 0.12s ease-out",
      }}
    />
  );
}
