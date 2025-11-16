"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// All lesson keys from the DSA course
const ALL_LESSON_KEYS = [
  "arrays-what-is-an-array",
  "arrays-indexing",
  "arrays-memory-layout",
  "arrays-insert-delete",
  "stacks-what-is-a-stack",
  "stacks-push-pop",
  "stacks-applications",
  "queues-basics",
  "queues-circular",
  "queues-deque",
  "linked-lists-singly",
  "linked-lists-doubly",
  "linked-lists-operations",
  "trees-binary",
  "trees-traversals",
  "trees-bst",
  "graphs-representation",
  "graphs-bfs",
  "graphs-dfs",
  "sorting-bubble",
  "sorting-selection",
  "sorting-merge",
  "sorting-quick",
  "searching-linear",
  "searching-binary",
];

export default function DSACourseOverview() {
  const [completedCount, setCompletedCount] = useState(0);
  const totalLessons = ALL_LESSON_KEYS.length;

  useEffect(() => {
    // Check localStorage for completed lessons
    const count = ALL_LESSON_KEYS.filter((key) => {
      if (typeof window === "undefined") return false;
      return localStorage.getItem(key) === "completed";
    }).length;

    setCompletedCount(count);

    // Listen for storage changes (when lessons are completed)
    const handleStorageChange = () => {
      const newCount = ALL_LESSON_KEYS.filter((key) => {
        return localStorage.getItem(key) === "completed";
      }).length;
      setCompletedCount(newCount);
    };

    // Check for completion updates periodically (since storage event only fires for other tabs)
    const interval = setInterval(() => {
      handleStorageChange();
    }, 500); // Check every 500ms

    // Also check on focus in case localStorage was updated
    window.addEventListener("focus", handleStorageChange);

    return () => {
      clearInterval(interval);
      window.removeEventListener("focus", handleStorageChange);
    };
  }, []);

  const progressPercentage = totalLessons > 0 
    ? Math.round((completedCount / totalLessons) * 100) 
    : 0;

  return (
    <div className="w-full min-h-screen bg-[#0f0f15] text-white">

      {/* HERO */}
      <section className="relative w-full h-[320px] overflow-hidden">
        <Image
          src="/course-imgs/dsa.png"
          alt="DSA Banner"
          fill
          className="object-cover"
          style={{ imageRendering: "pixelated" }}
        />

        <div className="absolute bottom-8 left-8">
          <p className="text-xs opacity-80 uppercase tracking-wider">
            Course • Beginner Friendly
          </p>

          <h1 className="font-pixelgrid text-5xl mt-2">Introduction to DSA</h1>

          <p className="text-gray-200 max-w-xl mt-3 leading-relaxed">
            Learn the fundamental data structures and algorithms that power
            modern software. A warm and cozy introduction to efficient thinking.
          </p>
        </div>
      </section>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 p-6 mt-10">

        {/* LEFT CONTENT */}
        <div className="md:col-span-2 flex flex-col gap-10">

          {/* Arrays */}
          <CourseSection
            title="1. Arrays"
            basePath="/courses/dsa/arrays"
            lessons={[
              { name: "What Is an Array?", slug: "what-is-an-array" },
              { name: "Indexing", slug: "indexing" },
              { name: "Memory Layout", slug: "memory-layout" },
              { name: "Insert / Delete", slug: "operations" }
            ]}
          />

          {/* Stacks */}
          <CourseSection
            title="2. Stacks"
            basePath="/courses/dsa/stacks"
            lessons={[
              { name: "What Is a Stack?", slug: "what-is-a-stack" },
              { name: "Push / Pop", slug: "push-pop" },
              { name: "Applications", slug: "applications" }
            ]}
          />

          {/* Queues */}
          <CourseSection
            title="3. Queues"
            basePath="/courses/dsa/queues"
            lessons={[
              { name: "Queue Basics", slug: "basics" },
              { name: "Circular Queue", slug: "circular" },
              { name: "Deque", slug: "deque" }
            ]}
          />

          {/* Linked Lists */}
          <CourseSection
            title="4. Linked Lists"
            basePath="/courses/dsa/linked-lists"
            lessons={[
              { name: "Singly Linked List", slug: "singly" },
              { name: "Doubly Linked List", slug: "doubly" },
              { name: "Insertion / Deletion", slug: "operations" }
            ]}
          />

          {/* Trees */}
          <CourseSection
            title="5. Trees"
            basePath="/courses/dsa/trees"
            lessons={[
              { name: "Binary Trees", slug: "binary" },
              { name: "Tree Traversals", slug: "traversals" },
              { name: "Binary Search Tree", slug: "bst" }
            ]}
          />

          {/* Graphs */}
          <CourseSection
            title="6. Graphs"
            basePath="/courses/dsa/graphs"
            lessons={[
              { name: "Graph Representation", slug: "representation" },
              { name: "BFS", slug: "bfs" },
              { name: "DFS", slug: "dfs" }
            ]}
          />

          {/* Sorting Algorithms */}
          <CourseSection
            title="7. Sorting Algorithms"
            basePath="/courses/dsa/sorting"
            lessons={[
              { name: "Bubble Sort", slug: "bubble" },
              { name: "Selection Sort", slug: "selection" },
              { name: "Merge Sort", slug: "merge" },
              { name: "Quick Sort", slug: "quick" }
            ]}
          />

          {/* Searching */}
          <CourseSection
            title="8. Searching"
            basePath="/courses/dsa/searching"
            lessons={[
              { name: "Linear Search", slug: "linear" },
              { name: "Binary Search", slug: "binary" }
            ]}
          />

        </div>

        {/* SIDEBAR */}
        <div className="hidden md:flex flex-col gap-6">

          {/* Progress */}
          <div className="bg-[#1a1a22] border border-white/10 rounded-xl p-5">
            <h2 className="font-semibold text-lg">Course Progress</h2>
            <p className="text-gray-400 text-sm mt-2">
              {completedCount} / {totalLessons} Lessons
            </p>

            <div className="w-full h-2 bg-[#2f2f38] rounded-full mt-3">
              <div 
                className="h-2 bg-pink-500 rounded-full transition-all duration-300" 
                style={{ width: `${progressPercentage}%` }} 
              />
            </div>
          </div>

          <div className="bg-[#1a1a22] border border-white/10 rounded-xl p-5">
            <h2 className="font-semibold text-lg mb-2">Badges & Rewards</h2>
            <p className="text-gray-300 text-sm">
              Unlock badges as you complete each section ✨
            </p>
            <p className="text-gray-400 text-xs mt-2 italic">
              Coming soon...
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Reusable Section Component                       */
/* -------------------------------------------------------------------------- */

function CourseSection({
  title,
  lessons,
  basePath
}: {
  title: string;
  lessons: { name: string; slug: string }[];
  basePath: string;
}) {
  return (
    <div className="bg-[#1a1a22] rounded-xl border border-white/10 p-6">
      <h2 className="font-semibold text-2xl mb-4">{title}</h2>

      <ul className="flex flex-col gap-3">
        {lessons.map((lesson, i) => (
          <li
            key={i}
            className="bg-[#2b2b33] rounded-lg px-4 py-3 flex items-center justify-between hover:bg-[#3a3a44] transition"
          >
            <span className="text-gray-200">{lesson.name}</span>

            <a
              href={`${basePath}/${lesson.slug}`}
              className="text-sm bg-pink-500 px-4 py-1.5 rounded-lg text-white hover:bg-pink-600 transition"
            >
              Start
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
