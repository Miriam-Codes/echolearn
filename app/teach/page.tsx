"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";
import Image from "next/image";

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
    <div
      className="space-y-6 p-2 flex"
      style={{
        backgroundImage: "url('/bg/tileable-sky.png')",
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
        imageRendering: "pixelated",
      }}
    >
      <div className="p-4 mx-auto">
        <ProgressBar xp={xp} />
        <div className="flex justify-center">
          <Image
            src="/baby.png"
            alt="Baby character"
            width={200}
            height={200}
            className="w-1/2 h-auto"
          />
        </div>
        <p className="text-gray-700">
          Explain bubble sort in your own words. If I understand, I evolve!
        </p>
        <textarea
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
          className="border rounded px-3 py-2 w-full h-32"
          placeholder="Bubble sort compares adjacent items, swaps if out of order..."
        />
        <div className="flex gap-2">
          <Link
            href={{
              pathname: "/learn",
              query: { topic: "array-bubble", xp },
            }}
          >
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded font-pixelgrid">
              Back to Learn More
            </button>
          </Link>
          <button
            onClick={() => evaluateExplanation(explanation)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded font-pixelgrid"
          >
            Teach me
          </button>
        </div>
        {reaction && <div className="p-3 bg-gray-100 rounded">{reaction}</div>}
      </div>
    </div>
  );
}
