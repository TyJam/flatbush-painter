import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Professional Interior Painter Brooklyn | Painting of Interior, Sheetrock & Floors",
  description: "Flatbush Painter: The expert choice for professional interior painter services in Brooklyn. Specialized in high-quality painting of interior walls, sheetrock repair, and professional floor installation.",
  keywords: [
    "professional interior painter", 
    "painting of interior", 
    "painting in interior", 
    "sheetrock repair Brooklyn", 
    "floor installation Brooklyn", 
    "Flatbush painter", 
    "Brooklyn drywall repair"
  ],
  metadataBase: new URL('https://flatbushpainter.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: "Professional Interior Painter, Sheetrock & Floors | Flatbush, Brooklyn",
    description: "Expert painting of interior walls, sheetrock finishing, and hardwood floor services in Brooklyn.",
    url: "https://flatbushpainter.com",
    siteName: "Flatbush Painter",
    images: [{ url: '/images/flatbush-painter-logo-brooklyn-ny.png', width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}>
        {children}
      </body>
    </html>
  );
}