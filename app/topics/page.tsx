import Link from "next/link";

export default function TopicsPage() {
  const topics = [
    { id: "arrays", name: "Arrays", desc: "Learn how data is stored in order." },
    { id: "stacks", name: "Stacks", desc: "Understand LIFO operations." },
    { id: "graphs", name: "Graphs", desc: "Explore connections and traversals." },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Choose a Topic</h1>
      <p className="text-gray-700">Select a topic to begin learning.</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <Link
            href={`/learn/${topic.id}`}
            key={topic.id}
            className="block border p-4 rounded-md bg-white hover:bg-gray-100 transition"
          >
            <h2 className="text-xl font-semibold">{topic.name}</h2>
            <p className="text-gray-600">{topic.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
