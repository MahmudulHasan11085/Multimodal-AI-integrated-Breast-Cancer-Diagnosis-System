import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Multimodal AI Breast Cancer Diagnostic System",
  description: "Interactive demo site for the multimodal AI integrated breast cancer diagnosis project.",
  icons: {
    icon: "/file.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="p-4 bg-gray-100 dark:bg-gray-900">
          <nav className="flex gap-4 justify-center">
            <Link href="/">Home</Link>
            <Link href="/features">Features</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
