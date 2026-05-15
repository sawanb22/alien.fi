import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionLazyRoot } from "./MotionLazyRoot";
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
  title: "Alien.fi",
  description: "Alien.fi — design system & Next shell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="stylesheet" href="/colors_and_type.css" />
      </head>
      <body className="af-page">
        <MotionLazyRoot>{children}</MotionLazyRoot>
      </body>
    </html>
  );
}
