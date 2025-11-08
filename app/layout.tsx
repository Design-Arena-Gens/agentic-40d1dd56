import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Nova Spectrum — Digital Portfolio",
  description: "Immersive 3D portfolio experience for a visionary graphic designer.",
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    title: "Nova Spectrum — Digital Portfolio",
    description: "Immersive 3D portfolio experience for a visionary graphic designer.",
    url: "https://agentic-40d1dd56.vercel.app",
    siteName: "Nova Spectrum",
    images: [
      {
        url: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Nova Spectrum Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
