"use client";

import { useState } from "react";

export default function AISidePanel({
  open,
  onClose,
  mode,
  lessonKey,
}: {
  open: boolean;
  onClose: () => void;
  mode: "teacher" | "baby";
  lessonKey: string;
  cloneLevel: number;
}) {
  // Separate history states
  const [teacherMessages, setTeacherMessages] = useState<
    { role: "user" | "ai"; content: string }[]
  >([]);

  const [babyMessages, setBabyMessages] = useState<
    { role: "user" | "ai"; content: string }[]
  >([]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const isTeacher = mode === "teacher";

  // Avatars – replace with your own images
  const teacherAvatar = "/avatars/teacher.png"; // replace with your PNG
  const babyAvatar = "/avatars/baby.png";       // replace with your PNG

  const avatar = isTeacher ? teacherAvatar : babyAvatar;

  // choose the correct history + setter
  const messages = isTeacher ? teacherMessages : babyMessages;
  const setMessages = isTeacher ? setTeacherMessages : setBabyMessages;

  const intro = isTeacher
    ? "Hi! I'm your Teacher AI. Ask me anything about this lesson!"
    : "Hi! I'm your Baby AI. Teach me what you learned and I'll try to repeat it!";

  const starterPrompts = isTeacher
    ? [
        "Explain this concept again",
        "Give me an analogy",
        "Give me a real-world example",
      ]
    : [
        "Here’s what I learned…",
        "Let me explain this topic!",
        "Can you repeat what I told you?",
      ];

  // ----------- AI CALL ----------- //
  async function handleAI(message: string) {
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lessonKey,
        mode,
        message,
      }),
    });

    const data = await res.json();

    const finalText =
      data.ai || "Sorry, I couldn't generate a response.";

    setMessages((prev) => [...prev, { role: "ai", content: finalText }]);
    setLoading(false);
  }

  function send() {
    if (!input.trim()) return;

    const msg = input;

    setMessages((prev) => [...prev, { role: "user", content: msg }]);
    setInput("");

    handleAI(msg);
  }

  return (
    <div className="fixed inset-0 z-[999] flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="relative w-[420px] h-full bg-[#1a1a22] border-l border-pink-300/20 flex flex-col p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <img
              src={avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full border border-white/10"
            />
            <h2 className="font-pixelgrid text-2xl text-white">
              {isTeacher ? "Teacher AI" : "Baby AI"}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-pink-300 hover:text-pink-400 text-xl"
          >
            ✕
          </button>
        </div>

        <p className="text-gray-300 text-sm mb-4">{intro}</p>

        {/* Starter prompts */}
        <div className="space-y-2 mb-6">
          {starterPrompts.map((p, i) => (
            <button
              key={i}
              onClick={() => setInput(p)}
              className="w-full text-left px-3 py-2 bg-pink-400/10 border border-pink-300/20 rounded-lg text-pink-200 hover:bg-pink-400/20 transition"
            >
              + {p}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto bg-black/20 rounded-lg p-4 mb-4 border border-white/5">
          {messages.length === 0 ? (
            <p className="text-gray-500 text-sm">Start a chat.</p>
          ) : (
            messages.map((msg, i) => (
              <div key={i} className="mb-4 flex gap-3 items-start">
                {/* Avatar for AI messages */}
                {msg.role === "ai" ? (
                  <img
                    src={avatar}
                    alt="ai avatar"
                    className="w-8 h-8 rounded-full border border-white/10 mt-1"
                  />
                ) : (
                  <div className="w-8 h-8"></div>
                )}

                <div>
                  <div className="text-pink-300 text-xs mb-1">
                    {msg.role === "user"
                      ? "You"
                      : isTeacher
                      ? "Teacher AI"
                      : "Baby AI"}
                  </div>

                  <div className="bg-[#2a2335] p-3 rounded text-sm text-gray-200 whitespace-pre-line">
                    {msg.content}
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Typing indicator */}
          {loading && (
            <div className="flex items-center gap-2 text-pink-300 text-sm mt-2">
              <img
                src={avatar}
                className="w-6 h-6 rounded-full border border-white/10"
              />
              <span className="animate-pulse">Thinking…</span>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type something..."
            className="flex-1 bg-black/30 border border-white/10 text-gray-200 rounded-lg px-3 py-2 text-sm"
          />

          <button
            onClick={send}
            disabled={loading}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition disabled:opacity-50"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
