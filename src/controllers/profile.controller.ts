import { userRepo } from '../repositories/user.repo';
import { cloneRepo } from '../repositories/clone.repo';
import { ProfileResponse } from '../models/types';

export class ProfileControllerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ProfileControllerError';
  }
}

export const profileController = {
  async getProfile(userId: string): Promise<ProfileResponse> {
    if (!userId || typeof userId !== 'string') {
      throw new ProfileControllerError('userId is required');
    }

    // Get user
    const user = await userRepo.findById(userId);
    if (!user) {
      throw new ProfileControllerError('User not found');
    }

    // Get clone
    const clone = await cloneRepo.findByUserId(userId);
    if (!clone) {
      throw new ProfileControllerError('Clone not found. Please initialize clone first.');
    }

    return { user, clone };
  }
};
