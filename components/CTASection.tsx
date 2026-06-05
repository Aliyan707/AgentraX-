import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTASectionProps {
  title?: string;
  highlight?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Ready to Build Something",
  highlight = "Remarkable?",
  description = "Let's turn your vision into a high-performance digital product. Book a free 30-minute discovery call — no commitment, just conversation.",
  primaryLabel = "Book a Free Call",
  primaryHref = "/contact",
  secondaryLabel = "View Our Work",
  secondaryHref = "/portfolio",
}: CTASectionProps) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#09090f]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-purple-800/20"
          style={{ filter: "blur(100px)" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-fuchsia-900/15"
          style={{ filter: "blur(80px)" }}
        />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="section-badge mb-8 mx-auto w-fit">
          <Sparkles className="w-3 h-3" />
          Start Building Today
        </div>

        <h2 className="display-2 text-white mb-5">
          {title}{" "}
          <span className="gradient-text">{highlight}</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link href={primaryHref} className="btn-primary text-base group w-full sm:w-auto justify-center">
            {primaryLabel}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href={secondaryHref} className="btn-secondary text-base w-full sm:w-auto justify-center">
            {secondaryLabel}
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 text-sm">
          {[
            "✓ Free discovery call",
            "✓ No commitment required",
            "✓ Response within 24 hours",
            "✓ 150+ companies served",
          ].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
