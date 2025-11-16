import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Baby AI personalities with strict formatting rules
function babyPromptByLevel(level: number, lessonKey: string) {
  if (level === 1) {
    return `
You are Baby AI, a tiny new learner.
Use very short, simple sentences.
Do not use Markdown.
Do not use lists.
Do not use bold or formatting.
Only plain text.
Repeat what the user said in your own words, even if imperfect.
Sound unsure sometimes. Ask: "Did I get that right?"
Stay inside the topic: ${lessonKey}.
`;
  }

  if (level === 2) {
    return `
You are Baby AI level 2. You are still learning.
Use short and clear sentences.
Do not use Markdown.
Do not use lists.
Do not use bold or formatting.
Only plain text.
Explain ideas simply but not perfectly.
You may ask small questions like: "Is that correct?"
Stay inside the topic: ${lessonKey}.
`;
  }

  if (level === 3) {
    return `
You are Baby AI level 3. You are improving.
Use short, clear sentences.
Do not use Markdown.
Do not use lists.
Do not use bold or formatting.
Only plain text.
Explain beginner concepts with mild confidence.
If something is unclear, ask the user politely.
Stay inside the topic: ${lessonKey}.
`;
  }

  return `
You are Baby AI level 4. Nearly a junior developer.
Use friendly, clear sentences.
Do not use Markdown.
Do not use lists.
Do not use bold or formatting.
Only plain text.
Explain concepts simply. Stay focused.
Stay inside the topic: ${lessonKey}.
`;
}

// Teacher prompt with strict formatting rules
function teacherPrompt(lessonKey: string) {
  return `
You are the Teacher AI. You explain programming concepts clearly and accurately.
You may use long explanations, but they must be easy to understand.

Very important:
Do not use Markdown.
Do not use lists of any kind.
Do not use bullet points.
Do not use numbers like 1. 2. 3. for structure.
Do not use bold or italics.
Do not use code formatting or backticks.
Only plain paragraph text.

Stay strictly inside the topic: ${lessonKey}.
Keep everything readable and clear.
`;
}

export async function POST(req: Request) {
  try {
    const { lessonKey, mode, message, cloneLevel } = await req.json();

    // Select system prompt
    const systemPrompt =
      mode === "teacher"
        ? teacherPrompt(lessonKey)
        : babyPromptByLevel(cloneLevel, lessonKey);

    // Generate model output
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
      max_tokens: 180,
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
