import { supabase } from '@/lib/supabaseClient';
import { Clone, CloneStage } from '../models/types';

export const cloneRepo = {
  async findByUserId(userId: string): Promise<Clone | null> {
    const { data, error } = await supabase
      .from('clones')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') return null; // Not found
      throw error;
    }
    
    return data;
  },

  async create(userId: string, personality?: Record<string, any>): Promise<Clone> {
    const { data, error } = await supabase
      .from('clones')
      .insert({
        user_id: userId,
        xp: 0,
        level: 1,
        stage: 'rusty',
        personality: personality || {}
      })
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async updateXP(userId: string, newXP: number, newLevel: number, newStage: CloneStage): Promise<Clone> {
    const { data, error } = await supabase
      .from('clones')
      .update({
        xp: newXP,
        level: newLevel,
        stage: newStage,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', userId)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async updatePersonality(userId: string, personality: Record<string, any>): Promise<Clone> {
    const { data, error } = await supabase
      .from('clones')
      .update({ 
        personality,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', userId)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};