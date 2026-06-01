import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "AgentraX — Premium AI & Software Agency",
    template: "%s | AgentraX",
  },
  description:
    "Premium AI & software agency. We build high-performance web apps, AI-powered platforms, and scalable digital products that transform businesses.",
  keywords: [
    "AI agency", "software development", "web development", "Next.js",
    "digital transformation", "UI/UX design", "mobile apps",
  ],
  openGraph: {
    title: "AgentraX — Premium AI & Software Agency",
    description: "We build digital experiences that drive results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <CursorGlow />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
