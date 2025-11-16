import LessonLayout from "@/components/LessonLayout";

export default function WhatIsAStackPage() {
  return (
    <LessonLayout
      title="What Is a Stack?"
      lessonKey="stacks-what-is-a-stack"
      nextLesson="/courses/dsa/stacks/push-pop"
      previousLesson="/courses/dsa/arrays/operations"
      topicBanner="/images/banners/stacks-banner.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          A stack is a simple data structure that stores items in a specific
          order. It follows the rule known as Last In, First Out, meaning the
          most recently added item is always the first one to be removed. This
          behavior is similar to stacking objects on top of each other.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">LIFO Principle</h2>
        <p>
          LIFO stands for Last In, First Out. When you add an item to a stack,
          it is placed at the top. When you remove an item, the top element is
          always the one that leaves first. You cannot remove items from the
          middle or bottom of the stack.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Real-World Analogy</h2>
        <p>
          A stack works like a stack of books. You place books on top of each
          other, and when you want to remove a book, you take the one on the
          very top first. You never pull a book out from the bottom because it
          would cause everything above it to fall.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Core Operations</h2>
        <p>
          Stacks mainly support two essential operations. Push adds an item to
          the top of the stack. Pop removes the item currently sitting at the
          top. These two operations define how stacks behave and are the basis
          for many algorithms that rely on temporary storage or reversal of
          order.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">When Stacks Are Useful</h2>
        <p>
          Stacks are used when actions must be reversed or undone in the exact
          opposite order they happened. Common examples include undo systems,
          backtracking algorithms, and storing the order of function calls
          during program execution.
        </p>
      </>
    </LessonLayout>
  );
}

