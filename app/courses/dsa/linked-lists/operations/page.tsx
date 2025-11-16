import LessonLayout from "@/components/LessonLayout";

export default function LinkedListOperationsPage() {
  return (
    <LessonLayout
      title="Insertion / Deletion"
      lessonKey="linked-lists-operations"
      nextLesson="/courses/dsa/trees/binary"
      previousLesson="/courses/dsa/linked-lists/doubly"
      topicBanner="/topics/linked-lists/linked-lists.png"
    >
      <>
        <h2 className="text-xl font-semibold text-purple-200">Overview</h2>
        <p>
          Insertion and deletion in linked lists are fundamentally different from
          arrays. Instead of shifting elements, you update pointers to connect
          or disconnect nodes. This makes these operations efficient in many cases.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Insertion at the Beginning</h2>
        <p>
          To insert at the head, create a new node, set its next pointer to the
          current head, and update the head to point to the new node. This
          operation is O(1) and very fast, unlike arrays which require shifting.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Insertion at a Specific Position</h2>
        <p>
          To insert after a given node, create a new node, set its next pointer
          to the target's next node, then update the target's next pointer to
          point to the new node. You must traverse to find the insertion point
          first.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Deletion at the Beginning</h2>
        <p>
          To delete the head node, simply update the head pointer to point to
          the second node. The original first node can then be garbage collected.
          This is an O(1) operation.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Deletion at a Specific Position</h2>
        <p>
          To delete a node, you need access to the previous node. Update the
          previous node's next pointer to skip over the node being deleted. In
          doubly linked lists, this is easier since each node knows its previous
          node.
        </p>

        <h2 className="text-xl font-semibold text-purple-200">Why Linked Lists Excel</h2>
        <p>
          Linked lists shine when you need frequent insertions and deletions,
          especially at the beginning or when you already have a reference to
          the insertion or deletion point. They avoid the expensive shifting
          operations required in arrays.
        </p>
      </>
    </LessonLayout>
  );
}

