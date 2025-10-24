'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const API = process.env.NEXT_PUBLIC_OHPAL_API;

export default function ProviderSignup() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    qualifications: '',
    services: '',
    availability: '',
    rate: '',
    consentBackgroundCheck: false,
    hasReferences: false,
    hasQualifications: false,
    portfolioUrl: ''
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: checked }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.consentBackgroundCheck) { alert('Please consent to background checks to continue.'); return; }
    if (!API) { alert('API not configured'); return; }
    setSubmitting(true);
    try {
      const res = await fetch(`${API}/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: 'provider', ...form })
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
          <h1 style={{ fontSize: '1.8rem', marginTop: '0.5rem' }}>Care provider application</h1>
          <p style={{ color: '#d1d5db' }}>Submit your details. A team member will verify before approval.</p>
        </div>

        <form onSubmit={onSubmit} style={{ display: 'grid', gap: '0.9rem' }}>
          {input('Full name', 'fullName', form.fullName, onChange, true)}
          {input('Email address', 'email', form.email, onChange, true, 'email')}
          {input('Phone number', 'phone', form.phone, onChange)}
          {textarea('Care experience', 'experience', form.experience, onChange, true)}
          {textarea('Certifications and qualifications', 'qualifications', form.qualifications, onChange)}
          {textarea('Services you can provide', 'services', form.services, onChange, true)}
          {textarea('Availability and location', 'availability', form.availability, onChange)}
          {input('Typical hourly rate (optional)', 'rate', form.rate, onChange)}

          {/* Vetting block */}
          <div style={vetBox}>
            <h3 style={{ marginBottom: '0.5rem' }}>Vetting pre-checks</h3>

            <label style={checkRow}>
              <input type="checkbox" name="consentBackgroundCheck" checked={form.consentBackgroundCheck} onChange={onCheck} required />
              <span>I consent to a background check if matched with a client<span style={{ color: '#fbbf24' }}> *</span></span>
            </label>

            <label style={checkRow}>
              <input type="checkbox" name="hasReferences" checked={form.hasReferences} onChange={onCheck} />
              <span>I can provide at least two references upon request</span>
            </label>

            <label style={checkRow}>
              <input type="checkbox" name="hasQualifications" checked={form.hasQualifications} onChange={onCheck} />
              <span>I hold relevant, verifiable qualifications for the services I offer</span>
            </label>

            <label style={{ display: 'grid', gap: '0.35rem' }}>
              <span>Portfolio / CV link (optional)</span>
              <input
                name="portfolioUrl"
                type="url"
                placeholder="https://…"
                value={form.portfolioUrl}
                onChange={onChange}
                style={baseInput}
                pattern="https?://.*"
                title="Please enter a valid URL starting with http or https"
              />
            </label>
          </div>

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
const vetBox: React.CSSProperties = { marginTop:'0.75rem', padding:'1rem', borderRadius:'0.9rem', border:'1px solid rgba(255,255,255,0.15)', background:'rgba(255,255,255,0.04)' };
const checkRow: React.CSSProperties = { display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'0.5rem' };

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
