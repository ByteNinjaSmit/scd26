import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'AWS Student Community Day 2026',
        short_name: 'AWS SCD 2026',
        description: 'Join us on March 15, 2026 at Sanjivani College of Engineering for AWS Student Community Day.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#232f3e',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
