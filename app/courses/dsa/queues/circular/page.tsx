import LessonLayout from "@/components/LessonLayout";

export default function CircularQueuePage() {
  return (
    <LessonLayout
      title="Circular Queue"
      lessonKey="queues-circular"
      nextLesson="/courses/dsa/queues/deque"
      previousLesson="/courses/dsa/queues/basics"
      topicBanner="/images/banners/queues-banner.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          A circular queue is a special type of queue that treats the underlying
          array as circular. When the rear reaches the end of the array, it
          wraps around to the beginning, allowing efficient use of space.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">The Circular Structure</h2>
        <p>
          Instead of a linear array where space is wasted after dequeuing, a
          circular queue reuses empty spaces at the front. The front and rear
          pointers move through the array and wrap around when they reach the
          end, creating a circular path.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Why Use Circular Queues</h2>
        <p>
          In a regular queue implemented with an array, once items are removed
          from the front, that space is lost. A circular queue reuses that
          space, making it more memory-efficient for fixed-size queues that
          frequently enqueue and dequeue items.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Front and Rear Pointers</h2>
        <p>
          The circular queue uses two pointers: front points to the first
          element, and rear points to where the next element will be inserted.
          When enqueueing, rear moves forward. When dequeueing, front moves
          forward. Both wrap around using modulo arithmetic.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Checking Full and Empty</h2>
        <p>
          Distinguishing between a full and empty circular queue can be tricky
          since both conditions might look similar. Common solutions include
          keeping one slot always empty or using a counter to track the number
          of elements currently in the queue.
        </p>
      </>
    </LessonLayout>
  );
}

