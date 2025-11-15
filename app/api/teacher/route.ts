import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// Simple topic-to-description mapping
const topicPrompts: Record<string, string> = {
  arrays:
    "Explain Arrays in a simple, beginner-friendly way. Include an example of indexing and traversal.",
  stacks:
    "Explain Stacks (LIFO) simply. Include basic operations: push, pop, peek. Give one real-life analogy.",
  graphs:
    "Explain Graphs in simple terms. Describe nodes, edges, and give an example like a social network.",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { topic } = body;

    if (!topic || !(topic in topicPrompts)) {
      return NextResponse.json(
        { error: "Invalid or missing topic" },
        { status: 400 }
      );
    }

    // Ask OpenAI to generate a short lesson
    const prompt = `
You are an AI teacher. Provide a short, clear, beginner-friendly lesson.
Topic: ${topic}
Instruction: ${topicPrompts[topic]}
Keep the explanation under 180 words. Use simple examples.
    `;

    const completion = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
    });

    const lesson = completion.output_text;

    return NextResponse.json({ lesson });
  } catch (err) {
    console.error("Teacher API Error:", err);
    return NextResponse.json(
      { error: "Failed to generate lesson" },
      { status: 500 }
    );
  }
}
