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
  title: "Build and Bloom",
  description: "A beautiful design system with navy, coral, and sea foam colors",
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
