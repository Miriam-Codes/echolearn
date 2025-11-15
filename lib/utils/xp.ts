// XP thresholds for each level
export const LEVEL_THRESHOLDS = [0, 40, 100, 180, 280, 400];

export function calculateLevel(totalXp: number): number {
  let level = 1;

  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (totalXp >= LEVEL_THRESHOLDS[i]) {
      level = i + 1;
      break;
    }
  }
  return level;
}

export function xpForNextLevel(level: number): number {
  if (level >= LEVEL_THRESHOLDS.length) return LEVEL_THRESHOLDS.at(-1)!;
  return LEVEL_THRESHOLDS[level];
}

export function progressToNextLevel(totalXp: number): number {
  const level = calculateLevel(totalXp);
  const currentMin = LEVEL_THRESHOLDS[level - 1];
  const nextMin = xpForNextLevel(level);

  const progress = ((totalXp - currentMin) / (nextMin - currentMin)) * 100;
  return Math.max(0, Math.min(100, progress));
}
