import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero section */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--forest-dark)]/30 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-3xl space-y-8">
          <p className="font-display text-sm tracking-[0.4em] text-[var(--gold-ring)] text-contrast">
            WITAJ W ŚRÓDZIEMIU
          </p>
          
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-wider text-[var(--parchment)] text-contrast-strong sm:text-5xl md:text-6xl">
            Władca Pierścieni
          </h1>
          
          <p className="text-contrast mx-auto max-w-xl text-lg leading-relaxed text-[var(--parchment-muted)] sm:text-xl">
            W krainie pełnej legend, magii i niezwykłych przygód. 
            Gdzie hobbici, elfy i krasnoludy wspólnie stawiają czoła mrocznej potędze.
          </p>

          <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
            <Link
              href="#"
              className="text-contrast group inline-flex items-center gap-2 rounded-sm border border-[var(--gold-ring)]/60 bg-[var(--gold-ring)]/20 px-8 py-3 font-display text-sm tracking-widest text-[var(--gold-light)] transition-all hover:border-[var(--gold-ring)] hover:bg-[var(--gold-ring)]/30"
            >
              Wyrusz w podróż
            </Link>
            <Link
              href="#"
              className="text-contrast inline-flex items-center gap-2 rounded-sm border border-[var(--parchment-muted)]/50 bg-[var(--bg-secondary)]/60 px-8 py-3 font-display text-sm tracking-widest text-[var(--parchment)] transition-colors hover:border-[var(--gold-ring)]/50 hover:text-[var(--gold-light)]"
            >
              Poznaj świat
            </Link>
          </div>
        </div>
      </section>

      {/* Karty - trzy rasy/krainy */}
      <section className="border-y border-[var(--border-gold)] bg-[var(--bg-secondary)]/90 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-contrast mb-12 text-center font-display text-2xl tracking-[0.2em] text-[var(--gold-ring)]">
            KRÓLESTWA ŚRÓDZIEMIA
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Shire",
                subtitle: "Kraj Hobbitów",
                description: "Zielone pagórki, przytulne norki i spokojne życie. Tu zaczyna się największa przygoda.",
                accent: "from-[#2d4a3e]",
              },
              {
                title: "Rivendell",
                subtitle: "Ostatni Przyjazny Dom",
                description: "Elficka dolina ukryta wśród gór. Miejsce mądrości, pokoju i rady.",
                accent: "from-[#3d362d]",
              },
              {
                title: "Mordor",
                subtitle: "Kraj Cienia",
                description: "Ciemna kraina Saurona. Tu czeka ostateczna próba i przeznaczenie.",
                accent: "from-[#1a1612]",
              },
            ].map((realm) => (
              <article
                key={realm.title}
                className="group border border-[var(--border-gold)]/30 bg-[var(--bg-card)] p-6 transition-all hover:border-[var(--gold-ring)]/50"
              >
                <div className={`mb-4 h-1 w-16 bg-gradient-to-r ${realm.accent} to-transparent`} />
                <h3 className="font-display text-xl tracking-wider text-[var(--gold-light)]">
                  {realm.title}
                </h3>
                <p className="mb-2 text-sm text-[var(--gold-ring)]">{realm.subtitle}</p>
                <p className="text-contrast text-[var(--parchment-muted)]">{realm.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cytat */}
      <section className="py-20">
        <blockquote className="mx-auto max-w-2xl px-4 text-center">
          <p className="text-contrast-strong text-xl italic leading-relaxed text-[var(--parchment)] sm:text-2xl">
            „Nie wszystko złoto, co się świeci,
            <br />
            Nie każdy wędrowiec błądzi;
            <br />
            Stary, co silny, nie zgnije,
            <br />
            Głębokie korzenie mróz nie ubije.”
          </p>
          <cite className="text-contrast mt-4 block font-display text-sm tracking-wider text-[var(--gold-ring)]">
            — Bilbo Baggins
          </cite>
        </blockquote>
      </section>
    </div>
  );
}
