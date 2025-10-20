export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        Ohpal
      </h1>

      <div className="flex flex-col gap-3 text-lg">
        <p className="max-w-xl">
          Logistics, care, travel, and community under one roof.
        </p>

        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <a href="/sapphiracare" className="underline text-blue-600 hover:text-blue-800">💎 SapphiraCare</a>
          <a href="/carneliana" className="underline text-red-600 hover:text-red-800">🔥 Carneliana</a>
          <a href="/peridotrepid" className="underline text-green-600 hover:text-green-800">🚢 Peridotrepid</a>
          <a href="/citrinoor" className="underline text-yellow-600 hover:text-yellow-800">🌍 Citrinoor</a>
        </nav>
      </div>
    </section>
  );
}
