import Image from "next/image";

export default function ArraysCoursePage() {
  return (
    <div className="w-full min-h-screen bg-[#0f0f15] text-white">

      {/* HERO BANNER */}
      <section className="relative w-full h-[320px] overflow-hidden">
        <Image
          src="/images/banners/arrays-banner.png"
          alt="Arrays Banner"
          fill
          className="object-cover"
          style={{ imageRendering: "pixelated" }}
        />

        <div className="absolute bottom-8 left-8">
          <p className="text-xs opacity-80 uppercase tracking-wider">
            DSA • Beginner
          </p>

          <h1 className="font-pixelgrid text-5xl mt-2">Arrays</h1>

          <p className="text-gray-200 max-w-md mt-3 leading-relaxed">
            Learn how arrays store, access, and manipulate data efficiently.
            A cozy intro to structured data.
          </p>
        </div>
      </section>

      {/* PAGE GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 p-6 mt-10">

        {/* LEFT SIDE — COURSE CONTENT */}
        <div className="md:col-span-2 flex flex-col gap-8">

          {/* SECTION 1 ---------------------------------------------------- */}
          <CourseSection
            title="1. Introduction to Arrays"
            lessons={[
              { name: "What Is an Array?", slug: "what-is-an-array" },
              { name: "Indexes & Positions", slug: "indexing" },
              { name: "Memory Layout", slug: "memory-layout" }
            ]}
          />

          {/* SECTION 2 ---------------------------------------------------- */}
          <CourseSection
            title="2. Core Operations"
            lessons={[
              { name: "Insert", slug: "insert" },
              { name: "Delete", slug: "delete" },
              { name: "Search", slug: "search" },
              { name: "Update", slug: "update" }
            ]}
          />

          {/* SECTION 3 ---------------------------------------------------- */}
          <CourseSection
            title="3. Practical Problems"
            lessons={[
              { name: "Reverse an Array", slug: "reverse" },
              { name: "Find Max & Min", slug: "min-max" },
              { name: "Two-Sum Warmup", slug: "two-sum" }
            ]}
          />
        </div>

        {/* RIGHT SIDEBAR ------------------------------------------------ */}
        <div className="hidden md:flex flex-col gap-6">

          {/* Progress */}
          <div className="bg-[#1a1a22] border border-white/10 rounded-xl p-5">
            <h2 className="font-semibold text-lg">Course Progress</h2>
            <p className="text-gray-400 text-sm mt-2">0 / 10 Lessons</p>

            <div className="w-full h-2 bg-[#2f2f38] rounded-full mt-3">
              <div className="h-2 bg-pink-500 rounded-full" style={{ width: "0%" }} />
            </div>
          </div>

          {/* Optional badges or notes */}
          <div className="bg-[#1a1a22] border border-white/10 rounded-xl p-5">
            <p className="text-gray-300 text-sm">Badges & Rewards coming soon ✨</p>
          </div>
        </div>

      </div>

    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                    */
/* -------------------------------------------------------------------------- */

function CourseSection({ title, lessons }: {
  title: string;
  lessons: { name: string; slug: string }[];
}) {
  return (
    <div className="bg-[#1a1a22] rounded-xl border border-white/10 p-6">
      <h2 className="font-semibold text-2xl mb-4">{title}</h2>

      <ul className="flex flex-col gap-3">
        {lessons.map((lesson, i) => (
          <li
            key={i}
            className="bg-[#2b2b33] rounded-lg px-4 py-3 flex items-center justify-between hover:bg-[#3a3a44] transition"
          >
            <span className="text-gray-200">{lesson.name}</span>
            <a
              href={`/courses/dsa/arrays/${lesson.slug}`}
              className="text-sm bg-pink-500 px-4 py-1.5 rounded-lg text-white hover:bg-pink-600 transition"
            >
              Start
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
