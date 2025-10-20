import Image from 'next/image'

export function Intro() {
  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.55))'
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 16px',
          fontFamily: "'Playfair Display', serif"
        }}
      >
        <Image
          src="/ohpal-logo.png"
          alt="Ohpal logo"
          width={180}
          height={180}
          priority
          style={{ marginBottom: 16 }}
        />

        <h1 style={{ fontSize: '56px', lineHeight: 1.1, margin: 0, letterSpacing: '1px' }}>
          OHPAL
        </h1>
        <h2 style={{ fontSize: '24px', fontWeight: 300, marginTop: 6 }}>
          International Ltd
        </h2>

        <p style={{ maxWidth: 720, marginTop: 18, fontSize: 18, opacity: 0.95 }}>
          Where trade, care, and culture unite.
        </p>

        <a
          href="#learn-more"
          style={{
            marginTop: 24,
            textDecoration: 'underline',
            fontSize: 16,
            color: 'white'
          }}
        >
          Learn more
        </a>
      </div>
    </section>
  )
}
