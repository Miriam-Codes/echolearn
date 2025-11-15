import { CloneStage, XPLevel } from '../models/types';

const XP_LEVELS: XPLevel[] = [
  { level: 1, stage: 'rusty', minXp: 0, maxXp: 199 },
  { level: 2, stage: 'chrome', minXp: 200, maxXp: 499 },
  { level: 3, stage: 'neon', minXp: 500, maxXp: 999 },
  { level: 4, stage: 'quantum', minXp: 1000, maxXp: Infinity },
];

export const calculateLevel = (xp: number): { level: number; stage: CloneStage } => {
  const levelInfo = XP_LEVELS.find(l => xp >= l.minXp && xp <= l.maxXp);
  return levelInfo 
    ? { level: levelInfo.level, stage: levelInfo.stage }
    : { level: 4, stage: 'quantum' };
};

export const calculateXPGain = (clarity: number): number => {
  // Base XP is clarity percentage (0-100)
  const baseXP = Math.floor(clarity * 100);
  
  // Minimum 5 XP for participation
  return Math.max(baseXP, 5);
};

export const getNextLevelXP = (currentXP: number): number | null => {
  const currentLevel = XP_LEVELS.find(l => currentXP >= l.minXp && currentXP <= l.maxXp);
  if (!currentLevel) return null;
  
  const nextLevel = XP_LEVELS.find(l => l.level === currentLevel.level + 1);
  return nextLevel ? nextLevel.minXp : null;
};
