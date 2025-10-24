'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupChooser() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  // open the slide automatically when page loads
  useEffect(() => {
    setOpen(true)
  }, [])

  return (
    <main style={pageWrap}>
      {/* Dim background */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.25s ease',
        }}
      ></div>

      {/* Slide-in panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '90%',
          maxWidth: 500,
          background: '#0b0c10',
          color: '#fff',
          borderRight: '1px solid rgba(255,255,255,0.15)',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
          padding: 20,
        }}
      >
        <div style={headerRow}>
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Join SapphiraCare</h1>
          <button onClick={() => setOpen(false)} style={closeBtn}>✕</button>
        </div>

        <p style={{ color: '#bfc6d1', marginBottom: 15 }}>Are you a…</p>

        <div style={optionsGrid}>
          <button
            onClick={() => router.push('/sapphiracare/signup/assistance')}
            style={optionBtn}
          >
            User
            <span style={optionSub}>I’m seeking care / assistance</span>
          </button>

          <button
            onClick={() => router.push('/sapphiracare/signup/provider/prescreen')}
            style={optionBtn}
          >
            Contractor
            <span style={optionSub}>I can provide care</span>
          </button>

          {/* keep these two hidden until later */}
          {/* <button onClick={() => router.push('/sapphiracare/signup/org')} style={optionBtn}>Organisation<span style={optionSub}>Manage clients & carers</span></button> */}
          {/* <button onClick={() => router.push('/sapphiracare/signup/partner')} style={optionBtn}>Partner<span style={optionSub}>Refer or collaborate</span></button> */}
        </div>
      </div>
    </main>
  )
}

// ---- Styles ----
const pageWrap = {
  minHeight: '100vh',
  background: '#050505',
}

const headerRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
}

const closeBtn = {
  background: 'none',
  border: '1px solid rgba(255,255,255,0.3)',
  color: '#fff',
  padding: '6px 10px',
  borderRadius: 10,
  cursor: 'pointer',
}

const optionsGrid = {
  display: 'grid',
  gap: '12px',
}

const optionBtn = {
  textAlign: 'left',
  padding: '14px 16px',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: 14,
  color: '#fff',
  cursor: 'pointer',
}

const optionSub = {
  display: 'block',
  fontSize: 13,
  opacity: 0.85,
}
