import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  avatar: string;
  gradient: string;
  quote: string;
  stars?: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  avatar,
  gradient,
  quote,
  stars = 5,
}: TestimonialCardProps) {
  return (
    <div className="card p-7 flex flex-col gap-5 h-full">
      {/* Quote icon */}
      <Quote className="w-8 h-8 text-purple-600/60 fill-purple-600/20 flex-shrink-0" />

      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-300 text-sm leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/6">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
        >
          {avatar}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{name}</div>
          <div className="text-gray-500 text-xs">
            {role} @ {company}
          </div>
        </div>
      </div>
    </div>
  );
}
