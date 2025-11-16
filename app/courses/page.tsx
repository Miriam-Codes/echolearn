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
          
          {/* INTRO TO DSA (ACTIVE) */}
          <Link href="/courses/dsa">
            <CourseCard
              number={1}
              title="Introduction to DSA"
              description="Start with core data structures explained in a friendly, visual way."
              difficulty="Beginner"
              image="/course-imgs/dsa.png"
            />
          </Link>

          {/* CORE DATA STRUCTURES — COMING SOON */}
          <div className="opacity-60 cursor-not-allowed">
            <CourseCard
              number={2}
              title="Core Data Structures"
              description="Arrays, stacks, queues, linked lists, trees, and more."
              difficulty="Intermediate"
              image="/course-imgs/core-data-structures.png"
            />
          </div>

          {/* ALGORITHM FOUNDATIONS — COMING SOON */}
          <div className="opacity-60 cursor-not-allowed">
            <CourseCard
              number={3}
              title="Algorithm Foundations"
              description="Sorting, searching, recursion, and problem-solving patterns."
              difficulty="Intermediate"
              image="/course-imgs/algorithm-foundations.png"
            />
          </div>

        </div>

        {/* FOOTER MESSAGE */}
        <p className="mt-12 font-body text-sm text-pink-300/70 tracking-wide">
          <span className="text-pink-400">◆</span> More courses coming soon…
        </p>
      </section>
    </main>
  );
}
