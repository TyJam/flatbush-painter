import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from './ContactForm'; // Import the client form
import { Footer } from '../page'; // Import your footer

// SEO WORKERS (Google Spiders love this being on the server)
export const metadata = {
  title: "Get a Free Estimate | Flatbush Painter Brooklyn",
  description: "Contact DJ for a professional interior painter quote. Specializing in painting of interior walls, sheetrock, and flooring in Flatbush, Brooklyn.",
  keywords: ["professional interior painter", "painting of interior", "Brooklyn painter estimate"],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* NAV */}
      <nav className="border-b border-neutral-100 bg-white sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-lg">
              <Image src="/images/flatbush-painter-logo-brooklyn-ny.png" alt="Logo" fill className="object-contain" />
            </div>
            <span className="font-black uppercase tracking-tighter text-neutral-950">Flatbush Painter</span>
          </Link>
          <Link href="/" className="text-sm font-black text-sky-700 hover:underline transition">← Home</Link>
        </div>
      </nav>

      <section className="py-24 px-6 mx-auto max-w-7xl">
        {/* RENDER THE CLIENT FORM HERE */}
        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}