'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const API = process.env.NEXT_PUBLIC_OHPAL_API // set later

export default function ProviderPreScreen() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    firstName: '', middleName: '', surname: '',
    dob: '', city: '', country: ''
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      // Build a full name for matching
      const fullName = [form.firstName, form.middleName, form.surname].filter(Boolean).join(' ')
      // If API not set yet, simulate "clear" so you can keep building
      if (!API) {
        router.push('/sapphiracare/signup/provider')
        return
      }
      const res = await fetch(`${API}/screening/check`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          fullName, dob: form.dob, city: form.city, country: form.country
        })
      })
      if (!res.ok) throw new Error('screening failed')
      const data = await res.json() // { status: 'clear' | 'flagged' }
      if (data.status === 'flagged') {
        // pass context via query
        const q = new URLSearchParams({ fullName, dob: form.dob, city: form.city, country: form.country })
        router.push('/sapphiracare/signup/provider/kyc?'+q.toString())
      } else {
        router.push('/sapphiracare/signup/provider')
      }
    } catch(e) {
      alert('Error running screening. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main style={wrap}>
      <div style={card}>
        <Link href="/sapphiracare/signup" style={{color:'#9ecbff',textDecoration:'none'}}>← Back</Link>
        <h2 style={{margin:'10px 0'}}>Contractor pre-screen</h2>
        <p style={{color:'#cbd5e1',marginBottom:'12px'}}>Tell us who you are first. We’ll do a quick compliance check.</p>

        <form onSubmit={onSubmit} style={{display:'grid',gap:'10px'}}>
          {input('First name', 'firstName', form.firstName, onChange, true)}
          {input('Middle name (optional)', 'middleName', form.middleName, onChange)}
          {input('Surname', 'surname', form.surname, onChange, true)}
          {input('Date of birth', 'dob', form.dob, onChange, true, 'date')}
          {input('City', 'city', form.city, onChange, true)}
          {input('Country', 'country', form.country, onChange, true)}

          <button type="submit" disabled={submitting} style={btn}>
            {submitting ? 'Checking…' : 'Continue'}
          </button>
        </form>
      </div>
    </main>
  )
}

const wrap = { minHeight:'100vh', display:'grid', placeItems:'center', background:'#050505', color:'#fff', padding:'2rem 1rem' }
const card = { width:'100%', maxWidth:760, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.15)', borderRadius:20, padding:'2rem' }
const baseInput = { padding:'0.65rem 0.75rem', borderRadius:12, border:'1px solid rgba(255,255,255,0.25)', background:'rgba(255,255,255,0.05)', color:'#fff' }
const btn = { marginTop:'0.3rem', padding:'0.85rem 1.25rem', borderRadius:12, border:'none', background:'linear-gradient(135deg,#38bdf8,#6366f1)', color:'#fff', fontWeight:700, cursor:'pointer' }

function input(label, name, value, onChange, required=false, type='text') {
  return (
    <label style={{display:'grid',gap:'.35rem'}}>
      <span style={{fontWeight:600}}>{label}{required && <span style={{color:'#fbbf24'}}> *</span>}</span>
      <input name={name} value={value} onChange={onChange} required={required} type={type} style={baseInput} />
    </label>
  )
}
