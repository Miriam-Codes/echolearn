"use client";

import { useState, useEffect } from "react";
import AISidePanel from "@/components/AISidePanel";

interface LessonLayoutProps {
  title: string;
  lessonKey: string;
  children: React.ReactNode;
  nextLesson?: string;
  previousLesson?: string;
  topicBanner?: string;
}

export default function LessonLayout({
  title,
  lessonKey,
  children,
  nextLesson,
  topicBanner,
  previousLesson,
}: LessonLayoutProps) {

  const [completed, setCompleted] = useState(false);
  const [aiPanel, setAiPanel] = useState<null | "teacher" | "baby">(null);
  const bannerImage = topicBanner || "/bg/default-lesson.png";

  useEffect(() => {
    const saved = typeof window !== "undefined"
      ? localStorage.getItem(lessonKey)
      : null;

    if (saved === "completed") setCompleted(true);
  }, [lessonKey]);

  function markComplete() {
    setCompleted(true);
    if (typeof window !== "undefined") {
      localStorage.setItem(lessonKey, "completed");
    }
  }

  return (
    <div className="relative min-h-screen bg-[#070511] text-gray-200">

      {/* FLOATING PARTICLES */}
      <div
        className="
          pointer-events-none 
          fixed inset-0 -z-10 
          bg-[radial-gradient(circle_at_top,_rgba(255,182,193,0.12),transparent_55%),radial-gradient(circle_at_bottom,_rgba(147,112,219,0.18),transparent_55%)]
        "
      />

      {/* FULL-WIDTH TOP BANNER */}
      <div className="w-full mt-10">
        <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden border-y border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

          <img
            src={bannerImage}
            alt={title}
            className="w-full h-full object-cover"
            style={{ imageRendering: "pixelated" }}
          />

          {/* SOFT FADE INTO PAGE */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070511]" />

          {/* TITLE ON BANNER */}
          <div className="absolute bottom-6 left-6">
            <p className="text-xs uppercase tracking-[0.2em] text-pink-200/80">
              LESSON CONTENT
            </p>
            <h1 className="font-pixelgrid text-4xl sm:text-5xl text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.7)]">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* MAIN LESSON CONTENT */}
      <div className="max-w-4xl mx-auto px-6 pb-24 mt-14">
        <div className="bg-[#130f1f]/90 border border-white/10 rounded-2xl p-7 sm:p-9 shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-sm">

          <div className="font-body text-[15px] text-gray-200/90 leading-relaxed space-y-6 mb-10">
            {children}
          </div>

          {/* COMPLETE BUTTON */}
          {!completed ? (
            <button
              onClick={markComplete}
              className="
                bg-pink-500 hover:bg-pink-600 
                text-white font-semibold px-6 py-3 
                rounded-lg transition shadow-[0_0_18px_rgba(255,108,204,0.6)]
              "
            >
              Mark Lesson as Complete
            </button>
          ) : (
            <div className="inline-flex items-center gap-2 text-pink-300 text-lg font-pixelgrid mb-2">
              ✓ Lesson Completed
            </div>
          )}

          {/* BABY AI */}
          {completed && (
            <button
              onClick={() => setAiPanel("baby")}
              className="
                block mt-3 text-sm 
                text-pink-200 hover:text-pink-300 
                underline decoration-pink-300/70 
                underline-offset-4
              "
            >
              Teach the Baby AI what you learned →
            </button>
          )}

          {/* NAVIGATION */}
          <div className="flex justify-between mt-14 font-body text-sm text-pink-200/90">
            {previousLesson ? (
              <a href={previousLesson} className="hover:text-pink-300 transition">← Previous</a>
            ) : (
              <span />
            )}

            {nextLesson && (
              <a href={nextLesson} className="hover:text-pink-300 transition">Next →</a>
            )}
          </div>
        </div>
      </div>

      {/* FLOATING AI BUTTON */}
      <button
        type="button"
        onClick={() => setAiPanel("teacher")}
        className="
          fixed bottom-6 right-6 z-40 
          flex flex-col items-center gap-1 group
        "
      >
        <div
          className="
            relative w-14 h-14 rounded-full 
            bg-[#24142f] 
            border border-pink-300/60 
            shadow-[0_0_20px_rgba(255,108,204,0.7)]
            flex items-center justify-center
            group-hover:scale-105 
            group-hover:shadow-[0_0_28px_rgba(255,108,204,0.95)]
            transition
          "
        >
          <img
            src="/characters/teacher-bot.png"
            alt="Teacher AI bot"
            className="w-9 h-9 object-contain"
            style={{ imageRendering: "pixelated" }}
          />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-pink-400 animate-pulse" />
        </div>

        <span
          className="
            text-[11px] px-3 py-1 rounded-full 
            bg-[#24142f]/95 border border-pink-300/40 
            text-pink-100 shadow-[0_0_12px_rgba(0,0,0,0.7)]
          "
        >
          Ask the teacher
        </span>
      </button>

      {/* AI PANEL */}
      <AISidePanel
        open={aiPanel !== null}
        mode={aiPanel === "baby" ? "baby" : "teacher"}
        onClose={() => setAiPanel(null)}
      />
    </div>
  );
}
