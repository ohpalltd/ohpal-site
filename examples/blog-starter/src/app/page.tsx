import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        color: "white",
        textAlign: "center",
        padding: "3rem 1rem"
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        Ohpal International Ltd
      </h1>
      <p style={{ color: "#ccc", marginBottom: "3rem", fontSize: "1.05rem" }}>
        A seamless collaboration in Trade, Care, and Culture.
      </p>

      {/* Branch logos section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem"
        }}
      >
        {/* Peridotrepid */}
        <div style={{ width: "180px" }}>
          <img
            src="/PeridotrepidTransparentLogo.png"
            alt="Peridotrepid"
            style={{ width: "100%", borderRadius: "10px", marginBottom: "0.75rem" }}
          />
          <p style={{ fontWeight: "600" }}>Peridotrepid</p>
          <p style={{ color: "#bbb", fontSize: "0.9rem" }}>
            Logistics and procurement
          </p>
        </div>

        {/* Carneliana */}
        <div style={{ width: "180px" }}>
          <img
            src="/CarnelianaTransparentLogo.png"
            alt="Carneliana"
            style={{ width: "100%", borderRadius: "10px", marginBottom: "0.75rem" }}
          />
          <p style={{ fontWeight: "600" }}>Carneliana</p>
          <p style={{ color: "#bbb", fontSize: "0.9rem" }}>
            Wellness and medical travel
          </p>
        </div>

        {/* SapphiraCare */}
        <Link
          href="/sapphiracare"
          style={{
            textDecoration: "none",
            color: "inherit",
            width: "180px",
            display: "block"
          }}
        >
          <div>
            <img
              src="/SapphiracareTransparentLogo.png"
              alt="SapphiraCare"
              style={{ width: "100%", borderRadius: "10px", marginBottom: "0.75rem" }}
            />
            <p style={{ fontWeight: "600" }}>SapphiraCare</p>
            <p style={{ color: "#bbb", fontSize: "0.9rem" }}>
              Care and support services
            </p>
          </div>
        </Link>

        {/* Citrinoor */}
        <div style={{ width: "180px" }}>
          <img
            src="/CitrinoorTransparentLogo.png"
            alt="Citrinoor"
            style={{ width: "100%", borderRadius: "10px", marginBottom: "0.75rem" }}
          />
          <p style={{ fontWeight: "600" }}>Citrinoor</p>
          <p style={{ color: "#bbb", fontSize: "0.9rem" }}>
            Community and philanthropy
          </p>
        </div>
      </div>
    </main>
  );
}
