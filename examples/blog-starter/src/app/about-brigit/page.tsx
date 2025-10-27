"use client";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

export default function BrigitPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, i * 200);
    });
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "white",
        padding: "4rem 2rem",
        fontFamily: "Playfair Display, serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Back Arrow */}
      <Link
        href="/"
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          padding: "10px 16px",
          borderRadius: "50px",
          textDecoration: "none",
          zIndex: 10,
          transition: "all 0.3s ease",
        }}
      >
        ← Back
      </Link>

      {/* Decorative Corners */}
      <div className="corner corner-top-left">
        <Image
          src="/regaltopleft.png"
          alt="Top Left Corner"
          width={150}
          height={150}
          priority
        />
      </div>

      <div className="corner corner-top-right">
        <Image
          src="/regaltopright.png"
          alt="Top Right Corner"
          width={150}
          height={150}
          priority
        />
      </div>

      <div className="corner corner-bottom-left">
        <Image
          src="/regalbottomleft.png"
          alt="Bottom Left Corner"
          width={150}
          height={150}
          priority
        />
      </div>

      <div className="corner corner-bottom-right">
        <Image
          src="/regalbottomright.png"
          alt="Bottom Right Corner"
          width={150}
          height={150}
          priority
        />
      </div>

      {/* CSS for fade-in + corner styling */}
      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 1s ease, transform 1s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .corner {
          position: fixed;
          z-index: 2;
          pointer-events: none;
          opacity: 0.7; /* softer gold touch */
        }

        .corner img {
          width: 150px;
          height: auto;
          opacity: 0.7;
        }

        .corner-top-left {
          top: 10px;
          left: 10px;
        }

        .corner-top-right {
          top: 10px;
          right: 10px;
        }

        .corner-bottom-left {
          bottom: 10px;
          left: 10px;
        }

        .corner-bottom-right {
          bottom: 10px;
          right: 10px;
        }
      `}</style>

      {/* Main Content */}
      <div
        className="fade-in"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          gap: "2rem",
        }}
      >
        <div style={{ flex: "1 1 600px" }}>
          <h4
            style={{
              color: "#b38e43",
              fontSize: "1.2rem",
              marginBottom: "1rem",
            }}
          >
            Meet our Aus Director — Brigit Husseini
          </h4>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              lineHeight: "1.3",
              marginBottom: "2rem",
            }}
          >
            Brigit — Strategic, compassionate, and purpose driven
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#ddd",
            }}
          >
            Salam, I am Brigit, a proud Lebanese Australian who has had the
            privilege of growing up in Lebanon and building a life in Australia.
            My upbringing instilled in me the importance of resilience,
            community, and living by my values — principles that continue to
            guide me today.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#ddd",
              marginTop: "1.5rem",
            }}
          >
            As a dynamic corporate leader, I bring extensive experience spanning
            strategic sales management in the telecommunications industry and
            serving as General Manager for a leading manufacturing company.
            These roles have allowed me to develop a proven track record of
            driving business growth, building strong client relationships, and
            leading teams to exceed performance goals.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#ddd",
              marginTop: "1.5rem",
            }}
          >
            Over time, I realised that true fulfilment comes from aligning my
            work with my values. This inspired me to cofound Ohpal International
            Ltd, a company dedicated to fostering global connections and
            promoting sustainable development through innovative partnerships.
            With SapphiraCare and Carneliana under my leadership, I channel my
            expertise into making a meaningful difference, blending purpose with
            action.
          </p>
        </div>

        {/* Brigit Image */}
        <div
          className="fade-in"
          style={{
            flex: "1 1 350px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/7beed61e-db58-441d-b32c-cc425233d09f.png"
            alt="Brigit Husseini"
            width={400}
            height={500}
            style={{
              borderRadius: "20px",
              boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
      </div>
    </main>
  );
}

