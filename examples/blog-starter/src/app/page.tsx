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
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Ohpal International Ltd
      </h1>
      <p style={{ color: "#ccc", marginBottom: "3rem" }}>
        A seamless collaboration in Trade, Care, and Culture.
      </p>

      {/* Branch icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1.5rem"
        }}
      >
        <div>
          <img
            src="/logos/peridotrepid.png"
            alt="Peridotrepid"
            style={{ width: "140px", borderRadius: "10px" }}
          />
          <p>Logistics and procurement</p>
        </div>

        <div>
          <img
            src="/logos/carneliana.png"
            alt="Carneliana"
            style={{ width: "140px", borderRadius: "10px" }}
          />
          <p>Wellness and medical travel</p>
        </div>

        {/* THIS IS THE ONE that links to /sapphiracare */}
        <Link
          href="/sapphiracare"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div>
            <img
              src="/logos/sapphiracare.png"
              alt="SapphiraCare"
              style={{ width: "140px", borderRadius: "10px" }}
            />
            <p>Care and support services</p>
          </div>
        </Link>

        <div>
          <img
            src="/logos/citrinoor.png"
            alt="Citrinoor"
            style={{ width: "140px", borderRadius: "10px" }}
          />
          <p>Community and philanthropy</p>
        </div>
      </div>
    </main>
  );
}
