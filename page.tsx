import Image from 'next/image'

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          position: 'relative',
          height: '85vh',
          overflow: 'hidden',
          textAlign: 'center',
          color: 'white',
          fontFamily: 'TheSeasons, serif',
        }}
      >
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.5)',
          }}
        >
          <source src="/Lush%20Palm%20Forrest.mp4" type="video/mp4" />
        </video>

        {/* Overlay content */}
        <div style={{ position: 'relative', zIndex: 1, paddingTop: '10vh' }}>
          <Image
            src="/Ohpal%202D.png"
            alt="Ohpal Logo"
            width={240}
            height={240}
            priority
          />
          <h1 style={{ fontSize: '4rem', marginTop: '1rem' }}>OHPAL</h1>
          <h2 style={{ fontWeight: 400, marginBottom: '1rem' }}>International Ltd</h2>
          <p style={{ maxWidth: 700, margin: '0 auto 1.75rem' }}>
            A seamless collaboration in Trade, Care and Culture.
          </p>
          <a
            href="#who-we-are"
            style={{
              border: '1px solid rgba(255,255,255,0.7)',
              borderRadius: 999,
              padding: '10px 24px',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            Learn more
          </a>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section
        id="who-we-are"
        style={{
          background: '#f7f7f7',
          color: '#111',
          padding: '80px 20px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontFamily: 'TheSeasons, serif', fontSize: '2.5rem', color: '#3E7E2C' }}>
          Who We Are
        </h2>
        <p
          style={{
            maxWidth: 850,
            margin: '20px auto 60px',
            fontSize: '1.1rem',
            lineHeight: 1.6,
          }}
        >
          We’re a collective grounded in real-life experience, deep care, and a shared vision for something better. 
          Ohpal was born to bridge worlds — connecting wellness, care, logistics, and community in ways that feel 
          human, holistic and healing. Each branch of Ohpal is a reflection of who we are: Resilient, intentional and 
          unapologetically values-driven. We invite you to share in our vision.
        </p>

        {/* Brand grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 40,
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          <a href="/sapphiracare" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Image src="/SapphiraCare.png" alt="SapphiraCare" width={120} height={120} />
            <div style={{ marginTop: 10 }}>SapphiraCare</div>
          </a>

          <a href="/carneliana" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Image src="/Carneliana.png" alt="Carneliana" width={120} height={120} />
            <div style={{ marginTop: 10 }}>Carneliana</div>
          </a>

          <a href="/peridotrepid" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Image src="/Peridotrepid.png" alt="Peridotrepid" width={120} height={120} />
            <div style={{ marginTop: 10 }}>Peridotrepid</div>
          </a>

          <a href="/citrinoor" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Image src="/Citrinoor.png" alt="Citrinoor" width={120} height={120} />
            <div style={{ marginTop: 10 }}>Citrinoor</div>
          </a>
        </div>

        {/* Decorative mark */}
        <div style={{ marginTop: 60, opacity: 0.8 }}>
          <Image
            src="/Flower%20of%20Life.png"
            alt="Flower of Life"
            width={120}
            height={120}
          />
        </div>
      </section>
    </main>
  )
}

