interface CourseCardProps {
  number?: number;
  title: string;
  description: string;
  difficulty?: string;
  image?: string;
}

export default function CourseCard({
  number,
  title,
  description,
  difficulty,
  image,
}: CourseCardProps) {
  return (
    <div className="relative w-[300px]">

      {/* PINK PIXEL CORNERS */}
      <div className="absolute -top-[3px] -left-[3px] w-3 h-3 border-t-2 border-l-2 border-pink-400" />
      <div className="absolute -top-[3px] -right-[3px] w-3 h-3 border-t-2 border-r-2 border-pink-400" />
      <div className="absolute -bottom-[3px] -left-[3px] w-3 h-3 border-b-2 border-l-2 border-pink-400" />
      <div className="absolute -bottom-[3px] -right-[3px] w-3 h-3 border-b-2 border-r-2 border-pink-400" />

      {/* SOFTER CARD BACKGROUND */}
      <div
        className="
          bg-[#14111d]
          rounded-lg
          border border-[#2a2335]
          shadow-[0_6px_20px_rgba(0,0,0,0.45)]
          overflow-hidden
          transition-transform
          duration-200
          hover:-translate-y-[2px]
          flex flex-col
        "
      >

        {/* TOP IMAGE */}
        <div className="h-[110px] w-full overflow-hidden bg-[#1f1a28] border-b border-[#2a2335]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>

        {/* CONTENT */}
        <div className="p-4 flex flex-col flex-1">
          {number !== undefined && (
            <p className="text-[10px] tracking-wider text-pink-300 uppercase mb-1">
              Course {number}
            </p>
          )}

          <h3 className="text-[18px] font-semibold text-pink-100 leading-tight mb-2">
            {title}
          </h3>

          {/* FIXED HEIGHT DESCRIPTION */}
          <p className="text-gray-300/90 text-[14px] leading-snug mb-4 h-[54px] line-clamp-3">
            {description}
          </p>

          {/* FOOTER */}
          <div className="mt-auto flex items-center gap-2 pt-1">
            <div className="w-4 h-4 bg-pink-400/20 rounded-sm flex items-center justify-center">
              <span className="text-[9px] text-pink-300">≡</span>
            </div>

            {difficulty && (
              <span
                className="
                  text-pink-200 
                  text-[11px]
                  tracking-wide
                  px-3 py-[3px]
                  rounded-full
                  bg-[#261f30]
                  border border-pink-400/40
                "
              >
                {difficulty.toUpperCase()}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
