import LessonLayout from "@/components/LessonLayout";

export default function SelectionSortPage() {
  return (
    <LessonLayout
      title="Selection Sort"
      lessonKey="sorting-selection"
      nextLesson="/courses/dsa/sorting/merge"
      previousLesson="/courses/dsa/sorting/bubble"
      topicBanner="/images/banners/sorting-banner.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          Selection sort divides the array into two parts: sorted and unsorted.
          It repeatedly finds the minimum element from the unsorted part and
          places it at the beginning of the sorted part. This builds the sorted
          array one element at a time.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">How Selection Sort Works</h2>
        <p>
          The algorithm maintains two subarrays: the left part is sorted, and the
          right part is unsorted. In each iteration, it scans the unsorted portion
          to find the smallest element and swaps it with the leftmost unsorted
          element, effectively expanding the sorted region.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">The Selection Process</h2>
        <p>
          For each position in the array, selection sort finds the minimum value
          in the remaining unsorted portion. It then swaps that minimum value with
          the value at the current position. This ensures each position gets its
          correct element in order.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Time Complexity</h2>
        <p>
          Selection sort always requires O(n²) comparisons, regardless of input
          order, because it must scan the entire unsorted portion to find the
          minimum each time. It performs fewer swaps than bubble sort but is still
          quadratic in time complexity.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Advantages</h2>
        <p>
          Selection sort is simple to understand and implement. It performs at
          most n swaps, which is an advantage when swap operations are expensive.
          It's also in-place, meaning it doesn't require extra memory proportional
          to the input size.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">When to Use</h2>
        <p>
          Like bubble sort, selection sort is mainly useful for educational
          purposes or very small datasets. For larger arrays, more efficient
          algorithms should be used. It's good for understanding the concept of
          finding minimums and building sorted arrays incrementally.
        </p>
      </>
    </LessonLayout>
  );
}

