import { Fragment } from "react";
import { motion } from "framer-motion";

function IdeaIcon() {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-9 w-9 text-white/30">
        <path
          d="M3 16.5h1l1-3.2a2 2 0 012-1.8h10a2 2 0 012 1.8l1 3.2h1"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="16.5" r="1.6" strokeWidth="1.4" />
        <circle cx="17" cy="16.5" r="1.6" strokeWidth="1.4" />
      </svg>
      <div className="absolute -bottom-1 -right-2 flex h-5 w-5 items-center justify-center rounded-md border border-prestige-red bg-ink">
        <span className="h-1.5 w-1.5 rounded-full bg-prestige-red" />
        <motion.span
          className="absolute h-1.5 w-1.5 rounded-full bg-white"
          animate={{ scale: [0.6, 2.6], opacity: [0.9, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.6, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function ArtworkIcon() {
  const sparkles = [
    { x: -14, y: -10, delay: 0 },
    { x: 14, y: -6, delay: 0.35 },
    { x: -8, y: 12, delay: 0.7 },
  ];
  return (
    <div className="relative flex h-10 w-10 items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-9 w-9 text-prestige-red">
        <path d="M4 20l4-1 10-10-3-3L5 16l-1 4z M14 6l3 3" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      {sparkles.map((s, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-white"
          style={{ left: `calc(50% + ${s.x}px)`, top: `calc(50% + ${s.y}px)` }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            repeatDelay: 1.1,
            delay: s.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function PrintIcon() {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-9 w-9 text-prestige-red">
        <path d="M6 9V3h12v6 M6 18h12v3H6v-3z M4 9h16v7H4V9z" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <motion.div
        className="absolute inset-y-0 w-4 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        animate={{ x: ["-2.5rem", "3rem"] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
      />
    </div>
  );
}

function FlowConnector() {
  return (
    <div className="relative ml-10 h-8 w-px bg-white/10">
      <motion.span
        className="absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-prestige-red shadow-[0_0_8px_2px_rgba(216,31,38,0.6)]"
        animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

const STAGES = [
  {
    label: "Send The Idea",
    detail: "A photo of your ride, a logo, a sketch, or just a concept.",
    Icon: IdeaIcon,
  },
  {
    label: "We Turn It Into Artwork",
    detail: "Our artists build a bold, cartoon-style custom design.",
    Icon: ArtworkIcon,
  },
  {
    label: "You Get It Printed",
    detail: "Decal, sticker, poster, or canvas — shipped ready to display.",
    Icon: PrintIcon,
  },
];

export default function Transformation() {
  return (
    <section className="border-y border-white/5 bg-surface/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-body text-sm font-bold uppercase tracking-[0.3em] text-prestige-red">
            The Transformation
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl uppercase text-white sm:text-5xl">
            Send the Idea. We Turn It Into Artwork.
            <br />
            You Get It Printed.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto w-full max-w-sm"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(216,31,38,0.45)]">
              <img
                src="/assets/higgsfield-generated/transformation-reveal-v2.jpg"
                alt="A framed poster print of a bold cartoon-style Toyota Supra illustration leaning against a dark wall"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>

          <div className="flex flex-col items-start gap-2">
            {STAGES.map((stage, index) => (
              <Fragment key={stage.label}>
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex items-center gap-5 text-left"
                >
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-surface2 shadow-[0_0_40px_-18px_rgba(216,31,38,0.5)]">
                    <stage.Icon />
                  </div>
                  <div>
                    <h3 className="font-display text-xl uppercase text-white">
                      {stage.label}
                    </h3>
                    <p className="mt-1 font-body text-sm text-white/50">
                      {stage.detail}
                    </p>
                  </div>
                </motion.div>

                {index < STAGES.length - 1 && <FlowConnector />}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
