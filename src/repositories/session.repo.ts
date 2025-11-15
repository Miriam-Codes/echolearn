import { supabase } from '@/lib/supabaseClient';
import { TeachingSession, AIFeedback } from '../models/types';

export const sessionRepo = {
  async create(
    userId: string,
    topic: string,
    explanation: string,
    aiFeedback: AIFeedback,
    xpGained: number
  ): Promise<TeachingSession> {
    const { data, error } = await supabase
      .from('teaching_sessions')
      .insert({
        user_id: userId,
        topic,
        explanation,
        ai_feedback: aiFeedback,
        xp_gained: xpGained
      })
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async findByUserId(userId: string, limit = 10): Promise<TeachingSession[]> {
    const { data, error } = await supabase
      .from('teaching_sessions')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit);
    
    if (error) throw error;
    return data || [];
  },

  async findRecentByTopic(userId: string, topic: string, limit = 3): Promise<TeachingSession[]> {
    const { data, error } = await supabase
      .from('teaching_sessions')
      .select('*')
      .eq('user_id', userId)
      .ilike('topic', `%${topic}%`)
      .order('created_at', { ascending: false })
      .limit(limit);
    
    if (error) throw error;
    return data || [];
  }
};