import LessonLayout from "@/components/LessonLayout";

export default function QuickSortPage() {
  return (
    <LessonLayout
      title="Quick Sort"
      lessonKey="sorting-quick"
      nextLesson="/courses/dsa/searching/linear"
      previousLesson="/courses/dsa/sorting/merge"
      topicBanner="/images/banners/sorting-banner.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          Quick sort is a divide-and-conquer algorithm that picks a pivot element
          and partitions the array around it, placing all smaller elements before
          the pivot and all larger elements after it. It then recursively sorts the
          subarrays on either side of the pivot.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">The Pivot</h2>
        <p>
          The pivot is a chosen element around which partitioning occurs. Common
          strategies include picking the first element, last element, middle
          element, or a random element. The choice affects performance but not
          correctness.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Partitioning</h2>
        <p>
          Partitioning rearranges the array so all elements less than the pivot
          are on its left, and all elements greater are on its right. The pivot
          ends up in its final sorted position. This is done in-place, making
          quicksort space-efficient.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Recursive Sorting</h2>
        <p>
          After partitioning, quicksort recursively sorts the left subarray
          (elements less than pivot) and the right subarray (elements greater than
          pivot). Since the pivot is already in its correct position, it doesn't
          need to be included in either recursive call.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Time Complexity</h2>
        <p>
          In the average case, quicksort runs in O(n log n) time. In the best case
          with good pivot choices, it's also O(n log n). However, in the worst
          case of already sorted data with a bad pivot strategy, it degrades to
          O(n²).
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Advantages</h2>
        <p>
          Quicksort is typically faster in practice than other O(n log n)
          algorithms due to good cache performance and low overhead. It's
          in-place, meaning it doesn't require extra memory proportional to the
          input size, and it's commonly used in standard library implementations.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">When to Use</h2>
        <p>
          Quicksort excels for general-purpose sorting of arrays. Its average-case
          performance is excellent, and with good pivot selection, worst-case
          scenarios are rare. However, for guaranteed O(n log n) or when stability
          matters, merge sort may be preferred.
        </p>
      </>
    </LessonLayout>
  );
}

