import type { Metadata } from "next";
import { Outfit, MuseoModerno } from "next/font/google";
import "./globals.scss";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const museoModerno = MuseoModerno({
  variable: "--font-museo-moderno",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next.js Tailwind Style Guide",
  description: "A comprehensive design system built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${museoModerno.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
