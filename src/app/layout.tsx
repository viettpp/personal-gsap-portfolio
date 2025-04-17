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
  title: "Viet Pham",
  description: "Inspiring the next gen of tech leaders",
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
