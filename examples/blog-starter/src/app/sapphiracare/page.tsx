'use client'

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'

type Stage = 'landing' | 'chooser' | 'prescreen'
type Role = 'user' | 'contractor' | null
type Anim =
  | 'idle'
  | 'landing→chooser'
  | 'chooser→prescreen'
  | 'prescreen→chooser'
  | 'toLanding'

const DURATION_MS = 2100 // smooth, not too fast

export default function SapphiraCarePage() {
  const router = useRouter()

  // stage & animation
  const [stage, setStage] = useState<Stage>('landing')
  const [role, setRole] = useState<Role>(null)
  const [anim, setAnim] = useState<Anim>('idle')

  // prescreen form
  const [form, setForm] = useState({ fullName: '', dob: '', city: '' })
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`Submitted for ${role ?? 'role'}: ${form.fullName}, ${form.dob}, ${form.city}`)
  }

  // transitions
  const startSignup = () => {
    setAnim('landing→chooser')
    setTimeout(() => {
      setStage('chooser')
      setAnim('idle')
    }, DURATION_MS)
  }

  const chooseRole = (r: Role) => {
    setRole(r)
    setAnim('chooser→prescreen')
    setTimeout(() => {
      setStage('prescreen')
      setAnim('idle')
    }, DURATION_MS)
  }

  const backToChooser = () => {
    setAnim('prescreen→chooser')
    setTimeout(() => {
      setStage('chooser')
      setAnim('idle')
    }, DURATION_MS)
  }

  const closeAll = () => {
    setAnim('toLanding')
    setTimeout(() => {
      setStage('landing')
      setRole(null)
      setForm({ fullName: '', dob: '', city: '' })
      setAnim('idle')
    }, DURATION_MS)
  }

  const showPanel =
    stage !== 'landing' ||
    anim === 'landing→chooser' ||
    anim === 'toLanding'

  return (
    <>
      {/* Hide any global Ohpal hero/header on this route only */}
      <style jsx global>{`
        header, .site-header, .ohpalHeader, .ohpal-hero, .home-hero, .hero, .learnMore, .learn-more, .ohpal-cta {
          display: none !important;
        }
      `}</style>

      <style>{`
        :root { --bg:#0a0a0a; --panel:#0b0c10; --muted:#cbd5e1; --line:rgba(255,255,255,.14); --dur:${DURATION_MS}ms; }
        html, body { background: var(--bg); font-family: 'TheSeasons', serif; }
        .page { position: relative; min-height: 100vh; overflow-x: hidden; background: var(--bg); color: #fff; }

        /* Fixed back arrow */
        .backArrow {
          position: fixed; top: max(12px, env(safe-area-inset-top)); left: max(12px, env(safe-area-inset-left));
          z-index: 50;
          color: #fff; background: rgba(11,12,16,0.55); border: 1px solid rgba(255,255,255,.18);
          backdrop-filter: blur(6px);
          cursor: pointer; opacity: .95; line-height: 1; padding: .5rem; border-radius: .7rem;
          transition: opacity .25s ease, transform .15s ease, background .25s ease, border-color .25s ease;
          display: inline-flex; align-items: center; justify-content: center;
        }
        .backArrow:hover { opacity: 1; transform: translateX(-2px); background: rgba(255,255,255,.10); border-color: rgba(255,255,255,.28); }
        .backArrow:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(255,255,255,.25); }

        /* Landing column */
        .landingWrap { width: 100%; min-height: 100vh; display:flex; align-items:center; justify-content:center; padding: 3.5rem 1.25rem 2rem; position: relative; text-align: center; }
        .landingHidden { opacity: 0; pointer-events: none; }

        /* Responsive, larger logo */
        .logo {
          width: clamp(220px, 45vw, 380px);  /* bigger on desktop, scales down on mobile */
          max-width: 90vw;
          height: auto;
          margin: 0 auto 1.2rem;
          opacity: 0.95;
          display: block;
        }

        /* Right panel shell */
        .rightWrap { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; padding: 1rem; }
        .panel {
          width: 92%; max-width: 560px; background: var(--panel);
          border: 1px solid var(--line); border-radius: 18px;
          box-shadow: 0 18px 50px rgba(0,0,0,.55);
          padding: 18px 18px 20px; position: relative;
          opacity: 0; pointer-events: none;
          font-family: 'TheSeasons', serif;
        }
        .panel.show { opacity: 1; pointer-events: auto; }

        .header { display:flex; align-items:center; justify-content: space-between; margin-bottom: 10px; }
        .header h1 { font-size: 1.6rem; margin: 0; line-height: 1.2; font-family: 'TheSeasons', serif; }
        .header h1::before { content: none; } /* kill any rogue bullet/marker causing a leading dot */
        .x { background:none; border:1px solid var(--line); color:#fff; border-radius:10px; padding:6px 10px; cursor:pointer; }

        .muted { color: var(--muted); }

        /* Buttons */
        .btn {
          display: inline-flex; align-items: center; justify-content: center;
          padding: .8rem 1.1rem; border-radius: .8rem; border: 1px solid #fff; color: #fff;
          text-decoration: none; font-weight: 600; font-size: 16px; /* >=16px avoids iOS zoom */
          min-height: 44px; font-family: 'TheSeasons', serif;
        }
        .btn--solid { background: #fff; color: #000; border-color: #fff; }
        .btn--ghost { background: transparent; }

        .row { display: flex; gap: .75rem; flex-wrap: wrap; justify-content: center; }

        /* Chooser options */
        .opt {
          width: 100%; text-align: left; padding: 14px 16px; cursor: pointer;
          border-radius: 14px; border: 1px solid var(--line); background: rgba(255,255,255,.06);
          color: #ffffff; font-size: 16px; min-height: 44px; font-family: 'TheSeasons', serif;
        }
        .opt__title { display:block; font-weight: 700; margin-bottom: 4px; color: #ffffff; }
        .opt__sub { display:block; font-size: 13px; opacity: .95; color: #ffffff; }

        /* Panes */
        .stack { position: relative; min-height: 320px; }
        .pane {
          position:absolute; inset:0;
          opacity:0; pointer-events:none;
          display:flex; flex-direction:column;
          justify-content:flex-start; gap:12px;
        }
        .pane.active { opacity:1; pointer-events:auto; }

        /* Animations */
        @keyframes fadeOutLeft  { 0% {opacity:1; transform:translateX(0)} 100% {opacity:0; transform:translateX(-80px)} }
        @keyframes fadeInRight  { 0% {opacity:0; transform:translateX(80px)} 100% {opacity:1; transform:translateX(0)} }
        @keyframes fadeOutRight { 0% {opacity:1; transform:translateX(0)} 100% {opacity:0; transform:translateX(80px)} }
        @keyframes fadeInLeft   { 0% {opacity:0; transform:translateX(-80px)} 100% {opacity:1; transform:translateX(0)} }

        .landing--idle { opacity:1; transform:none; }
        .landing--exitLeft { animation: fadeOutLeft var(--dur) ease both; }
        .landing--enterLeft { animation: fadeInLeft var(--dur) ease both; }

        .panel--enterRight { animation: fadeInRight var(--dur) ease both; }
        .panel--exitRight  { animation: fadeOutRight var(--dur) ease both; }

        .pane.enter-right { animation: fadeInRight var(--dur) ease both; }
        .pane.enter-left  { animation: fadeInLeft  var(--dur) ease both; }
        .pane.exit-left   { animation: fadeOutLeft var(--dur) ease both; }
        .pane.exit-right  { animation: fadeOutRight var(--dur) ease both; }

        /* Inputs */
        input[type="text"], input[type="date"] {
          width: 100%;
          padding: 0.8rem 0.9rem;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.25);
          background: rgba(255,255,255,.06);
          color: #fff;
          font-size: 16px; /* >=16px to avoid iOS zoom */
          min-height: 44px;
          font-family: 'TheSeasons', serif;
        }

        /* MOBILE REFINEMENTS */
        @media (max-width: 480px) {
          .landingWrap { padding: 3.25rem 1rem 1.25rem; }
          .header h1 { font-size: 1.35rem; }
          .panel { width: 94%; padding: 16px 14px 16px; border-radius: 16px; }
          .stack { min-height: 300px; }

          /* Stack all buttons full-width to avoid clipping */
          .row { flex-direction: column; align-items: stretch; gap: .6rem; }
          .row .btn { width: 100%; }

          /* Back/Submit row also stacks on very small screens */
          .actions { display: flex; gap: 10px; }
          .actions .btn { flex: 1; }
          .actions--stack { flex-direction: column; }

          /* Slightly smaller mobile logo */
          .logo { width: clamp(180px, 60vw, 280px); margin-bottom: 1rem; }
        }

        /* Respect safe area at the bottom on iOS */
        .page::after {
          content: "";
          display: block;
          height: max(0px, env(safe-area-inset-bottom));
        }

        /* Performance */
        .landingWrap, .panel, .pane { will-change: opacity, transform; }
      `}</style>

      <main className="page">
        {/* Fixed back arrow */}
        <button
          className="backArrow"
          onClick={() => router.push('/')}
          aria-label="Back to Ohpal Home"
          type="button"
          title="Back to Ohpal Home"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* LEFT: landing */}
        <section
          className={[
            'landingWrap',
            stage === 'landing' && anim === 'idle'
              ? 'landing--idle'
              : anim === 'landing→chooser'
              ? 'landing--exitLeft'
              : anim === 'toLanding'
              ? 'landing--enterLeft'
              : 'landingHidden'
          ].join(' ')}
          aria-hidden={!(stage === 'landing' || anim === 'landing→chooser' || anim === 'toLanding')}
        >
          <div style={{ textAlign: 'center', maxWidth: 720 }}>
            <img
              src="/SapphiraCareTransparentLogo.png"
              alt="SapphiraCare Logo"
              className="logo"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/SapphiracareTransparentLogo.png' }}
            />
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', fontFamily: 'TheSeasons, serif' }}>
              SapphiraCare
            </h1>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, marginBottom: '1.5rem', fontFamily: 'TheSeasons, serif' }}>
              SapphiraCare is Ohpal’s dedicated branch for care and support services. We connect communities,
              contractors, and care recipients through trust, accessibility, and heart — making quality care simple,
              secure, and human.
            </p>

            {/* Login / CTA row (stacks on mobile via CSS) */}
            <div className="row" style={{ marginBottom: '.5rem' }}>
              <a href="/login?role=USER" className="btn btn--solid">User login</a>
              <a href="/login?role=CONTRACTOR" className="btn btn--ghost">Contractor login</a>
              <button className="btn btn--ghost" onClick={startSignup}>Sign up</button>
            </div>

            <small style={{ color: '#9ca3af' }}>
              Do not have an account yet? Click <strong>Sign up</strong>.
            </small>
          </div>
        </section>

        {/* RIGHT: chooser/prescreen panel */}
        {showPanel && (
          <section className="rightWrap" aria-hidden={false}>
            <div
              className={[
                'panel',
                'show',
                anim === 'landing→chooser' ? 'panel--enterRight' : '',
                anim === 'toLanding' ? 'panel--exitRight' : '',
              ].join(' ')}
            >
              <div className="header">
                <h1>{stage === 'prescreen' ? 'Start verification' : 'Join SapphiraCare'}</h1>
                <button className="x" onClick={closeAll} aria-label="Close">✕</button>
              </div>

              <div className="stack">
                {/* CHOOSER */}
                <div
                  className={[
                    'pane',
                    stage === 'chooser' && anim === 'idle' ? 'active' : '',
                    anim === 'landing→chooser' ? 'active enter-right' : '',
                    anim === 'prescreen→chooser' ? 'active enter-left' : '',
                    anim === 'chooser→prescreen' ? 'exit-left' : '',
                  ].join(' ')}
                  aria-hidden={!(stage === 'chooser' || anim === 'landing→chooser' || anim === 'prescreen→chooser')}
                >
                  <p className="muted" style={{ marginBottom: 12 }}>Are you a…</p>
                  <div style={{ display: 'grid', gap: 12 }}>
                    <button className="opt" onClick={() => chooseRole('user')}>
                      <span className="opt__title">User</span>
                      <span className="opt__sub">I am seeking care</span>
                    </button>
                    <button className="opt" onClick={() => chooseRole('contractor')}>
                      <span className="opt__title">Contractor</span>
                      <span className="opt__sub">I can provide care</span>
                    </button>
                  </div>

                  <p className="muted" style={{ marginTop: 14, fontSize: 13, lineHeight: 1.5 }}>
                    We value your privacy and handle your details with care. Your information will never be shared with
                    marketing firms or external agencies.
                  </p>
                </div>

                {/* PRESCREEN */}
                <div
                  className={[
                    'pane',
                    stage === 'prescreen' && anim === 'idle' ? 'active' : '',
                    anim === 'chooser→prescreen' ? 'active enter-right' : '',
                    anim === 'prescreen→chooser' ? 'exit-right' : '',
                  ].join(' ')}
                  aria-hidden={!(stage === 'prescreen' || anim === 'chooser→prescreen')}
                >
                  <p className="muted" style={{ marginBottom: 12 }}>
                    Please confirm a few details to begin.
                  </p>
                  <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12 }}>
                    <Field label="Full name" id="fullName">
                      <input
                        id="fullName"
                        name="fullName"
                        value={form.fullName}
                        onChange={onChange}
                        required
                        placeholder="First and last name"
                      />
                    </Field>

                    <Field label="Date of birth" id="dob">
                      <input
                        id="dob"
                        name="dob"
                        type="date"
                        value={form.dob}
                        onChange={onChange}
                        required
                      />
                    </Field>

                    <Field label="City" id="city">
                      <input
                        id="city"
                        name="city"
                        value={form.city}
                        onChange={onChange}
                        required
                        placeholder="Your city"
                      />
                    </Field>

                    {/* Actions: auto stack on mobile via CSS */}
                    <div className="actions">
                      <button type="button" className="btn btn--ghost" onClick={backToChooser}>Back</button>
                      <button type="submit" className="btn btn--solid">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}

function Field({ label, id, children }: { label: string; id: string; children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label htmlFor={id} style={{ fontWeight: 600, fontSize: 14 }}>{label}</label>
      {children}
    </div>
  )
}
