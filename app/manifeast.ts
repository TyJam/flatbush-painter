import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Flatbush Painter',
    short_name: 'Flatbush Painter',
    description: 'Professional Interior Painter in Brooklyn',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0369a1', // This is your Sky-700 blue
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}