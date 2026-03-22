import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Flatbush Painter | Interior Painting Services in Brooklyn, NY",
  description: "High-quality interior painting in Flatbush, East Flatbush, and Midwood. Specializing in bedrooms, living rooms, and apartment refreshes. Local, clean, and reliable.",
  keywords: ["Painter Flatbush", "Brooklyn Interior Painter", "Apartment Painting Brooklyn", "Painting Contractor 11226"],
  metadataBase: new URL('https://flatbushpainter.com'),
  openGraph: {
    title: "Flatbush Painter | Local Brooklyn Painting Services",
    description: "Expert painting for your Flatbush home or apartment.",
    url: "https://flatbushpainter.com",
    siteName: "Flatbush Painter",
    images: [{ url: '/logo.png', width: 800, height: 600 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}