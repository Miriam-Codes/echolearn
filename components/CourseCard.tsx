import Link from "next/link";

interface CourseCardProps {
  label: string;
  title: string;
  description: string;
  href: string;
}

export default function CourseCard({
  label,
  title,
  description,
  href,
}: CourseCardProps) {
  return (
    <Link href={href} className="block">
      <div
        className="
      bg-[#1a1a22] 
      rounded-xl 
      border border-white/10 
      shadow-lg 
      overflow-hidden 
      hover:-translate-y-1 
      transition 
      duration-200"
      >
        {/* Placeholder image area — will replace later */}
        <div className="w-full h-40 bg-[#2b2b33]"></div>

        <div className="p-5">
          <p className="text-xs text-gray-400 font-body tracking-wide mb-2">
            {label.toUpperCase()}
          </p>

          <h3 className="font-pixelgrid text-xl text-white mb-2">{title}</h3>

          <p className="font-body text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
