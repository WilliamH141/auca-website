import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auckland University Chess Association | AUCA",
  description: "The official chess club at the University of Auckland. Casual play, tournaments, and community events for all levels.",
  metadataBase: new URL("https://auca.nz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} antialiased text-slate-900`}>
        <Navbar />
        <main className="mt-4 min-h-screen space-y-16 px-4 pb-16 sm:px-6 lg:px-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
