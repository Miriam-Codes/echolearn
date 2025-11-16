import LessonLayout from "@/components/LessonLayout";

export default function BubbleSortPage() {
  return (
    <LessonLayout
      title="Bubble Sort"
      lessonKey="sorting-bubble"
      nextLesson="/courses/dsa/sorting/selection"
      previousLesson="/courses/dsa/graphs/dfs"
      topicBanner="/topics/sorting/sorting.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          Bubble sort is a simple sorting algorithm that repeatedly steps through
          the list, compares adjacent elements, and swaps them if they are in the
          wrong order. The algorithm gets its name because smaller elements
          "bubble" to the top of the list like bubbles in water.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">How Bubble Sort Works</h2>
        <p>
          The algorithm makes multiple passes through the array. In each pass, it
          compares each pair of adjacent elements and swaps them if the first is
          greater than the second. After each complete pass, the largest unsorted
          element has "bubbled" to its correct position at the end.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">The Sorting Process</h2>
        <p>
          After the first pass, the largest element is at the end. After the
          second pass, the second largest is in the second-to-last position, and
          so on. The process continues until no swaps are needed in a complete
          pass, indicating the array is sorted.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Time Complexity</h2>
        <p>
          Bubble sort has O(n²) time complexity in both average and worst cases,
          making it inefficient for large datasets. In the best case of an already
          sorted array, it can be optimized to O(n) by detecting when no swaps
          occur.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Why Learn Bubble Sort</h2>
        <p>
          Despite its inefficiency, bubble sort is valuable for learning sorting
          concepts because it's simple to understand and implement. It helps build
          intuition about comparison-based sorting and provides a foundation for
          understanding more advanced algorithms.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">When Not to Use It</h2>
        <p>
          Bubble sort should not be used for real-world applications with large
          datasets. Modern sorting algorithms like quicksort or mergesort are
          much faster. However, its simplicity makes it useful for educational
          purposes and very small datasets.
        </p>
      </>
    </LessonLayout>
  );
}

