const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-12 text-center md:flex-row md:justify-between md:text-left">
        <img
          src="/assets/logo/prestigeLOGO.JPG"
          alt="Prestige Prints"
          className="h-10 w-auto rounded-sm"
        />

        <p className="max-w-sm font-body text-sm text-white/50">
          Premium custom decals, stickers, posters, canvas prints, and
          artwork &mdash; built for car people, creators, and small brands.
        </p>

        <div className="flex items-center gap-6">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="font-body text-sm font-semibold uppercase tracking-wide text-white/50 transition hover:text-white"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center font-body text-xs text-white/30">
        &copy; {new Date().getFullYear()} Prestige Prints. All rights reserved.
      </div>
    </footer>
  );
}
