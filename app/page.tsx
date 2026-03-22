'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

/**
 * FLATBUSHPAINTER.COM 
 * Built by Tywebstudio.com
 */

// 1. IMAGE DATA - Add your job photos to the /public folder and update these names
const jobImages = [
  { src: '/job1.jpg', alt: 'Interior bedroom painting in Flatbush Brooklyn' },
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
      {/* ADVANCED SEO: JSON-LD Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PaintingService",
            "name": "Flatbush Painter",
            "image": "https://flatbushpainter.com/job1.jpg",
            "description": "Professional interior painting services in Flatbush, Brooklyn. Specializing in bedrooms, apartments, and move-out refreshes.",
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
            "areaServed": ["Flatbush", "East Flatbush", "Ditmas Park", "Midwood", "Prospect Lefferts Gardens"]
          })
        }}
      />

      {/* HEADER / HERO SECTION */}
      <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <LogoMark className="h-20 w-20 shrink-0" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Flatbush Painter</p>
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Interior Painting Services in Flatbush, Brooklyn</h1>
                <p className="mt-1 max-w-2xl text-sm text-neutral-600 md:text-base">
                  Clean lines. Fresh walls. Reliable turnaround. Professional interior painting for Brooklyn homes.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a href="#quote" className="rounded-2xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800">
                Get a Free Estimate
              </a>
              <a href="tel:+17185551234" className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-sky-700 hover:text-sky-700">
                Call (718) 555-1234
              </a>
            </div>
          </header>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full bg-sky-50 px-4 py-1 text-sm font-medium text-sky-700 ring-1 ring-sky-100">
            Fast, clean, local painting help
          </span>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-neutral-950 md:text-6xl">
            Need a painter in Flatbush who actually shows up?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
            Whether you need one bedroom painted or a full apartment refreshed, we deliver neat prep and smooth finishes. Just quality work built around your timeline.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <StatCard value="1 Room" label="Small jobs welcome" />
            <StatCard value="Flatbush" label="Local Brooklyn focus" />
            <StatCard value="Fast Quotes" label="Simple, clear pricing" />
          </div>
        </div>

        <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 shadow-sm md:p-8">
          <div className="overflow-hidden rounded-[1.5rem] bg-white p-4 shadow-sm ring-1 ring-neutral-200">
            <h3 className="text-xl font-bold">Fresh paint. Local trust.</h3>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700">
              <li>• Bedroom & Living Room painting</li>
              <li>• Apartment repainting</li>
              <li>• Wall touch-ups & Move-out painting</li>
              <li>• Accent walls and clean finish work</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORK GALLERY (LIGHTBOX) --- */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Our Portfolio</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-950 md:text-5xl">
            Recent painting jobs in Brooklyn
          </h2>
          <p className="mt-4 text-lg text-neutral-700">Click any image to see our finish quality.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {jobImages.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-neutral-100 shadow-sm"
              onClick={() => setSelectedImg(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-sky-900/20 opacity-0 transition group-hover:opacity-100">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-widest text-neutral-900 shadow-lg">View</span>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX MODAL */}
        {selectedImg && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute right-8 top-8 text-4xl text-white transition hover:text-sky-400">&times;</button>
            <div className="relative h-[85vh] w-full max-w-5xl">
              <Image 
                src={selectedImg} 
                alt="Enlarged painting job photo" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>
        )}
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Services</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-950 md:text-5xl">
              Interior painting for real Brooklyn lives
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <ServiceCard title="Bedroom Painting" copy="Refresh a bedroom with clean wall coverage and sharp cut lines." />
            <ServiceCard title="Living Room Painting" copy="Make your main space feel brighter and cleaner with a professional repaint." />
            <ServiceCard title="Apartment Repainting" copy="Fast visual upgrades for renters, landlords, and new owners." />
            <ServiceCard title="Move-In / Move-Out" copy="Freshen walls before a new tenant or a new lease so the place feels new." />
            <ServiceCard title="Wall Touch-Ups" copy="Patch wear and repaint damaged spots without paying for a whole room." />
            <ServiceCard title="Accent Walls" copy="Add personality with a bold feature wall installed with modern precision." />
          </div>
        </div>
      </section>

      {/* SERVICE AREAS (SEO KEYWORDS) */}
      <section id="areas" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Service areas</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-950 md:text-5xl">
              Painting in Flatbush and nearby
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {['Flatbush', 'East Flatbush', 'Prospect Lefferts Gardens', 'Ditmas Park', 'Midwood', 'Canarsie', 'Crown Heights', 'Brooklyn Nearby'].map((area) => (
              <div key={area} className="rounded-xl border border-neutral-200 bg-white p-4 text-sm font-medium shadow-sm">
                Painter in {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Free estimate</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Ready to paint?</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-300">
                Tell us about your project. You will get a straightforward response within 24 hours.
              </p>
            </div>

            <form className="grid gap-4 rounded-[2rem] bg-white p-6 text-neutral-900 shadow-2xl md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <Input label="Name" placeholder="Your name" />
                <Input label="Phone" placeholder="Best number" />
              </div>
              <Input label="Email" placeholder="you@example.com" />
              <div>
                <label className="mb-2 block text-sm font-semibold">What needs painting?</label>
                <textarea
                  className="min-h-[120px] w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-sky-700"
                  placeholder="e.g. 1 Bedroom and a hallway..."
                />
              </div>
              <button type="button" className="rounded-2xl bg-sky-700 px-5 py-4 text-sm font-bold text-white transition hover:bg-sky-800">
                Request My Estimate
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <LogoMark className="h-12 w-12" />
            <div>
              <p className="font-bold">Flatbush Painter</p>
              <p className="text-xs text-neutral-500">Professional Interior Services • Brooklyn, NY</p>
            </div>
          </div>
          
          <div className="text-sm text-neutral-600 md:text-right">
            <p className="font-bold text-neutral-900">Call (718) 555-1234</p>
            <p>hello@flatbushpainter.com</p>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              Made by <a href="https://tywebstudio.com" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">Tywebstudio.com</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/** 
 * HELPER COMPONENTS
 */

function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 220" className={className} aria-label="Flatbush Painter logo" role="img">
      <circle cx="110" cy="110" r="102" fill="#ffffff" stroke="#0f172a" strokeWidth="8" />
      <g transform="translate(42 34)">
        <path d="M38 132 C38 84, 42 44, 74 22 C94 8, 116 11, 130 22 L136 92 C137 100, 132 108, 124 112 L124 146 C124 153, 119 158, 112 158 L98 158 C91 158, 86 153, 86 146 L86 122 L74 116 C52 105, 38 86, 38 132 Z" fill="#2b211d" />
        <path d="M52 16 C73 -1, 111 -2, 138 22 L146 28 C151 31, 154 37, 154 44 L154 54 C154 59, 150 63, 145 63 L131 63 C129 75, 116 85, 100 85 L83 85 C61 85, 43 68, 43 46 L43 35 C43 27, 46 21, 52 16 Z" fill="#1d4ed8" />
        <path d="M126 97 L171 26 C176 17, 186 13, 196 17 C205 21, 210 31, 208 41 L196 84 C194 94, 187 102, 177 106 L149 117 L126 97 Z" fill="#f97316" />
      </g>
    </svg>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.5rem] border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="text-2xl font-black tracking-tight text-neutral-950">{value}</div>
      <div className="mt-1 text-sm text-neutral-600">{label}</div>
    </div>
  );
}

function ServiceCard({ title, copy }: { title: string; copy: string }) {
  return (
    <article className="rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-xl font-bold tracking-tight text-neutral-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-neutral-700">{copy}</p>
    </article>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">{label}</label>
      <input
        className="w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-sky-700"
        placeholder={placeholder}
      />
    </div>
  );
}