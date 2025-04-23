import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CurtainReveal } from "@/components/animations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viet Pham – Digital Storyteller & Tech Entrepreneur",
  description: "Viet Pham blends creativity and technology to shape impactful digital experiences for the next generation.",
  authors: [{ name: "Viet Pham" }],
  openGraph: {
    title: "Viet Pham – Digital Storyteller & Tech Entrepreneur",
    description: "Shaping impactful digital experiences at the intersection of creativity, business, and technology.",
    url: "https://viet.dk",
    siteName: "Viet Pham",
    images: [
      {
        url: "https://viet.dk/media/og-image.png",
        width: 1200,
        height: 644,
        alt: "From Ideas to Impact Build Your Future with Viet Pham",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

// Move themeColor to the viewport export
export const viewport = {
  themeColor: "#054D95", // Your background color
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add this meta tag for Safari */}
        <meta name="theme-color" content="#054D95" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overscroll-none`}
      >
        <CurtainReveal />
        {children}
      </body>
    </html>
  );
}
