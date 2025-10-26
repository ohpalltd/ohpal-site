'use client'

import { useRouter } from 'next/navigation'

export default function AboutLizPage() {
  const router = useRouter()

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#000',
        color: '#fff',
        padding: '3.5rem 1rem 2rem',
        fontFamily: 'TheSeasons, serif',
      }}
    >
      {/* Fixed back arrow */}
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

      <header style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <img
          src="/lizlaptop.png"
          alt="Liz — Practical and people-first"
          style={{
            width: 'min(960px, 92vw)',
            height: 'auto',
            borderRadius: 16,
            display: 'block',
            margin: '0 auto 1rem',
            boxShadow: '0 18px 60px rgba(0,0,0,.55)',
          }}
        />
        <h1 style={{ fontSize: '2rem', margin: '.25rem 0 .5rem', fontWeight: 700 }}>
          Liz — Practical and people-first
        </h1>
        <p style={{ color: '#d1d5db', maxWidth: 840, margin: '0 auto', lineHeight: 1.7 }}>
          Liz brings structure to vision: clear communication, real-world operations, and a commitment to moving with
          integrity in every partnership.
        </p>
      </header>

      <section style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gap: '1rem' }}>
        <article
          style={{
            border: '1px solid rgba(255,255,255,.14)',
            background: 'rgba(255,255,255,.04)',
            borderRadius: 16,
            boxShadow: '0 12px 40px rgba(0,0,0,.45)',
            padding: '1rem 1.1rem',
          }}
        >
          <h2 style={{ margin: '0 0 .5rem', fontSize: '1.3rem' }}>Her focus areas</h2>
          <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.7, color: '#cfd5db' }}>
            <li>Peridotrepid – Logistics & procurement</li>
            <li>Citrinoor – Community & philanthropy</li>
          </ul>
        </article>
      </section>
    </main>
  )
}
