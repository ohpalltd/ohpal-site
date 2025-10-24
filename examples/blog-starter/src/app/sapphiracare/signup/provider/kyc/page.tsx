'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function ProviderKYCPage() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    surname: '',
    dob: '',
    city: '',
    country: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    setFile(selectedFile)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      console.log('Submitting form:', form, file)

      // Temporary mock blacklist
      const blacklist = ['John Doe', 'Jane Doe']
      const fullName = `${form.firstName} ${form.surname}`

      if (blacklist.includes(fullName)) {
        alert('This name may appear on a restricted list — manual verification required.')
        router.push('/sapphiracare/signup/provider/review')
      } else {
        router.push('/sapphiracare/signup/success')
      }
    } catch (err) {
      console.error('Error:', err)
      alert('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Contractor Verification (KYC)</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>First Name</label>
        <input name="firstName" value={form.firstName} onChange={handleChange} style={styles.input} required />

        <label style={styles.label}>Middle Name</label>
        <input name="middleName" value={form.middleName} onChange={handleChange} style={styles.input} />

        <label style={styles.label}>Surname</label>
        <input name="surname" value={form.surname} onChange={handleChange} style={styles.input} required />

        <label style={styles.label}>Date of Birth</label>
        <input name="dob" type="date" value={form.dob} onChange={handleChange} style={styles.input} required />

        <label style={styles.label}>City</label>
        <input name="city" value={form.city} onChange={handleChange} style={styles.input} required />

        <label style={styles.label}>Country</label>
        <input name="country" value={form.country} onChange={handleChange} style={styles.input} required />

        <label style={styles.label}>Upload ID or Passport (PDF/JPG/PNG)</label>
        <input type="file" accept=".pdf,image/*" onChange={handleFileChange} style={styles.input} />

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
    textAlign: 'center' as const,
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
