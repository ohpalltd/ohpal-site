'use client'

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  const handleSapphiraCareClick = (e: React.MouseEvent) => {
    e.preventDefault()
    document.body.style.opacity = '0'
    document.body.style.transition = 'opacity 0.5s ease'
    setTimeout(() => router.push('/sapphiracare'), 250)
    setTimeout(() => {
      document.body.style.opacity = '1'
      document.body.style.transition = ''
    }, 1000)
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#000',
        color: 'white',
        textAlign: 'center',
        padding: '3rem 1rem',
        fontFamily: 'TheSeasons, serif',
      }}
    >
      {/* ===== HERO (leave as-is visually; simple title/tagline kept to match your current look) ===== */}
      <h1
        style={{
          fontSize: '2.5rem',
          marginBottom: '0.75rem',
          fontWeight: 700,
        }}
      >
        Ohpal International Ltd
      </h1>
      <p
        style={{
          color: '#ccc',
          marginBottom: '2.5rem',
          fontSize: '1.1rem',
          maxWidth: '720px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.6,
        }}
      >
        A seamless collaboration in Trade, Care, and Culture.
      </p>

      {/* ===== BRANCH GRID (kept as-is, just neatly centered) ===== */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2.5rem',
          maxWidth: '960px',
          margin: '0 auto 3rem',
        }}
      >
        {[
          {
            img: '/Peridotrepid.png',
            title: 'Peridotrepid',
            desc: 'Logistics and procurement',
          },
          {
            img: '/Carneliana.png',
            title: 'Carneliana',
            desc: 'Wellness and medical travel',
          },
          {
            img: '/SapphiraCare.png',
            title: 'SapphiraCare',
            desc: 'Care and support services',
            link: '/sapphiracare',
          },
          {
            img: '/Citrinoor.png',
            title: 'Citrinoor',
            desc: 'Community and philanthropy',
          },
        ].map((item, i) => (
          <div
            key={i}
            onClick={
              item.link
                ? (e) => {
                    if (item.link === '/sapphiracare')
                      handleSapphiraCareClick(e as any)
                  }
                : undefined
            }
            style={{
              width: 200,
              cursor: item.link ? 'pointer' : 'default',
              transition: 'transform 0.35s ease, box-shadow 0.35s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'
              ;(e.currentTarget as HTMLElement).style.boxShadow =
                '0 10px 25px rgba(255,255,255,0.15)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: '0.75rem',
                display: 'block',
              }}
            />
            <p style={{ fontWeight: 700, fontSize: '1.05rem' }}>{item.title}</p>
            <p style={{ color: '#bbb', fontSize: '0.9rem', lineHeight: 1.4 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <section
        style={{
          backgroundColor: '#000',
          padding: '3rem 1rem 4rem',
        }}
      >
        <h2
          style={{
            fontSize: '1.9rem',
            fontWeight: 700,
            marginBottom: '1rem',
          }}
        >
          Who we are
        </h2>

        <p
          style={{
            color: '#ccc',
            maxWidth: '920px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.75,
            fontSize: '1.05rem',
            textAlign: 'center',
          }}
        >
          We’re a collective grounded in real-life experience, deep care, and a shared vision for something better.
          Ohpal was born to bridge worlds — connecting wellness, care, logistics, and community in ways that feel human,
          holistic, and healing. Each branch of Ohpal is a reflection of who we are: resilient, intentional, and
          unapologetically values-driven. We invite you to share in our vision.
        </p>

        {/* Intro Cards: Brigit / Liz / Together */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          {[
            {
              img: '/brigitcare.png',
              title: 'Brigit — Grounded in care',
              to: '/about-brigit',
              desc:
                'Brigit leads with compassion and clarity. Her focus is on safe, dignified access to support — listening first, then guiding people through at their pace.',
            },
            {
              img: '/lizlaptop.png',
              title: 'Liz — Practical and people-first',
              to: '/about-liz',
              desc:
                'Liz brings structure to vision: clear communication, real-world operations, and a commitment to moving with integrity in every partnership.',
            },
            {
              img: '/lizbrigitworkv2.png', // Together card image
              title: 'Together — Trade, care, and culture',
              to: '/about',
              desc:
                'From ports and supply lines to care networks and community projects, we connect what matters and make it work smoothly for the people it serves.',
            },
          ].map((card, i) => (
            <a
              key={i}
              href={card.to}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                width: 300,
                backgroundColor: '#111',
                borderRadius: 14,
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)'
                ;(e.currentTarget as HTMLElement).style.boxShadow =
                  '0 10px 25px rgba(255,255,255,0.15)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)'
                ;(e.currentTarget as HTMLElement).style.boxShadow =
                  '0 8px 20px rgba(0,0,0,0.4)'
              }}
            >
              <img
                src={card.img}
                alt={card.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 12,
                  marginBottom: '1rem',
                  objectFit: 'cover',
                }}
              />
              <h3 style={{ fontWeight: 700, marginBottom: '.5rem', textAlign: 'center' }}>
                {card.title}
              </h3>
              <p style={{ color: '#ccc', lineHeight: 1.6, textAlign: 'center' }}>
                {card.desc}
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

