import { useState, type FormEvent } from "react";

const PROJECT_TYPES = [
  "Car Decal / Sticker",
  "Poster",
  "Canvas Print",
  "Custom Artwork",
  "Something Else",
];

export default function OrderCTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Backend wiring (email/API) is a later-stage decision, not part of the static foundation.
    setSubmitted(true);
  }

  return (
    <section id="order" className="mx-auto max-w-3xl px-6 py-24">
      <div className="text-center">
        <p className="font-body text-sm font-bold uppercase tracking-[0.3em] text-prestige-red">
          Start Your Order
        </p>
        <h2 className="mt-3 font-display text-4xl uppercase text-white sm:text-5xl">
          Tell Us What You&apos;re Building
        </h2>
        <p className="mt-4 font-body text-white/50">
          Fill this out and our team will follow up with a custom proof.
        </p>
      </div>

      {submitted ? (
        <div className="mt-10 rounded-2xl border border-prestige-red/40 bg-surface p-10 text-center">
          <p className="font-display text-2xl uppercase text-white">
            Request Received
          </p>
          <p className="mt-2 font-body text-white/50">
            We&apos;ll be in touch soon to start your proof.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block font-body text-sm font-semibold text-white/70">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-lg border border-white/10 bg-surface px-4 py-3 font-body text-white placeholder-white/30 outline-none focus:border-prestige-red"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-body text-sm font-semibold text-white/70">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-white/10 bg-surface px-4 py-3 font-body text-white placeholder-white/30 outline-none focus:border-prestige-red"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="projectType" className="block font-body text-sm font-semibold text-white/70">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              defaultValue=""
              className="mt-2 w-full rounded-lg border border-white/10 bg-surface px-4 py-3 font-body text-white outline-none focus:border-prestige-red"
            >
              <option value="" disabled>
                Select a project type
              </option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block font-body text-sm font-semibold text-white/70">
              Tell Us About Your Idea
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={5}
              className="mt-2 w-full rounded-lg border border-white/10 bg-surface px-4 py-3 font-body text-white placeholder-white/30 outline-none focus:border-prestige-red"
              placeholder="Vehicle, design idea, size, quantity, inspiration..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-prestige-red px-8 py-4 font-body text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-600"
          >
            Submit Custom Order Request
          </button>
        </form>
      )}
    </section>
  );
}
