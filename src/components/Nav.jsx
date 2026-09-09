const links = [
  { href: "#home", label: "Home" },
  { href: "#schedule", label: "Schedule" },
  { href: "#location", label: "Location" },
  { href: "#aarti", label: "Aarti" },
  { href: "#photos", label: "Photos" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/30 bg-maroon/95 backdrop-blur supports-[backdrop-filter]:bg-maroon/90">
      <nav className="mx-auto flex max-w-3xl items-center justify-center gap-1 overflow-x-auto px-4 py-3 text-sm">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="whitespace-nowrap rounded-full px-3 py-1.5 font-medium text-gold-light transition-colors hover:bg-gold/15 hover:text-gold"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
