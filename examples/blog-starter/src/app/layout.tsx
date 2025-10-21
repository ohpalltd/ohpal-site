// examples/blog-starter/src/app/layout.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ohpal International Ltd',
  description: 'Seamless collaboration of Trade, Care and Culture.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: 'TheSeasons, serif',
          color: '#fff',
          backgroundColor: '#2b2b2b',
        }}
      >
        {/* HERO */}
        <header style={{ position: 'relative', height: '85vh', overflow: 'hidden' }}>
          {/* Background video (muted + autoplay for browsers) */}
          <video
            key="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              minWidth: '100%',
              minHeight: '100%',
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover',
              filter: 'brightness(0.6)',
            }}
            src="/Lush%20Palm%20Forrest.mp4"
          />

          {/* Content overlay */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '0 1rem',
            }}
          >
            <Image
              src="/Ohpal%20Master%20Logo.png"
              alt="Ohpal logo"
              width={240}
              height={240}
              priority
              style={{ opacity: 0.95 }}
            />

            <h1 style={{ fontSize: '4rem', lineHeight: 1.1, margin: '0.75rem 0 0.25rem' }}>
              OHPAL
            </h1>
            <h2 style={{ fontWeight: 400, margin: '0 0 0.75rem' }}>International Ltd</h2>
            <p style={{ maxWidth: 780, margin: '0 0 1.25rem', fontSize: '1.05rem' }}>
              Seamless collaboration of Trade, Care and Culture.
            </p>

            <a
              href="#about"
              style={{
                display: 'inline-block',
                padding: '0.6rem 1rem',
                border: '1px solid rgba(255,255,255,0.6)',
                borderRadius: 999,
                color: '#fff',
                textDecoration: 'none',
                backdropFilter: 'blur(3px)',
              }}
            >
              Learn more
            </a>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main id="about" style={{ background: '#f7f7f7', color: '#111' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
