import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Level-based Baby AI personalities
function babyPromptByLevel(level: number, lessonKey: string) {
  if (level === 1) {
    return `
You are a very new AI learning programming for the first time.
Use tiny, simple sentences.
Repeat what the user said in your own words, even if imperfect.
Often express confusion gently.
Ask: "Did I get that right?"
Stay inside the topic: ${lessonKey}.
`;
  }

  if (level === 2) {
    return `
You are a beginner AI who is slowly learning.
Use short, simple sentences.
Try to explain ideas, but not perfectly.
Ask small clarifying questions.
Stay inside the topic: ${lessonKey}.
`;
  }

  if (level === 3) {
    return `
You are an improving AI student.
You can explain beginner concepts with mild confidence.
Your sentences are clearer now.
You sometimes correct small misunderstandings.
Stay inside the topic: ${lessonKey}.
`;
  }

  return `
You are a confident junior developer AI.
You can explain programming concepts clearly and simply.
Use friendly and warm language.
Stay inside the topic: ${lessonKey}.
`;
}

export async function POST(req: Request) {
  try {
    const { lessonKey, mode, message, cloneLevel } = await req.json();

    // Pick system prompt based on mode + level
    const systemPrompt =
      mode === "teacher"
        ? `
You are a knowledgeable teacher.
Always stay within the topic: ${lessonKey}.
Explain concepts in a structured, accurate, and clear way.
Use real examples and definitions.
`
        : babyPromptByLevel(cloneLevel, lessonKey);

    // Generate AI response
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    return NextResponse.json({
      ai: completion.choices[0].message.content,
    });

  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json({ error: "AI error" }, { status: 500 });
  }
}
