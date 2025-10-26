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
      {/* Back Button */}
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

      {/* Header Section */}
      <header style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <h2
          style={{
            fontSize: '1.25rem',
            color: '#b0b0b0',
            marginBottom: '.75rem',
            letterSpacing: '.5px',
          }}
        >
          Meet our strategist — Brigitta Husseini
        </h2>

        <img
          src="/brigitwork.PNG"
          alt="Brigitta Husseini — Strategic, compassionate, and purpose-driven"
          style={{
            width: 'min(960px, 92vw)',
            height: 'auto',
            borderRadius: 16,
            display: 'block',
            margin: '0 auto 1.5rem',
            boxShadow: '0 18px 60px rgba(0,0,0,.55)',
          }}
        />

        <h1
          style={{
            fontSize: '2rem',
            margin: '.25rem 0 1rem',
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          Brigit — Strategic, compassionate, and purpose-driven
        </h1>
      </header>

      {/* Focus Areas */}
      <section
        style={{
          maxWidth: 800,
          margin: '0 auto 2rem',
          textAlign: 'center',
        }}
      >
        <h3
          style={{
            fontSize: '1.3rem',
            fontWeight: 600,
            marginBottom: '.75rem',
            color: '#fff',
          }}
        >
          Focus Areas
        </h3>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 auto 2rem',
            lineHeight: 1.8,
            color: '#d1d5db',
            fontSize: '1.05rem',
          }}
        >
          <li>Carneliana – Wellness & Medical Travel</li>
          <li>SapphiraCare – Care & Support Services</li>
        </ul>
      </section>

      {/* Bio Section */}
      <section
        style={{
          textAlign: 'center',
          color: '#d1d5db',
          lineHeight: 1.8,
          maxWidth: 900,
          margin: '0 auto',
          fontSize: '1.05rem',
          whiteSpace: 'pre-line',
        }}
      >
{`Salam, I’m Brigit, a proud Lebanese-Australian who has had the privilege of growing up in Lebanon and building a life in Australia. My upbringing instilled in me the importance of resilience, community, and living by my values—principles that continue to guide me today.

As a dynamic corporate leader, I bring extensive experience spanning strategic sales management in the telecommunications industry and serving as General Manager for a leading manufacturing company. These roles have allowed me to develop a proven track record of driving business growth, building strong client relationships, and leading teams to exceed performance goals.

Over time, I realized that true fulfillment comes from aligning my work with my values. This inspired me to co-found Ohpal International Ltd., a company dedicated to fostering global connections and promoting sustainable development through innovative partnerships. With SapphiraCare and Carneliana under my leadership, I channel my expertise into making a meaningful difference, blending purpose with action.

As a mother, I find immense joy and purpose in nurturing my family, and as a professional, I am deeply committed to creating opportunities, uplifting others, and building a legacy of positive change. Fluent in English and Arabic, I draw upon my multicultural background to foster trust and collaboration in diverse markets.`}
      </section>

      {/* Logos */}
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
    </main>
  )
}
