import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EchoLearn",
  description: "Teach to learn — an interactive AI learning experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1A0A1F] text-gray-200 antialiased font-body">
        {/* HEADER */}
        <header className="w-full border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur font-pixelgrid">
          <nav className="w-full flex items-center justify-between py-4 px-6">

            {/* LEFT SIDE — LOGO */}
            <Link href="/" className="flex items-center gap-2 group">
            <img
            src="/icons/robot-girly.png"
            alt="EchoLearn Logo"
            className="w-7 h-7 image-pixelated"
            style={{ imageRendering: "pixelated" }}
            />
            
            <span className="text-2xl text-white font-pixelgrid group-hover:text-pink-300 transition">
              EchoLearn
              </span>
          </Link>

           {/* RIGHT SIDE — NAV LINKS */}
            <div className="flex items-center gap-6 text-sm">
              <Link href="/" className="hover:text-pink-300 transition">Home</Link>
              <Link href="/topics" className="hover:text-pink-300 transition">Topics</Link>
              <Link href="/about" className="hover:text-pink-300 transition">About</Link>
            </div>
          </nav>
        </header>

        {/* MAIN CONTENT  */}
        {children}

        {/* FOOTER */}
        <footer className="w-full border-t border-white/10 py-6 text-center text-sm text-gray-500 font-pixelgrid">
          © {new Date().getFullYear()} EchoLearn
        </footer>

      </body>
    </html>
  );
}
