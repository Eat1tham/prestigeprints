import { motion } from "framer-motion";

const PACK_ITEMS = [
  {
    image: "/assets/photos/corvette-artwork.jpg",
    label: "Corvette C8",
    sublabel: "Full Color Print",
    rotate: "-rotate-3",
  },
  {
    image: "/assets/photos/corvette-sticker.jpg",
    label: "Corvette C8",
    sublabel: "Die-Cut Sticker",
    rotate: "rotate-2",
  },
  {
    image: "/assets/photos/bmw-m4-artwork.jpg",
    label: "BMW M4",
    sublabel: "Full Color Print",
    rotate: "-rotate-2",
  },
  {
    image: "/assets/photos/bmw-m5-artwork.png",
    label: "BMW M5",
    sublabel: "Full Color Print",
    rotate: "rotate-3",
  },
];

function StickerCard({
  image,
  label,
  sublabel,
  rotate,
  index,
}: {
  image: string;
  label: string;
  sublabel: string;
  rotate: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative aspect-square ${rotate} overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] transition duration-300 ease-out hover:-translate-y-1 hover:rotate-0 hover:shadow-[0_25px_60px_-12px_rgba(216,31,38,0.5)]`}
    >
      <img
        src={image}
        alt={`${label} custom sticker artwork, ${sublabel}`}
        className="h-full w-full object-contain p-4"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-4 pb-3 pt-8">
        <p className="font-display text-sm uppercase text-white">{label}</p>
        <p className="font-body text-[11px] uppercase tracking-wide text-white/60">
          {sublabel}
        </p>
      </div>
      <div
        aria-hidden
        className="absolute right-0 top-0 h-6 w-6 bg-gradient-to-bl from-black/15 to-transparent"
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
      />
    </motion.div>
  );
}

function PlaceholderCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: PACK_ITEMS.length * 0.08 }}
      className="group relative flex aspect-square rotate-1 flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-white/15 bg-surface2 p-6 text-center transition duration-300 ease-out hover:-translate-y-1 hover:rotate-0 hover:border-prestige-red/50"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-10 w-10 text-white/25">
        <path d="M12 5v14M5 12h14" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div>
        <p className="font-display text-lg uppercase text-white/70">Your Car Here</p>
        <p className="mt-1 font-body text-[11px] uppercase tracking-wide text-white/30">
          Design Slot 05
        </p>
      </div>
    </motion.div>
  );
}

export default function StickerPack() {
  return (
    <section className="border-y border-white/5 bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-body text-sm font-bold uppercase tracking-[0.3em] text-prestige-red">
            The Sticker Pack
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl uppercase text-white sm:text-5xl">
            Your Car. Your Pack. Your Style.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-white/50">
            Every pack starts as real custom artwork — bold, cartoon-inspired
            designs built from your ride, ready to cut and print.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-8 lg:grid-cols-5">
          {PACK_ITEMS.map((item, index) => (
            <StickerCard key={`${item.label}-${item.sublabel}`} {...item} index={index} />
          ))}
          <PlaceholderCard />
        </div>

        <div className="mt-14 text-center">
          <a
            href="#order"
            className="inline-block rounded-full bg-prestige-red px-8 py-4 font-body text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_30px_-8px_rgba(216,31,38,0.7)] transition hover:-translate-y-0.5 hover:bg-red-600"
          >
            Build Your Pack
          </a>
        </div>
      </div>
    </section>
  );
}
