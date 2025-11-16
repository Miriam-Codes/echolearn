import LessonLayout from "@/components/LessonLayout";

export default function WhatIsArrayLesson() {
  return (
    <LessonLayout
      title="What Is an Array?"
      lessonKey="arrays-what-is-an-array"
      topicBanner="/topics/arrays/arrays.png"
      nextLesson="/courses/dsa/arrays/indexing"
    >
      <p>
        An array is a data structure that stores multiple values in a single
        variable. Each value is stored at a numbered position called an index.
      </p>

      <p>
        Arrays are useful when you need fast access to items by position, and
        they keep related data grouped neatly in memory.
      </p>

      <div className="bg-[#1a1a22] border border-white/10 rounded-lg p-4 text-sm">
        <pre>
{`int numbers[] = {10, 20, 30, 40};
System.out.println(numbers[2]); // Output: 30`}
        </pre>
      </div>
    </LessonLayout>
  );
}
