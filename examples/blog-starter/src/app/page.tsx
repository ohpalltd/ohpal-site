import Container from './_components/container'
import Intro from './_components/intro'
import { getAllPosts } from '../lib/api'

export default function Page() {
  const allPosts = getAllPosts()

  // We’re not using HeroPost or MoreStories here to avoid the import errors.
  // You can re-add them later once the base build is stable.

  return (
    <main>
      <Container>
        <Intro />
        <section style={{
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          marginTop: '40px'
        }}>
          <h1>Welcome to Ohpal 🌐</h1>
          <p>Building connections across wellness, care, logistics, and philanthropy.</p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginTop: '50px'
          }}>
            <a href="#" style={{ textDecoration: 'none', color: '#2b6cb0' }}>💎 SapphiraCare</a>
            <a href="#" style={{ textDecoration: 'none', color: '#c53030' }}>🔥 Carneliana</a>
            <a href="#" style={{ textDecoration: 'none', color: '#38a169' }}>📈 Peridotrepid</a>
            <a href="#" style={{ textDecoration: 'none', color: '#d69e2e' }}>🌍 Citrinoor</a>
          </div>
        </section>
      </Container>
    </main>
  )
}
