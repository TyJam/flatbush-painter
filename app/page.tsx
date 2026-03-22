'use client';

import React, { useState } from 'react';
import Image from 'next/image';

/**
 * FLATBUSHPAINTER.COM 
 * Assets needed in /public folder:
 * - logo.png (Your business logo)
 * - job1.jpg, job2.jpg, job3.jpg, job4.jpg, job5.jpg, job6.jpg (Your work photos)
 */

const jobImages = [
  { src: '/job1.jpg', alt: 'Interior bedroom painting in Flatbush' },
  { src: '/job2.jpg', alt: 'Clean white walls living room refresh' },
  { src: '/job3.jpg', alt: 'Apartment move-out painting service' },
  { src: '/job4.jpg', alt: 'Modern accent wall installation' },
  { src: '/job5.jpg', alt: 'Detailed trim and baseboard painting' },
  { src: '/job6.jpg', alt: 'Kitchen wall repainting Brooklyn' },
];

export default function FlatbushPainterPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* ADVANCED LOCAL SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PaintingService",
            "name": "Flatbush Painter",
            "image": "https://flatbushpainter.com/logo.png",
            "description": "Professional interior painting in Flatbush, Brooklyn. We handle bedrooms, apartments, and move-out refreshes.",
            "url": "https://flatbushpainter.com",
            "telephone": "+17185551234",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Brooklyn",
              "addressRegion": "NY",
              "postalCode": "11226",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.6409,
              "longitude": -73.9626
            },
            "priceRange": "$$",
            "areaServed": ["Flatbush", "East Flatbush", "Midwood", "Ditmas Park", "Prospect Lefferts Gardens"]
          })
        }}
      />

      {/* --- HEADER / LOGO SECTION --- */}
      <nav className="border-b border-neutral-100 bg-white sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* THIS IS YOUR LOGO */}
            <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-sky-700">
              <Image 
                src="/images/flatbush-painter-logo.png"
                alt="Flatbush Painter Logo" 
                fill 
                className="object-contain p-1"
                onError={(e) => {
                   // Fallback if logo.png is missing
                   e.currentTarget.style.display = 'none';
                }}
              />
              {/* Fallback Initials if image doesn't load */}
              <div className="flex h-full w-full items-center justify-center text-white font-black text-xl">FP</div>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-tighter text-neutral-950">Flatbush Painter</p>
              <p className="text-[10px] font-bold text-sky-700 uppercase tracking-widest">Brooklyn, NY</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-bold">
            <a href="#work" className="hover:text-sky-700">Recent Work</a>
            <a href="#services" className="hover:text-sky-700">Services</a>
            <a href="tel:+17185551234" className="rounded-full bg-neutral-950 px-5 py-2.5 text-white hover:bg-neutral-800 transition">
              Call (718) 555-1234
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative bg-neutral-50 px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-5xl font-black tracking-tight text-neutral-950 md:text-7xl">
              Interior painting <br />made simple.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
              Clean lines, fresh walls, and reliable service. We help Flatbush residents and landlords transform their spaces without the typical contractor headaches.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#quote" className="rounded-2xl bg-sky-700 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-sky-800">
                Get a Free Estimate
              </a>
              <a href="#work" className="rounded-2xl border border-neutral-300 bg-white px-8 py-4 text-sm font-bold transition hover:border-sky-700">
                View Our Work
              </a>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white">
            <Image src="/job1.jpg" alt="Interior painting Brooklyn" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* --- WORK GALLERY (LIGHTBOX) --- */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <p className="text-xs font-black uppercase tracking-widest text-sky-700">Portfolio</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Recent painting jobs</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {jobImages.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-3xl bg-neutral-100"
              onClick={() => setSelectedImg(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-sky-900/20 opacity-0 transition group-hover:opacity-100 flex items-center justify-center">
                <div className="rounded-full bg-white/90 px-6 py-2 text-xs font-bold uppercase tracking-widest shadow-xl">Expand</div>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX POPUP */}
        {selectedImg && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative h-[85vh] w-full max-w-5xl">
              <Image src={selectedImg} alt="Work detail" fill className="object-contain" />
            </div>
            <button className="absolute top-10 right-10 text-white text-5xl">&times;</button>
          </div>
        )}
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="bg-neutral-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-black tracking-tight">Our Services</h2>
              <p className="mt-6 text-neutral-400">Professional results for small and medium interior jobs.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
              <ServiceCard title="Bedroom Painting" copy="Clean coverage and sharp cut lines for your private space." />
              <ServiceCard title="Apartment Refresh" copy="Perfect for move-ins, move-outs, or between tenants." />
              <ServiceCard title="Accent Walls" copy="Make a statement with a bold color on a single wall." />
              <ServiceCard title="Living Rooms" copy="The heart of the home deserves a professional finish." />
            </div>
          </div>
        </div>
      </section>

      {/* --- QUOTE FORM --- */}
      <section id="quote" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">Ready to refresh your space?</h2>
            <p className="mt-8 text-lg text-neutral-600 leading-8">
              Fill out the form and we'll get back to you with a clear estimate. No hidden fees. No stress. Just quality paint work.
            </p>
            <div className="mt-10 space-y-6">
              <ContactInfo icon="📍" text="Serving Flatbush & Nearby Brooklyn" />
              <ContactInfo icon="📞" text="(718) 555-1234" />
              <ContactInfo icon="✉️" text="djkoatz@gmail.com" />
            </div>
          </div>

          <form className="rounded-[3rem] bg-neutral-50 p-8 md:p-12 shadow-inner border border-neutral-200">
            <div className="space-y-4">
              <Input label="Name" placeholder="Your name" />
              <Input label="Phone" placeholder="Best number to reach you" />
              <Input label="Neighborhood" placeholder="e.g. Ditmas Park, East Flatbush" />
              <div>
                <label className="block text-xs font-black uppercase text-neutral-400 mb-2">Project Details</label>
                <textarea 
                  className="w-full rounded-2xl border border-neutral-200 p-4 text-sm focus:border-sky-700 outline-none min-h-[120px]"
                  placeholder="e.g. 1 Bedroom needs white paint, current walls are light grey..."
                />
              </div>
              <button type="button" className="w-full rounded-2xl bg-sky-700 py-5 text-sm font-black text-white shadow-xl hover:bg-sky-800 transition">
                Request Quote
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-neutral-100 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="h-10 w-10 rounded bg-sky-700 text-white flex items-center justify-center font-bold">FP</div>
            <p className="text-sm font-bold">Flatbush Painter • Interior Specialists</p>
            <p className="text-xs text-neutral-400">© {new Date().getFullYear()} All rights reserved.</p>
            <div className="h-px w-20 bg-neutral-100" />
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-300">
              Made by <a href="https://tywebstudio.com" target="_blank" className="text-sky-700 hover:underline">Tywebstudio.com</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/** HELPER COMPONENTS */

function ServiceCard({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-sm text-neutral-400 leading-7">{copy}</p>
    </div>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-xs font-black uppercase text-neutral-400 mb-2">{label}</label>
      <input 
        className="w-full rounded-2xl border border-neutral-200 p-4 text-sm focus:border-sky-700 outline-none" 
        placeholder={placeholder} 
      />
    </div>
  );
}

function ContactInfo({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700 font-bold">{icon}</span>
      <span className="font-bold text-neutral-700">{text}</span>
    </div>
  );
}