import LessonLayout from "@/components/LessonLayout";

export default function BFSPage() {
  return (
    <LessonLayout
      title="BFS"
      lessonKey="graphs-bfs"
      nextLesson="/courses/dsa/graphs/dfs"
      previousLesson="/courses/dsa/graphs/representation"
      topicBanner="/topics/graphs/graphs.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          Breadth-First Search is a graph traversal algorithm that explores all
          nodes at the current depth level before moving to nodes at the next
          level. BFS uses a queue to ensure nodes are visited in the correct
          order, level by level.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">How BFS Works</h2>
        <p>
          BFS starts at a source vertex and marks it as visited. It adds all
          unvisited neighbors to a queue. Then it processes the queue, visiting
          each vertex and adding its unvisited neighbors. This continues until
          the queue is empty.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">The Queue Mechanism</h2>
        <p>
          The queue ensures that vertices discovered earlier are processed
          before those discovered later. This creates the level-by-level
          exploration pattern, making BFS perfect for finding shortest paths in
          unweighted graphs.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Applications of BFS</h2>
        <p>
          BFS is ideal for finding the shortest path between two vertices in an
          unweighted graph, discovering all connected components, solving puzzle
          problems like finding minimum moves, and checking if a graph is
          bipartite.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Time and Space Complexity</h2>
        <p>
          BFS visits each vertex once and checks each edge once, giving it O(V +
          E) time complexity where V is vertices and E is edges. Space complexity
          is O(V) for the queue and visited tracking in the worst case.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Visited Tracking</h2>
        <p>
          It's crucial to mark vertices as visited when they're added to the
          queue, not when they're processed. This prevents the same vertex from
          being added multiple times, which would cause incorrect results and
          potential infinite loops.
        </p>
      </>
    </LessonLayout>
  );
}

