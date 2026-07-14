import { useState } from "react";

function SpeakerMutedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
      <path d="M4 9v6h4l5 4V5L8 9H4z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 9l4 6M20 9l-4 6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SpeakerOnIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
      <path d="M4 9v6h4l5 4V5L8 9H4z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16.5 8.5a5 5 0 010 7 M19 6a8.5 8.5 0 010 12" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function VideoCard({
  src,
  aspectClass,
  maxWidth,
  label,
  artworkChip,
}: {
  src: string;
  aspectClass: string;
  maxWidth: string;
  label: string;
  artworkChip?: string;
}) {
  const [muted, setMuted] = useState(true);

  return (
    <div className={`relative mx-auto w-full ${maxWidth}`}>
      {artworkChip && (
        <div className="absolute -left-4 -top-4 z-10 h-16 w-16 overflow-hidden rounded-xl border-2 border-ink bg-white shadow-lg sm:h-20 sm:w-20">
          <img
            src={artworkChip}
            alt="The original custom sticker artwork used for this decal"
            className="h-full w-full object-contain p-1"
          />
        </div>
      )}
      <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(216,31,38,0.45)]">
        <video
          src={src}
          autoPlay
          muted={muted}
          loop
          playsInline
          className={`${aspectClass} w-full bg-black object-cover`}
        />
      </div>
      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur transition hover:border-white/50"
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? <SpeakerMutedIcon /> : <SpeakerOnIcon />}
      </button>
      <p className="mt-4 text-center font-body text-xs font-semibold uppercase tracking-widest text-white/40">
        {label}
      </p>
    </div>
  );
}

export default function VideoReveal() {
  return (
    <section
      id="reveal"
      data-slot="pinned-video-reveal"
      className="relative overflow-hidden border-y border-white/5 bg-surface2 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(216,31,38,0.12),transparent_65%)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <p className="font-body text-sm font-bold uppercase tracking-[0.3em] text-prestige-red">
          Real Work
        </p>
        <h2 className="mt-3 font-display text-3xl uppercase text-white sm:text-4xl">
          Straight From The Shop
        </h2>
        <p className="mx-auto mt-3 max-w-md font-body text-sm text-white/50">
          Real Prestige Prints decals, on real rides.
        </p>

        <div className="mt-12 grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-10">
          <VideoCard
            src="/assets/videos/Moment-App-20220726200053407.mov"
            aspectClass="aspect-[2560/2160]"
            maxWidth="max-w-md"
            label="BMW M5 — Custom Decal"
          />
          <VideoCard
            src="/assets/videos/IMG_6801.MOV"
            aspectClass="aspect-[9/16]"
            maxWidth="max-w-[300px]"
            label="Corvette C8 — Custom Decal"
            artworkChip="/assets/photos/corvette-sticker.jpg"
          />
        </div>
      </div>
    </section>
  );
}
