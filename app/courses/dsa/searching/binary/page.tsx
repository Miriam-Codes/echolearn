import LessonLayout from "@/components/LessonLayout";

export default function BinarySearchPage() {
  return (
    <LessonLayout
      title="Binary Search"
      lessonKey="searching-binary"
      previousLesson="/courses/dsa/searching/linear"
      topicBanner="/images/banners/searching-banner.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          Binary search is an efficient algorithm for finding an element in a
          sorted array. It repeatedly divides the search space in half by comparing
          the target value with the middle element, eliminating half of the
          remaining elements with each comparison.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">The Divide and Conquer Approach</h2>
        <p>
          Binary search compares the target with the middle element of the current
          search range. If they match, the search is complete. If the target is
          smaller, it searches the left half. If larger, it searches the right
          half. This continues until found or the range becomes empty.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Why It Requires Sorted Data</h2>
        <p>
          Binary search relies on the array being sorted. This ordering allows the
          algorithm to eliminate half the elements based on a single comparison.
          Without sorted data, you cannot determine which half to search next.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Time Complexity</h2>
        <p>
          Binary search has O(log n) time complexity in all cases. Each comparison
          eliminates half the remaining elements, so even for large arrays, very
          few comparisons are needed. This makes it extremely efficient compared
          to linear search for sorted data.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">The Search Process</h2>
        <p>
          The algorithm maintains left and right pointers defining the current
          search range. It calculates the middle index, compares that element with
          the target, and adjusts the pointers accordingly. When left exceeds right,
          the target is not in the array.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Applications</h2>
        <p>
          Beyond searching, binary search principles are used in finding
          insertion points, determining ranges, and solving optimization problems
          where you need to find a value satisfying certain conditions. It's one
          of the most important algorithms in computer science.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">When to Use Binary Search</h2>
        <p>
          Use binary search whenever you have sorted data and need to find an
          element efficiently. The O(log n) performance makes it ideal for large
          datasets. If data isn't sorted, consider sorting first if you'll perform
          many searches, or use linear search for occasional queries.
        </p>
      </>
    </LessonLayout>
  );
}

