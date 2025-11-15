"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";

export default function BabyPage() {
  const params = useSearchParams();
  const initialXp = Number(params.get("xp") ?? 0);
  const [xp, setXp] = useState(initialXp);
  const [explanation, setExplanation] = useState("");
  const [reaction, setReaction] = useState<string | null>(null);

  function evaluateExplanation(text: string) {
    const keywords = ["adjacent", "swap", "repeat", "sorted"]; // simple stub; replace with OpenAI later
    const score = keywords.reduce(
      (acc, k) => acc + (text.toLowerCase().includes(k) ? 1 : 0),
      0
    );
    if (score >= 3) {
      setReaction("🎉 I get it! I leveled up!");
      setXp((x) => Math.min(x + 30, 100));
    } else {
      setReaction(
        "🤔 I'm confused. Can you explain with steps and mention swapping adjacent elements?"
      );
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Baby AI: Teach Me Bubble Sort</h1>
      <ProgressBar xp={xp} />
      <p className="text-gray-700">
        Explain bubble sort in your own words. If I understand, I evolve!
      </p>
      <textarea
        value={explanation}
        onChange={(e) => setExplanation(e.target.value)}
        className="border rounded px-3 py-2 w-full h-32"
        placeholder="Bubble sort compares adjacent items, swaps if out of order..."
      />
      <button
        onClick={() => evaluateExplanation(explanation)}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Teach
      </button>
      {reaction && <div className="p-3 bg-gray-100 rounded">{reaction}</div>}
      <div className="flex gap-4">
        <Link href="/topics">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Continue with another topic
          </button>
        </Link>
        <Link href="/">
          <button className="bg-gray-500 text-white px-4 py-2 rounded">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
