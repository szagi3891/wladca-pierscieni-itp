export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border-gold)] bg-[var(--bg-secondary)]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-display text-sm tracking-[0.3em] text-[var(--gold-ring)]">
            • • • • •
          </p>
          <p className="text-contrast text-sm text-[var(--parchment-muted)]">
            „Jeden Pierścień, by wszystkimi rządzić, jeden, by je wszystkie odnaleźć,
            <br className="hidden sm:inline" />
            Jeden Pierścień, by wszystkie zgromadzić i w ciemności związać.”
          </p>
          <p className="text-contrast font-display text-xs tracking-widest text-[var(--parchment-muted)]">
            — NAPIS NA PIERŚCIENIU WŁADZY
          </p>
          <p className="text-xs text-[var(--smoke)]">
            © Władca Pierścieni
          </p>
        </div>
      </div>
    </footer>
  );
}
