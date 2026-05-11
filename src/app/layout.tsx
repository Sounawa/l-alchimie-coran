import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Le Coran du Miroir",
  description: "Le Coran ne se lit pas — il se contemple. Chaque verset est un miroir qui révèle une couche de ton âme.",
  keywords: ["Coran", "Quran", "Miroir", "Contemplation", "Méditation", "Spiritualité", "Islam"],
  authors: [{ name: "Le Coran du Miroir" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Le Coran du Miroir",
    description: "Le Coran ne se lit pas — il se contemple. Chaque verset est un miroir qui révèle une couche de ton âme.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Coran du Miroir",
    description: "Le Coran ne se lit pas — il se contemple.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        {/* Google Fonts for Arabic and title fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
