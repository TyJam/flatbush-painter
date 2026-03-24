'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import { Footer } from '../page';

/**
 * FLATBUSHPAINTER.COM - CONTACT PAGE
 * Formspree ID: mwvrgqwn
 * Optimized for: Professional Interior Painter Keywords
 */
export const metadata = {
  title: "Get a Free Estimate | Flatbush Painter Brooklyn",
  description: "Contact DJ for a professional interior painter quote. Specializing in painting of interior walls, sheetrock, and flooring in Brooklyn.",
};

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mwvrgqwn");

  if (state.succeeded) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center p-6 text-center">
        <div className="max-w-md">
          <div className="relative h-24 w-24 mx-auto mb-6">
             <Image src="/images/flatbush-painter-logo-brooklyn-ny.png" alt="Flatbush Painter" fill className="object-contain" />
          </div>
          <h1 className="text-4xl font-black text-neutral-950 mb-4">Message Received!</h1>
          <p className="text-neutral-900 font-bold text-lg mb-8">DJ will call or text you shortly to discuss your project.</p>
          <Link href="/" className="bg-sky-700 text-white px-8 py-4 rounded-2xl font-black hover:bg-neutral-950 transition shadow-xl">Back to Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
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
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h1 className="text-6xl font-black text-neutral-950 leading-[1.1]">Let's transform your space.</h1>
            <p className="mt-8 text-xl text-neutral-900 font-extrabold leading-relaxed">
              Looking for a **professional interior painter**? Ty specializes in the **painting of interior** walls, sheetrock, and floors. Reach out for a free quote.
            </p>
            <div className="mt-12 p-8 bg-neutral-50 rounded-[2.5rem] border border-neutral-200">
              <p className="text-xs font-black uppercase text-neutral-400 mb-4">Fastest Way to Book</p>
              <a href="tel:+16467554264" className="text-3xl md:text-4xl font-black text-sky-700 hover:text-neutral-950 transition underline underline-offset-8 decoration-neutral-200">(646) 755-4264</a>
              <p className="mt-6 text-neutral-600 font-bold italic">"Call or Text anytime for a Brooklyn local response."</p>
            </div>
          </div>

          <div className="bg-neutral-950 rounded-[3rem] p-10 text-white shadow-2xl">
            <h2 className="text-2xl font-black mb-8 text-sky-500">Request a Free Estimate</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input name="name" required className="w-full bg-neutral-900 border-b-2 border-neutral-800 p-4 focus:border-sky-500 outline-none transition text-white font-bold" placeholder="Your Name" />
              <input name="email" type="email" required className="w-full bg-neutral-900 border-b-2 border-neutral-800 p-4 focus:border-sky-500 outline-none transition text-white font-bold" placeholder="Email Address" />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs" />
              <input name="phone" required className="w-full bg-neutral-900 border-b-2 border-neutral-800 p-4 focus:border-sky-500 outline-none transition text-white font-bold" placeholder="Phone Number" />
              <textarea name="message" required className="w-full bg-neutral-900 border-b-2 border-neutral-800 p-4 focus:border-sky-500 outline-none transition min-h-[120px] text-white font-bold" placeholder="Tell us about your project details..." />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs" />
              <button type="submit" disabled={state.submitting} className="w-full bg-sky-700 py-6 rounded-2xl font-black text-lg hover:bg-white hover:text-sky-950 transition-all shadow-xl">
                {state.submitting ? "Sending..." : "Request Estimate"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}