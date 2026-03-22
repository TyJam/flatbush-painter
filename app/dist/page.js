'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
/**
 * FLATBUSHPAINTER.COM
 * Built by Tywebstudio.com
 */
// 1. IMAGE DATA - Add your job photos to the /public folder and update these names
var jobImages = [
    { src: '/job1.jpg', alt: 'Interior bedroom painting in Flatbush Brooklyn' },
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
            } }),
        react_1["default"].createElement("section", { className: "border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white" },
            react_1["default"].createElement("div", { className: "mx-auto max-w-7xl px-6 py-8" },
                react_1["default"].createElement("header", { className: "flex flex-col gap-6 md:flex-row md:items-center md:justify-between" },
                    react_1["default"].createElement("div", { className: "flex items-center gap-4" },
                        react_1["default"].createElement(LogoMark, { className: "h-20 w-20 shrink-0" }),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("p", { className: "text-sm font-semibold uppercase tracking-[0.25em] text-sky-700" }, "Flatbush Painter"),
                            react_1["default"].createElement("h1", { className: "text-2xl font-bold tracking-tight md:text-3xl" }, "Interior Painting Services in Flatbush, Brooklyn"),
                            react_1["default"].createElement("p", { className: "mt-1 max-w-2xl text-sm text-neutral-600 md:text-base" }, "Clean lines. Fresh walls. Reliable turnaround. Professional interior painting for Brooklyn homes."))),
                    react_1["default"].createElement("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center" },
                        react_1["default"].createElement("a", { href: "#quote", className: "rounded-2xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800" }, "Get a Free Estimate"),
                        react_1["default"].createElement("a", { href: "tel:+17185551234", className: "rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-sky-700 hover:text-sky-700" }, "Call (718) 555-1234"))))),
        react_1["default"].createElement("section", { className: "mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("span", { className: "inline-flex rounded-full bg-sky-50 px-4 py-1 text-sm font-medium text-sky-700 ring-1 ring-sky-100" }, "Fast, clean, local painting help"),
                react_1["default"].createElement("h2", { className: "mt-5 text-4xl font-black tracking-tight text-neutral-950 md:text-6xl" }, "Need a painter in Flatbush who actually shows up?"),
                react_1["default"].createElement("p", { className: "mt-5 max-w-2xl text-lg leading-8 text-neutral-700" }, "Whether you need one bedroom painted or a full apartment refreshed, we deliver neat prep and smooth finishes. Just quality work built around your timeline."),
                react_1["default"].createElement("div", { className: "mt-8 grid gap-4 sm:grid-cols-3" },
                    react_1["default"].createElement(StatCard, { value: "1 Room", label: "Small jobs welcome" }),
                    react_1["default"].createElement(StatCard, { value: "Flatbush", label: "Local Brooklyn focus" }),
                    react_1["default"].createElement(StatCard, { value: "Fast Quotes", label: "Simple, clear pricing" }))),
            react_1["default"].createElement("div", { className: "rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 shadow-sm md:p-8" },
                react_1["default"].createElement("div", { className: "overflow-hidden rounded-[1.5rem] bg-white p-4 shadow-sm ring-1 ring-neutral-200" },
                    react_1["default"].createElement("h3", { className: "text-xl font-bold" }, "Fresh paint. Local trust."),
                    react_1["default"].createElement("ul", { className: "mt-5 space-y-3 text-sm text-neutral-700" },
                        react_1["default"].createElement("li", null, "\u2022 Bedroom & Living Room painting"),
                        react_1["default"].createElement("li", null, "\u2022 Apartment repainting"),
                        react_1["default"].createElement("li", null, "\u2022 Wall touch-ups & Move-out painting"),
                        react_1["default"].createElement("li", null, "\u2022 Accent walls and clean finish work"))))),
        react_1["default"].createElement("section", { id: "work", className: "mx-auto max-w-7xl px-6 py-16" },
            react_1["default"].createElement("div", { className: "mb-10" },
                react_1["default"].createElement("p", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-sky-700" }, "Our Portfolio"),
                react_1["default"].createElement("h2", { className: "mt-3 text-3xl font-black tracking-tight text-neutral-950 md:text-5xl" }, "Recent painting jobs in Brooklyn"),
                react_1["default"].createElement("p", { className: "mt-4 text-lg text-neutral-700" }, "Click any image to see our finish quality.")),
            react_1["default"].createElement("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-3" }, jobImages.map(function (img, idx) { return (react_1["default"].createElement("div", { key: idx, className: "group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-neutral-100 shadow-sm", onClick: function () { return setSelectedImg(img.src); } },
                react_1["default"].createElement(image_1["default"], { src: img.src, alt: img.alt, fill: true, className: "object-cover transition duration-500 group-hover:scale-105" }),
                react_1["default"].createElement("div", { className: "absolute inset-0 flex items-center justify-center bg-sky-900/20 opacity-0 transition group-hover:opacity-100" },
                    react_1["default"].createElement("span", { className: "rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-widest text-neutral-900 shadow-lg" }, "View")))); })),
            selectedImg && (react_1["default"].createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/95 p-4 backdrop-blur-sm", onClick: function () { return setSelectedImg(null); } },
                react_1["default"].createElement("button", { className: "absolute right-8 top-8 text-4xl text-white transition hover:text-sky-400" }, "\u00D7"),
                react_1["default"].createElement("div", { className: "relative h-[85vh] w-full max-w-5xl" },
                    react_1["default"].createElement(image_1["default"], { src: selectedImg, alt: "Enlarged painting job photo", fill: true, className: "object-contain" }))))),
        react_1["default"].createElement("section", { id: "services", className: "border-y border-neutral-200 bg-neutral-50" },
            react_1["default"].createElement("div", { className: "mx-auto max-w-7xl px-6 py-16" },
                react_1["default"].createElement("div", { className: "max-w-3xl" },
                    react_1["default"].createElement("p", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-sky-700" }, "Services"),
                    react_1["default"].createElement("h2", { className: "mt-3 text-3xl font-black tracking-tight text-neutral-950 md:text-5xl" }, "Interior painting for real Brooklyn lives")),
                react_1["default"].createElement("div", { className: "mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3" },
                    react_1["default"].createElement(ServiceCard, { title: "Bedroom Painting", copy: "Refresh a bedroom with clean wall coverage and sharp cut lines." }),
                    react_1["default"].createElement(ServiceCard, { title: "Living Room Painting", copy: "Make your main space feel brighter and cleaner with a professional repaint." }),
                    react_1["default"].createElement(ServiceCard, { title: "Apartment Repainting", copy: "Fast visual upgrades for renters, landlords, and new owners." }),
                    react_1["default"].createElement(ServiceCard, { title: "Move-In / Move-Out", copy: "Freshen walls before a new tenant or a new lease so the place feels new." }),
                    react_1["default"].createElement(ServiceCard, { title: "Wall Touch-Ups", copy: "Patch wear and repaint damaged spots without paying for a whole room." }),
                    react_1["default"].createElement(ServiceCard, { title: "Accent Walls", copy: "Add personality with a bold feature wall installed with modern precision." })))),
        react_1["default"].createElement("section", { id: "areas", className: "mx-auto max-w-7xl px-6 py-16" },
            react_1["default"].createElement("div", { className: "grid gap-10 lg:grid-cols-[0.9fr_1.1fr]" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("p", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-sky-700" }, "Service areas"),
                    react_1["default"].createElement("h2", { className: "mt-3 text-3xl font-black tracking-tight text-neutral-950 md:text-5xl" }, "Painting in Flatbush and nearby")),
                react_1["default"].createElement("div", { className: "grid gap-3 sm:grid-cols-2" }, ['Flatbush', 'East Flatbush', 'Prospect Lefferts Gardens', 'Ditmas Park', 'Midwood', 'Canarsie', 'Crown Heights', 'Brooklyn Nearby'].map(function (area) { return (react_1["default"].createElement("div", { key: area, className: "rounded-xl border border-neutral-200 bg-white p-4 text-sm font-medium shadow-sm" },
                    "Painter in ",
                    area)); })))),
        react_1["default"].createElement("section", { id: "quote", className: "bg-neutral-950 text-white" },
            react_1["default"].createElement("div", { className: "mx-auto max-w-7xl px-6 py-16" },
                react_1["default"].createElement("div", { className: "grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("p", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-sky-300" }, "Free estimate"),
                        react_1["default"].createElement("h2", { className: "mt-3 text-3xl font-black tracking-tight md:text-5xl" }, "Ready to paint?"),
                        react_1["default"].createElement("p", { className: "mt-4 max-w-2xl text-lg leading-8 text-neutral-300" }, "Tell us about your project. You will get a straightforward response within 24 hours.")),
                    react_1["default"].createElement("form", { className: "grid gap-4 rounded-[2rem] bg-white p-6 text-neutral-900 shadow-2xl md:p-8" },
                        react_1["default"].createElement("div", { className: "grid gap-4 md:grid-cols-2" },
                            react_1["default"].createElement(Input, { label: "Name", placeholder: "Your name" }),
                            react_1["default"].createElement(Input, { label: "Phone", placeholder: "Best number" })),
                        react_1["default"].createElement(Input, { label: "Email", placeholder: "you@example.com" }),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("label", { className: "mb-2 block text-sm font-semibold" }, "What needs painting?"),
                            react_1["default"].createElement("textarea", { className: "min-h-[120px] w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-sky-700", placeholder: "e.g. 1 Bedroom and a hallway..." })),
                        react_1["default"].createElement("button", { type: "button", className: "rounded-2xl bg-sky-700 px-5 py-4 text-sm font-bold text-white transition hover:bg-sky-800" }, "Request My Estimate"))))),
        react_1["default"].createElement("footer", { className: "border-t border-neutral-200 bg-white" },
            react_1["default"].createElement("div", { className: "mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between" },
                react_1["default"].createElement("div", { className: "flex items-center gap-3" },
                    react_1["default"].createElement(LogoMark, { className: "h-12 w-12" }),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("p", { className: "font-bold" }, "Flatbush Painter"),
                        react_1["default"].createElement("p", { className: "text-xs text-neutral-500" }, "Professional Interior Services \u2022 Brooklyn, NY"))),
                react_1["default"].createElement("div", { className: "text-sm text-neutral-600 md:text-right" },
                    react_1["default"].createElement("p", { className: "font-bold text-neutral-900" }, "Call (718) 555-1234"),
                    react_1["default"].createElement("p", null, "hello@flatbushpainter.com"),
                    react_1["default"].createElement("p", { className: "mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400" },
                        "Made by ",
                        react_1["default"].createElement("a", { href: "https://tywebstudio.com", target: "_blank", rel: "noopener noreferrer", className: "text-sky-700 hover:underline" }, "Tywebstudio.com")))))));
}
exports["default"] = FlatbushPainterPage;
/**
 * HELPER COMPONENTS
 */
function LogoMark(_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b;
    return (react_1["default"].createElement("svg", { viewBox: "0 0 220 220", className: className, "aria-label": "Flatbush Painter logo", role: "img" },
        react_1["default"].createElement("circle", { cx: "110", cy: "110", r: "102", fill: "#ffffff", stroke: "#0f172a", strokeWidth: "8" }),
        react_1["default"].createElement("g", { transform: "translate(42 34)" },
            react_1["default"].createElement("path", { d: "M38 132 C38 84, 42 44, 74 22 C94 8, 116 11, 130 22 L136 92 C137 100, 132 108, 124 112 L124 146 C124 153, 119 158, 112 158 L98 158 C91 158, 86 153, 86 146 L86 122 L74 116 C52 105, 38 86, 38 132 Z", fill: "#2b211d" }),
            react_1["default"].createElement("path", { d: "M52 16 C73 -1, 111 -2, 138 22 L146 28 C151 31, 154 37, 154 44 L154 54 C154 59, 150 63, 145 63 L131 63 C129 75, 116 85, 100 85 L83 85 C61 85, 43 68, 43 46 L43 35 C43 27, 46 21, 52 16 Z", fill: "#1d4ed8" }),
            react_1["default"].createElement("path", { d: "M126 97 L171 26 C176 17, 186 13, 196 17 C205 21, 210 31, 208 41 L196 84 C194 94, 187 102, 177 106 L149 117 L126 97 Z", fill: "#f97316" }))));
}
function StatCard(_a) {
    var value = _a.value, label = _a.label;
    return (react_1["default"].createElement("div", { className: "rounded-[1.5rem] border border-neutral-200 bg-white p-5 shadow-sm" },
        react_1["default"].createElement("div", { className: "text-2xl font-black tracking-tight text-neutral-950" }, value),
        react_1["default"].createElement("div", { className: "mt-1 text-sm text-neutral-600" }, label)));
}
function ServiceCard(_a) {
    var title = _a.title, copy = _a.copy;
    return (react_1["default"].createElement("article", { className: "rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md" },
        react_1["default"].createElement("h3", { className: "text-xl font-bold tracking-tight text-neutral-950" }, title),
        react_1["default"].createElement("p", { className: "mt-3 text-sm leading-7 text-neutral-700" }, copy)));
}
function Input(_a) {
    var label = _a.label, placeholder = _a.placeholder;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("label", { className: "mb-2 block text-sm font-semibold" }, label),
        react_1["default"].createElement("input", { className: "w-full rounded-2xl border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-sky-700", placeholder: placeholder })));
}
