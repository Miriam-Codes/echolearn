import CourseCard from "@/components/CourseCard";

// TOPIC LIST
export default function TopicsPage() {
  const topics = [
    { id: "arrays", name: "Arrays", desc: "Learn how data is stored in order.", },
    { id: "stacks", name: "Stacks", desc: "Understand LIFO operations." },
    { id: "graphs", name: "Graphs", desc: "Explore connections and traversals.", },
    { id: "matrix/grid", name: "Matrix / Grid", desc: "Two-dimensional data structure for representing tabular data and spatial relationships.", },
    { id: "strings", name: "Strings", desc: "Sequence of characters with operations for manipulation, searching, and pattern matching.", },
    { id: "recursion", name: "Recursion", desc: "Solve problems by breaking them down into smaller self-similar subproblems", },
  ];

  return (
    <div className="space-y-6 p-2 " style={{
          backgroundImage: "url('/bg/tileable-sky.png')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          imageRendering: "pixelated",
        }}>
      <section className="m-4">
        <h2 className="font-pixelgrid text-4xl text-center text-white mb-3">
          Choose a Topic
        </h2>

        <p className="font-body text-center text-gray-400 max-w-xl mx-auto">
          Select a topic to begin learning.
        </p>
      </section>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {topics.map((topic) => (
          <CourseCard
            key={topic.id}
            href={`/learn?topic=${topic.id}`}
            label={topic.id}
            title={topic.name}
            description={topic.desc}
          />
        ))}
      </div>
    </div>
  );
}
