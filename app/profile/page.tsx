"use client";

import { useState, useEffect } from "react";

const avatarOptions = [
  "/avatars/default.png",
  "/avatars/pink-bot.png",
  "/avatars/flower-girl.png",
  "/avatars/coding-cat.png",
  "/avatars/star-witch.png",
];

export default function ProfilePage() {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const current = localStorage.getItem("userAvatar");
    if (current) setSelected(current);
  }, []);

  function chooseAvatar(src: string) {
    setSelected(src);
    localStorage.setItem("userAvatar", src);
  }

  return (
    <div className="min-h-screen bg-[#070511] text-white p-10">
      <h1 className="font-pixelgrid text-4xl mb-8">Choose Your Avatar</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {avatarOptions.map((src) => (
          <button
            key={src}
            onClick={() => chooseAvatar(src)}
            className={`p-3 rounded-xl border transition ${
              selected === src
                ? "border-pink-400 bg-pink-400/20"
                : "border-white/20 hover:bg-white/10"
            }`}
          >
            <img
              src={src}
              className="w-full h-auto rounded-lg"
              style={{ imageRendering: "pixelated" }}
              alt="avatar option"
            />
          </button>
        ))}
      </div>

      <p className="text-pink-300 mt-8 text-lg">
        Your avatar updates automatically everywhere ♥
      </p>
    </div>
  );
}
