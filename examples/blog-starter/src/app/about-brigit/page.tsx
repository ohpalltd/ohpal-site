'use client'

import { useRouter } from 'next/navigation'

export default function AboutBrigit() {
  const router = useRouter()

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        color: '#fff',
        fontFamily: 'TheSeasons, serif',
        padding: '2rem 1.25rem 4rem',
      }}
    >
      {/* Hide the Ohpal home hero ONLY on this page */}
      <style jsx global>{`
        /* Common classnames/containers we used on the home hero */
        .hero,
        .home-hero,
        .ohpal-hero,
        .heroVideo,
        .heroInner,
        .hero__wrap,
        header.hero,
        .learnMore,
        .ohpalHeader {
          display: none !important;
        }
        /* make sure the page background is solid */
        html, body { background: #0a0a0a !important; }
      `}</style>

      {/* Local styles to remove ligature artifacts (weird symbol) */}
      <style>{`
        .no-ligs {
          font-variant-ligatures: none;
          -webkit-font-variant-ligatures: none;
          font-feature-settings: "liga" 0, "clig" 0, "dlig" 0, "hlig" 0;
        }
      `}</style>

      {/* Back Arrow */}
      <button
        onClick={() => router.push('/')}
        aria-label="Back to Home"
        title="Back to Home"
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
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Split layout */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '2.25rem',
          maxWidth: '1200px',
          width: '100%',
          flexWrap: 'wrap',
          marginTop: '3rem',
        }}
      >
        {/* Left: smaller hero image */}
        <div style={{ flex: '1 1 320px', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/brigitwork.PNG"
            alt="Brigitta Husseini"
            style={{
              width: '100%',
              maxWidth: '260px',   // << smaller
              height: 'auto',
              borderRadius: 14,
              boxShadow: '0 10px 30px rgba(0,0,0,.5)',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Right: Content */}
        <div style={{ flex: '1 1 560px', maxWidth: 640, textAlign: 'left' }}>
          <h2
            className="no-ligs"
            style={{ fontSize: '1.15rem', color: '#cfcfcf', marginBottom: '.5rem', letterSpacing: '.4px' }}
          >
            Meet our Aus Director — Brigitta Husseini
          </h2>

          <h1
            className="no-ligs"
            style={{ fontSize: '2rem', margin: '.25rem 0 1rem', fontWeight: 700, lineHeight: 1.28 }}
          >
            Brigit — Strategic, compassionate, and purpose-driven
          </h1>

          {/* Logos under her image (requested placement) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              margin: '0 0 1.25rem',
              flexWrap: 'wrap',
            }}
          >
            <img
              src="/Carneliana.png"
              alt="Carneliana"
              style={{ width: 96, height: 'auto', opacity: 0.92 }}
            />
            <img
              src="/SapphiraCare.png"
              alt="SapphiraCare"
              style={{ width: 96, height: 'auto', opacity: 0.92 }}
            />
          </div>

          {/* Blurb (ligatures disabled) */}
          <div
            className="no-ligs"
            style={{ color: '#d1d5db', lineHeight: 1.8, fontSize: '1.05rem' }}
          >
            <p>
              Salam, I’m Brigit, a proud Lebanese-Australian who has had the privilege of
              growing up in Lebanon and building a life in Australia. My upbringing instilled
              in me the importance of resilience, community, and living by my values — principles
              that continue to guide me today.
            </p>
            <p>
              As a dynamic corporate leader, I bring extensive experience spanning strategic sales
              management in the telecommunications industry and serving as General Manager for a
              leading manufacturing company. These roles have allowed me to develop a proven track
              record of driving business growth, building strong client relationships, and leading
              teams to exceed performance goals.
            </p>
            <p>
              Over time, I realized that true fulfillment comes from aligning my work with my values.
              This inspired me to co-found Ohpal International Ltd., a company dedicated to fostering
              global connections and promoting sustainable development through innovative partnerships.
              With SapphiraCare and Carneliana under my leadership, I channel my expertise into making a
              meaningful difference, blending purpose with action.
            </p>
            <p>
              As a mother, I find immense joy and purpose in nurturing my family, and as a professional,
              I am deeply committed to creating opportunities, uplifting others, and building a legacy of
              positive change. Fluent in English and Arabic, I draw upon my multicultural background to foster
              trust and collaboration in diverse markets.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
