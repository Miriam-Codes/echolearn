import { cloneService } from '../services/clone.service';
import { validateInitCloneRequest } from '../utils/validators';
import { InitCloneRequest, InitCloneResponse } from '../models/types';
import { randomUUID } from 'crypto';

export const initCloneController = {
  async handleInitClone(body: any): Promise<InitCloneResponse> {
    let userId = body.userId;
    
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(userId)) {
      userId = randomUUID();
      console.log(`Generated UUID for user: ${userId}`);
    }

    const request: InitCloneRequest = {
      userId: userId,
      initialPersonality: body.initialPersonality
    };

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