'use client'

import { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type Stage = 'landing' | 'chooser' | 'prescreen'
type Role = 'user' | 'contractor' | null

export default function SapphiraCareHome() {
  const router = useRouter()
  const [stage, setStage] = useState<Stage>('landing')
  const [role, setRole] = useState<Role>(null)

  // prescreen form state
  const [form, setForm] = useState({ fullName: '', dob: '', city: '' })
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // For now just continue the flow; you can hook UN-list screening later.
    // If you prefer to go to a dedicated route next, uncomment the push.
    // router.push('/sapphiracare/signup/provider/kyc')
    alert(`Submitted for ${role ?? 'role'}: ${form.fullName}, ${form.dob}, ${form.city}`)
  }

  // little fade-in for hero text
  useEffect(() => {
    if (stage !== 'landing') return
    const els = document.querySelectorAll('.fade-in')
    els.forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 200))
  }, [stage])

  const startSignup = () => setStage('chooser')
  const chooseRole = (r: Role) => {
    setRole(r)
    setStage('prescreen')
  }
  const backToChooser = () => setStage('chooser')
  const closeAll = () => {
    setStage('landing')
    setRole(null)
    setForm({ fullName: '', dob: '', city: '' })
  }

  return (
    <>
      {/* --- page styles --- */}
      <style>{`
        :root { --bg:#0a0a0a; --panel:#0b0c10; --muted:#cbd5e1; --line:rgba(255,255,255,.14); }
        .page {
          position: relative; min-height: 100vh; overflow: hidden;
          background: var(--bg); color: #fff;
        }
        /* Panels container */
        .track {
          position: relative; width: 200%; height: 100%;
          display: flex; transition: transform .35s ease;
        }
        .track--landing { transform: translateX(0%); }
        .track--chooser { transform: translateX(-50%); }
        .track--prescreen { transform: translateX(-50%); } /* chooser & prescreen live in the right half */
        /* Columns */
        .col {
          width: 50%; min-height: 100vh; position: relative; display: flex; align-items: center; justify-content: center;
        }
        .col--left { padding: 2rem; }
        .col--right { padding: 1.25rem; background: transparent; }
        /* Right panel shell */
        .panel {
          width: 92%; max-width: 560px; background: var(--panel);
          border: 1px solid var(--line); border-radius: 18px;
          box-shadow: 0 18px 50px rgba(0,0,0,.55);
          padding: 18px 18px 22px; position: relative;
        }
        .panel h1 { font-size: 1.6rem; margin: 0 0 .75rem; }
        .muted { color: var(--muted); }
        .fade-in { opacity: 0; transform: translateY(20px); transition: opacity .9s ease, transform .9s ease; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
        /* Buttons */
        .btn {
          display: inline-flex; align-items: center; justify-content: center;
          padding: .75rem 1.25rem; border-radius: .75rem; border: 1px solid #fff; color: #fff; text-decoration: none; font-weight: 600;
        }
        .btn--solid { background: #fff; color: #000; border-color: #fff; }
        .btn--ghost { background: transparent; }
        .row { display: flex; gap: .75rem; flex-wrap: wrap; justify-content: center; }
        /* Card-like option buttons */
        .opt {
          width: 100%; text-align: left; padding: 14px 16px; cursor: pointer;
          border-radius: 14px; border: 1px solid var(--line); background: rgba(255,255,255,.05);
        }
        .opt__title { display:block; font-weight: 700; margin-bottom: 4px; }
        .opt__sub { display:block; font-size: 13px; opacity: .9; }
        .header { display:flex; align-items:center; justify-content: space-between; margin-bottom: 10px; }
        .x { background:none; border:1px solid var(--line); color:#fff; border-radius:10px; padding:6px 10px; cursor:pointer; }
        @media (max-width: 640px) {
          .col--left { padding: 1.25rem .75rem; }
          .panel { width: 100%; }
        }
      `}</style>

      <main className="page">
        {/* Sliding track with 2 columns: left = landing, right = interactive panel */}
        <div
          className={
            'track ' +
            (stage === 'landing' ? 'track--landing' : stage === 'chooser' ? 'track--chooser' : 'track--prescreen')
          }
        >
          {/* LEFT: SapphiraCare landing */}
          <section className="col col--left">
            <div style={{ textAlign: 'center', maxWidth: 720 }}>
              {/* Logo */}
              <img
                src="/SapphiracareTransparentLogo.png"
                alt="SapphiraCare Logo"
                className="fade-in"
                style={{ width: '220px', marginBottom: '1.2rem', opacity: 0.95, maxWidth: '80%' }}
              />

              {/* Title */}
              <h1 className="fade-in" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                SapphiraCare
              </h1>

              {/* Blurb */}
              <p className="fade-in" style={{ color: '#d1d5db', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                SapphiraCare is Ohpal’s dedicated branch for care and support services. We connect communities,
                contractors, and care recipients through trust, accessibility, and heart — making quality care simple,
                secure, and human.
              </p>

              {/* Buttons */}
              <div className="fade-in row" style={{ marginBottom: '.5rem' }}>
                <Link href="/login?role=USER" className="btn btn--solid">
                  User login
                </Link>
                <Link href="/login?role=CONTRACTOR" className="btn btn--ghost">
                  Contractor login
                </Link>
                <button className="btn btn--ghost" onClick={startSignup}>
                  Sign up
                </button>
              </div>

              <small className="fade-in" style={{ color: '#9ca3af' }}>
                Don’t have an account yet? Click <strong>Sign up</strong>.
              </small>
            </div>
          </section>

          {/* RIGHT: Interactive panel (chooser or prescreen) */}
          <section className="col col--right">
            <div className="panel">
              <div className="header">
                <h1>{stage === 'prescreen' ? 'Start verification' : 'Join SapphiraCare'}</h1>
                <button className="x" onClick={closeAll} aria-label="Close">
                  ✕
                </button>
              </div>

              {stage !== 'prescreen' && (
                <>
                  <p className="muted" style={{ marginBottom: 12 }}>
                    Are you a…
                  </p>
                  <div style={{ display: 'grid', gap: 12 }}>
                    <button className="opt" onClick={() => chooseRole('user')}>
                      <span className="opt__title">User</span>
                      <span className="opt__sub">I’m seeking care / assistance</span>
                    </button>
                    <button className="opt" onClick={() => chooseRole('contractor')}>
                      <span className="opt__title">Contractor</span>
                      <span className="opt__sub">I can provide care</span>
                    </button>
                  </div>
                  <p className="muted" style={{ marginTop: 14, fontSize: 13, lineHeight: 1.5 }}>
                    Your application begins with a short identity pre-screen. If anything looks like a watchlist match,
                    we will ask for a passport image so our team can manually verify and clear you.
                  </p>
                </>
              )}

              {stage === 'prescreen' && (
                <>
                  <p className="muted" style={{ marginBottom: 12 }}>
                    Please confirm a few details to begin.
                  </p>
                  <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label htmlFor="fullName" style={{ fontWeight: 600 }}>
                        Full name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        value={form.fullName}
                        onChange={onChange}
                        required
                        style={inputStyle}
                        placeholder="First and last name"
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label htmlFor="dob" style={{ fontWeight: 600 }}>
                        Date of birth
                      </label>
                      <input id="dob" name="dob" type="date" value={form.dob} onChange={onChange} required style={inputStyle} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label htmlFor="city" style={{ fontWeight: 600 }}>
                        City
                      </label>
                      <input
                        id="city"
                        name="city"
                        value={form.city}
                        onChange={onChange}
                        required
                        style={inputStyle}
                        placeholder="Your city"
                      />
                    </div>

                    <div style={{ display: 'flex', gap: 10 }}>
                      <button type="button" className="btn btn--ghost" onClick={backToChooser}>
                        Back
                      </button>
                      <button type="submit" className="btn btn--solid" style={{ flex: 1 }}>
                        Submit
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

const inputStyle: React.CSSProperties = {
  padding: '0.7rem 0.8rem',
  borderRadius: '12px',
  border: '1px solid rgba(255,255,255,.25)',
  background: 'rgba(255,255,255,.05)',
  color: '#fff',
  fontSize: '1rem',
}
