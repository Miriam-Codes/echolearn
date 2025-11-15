"use client";

import { useState } from "react";
import Link from "next/link";

// Fully typed topic map
const validTopics = {
  arrays: "Arrays",
  stacks: "Stacks",
  graphs: "Graphs",
} as const;

type Topic = keyof typeof validTopics;

export default function TeachPage({ params }: { params: { topic: string } }) {
  const topicParam = params.topic;

  // Validate topic safely
  if (!(topicParam in validTopics)) {
    return (
      <div>
        <h1 className="text-xl font-bold">Invalid Topic</h1>
        <Link href="/topics" className="text-blue-600 underline">
          Go Back
        </Link>
      </div>
    );
  }

  // Now TypeScript knows topic is valid
  const topic = topicParam as Topic;

  const [explanation, setExplanation] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!explanation.trim()) return;

    setLoading(true);
    setResult(null);

    const res = await fetch("/api/clone", {
      method: "POST",
      body: JSON.stringify({ explanation, topic }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Teach the Clone: {validTopics[topic]}</h1>

      <p className="text-gray-700">
        Explain {validTopics[topic]} in your own words. The Clone AI will react
        based on how clear your explanation is.
      </p>

      <textarea
        value={explanation}
        onChange={(e) => setExplanation(e.target.value)}
        className="w-full p-3 border rounded-md"
        rows={5}
        placeholder="Explain the concept here..."
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Evaluating..." : "Submit Explanation"}
      </button>

      {result && (
        <div className="p-4 border rounded-md bg-white shadow-sm space-y-2">
          <p className="font-semibold">Clone Reaction:</p>
          <p className="text-gray-800">{result.reaction}</p>

          <p className="font-semibold">XP Awarded:</p>
          <p>{result.xpAwarded}</p>

          <p className="font-semibold">New Level:</p>
          <p>{result.newLevel}</p>
        </div>
      )}

      <Link href="/topics" className="block text-blue-600 underline mt-4">
        ← Choose another topic
      </Link>
    </div>
  );
}
