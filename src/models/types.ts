// src/models/types.ts
// Core type definitions for EchoLearn

export interface User {
  id: string;
  name: string | null;
  created_at: string;
}

export interface Clone {
  id: string;
  user_id: string;
  xp: number;
  level: number;
  stage: CloneStage;
  personality: Record<string, any>;
  updated_at: string;
}

export type CloneStage = 'rusty' | 'chrome' | 'neon' | 'quantum';

export interface TeachingSession {
  id: string;
  user_id: string;
  topic: string;
  explanation: string;
  ai_feedback: AIFeedback | null;
  xp_gained: number;
  created_at: string;
}

export interface AIFeedback {
  reaction: string;
  summary: string;
  clarity: number;
  confused: boolean;
  errors: string[];
}

// API Request/Response types
export interface InitCloneRequest {
  userId: string;
  initialPersonality?: Record<string, any>;
}

export interface InitCloneResponse {
  success: boolean;
  clone: Clone;
}

export interface TeachRequest {
  userId: string;
  topic: string;
  explanation: string;
  mode?: 'live' | 'teacher-check';
}

export interface TeachResponse {
  aiReaction: string;
  clarityScore: number;
  confusion: boolean;
  xpGained: number;
  newXpTotal: number;
  newStage: CloneStage;
  aiFeedback: AIFeedback;
}

export interface ProfileResponse {
  user: User;
  clone: Clone;
}

export interface XPLevel {
  level: number;
  stage: CloneStage;
  minXp: number;
  maxXp: number;
}