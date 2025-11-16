import LessonLayout from "@/components/LessonLayout";

export default function DequePage() {
  return (
    <LessonLayout
      title="Deque"
      lessonKey="queues-deque"
      nextLesson="/courses/dsa/linked-lists/singly"
      previousLesson="/courses/dsa/queues/circular"
      topicBanner="/images/banners/queues-banner.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          A deque, short for double-ended queue, is a data structure that allows
          insertion and deletion at both ends. It combines features of both
          stacks and queues, providing flexibility in how elements are added and
          removed.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Double-Ended Operations</h2>
        <p>
          Unlike a regular queue that only allows adding at the rear and
          removing from the front, a deque lets you add or remove from either
          end. This makes it versatile for problems that need flexibility in
          element ordering.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Operations on Both Ends</h2>
        <p>
          A deque supports four main operations: addFront adds to the front,
          addRear adds to the rear, removeFront removes from the front, and
          removeRear removes from the rear. This dual-end access makes deques
          powerful for various algorithms.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Use Cases</h2>
        <p>
          Deques are useful when you need to process elements from both ends,
          such as in sliding window problems, implementing certain algorithms
          like palindrome checking, or when you need stack-like and queue-like
          behavior in the same data structure.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Implementation Flexibility</h2>
        <p>
          Deques can be implemented using arrays or linked lists. Array-based
          implementations can be more memory-efficient, while linked list
          implementations avoid shifting elements. The choice depends on your
          specific needs and constraints.
        </p>
      </>
    </LessonLayout>
  );
}

