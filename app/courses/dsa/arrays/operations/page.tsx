import LessonLayout from "@/components/LessonLayout";

export default function InsertDeletePage() {
  return (
    <LessonLayout
      title="Insert / Delete"
      lessonKey="arrays-insert-delete"
      nextLesson="/courses/dsa/stacks/what-is-a-stack"
      previousLesson="/courses/dsa/arrays/memory-layout"
      topicBanner="/topics/arrays/arrays.png"
    >
      <>
        {/* INSERT SECTION */}
        <h2 className="text-xl font-semibold text-purple-200">Insert Overview</h2>
        <p>
          Inserting an element into an array means adding a new value at a
          specific position. Because arrays use consecutive memory, making space
          for a new element often requires shifting other elements.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Insertion at the End</h2>
        <p>
          If the array has extra capacity, adding an element to the end is fast.
          The new value is placed directly after the last existing element, and
          no shifting is needed.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Insertion in the Middle</h2>
        <p>
          When inserting at an index somewhere in the middle, every element from
          that index onward must move one position to the right. This shifting
          keeps elements in order but increases the cost of insertion.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Why Insert Can Be Slow</h2>
        <p>
          Inserting early in a large array may require shifting many elements.
          The more elements that need to move, the slower the operation becomes.
        </p>

        {/* DELETE SECTION */}
        <h2 className="text-xl font-semibold text-purple-200 mt-10">Delete Overview</h2>
        <p>
          Deleting an element removes a value from a specific index. Because
          arrays must stay packed tightly in memory, removing an element creates
          a gap that must be filled by shifting the following elements.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Deleting at the End</h2>
        <p>
          Removing the last element is efficient. No shifting is required, and
          the array simply becomes one element shorter.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Deleting in the Middle</h2>
        <p>
          When deleting from the middle of an array, each element to the right
          must move one step left to fill the empty position and maintain
          consecutive memory.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Why Delete Can Be Slow</h2>
        <p>
          Like insertion, deletion becomes slower as the number of elements
          increases. If many elements must shift left, the deletion cost grows.
        </p>
      </>
    </LessonLayout>
  );
}

