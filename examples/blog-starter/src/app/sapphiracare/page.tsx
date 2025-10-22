export const metadata = {
  title: "SapphiraCare — Ohpal",
  description: "Care and support services by Ohpal"
};

export default function SapphiraCareHome() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0a",
        color: "white",
        textAlign: "center",
        padding: "2rem"
      }}
    >
      {/* Logo */}
      <img
        src="/SapphiraCareTransparent.png"
        alt="SapphiraCare Logo"
        style={{ width: "200px", marginBottom: "1.5rem", opacity: 0.95 }}
      />

      {/* Title */}
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        SapphiraCare
      </h1>

      {/* Blurb */}
      <p
        style={{
          maxWidth: "640px",
          lineHeight: 1.6,
          color: "#ccc",
          marginBottom: "2rem"
        }}
      >
        SapphiraCare is Ohpal’s dedicated branch for care and support services.
        We connect communities, contractors, and care recipients through trust,
        accessibility, and heart — making quality care simple, secure, and human.
      </p>

      {/* Actions */}
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "0.75rem"
        }}
      >
        <a
          href="/login?role=USER"
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "0.75rem 1.25rem",
            borderRadius: "0.75rem",
            textDecoration: "none",
            fontWeight: 600
          }}
        >
          User login
        </a>

        <a
          href="/login?role=CONTRACTOR"
          style={{
            border: "1px solid white",
            padding: "0.75rem 1.25rem",
            borderRadius: "0.75rem",
            textDecoration: "none",
            color: "white",
            fontWeight: 600
          }}
        >
          Contractor login
        </a>

        <a
          href="/signup"
          style={{
            border: "1px solid white",
            padding: "0.75rem 1.25rem",
            borderRadius: "0.75rem",
            textDecoration: "none",
            color: "white"
          }}
        >
          Sign up
        </a>
      </div>

      <small style={{ color: "#9ca3af" }}>
        Don’t have an account yet? Click <strong>Sign up</strong>.
      </small>
    </main>
  );
}
