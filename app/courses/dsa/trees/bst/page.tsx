import LessonLayout from "@/components/LessonLayout";

export default function BinarySearchTreePage() {
  return (
    <LessonLayout
      title="Binary Search Tree"
      lessonKey="trees-bst"
      nextLesson="/courses/dsa/graphs/representation"
      previousLesson="/courses/dsa/trees/traversals"
      topicBanner="/topics/trees/trees.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          A binary search tree is a binary tree where each node's value is
          greater than all values in its left subtree and less than all values
          in its right subtree. This ordering property enables efficient
          searching, insertion, and deletion operations.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">The Ordering Property</h2>
        <p>
          For any node in a BST, all nodes in its left subtree have smaller
          values, and all nodes in its right subtree have larger values. This
          property must hold for every node, making the tree organized and
          searchable.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Searching in a BST</h2>
        <p>
          To search for a value, start at the root. If the target equals the
          current node, you found it. If the target is smaller, go left. If
          larger, go right. Repeat until found or reaching null. This takes O(log
          n) time in a balanced tree.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Insertion</h2>
        <p>
          To insert, follow the same path as searching. When you reach null,
          create a new node there. The insertion point maintains the BST
          property, ensuring the tree remains valid after adding the new element.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Deletion</h2>
        <p>
          Deleting a node has three cases: if it has no children, simply remove
          it. If it has one child, replace it with that child. If it has two
          children, replace it with its in-order successor or predecessor, then
          delete that replacement node.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Balanced vs Unbalanced</h2>
        <p>
          When a BST is balanced, operations are O(log n). When it becomes
          unbalanced and resembles a linked list, operations degrade to O(n).
          Self-balancing trees like AVL or Red-Black trees maintain balance
          automatically.
        </p>
      </>
    </LessonLayout>
  );
}

