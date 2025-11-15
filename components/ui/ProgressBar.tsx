export function ProgressBar({
  value,
  max,
}: {
  value: number;
  max: number;
}) {
  const percentage = Math.min(100, (value / max) * 100);

  return (
    <div className="w-full bg-gray-200 h-4 rounded-md overflow-hidden">
      <div
        className="bg-blue-600 h-full transition-all"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
