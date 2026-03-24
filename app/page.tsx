import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

async function getPreviewMedia() {
  const folderPath = path.join(process.cwd(), 'public/images/gallery');
  if (!fs.existsSync(folderPath)) return [];
  const files = fs.readdirSync(folderPath);
  return files
    .filter(file => ['.jpg', '.jpeg', '.png', '.webp', '.mp4'].includes(path.extname(file).toLowerCase()))
    .slice(0, 6)
    .map(file => ({
      src: `/images/gallery/${file}`,
      type: ['.mp4', '.mov'].includes(path.extname(file).toLowerCase()) ? 'video' : 'image',
      alt: file.split('.')[0].replace(/-/g, ' ')
    }));
}

export default async function LandingPage() {
  const previewMedia = await getPreviewMedia();

  return (
    <main className="min-h-screen bg-white">
      {/* LOCAL BUSINESS SCHEMA - SEO NUCLEAR POWER */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": "Flatbush Painter",
            "image": "https://flatbushpainter.com/images/flatbush-painter-logo-brooklyn-ny.png",
            "description": "Professional interior painter specializing in the painting of interior walls, sheetrock repair, and flooring in Brooklyn.",
            "url": "https://flatbushpainter.com",
            "telephone": "+16467554264",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Brooklyn",
              "addressRegion": "NY",
              "postalCode": "11226"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.6409,
              "longitude": -73.9626
            },
            "areaServed": ["Flatbush", "East Flatbush", "Midwood", "Crown Heights", "Ditmas Park"]
          })
        }}
      />

      {/* NAV */}
      <nav className="border-b border-neutral-100 bg-white sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
             <div className="relative h-14 w-14 overflow-hidden rounded-lg">
              <Image 
                src="/images/flatbush-painter-logo-brooklyn-ny.png" 
                alt="Flatbush Painter Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div>
               <p className="text-sm font-black uppercase tracking-tighter text-neutral-950">Flatbush Painter</p>
               <p className="text-[10px] text-sky-700 font-bold uppercase tracking-widest leading-none">Brooklyn Original</p>
            </div>
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/gallery" className="text-sm font-black text-neutral-900 hover:text-sky-700 transition">Gallery</Link>
            <Link href="/contact" className="hidden sm:block text-sm font-black text-neutral-900 hover:text-sky-700 transition">Contact</Link>
            <a href="tel:+16467554264" className="bg-neutral-950 text-white px-5 py-3 rounded-full text-xs font-black hover:bg-sky-700 transition shadow-lg">Call TY</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-neutral-50 px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sky-700 font-black uppercase tracking-[0.2em] text-xs">Best in Brooklyn</span>
            <h1 className="mt-6 text-5xl font-black tracking-tight text-neutral-950 md:text-7xl leading-[1.05]">
              Professional Interior Painter <br />& <span className="text-sky-700">Floors.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-900 font-bold">
              High-quality painting of interior  walls, expert sheetrock repair, and professional floor installation. One expert team for your entire Brooklyn home transformation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-2xl bg-sky-700 px-8 py-4 text-sm font-black text-white shadow-xl hover:bg-sky-800 transition">Get Free Estimate</Link>
              <Link href="/gallery" className="rounded-2xl border-2 border-neutral-950 bg-white px-8 py-4 text-sm font-black text-neutral-950 hover:bg-neutral-50 transition">See Our Work</Link>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white">
            <Image src="/images/local-brooklyn-painter-providing-professional-interior-services.jpg" alt="Professional Interior Painter Brooklyn" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* FEATURED WORK PREVIEW */}
      <section className="py-24 px-6 mx-auto max-w-7xl border-t border-neutral-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-sky-700 font-black uppercase tracking-widest text-xs">Featured Results</p>
            <h2 className="text-4xl font-black text-neutral-950 mt-2">Expert Painting of Interior Spaces</h2>
          </div>
          <Link href="/gallery" className="text-sky-700 font-black hover:underline">View Full Gallery (40+) →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {previewMedia.map((item, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden rounded-3xl bg-neutral-100 group shadow-md">
              {item.type === 'image' ? (
                <Image src={item.src} alt={`${item.alt} - Flatbush Painter`} fill className="object-cover group-hover:scale-110 transition duration-700" />
              ) : (
                <video src={item.src} muted loop playsInline autoPlay className="h-full w-full object-cover group-hover:scale-110 transition duration-700" />
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export function Footer() {
  return (
    <footer className="py-20 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 grid gap-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-4 mb-8">
             <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-white p-1">
              <Image 
                src="/images/flatbush-painter-logo-brooklyn-ny.png" 
                alt="Flatbush Painter Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="font-black uppercase tracking-tighter text-2xl">Flatbush Painter</span>
          </div>
          <p className="text-neutral-400 font-medium leading-relaxed">
            Brooklyn's trusted professional interior painter. We dominate the market for painting of interior walls, sheetrock, and floor installation.
          </p>
        </div>
        <div>
          <h4 className="font-black mb-6 uppercase text-xs tracking-widest text-sky-500">Contact TY</h4>
          <p className="font-black text-3xl mb-2 text-white">(646) 755-4264</p>
          <p className="text-neutral-400 font-bold">djkoatz@gmail.com</p>
          <div className="mt-8 flex gap-4">
            <span className="text-2xl">📍 Flatbush, NY</span>
          </div>
        </div>
        <div>
          <h4 className="font-black mb-6 uppercase text-xs tracking-widest text-sky-500">Services</h4>
          <ul className="space-y-3 text-neutral-300 font-bold">
            <li>• Professional Interior Painter</li>
            <li>• Painting of Interior Walls</li>
            <li>• Expert Sheetrock Taping</li>
            <li>• Floor Installation & Sanding</li>
          </ul>
        </div>
      </div>
      <div className="mt-20 text-center border-t border-neutral-800 pt-10">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">
          Built by <a href="https://tywebstudio.com" target="_blank" className="text-sky-500 hover:underline">Tywebstudio.com</a>
        </p>
      </div>
    </footer>
  );
}