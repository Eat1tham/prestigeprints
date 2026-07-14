import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

function SpeakerMutedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3.5 w-3.5">
      <path d="M4 9v6h4l5 4V5L8 9H4z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 9l4 6M20 9l-4 6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SpeakerOnIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3.5 w-3.5">
      <path d="M4 9v6h4l5 4V5L8 9H4z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16.5 8.5a5 5 0 010 7 M19 6a8.5 8.5 0 010 12" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MobileVideo({ src, label }: { src: string; label: string }) {
  const [muted, setMuted] = useState(true);

  return (
    <div className="w-28">
      <div className="relative overflow-hidden rounded-xl border border-white/15 shadow-[0_15px_40px_-12px_rgba(0,0,0,0.8)]">
        <video
          src={src}
          autoPlay
          muted={muted}
          loop
          playsInline
          className="aspect-square w-full bg-black object-cover"
        />
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          className="absolute bottom-1.5 right-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? <SpeakerMutedIcon /> : <SpeakerOnIcon />}
        </button>
      </div>
      <p className="mt-1.5 text-center font-body text-[10px] font-semibold uppercase tracking-widest text-white/50">
        {label}
      </p>
    </div>
  );
}

function FloatingVideo({
  src,
  aspectClass,
  widthClass,
  label,
  floatDelay,
  floatDuration,
  rotate,
  className,
}: {
  src: string;
  aspectClass: string;
  widthClass: string;
  label: string;
  floatDelay: number;
  floatDuration: number;
  rotate: number;
  className: string;
}) {
  const [muted, setMuted] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      animate={{ opacity: 1, y: [0, -14, 0], rotate }}
      transition={{
        opacity: { duration: 0.8, delay: 0.6 },
        rotate: { duration: 0.8, delay: 0.6 },
        y: { duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`absolute z-10 ${widthClass} ${className}`}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
        <video
          src={src}
          autoPlay
          muted={muted}
          loop
          playsInline
          className={`${aspectClass} w-full bg-black object-cover`}
        />
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur transition hover:border-white/50"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? <SpeakerMutedIcon /> : <SpeakerOnIcon />}
        </button>
      </div>
      <p className="mt-2 text-center font-body text-[10px] font-semibold uppercase tracking-widest text-white/50">
        {label}
      </p>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFinePointer || prefersReducedMotion) return;

    const bgX = gsap.quickTo(bgRef.current, "x", { duration: 0.9, ease: "power3.out" });
    const bgY = gsap.quickTo(bgRef.current, "y", { duration: 0.9, ease: "power3.out" });
    const glowX = gsap.quickTo(glowRef.current, "x", { duration: 0.6, ease: "power3.out" });
    const glowY = gsap.quickTo(glowRef.current, "y", { duration: 0.6, ease: "power3.out" });
    const cursorX = gsap.quickTo(cursorGlowRef.current, "x", { duration: 0.35, ease: "power3.out" });
    const cursorY = gsap.quickTo(cursorGlowRef.current, "y", { duration: 0.35, ease: "power3.out" });

    function handleMove(e: MouseEvent) {
      const rect = section!.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;

      bgX(relX * -20);
      bgY(relY * -12);
      glowX(relX * 40);
      glowY(relY * 30);
      cursorX(e.clientX - rect.left);
      cursorY(e.clientY - rect.top);
    }

    section.addEventListener("mousemove", handleMove);
    return () => section.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate flex h-screen min-h-[640px] w-full flex-col items-center justify-center overflow-hidden px-6 pt-16 text-center"
    >
      <div data-slot="hero-visual" aria-hidden className="absolute inset-0 -z-30 overflow-hidden">
        <img
          ref={bgRef}
          src="/assets/higgsfield-generated/hero-desk-stickers.jpg"
          alt="A bird's-eye view of a luxury wood desk covered with real Prestige Prints car sticker decals, including the Supra and M3"
          className="h-full w-full scale-110 object-cover object-center"
        />
      </div>

      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_30%,rgba(216,31,38,0.25),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-ink/80 via-ink/25 to-ink"
      />

      <div
        ref={cursorGlowRef}
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-48 w-48 rounded-full bg-white/10 blur-3xl"
      />

      <FloatingVideo
        src="/assets/videos/IMG_6801.MOV"
        aspectClass="aspect-[9/16]"
        widthClass="w-24 sm:w-32 md:w-36"
        label="Corvette C8"
        floatDelay={0}
        floatDuration={4.5}
        rotate={-6}
        className="bottom-14 left-2 hidden sm:block sm:left-4 md:left-10 lg:left-20"
      />

      <FloatingVideo
        src="/assets/videos/Moment-App-20220726200053407.mov"
        aspectClass="aspect-[6/5]"
        widthClass="w-28 sm:w-36 md:w-40"
        label="BMW M5"
        floatDelay={0.8}
        floatDuration={5.2}
        rotate={5}
        className="right-2 top-20 hidden sm:block sm:right-4 md:right-10 lg:right-20"
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 flex items-center gap-3"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-prestige-red" />
        <p className="font-body text-sm font-bold uppercase tracking-[0.35em] text-prestige-red">
          Custom Print Studio
        </p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-20 mt-5 max-w-4xl font-display text-5xl uppercase leading-[0.95] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] sm:text-7xl"
      >
        Turn Your Ride Into <span className="text-prestige-red">Custom Art</span>.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-20 mt-6 max-w-xl font-body text-lg text-white/70 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
      >
        Prestige Prints transforms cars, bikes, brands, and ideas into custom
        stickers, posters, canvas prints, and collectible artwork.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-20 mt-10 flex flex-col gap-4 sm:flex-row"
      >
        <a
          href="#order"
          className="rounded-full bg-prestige-red px-8 py-4 font-body text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_30px_-8px_rgba(216,31,38,0.7)] transition hover:-translate-y-0.5 hover:bg-red-600"
        >
          Start a Custom Order
        </a>
        <a
          href="#showcase"
          className="rounded-full border border-white/30 bg-black/20 px-8 py-4 font-body text-sm font-bold uppercase tracking-wide text-white/90 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/60 hover:text-white"
        >
          View the Work
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-20 mt-8 flex gap-4 sm:hidden"
      >
        <MobileVideo src="/assets/videos/IMG_6801.MOV" label="Corvette C8" />
        <MobileVideo src="/assets/videos/Moment-App-20220726200053407.mov" label="BMW M5" />
      </motion.div>

      <motion.div
        aria-hidden
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-white/40"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
          <path d="M12 5v14M6 13l6 6 6-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
