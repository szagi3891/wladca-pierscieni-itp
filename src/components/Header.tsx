import Link from "next/link";

const navItems = [
  { href: "/", label: "Strona Główna" },
  { href: "#", label: "Śródziemie" },
  { href: "#", label: "Bohaterowie" },
  { href: "#", label: "Lokalizacje" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-gold)] bg-[var(--bg-secondary)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <nav className="flex gap-4 sm:gap-6 md:gap-8">
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
