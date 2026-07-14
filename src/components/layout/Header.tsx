const NAV_LINKS = [
  { label: "Work", href: "#showcase" },
  { label: "Process", href: "#process" },
  { label: "Reveal", href: "#reveal" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-2">
          <img
            src="/assets/logo/prestigeLOGO.JPG"
            alt="Prestige Prints"
            className="h-10 w-auto rounded-sm"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-semibold uppercase tracking-wide text-white/70 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#order"
          className="rounded-full bg-prestige-red px-5 py-2 font-body text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-600"
        >
          Start Your Order
        </a>
      </div>
    </header>
  );
}
