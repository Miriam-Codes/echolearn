import { cloneService } from '../services/clone.service';
import { validateInitCloneRequest } from '../utils/validators';
import { InitCloneRequest, InitCloneResponse } from '../models/types';

export const initCloneController = {
  async handleInitClone(body: any): Promise<InitCloneResponse> {
    // Validate request
    validateInitCloneRequest(body);

    const request: InitCloneRequest = {
      userId: body.userId,
      initialPersonality: body.initialPersonality
    };

    // Get or create clone
    const clone = await cloneService.getOrCreateClone(
      request.userId,
      request.initialPersonality
    );

    return {
      success: true,
      clone
    };
  }
};