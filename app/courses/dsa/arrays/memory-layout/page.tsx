import LessonLayout from "@/components/LessonLayout";

export default function MemoryLayoutPage() {
  return (
    <LessonLayout
      title="Memory Layout"
      lessonKey="arrays-memory-layout"
      nextLesson="/courses/dsa/arrays/operations"
      previousLesson="/courses/dsa/arrays/indexing"
      topicBanner="/topics/arrays/arrays.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          Arrays store their elements in a single block of consecutive memory.
          This means each element is placed directly next to the previous one
          without any gaps. The layout gives arrays predictable structure and
          allows fast access to elements by their index.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Contiguous Memory</h2>
        <p>
          When an array is created, a continuous section of memory is reserved
          for all of its elements. Because the memory is grouped together, the
          computer can easily calculate the exact location of any element using
          the starting address of the array and the element's position.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Fast Index Access</h2>
        <p>
          Accessing an element by index is fast because its position is always at
          a fixed distance from the start of the array. The computer does not
          need to search or scan through the array. It jumps straight to the
          needed memory location using simple arithmetic.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Cost of Resizing</h2>
        <p>
          A fixed block of memory means an array cannot easily grow or shrink.
          If you need more space than the array was created with, a new larger
          memory block must be allocated and all existing elements must be
          copied into it. This makes resizing an expensive operation.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Why the Layout Matters</h2>
        <p>
          Understanding memory layout explains why some array operations are
          fast and others are slow. Reading an element by index is fast because
          of predictable memory positions. Operations that change array size are
          slower because they often require copying all elements to new memory.
        </p>
      </>
    </LessonLayout>
  );
}

