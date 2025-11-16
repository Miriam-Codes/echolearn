import LessonLayout from "@/components/LessonLayout";

export default function TreeTraversalsPage() {
  return (
    <LessonLayout
      title="Tree Traversals"
      lessonKey="trees-traversals"
      nextLesson="/courses/dsa/trees/bst"
      previousLesson="/courses/dsa/trees/binary"
      topicBanner="/topics/trees/trees.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          Tree traversal is the process of visiting each node in a tree exactly
          once. The order in which nodes are visited depends on the traversal
          method. There are three main depth-first traversal orders: in-order,
          pre-order, and post-order.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">In-Order Traversal</h2>
        <p>
          In-order traversal visits the left subtree first, then the root, then
          the right subtree. For binary search trees, this produces nodes in
          sorted order, making it useful for displaying data in ascending order.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Pre-Order Traversal</h2>
        <p>
          Pre-order traversal visits the root first, then the left subtree, then
          the right subtree. This order is useful for creating a copy of the
          tree or getting a prefix expression from an expression tree.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Post-Order Traversal</h2>
        <p>
          Post-order traversal visits the left subtree, then the right subtree,
          then the root. This is useful for deleting a tree or getting a postfix
          expression, since you process children before the parent.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Level-Order Traversal</h2>
        <p>
          Level-order, or breadth-first, traversal visits nodes level by level
          from top to bottom, left to right. This uses a queue to process nodes
          at each level before moving to the next level.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Recursive Nature</h2>
        <p>
          Most tree traversals are naturally recursive. You process the current
          node, then recursively process its left and right subtrees. The order
          of these three operations determines which traversal method you're
          using.
        </p>
      </>
    </LessonLayout>
  );
}

