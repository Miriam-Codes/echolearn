"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeaderAvatar() {
  const [avatar, setAvatar] = useState("/avatars/default.png");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("userAvatar") : null;
    if (saved) setAvatar(saved);
  }, []);

  return (
    <Link href="/profile">
      <img
        src={avatar}
        alt="User avatar"
        className="
          w-10 h-10 rounded-full border border-pink-300 
          shadow-[0_0_12px_rgba(255,108,204,0.5)]
          hover:scale-110 transition cursor-pointer 
          bg-[#1A0A1F]
        "
        style={{ imageRendering: "pixelated" }}
      />
    </Link>
  );
}
