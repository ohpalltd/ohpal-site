export default function SignupSuccess() {
  return (
    <main style={{
      minHeight:'100vh', display:'grid', placeItems:'center',
      background:'#050505', color:'#fff', padding:'2rem 1rem'
    }}>
      <div style={{
        width:'100%', maxWidth:680,
        background:'linear-gradient(145deg, rgba(18,18,18,0.95), rgba(25,28,32,0.85))',
        border:'1px solid rgba(255,255,255,0.08)', borderRadius:'1.5rem', padding:'2rem', textAlign:'center'
      }}>
        <img src="/SapphiracareTransparentLogo.png" alt="SapphiraCare" style={{ width: 100, opacity: 0.9 }} />
        <h1 style={{ fontSize:'1.8rem', marginTop:'0.5rem' }}>Application received</h1>
        <p style={{ color:'#d1d5db' }}>
          Thanks for applying. Your application is <strong>pending manual verification</strong>. 
          We’ll email you with the next steps once approved.
        </p>
      </div>
    </main>
  );
}
