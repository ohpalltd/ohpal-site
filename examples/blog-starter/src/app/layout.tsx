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
        {/* ===================== HERO ===================== */}
        <header style={{ position: 'relative', height: '85vh', overflow: 'hidden' }}>
          {/* Background video (your file also has spaces, so encode them) */}
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
              src="/Ohpal2DTransparentHero.png"
              alt="Ohpal 2D"
              width={240}
              height={240}
              priority
              sizes="(max-width: 480px) 140px, (max-width: 768px) 180px, 240px"
              style={{ opacity: 0.95 }}
            />

            <h1 style={{ fontSize: '4rem', lineHeight: 1.1, margin: '0.75rem 0 0.25rem' }}>
              OHPAL
            </h1>
            <h2 style={{ fontWeight: 400, margin: '0 0 0.75rem' }}>International Ltd</h2>
            <p style={{ maxWidth: 780, margin: '0 0 1.25rem', fontSize: '1.05rem' }}>
              A seamless collaboration in Trade, Care and Culture.
            </p>

            <a
              href="#branches"
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

        {/* ===================== BRANCHES STRIP ===================== */}
        <section
          id="branches"
          style={{
            background: '#111',
            color: '#fff',
            padding: '3rem 1rem',
          }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 400 }}>
              Our branches
            </h3>

            <div
              style={{
                display: 'grid',
                gap: '1.25rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                alignItems: 'center',
              }}
            >
              {/* Peridotrepid */}
              <div
                style={{
                  background: '#1b1b1b',
                  border: '1px solid #2a2a2a',
                  borderRadius: 16,
                  padding: '1.25rem',
                  textAlign: 'center',
                }}
              >
                <Image
                  src="/Peridotrepid.png"
                  alt="Peridotrepid"
                  width={200}
                  height={80}
                  style={{ height: 'auto', margin: '0 auto' }}
                />
                <p style={{ opacity: 0.8, fontSize: '0.95rem', marginTop: '0.75rem' }}>
                  Logistics and procurement
                </p>
              </div>

              {/* Carneliana */}
              <div
                style={{
                  background: '#1b1b1b',
                  border: '1px solid #2a2a2a',
                  borderRadius: 16,
                  padding: '1.25rem',
                  textAlign: 'center',
                }}
              >
                <Image
                  src="/Carneliana.png"
                  alt="Carneliana"
                  width={200}
                  height={80}
                  style={{ height: 'auto', margin: '0 auto' }}
                />
                <p style={{ opacity: 0.8, fontSize: '0.95rem', marginTop: '0.75rem' }}>
                  Wellness and medical travel
                </p>
              </div>

              {/* SapphiraCare */}
              <div
                style={{
                  background: '#1b1b1b',
                  border: '1px solid #2a2a2a',
                  borderRadius: 16,
                  padding: '1.25rem',
                  textAlign: 'center',
                }}
              >
                <Image
                  src="/SapphiraCare.png"
                  alt="SapphiraCare"
                  width={200}
                  height={80}
                  style={{ height: 'auto', margin: '0 auto' }}
                />
                <p style={{ opacity: 0.8, fontSize: '0.95rem', marginTop: '0.75rem' }}>
                  Care and support services
                </p>
              </div>

              {/* Citrinoor */}
              <div
                style={{
                  background: '#1b1b1b',
                  border: '1px solid #2a2a2a',
                  borderRadius: 16,
                  padding: '1.25rem',
                  textAlign: 'center',
                }}
              >
                <Image
                  src="/Citrinoor.png"
                  alt="Citrinoor"
                  width={200}
                  height={80}
                  style={{ height: 'auto', margin: '0 auto' }}
                />
                <p style={{ opacity: 0.8, fontSize: '0.95rem', marginTop: '0.75rem' }}>
                  Community and philanthropy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== MAIN CONTENT ===================== */}
        <main id="about" style={{ background: '#f7f7f7', color: '#111' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
