import "./globals.css";
import type { Metadata } from "next";

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
      <body className="bg-gray-50 text-gray-900 antialiased">
        <main className="max-w-3xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
