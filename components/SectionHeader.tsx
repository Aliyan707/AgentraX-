interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {badge && (
        <div className={`section-badge mb-5 ${centered ? "mx-auto" : ""} w-fit`}>
          {badge}
        </div>
      )}
      <h2 className="section-title text-white mb-4">{title}</h2>
      {description && (
        <p className={`text-gray-400 text-lg leading-relaxed ${centered ? "max-w-xl mx-auto" : "max-w-lg"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
