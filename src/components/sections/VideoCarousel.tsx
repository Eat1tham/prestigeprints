import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

const VIDEOS = [
  { src: "/assets/videos/IMG_6801.MOV", label: "Corvette C8" },
  { src: "/assets/videos/Moment-App-20220726200053407.mov", label: "BMW M5" },
];

const AUTO_ADVANCE_MS = 5500;

// Each stacked card's look, keyed by how many slots behind the active card it sits.
const STACK_STYLES = [
  { x: "0%", y: 0, scale: 1, rotate: 0, opacity: 1, zIndex: 30 },
  { x: "34%", y: 18, scale: 0.8, rotate: 5, opacity: 0.55, zIndex: 20 },
  { x: "54%", y: 32, scale: 0.64, rotate: 9, opacity: 0.22, zIndex: 10 },
];

export default function VideoCarousel() {
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % VIDEOS.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, []);

  function goTo(index: number) {
    setActive(index);
  }

  return (
    <section className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(216,31,38,0.1),transparent_60%)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <p className="font-body text-sm font-bold uppercase tracking-[0.3em] text-prestige-red">
          Straight From The Shop
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl uppercase text-white sm:text-5xl">
          Real Prints In Motion
        </h2>
        <p className="mx-auto mt-4 max-w-md font-body text-sm text-white/50">
          Real Prestige Prints decals, on real rides.
        </p>

        <div className="relative mx-auto mt-16 h-[420px] w-full max-w-sm sm:h-[480px]">
          {VIDEOS.map((video, index) => {
            const offset = (index - active + VIDEOS.length) % VIDEOS.length;
            const style = STACK_STYLES[Math.min(offset, STACK_STYLES.length - 1)];
            const isActive = offset === 0;

            return (
              <motion.div
                key={video.src}
                onClick={() => !isActive && goTo(index)}
                animate={{
                  x: style.x,
                  y: style.y,
                  scale: style.scale,
                  rotate: style.rotate,
                  opacity: style.opacity,
                }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{ zIndex: style.zIndex }}
                className={`absolute inset-0 mx-auto ${
                  isActive ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(216,31,38,0.45)]">
                  <video
                    src={video.src}
                    autoPlay
                    muted={muted}
                    loop
                    playsInline
                    className="h-full w-full bg-black object-cover"
                  />
                </div>
                {isActive && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMuted((m) => !m);
                    }}
                    className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur transition hover:border-white/50"
                    aria-label={muted ? "Unmute video" : "Mute video"}
                  >
                    {muted ? <SpeakerMutedIcon /> : <SpeakerOnIcon />}
                  </button>
                )}
                <p
                  className={`mt-4 text-center font-body text-xs font-semibold uppercase tracking-widest transition-opacity ${
                    isActive ? "text-white/50 opacity-100" : "opacity-0"
                  }`}
                >
                  {video.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {VIDEOS.map((video, index) => (
            <button
              key={video.src}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show ${video.label}`}
              className={`h-1.5 rounded-full transition-all ${
                index === active ? "w-6 bg-prestige-red" : "w-1.5 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
