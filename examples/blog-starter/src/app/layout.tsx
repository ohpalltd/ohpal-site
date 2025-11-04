'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ohpal International Ltd',
  description: 'Seamless collaboration of Trade, Care and Culture.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showHero = pathname === '/' || pathname === '';

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
        {/* ===================== HERO (home only) ===================== */}
        {showHero && (
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

              {/* CTA row: Our Sects + section chips */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '.6rem',
                }}
              >
                {/* Our Sects (scrolls to #about) */}
                <a
                  href="#about"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.6rem 1rem',
                    border: '1px solid rgba(255,255,255,0.6)',
                    borderRadius: 999,
                    color: '#000',
                    background: '#fff',
                    textDecoration: 'none',
                    fontWeight: 600,
                    transition: 'transform .2s ease, box-shadow .2s ease',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  Our Sects
                </a>

                {/* Section links beside it */}
                {[
                  { href: '/about#story', label: 'Our Story' },
                  { href: '/about#timeline', label: 'Timeline' },
                  { href: '/about#contact', label: 'Contact' },
                ].map((chip) => (
                  <a
                    key={chip.href}
                    href={chip.href}
                    style={{
                      padding: '.5rem .9rem',
                      border: '1px solid rgba(255,255,255,.28)',
                      borderRadius: 999,
                      textDecoration: 'none',
                      color: '#fff',
                      transition: 'transform .18s ease, background .18s ease, border-color .18s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,.08)';
                      (e.currentTarget as HTMLElement).style.borderColor = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.28)';
                    }}
                  >
                    {chip.label}
                  </a>
                ))}
              </div>
            </div>
          </header>
        )}

        {/* ===================== MAIN CONTENT ===================== */}
        <main id="about" style={{ background: '#f7f7f7', color: '#111' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
