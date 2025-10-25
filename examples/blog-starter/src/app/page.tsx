import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Ohpal International Ltd",
  description: "A seamless collaboration in Trade, Care and Culture."
};

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        color: "white",
        padding: "3rem 1rem"
      }}
    >
      <section style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <Image
          src="/Ohpal2DTransparentHero.png"
          alt="Ohpal"
          width={220}
          height={220}
          priority
          style={{ opacity: 0.95 }}
        />
        <h1 style={{ margin: "1rem 0 0.25rem", fontSize: "clamp(24px, 3vw, 36px)" }}>
          A seamless collaboration in Trade, Care and Culture
        </h1>
        <p style={{ opacity: 0.8, maxWidth: 800, margin: "0.5rem auto 2rem" }}>
          We’re a collective grounded in real life experience, deep care and a shared vision for something better.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            alignItems: "center",
            justifyItems: "center"
          }}
        >
          <Link href="/carneliana" style={{ textAlign: "center" }}>
            <Image
              src="/Carneliana.png"
              alt="Carneliana"
              width={240}
              height={240}
            />
            <div style={{ marginTop: 8, opacity: 0.85 }}>Carneliana</div>
          </Link>

          <Link href="/citrinoor" style={{ textAlign: "center" }}>
            <Image
              src="/Citrinoor.png"
              alt="Citrinoor"
              width={240}
              height={240}
            />
            <div style={{ marginTop: 8, opacity: 0.85 }}>Citrinoor</div>
          </Link>

          {/* This is the important one — goes straight to /sapphiracare */}
          <Link href="/sapphiracare" style={{ textAlign: "center" }}>
            <Image
              src="/Sapphiracare.png"
              alt="SapphiraCare"
              width={240}
              height={240}
            />
            <div style={{ marginTop: 8, opacity: 0.85 }}>SapphiraCare</div>
          </Link>

          <Link href="/peridotrepid" style={{ textAlign: "center" }}>
            <Image
              src="/Peridotrepid.png"
              alt="Peridotrepid"
              width={240}
              height={240}
            />
            <div style={{ marginTop: 8, opacity: 0.85 }}>Peridotrepid</div>
          </Link>
        </div>
      </section>
    </main>
  );
}
