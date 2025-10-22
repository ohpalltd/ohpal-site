// examples/blog-starter/src/app/layout.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ohpal International Ltd',
  description: 'Seamless collaboration of Trade, Care and Culture.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: 'TheSeasons, serif',
          color: '#fff',
          backgroundColor: '#2b2b2b',
        }}
      >
        {/* HERO */}
        <header style={{ position: 'relative', height: '85vh', overflow: 'hidden' }}>
          {/* Background video */}
          <video
            key="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              minWidth: '100%',
              minHeight: '100%',
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover',
              filter: 'brightness(0.6)',
            }}
            src="/videos/lush-palm-forest.mp4"
          />

          {/* Content overlay */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '0 1rem',

