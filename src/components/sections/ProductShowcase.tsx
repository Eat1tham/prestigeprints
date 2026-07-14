const MOCKUPS = [
  {
    label: "Car Decals",
    image: "/assets/higgsfield-generated/showcase-decal-v2.jpg",
  },
  {
    label: "Stickers",
    image: "/assets/higgsfield-generated/showcase-stickers-v2.jpg",
  },
  {
    label: "Posters",
    image: "/assets/higgsfield-generated/showcase-poster-v2.jpg",
  },
  {
    label: "Canvas Prints",
    image: "/assets/higgsfield-generated/showcase-canvas-v3.jpg",
  },
];

export default function ProductShowcase() {
  return (
    <section id="showcase" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="font-body text-sm font-bold uppercase tracking-[0.3em] text-prestige-red">
          The Showcase
        </p>
        <h2 className="mt-3 font-display text-4xl uppercase text-white sm:text-5xl">
          Real Work, Rendered Bold
        </h2>
        <p className="mx-auto mt-4 font-body text-xs uppercase tracking-widest text-white/30">
          Concept mockups
        </p>
      </div>

      <div
        data-slot="product-mockup-grid"
        className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {MOCKUPS.map((item) => (
          <div
            key={item.label}
            data-slot="product-mockup"
            className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:rotate-1 hover:border-prestige-red/50 hover:shadow-[0_20px_50px_-15px_rgba(216,31,38,0.45)]"
          >
            <img
              src={item.image}
              alt={`${item.label} product concept mockup`}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-4 pb-3 pt-10">
              <p className="font-display text-sm uppercase text-white">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
