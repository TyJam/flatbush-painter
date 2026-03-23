import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { Footer } from '../page';

export const metadata = {
  title: "Project Portfolio | Flatbush Painter Brooklyn",
  description: "View real results from Brooklyn's top professional interior painter. High-quality painting of interior spaces, sheetrock finishing, and floor installation gallery.",
};

async function getAllMedia() {
  const folderPath = path.join(process.cwd(), 'public/images/gallery');
  if (!fs.existsSync(folderPath)) return [];
  const files = fs.readdirSync(folderPath);
  return files
    .filter(file => ['.jpg', '.jpeg', '.png', '.webp', '.mp4'].includes(path.extname(file).toLowerCase()))
    .map(file => {
      // SEO: This turns "professional-interior-painter.jpg" into "Professional Interior Painter"
      const seoAltText = file
        .split('.')[0]
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());

      return {
        src: `/images/gallery/${file}`,
        type: ['.mp4', '.mov', '.webm'].includes(path.extname(file).toLowerCase()) ? 'video' : 'image',
        alt: seoAltText
      };
    });
}

export default async function GalleryPage() {
  const mediaItems = await getAllMedia();

  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b border-neutral-100 bg-white sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
             <div className="relative h-12 w-12 overflow-hidden rounded-lg">
              <Image src="/images/flatbush-painter-logo-brooklyn-ny.png" alt="Flatbush Painter Logo" fill className="object-contain" />
            </div>
            <p className="text-sm font-black uppercase tracking-tighter text-neutral-950">Flatbush Painter</p>
          </Link>
          <Link href="/" className="text-sm font-black text-sky-700 hover:underline">← Home</Link>
        </div>
      </nav>

      <section className="py-20 px-6 mx-auto max-w-7xl">
        <h1 className="text-5xl font-black tracking-tight text-neutral-950 mb-6">Work Portfolio</h1>
        <p className="text-neutral-900 font-bold text-xl max-w-2xl mb-16">
          Actual results of professional interior painter jobs, sheetrock repair, and flooring projects across Brooklyn.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, idx) => (
            <div key={idx} className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-neutral-100 shadow-xl border border-neutral-100">
              {item.type === 'image' ? (
                <Image 
                  src={item.src} 
                  alt={`${item.alt} - Flatbush Painter Brooklyn`} // This is your SEO Alt Tag
                  fill 
                  className="object-cover transition duration-700 group-hover:scale-110" 
                />
              ) : (
                <video src={item.src} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" muted loop playsInline autoPlay />
              )}
              
              {/* DARK OVERLAY FOR READABILITY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <p className="text-white font-black text-xl capitalize leading-tight mb-1">{item.alt}</p>
                  <p className="text-sky-400 text-xs font-black uppercase tracking-[0.2em]">Flatbush Original</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}