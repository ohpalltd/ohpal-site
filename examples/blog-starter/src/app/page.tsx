'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  // Soft fade when navigating to SapphiraCare
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

  // Scroll reveal for About cards/sections
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Smooth scroll for Learn more
  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="ohpalMain">
      <style>{`
        /* ===== Page shell with fixed watermark ===== */
        .ohpalMain {
          position: relative;
          min-height: 100vh;
          background-color: #0a0a0a;
          color: white;
          text-align: center;
          padding: 3rem 1rem;
          overflow-x: hidden;
        }
        .ohpalMain::before {
          content: "";
          position: fixed;
          inset: 0;
          background-image: url('/Ohpal2DTransparentHero.png');
          background-repeat: no-repeat;
          background-position: center 18%;
          background-size: min(900px, 80vw);
          opacity: 0.06;               /* subtle watermark */
          pointer-events: none;
          z-index: 0;
        }

        /* ===== Hero ===== */
        .heroTitle { font-size: clamp(2rem, 4.8vw, 3rem); margin-bottom: .5rem; position: relative; z-index: 1; }
        .heroSub { color: #ccc; margin: 0 auto 1.5rem; font-size: 1.05rem; max-width: 740px; position: relative; z-index: 1; }
        .learnBtn {
          display: inline-block;
          margin-bottom: 2rem;
          padding: .6rem 1rem;
          border: 1px solid rgba(255,255,255,.6);
          border-radius: 999px;
          color: #fff;
          text-decoration: none;
          backdrop-filter: blur(3px);
          transition: transform .2s ease, background .2s ease, border-color .2s ease, opacity .2s ease;
          position: relative; z-index: 1;
        }
        .learnBtn:hover { transform: translateY(-2px); background: rgba(255,255,255,.06); border-color: #fff; }

        /* ===== Brand tiles (kept, with gentle hover) ===== */
        .tiles {
          display: flex;
          justify-content: center;
          align-items: start;
          flex-wrap: wrap;
          gap: 3rem;
          max-width: 980px;
          margin: 0 auto 2.5rem;
          position: relative; z-index: 1;
        }
        .tile { width: 180px; text-decoration: none; color: inherit; display: block; cursor: pointer; }
        .tile img {
          width: 100%;
          border-radius: 10px;
          margin-bottom: .75rem;
          background: #111;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .tile img:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(0,0,0,.35); }
        .caption { color: #bbb; font-size: .9rem; }

        /* ===== Divider ===== */
        .divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.18) 20%, rgba(255,255,255,.18) 80%, rgba(255,255,255,0) 100%);
          margin: 2.5rem auto 1.75rem;
          max-width: 980px;
          opacity: .85;
        }

        /* ===== About section ===== */
        #about { position: relative; z-index: 1; max-width: 1100px; margin: 0 auto; text-align: left; }

        /* About hero image */
        .aboutHeroWrap {
          display: flex; justify-content: center; align-items: center;
          margin: 0 auto 1.25rem;
        }
        .aboutHero {
          width: clamp(220px, 60vw, 980px);
          height: auto;
          border-radius: 16px;
          box-shadow: 0 14px 40px rgba(0,0,0,.45);
          transition: transform .35s ease, box-shadow .35s ease;
        }
        .aboutHero:hover { transform: scale(1.015); box-shadow: 0 18px 50px rgba(0,0,0,.5); }

        .aboutTitle { text-align: center; font-size: clamp(1.6rem, 3.2vw, 2rem); margin: .5rem 0 .5rem; }
        .aboutIntro { color: #d1d5db; text-align: center; max-width: 880px; margin: 0 auto 1.2rem; line-height: 1.7; }

        /* Cards */
        .aboutGrid {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }
        .card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.04);
          box-shadow: 0 10px 35px rgba(0,0,0,.4);
          transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease, background .28s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 45px rgba(0,0,0,.5);
          border-color: rgba(255,255,255,.22);
          background: rgba(255,255,255,.06);
        }
        .cardMedia {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          filter: saturate(1.05) contrast(1.02);
        }
        .cardBody { padding: .9rem 1rem 1.1rem; }
        .cardTitle { margin: 0 0 .35rem; font-size: 1.1rem; }
        .cardText { margin: 0; color: #cfd5db; line-height: 1.6; }

        /* Port banner */
        .portBanner {
          margin: 1.2rem auto 0;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.14);
          box-shadow: 0 12px 40px rgba(0,0,0,.45);
        }
        .portBanner img { width: 100%; display: block; }

        /* Reveal animation */
        .reveal { opacity: 0; transform: translateY(14px); transition: opacity .7s ease, transform .7s ease; }
        .reveal.in { opacity: 1; transform: translateY(0); }

        @media (max-width: 480px) {
          .tile { width: 180px; }
          .cardMedia { height: 200px; }
        }
      `}</style>

      {/* Hero */}
      <h1 className="heroTitle">Ohpal International Ltd</h1>
      <p className="heroSub">A seamless collaboration in Trade, Care, and Culture.</p>
      <a href="#about" className="learnBtn" onClick={scrollToAbout} aria-label="Learn more about Ohpal">
        Learn more
      </a>

      {/* Brand tiles (exact items preserved) */}
      <div className="tiles">
        {/* Peridotrepid */}
        <div className="tile" style={{ width: 180 }}>
          <img src="/Peridotrepid.png" alt="Peridotrepid" />
          <p style={{ fontWeight: 600 }}>Peridotrepid</p>
          <p className="caption">Logistics and procurement</p>
        </div>

        {/* Carneliana */}
        <div className="tile" style={{ width: 180 }}>
          <img src="/Carneliana.png" alt="Carneliana" />
          <p style={{ fontWeight: 600 }}>Carneliana</p>
          <p className="caption">Wellness and medical travel</p>
        </div>

        {/* SapphiraCare (fade transition to landing) */}
        <a
          href="/sapphiracare"
          onClick={handleSapphiraCareClick}
          className="tile"
          style={{ width: 180 }}
          aria-label="Go to SapphiraCare"
        >
          <div>
            <img src="/SapphiraCare.png" alt="SapphiraCare" />
            <p style={{ fontWeight: 600 }}>SapphiraCare</p>
            <p className="caption">Care and support services</p>
          </div>
        </a>

        {/* Citrinoor */}
        <div className="tile" style={{ width: 180 }}>
          <img src="/Citrinoor.png" alt="Citrinoor" />
          <p style={{ fontWeight: 600 }}>Citrinoor</p>
          <p className="caption">Community and philanthropy</p>
        </div>
      </div>

      <div className="divider" />

      {/* ABOUT US */}
      <section id="about" className="reveal">
        {/* Hero image for About */}
        <div className="aboutHeroWrap">
          <img
            src="/lizbrigitworkv2.png"
            alt="Liz and Brigit at work"
            className="aboutHero"
            loading="lazy"
          />
        </div>

        <h2 className="aboutTitle">Who we are</h2>
        <p className="aboutIntro">
          Ohpal is a values-first collective built on lived experience and care. We bring logistics, wellness,
          community, and practical support together — so the path to help is clear and human.
        </p>

        {/* Story cards */}
        <div className="aboutGrid">
          <article className="card reveal">
            <img src="/brigitcare.png" alt="Brigit offering care" className="cardMedia" loading="lazy" />
            <div className="cardBody">
              <h3 className="cardTitle">Brigit — Grounded in care</h3>
              <p className="cardText">
                Brigit leads with compassion and clarity. Her work focuses on safe, dignified access to support —
                listening first, then guiding people through at their pace.
              </p>
            </div>
          </article>

          <article className="card reveal">
            <img src="/lizlaptop.png" alt="Liz at laptop" className="cardMedia" loading="lazy" />
            <div className="cardBody">
              <h3 className="cardTitle">Liz — Practical and people-first</h3>
              <p className="cardText">
                Liz brings structure to vision: clear communication, real-world operations, and a commitment to moving
                with integrity in every partnership.
              </p>
            </div>
          </article>

          <article className="card reveal">
            <img src="/lizbrigitport.png" alt="Liz and Brigit on the port" className="cardMedia" loading="lazy" />
            <div className="cardBody">
              <h3 className="cardTitle">Together — Trade, care, and culture</h3>
              <p className="cardText">
                From ports and supply lines to care networks and community projects, we connect what matters and make it
                work smoothly for the people it serves.
              </p>
            </div>
          </article>
        </div>

        {/* Wide banner */}
        <div className="portBanner reveal">
          <img src="/lizbrigitport.png" alt="Liz & Brigit at the harbour" loading="lazy" />
        </div>

        {/* Closing line */}
        <p className="aboutIntro" style={{ marginTop: '1rem' }}>
          We move with purpose, honour relationships, and keep people at the centre of every decision.
        </p>
      </section>
    </main>
  )
}
