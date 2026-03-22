"use strict";
exports.__esModule = true;
function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/'
        },
        sitemap: 'https://flatbushpainter.com/sitemap.xml'
    };
}
exports["default"] = robots;
