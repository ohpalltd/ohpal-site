'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  const handleSapphiraCareClick = (e: React.MouseEvent) => {
    e.preventDefault()
    document.body.style.opacity = "0"
    document.body.style.transition = "opacity 0.5s ease"
    setTimeout(() => router.push("/sapphiracare"), 250)
    setTimeout(() => {
      document.body.style.opacity = "1"
      document.body.style.transition = ""
    }, 1000)
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        color: "white",
        textAlign: "center",
        padding: "3rem 1rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        Ohpal International Ltd
      </h1>
      <p style={{ color: "#ccc", marginBottom: "3rem", fontSize: "1.05rem" }}>
        A seamless collaboration in Trade, Care, and Culture.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexWrap: "wrap",
          gap: "3rem",
          maxWidth: "980px",
          margin: "0 auto",
        }}
      >
        {/* Peridotrepid */}
        <div style={{ width: 180 }}>
          <img
            src="/Peridotrepid.png"
            alt="Peridotrepid"
            style={{
              width: "100%",
              borderRadius: 10,
              marginBottom: "0.75rem",
            }}
          />
          <p style={{ fontWeight: 600 }}>Peridotrepid</p>
          <p style={{ color: "#bbb", fontSize: "0.9rem" }}>
            Logistics and procurement
          </p>
        </div>

        {/* Carneliana */}
        <div style={{ width: 180 }}>
          <img
            src="/Carneliana.png"
            alt="Carneliana"
            style={{
              width: "100%",
              borderRadius: 10,
              marginBottom: "0.75rem",
            }}
          />
          <p style={{ fontWeight: 600 }}>Carneliana</p>
          <p style={{ color: "#bbb", fontSize: "0.9rem" }}>
            Wellness and medical travel
          </p>
        </div>

        {/* SapphiraCare (fade transition to landing) */}
        <a
          href="/sapphiracare"
          onClick={handleSapphiraCareClick}
          style={{
            textDecoration: "none",
            color: "inherit",
            width: 180,
            display: "block",
            cursor: "pointer",
          }}
        >
          <div>
            <img
              src="/SapphiraCare.png"
              alt="SapphiraCare"
              style={{
                width: "100%",
                borderRadius: 10,
                marginBottom: "0.75rem",
              }}
            />
            <p style={{ fontWeight: 600 }}>SapphiraCare</p>
            <p style={{ color: "#bbb", fontSize: "0.9rem" }}>
              Care and support services
            </p>
          </div>
        </a>

        {/* Citrinoor */}
        <div style={{ width: 180 }}>
          <img
            src="/Citrinoor.png"
            alt="Citrinoor"
            style={{
              width: "100%",
              borderRadius: 10,
              marginBottom: "0.75rem",
            }}
          />
          <p style={{ fontWeight: 600 }}>Citrinoor</p>
          <p style={{ color: "#bbb", fontSize: "0.9rem" }}>
            Community and philanthropy
          </p>
        </div>
      </div>
    </main>
  )
}
