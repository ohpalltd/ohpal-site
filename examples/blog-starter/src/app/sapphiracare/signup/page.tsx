 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/examples/blog-starter/src/app/signup/page.tsx b/examples/blog-starter/src/app/signup/page.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..d13c583717f56ec187f4d06fd7fd58ed8c81387d
--- /dev/null
+++ b/examples/blog-starter/src/app/signup/page.tsx
@@ -0,0 +1,382 @@
+'use client'
+
+import { FormEvent, useMemo, useState, type CSSProperties } from 'react'
+
+type Role = 'assistance' | 'provider'
+
+type Field = {
+  id: string
+  label: string
+  type?: string
+  placeholder?: string
+  required?: boolean
+  as?: 'textarea'
+}
+
+const baseFieldStyles: CSSProperties = {
+  display: 'flex',
+  flexDirection: 'column',
+  gap: '0.35rem',
+}
+
+const inputStyles: CSSProperties = {
+  padding: '0.65rem 0.75rem',
+  borderRadius: '0.75rem',
+  border: '1px solid rgba(255, 255, 255, 0.25)',
+  backgroundColor: 'rgba(255, 255, 255, 0.05)',
+  color: 'white',
+  fontSize: '1rem',
+}
+
+export default function SapphiraCareSignupPage() {
+  const [selectedRole, setSelectedRole] = useState<Role | null>(null)
+  const [submittedRole, setSubmittedRole] = useState<Role | null>(null)
+  const [submitting, setSubmitting] = useState(false)
+
+  const fields = useMemo<Record<Role, Field[]>>(
+    () => ({
+      assistance: [
+        {
+          id: 'fullName',
+          label: 'Full name',
+          placeholder: 'Enter your name',
+          required: true,
+        },
+        {
+          id: 'email',
+          label: 'Email address',
+          type: 'email',
+          placeholder: 'you@example.com',
+          required: true,
+        },
+        {
+          id: 'phone',
+          label: 'Phone number',
+          type: 'tel',
+          placeholder: 'Include country code if outside the UK',
+        },
+        {
+          id: 'location',
+          label: 'Location',
+          placeholder: 'City, County',
+          required: true,
+        },
+        {
+          id: 'supportNeeds',
+          label: 'Type of assistance needed',
+          placeholder: 'Describe the kind of care or support you are seeking',
+          as: 'textarea',
+          required: true,
+        },
+        {
+          id: 'availability',
+          label: 'Preferred days & times',
+          placeholder: 'e.g. Weekday mornings, evenings, weekends',
+          as: 'textarea',
+        },
+        {
+          id: 'additionalNotes',
+          label: 'Additional context (optional)',
+          placeholder: 'Share anything else that would help us match you with a carer',
+          as: 'textarea',
+        },
+      ],
+      provider: [
+        {
+          id: 'fullName',
+          label: 'Full name',
+          placeholder: 'Enter your name',
+          required: true,
+        },
+        {
+          id: 'email',
+          label: 'Email address',
+          type: 'email',
+          placeholder: 'you@example.com',
+          required: true,
+        },
+        {
+          id: 'phone',
+          label: 'Phone number',
+          type: 'tel',
+          placeholder: 'Best number to reach you',
+        },
+        {
+          id: 'experience',
+          label: 'Care experience',
+          placeholder: 'Years of experience, specialties, relevant roles',
+          as: 'textarea',
+          required: true,
+        },
+        {
+          id: 'qualifications',
+          label: 'Certifications & qualifications',
+          placeholder: 'List any DBS, NVQ, nursing, or other credentials',
+          as: 'textarea',
+        },
+        {
+          id: 'services',
+          label: 'Services you can provide',
+          placeholder: 'Personal care, companionship, respite, overnight support, etc.',
+          as: 'textarea',
+          required: true,
+        },
+        {
+          id: 'availability',
+          label: 'Availability & location',
+          placeholder: 'When and where you can offer care',
+          as: 'textarea',
+        },
+        {
+          id: 'rate',
+          label: 'Typical hourly rate (optional)',
+          placeholder: 'Share your standard rate or expectations',
+        },
+      ],
+    }),
+    []
+  )
+
+  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
+    event.preventDefault()
+    if (!selectedRole) return
+    setSubmitting(true)
+
+    // TODO: replace with API integration. Simulate a brief delay for UX.
+    setTimeout(() => {
+      setSubmitting(false)
+      setSubmittedRole(selectedRole)
+    }, 800)
+  }
+
+  const reset = () => {
+    setSelectedRole(null)
+    setSubmittedRole(null)
+  }
+
+  const selectedFields = selectedRole ? fields[selectedRole] : []
+
+  return (
+    <main
+      style={{
+        minHeight: '100vh',
+        display: 'flex',
+        alignItems: 'center',
+        justifyContent: 'center',
+        backgroundColor: '#050505',
+        color: 'white',
+        padding: '2rem 1rem',
+      }}
+    >
+      <div
+        style={{
+          width: '100%',
+          maxWidth: '820px',
+          background: 'linear-gradient(145deg, rgba(18,18,18,0.95), rgba(25,28,32,0.85))',
+          borderRadius: '1.75rem',
+          padding: '2.25rem 2.5rem',
+          boxShadow: '0 25px 50px -12px rgba(15, 15, 15, 0.8)',
+          border: '1px solid rgba(255, 255, 255, 0.08)',
+          backdropFilter: 'blur(12px)',
+        }}
+      >
+        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
+          <img
+            src="/SapphiracareTransparentLogo.png"
+            alt="SapphiraCare Logo"
+            style={{ width: '140px', margin: '0 auto 1rem', opacity: 0.9 }}
+          />
+          <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>
+            Join SapphiraCare
+          </h1>
+          <p style={{ maxWidth: '540px', margin: '0 auto', color: '#d1d5db' }}>
+            Let’s get to know you. Choose the path that fits you best so we can
+            build the right profile and connect you with the SapphiraCare
+            community.
+          </p>
+        </div>
+
+        {!selectedRole && !submittedRole && (
+          <section style={{ display: 'grid', gap: '1.5rem' }}>
+            <div style={{ textAlign: 'center' }}>
+              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
+                Are you looking for care or providing it?
+              </h2>
+              <p style={{ color: '#9ca3af' }}>
+                Your choice helps us tailor the questions so we can set up the
+                right profile for you.
+              </p>
+            </div>
+            <div
+              style={{
+                display: 'grid',
+                gap: '1rem',
+                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
+              }}
+            >
+              <button
+                type="button"
+                onClick={() => setSelectedRole('assistance')}
+                style={cardButtonStyles}
+              >
+                <span style={cardHeadingStyles}>I’m seeking assistance</span>
+                <span style={cardBodyStyles}>
+                  Get matched with trusted carers who can support you or a loved
+                  one with compassion.
+                </span>
+              </button>
+              <button
+                type="button"
+                onClick={() => setSelectedRole('provider')}
+                style={cardButtonStyles}
+              >
+                <span style={cardHeadingStyles}>I can provide care</span>
+                <span style={cardBodyStyles}>
+                  Share your experience so we can introduce you to the right
+                  families and opportunities.
+                </span>
+              </button>
+            </div>
+          </section>
+        )}
+
+        {selectedRole && !submittedRole && (
+          <section style={{ display: 'grid', gap: '1.75rem' }}>
+            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
+              <div>
+                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
+                  {selectedRole === 'assistance'
+                    ? 'Care assistance profile'
+                    : 'Care provider profile'}
+                </h2>
+                <p style={{ color: '#9ca3af', maxWidth: '28rem' }}>
+                  {selectedRole === 'assistance'
+                    ? 'Tell us about the support you need so we can match you with the right carers.'
+                    : 'Tell us about the care you offer so we can highlight you to our community.'}
+                </p>
+              </div>
+              <button
+                type="button"
+                onClick={reset}
+                style={{
+                  alignSelf: 'flex-start',
+                  background: 'none',
+                  border: '1px solid rgba(255, 255, 255, 0.2)',
+                  color: 'white',
+                  padding: '0.5rem 1.25rem',
+                  borderRadius: '999px',
+                  cursor: 'pointer',
+                }}
+              >
+                Choose a different path
+              </button>
+            </div>
+
+            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
+              {selectedFields.map((field) => (
+                <div key={field.id} style={baseFieldStyles}>
+                  <label htmlFor={field.id} style={{ fontWeight: 600 }}>
+                    {field.label}
+                    {field.required && <span style={{ color: '#fbbf24' }}> *</span>}
+                  </label>
+                  {field.as === 'textarea' ? (
+                    <textarea
+                      id={field.id}
+                      name={field.id}
+                      placeholder={field.placeholder}
+                      required={field.required}
+                      rows={4}
+                      style={{ ...inputStyles, resize: 'vertical' }}
+                    />
+                  ) : (
+                    <input
+                      id={field.id}
+                      name={field.id}
+                      type={field.type ?? 'text'}
+                      placeholder={field.placeholder}
+                      required={field.required}
+                      style={inputStyles}
+                    />
+                  )}
+                </div>
+              ))}
+
+              <button
+                type="submit"
+                disabled={submitting}
+                style={{
+                  marginTop: '0.5rem',
+                  padding: '0.85rem 1.25rem',
+                  borderRadius: '0.9rem',
+                  border: 'none',
+                  background: submitting
+                    ? 'rgba(156, 163, 175, 0.35)'
+                    : 'linear-gradient(135deg, #38bdf8, #6366f1)',
+                  color: 'white',
+                  fontWeight: 600,
+                  fontSize: '1rem',
+                  cursor: submitting ? 'not-allowed' : 'pointer',
+                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
+                  boxShadow: submitting
+                    ? 'none'
+                    : '0 15px 30px -12px rgba(99, 102, 241, 0.7)',
+                }}
+              >
+                {submitting ? 'Submitting…' : 'Submit details'}
+              </button>
+            </form>
+          </section>
+        )}
+
+        {submittedRole && (
+          <section style={{ textAlign: 'center', display: 'grid', gap: '1rem' }}>
+            <h2 style={{ fontSize: '1.75rem' }}>Thank you!</h2>
+            <p style={{ color: '#d1d5db' }}>
+              We’ve received your {submittedRole === 'assistance' ? 'assistance request' : 'care provider profile'}.
+              The SapphiraCare team will review your details and follow up with
+              the next steps shortly.
+            </p>
+            <button
+              type="button"
+              onClick={reset}
+              style={{
+                justifySelf: 'center',
+                borderRadius: '999px',
+                border: '1px solid rgba(255, 255, 255, 0.25)',
+                padding: '0.65rem 1.5rem',
+                background: 'none',
+                color: 'white',
+                cursor: 'pointer',
+              }}
+            >
+              Submit another response
+            </button>
+          </section>
+        )}
+      </div>
+    </main>
+  )
+}
+
+const cardButtonStyles: CSSProperties = {
+  display: 'grid',
+  gap: '0.6rem',
+  padding: '1.5rem',
+  borderRadius: '1.25rem',
+  border: '1px solid rgba(255, 255, 255, 0.15)',
+  background: 'rgba(255, 255, 255, 0.04)',
+  color: 'white',
+  textAlign: 'left',
+  cursor: 'pointer',
+  transition: 'transform 0.2s ease, border-color 0.2s ease, background 0.2s ease',
+}
+
+const cardHeadingStyles: CSSProperties = {
+  fontSize: '1.25rem',
+  fontWeight: 700,
+}
+
+const cardBodyStyles: CSSProperties = {
+  color: '#d1d5db',
+  lineHeight: 1.55,
+}
 
EOF
)
