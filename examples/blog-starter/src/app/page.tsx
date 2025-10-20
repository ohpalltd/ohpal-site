import Container from './_components/container'
import { Intro } from './_components/intro'

export default function Page() {
  return (
    <main>
      <Container>
        <Intro />
        <section
          style={{
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            marginTop: '40px'
          }}
        >
          <h1>Welcome to Ohpal 🌐</h1>
          <p>Uniting worlds through care, culture and trade.</p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              marginTop: '50px'
            }}
          >
            <a
              href="/sapphiracare"
              style={{ textDecoration: 'none', color: '#2b6cb0' }}
            >
              💎 SapphiraCare
            </a>
            <a
              href="/carneliana"
              style={{ textDecoration: 'none', color: '#c53030' }}
            >
              🔥 Carneliana
            </a>
            <a
              href="/peridotrepid"
              style={{ textDecoration: 'none', color: '#38a169' }}
            >
              📈 Peridotrepid
            </a>
            <a
              href="/citrinoor"
              style={{ textDecoration: 'none', color: '#d69e2e' }}
            >
              🌍 Citrinoor
            </a>
          </div>
        </section>
      </Container>
    </main>
  )
}
