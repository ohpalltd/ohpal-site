'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AboutPage() {
  const router = useRouter()
  const [sending, setSending] = useState(false)
  const [ok, setOk] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)
  const [message, setMessage] = useState('')
  const maxChars = 1000

  // reveal
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

  async function submitContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true); setOk(null); setErr(null)
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to send')
      setOk('Thank you for contacting us. Someone from our team will respond to you within the next 24 hours.')
      form.reset()
      setMessage('')
    } catch (e: any) {
      setErr('Sorry, your message could not be sent. Please try again in a moment.')
    } finally {
      setSending(false)
    }
  }

  return (
    <main className="aboutMain">
      <style>{`
        :root { --bg:#0a0a0a; --panel:#0b0c10; --muted:#cbd5e1; --line:rgba(255,255,255,.14); }

        .aboutMain {
          position: relative; min-height: 100vh; background: var(--bg); color: #fff; overflow-x: hidden;
        }

        /* small fixed Ohpal watermark centered */
        .aboutMain::before {
          content: "";
          position: fixed; inset: 0;
          background-image: url('/Ohpal2DTransparentHero.png');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: min(280px, 36vw);
          opacity: 0.09; pointer-events: none; z-index: 0;
        }

        .backArrow {
          position: fixed; top: max(12px, env(safe-area-inset-top)); left: max(12px, env(safe-area-inset-left));
          z-index: 50; color:#fff; background: rgba(11,12,16,0.55);
          border:1px solid rgba(255,255,255,.18); border-radius: .7rem;
          backdrop-filter: blur(6px); padding:.5rem; line-height:1; cursor:pointer;
          transition: transform .2s ease, opacity .2s ease, background .2s ease, border-color .2s ease;
        }
        .backArrow:hover { transform: translateX(-2px); background: rgba(255,255,255,.10); border-color: rgba(255,255,255,.28); }

        /* Hero */
        .hero { position: relative; z-index: 1; padding: 82px 1rem 18px; text-align: center; max-width: 1200px; margin: 0 auto; }
        .heroGraphic { width: clamp(260px, 70vw, 1080px); height: auto; border-radius: 18px; box-shadow: 0 18px 60px rgba(0,0,0,.55); display: block; margin: 0 auto 1rem; }
        .heroTitle { font-size: clamp(1.9rem, 4.5vw, 2.7rem); margin: .25rem 0 .5rem; }
        .heroSub { color: #d1d5db; margin: 0 auto 1rem; max-width: 860px; line-height: 1.6; }

        /* Story op-ed layout with wrapped images */
        section { position: relative; z-index: 1; max-width: 1100px; margin: 0 auto; padding: 1.25rem 1rem 2rem; }
        .sectionTitle { font-size: clamp(1.4rem, 3.2vw, 1.9rem); margin: .25rem 0 .75rem; text-align: center; }
        .sectionLead  { color:#cfd5db; text-align:center; margin: 0 auto 1.1rem; max-width: 900px; line-height:1.7; }

        .opEd { max-width: 900px; margin: 0 auto; line-height: 1.9; font-size: 1.05rem; color: #e5e7eb; }
        .imgLeft, .imgRight {
          width: 50%;
          max-width: 480px;
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0,0,0,.45);
        }
        .imgLeft { float: left; margin: .25rem 1rem .75rem 0; }
        .imgRight { float: right; margin: .25rem 0 .75rem 1rem; }

        .clearfix::after { content:""; display:block; clear:both; }

        /* Timeline */
        .timeline { position: relative; padding-left: 1.25rem; margin: 1rem auto 0; max-width: 760px; }
        .timeline::before { content: ""; position: absolute; left: 8px; top: 0; bottom: 0; width: 2px; background: rgba(255,255,255,.18); }
        .tItem { position: relative; margin: 0 0 1rem 0; padding-left: 1rem; }
        .tItem::before { content: ""; position: absolute; left: -2px; top: .35rem; width: 10px; height: 10px; border-radius: 50%; background: #fff; box-shadow: 0 0 0 4px rgba(255,255,255,.12); }
        .tYear { font-weight: 700; margin: 0 0 .25rem; }
        .tText { margin: 0; color:#d1d5db; line-height:1.6; }

        /* Contact form */
        .contactWrap { max-width: 720px; margin: 0 auto; }
        .card {
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.04);
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0,0,0,.45);
          padding: 1rem;
        }
        .row { display: grid; gap: .75rem; grid-template-columns: 1fr 1fr; }
        .row3 { display: grid; gap: .75rem; grid-template-columns: 1fr; }
        label { display:block; font-size:.9rem; opacity:.9; margin-bottom:.25rem; }
        input, textarea {
          width:100%; padding:.8rem .9rem; border-radius:.7rem; border:1px solid rgba(255,255,255,.18);
          background: rgba(255,255,255,.04); color:#fff; outline:none;
        }
        input:focus, textarea:focus { border-color:#fff; background: rgba(255,255,255,.06); }
        .small { font-size:.85rem; opacity:.8; }
        .btn {
          display:inline-flex; align-items:center; justify-content:center;
          padding:.75rem 1.15rem; min-height:44px; border-radius:.85rem; border:1px solid #fff;
          font-weight:600; color:#000; background:#fff; text-decoration:none; cursor:pointer;
        }
        .note { margin-top:.75rem; color:#cbd5e1; }

        .reveal { opacity: 0; transform: translateY(14px); transition: opacity .7s ease, transform .7s ease; }
        .reveal.in { opacity: 1; transform: translateY(0); }

        @media (max-width: 860px) {
          .imgLeft, .imgRight { float:none; width:100%; margin: 0 0 1rem 0; }
          .row { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Back to home */}
      <button
        className="backArrow"
        onClick={() => router.push('/')}
        aria-label="Back to Home"
        type="button"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Hero */}
      <header className="hero">
        <img
          src="/lizbrigit.png"
          alt="Liz and Brigit"
          className="heroGraphic reveal"
          loading="eager"
        />
        <h1 className="heroTitle reveal">About Ohpal</h1>
        <p className="heroSub reveal">
          We are a values first collective connecting trade, care and culture with steady hands and real world action.
        </p>
      </header>

      {/* STORY */}
      <section id="story" className="reveal">
        <h2 className="sectionTitle">Our story</h2>
        <p className="sectionLead">
          How two different paths met, aligned, and chose to build something useful for everyday people.
        </p>

        <div className="opEd clearfix">
          <img src="/lizbrigitport.png" alt="On the port" className="imgLeft" loading="lazy" />
          <p>
            Ohpal began as a conversation between two women who wanted better for their communities.
            Brigit brought years of care and support experience that keeps dignity at the centre.
            Liz brought logistics and operations that make plans real on the ground.
          </p>
          <p>
            We compared notes. We saw the gaps. Then we chose to build a grassroots initiative that makes
            services easier to access, trade more transparent, and communities more connected.
            The idea was never to chase prestige. It was to make something that works and keeps people first.
          </p>
          <img src="/brigitcare.png" alt="Brigit in care setting" className="imgRight" loading="lazy" />
          <p>
            From there we shaped a simple model. Clear sign ups. Honest information. Practical routes from need to help.
            We keep learning from the people we serve and from the partners who walk with us. That is how Ohpal grows.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="reveal">
        <h2 className="sectionTitle">Timeline</h2>
        <div className="timeline">
          <div className="tItem reveal">
            <h3 className="tYear">Dec 2024</h3>
            <p className="tText">Vision starts in a different direction.</p>
          </div>
          <div className="tItem reveal">
            <h3 className="tYear">Jul 2025</h3>
            <p className="tText">Starting the implementation of processes that lead up to the current UI.</p>
          </div>
          <div className="tItem reveal">
            <h3 className="tYear">Nov 2025</h3>
            <p className="tText">Marketing soft launch campaign for recruitment for Sapphiracare.</p>
          </div>
          <div className="tItem reveal">
            <h3 className="tYear">Jan 2026</h3>
            <p className="tText">Marketing campaign implemented for hard Launch.</p>
          </div>
          <div className="tItem reveal">
            <h3 className="tYear">Aug 2026</h3>
            <p className="tText">The implementation of Peridotrepid.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="reveal" aria-labelledby="contact-title">
        <h2 id="contact-title" className="sectionTitle">Reach out</h2>
        <div className="contactWrap">
          <form className="card" onSubmit={submitContact}>
            <div className="row">
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div>
                <label htmlFor="phone">Contact number (Include country code)</label>
                <input id="phone" name="phone" type="text" inputMode="tel" required />
              </div>
            </div>
            <div className="row3" style={{ marginTop: '.75rem' }}>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div>
                <label htmlFor="message">Your query</label>
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  maxLength={maxChars}
                  value={message}
                  onChange={(e)=> setMessage(e.target.value)}
                  required
                />
                <div className="small" style={{ textAlign: 'right' }}>
                  {message.length}/{maxChars}
                </div>
              </div>
            </div>

            <div style={{ display:'flex', gap:'.6rem', alignItems:'center', marginTop:'.5rem' }}>
              <button className="btn" type="submit" disabled={sending}>
                {sending ? 'Sending...' : 'Submit'}
              </button>
              <button className="btn" type="button" onClick={()=>router.push('/')}>Back to Home</button>
            </div>
            {ok && <p className="note" role="status">{ok}</p>}
            {err && <p className="note" role="alert" style={{ color:'#fca5a5' }}>{err}</p>}
          </form>
        </div>
      </section>
    </main>
  )
}

