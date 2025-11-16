import LessonLayout from "@/components/LessonLayout";

export default function StackApplicationsPage() {
  return (
    <LessonLayout
      title="Stack Applications"
      lessonKey="stacks-applications"
      nextLesson="/courses/dsa/queues/basics"
      previousLesson="/courses/dsa/stacks/push-pop"
      topicBanner="/topics/stacks/stacks.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          Stacks are used in many real-world applications where you need to reverse
          an order or undo recent actions. The LIFO principle makes stacks perfect
          for problems that require working with the most recent item first.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Undo/Redo Systems</h2>
        <p>
          Text editors and graphic design programs use stacks to implement undo
          and redo features. Each action you perform is pushed onto a stack. When
          you press undo, the most recent action is popped from the stack and
          reversed.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Expression Evaluation</h2>
        <p>
          Stacks help computers evaluate mathematical expressions. They convert
          infix notation (like 2 + 3) into postfix or prefix form, then use a
          stack to process operators in the correct order. This ensures
          parentheses and operator precedence are handled correctly.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Function Call Management</h2>
        <p>
          When a program calls a function, the computer uses a call stack to
          remember where to return. Each function call pushes its return address
          onto the stack. When the function finishes, it pops the address and
          returns control to that location.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Backtracking Algorithms</h2>
        <p>
          Problems like finding paths in mazes or solving puzzles use stacks for
          backtracking. The stack stores the current path. When you reach a
          dead end, you pop back to the previous decision point and try a
          different direction.
        </p>
      </>
    </LessonLayout>
  );
}

