import Link from "next/link";

export function TopicCard({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={`/learn/${id}`}
      className="block p-4 rounded-md border bg-white hover:bg-gray-100 transition shadow-sm"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}
