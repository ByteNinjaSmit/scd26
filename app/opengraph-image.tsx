import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'AWS Student Community Day 2026 | Sanjivani College of Engineering'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 128,
                    background: 'linear-gradient(to bottom right, #232f3e, #0f1b29)', // AWS Navy gradient
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    position: 'relative',
                }}
            >
                {/* Background Pattern */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)',
                    backgroundSize: '100px 100px',
                    opacity: 0.2
                }} />

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 40,
                }}>
                    {/* AWS Logo-ish representation or text */}
                    <div style={{
                        fontSize: 80,
                        fontWeight: 'bold',
                        color: '#FF9900', // AWS Orange
                        marginRight: 20
                    }}>AWS</div>
                </div>

                <div style={{
                    fontSize: 60,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: 20,
                    backgroundImage: 'linear-gradient(90deg, #FF9900, #FFC46D)',
                    backgroundClip: 'text',
                    color: 'transparent',
                    padding: '0 40px',
                }}>
                    Student Community Day
                </div>

                <div style={{ fontSize: 32, opacity: 0.8, color: '#e6e6e6' }}>
                    2026 | Sanjivani College of Engineering
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: 40,
                    fontSize: 24,
                    opacity: 0.6,
                    color: '#a0aec0'
                }}>
                    March 15, 2026 • Kopargaon, Maharashtra
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
        }
    )
}
