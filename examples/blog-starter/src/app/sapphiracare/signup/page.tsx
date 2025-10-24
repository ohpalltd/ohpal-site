'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SignupChooser() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  useEffect(() => { setOpen(true) }, [])

  return (
    <main style={wrap}>
      {/* backdrop */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position:'fixed', inset:0, background:'rgba(0,0,0,0.5)',
          opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
          transition:'opacity .25s ease'
        }}
      />

      {/* slide-in panel */}
      <div style={{
        position:'fixed', top:0, left:0, height:'100vh', width:'92%', maxWidth:520,
        background:'#0b0c10', color:'#fff', borderRight:'1px solid rgba(255,255,255,.1)',
        transform: open ? 'translateX(0)' : 'translateX(-100%)',
        transition:'transform .28s ease', boxShadow:'0 10px 40px rgba(0,0,0,.4)', padding:'20px'
      }}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h1 style={{fontSize:'1.5rem'}}>Join SapphiraCare</h1>
          <button onClick={()=>setOpen(false)} style={ghostBtn}>✕</button>
        </div>

        <p style={{color:'#bfc6d1'}}>Are you a…</p>

        <div style={{display:'grid', gap:'12px', marginTop:'10px'}}>
          {/* USER → assistance flow */}
          <button
            onClick={() => router.push('/sapphiracare/signup/assistance')}
            style={bigBtn}
          >
            User
            <span style={{display:'block',fontSize:13,opacity:.85}}>I’m seeking care/assistance</span>
          </button>

          {/* CONTRACTOR → prescreen first */}
          <button
            onClick={() => router.push('/sapphiracare/signup/provider/prescreen')}
            style={bigBtn}
          >
            Contractor
            <span style={{display:'block',fontSize:13,opacity:.85}}>I can provide care</span>
          </button>
        </div>

        <div style={{marginTop:18}}>
          <Link href="/" style={{color:'#9ecbff',textDecoration:'none'}}>← Back to Ohpal</Link>
        </div>
      </div>
    </main>
  )
}

const wrap = { minHeight:'100vh', background:'#050505' }
const ghostBtn = { background:'none', border:'1px solid rgba(255,255,255,.15)', color:'#fff', padding:'6px 10px', borderRadius:10, cursor:'pointer' }
const bigBtn = {
  textAlign:'left', padding:'14px 16px', background:'rgba(255,255,255,.05)',
  border:'1px solid rgba(255,255,255,.15)', borderRadius:14, color:'#fff', cursor:'pointer',
}

