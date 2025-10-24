'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

const API = process.env.NEXT_PUBLIC_OHPAL_API // later

export default function ProviderKYC() {
  const router = useRouter()
  const sp = useSearchParams()
  const flaggedInfo = useMemo(() => ({
    fullName: sp.get('fullName') || '',
    dob: sp.get('dob') || '',
    city: sp.get('city') || '',
    country: sp.get('country') || ''
  }), [sp])

  const [submitting, setSubmitting] = useState(false)
  const [passportNumber, setPassportNumber] = useState('')
  const [file, setFile] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      // Later: send to `${API}/screening/kyc` with FormData.
      // For now, just proceed to full contractor form:
      router.push('/sapphiracare/signup/provider')
    } catch (e) {
      alert('Upload failed, try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main style={wrap}>
      <div style={card}>
        <Link href="/sapphiracare/signup" style={{color:'#9ecbff',textDecoration:'none'}}>← Back</Link>
        <h2 style={{margin:'10px 0'}}>Additional verification required</h2>
        <p style={{color:'#cbd5e1',marginBottom:'10px'}}>
          Our screening flagged a potential match. Please provide a passport for manual review.
        </p>

        <div style={flagBox}>
          <div><strong>Name:</strong> {flaggedInfo.fullName}</div>
          <div><strong>DOB:</strong> {flaggedInfo.dob}</div>
          <div><strong>City:</strong> {flaggedInfo.city}</div>
          <div><strong>Country:</strong> {flaggedInfo.country}</div>
        </div>

        <form onSubmit={onSubmit} style={{display:'grid',gap:'10px', marginTop:'12px'}}>
          <label style={{display:'grid',gap:'.35rem'}}>
            <span style={{fontWeight:600}}>Passport number<span style={{color:'#fbbf24'}}> *</span></span>
            <input value={passportNumber} onChange={(e)=>setPassportNumber(e.target.value)} required style={baseInput} />
          </label>

          <label style={{display:'grid',gap:'.35rem'}}>
            <span style={{fontWeight:600}}>Passport image (photo or scan)<span style={{color:'#fbbf24'}}> *</span></span>
            <input type="file" accept="image/*,.pdf" onChange={(e)=>setFile(e.target.files?.[0]||null)} required style={{...baseInput, padding:'8px'}} />
          </label>

          <button type="submit" disabled={submitting} style={btn}>
            {submitting ? 'Uploading…' : 'Submit & continue'}
          </button>
        </form>
      </div>
    </main>
  )
}

const wrap = { minHeight:'100vh', display:'grid', placeItems:'center', background:'#050505', color:'#fff', padding:'2rem 1rem' }
const card = { width:'100%', maxWidth:760, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.15)', borderRadius:20, padding:'2rem' }
const flagBox = { border:'1px solid rgba(255,255,255,0.15)', borderRadius:12, padding:'10px', background:'rgba(255,255,255,0.05)', fontSize:14 }
const baseInput = { padding:'0.65rem 0.75rem', borderRadius:12, border:'1px solid rgba(255,255,255,0.25)', background:'rgba(255,255,255,0.05)', color:'#fff' }
const btn = { marginTop:'0.3rem', padding:'0.85rem 1.25rem', borderRadius:12, border:'none', background:'linear-gradient(135deg,#38bdf8,#6366f1)', color:'#fff', fontWeight:700, cursor:'pointer' }
