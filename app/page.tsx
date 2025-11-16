import CourseCard from "@/components/CourseCard";

export default function HomePage() {
  return (
    <div className="text-gray-200 w-full">
      {/* FULL WIDTH HERO SECTION */}
      <section
        className="
          relative 
          w-full 
          h-[650px] sm:h-[720px] 
          overflow-hidden
        "
        style={{
          backgroundImage: "url('/bg/tileable-sky.png')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          imageRendering: "pixelated",
        }}
      >
        {/* TOP GRADIENT */}
        <div className="absolute inset-0 bg-linear-to-b from-black/10 to-transparent pointer-events-none"></div>

        {/* BOTTOM FADER INTO PAGE THEME */}
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-linear-to-b from-transparent to-[var(--background)] pointer-events-none"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-pixelgrid text-white text-6xl sm:text-7xl drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            EchoLearn
          </h1>

          <p className="font-body text-gray-100 text-lg sm:text-xl max-w-2xl mt-6 leading-relaxed drop-shadow">
            Learn better by teaching an AI clone. Pick a topic, guide the
            lesson, and reinforce your understanding by explaining it back.
          </p>

          <a
            href="/courses"
            className="
              mt-10 
              px-8 py-3 
              rounded-xl 
              bg-[#ff6ccc] 
              text-white 
              font-pixelgrid
              shadow-[0_0_20px_rgba(255,108,204,0.4)]
              hover:shadow-[0_0_25px_rgba(255,108,204,0.7)]
              hover:bg-[#ff7adb] 
              transition-all 
              duration-300
            "
          >
            Start Learning
          </a>
        </div>
      </section>

      {/* MAIN PAGE CONTENT */}
      <div className="px-4">
     {/* HOW IT WORKS */}
<section className="mb-28">
  <h2 className="font-pixelgrid text-4xl text-center text-white mb-3">
    How It Works
  </h2>

  <p className="font-body text-center text-gray-400 max-w-xl mx-auto mb-12">
    A simple three-step learning loop that makes tough concepts easier.
  </p>

  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">

    {/* STEP 1 */}
    <div className="bg-[#1a1a22] p-8 rounded-xl border border-white/10 shadow-lg hover:-translate-y-1 transition">
      <div className="w-12 h-12 mb-4 mx-auto text-5xl flex items-center justify-center">
        📚
      </div>

      <h3 className="font-pixelgrid text-xl text-white mb-2">Choose a Course</h3>
      <p className="font-body text-gray-400">Select a DSA concept to explore.</p>
    </div>

    {/* STEP 2 */}
    <div className="bg-[#1a1a22] p-8 rounded-xl border border-white/10 shadow-lg hover:-translate-y-1 transition">
      <div className="w-12 h-12 mb-4 mx-auto text-5xl flex items-center justify-center">
        🌱
      </div>

      <h3 className="font-pixelgrid text-xl text-white mb-2">Learn the Basics</h3>
      <p className="font-body text-gray-400">Review simple, clean explanations.</p>
    </div>

    {/* STEP 3 */}
    <div className="bg-[#1a1a22] p-8 rounded-xl border border-white/10 shadow-lg hover:-translate-y-1 transition">
      <div className="w-12 h-12 mb-4 mx-auto text-5xl flex items-center justify-center">
        🤖
      </div>

      <h3 className="font-pixelgrid text-xl text-white mb-2">Teach the AI</h3>
      <p className="font-body text-gray-400">Explain it back to reinforce memory.</p>
    </div>

  </div>
</section>


        {/* COMING SOON */}
        <section className="mb-36">
          <h2 className="font-pixelgrid text-4xl text-center text-white mb-3">
            Coming Soon
          </h2>

          <p className="font-body text-center text-gray-400 max-w-xl mx-auto mb-12">
            New interactive topics coming to EchoLearn soon.
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">

            <CourseCard
              title="Dynamic Programming"
              description="Learn optimization patterns and memoization strategies."
              difficulty="Advanced"
              image="/course-imgs/dynamic-programming.png"
            />

            <CourseCard
              title="Greedy Algorithms"
              description="Explore fast decision-making techniques for efficient solutions."
              difficulty="Intermediate"
              image="/course-imgs/greedy-algorithms.png"
            />

            <CourseCard
              title="Bit Manipulation"
              description="Master binary tricks for powerful low-level problem solving."
              difficulty="Advanced"
              image="/course-imgs/bit-manipulation.png"
            />

          </div>
        </section>

      </div>
    </div>
  );
}
