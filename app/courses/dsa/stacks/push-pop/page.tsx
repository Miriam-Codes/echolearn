import LessonLayout from "@/components/LessonLayout";

export default function PushPopPage() {
  return (
    <LessonLayout
      title="Push / Pop"
      lessonKey="stacks-push-pop"
      nextLesson="/courses/dsa/stacks/applications"
      previousLesson="/courses/dsa/stacks/what-is-a-stack"
      topicBanner="/images/banners/stacks-banner.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          Push and pop are the two fundamental operations that define how a
          stack behaves. Both operations work only at the top of the stack. Push
          adds a new element to the top, and pop removes the element currently
          at the top.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Push Operation</h2>
        <p>
          Pushing means placing a new value on top of the stack. The new element
          becomes the most recent item, and the previous top element moves just
          below it. Because stacks only allow adding at the top, the push
          operation is simple and efficient.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">How Push Works</h2>
        <p>
          When a value is pushed onto the stack, the stack grows upward. No
          shifting of elements is required, and no part of the structure besides
          the top is affected. This makes push very fast in most implementations.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Pop Operation</h2>
        <p>
          Popping means removing the element currently on top of the stack. Only
          the most recent element can be removed. After a pop, the element below
          the removed one becomes the new top of the stack.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">How Pop Works</h2>
        <p>
          During a pop, the top element is returned and then removed from the
          stack. Nothing else needs to shift. The operation is fast because the
          stack always knows which element is at the top.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Why Push and Pop Are Efficient</h2>
        <p>
          Both operations work only at a single fixed position: the top. Because
          no other elements are moved or examined, push and pop are both quick
          and predictable, making stacks ideal for tasks that require controlled
          order and fast access to the most recent value.
        </p>
      </>
    </LessonLayout>
  );
}

