'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const API = process.env.NEXT_PUBLIC_OHPAL_API; // set on Render later

export default function AssistanceSignup() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    supportNeeds: '',
    availability: '',
    additionalNotes: ''
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!API) { alert('API not configured'); return; }
    setSubmitting(true);
    try {
      const res = await fetch(`${API}/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: 'assistance', ...form })
      });
      if (!res.ok) throw new Error('Failed to submit');
      router.push('/sapphiracare/signup/success');
    } catch (err:any) {
      alert(err.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main style={wrap}>
      <div style={card}>
        <div style={{ marginBottom: '1rem' }}>
          <Link href="/sapphiracare/signup" style={{ color: 'white', textDecoration: 'none' }}>← Back</Link>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <img src="/SapphiracareTransparentLogo.png" alt="SapphiraCare" style={{ width: 120, opacity: 0.9 }} />
          <h1 style={{ fontSize: '1.8rem', marginTop: '0.5rem' }}>Care assistance application</h1>
          <p style={{ color: '#d1d5db' }}>Submit your details. A team member will verify before approval.</p>
        </div>

        <form onSubmit={onSubmit} style={{ display: 'grid', gap: '0.9rem' }}>
          {input('Full name', 'fullName', form.fullName, onChange, true)}
          {input('Email address', 'email', form.email, onChange, true, 'email')}
          {input('Phone number', 'phone', form.phone, onChange)}
          {input('Location', 'location', form.location, onChange, true)}
          {textarea('Type of assistance needed', 'supportNeeds', form.supportNeeds, onChange, true)}
          {textarea('Preferred days and times', 'availability', form.availability, onChange)}
          {textarea('Additional context', 'additionalNotes', form.additionalNotes, onChange)}

          <button type="submit" disabled={submitting} style={btn}>
            {submitting ? 'Submitting…' : 'Submit application'}
          </button>
        </form>
      </div>
    </main>
  );
}

const wrap: React.CSSProperties = { minHeight:'100vh', display:'grid', placeItems:'center', background:'#050505', color:'#fff', padding:'2rem 1rem' };
const card: React.CSSProperties = { width:'100%', maxWidth:820, background:'linear-gradient(145deg, rgba(18,18,18,0.95), rgba(25,28,32,0.85))', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'1.75rem', padding:'2rem' };
const baseInput: React.CSSProperties = { padding:'0.65rem 0.75rem', borderRadius:'0.75rem', border:'1px solid rgba(255,255,255,0.25)', background:'rgba(255,255,255,0.05)', color:'#fff' };
const btn: React.CSSProperties = { marginTop:'0.3rem', padding:'0.85rem 1.25rem', borderRadius:'0.9rem', border:'none', background:'linear-gradient(135deg,#38bdf8,#6366f1)', color:'#fff', fontWeight:700, cursor:'pointer' };

function input(label:string, name:string, value:string, onChange:any, required=false, type='text'){
  return (
    <label style={{ display:'grid', gap:'0.35rem' }}>
      <span style={{ fontWeight:600 }}>{label}{required && <span style={{ color:'#fbbf24' }}> *</span>}</span>
      <input name={name} value={value} onChange={onChange} required={required} type={type} style={baseInput} />
    </label>
  );
}
function textarea(label:string, name:string, value:string, onChange:any, required=false){
  return (
    <label style={{ display:'grid', gap:'0.35rem' }}>
      <span style={{ fontWeight:600 }}>{label}{required && <span style={{ color:'#fbbf24' }}> *</span>}</span>
      <textarea name={name} value={value} onChange={onChange} required={required} rows={4} style={{ ...baseInput, resize:'vertical' }} />
    </label>
  );
}
