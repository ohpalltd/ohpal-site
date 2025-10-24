'use client';

import type React from 'react';
import Link from 'next/link';

export default function SignupRolePicker() {
  return (
    <main style={wrap}>
      <div style={card}>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <img
            src="/SapphiracareTransparentLogo.png"
            alt="SapphiraCare"
            style={{ width: 120, opacity: 0.9 }}
          />
          <h1 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>Join SapphiraCare</h1>
          <p style={{ color: '#d1d5db' }}>Choose your path to continue</p>
        </div>

        <div style={grid}>
          <Link href="/sapphiracare/signup/assistance" style={cardLink as React.CSSProperties}>
            <strong style={{ fontSize: '1.1rem' }}>I’m seeking assistance</strong>
            <span style={{ color: '#d1d5db' }}>Create an assistance application</span>
          </Link>

          <Link href="/sapphiracare/signup/provider" style={cardLink as React.CSSProperties}>
            <strong style={{ fontSize: '1.1rem' }}>I can provide care</strong>
            <span style={{ color: '#d1d5db' }}>Create a provider application</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

const wrap: React.CSSProperties = {
  minHeight: '100vh',
  display: 'grid',
  placeItems: 'center',
  backgroundColor: '#050505',
  color: '#fff',
  padding: '2rem 1rem',
};

const card: React.CSSProperties = {
  width: '100%',
  maxWidth: 820,
  background: 'linear-gradient(145deg, rgba(18,18,18,0.95), rgba(25,28,32,0.85))',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '1.75rem',
  padding: '2rem',
};

const grid: React.CSSProperties = {
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
};

const cardLink: React.CSSProperties = {
  display: 'grid',
  gap: '0.35rem',
  padding: '1.25rem',
  borderRadius: '1rem',
  border: '1px solid rgba(255,255,255,0.15)',
  background: 'rgba(255,255,255,0.04)',
  textDecoration: 'none',
  color: '#fff',
  cursor: 'pointer',
};
