import LessonLayout from "@/components/LessonLayout";

export default function DFSPage() {
  return (
    <LessonLayout
      title="DFS"
      lessonKey="graphs-dfs"
      nextLesson="/courses/dsa/sorting/bubble"
      previousLesson="/courses/dsa/graphs/bfs"
      topicBanner="/images/banners/graphs-banner.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          Depth-First Search is a graph traversal algorithm that explores as far
          as possible along each branch before backtracking. DFS uses recursion
          or a stack to dive deep into the graph before exploring other paths.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">How DFS Works</h2>
        <p>
          DFS starts at a source vertex, marks it as visited, and recursively
          visits all unvisited neighbors. For each neighbor, it immediately
          explores that neighbor's neighbors before returning. This creates a
          deep exploration pattern.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Recursive Implementation</h2>
        <p>
          The recursive approach naturally uses the call stack to remember where
          to backtrack. Each recursive call explores one neighbor deeply, and
          when all neighbors are explored, the function returns to explore other
          branches from previous levels.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Stack-Based Implementation</h2>
        <p>
          DFS can also use an explicit stack instead of recursion. Push the
          starting vertex, then while the stack isn't empty, pop a vertex, mark
          it visited, and push all unvisited neighbors. This mimics the
          recursive call stack.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Applications of DFS</h2>
        <p>
          DFS is useful for finding connected components, detecting cycles in
          graphs, topological sorting of directed acyclic graphs, solving maze
          problems, and finding paths between vertices. It's also the foundation
          for many advanced algorithms.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Time and Space Complexity</h2>
        <p>
          Like BFS, DFS has O(V + E) time complexity as it visits each vertex
          once and checks each edge once. Space complexity is O(V) for the
          recursion stack or explicit stack, plus the visited tracking.
        </p>
      </>
    </LessonLayout>
  );
}

