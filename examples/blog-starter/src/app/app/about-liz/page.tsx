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

      {/* Header section */}
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

        {/* ✨ Your Personal Intro */}
        <p
          style={{
            color: '#d1d5db',
            maxWidth: 880,
            margin: '0 auto',
            lineHeight: 1.8,
            fontSize: '1.05rem',
            textAlign: 'center',
            whiteSpace: 'pre-line',
          }}
        >
{`Mālō e lelei and Kia Ora! I’m Liz, New Zealand Director and co-founder of Ohpal International Ltd. Rooted in my Tongan heritage and shaped by a humble upbringing in Aotearoa, I bring a unique blend of cultural identity, resilience, and expertise to every endeavour.

With a background in logistics, supply chain, and marketing procurement, I am passionate about driving sustainable solutions that connect businesses globally while uplifting communities. With the PFL and Citrinoor branches, I lead with purpose, bridging local ingenuity with global opportunities to create impactful, ethical, and lasting partnerships and processes.

As a mother of three, my mission extends beyond business. I’m dedicated to building a sustainable future for generations to come. If you’re seeking a partner who brings authenticity, innovation, and heart to the table, let’s connect—I’d love to work together.`}
        </p>
      </header>

      {/* Centered image trio (logos flanking Liz) */}
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          margin: '3rem auto 2rem',
          maxWidth: 1000,
        }}
      >
        <img
          src="/CitrinoorTransparentLogo.png"
          alt="Citrinoor Logo"
          style={{
            width: '100px',
            height: 'auto',
            opacity: 0.9,
          }}
        />
        <img
          src="/lizbrigitport.png"
          alt="Liz and Brigit on port"
          style={{
            width: 'min(460px, 80vw)',
            height: 'auto',
            borderRadius: 18,
            boxShadow: '0 10px 40px rgba(0,0,0,.6)',
          }}
        />
        <img
          src="/PeridotrepidTransparentLogo.png"
          alt="Peridotrepid Logo"
          style={{
            width: '100px',
            height: 'auto',
            opacity: 0.9,
          }}
        />
      </section>

      {/* Focus Areas */}
      <section style={{ maxWidth: 1000, margin: '2rem auto', display: 'grid', gap: '1rem' }}>
        <article
          style={{
            border: '1px solid rgba(255,255,255,.14)',
            background: 'rgba(255,255,255,.04)',
            borderRadius: 16,
            boxShadow: '0 12px 40px rgba(0,0,0,.45)',
            padding: '1.25rem 1.4rem',
          }}
        >
          <h2 style={{ margin: '0 0 .75rem', fontSize: '1.3rem', fontWeight: 700 }}>
            Focus Areas
          </h2>
          <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.7, color: '#cfd5db' }}>
