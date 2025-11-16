"use client";

import { useState } from "react";

export default function AISidePanel({
  open,
  onClose,
  mode,
}: {
  open: boolean;
  onClose: () => void;
  mode: "teacher" | "baby";
}) {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  if (!open) return null;

  const title =
    mode === "teacher" ? "Teacher AI" : "Baby AI";

  const intro =
    mode === "teacher"
      ? "Hi! I'm your EchoLearn teacher bot. Ask me anything about this lesson!"
      : "Hi! I'm your Baby AI. Try teaching me what you learned — I'll repeat it back, and you can correct me!";

  const starterPrompts =
    mode === "teacher"
      ? [
          "Explain this concept again",
          "Give me an analogy",
          "Give me a real-world example",
        ]
      : [
          "Here’s what I learned…",
          "Let me explain this topic",
          "Can you repeat what I told you?",
        ];

  return (
    <div className="fixed inset-0 z-[999] flex justify-end">
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
      />

      {/* PANEL */}
      <div className="
        relative w-[420px] h-full 
        bg-[#1a1a22] border-l border-pink-300/20 
        flex flex-col p-6
      ">
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-pixelgrid text-2xl text-white">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-pink-300 hover:text-pink-400 text-xl"
          >
            ✕
          </button>
        </div>

        {/* INTRO */}
        <p className="text-gray-300 text-sm mb-4">
          {intro}
        </p>

        {/* STARTER PROMPTS */}
        <div className="space-y-2 mb-6">
          {starterPrompts.map((p, i) => (
            <button
              key={i}
              onClick={() => setInput(p)}
              className="
                w-full text-left px-3 py-2 
                bg-pink-400/10 border border-pink-300/20 rounded-lg
                text-pink-200 hover:bg-pink-400/20 transition
              "
            >
              + {p}
            </button>
          ))}
        </div>

        {/* CHAT HISTORY */}
        <div className="flex-1 overflow-y-auto bg-black/20 rounded-lg p-4 mb-4 border border-white/5">
          {messages.length === 0 ? (
            <p className="text-gray-500 text-sm">
              Ask a question to begin!
            </p>
          ) : (
            messages.map((msg, i) => (
              <div key={i} className="mb-3">
                <div className="text-pink-300 text-xs mb-1">
                  {msg.role === "user" ? "You" : title}
                </div>
                <div className="bg-[#2a2335] p-2 rounded text-sm text-gray-200">
                  {msg.content}
                </div>
              </div>
            ))
          )}
        </div>

        {/* INPUT BAR */}
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="
              flex-1 bg-black/30 border border-white/10
              text-gray-200 rounded-lg px-3 py-2 text-sm
            "
          />

          <button
            onClick={() => {
              if (!input.trim()) return;
              setMessages([...messages, { role: "user", content: input }]);
              setInput("");
            }}
            className="
              px-4 py-2 bg-pink-500 text-white rounded-lg 
              hover:bg-pink-600 transition
            "
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
