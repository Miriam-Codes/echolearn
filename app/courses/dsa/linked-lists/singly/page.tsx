import LessonLayout from "@/components/LessonLayout";

export default function SinglyLinkedListPage() {
  return (
    <LessonLayout
      title="Singly Linked List"
      lessonKey="linked-lists-singly"
      nextLesson="/courses/dsa/linked-lists/doubly"
      previousLesson="/courses/dsa/queues/deque"
      topicBanner="/topics/linked-lists/linked-lists.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          A singly linked list is a data structure where each element, called a
          node, contains data and a reference to the next node. Unlike arrays,
          linked list elements are not stored in contiguous memory locations,
          allowing dynamic size changes without reallocation.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Node Structure</h2>
        <p>
          Each node in a singly linked list has two parts: the data it stores,
          and a pointer or reference to the next node in the sequence. The last
          node points to null, indicating the end of the list.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Advantages Over Arrays</h2>
        <p>
          Linked lists can grow and shrink dynamically without needing to copy
          elements. Insertion and deletion at the beginning are very fast since
          no shifting is required. The size is only limited by available memory.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Disadvantages</h2>
        <p>
          Unlike arrays, linked lists don't allow direct access by index. To
          find a specific element, you must traverse from the head until you
          reach it. Linked lists also use extra memory to store pointers.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Head Pointer</h2>
        <p>
          A linked list is accessed through a head pointer that points to the
          first node. If the head is null, the list is empty. All operations
          start from the head and follow the chain of next pointers to navigate
          through the list.
        </p>
      </>
    </LessonLayout>
  );
}

