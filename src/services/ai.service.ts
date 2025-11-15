// src/services/ai.service.ts
import { openai } from '@/lib/openaiClient';
import { AIFeedback } from '../models/types';
import { CLONE_SYSTEM_PROMPT, CLONE_PROMPT } from '../utils/prompts';

export class AIServiceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AIServiceError';
  }
}

export const aiService = {
  /**
   * Analyzes a user's explanation using OpenAI
   * Returns structured feedback with clarity score
   */
  async analyzeExplanation(
    topic: string,
    explanation: string,
    previousContext?: string
  ): Promise<AIFeedback> {
    try {
      const userPrompt = CLONE_PROMPT(topic, explanation, previousContext);
      
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: CLONE_SYSTEM_PROMPT },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.2, // Low temperature for consistency
        max_tokens: 500,
        response_format: { type: 'json_object' } // Force JSON response
      });

      const content = response.choices[0]?.message?.content;
      
      if (!content) {
        throw new AIServiceError('No response from AI model');
      }

      // Parse the JSON response
      const parsed = JSON.parse(content);
      
      // Validate the response structure
      const feedback: AIFeedback = {
        reaction: parsed.reaction || 'Thanks for teaching me!',
        summary: parsed.summary || '',
        clarity: this.normalizeClarity(parsed.clarity),
        confused: Boolean(parsed.confused),
        errors: Array.isArray(parsed.errors) ? parsed.errors : []
      };

      // Debug logging if enabled
      if (process.env.DEBUG_AI === 'true') {
        console.log('[AI Service] Raw response:', content);
        console.log('[AI Service] Parsed feedback:', feedback);
      }

      return feedback;
      
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new AIServiceError('Failed to parse AI response as JSON');
      }
      
      if (error instanceof AIServiceError) {
        throw error;
      }
      
      console.error('[AI Service] Error:', error);
      throw new AIServiceError('Failed to analyze explanation');
    }
  },

  /**
   * Normalize clarity score to be between 0 and 1
   */
  normalizeClarity(clarity: any): number {
    const num = Number(clarity);
    if (isNaN(num)) return 0.5; // Default to middle if invalid
    return Math.max(0, Math.min(1, num));
  },

  /**
   * Build context string from previous teaching sessions
   */
  buildContextFromSessions(sessions: any[]): string {
    if (!sessions || sessions.length === 0) return '';
    
    const contextParts = sessions
      .slice(0, 2) // Use last 2 sessions for context
      .map(s => `Previously explained "${s.topic}": ${s.explanation.substring(0, 100)}...`)
      .join('\n');
    
    return contextParts;
  }
};