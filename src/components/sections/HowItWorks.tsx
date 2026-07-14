import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Tell Us Your Vision",
    description: "Share your idea, your ride, or your brand.",
    image: "/assets/higgsfield-generated/step-real-car.jpg",
  },
  {
    number: "02",
    title: "We Design a Proof",
    description: "Our team builds a custom proof for your approval.",
    image: "/assets/higgsfield-generated/step-ipad-sketch.jpg",
  },
  {
    number: "03",
    title: "We Print & Ship",
    description: "Premium materials, printed and shipped fast.",
    image: "/assets/higgsfield-generated/step-print-formats.jpg",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="relative border-y border-white/5 bg-surface/40 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink to-transparent"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-body text-sm font-bold uppercase tracking-[0.3em] text-prestige-red">
            The Process
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase text-white sm:text-5xl">
            From Idea to Your Print
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={step.image}
                  alt={`${step.title} — concept illustration`}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 font-display text-4xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl uppercase text-white">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-sm text-white/50">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
