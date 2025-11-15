export function CloneReaction({
  reaction,
  xp,
  level,
}: {
  reaction: string;
  xp: number;
  level: number;
}) {
  return (
    <div className="space-y-2 p-4 border rounded-md bg-white shadow-sm">
      <p className="font-semibold">Clone Reaction:</p>
      <p>{reaction}</p>

      <p className="font-semibold">XP Earned:</p>
      <p>{xp}</p>

      <p className="font-semibold">New Level:</p>
      <p>{level}</p>
    </div>
  );
}
