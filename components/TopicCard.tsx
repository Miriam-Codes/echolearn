interface TopicCardProps {
  title: string;
  description: string;
  image: string;
}

export default function TopicCard({
  title,
  description,
  image,
}: TopicCardProps) {
  return (
    <div
      className="
        bg-[#1a1a22]
        rounded-xl
        border border-white/10
        shadow-lg
        overflow-hidden
        hover:-translate-y-1
        transition
        duration-200
      "
    >
      {/* IMAGE */}
      <div className="w-full h-40">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="p-5">
        <p className="text-xs text-gray-400 tracking-wide mb-1 font-body">
          TOPIC
        </p>

        <h3 className="font-pixelgrid text-xl text-white mb-2">
          {title}
        </h3>

        <p className="font-body text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
