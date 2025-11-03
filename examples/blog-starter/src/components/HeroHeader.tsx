'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function HeroHeader() {
  const pathname = usePathname()
  // Only show the big video/banner on the homepage
  if (pathname !== '/') return null

  return (
    <header style={{ position: 'relative', height: '85vh', overflow: 'hidden' }}>
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

        {/* CTA still scrolls down the home page content */}
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
          Our Sects
        </a>
      </div>
    </header>
  )
}
