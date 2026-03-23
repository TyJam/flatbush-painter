import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Footer } from '../page';

export const metadata = {
  title: "Get a Free Estimate | Flatbush Painter Brooklyn",
  description: "Contact DJ for a professional interior painter quote. Specializing in painting of interior walls, sheetrock, and flooring in Brooklyn.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <nav className="border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
             <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-sky-700">
              <Image src="/images/flatbush-painter-logo-brooklyn-ny.png" alt="Logo" fill className="object-contain" />
            </div>
            <span className="font-black uppercase tracking-tighter">Flatbush Painter</span>
          </Link>
          <Link href="/" className="text-sm font-black text-sky-700">← Back</Link>
        </div>
      </nav>

      <section className="py-24 px-6 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h1 className="text-6xl font-black text-neutral-950 leading-[1.1]">Transform your space today.</h1>
            <p className="mt-8 text-xl text-neutral-800 font-bold">
              Looking for a professional interior painter ? Ty specializes in the painting of interior walls, sheetrock, and floors. Reach out for a free quote.
            </p>
            <div className="mt-12 p-8 bg-neutral-50 rounded-3xl border border-neutral-200">
              <p className="text-xs font-black uppercase text-neutral-400 mb-4 tracking-widest">Fastest Way to Book</p>
              <a href="tel:+16467554264" className="text-3xl md:text-4xl font-black text-sky-700 hover:text-neutral-950 transition underline underline-offset-8 decoration-neutral-200">
                (646) 755-4264
              </a>
              <p className="mt-6 text-neutral-600 font-bold italic">Call or Text anytime for a Brooklyn local response.</p>
            </div>
          </div>

          <div className="bg-neutral-950 rounded-[3rem] p-10 text-white shadow-2xl">
            <h2 className="text-2xl font-black mb-8">Send Project Details</h2>
            <form className="space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-sky-500">Full Name</label>
                <input type="text" className="w-full bg-neutral-900 border-b-2 border-neutral-800 p-4 focus:border-sky-500 outline-none transition" placeholder="Your Name" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-sky-500">Phone Number</label>
                <input type="text" className="w-full bg-neutral-900 border-b-2 border-neutral-800 p-4 focus:border-sky-500 outline-none transition" placeholder="(718) 555-1234" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-sky-500">What do you need?</label>
                <textarea className="w-full bg-neutral-900 border-b-2 border-neutral-800 p-4 focus:border-sky-500 outline-none transition min-h-[120px]" placeholder="e.g. 2 bedrooms painted, sheetrock repair in hallway, new kitchen floors..." />
              </div>
              <button type="button" className="w-full bg-sky-700 py-6 rounded-2xl font-black text-lg hover:bg-white hover:text-sky-900 transition-all shadow-xl">Request Estimate</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}