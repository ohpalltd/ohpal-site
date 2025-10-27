'use client'
import Image from "next/image"
import Link from "next/link"

export default function BrigitPage() {
  return (
    <main
      style={{
        backgroundColor: "#000", // full black background
        color: "#fff",
        fontFamily: "TheSeasons, serif",
        minHeight: "100vh",
        padding: "4rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* Back Button */}
      <Link
        href="/#who-we-are"
        style={{
          position: "absolute",
          top: "1rem",
          left: "1rem",
          fontSize: "1.25rem",
          color: "#fff",
          textDecoration: "none",
          background: "rgba(255,255,255,0.1)",
          padding: "0.5rem 1rem",
          borderRadius: "999px",
          backdropFilter: "blur(5px)",
        }}
      >
        ← Back
      </Link>

      {/* Decorative Corners */}
      <Image
        src="/regaltopleft.png"
        alt="Top Left Corner"
        width={300}
        height={300}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.8,
          pointerEvents: "none",
        }}
      />
      <Image
        src="/regaltopright.png"
        alt="Top Right Corner"
        width={300}
        height={300}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          opacity: 0.8,
          pointerEvents: "none",
        }}
      />
      <Image
        src="/regalbottomleft.png"
        alt="Bottom Left Corner"
        width={300}
        height={300}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          opacity: 0.8,
          pointerEvents: "none",
        }}
      />
      <Image
        src="/regalbottomright.png"
        alt="Bottom Right Corner"
        width={300}
        height={300}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          opacity: 0.8,
          pointerEvents: "none",
        }}
      />

      {/* Page Content */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1100px",
          margin: "0 auto",
          flexWrap: "wrap",
          zIndex: 2,
          position: "relative",
        }}
      >
        {/* Text Content */}
        <div style={{ flex: "1 1 480px", paddingRight: "2rem" }}>
          <h3
            style={{
              fontWeight: 400,
              fontSize: "1.25rem",
              color: "#cfcfcf",
              marginBottom: "1rem",
            }}
          >
            Meet our Aus Director — Brigit Husseini
          </h3>
          <h1
            style={{
              fontWeight: 700,
              fontSize: "2rem",
              marginBottom: "1.5rem",
              lineHeight: "1.4",
            }}
          >
            Brigit — Strategic, compassionate, and purpose driven
          </h1>
          <p
            style={{
              lineHeight: 1.75,
              color: "#e6e6e6",
              fontSize: "1.05rem",
              textAlign: "justify",
            }}
          >
            Salam, I’m Brigit, a proud Lebanese-Australian who has had the
            privilege of growing up in Lebanon and building a life in Australia.
            My upbringing instilled in me the importance of resilience,
            community, and living by my values — principles that continue to
            guide me today.
            <br /><br />
            As a dynamic corporate leader, I bring extensive experience spanning
            strategic sales management in the telecommunications industry and
            serving as General Manager for a leading manufacturing company.
            These roles have allowed me to develop a proven track record of
            driving business growth, building strong client relationships, and
            leading teams to exceed performance goals.
            <br /><br />
            Over time, I realised that true fulfilment comes from aligning my
            work with my values. This inspired me to co-found Ohpal International
            Ltd., a company dedicated to fostering global connections and
            promoting sustainable development through innovative partnerships.
            With SapphiraCare and Carneliana under my leadership, I channel my
            expertise into making a meaningful difference, blending purpose with
            action.
            <br /><br />
            As a mother, I find immense joy and purpose in nurturing my family,
            and as a professional, I am deeply committed to creating
            opportunities, uplifting others, and building a legacy of positive
            change. Fluent in English and Arabic, I draw upon my multicultural
            background to foster trust and collaboration in diverse markets.
          </p>
        </div>

        {/* Image Section */}
        <div
          style={{
            flex: "1 1 420px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Image
            src="/brigitwork.PNG"
            alt="Brigit at work"
            width={420}
            height={560}
            style={{
              borderRadius: "1rem",
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
              marginBottom: "1rem",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              marginTop: "0.5rem",
            }}
          >
            <Image
              src="/Carneliana.png"
              alt="Carneliana Logo"
              width={90}
              height={90}
            />
            <Image
              src="/SapphiraCare.png"
              alt="SapphiraCare Logo"
              width={90}
              height={90}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

