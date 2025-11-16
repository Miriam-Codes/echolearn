import { supabase } from '@/lib/supabaseClient';
import { User } from '../models/types';

export const userRepo = {
  async findById(userId: string): Promise<User | null> {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') return null; // Not found
      throw error;
    }
    
    return data;
  },

  async create(userId: string, name?: string): Promise<User> {
    const { data, error } = await supabase
      .from('users')
      .insert({ id: userId, name: name || null })
      .select()
      .single();
    
    if (error) {
      if (error.code === '23505') {
        return this.findById(userId) as Promise<User>;
      }
      throw error;
    }
    return data;
  },

  async upsert(userId: string, name?: string): Promise<User> {
    const { data, error } = await supabase
      .from('users')
      .upsert({ id: userId, name: name || null }, { onConflict: 'id' })
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};