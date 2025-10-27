'use client'

import { useRouter } from 'next/navigation'

export default function AboutBrigit() {
  const router = useRouter()

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        color: 'white',
        fontFamily: 'TheSeasons, serif',
        padding: '2rem 1.5rem',
      }}
    >
      <style>{`
        .page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }

        .top-section {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .hero-img {
          width: 320px;
          height: auto;
          border-radius: 12px;
          object-fit: cover;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .text-content {
          max-width: 700px;
          text-align: left;
          line-height: 1.8;
          font-size: 1.05rem;
          font-variant-ligatures: none;
        }

        .logos {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .logos img {
          width: 110px;
          height: auto;
          opacity: 0.85;
          transition: all 0.3s ease;
        }

        .logos img:hover {
          opacity: 1;
          transform: scale(1.05);
        }

        .backArrow {
          position: fixed;
          top: 1rem;
          left: 1rem;
          color: #fff;
          background: rgba(11,12,16,0.55);
          border: 1px solid rgba(255,255,255,.18);
          backdrop-filter: blur(6px);
          cursor: pointer;
          padding: .45rem;
          border-radius: .65rem;
          transition: opacity .25s ease, transform .15s ease;
          z-index: 50;
        }
        .backArrow:hover { opacity: 1; transform: translateX(-2px); }
      `}</style>

      {/* Back Arrow */}
      <button
        className="backArrow"
        onClick={() => router.push('/')}
        aria-label="Back to Home"
        type="button"
        title="Back to Home"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
        </svg>
      </button>

      {/* Content */}
      <div className="page">
        <h2 style={{ color: '#ccc', marginTop: '1rem', fontSize: '1.25rem', fontWeight: 400 }}>
          Meet our strategist — Brigitta Husseini
        </h2>

        <h1 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
          Brigit — Strategic, compassionate, and purpose-driven
        </h1>

        <div className="top-section">
          <img
            src="/brigitwork.PNG"
            alt="Brigit working with care clients"
            className="hero-img"
          />

          <div className="text-content">
            <h3 style={{ color: '#e6e6e6', fontWeight: 600, marginBottom: '0.75rem' }}>
              Focus Areas:
            </h3>
            <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
              Care & Support | Wellness | Strategic Growth | Community Engagement
            </p>

            <p>Salam, I’m Brigit, a proud Lebanese-Australian who has had the privilege of growing up in Lebanon and building a life in Australia. My upbringing instilled in me the importance of resilience, community, and living by my values—principles that continue to guide me today.</p>

            <p>As a dynamic corporate leader, I bring extensive experience spanning strategic sales management in the telecommunications industry and serving as General Manager for a leading manufacturing company. These roles have allowed me to develop a proven track record of driving business growth, building strong client relationships, and leading teams to exceed performance goals.</p>

            <p>Over time, I realized that true fulfillment comes from aligning my work with my values. This inspired me to co-found Ohpal International Ltd., a company dedicated to fostering global connections and promoting sustainable development through innovative partnerships. With SapphiraCare and Carneliana under my leadership, I channel my expertise into making a meaningful difference, blending purpose with action.</p>

            <p>As a mother, I find immense joy and purpose in nurturing my family, and as a professional, I am deeply committed to creating opportunities, uplifting others, and building a legacy of positive change. Fluent in English and Arabic, I draw upon my multicultural background to foster trust and collaboration in diverse markets.</p>
          </div>
        </div>

        <div className="logos">
          <img src="/CarnelianaTransparent.png" alt="Carneliana Logo" />
          <img src="/SapphiraCareTransparent.png" alt="SapphiraCare Logo" />
        </div>
      </div>
    </main>
  )
}
