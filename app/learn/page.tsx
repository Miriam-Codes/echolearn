"use client";
import { useState } from "react";
import Link from "next/link";
import ProgressBar from "@/components/ProgressBar";

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
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Teacher AI: Bubble Sort</h1>
      <ProgressBar xp={xp} />
      <p className="text-gray-700">
        Bubble sort compares adjacent elements and swaps them if out of order,
        repeating until the array is sorted.
      </p>
      <p className="font-medium">
        Challenge: Sort [3, 1, 4, 2]. Type the final result (e.g., [1, 2, 3,
        4]).
      </p>
      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="border rounded px-3 py-2 w-full"
        placeholder="[1, 2, 3, 4]"
      />
      <button
        onClick={checkAnswer}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Check
      </button>
      {feedback && <div className="p-3 bg-gray-100 rounded">{feedback}</div>}

      <div className="pt-4">
        <Link
          href={{ pathname: "/teach", query: { topic: "array-bubble", xp } }}
        >
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Teach the Baby →
          </button>
        </Link>
      </div>
    </div>
  );
}
