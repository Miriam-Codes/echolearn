import { cloneRepo } from '../repositories/clone.repo';
import { userRepo } from '../repositories/user.repo';
import { Clone } from '../models/types';

export const cloneService = {
  /**
   * Get or create a clone for a user
   */
  async getOrCreateClone(userId: string, personality?: Record<string, any>): Promise<Clone> {
    // Ensure user exists
    let user = await userRepo.findById(userId);
    if (!user) {
      user = await userRepo.create(userId);
    }

    // Get or create clone
    let clone = await cloneRepo.findByUserId(userId);
    if (!clone) {
      clone = await cloneRepo.create(userId, personality);
    }

    return clone;
  },

  /**
   * Update clone XP and level
   */
  async updateCloneProgress(
    userId: string,
    newXP: number,
    newLevel: number,
    newStage: any
  ): Promise<Clone> {
    return cloneRepo.updateXP(userId, newXP, newLevel, newStage);
  }
};