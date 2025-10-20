export function Intro() {
  return (
    <section
      style={{
        backgroundImage: "url('/background.jpg')", // we'll upload this next
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Playfair Display', serif"
      }}
    >
      <h1 style={{ fontSize: '4rem', marginBottom: '0.5rem', letterSpacing: '2px' }}>
        OHPAL
      </h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 300 }}>
        International Ltd
      </h2>
      <p style={{ marginTop: '1rem', fontSize: '1.2rem', maxWidth: '600px' }}>
        Uniting care, culture, and trade under one vision.
      </p>
      <a
        href="#learn-more"
        style={{
          marginTop: '2rem',
          color: 'white',
          textDecoration: 'underline',
          fontSize: '1rem',
        }}
      >
        Learn more
      </a>
    </section>
  )
}
