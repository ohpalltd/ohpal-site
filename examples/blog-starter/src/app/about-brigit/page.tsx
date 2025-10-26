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
        fontFamily: 'TheSeasons, serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '2rem 1rem 4rem',
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
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Content Split */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '3rem',
          maxWidth: '1200px',
          width: '100%',
          flexWrap: 'wrap',
          marginTop: '3rem',
        }}
      >
        {/* Left Image */}
        <div
          style={{
            flex: '1 1 400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <img
            src="/brigitwork.PNG"
            alt="Brigitta Husseini — Strategic, compassionate, and purpose-driven"
            style={{
              width: '100%',
              maxWidth: '350px', // Smaller hero image
              height: 'auto',
              borderRadius: 14,
              boxShadow: '0 10px 30px rgba(0,0,0,.5)',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Right Text Content */}
        <div
          style={{
            flex: '1 1 500px',
            textAlign: 'left',
            maxWidth: '600px',
          }}
        >
          <h2
            style={{
              fontSize: '1.25rem',
              color: '#b0b0b0',
              marginBottom: '.5rem',
              letterSpacing: '.5px',
            }}
          >
            Meet our strategist — Brigitta Husseini
          </h2>

          <h1
            style={{
              fontSize: '2rem',
              margin: '.25rem 0 1rem',
              fontWeight: 700,
              lineHeight: 1.3,
              color: '#fff',
            }}
          >
            Brigit — Strategic, compassionate, and purpose-driven
          </h1>

          {/* Focus Areas Logos */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              marginBottom: '1.5rem',
            }}
          >
            <img
              src="/Carneliana.png"
              alt="Carneliana Logo"
              style={{
                width: '100px',
                height: 'auto',
                opacity: 0.95,
              }}
            />
            <img
              src="/SapphiraCare.png"
              alt="SapphiraCare Logo"
              style={{
                width: '100px',
                height: 'auto',
                opacity: 0.95,
              }}
            />
          </div>

          <p
            style={{
              color: '#d1d5db',
              lineHeight: 1.8,
              fontSize: '1.05rem',
              whiteSpace: 'pre-line',
              letterSpacing: '0.2px',
            }}
          >
{`Salam, I’m Brigit, a proud Lebanese-Australian who has had the privilege of growing up in Lebanon and building a life in Australia. My upbringing instilled in me the importance of resilience, community, and living by my values — principles that continue to guide me today.

As a dynamic corporate leader, I bring extensive experience spanning strategic sales management in the telecommunications industry and serving as General Manager for a leading manufacturing company. These roles have allowed me to develop a proven track record of driving business growth, building strong client relationships, and leading teams to exceed performance goals.

Over time, I realized that true fulfilment comes from aligning my work with my values. This inspired me to co-found Ohpal International Ltd — a company dedicated to fostering global connections and promoting sustainable development through innovative partnerships. With SapphiraCare and Carneliana under my leadership, I channel my expertise into making a meaningful difference, blending purpose with action.

As a mother, I find immense joy and purpose in nurturing my family, and as a professional, I am deeply committed to creating opportunities, uplifting others, and building a legacy of positive change. Fluent in English and Arabic, I draw upon my multicultural background to foster trust and collaboration in diverse markets.`}
          </p>
        </div>
      </section>
    </main>
  )
}
