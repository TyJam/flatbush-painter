"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var geistSans = google_1.Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});
var geistMono = google_1.Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});
exports.metadata = {
    title: "Flatbush Painter | Interior Painting Services in Brooklyn, NY",
    description: "High-quality interior painting in Flatbush, East Flatbush, and Midwood. Specializing in bedrooms, living rooms, and apartment refreshes. Local, clean, and reliable.",
    keywords: ["Painter Flatbush", "Brooklyn Interior Painter", "Apartment Painting Brooklyn", "Painting Contractor 11226"],
    metadataBase: new URL('https://flatbushpainter.com'),
    openGraph: {
        title: "Flatbush Painter | Local Brooklyn Painting Services",
        description: "Expert painting for your Flatbush home or apartment.",
        url: "https://flatbushpainter.com",
        siteName: "Flatbush Painter",
        images: [{ url: '/logo.png', width: 800, height: 600 }],
        locale: "en_US",
        type: "website"
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en", className: "scroll-smooth" },
        React.createElement("body", { className: geistSans.variable + " " + geistMono.variable + " antialiased" }, children)));
}
exports["default"] = RootLayout;
