import './globals.css'
import Image from 'next/image'

export const metadata = {
  title: 'Ohpal International Ltd',
  description: 'A seamless collaboration between Trade, Care and Culture.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{
        backgroundColor: '#7a7a7a',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'TheSeasons, serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}>
        <main>
          <Image
            src="/Ohpal Master Logo.png"
            alt="Ohpal logo"
            width={250}
            height={250}
            priority
          />
          <h1 style={{ fontSize: '3rem', marginTop: '1rem' }}>OHPAL</h1>
          <h2 style={{ fontWeight: 400, marginTop: '0.5rem' }}>International Ltd</h2>
          <p style={{ marginTop: '1rem' }}>
            A seamless collaboration between Trade, Care and Culture.
          </p>
          <a
            href="#"
            style={{
              color: '#ddd',
              textDecoration: 'underline',
              marginTop: '1.5rem',
              display: 'inline-block',
            }}
          >
            Learn more
          </a>
          {children}
        </main>
      </body>
    </html>
  )
}
