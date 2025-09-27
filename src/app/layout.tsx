import type { Metadata } from "next";
import { Fredoka, Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Playful rounded font for headings (similar to Boomerang's style)
const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Modern space-themed font for body text
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Futuristic font for special elements
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Boomerang Pakistan - Space-Themed Restaurant",
  description: "Out of this world burgers, cosmic fries, and galactic flavors! Experience dining in space at Boomerang Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${spaceGrotesk.variable} ${orbitron.variable} antialiased min-h-screen flex flex-col bg-background text-foreground font-[family-name:var(--font-space-grotesk)]`}
      >
        <Header />
        <main className="flex-1 pt-18">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
