import { notFound } from "next/navigation";
import Link from "next/link";

// Predefined topics
const validTopics = {
  arrays: "Arrays",
  stacks: "Stacks",
  graphs: "Graphs",
} as const;

type Topic = keyof typeof validTopics;

// Absolute fetch (required for server components)
async function getLesson(topic: Topic) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/teacher`, {
    method: "POST",
    body: JSON.stringify({ topic }),
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function LearnPage({
  params,
}: {
  params: { topic: string };
}) {
  const topicParam = params.topic;

  // Validate param
  if (!(topicParam in validTopics)) {
    notFound();
  }

  const topic = topicParam as Topic;

  // Fetch lesson
  const lessonData = await getLesson(topic);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{validTopics[topic]} Lesson</h1>

      <p className="text-gray-700">
        Here’s a quick explanation from the Teacher AI.
      </p>

      {/* Lesson Card */}
      <div className="p-4 border rounded-md bg-white shadow-sm whitespace-pre-line">
        {lessonData?.lesson || "Generating lesson..."}
      </div>

      {/* Continue button */}
      <Link
        href={`/teach/${topic}`}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Start Teaching →
      </Link>
    </div>
  );
}
