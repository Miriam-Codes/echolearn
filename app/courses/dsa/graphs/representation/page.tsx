import LessonLayout from "@/components/LessonLayout";

export default function GraphRepresentationPage() {
  return (
    <LessonLayout
      title="Graph Representation"
      lessonKey="graphs-representation"
      nextLesson="/courses/dsa/graphs/bfs"
      previousLesson="/courses/dsa/trees/bst"
      topicBanner="/images/banners/graphs-banner.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          A graph is a collection of nodes, called vertices, connected by edges.
          Graphs can represent relationships between entities, like social
          networks, road maps, or computer networks. There are two main ways to
          represent graphs in code: adjacency lists and adjacency matrices.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Adjacency List</h2>
        <p>
          An adjacency list stores the graph as an array or dictionary where each
          vertex maps to a list of its neighboring vertices. This representation
          is space-efficient for sparse graphs and makes it easy to iterate
          through all neighbors of a vertex.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Adjacency Matrix</h2>
        <p>
          An adjacency matrix is a 2D array where the entry at row i and column j
          indicates whether an edge exists between vertices i and j. This makes
          checking for an edge very fast, but uses more memory for sparse graphs.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Directed vs Undirected</h2>
        <p>
          In an undirected graph, edges go both ways. In a directed graph, edges
          have a direction from one vertex to another. The representation method
          handles both types, with directed graphs only storing edges in one
          direction.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Weighted Graphs</h2>
        <p>
          When edges have associated weights or costs, the representation stores
          these values too. In adjacency lists, each neighbor entry includes the
          weight. In adjacency matrices, the entry stores the weight instead of
          just a boolean.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Choosing a Representation</h2>
        <p>
          Adjacency lists are generally preferred for most algorithms because they
          are space-efficient and make traversal easy. Adjacency matrices are
          better when you need to frequently check if specific edges exist or
          when working with dense graphs.
        </p>
      </>
    </LessonLayout>
  );
}

