import { ArrowUpRight, TrendingUp } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  result: string;
  description: string;
  gradient: string;
  accent: string;
  tag: string;
  slug?: string;
}

export default function ProjectCard({
  title,
  category,
  result,
  description,
  gradient,
  accent,
  tag,
  slug = "#",
}: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/7 hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(139,92,246,0.18)] cursor-pointer">
      {/* Visual */}
      <div className={`relative h-52 bg-gradient-to-br ${gradient} overflow-hidden`}>
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full opacity-45"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
            filter: "blur(25px)",
          }}
        />
        {/* Tag */}
        <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white text-xs font-semibold">
          {tag}
        </div>
        {/* Link arrow */}
        <Link
          href={slug}
          className="absolute top-4 right-4 w-8 h-8 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
        >
          <ArrowUpRight className="w-4 h-4 text-white" />
        </Link>
        {/* Category */}
        <div className="absolute bottom-4 left-4">
          <span
            className={`text-xs font-bold tracking-widest uppercase bg-gradient-to-r ${accent} bg-clip-text text-transparent`}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[rgba(255,255,255,0.02)] p-6 border-t border-white/5">
        <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-green-500/10 border border-green-500/20 w-fit">
          <TrendingUp className="w-3.5 h-3.5 text-green-400" />
          <span className="text-green-400 text-xs font-semibold">{result}</span>
        </div>
      </div>
    </div>
  );
}
