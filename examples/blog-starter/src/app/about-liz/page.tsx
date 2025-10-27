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
      {/* Hide any global hero/header just in case */}
      <style jsx global>{`
        header, .hero, .ohpal-hero, .ohpalHeader, .learnMore, video, [class*="hero"] {
          display: none !important;
        }
        html, body { background: #000 !important; }
      `}</style>

      {/* Turn off ligatures */}
      <style>{`
        .no-ligs {
          font-variant-ligatures: none;
          -webkit-font-variant-ligatures: none;
          font-feature-settings: "liga" 0, "clig" 0, "dlig" 0, "hlig" 0;
        }
      `}</style>

      {/* Side borders only */}
      <img
        src="/dialeftsideborder.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          width: 'min(8vw, 120px)',
          opacity: 0.4,
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
          width: 'min(8vw, 120px)',
          opacity: 0.4,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Back button to “Who we are” */}
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
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* CONTENT */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3rem',
          maxWidth: '1200px',
          width: '100%',
          margin: '5rem auto 0',
          flexWrap: 'wrap',
        }}
      >
        {/* Right column: Liz’s image + logos */}
        <div style={{ flex: '1 1 420px', maxWidth: 480, textAlign: 'center' }}>
          <img
            src="/lizlaptop.png"
            alt="Elizabeth Faleafa"
            style={{
              width: '100%',
              maxWidth: '360px',
              borderRadius: '14px',
              boxShadow: '0 10px 30px rgba(0,0,0,.6)',
              objectFit: 'cover',
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
            <img src="/Peridotrepid.png" alt="Peridotrepid" style={{ width: 90, opacity: 0.95 }} />
            <img src="/Citrinoor.png" alt="Citrinoor" style={{ width: 90, opacity: 0.95 }} />
          </div>
        </div>

        {/* Left column: Heading + blurb */}
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
            Meet our NZ Director — Liz Faleafa
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
            Liz — Tactical, visionary, and purpose driven
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
              Mālō e lelei, I’m Liz — a proud Tongan-New Zealander and co-founder of Ohpal International Ltd.
              My upbringing as a child of immigrants instilled in me the values of hard work, humility, and 
              community — lessons that continue to guide my work and leadership today.
            </p>
            <p>
              With a background in logistics, procurement, and marketing operations, I’ve built my career 
              around connecting people, processes, and purpose. I’m passionate about transforming complex 
              systems into practical, human-centred solutions that create impact across borders.
            </p>
            <p>
              At Ohpal, I lead with a tactical mindset — focusing on execution, compliance, and sustainable 
              growth under our trade and philanthropic branches, Peridotrepid and Citrinoor. Every project 
              reflects a balance of structure and compassion, grounded in integrity and long-term vision.
            </p>
            <p>
              As a mother and entrepreneur, I believe in building systems that work not just for profit, 
              but for people. My mission is to bridge cultures, empower communities, and ensure that 
              everything we build contributes to something lasting and meaningful.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
