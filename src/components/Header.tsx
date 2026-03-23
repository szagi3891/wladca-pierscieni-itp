import Link from "next/link";

const navItems = [
  { href: "/", label: "Strona Główna" },
  { href: "#", label: "Śródziemie" },
  { href: "#", label: "Bohaterowie" },
  { href: "#", label: "Lokalizacje" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-gold)] bg-[var(--bg-secondary)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--bg-secondary)]/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl tracking-[0.2em] text-[var(--gold-ring)] transition-colors hover:text-[var(--gold-light)] sm:text-2xl"
        >
          WŁADCA PIERŚCIENI
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-sm tracking-widest text-[var(--parchment-muted)] transition-colors hover:text-[var(--gold-ring)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Złota linia dekoracyjna */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--gold-ring)]/50 to-transparent" />
    </header>
  );
}
