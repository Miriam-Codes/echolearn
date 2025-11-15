import React from "react";

export default function ProgressBar({ xp }: { xp: number }) {
  const level = xp < 34 ? "Baby" : xp < 67 ? "Learner" : "Evolved";
  const color = xp < 34 ? "bg-sky-400" : xp < 67 ? "bg-emerald-500" : "bg-purple-600";

  return (
    <div className="space-y-2">
      <div className="w-full bg-gray-200 rounded h-3">
        <div className={`h-3 rounded ${color}`} style={{ width: `${Math.min(xp, 100)}%` }} />
      </div>
      <div className="text-sm text-gray-700">XP: {xp} / 100 · Level: {level}</div>
    </div>
  );
}
