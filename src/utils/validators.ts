export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export const validateTeachRequest = (body: any): void => {
  if (!body.userId || typeof body.userId !== 'string') {
    throw new ValidationError('userId is required and must be a string');
  }
  
  if (!body.topic || typeof body.topic !== 'string' || body.topic.trim().length === 0) {
    throw new ValidationError('topic is required and must be a non-empty string');
  }
  
  if (!body.explanation || typeof body.explanation !== 'string' || body.explanation.trim().length === 0) {
    throw new ValidationError('explanation is required and must be a non-empty string');
  }
  
  if (body.mode && !['live', 'teacher-check'].includes(body.mode)) {
    throw new ValidationError('mode must be either "live" or "teacher-check"');
  }
};

export const validateInitCloneRequest = (body: any): void => {
  if (!body.userId || typeof body.userId !== 'string') {
    throw new ValidationError('userId is required and must be a string');
  }
  
  if (body.initialPersonality && typeof body.initialPersonality !== 'object') {
    throw new ValidationError('initialPersonality must be an object if provided');
  }
};