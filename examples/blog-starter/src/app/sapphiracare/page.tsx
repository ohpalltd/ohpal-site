'use client'

import { useState, ChangeEvent, FormEvent, type ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type Stage = 'landing' | 'chooser' | 'prescreen'
type Role = 'user' | 'contractor' | null
type Anim =
  | 'idle'
  | 'landing→chooser'
  | 'chooser→prescreen'
  | 'prescreen→chooser'
  | 'toLanding' // from chooser or prescreen back to landing

const DURATION_MS = 2100 // slightly faster but still flowy

export default function SapphiraCareHome() {
  const router = useRouter()
  const [stage, setStage] = useState<Stage>('landing')
  const [role, setRole] = useState<Role>(null)

  // animation state
  const [anim, setAnim] = useState<Anim>('idle')

  // prescreen form state
  const [form, setForm] = useState({ fullName: '', dob: '', city: '' })
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`Submitted for ${role ?? 'role'}: ${form.fullName}, ${form.dob}, ${form.city}`)
  }

  // ---- Keep your function names; trigger animation then flip stage ----
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

  // keep right panel mounted during transitions
  const showPanel =
    stage !== 'landing' ||
    anim === 'landing→chooser' ||
    anim === 'toLanding'

  return (
    <>
      <style>{`
        :root { --bg:#0a0a0a; --panel:#0b0c10; --muted:#cbd5e1; --line:rgba(255,255,255,.14); --dur:${DURATION_MS}ms; }
        .page { position: relative; min-height: 100vh; overflow: hidden; background: var(--bg); color: #fff; }

        /* LEFT: landing area */
        .landingWrap { width: 100%; min-height: 100vh; display:flex; align-items:center; justify-content:center; padding: 2rem; position: relative; }
        .landingHidden { opacity: 0; pointer-events: none; }

        /* Back arrow on landing */
        .backArrow {
          position: absolute; top: 1.25rem; left: 1.25rem;
          color: #fff; background: none; border: 1px solid transparent;
          cursor: pointer; opacity: .9; line-height: 1; padding: .35rem; border-radius: .6rem;
          transition: opacity .25s ease, transform .15s ease, background .25s ease, border-color .25s ease;
          display: inline-flex; align-items: center; justify-content: center;
        }
        .backArrow:hover { opacity: 1; transform: translateX(-2px); background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.18); }
        .backArrow:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(255,255,255,.25); }

        /* RIGHT: panel shell (chooser/prescreen) */
        .rightWrap { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; padding: 1.25rem; }

        .panel {
          width: 92%; max-width: 560px; background: var(--panel);
          border: 1px solid var(--line); border-radius: 18px;
          box-shadow: 0 18px 50px rgba(0,0,0,.55);
          padding: 18px 18px 22px; position: relative;
          opacity: 0; pointer-events: none;
        }
        .panel.show { opacity: 1; pointer-events: auto; }

        .panel h1 { font-size: 1.6rem; margin: 0 0 .75rem; }
        .muted { color: var(--muted); }

        /* buttons */
        .btn {
          display: inline-flex; align-items: center; justify-content: center;
          padding: .75rem 1.25rem; border-radius: .75rem; border: 1px solid #fff; color: #fff; text-decoration: none; font-weight: 600;
        }
        .btn--solid { background: #fff; color: #000; border-color: #fff; }
        .btn--ghost { background: transparent; }
        .row { display: flex; gap: .75rem; flex-wrap: wrap; justify-content: center; }

        /* chooser options */
        .opt {
          width: 100%; text-align: left; padding: 14px 16px; cursor: pointer;
          border-radius: 14px; border: 1px solid var(--line); background: rgba(255,255,255,.06);
          color: #ffffff;
        }
        .opt__title { display:block; font-weight: 700; margin-bottom: 4px; color: #ffffff; }
        .opt__sub { display:block; font-size: 13px; opacity: .95; color: #ffffff; }

        .header { display:flex; align-items:center; justify-content: space-between; margin-bottom: 10px; }
        .x { background:none; border:1px solid var(--line); color:#fff; border-radius:10px; padding:6px 10px; cursor:pointer; }

        @media (max-width: 640px) {
          .landingWrap { padding: 1.25rem .75rem; }
          .panel { width: 100%; }
        }

        /* ---- Directional cross-fade keyframes (uniform) ---- */
        @keyframes fadeOutLeft  { 0% {opacity:1; transform:translateX(0)} 100% {opacity:0; transform:translateX(-80px)} }
        @keyframes fadeInRight  { 0% {opacity:0; transform:translateX(80px)} 100% {opacity:1; transform:translateX(0)} }
        @keyframes fadeOutRight { 0% {opacity:1; transform:translateX(0)} 100% {opacity:0; transform:translateX(80px)} }
        @keyframes fadeInLeft   { 0% {opacity:0; transform:translateX(-80px)} 100% {opacity:1; transform:translateX(0)} }

        /* Landing animations (container controls all its children uniformly) */
        .landing--idle { opacity:1; transform:none; }
        .landing--exitLeft { animation: fadeOutLeft var(--dur) ease both; }
        .landing--enterLeft { animation: fadeInLeft var(--dur) ease both; }

        /* Panel container animations (shell controls all inner content uniformly) */
        .panel--enterRight { animation: fadeInRight var(--dur) ease both; }
        .panel--exitRight  { animation: fadeOutRight var(--dur) ease both; }

        /* Inner content panes (chooser/prescreen) — animate panes, not inner text */
        .stack { position: relative; min-height: 320px; }
        .pane {
          position:absolute; inset:0;
          opacity:0; pointer-events:none;
          display:flex; flex-direction:column;
          justify-content:flex-start; gap:12px;
        }
        .pane.active { opacity:1; pointer-events:auto; }

        .pane.enter-right { animation: fadeInRight var(--dur) ease both; }
        .pane.enter-left  { animation: fadeInLeft  var(--dur) ease both; }
        .pane.exit-left   { animation: fadeOutLeft var(--dur) ease both; }
        .pane.exit-right  { animation: fadeOutRight var(--dur) ease both; }

        /* Performance hint */
        .landingWrap, .panel, .pane { will-change: opacity, transform; }
      `}</style>

      <main className="page">
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
          {/* SVG Back Arrow to Ohpal Home */}
          <button
            className="backArrow"
            onClick={() => router.push('/')}
            aria-label="Back to Ohpal Home"
            type="button"
          >
            <svg
              width="22" height="22" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
            >
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div style={{ textAlign: 'center', maxWidth: 720 }}>
            <img
              src="/SapphiracareTransparentLogo.png"
              alt="SapphiraCare Logo"
              style={{ width: '220px', marginBottom: '1.2rem', opacity: 0.95, maxWidth: '80%' }}
            />
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              SapphiraCare
            </h1>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              SapphiraCare is Ohpal’s dedicated branch for care and support services. We connect communities,
              contractors, and care recipients through trust, accessibility, and heart — making quality care simple,
              secure, and human.
            </p>
            <div className="row" style={{ marginBottom: '.5rem' }}>
              <Link href="/login?role=USER" className="btn btn--solid">User login</Link>
              <Link href="/login?role=CONTRACTOR" className="btn btn--ghost">Contractor login</Link>
              <button className="btn btn--ghost" onClick={startSignup}>Sign up</button>
            </div>
            <small style={{ color: '#9ca3af' }}>
              Do not have an account yet? Click <strong>Sign up</strong>.
            </small>
          </div>
        </section>

        {/* RIGHT: chooser/prescreen shared shell, mounted during transitions */}
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
                {/* CHOOSER PANE */}
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

                  {/* FINAL DISCLAIMER */}
                  <p className="muted" style={{ marginTop: 14, fontSize: 13, lineHeight: 1.5 }}>
                    We value your privacy and handle your details with care. Your information will never be shared with
                    marketing firms or external agencies.
                  </p>
                </div>

                {/* PRESCREEN PANE */}
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
                        style={inputStyle}
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
                        style={inputStyle}
                      />
                    </Field>

                    <Field label="City" id="city">
                      <input
                        id="city"
                        name="city"
                        value={form.city}
                        onChange={onChange}
                        required
                        style={inputStyle}
                        placeholder="Your city"
                      />
                    </Field>

                    <div style={{ display: 'flex', gap: 10 }}>
                      <button type="button" className="btn btn--ghost" onClick={backToChooser}>Back</button>
                      <button type="submit" className="btn btn--solid" style={{ flex: 1 }}>Submit</button>
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
      <label htmlFor={id} style={{ fontWeight: 600 }}>{label}</label>
      {children}
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  padding: '0.7rem 0.8rem',
  borderRadius: '12px',
  border: '1px solid rgba(255,255,255,.25)',
  background: 'rgba(255,255,255,.06)',
  color: '#fff',
  fontSize: '1rem',
}
