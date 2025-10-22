export default function HomePage() {
  // Renders inside <main id="about">{children}</main> from layout.tsx
  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 1100, margin: '0 auto' }}>
      <h3 style={{ margin: '0 0 1rem' }}>About Ohpal</h3>
      <p style={{ lineHeight: 1.6 }}>
        Ohpal International Ltd unites Trade, Care, and Culture. Explore our branches below.
      </p>
    </div>
  );
}
