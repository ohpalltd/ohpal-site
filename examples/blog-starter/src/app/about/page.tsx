'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const maxChars = 1000;

  // reveal animations
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Jump to hash (#story / #timeline)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const h = window.location.hash;
    if (h) {
      setTimeout(() => {
        const id = h.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  }, []);

  async function submitContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setOk(null);
    setErr(null);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to send');
      setOk('Thank you for your message, someone from our team will be in touch with you.');
      form.reset();
      setMessage('');
    } catch {
      setErr('Sorry, your message could not be sent. Please try again in a moment.');
    } finally {
      setSending(false);
    }
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
          padding: 96px 0 40px;
        }

        /* subtle logo watermark only, not the palm banner */
        .aboutMain::before {
          content: "";
          position: fixed; inset: 0;
          background-image: url('/Ohpal2DTransparentHero.png');
          background-repeat: no-repeat;
          background-position: center center;
          background-size: min(260px, 32vw);
          opacity: 0.08;
          pointer-events: none;
          z-index: 0;
        }

        .backArrow {
          position: fixed;
          top: max(12px, env(safe-area-inset-top));
          left: max(12px, env(safe-area-inset-left));
          z-index: 50;
          color:#fff;
          background: rgba(11,12,16,0.55);
          border:1px solid rgba(255,255,255,.18);
          border-radius: .7rem;
          backdrop-filter: blur(6px);
          padding:.5rem;
          line-height:1;
          cursor:pointer;
          transition: transform .2s ease, opacity .2s ease, background .2s ease, border-color .2s ease;
        }
        .backArrow:hover {
          transform: translateX(-2px);
          background: rgba(255,255,255,.10);
          border-color: rgba(255,255,255,.28);
        }

        section {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 1.25rem 2.5rem;
        }
        .sectionTitle {
          font-size: clamp(1.8rem, 3vw, 2.3rem);
          margin: 0 0 .5rem;
          text-align: center;
        }
        .sectionLead  {
          color:#cfd5db;
          text-align:center;
          margin: 0 auto 2.5rem;
          max-width: 820px;
          line-height:1.7;
        }

        /* image | text | image layout */
        .storyGrid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr) minmax(0, 1fr);
          gap: 2rem;
          align-items: start;
        }
        .storyImg {
          align-self: start;
        }
        .storyImg img {
          width: 100%;
          max-width: 380px;
          border-radius: 18px;
          box-shadow: 0 16px 45px rgba(0,0,0,.55);
          object-fit: cover;
          display: block;
          margin: 0 auto;
        }
        .storyText {
          line-height: 1.9;
          font-size: 1.02rem;
          color: #e5e7eb;
          text-align: left;
        }

        /* timeline */
        .timeline {
          position: relative;
          padding-left: 1.25rem;
          margin: 0 auto;
          max-width: 720px;
        }
        .timeline::before {
          content: "";
          position: absolute;
          left: 8px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255,255,255,.18);
        }
        .tItem { position: relative; margin: 0 0 1rem 0; padding-left: 1rem; }
        .tItem::before {
          content: "";
          position: absolute;
          left: -2px;
          top: .35rem;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(255,255,255,.12);
        }
        .tYear { font-weight: 700; margin: 0 0 .25rem; }
        .tText { margin: 0; color:#d1d5db; line-height:1.6; }

        /* contact card anchored at bottom of page, aligned grid */
        .contactCard {
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(14,14,16,.92);
          border-radius: 18px;
          box-shadow: 0 14px 40px rgba(0,0,0,.6);
          padding: 1.5rem 1.75rem 1.75rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .contactGrid {
          display:grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }
        label {
          display:block;
          font-size:.9rem;
          opacity:.9;
          margin-bottom:.25rem;
        }
        input, textarea {
          width:100%;
          padding:.8rem .9rem;
          border-radius:.7rem;
          border:1px solid rgba(255,255,255,.18);
          background: rgba(255,255,255,.04);
          color:#fff;
          outline:none;
        }
        input:focus, textarea:focus {
          border-color:#fff;
          background: rgba(255,255,255,.06);
        }
        textarea { resize: vertical; min-height: 160px; }
        .small { font-size:.85rem; opacity:.8; }
        .btnRow {
          display:flex;
          gap:.75rem;
          justify-content:flex-start;
          flex-wrap:wrap;
          margin-top: 1rem;
        }
        .btn {
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding:.75rem 1.15rem;
          min-height:44px;
          border-radius:.85rem;
          border:1px solid #fff;
          font-weight:600;
          color:#000;
          background:#fff;
          text-decoration:none;
          cursor:pointer;
        }

        .chips {
          display:flex;
          gap:.6rem;
          justify-content:center;
          flex-wrap:wrap;
          margin: 0 auto 2rem;
        }
        .chip {
          padding:.55rem 1rem;
          border:1px solid rgba(255,255,255,.28);
          border-radius:999px;
          color:#fff;
          text-decoration:none;
          cursor:pointer;
          background: transparent;
          transition: transform .18s ease, background .18s ease, border-color .18s ease;
        }
        .chip:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,.08);
          border-color:#fff;
        }

        .reveal { opacity: 0; transform: translateY(14px); transition: opacity .7s ease, transform .7s ease; }
        .reveal.in { opacity: 1; transform: translateY(0); }

        @media (max-width: 980px) {
          .storyGrid {
            grid-template-columns: minmax(0, 1fr);
          }
          .storyText { text-align: left; }
          .contactGrid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>

      {/* back to home */}
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

      {/* chips below the navbar, no banner */}
      <div className="chips">
        <a className="chip" href="#story">Our story</a>
        <a className="chip" href="#timeline">Timeline</a>
        <a className="chip" href="#contact">Contact</a>
      </div>

      {/* STORY */}
      <section id="story" className="reveal">
        <h2 className="sectionTitle">About Ohpal</h2>
        <p className="sectionLead">
          Two different paths that met, aligned, and chose to build something useful for everyday people.
        </p>

        <div className="storyGrid">
          <div className="storyImg">
            <img src="/lizbrigitport.png" alt="Liz and Brigit on the port" />
          </div>

          <div className="storyText">
            <p>
              Ohpal began as a conversation between two women who wanted better for their communities.
              Brigit brought years of care and support experience that keeps dignity at the centre.
              Liz brought logistics and operations that make plans real on the ground.
            </p>
            <p>
              We compared notes. We saw the gaps. Then we chose to build a grounded initiative that makes
              services easier to access, trade more transparent, and communities more connected.
              The aim was never prestige. It was to make something that works and keeps people first.
            </p>
            <p>
              From there we shaped a simple model. Clear sign ups. Honest information. Practical routes from need to help.
              We keep learning from the people we serve and from the partners who walk with us. That is how Ohpal grows.
            </p>
          </div>

          <div className="storyImg">
            <img src="/brigitcare.png" alt="Brigit in a care setting" />
          </div>
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
            <p className="tText">Implementation of the first processes that lead up to the current build.</p>
          </div>
          <div className="tItem reveal">
            <h3 className="tYear">Nov 2025</h3>
            <p className="tText">Soft launch for Sapphiracare recruitment.</p>
          </div>
          <div className="tItem reveal">
            <h3 className="tYear">Jan 2026</h3>
            <p className="tText">Hard launch campaign for Sapphiracare.</p>
          </div>
          <div className="tItem reveal">
            <h3 className="tYear">Aug 2026</h3>
            <p className="tText">Launch of Peridotrepid.</p>
          </div>
        </div>
      </section>

      {/* CONTACT card at the bottom */}
      <section id="contact" className="reveal">
        <div className="contactCard">
          <h2 className="sectionTitle" style={{ textAlign: 'left', marginBottom: '1rem' }}>Reach out</h2>
          <form onSubmit={submitContact}>
            <div className="contactGrid">
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div>
                <label htmlFor="phone">Contact number (include country code)</label>
                <input id="phone" name="phone" type="text" inputMode="tel" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div>
                <label htmlFor="message">Your query</label>
                <textarea
                  id="message"
                  name="message"
                  maxLength={maxChars}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                />
                <div className="small" style={{ textAlign: 'right' }}>
                  {message.length}/{maxChars}
                </div>
              </div>
            </div>

            <div className="btnRow">
              <button className="btn" type="submit" disabled={sending}>
                {sending ? 'Sending...' : 'Submit'}
              </button>
              <button className="btn" type="button" onClick={() => router.push('/')}>
                Back to home
              </button>
            </div>

            {ok && (
              <p className="small" role="status" style={{ marginTop: '.6rem', color: '#cbd5e1' }}>
                {ok}
              </p>
            )}
            {err && (
              <p className="small" role="alert" style={{ marginTop: '.6rem', color: '#fca5a5' }}>
                {err}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
