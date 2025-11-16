"use client";
import { useState } from "react";
import Link from "next/link";
import ProgressBar from "@/components/ProgressBar";
import Image from "next/image";

export default function TeacherPage() {
  const [xp, setXp] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  function checkAnswer() {
    const normalized = answer.replace(/\s/g, "");
    const correct = normalized === "[1,2,3,4]" || normalized === "1,2,3,4";
    if (correct) {
      setFeedback(
        "✨ Correct. See? Bubble sort swaps adjacent out-of-order pairs. Now teach the Baby AI."
      );
      setXp((x) => Math.min(x + 20, 100));
    } else {
      setFeedback(
        "😠 No. That’s not right. Try again. Hint: final sorted result should be [1, 2, 3, 4]."
      );
    }
  }

  return (
    <div
      className="space-y-6 p-2 min-h-[80vh] mx-auto my-auto"
      style={{
        backgroundImage: "url('/bg/tileable-sky.png')",
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
        imageRendering: "pixelated",
      }}
    >
      <div className="p-4 mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-black font-pixelgrid">Step 2/5</span>
            <h2 className="font-pixelgrid text-4xl text-white">Bubble Sort</h2>
            <span className="text-black font-pixelgrid">XP: {xp}</span>
          </div>
          <p className="font-body text-gray-300 text-lg">
            Learn how elements bubble up to their correct positions
          </p>
        </div>
        <div className="grow flex flex-col items-center justify-center mb-8">
          <div className="bg-white/10 p-8 rounded-xl border border-white/20 w-full max-w-4xl mb-8">
            <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center mb-6">
              <p className="text-black">Bubble Sort Visualization</p>
            </div>
            <p className="text-gray-300 text-center font-body">
              Watch how adjacent elements are compared and swapped...
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <button className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded font-pixelgrid text-lg">
              ← Back
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded font-pixelgrid text-lg">
              Continue →
            </button>
          </div>
        </div>
        <div className="mt-auto bg-linear-to-r from-purple-500/20 to-blue-500/20 p-6 rounded-lg border border-white/20">
          <div className="text-center mb-4">
            <h3 className="font-pixelgrid text-2xl text-white mb-2">
              Ready to Test Your Knowledge?
            </h3>
            <p className="text-gray-300">Complete this challenge to earn XP!</p>
          </div>

          <div className="flex items-end gap-4 max-w-2xl mx-auto">
            <div className="grow">
              <p className="font-medium text-white mb-3">
                Sort this array: [3, 1, 4, 2]
              </p>
              <input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="border-2 border-gray-400 rounded px-4 py-3 w-full bg-white text-gray-800 font-mono"
                placeholder="[1, 2, 3, 4]"
              />
              {feedback && (
                <div
                  className={`p-3 rounded mt-2 font-body ${
                    feedback.includes("Correct")
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {feedback}
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={checkAnswer}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-pixelgrid">Check</button>
              <Link
                href={{
                  pathname: "/learn",
                  query: { topic: "array-bubble", xp },
                }}>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded font-pixelgrid">Learn More</button>
              </Link>
              <Link href={{
                  pathname: "/teach",
                  query: { topic: "array-bubble", xp },
                }}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded font-pixelgrid"> Teach →</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
