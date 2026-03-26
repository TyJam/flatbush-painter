import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/', // Keep bots out of private folders
        '/_next/', 
        '/static/', 
        '/api/',
        '/*?dpl=', // This blocks those long strings like ?dpl=dpl_5YtB..

      ],
    },
    sitemap: 'https://www.flatbushpainter.com/sitemap.xml',
  }
}