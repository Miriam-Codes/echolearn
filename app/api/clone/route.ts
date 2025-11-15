import { NextResponse } from "next/server";
import OpenAI from "openai";
import { getCloneProgress, updateCloneProgress } from "@/lib/supabase";
import { calculateLevel } from "@/lib/utils/xp";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { explanation, topic } = body;

    if (!explanation || !topic) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // 1. Load current XP + level from Supabase
    const clone = await getCloneProgress();
    const currentXp = clone.total_xp || 0;

    // 2. Ask OpenAI to evaluate the explanation
    const prompt = `
Evaluate how clearly this explanation teaches the topic.
Topic: ${topic}

Explanation:
"${explanation}"

Provide a JSON response:
{
  "reaction": "your short reaction",
  "xp": number,
  "clarity": number
}
    `;

    const completion = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
    });

    const text = completion.output_text;

    let evaluation;
    try {
      evaluation = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { error: "AI returned invalid JSON.", raw: text },
        { status: 500 }
      );
    }

    const xpEarned = evaluation.xp ?? 0;

    // 3. Add XP
    const newTotalXp = currentXp + xpEarned;

    // 4. Calculate new level
    const newLevel = calculateLevel(newTotalXp);

    // 5. Save XP + level back to Supabase
    await updateCloneProgress(newTotalXp, newLevel);

    // 6. Return all data to frontend
    return NextResponse.json({
      reaction: evaluation.reaction,
      xpAwarded: xpEarned,
      clarity: evaluation.clarity,
      totalXp: newTotalXp,
      newLevel,
    });

  } catch (err) {
    console.error("Clone API Error:", err);
    return NextResponse.json(
      { error: "Failed to evaluate explanation" },
      { status: 500 }
    );
  }
}
