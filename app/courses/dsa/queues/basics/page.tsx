import LessonLayout from "@/components/LessonLayout";

export default function QueueBasicsPage() {
  return (
    <LessonLayout
      title="Queue Basics"
      lessonKey="queues-basics"
      nextLesson="/courses/dsa/queues/circular"
      previousLesson="/courses/dsa/stacks/applications"
      topicBanner="/topics/queues/queues.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          A queue is a data structure that stores items in a specific order,
          following the First In, First Out principle. This means the first item
          added is always the first item removed, similar to people waiting in
          line at a store.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">FIFO Principle</h2>
        <p>
          FIFO stands for First In, First Out. Items enter the queue at one end,
          called the rear or back, and leave from the other end, called the
          front. The order items are added is exactly the order they are
          removed, ensuring fairness.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Core Operations</h2>
        <p>
          Queues have two main operations. Enqueue adds an item to the rear of
          the queue. Dequeue removes and returns the item at the front. These
          operations maintain the FIFO order and are essential for queue
          behavior.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Real-World Analogy</h2>
        <p>
          A queue works like a line of people waiting. New people join at the
          back, and the person at the front is served first. This ensures
          everyone gets their turn in the order they arrived, making queues
          perfect for scheduling tasks fairly.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">When Queues Are Useful</h2>
        <p>
          Queues are ideal when you need to process items in the exact order they
          arrive. Common uses include task scheduling, printing jobs, handling
          requests on a server, and implementing breadth-first search in graphs.
        </p>
      </>
    </LessonLayout>
  );
}

