import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">EchoLearn</h1>
      <p className="text-gray-700">
        Learn better by teaching an AI clone. Pick a topic and start the learning cycle.
      </p>

      <Link
        href="/topics"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Choose a Topic
      </Link>
    </div>
  );
}
