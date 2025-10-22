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
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        SapphiraCare
      </h1>
      <p style={{ maxWidth: "600px", lineHeight: "1.6", color: "#ccc", marginBottom: "2rem" }}>
        Your care network hub — simple onboarding, secure records, and a community-first approach.
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <a
          href="/signup"
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.75rem",
            textDecoration: "none",
            fontWeight: "600"
          }}
        >
          Sign up
        </a>
        <a
          href="/login"
          style={{
            border: "1px solid white",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.75rem",
            textDecoration: "none",
            color: "white"
          }}
        >
          Login
        </a>
      </div>
    </main>
  );
}
