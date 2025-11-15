import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Fetch clone XP + level (single-row table)
export async function getCloneProgress() {
  const { data, error } = await supabase
    .from("clone_progress")
    .select("*")
    .eq("id", "default")
    .single();

  if (error) {
    console.error("Supabase fetch error:", error);
    return { total_xp: 0, level: 1 };
  }

  return data;
}

// Update XP + level after teaching
export async function updateCloneProgress(totalXp: number, level: number) {
  const { data, error } = await supabase
    .from("clone_progress")
    .update({
      total_xp: totalXp,
      level,
      updated_at: new Date().toISOString(),
    })
    .eq("id", "default")
    .select()
    .single();

  if (error) {
    console.error("Supabase update error:", error);
    throw error;
  }

  return data;
}
