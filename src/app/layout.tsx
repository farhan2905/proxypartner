import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elevate Digital | Creative Digital Marketing Agency",
  description:
    "We build digital experiences that drive growth. Strategy, design, development, and marketing — all under one roof.",
  keywords: [
    "digital marketing",
    "web development",
    "brand identity",
    "AI solutions",
    "growth strategy",
    "creative agency",
  ],
  authors: [{ name: "Elevate Digital" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Elevate Digital | Creative Digital Marketing Agency",
    description: "We build digital experiences that drive growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
