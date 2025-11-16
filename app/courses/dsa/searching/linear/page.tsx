import LessonLayout from "@/components/LessonLayout";

export default function LinearSearchPage() {
  return (
    <LessonLayout
      title="Linear Search"
      lessonKey="searching-linear"
      nextLesson="/courses/dsa/searching/binary"
      previousLesson="/courses/dsa/sorting/quick"
      topicBanner="/topics/searching/searching.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          Linear search is the simplest search algorithm. It sequentially checks
          each element in the array until it finds the target value or reaches the
          end. Linear search works on any array, sorted or unsorted, and requires
          no special conditions.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">How Linear Search Works</h2>
        <p>
          The algorithm starts at the beginning of the array and compares each
          element with the target value. If a match is found, it returns the index
          of that element. If the entire array is checked without finding a match,
          it indicates the target is not present.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Time Complexity</h2>
        <p>
          In the best case, the target is at the first position, requiring only
          one comparison for O(1) time. In the worst and average cases, linear
          search takes O(n) time, where n is the array size, because it may need
          to check every element.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">When to Use Linear Search</h2>
        <p>
          Linear search is appropriate for small arrays or when the array is
          unsorted. It's simple to implement and understand, making it a good
          starting point for learning search algorithms. For larger sorted arrays,
          binary search is much more efficient.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Simplicity and Flexibility</h2>
        <p>
          The main advantage of linear search is its simplicity. It requires no
          preprocessing or special conditions about the data. It can search for
          any value in any array, sorted or not, making it versatile for many
          basic searching needs.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Limitations</h2>
        <p>
          Linear search becomes inefficient for large datasets because it must
          potentially examine every element. When data is sorted, binary search
          provides O(log n) performance instead of O(n), making it significantly
          faster for large arrays.
        </p>
      </>
    </LessonLayout>
  );
}

