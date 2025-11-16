import LessonLayout from "@/components/LessonLayout";

export default function BinaryTreePage() {
  return (
    <LessonLayout
      title="Binary Trees"
      lessonKey="trees-binary"
      nextLesson="/courses/dsa/trees/traversals"
      previousLesson="/courses/dsa/linked-lists/operations"
      topicBanner="/topics/trees/trees.png"
    >
      <div>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          A binary tree is a tree data structure where each node has at most two
          children, referred to as the left child and right child. This
          hierarchical structure makes binary trees useful for organizing data
          in a way that enables efficient searching and sorting.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Tree Terminology</h2>
        <p>
          The topmost node is called the root. Nodes with children are internal
          nodes, and nodes without children are leaves. The depth of a node is
          the number of edges from the root to that node. The height is the
          maximum depth in the tree.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Node Structure</h2>
        <p>
          Each node typically stores data and pointers to its left and right
          children. A node with no children has both pointers set to null. This
          simple structure allows recursive algorithms to process entire subtrees
          elegantly.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Properties of Binary Trees</h2>
        <p>
          In a full binary tree, every node has either zero or two children. A
          complete binary tree has all levels fully filled except possibly the
          last, which is filled from left to right. A balanced tree has roughly
          equal depths on both sides.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Why Binary Trees Matter</h2>
        <p>
          Binary trees form the foundation for more advanced structures like
          binary search trees and heaps. They enable efficient hierarchical
          data organization and support operations like searching, insertion,
          and deletion in logarithmic time under ideal conditions.
        </p>
      </div>
    </LessonLayout>
  );
}

