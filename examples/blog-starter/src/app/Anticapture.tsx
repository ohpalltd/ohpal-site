'use client'

import { useEffect } from 'react'

type Props = {
  watermark?: string
  showGrain?: boolean
  showWatermark?: boolean
}

export default function AntiCapture({
  watermark = '© Ohpal International Ltd — Confidential',
  showGrain = true,
  showWatermark = true,
}: Props) {
  useEffect(() => {
    const prevent = (e: Event) => e.preventDefault()

    // Block context menu + selection + dragging
    document.addEventListener('contextmenu', prevent)
    document.addEventListener('selectstart', prevent)
    document.addEventListener('dragstart', prevent)

    // Block common shortcuts (best effort)
    const onKey = (e: KeyboardEvent) => {
      const k = e.key?.toLowerCase()
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (k === 'i' || k === 'j' || k === 'c')) || // devtools
        (e.ctrlKey && (k === 's' || k === 'p' || k === 'u')) // save/print/view-source
      ) {
        e.preventDefault()
        e.stopPropagation()
      }

      // Best-effort: neuter PrintScreen (Windows)
      if (e.key === 'PrintScreen') {
        try {
          navigator.clipboard.writeText('Screenshots are disabled by site policy.')
        } catch {}
        e.preventDefault()
      }
    }
    document.addEventListener('keydown', onKey, true)

    return () => {
      document.removeEventListener('contextmenu', prevent)
      document.removeEventListener('selectstart', prevent)
      document.removeEventListener('dragstart', prevent)
      document.removeEventListener('keydown', onKey, true)
    }
  }, [])

  return (
    <>
      {/* subtle grain overlay */}
      {showGrain && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 9998,
            background:
              'repeating-linear-gradient(45deg, rgba(255,255,255,.035) 0, rgba(255,255,255,.035) 1px, transparent 1px, transparent 4px)',
            animation: 'grainMove 12s linear infinite',
          }}
        />
      )}

      {/* watermark overlay */}
      {showWatermark && (
        <div
          aria-hidden
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 9999,
            display: 'grid',
            placeItems: 'center',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              transform: 'rotate(-22deg)',
              fontSize: 'clamp(18px, 3.2vw, 30px)',
              fontWeight: 700,
              letterSpacing: '.08em',
              color: 'rgba(255,255,255,.06)',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              userSelect: 'none',
            }}
          >
            {watermark}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes grainMove {
          0% { background-position: 0 0; }
          50% { background-position: 60px 60px; }
          100% { background-position: 0 0; }
        }
      `}</style>
    </>
  )
}
