import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error('Missing OPENAI_API_KEY environment variable');
}

export const openai = new OpenAI({
  apiKey: apiKey,
});

// Helper to check if OpenAI is properly configured
export const isOpenAIConfigured = (): boolean => {
  return !!apiKey;
};