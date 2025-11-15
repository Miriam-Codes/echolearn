import { teachService } from '../services/teach.service';
import { validateTeachRequest, ValidationError } from '../utils/validators';
import { TeachRequest, TeachResponse } from '../models/types';

export const teachController = {
  async handleTeach(body: any): Promise<TeachResponse> {
    // Validate request
    validateTeachRequest(body);

    const request: TeachRequest = {
      userId: body.userId,
      topic: body.topic.trim(),
      explanation: body.explanation.trim(),
      mode: body.mode
    };

    // Process teaching
    return teachService.processTeaching(
      request.userId,
      request.topic,
      request.explanation,
      request.mode
    );
  }
};