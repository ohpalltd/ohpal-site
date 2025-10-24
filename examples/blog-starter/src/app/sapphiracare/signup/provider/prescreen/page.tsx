'use client'

import { useState, ChangeEvent, FormEvent } from 'react'

export default function ProviderPrescreen() {
  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    surname: '',
    dob: '',
    city: '',
    country: '',
  })

  const [submitting, setSubmitting] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    // ✳️ Placeholder for blacklist check API call
    try {
      console.log('Submitting form:', form)
      alert('Form submitted successfully!')
    } catch (error) {
      console.error('Submission failed:', error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#050505',
        color: 'white',
        padding: '2rem 1rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '720px',
          background: 'linear-gradient(145deg, rgba(18,18,18,0.95), rgba(25,28,32,0.85))',
          borderRadius: '1.75rem',
          padding: '2.25rem 2.5rem',
          boxShadow: '0 25px 50px -12px rgba(15, 15, 15, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Provider Pre-Screening</h1>
        <p style={{ color: '#d1d5db', marginBottom: '2rem' }}>
          Please fill in your details below to begin verification.
        </p>

        <form onSubmit={onSubmit} style={{ display: 'grid', gap: '1rem' }}>
          {[
            { name: 'firstName', label: 'First Name' },
            { name: 'middleName', label: 'Middle Name (optional)' },
            { name: 'surname', label: 'Surname' },
            { name: 'dob', label: 'Date of Birth', type: 'date' },
            { name: 'city', label: 'City' },
            { name: 'country', label: 'Country' },
          ].map((field) => (
            <div key={field.name} style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor={field.name} style={{ marginBottom: '0.25rem' }}>
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type || 'text'}
                value={(form as any)[field.name]}
                onChange={onChange}
                style={{
                  padding: '0.65rem 0.75rem',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  fontSize: '1rem',
                }}
                required={field.name !== 'middleName'}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={submitting}
            style={{
              marginTop: '1rem',
              padding: '0.85rem 1.25rem',
              borderRadius: '0.9rem',
              border: 'none',
              background: submitting
                ? 'rgba(156, 163, 175, 0.35)'
                : 'linear-gradient(135deg, #38bdf8, #6366f1)',
              color: 'white',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: submitting ? 'not-allowed' : 'pointer',
            }}
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </main>
  )
}
