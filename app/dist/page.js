'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
/**
 * FLATBUSHPAINTER.COM
 * Assets needed in /public folder:
 * - logo.png (Your business logo)
 * - job1.jpg, job2.jpg, job3.jpg, job4.jpg, job5.jpg, job6.jpg (Your work photos)
 */
var jobImages = [
    { src: '/job1.jpg', alt: 'Interior bedroom painting in Flatbush' },
    { src: '/job2.jpg', alt: 'Clean white walls living room refresh' },
    { src: '/job3.jpg', alt: 'Apartment move-out painting service' },
    { src: '/job4.jpg', alt: 'Modern accent wall installation' },
    { src: '/job5.jpg', alt: 'Detailed trim and baseboard painting' },
    { src: '/job6.jpg', alt: 'Kitchen wall repainting Brooklyn' },
];
function FlatbushPainterPage() {
    var _a = react_1.useState(null), selectedImg = _a[0], setSelectedImg = _a[1];
    return (react_1["default"].createElement("main", { className: "min-h-screen bg-white text-neutral-900" },
        react_1["default"].createElement("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
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
            } }),
        react_1["default"].createElement("nav", { className: "border-b border-neutral-100 bg-white sticky top-0 z-40" },
            react_1["default"].createElement("div", { className: "mx-auto max-w-7xl px-6 py-4 flex items-center justify-between" },
                react_1["default"].createElement("div", { className: "flex items-center gap-3" },
                    react_1["default"].createElement("div", { className: "relative h-12 w-12 overflow-hidden rounded-lg bg-sky-700" },
                        react_1["default"].createElement(image_1["default"], { src: "/images/flatbush-painter-logo.png", alt: "Flatbush Painter Logo", fill: true, className: "object-contain p-1", onError: function (e) {
                                // Fallback if logo.png is missing
                                e.currentTarget.style.display = 'none';
                            } }),
                        react_1["default"].createElement("div", { className: "flex h-full w-full items-center justify-center text-white font-black text-xl" }, "FP")),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("p", { className: "text-sm font-black uppercase tracking-tighter text-neutral-950" }, "Flatbush Painter"),
                        react_1["default"].createElement("p", { className: "text-[10px] font-bold text-sky-700 uppercase tracking-widest" }, "Brooklyn, NY"))),
                react_1["default"].createElement("div", { className: "hidden md:flex items-center gap-8 text-sm font-bold" },
                    react_1["default"].createElement("a", { href: "#work", className: "hover:text-sky-700" }, "Recent Work"),
                    react_1["default"].createElement("a", { href: "#services", className: "hover:text-sky-700" }, "Services"),
                    react_1["default"].createElement("a", { href: "tel:+17185551234", className: "rounded-full bg-neutral-950 px-5 py-2.5 text-white hover:bg-neutral-800 transition" }, "Call (718) 555-1234")))),
        react_1["default"].createElement("section", { className: "relative bg-neutral-50 px-6 py-20 lg:py-32" },
            react_1["default"].createElement("div", { className: "mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h2", { className: "text-5xl font-black tracking-tight text-neutral-950 md:text-7xl" },
                        "Interior painting ",
                        react_1["default"].createElement("br", null),
                        "made simple."),
                    react_1["default"].createElement("p", { className: "mt-8 max-w-xl text-lg leading-8 text-neutral-600" }, "Clean lines, fresh walls, and reliable service. We help Flatbush residents and landlords transform their spaces without the typical contractor headaches."),
                    react_1["default"].createElement("div", { className: "mt-10 flex flex-wrap gap-4" },
                        react_1["default"].createElement("a", { href: "#quote", className: "rounded-2xl bg-sky-700 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-sky-800" }, "Get a Free Estimate"),
                        react_1["default"].createElement("a", { href: "#work", className: "rounded-2xl border border-neutral-300 bg-white px-8 py-4 text-sm font-bold transition hover:border-sky-700" }, "View Our Work"))),
                react_1["default"].createElement("div", { className: "relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white" },
                    react_1["default"].createElement(image_1["default"], { src: "/job1.jpg", alt: "Interior painting Brooklyn", fill: true, className: "object-cover" })))),
        react_1["default"].createElement("section", { id: "work", className: "mx-auto max-w-7xl px-6 py-24" },
            react_1["default"].createElement("div", { className: "mb-12" },
                react_1["default"].createElement("p", { className: "text-xs font-black uppercase tracking-widest text-sky-700" }, "Portfolio"),
                react_1["default"].createElement("h2", { className: "mt-4 text-4xl font-black tracking-tight md:text-5xl" }, "Recent painting jobs")),
            react_1["default"].createElement("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-3" }, jobImages.map(function (img, idx) { return (react_1["default"].createElement("div", { key: idx, className: "group relative aspect-square cursor-pointer overflow-hidden rounded-3xl bg-neutral-100", onClick: function () { return setSelectedImg(img.src); } },
                react_1["default"].createElement(image_1["default"], { src: img.src, alt: img.alt, fill: true, className: "object-cover transition duration-700 group-hover:scale-110" }),
                react_1["default"].createElement("div", { className: "absolute inset-0 bg-sky-900/20 opacity-0 transition group-hover:opacity-100 flex items-center justify-center" },
                    react_1["default"].createElement("div", { className: "rounded-full bg-white/90 px-6 py-2 text-xs font-bold uppercase tracking-widest shadow-xl" }, "Expand")))); })),
            selectedImg && (react_1["default"].createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/95 p-4 backdrop-blur-sm", onClick: function () { return setSelectedImg(null); } },
                react_1["default"].createElement("div", { className: "relative h-[85vh] w-full max-w-5xl" },
                    react_1["default"].createElement(image_1["default"], { src: selectedImg, alt: "Work detail", fill: true, className: "object-contain" })),
                react_1["default"].createElement("button", { className: "absolute top-10 right-10 text-white text-5xl" }, "\u00D7")))),
        react_1["default"].createElement("section", { id: "services", className: "bg-neutral-950 py-24 text-white" },
            react_1["default"].createElement("div", { className: "mx-auto max-w-7xl px-6" },
                react_1["default"].createElement("div", { className: "grid gap-12 lg:grid-cols-3" },
                    react_1["default"].createElement("div", { className: "lg:col-span-1" },
                        react_1["default"].createElement("h2", { className: "text-4xl font-black tracking-tight" }, "Our Services"),
                        react_1["default"].createElement("p", { className: "mt-6 text-neutral-400" }, "Professional results for small and medium interior jobs.")),
                    react_1["default"].createElement("div", { className: "grid gap-6 sm:grid-cols-2 lg:col-span-2" },
                        react_1["default"].createElement(ServiceCard, { title: "Bedroom Painting", copy: "Clean coverage and sharp cut lines for your private space." }),
                        react_1["default"].createElement(ServiceCard, { title: "Apartment Refresh", copy: "Perfect for move-ins, move-outs, or between tenants." }),
                        react_1["default"].createElement(ServiceCard, { title: "Accent Walls", copy: "Make a statement with a bold color on a single wall." }),
                        react_1["default"].createElement(ServiceCard, { title: "Living Rooms", copy: "The heart of the home deserves a professional finish." }))))),
        react_1["default"].createElement("section", { id: "quote", className: "mx-auto max-w-7xl px-6 py-24" },
            react_1["default"].createElement("div", { className: "grid gap-16 lg:grid-cols-2 lg:items-start" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h2", { className: "text-4xl font-black tracking-tight md:text-6xl" }, "Ready to refresh your space?"),
                    react_1["default"].createElement("p", { className: "mt-8 text-lg text-neutral-600 leading-8" }, "Fill out the form and we'll get back to you with a clear estimate. No hidden fees. No stress. Just quality paint work."),
                    react_1["default"].createElement("div", { className: "mt-10 space-y-6" },
                        react_1["default"].createElement(ContactInfo, { icon: "\uD83D\uDCCD", text: "Serving Flatbush & Nearby Brooklyn" }),
                        react_1["default"].createElement(ContactInfo, { icon: "\uD83D\uDCDE", text: "(718) 555-1234" }),
                        react_1["default"].createElement(ContactInfo, { icon: "\u2709\uFE0F", text: "djkoatz@gmail.com" }))),
                react_1["default"].createElement("form", { className: "rounded-[3rem] bg-neutral-50 p-8 md:p-12 shadow-inner border border-neutral-200" },
                    react_1["default"].createElement("div", { className: "space-y-4" },
                        react_1["default"].createElement(Input, { label: "Name", placeholder: "Your name" }),
                        react_1["default"].createElement(Input, { label: "Phone", placeholder: "Best number to reach you" }),
                        react_1["default"].createElement(Input, { label: "Neighborhood", placeholder: "e.g. Ditmas Park, East Flatbush" }),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("label", { className: "block text-xs font-black uppercase text-neutral-400 mb-2" }, "Project Details"),
                            react_1["default"].createElement("textarea", { className: "w-full rounded-2xl border border-neutral-200 p-4 text-sm focus:border-sky-700 outline-none min-h-[120px]", placeholder: "e.g. 1 Bedroom needs white paint, current walls are light grey..." })),
                        react_1["default"].createElement("button", { type: "button", className: "w-full rounded-2xl bg-sky-700 py-5 text-sm font-black text-white shadow-xl hover:bg-sky-800 transition" }, "Request Quote"))))),
        react_1["default"].createElement("footer", { className: "border-t border-neutral-100 py-16" },
            react_1["default"].createElement("div", { className: "mx-auto max-w-7xl px-6 text-center" },
                react_1["default"].createElement("div", { className: "flex flex-col items-center gap-6" },
                    react_1["default"].createElement("div", { className: "h-10 w-10 rounded bg-sky-700 text-white flex items-center justify-center font-bold" }, "FP"),
                    react_1["default"].createElement("p", { className: "text-sm font-bold" }, "Flatbush Painter \u2022 Interior Specialists"),
                    react_1["default"].createElement("p", { className: "text-xs text-neutral-400" },
                        "\u00A9 ",
                        new Date().getFullYear(),
                        " All rights reserved."),
                    react_1["default"].createElement("div", { className: "h-px w-20 bg-neutral-100" }),
                    react_1["default"].createElement("p", { className: "text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-300" },
                        "Made by ",
                        react_1["default"].createElement("a", { href: "https://tywebstudio.com", target: "_blank", className: "text-sky-700 hover:underline" }, "Tywebstudio.com")))))));
}
exports["default"] = FlatbushPainterPage;
/** HELPER COMPONENTS */
function ServiceCard(_a) {
    var title = _a.title, copy = _a.copy;
    return (react_1["default"].createElement("div", { className: "rounded-3xl border border-neutral-800 bg-neutral-900 p-8" },
        react_1["default"].createElement("h3", { className: "text-xl font-bold mb-4" }, title),
        react_1["default"].createElement("p", { className: "text-sm text-neutral-400 leading-7" }, copy)));
}
function Input(_a) {
    var label = _a.label, placeholder = _a.placeholder;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("label", { className: "block text-xs font-black uppercase text-neutral-400 mb-2" }, label),
        react_1["default"].createElement("input", { className: "w-full rounded-2xl border border-neutral-200 p-4 text-sm focus:border-sky-700 outline-none", placeholder: placeholder })));
}
function ContactInfo(_a) {
    var icon = _a.icon, text = _a.text;
    return (react_1["default"].createElement("div", { className: "flex items-center gap-4" },
        react_1["default"].createElement("span", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700 font-bold" }, icon),
        react_1["default"].createElement("span", { className: "font-bold text-neutral-700" }, text)));
}
