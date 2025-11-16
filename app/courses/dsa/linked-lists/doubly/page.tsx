import LessonLayout from "@/components/LessonLayout";

export default function DoublyLinkedListPage() {
  return (
    <LessonLayout
      title="Doubly Linked List"
      lessonKey="linked-lists-doubly"
      nextLesson="/courses/dsa/linked-lists/operations"
      previousLesson="/courses/dsa/linked-lists/singly"
      topicBanner="/images/banners/linked-lists-banner.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          A doubly linked list is similar to a singly linked list, but each node
          contains references to both the next and previous nodes. This
          bidirectional linking allows traversal in both forward and backward
          directions.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Node Structure</h2>
        <p>
          Each node in a doubly linked list has three parts: the data it stores,
          a pointer to the next node, and a pointer to the previous node. The
          first node's previous pointer is null, and the last node's next
          pointer is null.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Bidirectional Traversal</h2>
        <p>
          Unlike singly linked lists, you can move both forward and backward
          through a doubly linked list. This makes some operations more
          efficient, especially when you need to access elements near the end of
          the list.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Advantages</h2>
        <p>
          Doubly linked lists allow deletion of a node in O(1) time when you
          have a reference to it, since you can directly update both neighboring
          nodes. They also enable reverse traversal, which is useful for certain
          algorithms.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Memory Trade-off</h2>
        <p>
          The main trade-off is increased memory usage. Each node stores an
          extra pointer, roughly doubling the pointer overhead compared to
          singly linked lists. Operations also need to maintain both next and
          previous pointers.
        </p>
      </>
    </LessonLayout>
  );
}

