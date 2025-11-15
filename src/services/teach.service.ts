import { aiService } from './ai.service';
import { cloneService } from './clone.service';
import { sessionRepo } from '../repositories/session.repo';
import { cloneRepo } from '../repositories/clone.repo';
import { calculateLevel, calculateXPGain } from '../utils/xp.utils';
import { TeachResponse } from '../models/types';

export class TeachServiceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TeachServiceError';
  }
}

export const teachService = {
  /**
   * Main teaching flow: analyze explanation, award XP, update clone
   */
  async processTeaching(
    userId: string,
    topic: string,
    explanation: string,
    mode?: 'live' | 'teacher-check'
  ): Promise<TeachResponse> {
    try {
      // 1. Get clone (create if doesn't exist)
      const clone = await cloneService.getOrCreateClone(userId);

      // 2. Get recent sessions for context
      const recentSessions = await sessionRepo.findRecentByTopic(userId, topic, 2);
      const context = aiService.buildContextFromSessions(recentSessions);

      // 3. Analyze explanation with AI
      const aiFeedback = await aiService.analyzeExplanation(topic, explanation, context);

      // 4. Calculate XP gained
      const xpGained = calculateXPGain(aiFeedback.clarity);

      // 5. Update clone progress
      const newXpTotal = clone.xp + xpGained;
      const { level: newLevel, stage: newStage } = calculateLevel(newXpTotal);

      const updatedClone = await cloneService.updateCloneProgress(
        userId,
        newXpTotal,
        newLevel,
        newStage
      );

      // 6. Save teaching session
      await sessionRepo.create(userId, topic, explanation, aiFeedback, xpGained);

      // 7. Return response
      return {
        aiReaction: aiFeedback.reaction,
        clarityScore: aiFeedback.clarity,
        confusion: aiFeedback.confused,
        xpGained,
        newXpTotal,
        newStage,
        aiFeedback
      };

    } catch (error) {
      console.error('[Teach Service] Error:', error);
      
      if (error instanceof Error) {
        throw new TeachServiceError(`Failed to process teaching: ${error.message}`);
      }
      
      throw new TeachServiceError('Failed to process teaching');
    }
  },

  /**
   * Get teaching history for a user
   */
  async getTeachingHistory(userId: string, limit = 10) {
    return sessionRepo.findByUserId(userId, limit);
  }
};