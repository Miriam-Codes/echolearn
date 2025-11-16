import LessonLayout from "@/components/LessonLayout";

export default function MergeSortPage() {
  return (
    <LessonLayout
      title="Merge Sort"
      lessonKey="sorting-merge"
      nextLesson="/courses/dsa/sorting/quick"
      previousLesson="/courses/dsa/sorting/selection"
      topicBanner="/images/banners/sorting-banner.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          Merge sort is a divide-and-conquer algorithm that divides the array into
          two halves, recursively sorts each half, and then merges the sorted
          halves back together. It guarantees O(n log n) time complexity and is
          stable, meaning it preserves the relative order of equal elements.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">The Divide Step</h2>
        <p>
          The algorithm repeatedly splits the array in half until each subarray
          contains only one element. A single-element array is trivially sorted.
          This division creates a binary tree of subproblems that must be solved.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">The Conquer Step</h2>
        <p>
          After dividing, merge sort recursively sorts both halves. The recursion
          continues until reaching the base case of single elements, which are
          already sorted.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">The Merge Step</h2>
        <p>
          The merge operation combines two sorted arrays into one sorted array by
          comparing the front elements of both arrays and always taking the
          smaller one. This process continues until one array is exhausted, then
          the remaining elements are appended.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Time Complexity</h2>
        <p>
          Merge sort has O(n log n) time complexity in all cases—best, average,
          and worst. The log n comes from the division depth, and n comes from
          the merge operations at each level. This makes it predictable and
          reliable.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Space Complexity</h2>
        <p>
          Merge sort requires O(n) extra space for the temporary arrays used
          during merging. This is a trade-off for the guaranteed O(n log n)
          performance and stability. Some implementations can be optimized to use
          less space.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Why Merge Sort Matters</h2>
        <p>
          Merge sort is excellent when you need guaranteed O(n log n)
          performance, stability is important, or you're sorting linked lists
          where it can be implemented with O(1) extra space. It's also a
          foundation for understanding divide-and-conquer strategies.
        </p>
      </>
    </LessonLayout>
  );
}

