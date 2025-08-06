import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header"; // Header component'ini import et

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akorify - Müzik ve Akor Platformu", // Sayfa başlığını güncelledim
  description: "Gitar akorları, repertuarlar ve daha fazlası", // Açıklamayı güncelledim
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        <div className="relative flex min-h-screen flex-col bg-background">
          <Header /> {/* Header component'ini burada kullan */}
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
