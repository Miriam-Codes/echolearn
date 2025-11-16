import LessonLayout from "@/components/LessonLayout";

export default function IndexingPage() {
  return (
    <LessonLayout
      title="Indexes & Positions"
      lessonKey="arrays-indexing"
      nextLesson="/courses/dsa/arrays/memory-layout"
      previousLesson="/courses/dsa/arrays/what-is-an-array"
      topicBanner="/topics/arrays/arrays.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          Indexing is the process of accessing a specific position inside an
          array. Each element is stored at a numbered position called an index.
          This index lets you read or modify that element directly.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Zero-Based Indexing</h2>
        <p>
          Most programming languages use zero-based indexing. This means the
          first element is at index 0, the second at index 1, and so on. If an
          array contains n elements, the valid index range is 0 to n − 1.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Example</h2>
        <p>Given the array:</p>
        <p>[12, 45, 77, 30]</p>
        <p>Indexes map to values like this:</p>

        <ul className="list-disc ml-6 space-y-1">
          <li>0 → 12</li>
          <li>1 → 45</li>
          <li>2 → 77</li>
          <li>3 → 30</li>
        </ul>

        <h2 className="text-xl font-semibold text-purple-200">Why Indexing Is Fast</h2>
        <p>
          Arrays store elements in contiguous memory. Because of this, the
          computer can calculate the exact location of any element instantly,
          making indexing an O(1) constant-time operation.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Out-of-Range Indexes</h2>
        <p>
          If you attempt to access an index outside the valid range, the program
          will throw an error. Always make sure the index is within the array’s
          bounds.
        </p>
      </>
    </LessonLayout>
  );
}
