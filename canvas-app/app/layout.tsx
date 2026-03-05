import type { Metadata } from "next";
import "./globals.css";
import "tldraw/tldraw.css";

export const metadata: Metadata = {
  title: "Infinite Canvas",
  description: "Next.js + tldraw infinite canvas app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
