import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  benefits?: string[];
  gradient: string;
  glowColor: string;
  href?: string;
  featured?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  benefits,
  gradient,
  glowColor,
  href = "/services",
  featured = false,
}: ServiceCardProps) {
  return (
    <div className="card p-7 group flex flex-col h-full cursor-pointer">
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
        style={{ boxShadow: `0 0 22px ${glowColor}` }}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>

      {/* Text */}
      <h3 className="text-white font-bold text-xl mb-2.5">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

      {/* Benefits (full card variant) */}
      {featured && benefits && (
        <ul className="mt-5 space-y-2 flex-1">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-gray-400">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      )}

      {/* Bottom accent */}
      <div className="mt-5 pt-5 border-t border-white/5 flex items-center justify-between">
        <Link
          href={href}
          className="text-purple-400 text-sm font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200 hover:text-purple-300"
        >
          Learn more
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
        {/* Animated line */}
        <div
          className={`h-px w-0 group-hover:w-16 bg-gradient-to-r ${gradient} transition-all duration-500`}
        />
      </div>
    </div>
  );
}
