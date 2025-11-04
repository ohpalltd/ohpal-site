'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [showContact, setShowContact] = useState(false);
  const maxChars = 1000;

  // reveal animations
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Jump to hash (#story / #timeline) when coming from home chips
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
    setSending(true); setOk(null); setErr(null);
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
    } catch (e: any) {
      setErr('Sorry, your message could not be sent. Please try again in a moment.');
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="aboutMain">
      <style>{`
        :root { --bg:#0a0a0a; --panel:#0b0c10; --muted:#cbd5e1; --line:rgba(255,255,255,.14); }

        .aboutMain { position: relative; min-height: 100vh; background: var(--bg); color: #fff; overflow-x: hidden; }

        /* subtle watermark */
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

        /* Top hero (reduced ~30%) */
        .miniHero { position: relative; z-index: 1; padding: 60px 1rem 10px; text-align: center; max-width: 1200px; margin: 0 auto; }
        .miniHero img { width: clamp(180px, 48vw, 760px); height: auto; border-radius: 18px; box-shadow: 0 18px 60px rgba(0,0,0,.55); }

        section { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 1.25rem 1rem 2rem; }
        .sectionTitle { font-size: clamp(1.6rem, 3vw, 2.1rem); margin: .25rem 0 .75rem; text-align: center; }
        .sectionLead  { color:#cfd5db; text-align:center; margin: 0 auto 1.1rem; max-width: 900px; line-height:1.7; }

        /* === three-column story: image | text | image === */
        .storyGrid {
          display: grid;
          grid-template-columns: 1fr minmax(520px, 640px) 1fr;
          gap: 2rem;
          align-items: start;
        }
        .storyImg {
          position: sticky;
          top: 100px;
          align-self: start;
        }
        .storyImg img {
          width: 100%;
          max-width: 420px;
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0,0,0,.45);
          object-fit: cover;
          display: block;
          margin: 0 auto;
        }
        .storyText { line-height: 1.85; font-size: 1.06rem; color: #e5e7eb; }

        /* Timeline */
        .timeline { position: relative; padding-left: 1.25rem; margin: 1rem auto 0; max-width: 760px; }
        .timeline::before { content: ""; position: absolute; left: 8px; top: 0; bottom: 0; width: 2px; background: rgba(255,255,255,.18); }
        .tItem { position: relative; margin: 0 0 1rem 0; padding-left: 1rem; }
        .tItem::before { content: ""; position: absolute; left: -2px; top: .35rem; width: 10px; height: 10px; border-radius: 50%; background: #fff; box-shadow: 0 0 0 4px rgba(255,255,255,.12); }
        .tYear { font-weight: 700; margin: 0 0 .25rem; }
        .tText { margin: 0; color:#d1d5db; line-height:1.6; }

        /* Buttons row */
        .chips {
          display:flex; gap:.6rem; justify-content:center; flex-wrap:wrap; margin: 0 auto 1rem;
        }
        .chip {
          padding:.55rem 1rem; border:1px solid rgba(255,255,255,.28); border-radius:999px; color:#fff; text-decoration:none; cursor:pointer;
          transition: transform .18s ease, background .18s ease, border-color .18s ease;
        }
        .chip:hover { transform: translateY(-2px); background: rgba(255,255,255,.08); border-color:#fff; }

        /* Contact modal */
        .modalBg {
          position: fixed; inset:0; background: rgba(0,0,0,.6); display:flex; align-items:center; justify-content:center; z-index: 60;
        }
        .card {
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(14,14,16,.92);
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0,0,0,.55);
          padding: 1rem;
          width: min(720px, 92vw);
          color: #fff;
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

        .reveal { opacity: 0; transform: translateY(14px); transition: opacity .7s ease, transform .7s ease; }
        .reveal.in { opacity: 1; transform: translateY(0); }

        @media (max-width: 980px) {
          .storyGrid { grid-template-columns: 1fr; }
          .storyImg { position: static; }
          .storyImg img { max-width: 100%; }
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

      {/* top picture reduced by ~30% */}
      <div className="miniHero">
        <img src="/lizbrigit.png" alt="Liz and Brigit" loading="eager" />
      </div>

      {/* quick chips row */}
      <div className="chips">
        <a className="chip" href="#story">Our Story</a>
        <a className="chip" href="#timeline">Timeline</a>
        <button className="chip" onClick={() => setShowContact(true)} type="button">Contact</button>
      </div>

      {/* STORY */}
      <section id="story" className="reveal">
        <h2 className="sectionTitle">Our story</h2>
        <p className="sectionLead">
          How two different paths met, aligned, and chose to build something useful for everyday people.
        </p>

        <div className="storyGrid">
          <div className="storyImg">
            <img src="/lizbrigitport.png" alt="On the port" />
          </div>

          <div className="storyText">
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
            <p>
              From there we shaped a simple model. Clear sign ups. Honest information. Practical routes from need to help.
              We keep learning from the people we serve and from the partners who walk with us. That is how Ohpal grows.
            </p>
          </div>

          <div className="storyImg">
            <img src="/brigitcare.png" alt="Brigit in care setting" />
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

      {/* CONTACT MODAL (opens via button) */}
      {showContact && (
        <div className="modalBg" role="dialog" aria-modal="true" aria-labelledby="contact-title">
          <div className="card">
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'.5rem' }}>
              <h2 id="contact-title" className="sectionTitle" style={{ margin: 0, textAlign:'left' }}>Reach out</h2>
              <button className="chip" onClick={() => setShowContact(false)} type="button">Close</button>
            </div>

            <form onSubmit={submitContact}>
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
                <button className="btn" type="button" onClick={()=>setShowContact(false)}>Cancel</button>
                <button className="btn" type="button" onClick={()=>router.push('/')}>Back to Home</button>
              </div>

              {ok && <p className="small" role="status" style={{ marginTop: '.6rem', color:'#cbd5e1' }}>{ok}</p>}
              {err && <p className="small" role="alert" style={{ marginTop: '.6rem', color:'#fca5a5' }}>{err}</p>}
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
