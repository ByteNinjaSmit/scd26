import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'AWS Student Community Day 2026'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 100,
                    background: '#232f3e', // AWS Navy
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <div style={{
                    fontSize: 80,
                    fontWeight: 'bold',
                    color: '#FF9900', // AWS Orange
                    marginBottom: 20
                }}>AWS</div>
                <div style={{ fontSize: 60, fontWeight: 'bold' }}>Student Community Day</div>
                <div style={{ fontSize: 40, marginTop: 20, opacity: 0.8 }}>Sanjivani College of Engineering</div>
            </div>
        ),
        {
            ...size,
        }
    )
}
