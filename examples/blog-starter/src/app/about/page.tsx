'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AboutPage() {
  const router = useRouter()

  // Scroll-reveal for sections/cards
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const smoothTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="aboutMain">
      <style>{`
        :root { --bg:#0a0a0a; --panel:#0b0c10; --muted:#cbd5e1; --line:rgba(255,255,255,.14); }

        .aboutMain {
          position: relative;
          min-height: 100vh;
          background: var(--bg);
          color: #fff;
          overflow-x: hidden;
        }
        /* Subtle fixed watermark across the whole route */
        .aboutMain::before {
          content: "";
          position: fixed;
          inset: 0;
          background-image: url('/Ohpal2DTransparentHero.png');
          background-repeat: no-repeat;
          background-position: center 15%;
          background-size: min(1100px, 86vw);
          opacity: 0.06;
          pointer-events: none;
          z-index: 0;
        }

        /* Fixed back to home button */
        .backArrow {
          position: fixed; top: max(12px, env(safe-area-inset-top)); left: max(12px, env(safe-area-inset-left));
          z-index: 50; color:#fff; background: rgba(11,12,16,0.55);
          border:1px solid rgba(255,255,255,.18); border-radius: .7rem;
          backdrop-filter: blur(6px);
          padding:.5rem; line-height:1; cursor:pointer;
          transition: transform .2s ease, opacity .2s ease, background .2s ease, border-color .2s ease;
        }
        .backArrow:hover { transform: translateX(-2px); opacity: 1; background: rgba(255,255,255,.10); border-color: rgba(255,255,255,.28); }

        /* Hero */
        .hero {
          position: relative;
          z-index: 1;
          padding: 82px 1rem 24px; /* space for fixed back btn */
          text-align: center;
          max-width: 1200px; margin: 0 auto;
        }
        .heroGraphic {
          width: clamp(260px, 70vw, 1080px);
          height: auto;
          border-radius: 18px;
          box-shadow: 0 18px 60px rgba(0,0,0,.55);
          display: block;
          margin: 0 auto 1rem;
          transition: transform .35s ease, box-shadow .35s ease;
        }
        .heroGraphic:hover { transform: scale(1.012); box-shadow: 0 22px 70px rgba(0,0,0,.6); }
        .heroTitle { font-size: clamp(1.9rem, 4.5vw, 2.7rem); margin: .25rem 0 .5rem; }
        .heroSub   { color: #d1d5db; margin: 0 auto 1rem; max-width: 860px; line-height: 1.6; }

        /* Sticky sub-nav */
        .subnavWrap {
          position: sticky; top: 0; z-index: 5;
          background: rgba(10,10,10,.65);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(255,255,255,.12);
        }
        .subnav {
          display: flex; gap: .6rem; justify-content: center; flex-wrap: wrap;
          padding: .6rem .75rem;
          max-width: 1200px; margin: 0 auto;
        }
        .chip {
          display: inline-flex; align-items: center; justify-content: center;
          padding: .5rem .9rem;
          border: 1px solid rgba(255,255,255,.28);
          color:#fff; border-radius: 999px;
          text-decoration: none; cursor: pointer;
          transition: transform .18s ease, background .18s ease, border-color .18s ease, opacity .18s ease;
        }
        .chip:hover { transform: translateY(-2px); background: rgba(255,255,255,.08); border-color: #fff; }

        /* Sections */
        section { position: relative; z-index: 1; max-width: 1100px; margin: 0 auto; padding: 1.25rem 1rem 2rem; }
        .sectionTitle { font-size: clamp(1.4rem, 3.2vw, 1.9rem); margin: .25rem 0 .75rem; text-align: center; }
        .sectionLead  { color:#cfd5db; text-align:center; margin: 0 auto 1.1rem; max-width: 900px; line-height:1.7; }

        /* Cards / panels */
        .grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }
        .panel {
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.04);
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0,0,0,.45);
          overflow: hidden;
          transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease, background .28s ease;
        }
        .panel:hover { transform: translateY(-6px); background: rgba(255,255,255,.06); border-color: rgba(255,255,255,.22); }
        .panelMedia { width: 100%; height: 220px; object-fit: cover; display: block; }
        .panelBody { padding: .9rem 1rem 1.1rem; }
        .panelTitle { margin: 0 0 .35rem; font-size: 1.1rem; }
        .panelText { margin: 0; color:#d5dbe2; line-height: 1.6; }

        /* Timeline */
        .timeline {
          position: relative;
          padding-left: 1.25rem;
          margin: 1rem 0 0;
        }
        .timeline::before {
          content: ""; position: absolute; left: 8px; top: 0; bottom: 0;
          width: 2px; background: rgba(255,255,255,.18);
        }
        .tItem {
          position: relative; margin: 0 0 1rem 0; padding-left: 1rem;
        }
        .tItem::before {
          content: ""; position: absolute; left: -2px; top: .35rem;
          width: 10px; height: 10px; border-radius: 50%;
          background: #fff; box-shadow: 0 0 0 4px rgba(255,255,255,.12);
        }
        .tYear { font-weight: 700; margin: 0 0 .25rem; }
        .tText { margin: 0; color:#d1d5db; line-height: 1.6; }

        /* Banner */
        .wideBanner {
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 16px; overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,.45);
          margin-top: 1.25rem;
        }
        .wideBanner img { width: 100%; display: block; }

        /* CTA row */
        .ctaRow {
          display: flex; gap: .75rem; justify-content: center; flex-wrap: wrap;
          margin-top: .75rem;
        }
        .btn {
          display: inline-flex; align-items:center; justify-content:center;
          padding: .75rem 1.15rem; min-height: 44px;
          border-radius: .85rem; border: 1px solid #fff;
          font-weight: 600; color:#000; background:#fff; text-decoration:none;
          transition: transform .18s ease, box-shadow .18s ease, opacity .18s ease, background .18s ease, color .18s ease;
        }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,.35); }
        .btnGhost { background: transparent; color:#fff; }
        .btnGhost:hover { background: rgba(255,255,255,.1); }

        /* Reveal animation */
        .reveal { opacity: 0; transform: translateY(14px); transition: opacity .7s ease, transform .7s ease; }
        .reveal.in { opacity: 1; transform: translateY(0); }

        @media (max-width: 520px) {
          .panelMedia { height: 200px; }
        }
      `}</style>

      {/* Back to home */}
      <button
        className="backArrow"
        onClick={() => router.push('/')}
        aria-label="Back to Home"
        title="Back to Home"
        type="button"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Hero */}
      <header className="hero">
        <img
          src="/lizbrigitworkv2.png"
          alt="Liz and Brigit at work"
          className="heroGraphic reveal"
          loading="eager"
        />
        <h1 className="heroTitle reveal">About Ohpal</h1>
        <p className="heroSub reveal">
          We’re a values-first collective building bridges across trade, care, and culture —
          grounded in lived experience and practical support.
        </p>
      </header>

      {/* Sticky sub-nav */}
      <div className="subnavWrap">
        <nav className="subnav" aria-label="About navigation">
          <a href="#story" onClick={smoothTo('story')} className="chip">Our story</a>
          <a href="#people" onClick={smoothTo('people')} className="chip">People</a>
          <a href="#timeline" onClick={smoothTo('timeline')} className="chip">Timeline</a>
          <a href="#work" onClick={smoothTo('work')} className="chip">What we do</a>
          <a href="#contact" onClick={smoothTo('contact')} className="chip">Contact</a>
        </nav>
      </div>

      {/* STORY */}
      <section id="story" className="reveal">
        <h2 className="sectionTitle">Our story</h2>
        <p className="sectionLead">
          Ohpal began with a simple promise: to connect people to what they need with dignity and clarity.
          From ports and supply lines to care networks and cultural projects, we show up with a steady hand and a human heart.
        </p>

        <div className="grid">
          <article className="panel reveal">
            <img src="/lizbrigitport.png" alt="On the port" className="panelMedia" loading="lazy" />
            <div className="panelBody">
              <h3 className="panelTitle">Built from lived experience</h3>
              <p className="panelText">
                We’ve walked the long roads—across systems, services, and supply chains. That’s why we design for real life,
                not paperwork. Listening comes first; action follows.
              </p>
            </div>
          </article>

          <article className="panel reveal">
            <img src="/SapphiraCare.png" alt="SapphiraCare brand" className="panelMedia" loading="lazy" />
            <div className="panelBody">
              <h3 className="panelTitle">Care, made simple</h3>
              <p className="panelText">
                With SapphiraCare we connect care recipients and contractors through trust, transparency, and access —
                making quality support easier to find and easier to start.
              </p>
            </div>
          </article>
        </div>

        <div className="wideBanner reveal">
          <img src="/lizbrigitport.png" alt="Harbour banner" loading="lazy" />
        </div>
      </section>

      {/* PEOPLE */}
      <section id="people" className="reveal">
        <h2 className="sectionTitle">People</h2>
        <p className="sectionLead">
          We honour relationships. Meet the women holding the line with care and clarity.
        </p>

        <div className="grid">
          <article className="panel reveal">
            <img src="/brigitcare.png" alt="Brigit with elders" className="panelMedia" loading="lazy" />
            <div className="panelBody">
              <h3 className="panelTitle">Brigit — Grounded in care</h3>
              <p className="panelText">
                Brigit leads with compassion and practical wisdom. She focuses on safe, dignified access to support —
                listening first, then guiding people through at their pace.
              </p>
            </div>
          </article>

          <article className="panel reveal">
            <img src="/lizlaptop.png" alt="Liz working" className="panelMedia" loading="lazy" />
            <div className="panelBody">
              <h3 className="panelTitle">Liz — Practical and people-first</h3>
              <p className="panelText">
                Liz brings structure to vision: clear communication, real-world operations, and a commitment to moving
                with integrity in every partnership.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="reveal">
        <h2 className="sectionTitle">Timeline</h2>
        <p className="sectionLead">A few waypoints on the path we’re walking.</p>

        <div className="timeline">
          <div className="tItem reveal">
            <h3 className="tYear">2022</h3>
            <p className="tText">Vision takes shape. We begin sketching a values-first framework for trade and care.</p>
          </div>
          <div className="tItem reveal">
            <h3 className="tYear">2023</h3>
            <p className="tText">Community groundwork, forming partnerships, mapping needs, and designing SapphiraCare.</p>
          </div>
          <div className="tItem reveal">
            <h3 className="tYear">2024</h3>
            <p className="tText">Ohpal brand consolidates; pilot workstreams for logistics and care supports roll out.</p>
          </div>
          <div className="tItem reveal">
            <h3 className="tYear">2025</h3>
            <p className="tText">SapphiraCare public landing launches; new collaborations across trade, care, and culture.</p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="work" className="reveal">
        <h2 className="sectionTitle">What we do</h2>
        <p className="sectionLead">
          We build practical bridges — from port to person, from idea to impact.
        </p>

        <div className="grid">
          <article className="panel reveal">
            <div className="panelBody">
              <h3 className="panelTitle">Logistics & Procurement (Peridotrepid)</h3>
              <p className="panelText">
                Reliable movement of goods with care for timing, quality, and relationships. We keep lines clear so
                communities and partners get what they need, when they need it.
              </p>
            </div>
          </article>

          <article className="panel reveal">
            <div className="panelBody">
              <h3 className="panelTitle">Wellness & Medical Travel (Carneliana)</h3>
              <p className="panelText">
                Travel that respects people’s health journeys — organized with dignity, clarity, and safety.
              </p>
            </div>
          </article>

          <article className="panel reveal">
            <div className="panelBody">
              <h3 className="panelTitle">Care & Support (SapphiraCare)</h3>
              <p className="panelText">
                Connecting care recipients and providers with transparency and heart. Sign-ups are simple; help is human.
              </p>
            </div>
          </article>

          <article className="panel reveal">
            <div className="panelBody">
              <h3 className="panelTitle">Community & Philanthropy (Citrinoor)</h3>
              <p className="panelText">
                Projects that honour culture and empower communities — listening, partnering, and building for the long term.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="reveal" aria-labelledby="contact-title">
        <h2 id="contact-title" className="sectionTitle">Reach out</h2>
        <p className="sectionLead">
          Want to collaborate, ask a question, or get support? We’d love to hear from you.
        </p>
        <div className="ctaRow">
          <a className="btn" href="mailto:hello@ohpal.org">Email us</a>
          <a className="btn btnGhost" href="/" onClick={(e)=>{e.preventDefault(); router.push('/')}}>
            Back to Home
          </a>
          <a className="btn btnGhost" href="/sapphiracare" onClick={(e)=>{e.preventDefault(); router.push('/sapphiracare')}}>
            Visit SapphiraCare
          </a>
        </div>
      </section>
    </main>
  )
}
