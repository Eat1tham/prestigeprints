const OFFERINGS = [
  {
    title: "Car Decals & Stickers",
    description: "Cut-vinyl decals and sticker packs built to survive the road.",
    icon: (
      <path d="M4 17l4-10 8 2 4 8-8 2-8-2z" strokeWidth="1.5" strokeLinejoin="round" />
    ),
  },
  {
    title: "Posters",
    description: "Statement wall art printed in bold, gallery-ready quality.",
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="1" strokeWidth="1.5" />
        <path d="M8 8h8M8 12h8M8 16h5" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Canvas Prints",
    description: "Museum-grade canvas for your ride, your space, your story.",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" strokeWidth="1.5" />
        <path d="M4 15l4-4 4 3 4-5 4 6" strokeWidth="1.5" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Custom Artwork",
    description: "Original designs made from your idea, your ride, your brand.",
    icon: (
      <path
        d="M12 3l2.5 5.5L20 11l-5.5 2.5L12 19l-2.5-5.5L4 11l5.5-2.5L12 3z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function ValueProps() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {OFFERINGS.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-surface p-8 transition hover:border-prestige-red/50"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-8 w-8 text-prestige-red"
            >
              {item.icon}
            </svg>
            <h3 className="mt-5 font-display text-xl uppercase text-white">
              {item.title}
            </h3>
            <p className="mt-2 font-body text-sm text-white/50">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
