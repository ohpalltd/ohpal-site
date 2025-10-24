// @ts-nocheck
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ProviderKYCPage() {
  const router = useRouter()
  const [file, setFile] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    surname: '',
    dob: '',
    city: '',
    country: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Simulate sending data to API or Replit (future integration)
      console.log('Submitting data:', formData, file)

      // Simulate basic blacklist check placeholder
      const blacklistedNames = ['John Doe', 'Jane Doe']
      const fullName = `${formData.firstName} ${formData.surname}`

      if (blacklistedNames.includes(fullName)) {
        alert('This name requires further verification (possible match on watchlist).')
        router.push('/sapphiracare/signup/provider/kyc/review')
      } else {
        router.push('/sapphiracare/signup/success')
      }
    } catch (err) {
      console.error('Submission failed:', err)
      alert('Something went wrong — please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Contractor Verification (KYC)</h1>
      <form onSubmit={onSubmit} style={styles.form}>
        <label style={styles.label}>First Name</label>
        <input name="firstName" value={formData.firstName} onChange={handleChange} style={styles.input} required />

        <label style={styles.label}>Middle Name</label>
        <input name="middleName" value={formData.middleName} onChange={handleChange} style={styles.input} />

        <label style={styles.label}>Surname</label>
        <input name="surname" value={formData.surname} onChange={handleChange} style={styles.input} required />

        <label style={styles.label}>Date of Birth</label>
        <input name="dob" type="date" value={formData.dob} onChange={handleChange} style={styles.input} required />

        <label style={styles.label}>City</label>
        <input name="city" value={formData.city} onChange={handleChange} style={styles.input} required />

        <label style={styles.label}>Country</label>
        <input name="country" value={formData.country} onChange={handleChange} style={styles.input} required />

        <label style={styles.label}>Upload ID or Passport (PDF/JPG/PNG)</label>
        <input
          type="file"
          accept=".pdf,image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          style={styles.input}
        />

        <button type="submit" style={styles.button} disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </main>
  )
}

const styles = {
  container: {
    maxWidth: '640px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    color: '#f0f0f0',
    backgroundColor: '#0c0c0c',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(255,255,255,0.1)',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  form: {
    display: 'grid',
    gap: '1rem',
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #333',
    backgroundColor: '#111',
    color: '#fff',
  },
  button: {
    marginTop: '1.5rem',
    padding: '0.9rem',
    borderRadius: '8px',
    backgroundColor: '#0e76a8',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
}
