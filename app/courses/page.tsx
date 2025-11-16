import Link from "next/link";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  return (
    <main className="min-h-screen w-full bg-[#0f0d13] text-white">

      {/* HERO SECTION */}
      <section className="w-full relative">
        <img
          src="/bg/courses-hero.png"
          alt="Courses Hero"
          className="w-full h-[420px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-[#0f0d13]" />
      </section>

      {/* PAGE HEADER */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="font-pixelgrid text-4xl mb-3">Courses</h1>
        <p className="text-gray-300 font-body text-lg max-w-xl">
          Explore pixel-styled lessons and interactive learning experiences.
        </p>
      </section>

      {/* COURSE GRID */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="flex flex-wrap gap-8 justify-start items-start">
          
          {/* DSA */}
          <Link href="/courses/dsa">
            <CourseCard
              number={1}
              title="Introduction to DSA"
              description="Start with core data structures explained in a friendly, visual way."
              difficulty="Beginner"
              image="/course-imgs/dsa.png"
            />
          </Link>

          {/* Arrays */}
          <Link href="/courses/arrays">
            <CourseCard
              number={2}
              title="Arrays Fundamentals"
              description="Learn how arrays work, memory layout, and traversal techniques."
              difficulty="Beginner"
              image="/course-imgs/arrays.png"
            />
          </Link>

          {/* Sorting */}
          <Link href="/courses/sorting">
            <CourseCard
              number={3}
              title="Sorting Algorithms"
              description="Walk through bubble sort, merge sort, and more using pixel animations."
              difficulty="Intermediate"
              image="/course-imgs/sort.png"
            />
          </Link>

        </div>

        {/* FOOTER MESSAGE */}
        <p className="mt-12 font-body text-sm text-pink-300/70 tracking-wide">
          <span className="text-pink-400">◆</span> More courses coming soon…
        </p>
      </section>
    </main>
  );
}
