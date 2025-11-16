export default function AboutPage() {
  return (
    <div className="text-gray-200 w-full">

      {/* HERO */}
      <section
        className="
          relative 
          w-full 
          h-[350px] 
          overflow-hidden 
          flex 
          items-center 
          justify-center
          text-center
        "
        style={{
          backgroundImage: "url('/bg/tileable-sky.png')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          imageRendering: "pixelated",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[var(--background)]"></div>

        <div className="relative z-10 px-6">
          <h1 className="font-pixelgrid text-5xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            About EchoLearn
          </h1>

          <p className="font-body text-gray-200 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            A cozy pixel-powered learning platform where you understand better by 
            teaching an AI clone. Designed for clarity, confidence, and a bit of magic.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-4 mt-20">

        <section className="mb-20">
          <h2 className="font-pixelgrid text-3xl text-white mb-4">Why EchoLearn?</h2>

          <p className="font-body text-gray-300 leading-relaxed text-[15px]">
            Most learning platforms make you memorize concepts passively. EchoLearn 
            flips the process around: <span className="text-pink-300">
            you learn by teaching</span>.
            <br /><br />
            Explaining a concept forces you to organize your thoughts, identify gaps, 
            and internalize the material more deeply. Add some cozy pixel aesthetics, 
            guided prompts, and interactive modules — and learning becomes less stressful, 
            more intentional, and a lot more fun.
          </p>
        </section>

        {/* FEATURES */}
        <section className="mb-20">
          <h2 className="font-pixelgrid text-3xl text-white mb-8">What Makes It Different</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            <div className="bg-[#1a1a22] p-7 rounded-xl border border-white/10">
              <h3 className="font-pixelgrid text-xl text-pink-200 mb-2">
                Pixel-Perfect Learning
              </h3>
              <p className="font-body text-gray-400 leading-relaxed text-[14px]">
                Every page blends cozy pixel art with clean explanations to reduce 
                cognitive overwhelm and make studying feel calmer.
              </p>
            </div>

            <div className="bg-[#1a1a22] p-7 rounded-xl border border-white/10">
              <h3 className="font-pixelgrid text-xl text-pink-200 mb-2">
                Learn by Teaching
              </h3>
              <p className="font-body text-gray-400 leading-relaxed text-[14px]">
                Reinforce your understanding by teaching concepts back to the AI. 
                If you can explain it, you truly know it.
              </p>
            </div>

            <div className="bg-[#1a1a22] p-7 rounded-xl border border-white/10">
              <h3 className="font-pixelgrid text-xl text-pink-200 mb-2">
                Bite-Sized Modules
              </h3>
              <p className="font-body text-gray-400 leading-relaxed text-[14px]">
                No overwhelming walls of text — each topic is broken into small, 
                digestible lessons.
              </p>
            </div>

            <div className="bg-[#1a1a22] p-7 rounded-xl border border-white/10">
              <h3 className="font-pixelgrid text-xl text-pink-200 mb-2">
                A Home for Beginners
              </h3>
              <p className="font-body text-gray-400 leading-relaxed text-[14px]">
                Whether you're new to coding or brushing up on fundamentals, 
                EchoLearn keeps things gentle and understandable.
              </p>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <section className="mb-20 text-center">
          <p className="font-body text-gray-500 text-sm">
            Built with love, pixels, and too much caffeine.
          </p>
        </section>

      </div>
    </div>
  );
}
