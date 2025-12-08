import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "VIET",
  description:
    "Viet Pham blends creativity and technology to shape impactful digital experiences for the next generation.",
  authors: [{ name: "Viet Pham" }],
  openGraph: {
    title: "VIET",
    description:
      "Shaping impactful digital experiences at the intersection of creativity, business, and technology.",
    url: "https://about.viet.dk",
    siteName: "VIET",
    images: [
      {
        url: "https://about.viet.dk/media/og-image.png",
        width: 1200,
        height: 644,
        alt: "VIET Technology Leader",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#054D95",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#054D95" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overscroll-none`}
      >
        <CurtainReveal />
        {children}
        <Analytics />
      </body>
    </html>
  );
}