'use client'

import { useRouter } from 'next/navigation'

export default function AboutLiz() {
  const router = useRouter()

  return (
    <main
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: 'TheSeasons, serif',
        padding: '3rem 1.5rem 4rem',
        overflow: 'hidden',
      }}
    >
      {/* Hide Ohpal banner and hero elements */}
      <style jsx global>{`
        header, .hero, .ohpal-hero, .ohpalHeader, .learnMore, video, [class*="hero"] {
          display: none !important;
        }
        html, body {
          background: #000 !important;
        }
      `}</style>

      {/* Turn off ligatures */}
      <style>{`
        .no-ligs {
          font-variant-ligatures: none;
          -webkit-font-variant-ligatures: none;
          font-feature-settings: "liga" 0, "clig" 0, "dlig" 0, "hlig" 0;
        }
      `}</style>

      {/* Side borders */}
      <img
        src="/dialeftsideborder.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          height: '100%',
          opacity: 0.3,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <img
        src="/diarightsideborder.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          right: 0,
          height: '100%',
          opacity: 0.3,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Back button */}
      <button
        onClick={() => router.push('/#who-we-are')}
        aria-label="Back to Who We Are"
        title="Back to Who We Are"
        type="button"
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 50,
          color: '#fff',
          background: 'rgba(11,12,16,0.55)',
          border: '1px solid rgba(255,255,255,.18)',
          backdropFilter: 'blur(6px)',
          cursor: 'pointer',
          lineHeight: 1,
          padding: '.5rem',
          borderRadius: '.7rem',
          transition: '0.25s ease',
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Content */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '3rem',
          maxWidth: '1200px',
          width: '100%',
          margin: '5rem auto 0',
          flexWrap: 'wrap',
        }}
      >
        {/* Image + logos */}
        <div
          style={{
            flex: '1 1 420px',
            maxWidth: 480,
            textAlign: 'center',
            alignSelf: 'flex-start',
          }}
        >
          <img
            src="/lizport2.PNG"
            alt="Elizabeth Faleafa"
            style={{
              width: '100%',
              maxWidth: '360px',
              borderRadius: '14px',
              boxShadow: '0 10px 30px rgba(0,0,0,.6)',
              objectFit: 'cover',
              marginTop: '0.5rem',
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.5rem',
              marginTop: '1.25rem',
            }}
          >
            <img src="/Peridotrepid.png" alt="Peridotrepid" style={{ width: 90, opacity: 0.9 }} />
            <img src="/Citrinoor.png" alt="Citrinoor" style={{ width: 90, opacity: 0.9 }} />
          </div>
        </div>

        {/* Text section */}
        <div style={{ flex: '1 1 600px', maxWidth: 640, textAlign: 'left' }}>
          <h2
            className="no-ligs"
            style={{
              fontSize: '1.15rem',
              color: '#d4d4d4',
              marginBottom: '.5rem',
              letterSpacing: '.4px',
            }}
          >
            Meet our NZ Director, Elizabeth Faleafa
          </h2>

          <h1
            className="no-ligs"
            style={{
              fontSize: '2rem',
              margin: '.25rem 0 1rem',
              fontWeight: 700,
              lineHeight: 1.28,
              color: '#fff',
            }}
          >
            Liz, the tactician, the visionary
          </h1>

          <div
            className="no-ligs"
            style={{
              color: '#e5e5e5',
              lineHeight: 1.8,
              fontSize: '1.05rem',
              textAlign: 'justify',
            }}
          >
            <p>
              Malo e lelei, Im Liz, a proud Tongan from Aotearoa and co founder of Ohpal International Ltd. My upbringing as a child of immigrants taught me hard work, humility, and the importance of community. These values guide my leadership and my decisions every day.
            </p>
            <p>
              My background is in logistics, procurement, and marketing operations. Before pursuing my endeavours with Ohpal International, I turned complex systems into practical solutions—solutions I now evolve and implement to serve communities across borders.
            </p>
            <p>
              At Ohpal I lead with a tactical mindset focused on execution, compliance, and sustainable growth under our trade and philanthropic branches, Peridotrepid and Citrinoor. Every project is built with structure, compassion, integrity, and a long term vision.
            </p>
            <p>
              As a mother of three and a purveyor of good trouble, I build for people first, rooted in environmental sustainability, human and animal rights. My mission is to bridge cultures, empower communities, and create work that lasts and makes a difference.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
