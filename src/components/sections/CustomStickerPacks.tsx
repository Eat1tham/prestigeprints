import { motion } from "framer-motion";

export default function CustomStickerPacks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface2 shadow-[0_30px_80px_-20px_rgba(216,31,38,0.45)]">
            <img
              src="/assets/higgsfield-generated/custom_car_sticker_pack_display.jpg"
              alt="Concept mockup of a Prestige Prints custom car sticker pack in packaging, featuring die-cut car stickers and a Your Car Here design slot"
              className="aspect-square w-full object-cover"
            />
          </div>
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-widest text-white/70 backdrop-blur">
            Product Concept
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <p className="font-body text-sm font-bold uppercase tracking-[0.3em] text-prestige-red">
            Sticker Packs
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase text-white sm:text-5xl">
            Custom Car Sticker Packs
          </h2>
          <p className="mx-auto mt-5 max-w-md font-body text-white/60 lg:mx-0">
            Turn your car into a collectible sticker pack. Choose your ride,
            style, and finish — we&apos;ll turn it into custom artwork made
            to print.
          </p>
          <a
            href="#order"
            className="mt-8 inline-block rounded-full bg-prestige-red px-8 py-4 font-body text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_30px_-8px_rgba(216,31,38,0.7)] transition hover:-translate-y-0.5 hover:bg-red-600"
          >
            Start a Sticker Pack
          </a>
        </motion.div>
      </div>
    </section>
  );
}
