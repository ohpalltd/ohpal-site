'use client'

import { useRouter } from 'next/navigation'

export default function AboutBrigitPage() {
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

      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <img
          src="/brigitwork.png"
          alt="Brigit — Strategic, compassionate, and purpose-driven"
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
          Brigit — Strategic, compassionate, and purpose-driven
        </h1>

        {/* ✨ Brigit's Bio */}
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
{`Salam, I’m Brigit, a proud Lebanese-Australian who has had the privilege of growing up in Lebanon and building a life in Australia. My upbringing instilled in me the importance of resilience, community, and living by my values—principles that continue to guide me today.

As a dynamic corporate leader, I bring extensive experience spanning strategic sales management in the telecommunications industry and serving as General Manager for a leading manufacturing company. These roles have allowed me to develop a proven track record of driving business growth, building strong client relationships, and leading teams to exceed performance goals.

Over time, I realized that true fulfillment comes from aligning my work with my values. This inspired me to co-found Ohpal International Ltd., a company dedicated to fostering global connections and promoting sustainable development through innovative partnerships. With SapphiraCare and Carneliana under my leadership, I channel my expertise into making a meaningful difference, blending purpose with action.

As a mother, I find immense joy and purpose in nurturing my family, and as a professional, I am deeply committed to creating opportunities, uplifting others, and building a legacy of positive change. Fluent in English and Arabic, I draw upon my multicultural background to foster trust and collaboration in diverse markets.`}
        </p>
      </header>

      {/* Logos below hero */}
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
          flexWrap: 'wrap',
          margin: '3rem auto 2rem',
          maxWidth: 800,
        }}
      >
        <img
          src="/CarnelianaTransparent.png"
          alt="Carneliana Logo"
          style={{
            width: '120px',
            height: 'auto',
            opacity: 0.9,
          }}
        />
        <img
          src="/SapphiraCareTransparent.png"
          alt="SapphiraCare Logo"
          style={{
            width: '120px',
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
            <li>Carneliana – Wellness & medical travel</li>
            <li>SapphiraCare – Care & support services</li>
          </ul>
        </article>
      </section>
    </main>
  )
}
