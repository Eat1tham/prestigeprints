import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CAPTIONS = ["Real Rides.", "Become Custom Artwork.", "Ready To Print."];

const CARDS = [
  { src: "/assets/higgsfield-generated/fan-supra-portrait.jpg", alt: "Framed portrait poster print of the Supra" },
  { src: "/assets/higgsfield-generated/fan-supra-sticker.jpg", alt: "Glossy die-cut sticker of the Supra" },
  { src: "/assets/higgsfield-generated/fan-canvas-both.jpg", alt: "Canvas print featuring the Supra, the M3, and the e-bike" },
  { src: "/assets/higgsfield-generated/fan-m3-sticker.jpg", alt: "Glossy die-cut sticker of the M3" },
  { src: "/assets/higgsfield-generated/fan-m3-portrait.jpg", alt: "Framed portrait poster print of the M3" },
];

const CENTER_INDEX = 2;

export default function VehicleTransform() {
  const containerRef = useRef<HTMLDivElement>(null);
  const baseImgRef = useRef<HTMLImageElement>(null);
  const outlineLeftRef = useRef<SVGPathElement>(null);
  const outlineRightRef = useRef<SVGPathElement>(null);
  const fanGroupRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const captionRefs = useRef<Array<HTMLParagraphElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 640px)").matches;

      const fanSpacing = isMobile ? 95 : 230;
      const fanDepth = isMobile ? 55 : 130;
      const dispersedSpacing = isMobile ? 76 : 190;
      const dispersedScale = isMobile ? 0.24 : 0.52;
      const idleAmplitude = isMobile ? 8 : 16;

      const outlineLength = 900;

      gsap.set([outlineLeftRef.current, outlineRightRef.current], {
        strokeDasharray: outlineLength,
        strokeDashoffset: outlineLength,
      });
      gsap.set(cardRefs.current, {
        opacity: 0,
        scale: 0.55,
        rotationY: 130,
        z: -700,
        x: 0,
        transformPerspective: 1400,
      });
      gsap.set(captionRefs.current, { opacity: 0 });
      if (captionRefs.current[0]) gsap.set(captionRefs.current[0], { opacity: 1 });

      // Continuous idle drift, independent of scroll, so the cards always feel alive.
      const idleTweens = cardRefs.current.map((el, i) => {
        if (!el) return null;
        return gsap.to(el, {
          y: i % 2 === 0 ? idleAmplitude : -idleAmplitude,
          duration: 2.6 + i * 0.35,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.to(outlineLeftRef.current, { strokeDashoffset: 0, duration: 1 }, 0.05)
        .to(outlineRightRef.current, { strokeDashoffset: 0, duration: 1 }, 0.1)
        .to(captionRefs.current[0], { opacity: 0, duration: 0.3 }, 0.16)
        .to(captionRefs.current[1], { opacity: 1, duration: 0.3 }, 0.2)
        .to(baseImgRef.current, { opacity: 0.28, scale: 1.08, duration: 1.4 }, 0.25);

      CARDS.forEach((_, i) => {
        const offset = i - CENTER_INDEX;
        tl.to(
          cardRefs.current[i],
          {
            opacity: 1,
            scale: 1 - Math.abs(offset) * 0.14,
            rotationY: offset * -24,
            z: -Math.abs(offset) * fanDepth,
            x: offset * fanSpacing,
            duration: 1.1,
          },
          0.32 + Math.abs(offset) * 0.1
        );
      });

      tl.to(fanGroupRef.current, { rotationY: -10, duration: 0.6 }, 0.55)
        .to(fanGroupRef.current, { rotationY: 6, duration: 0.6 }, 0.72)
        .to(fanGroupRef.current, { rotationY: 0, duration: 0.5 }, 0.88)
        .to(captionRefs.current[1], { opacity: 0, duration: 0.3 }, 0.6)
        .to(captionRefs.current[2], { opacity: 1, duration: 0.3 }, 0.66);

      // Once fully scrolled through, disperse the fan into a flat, non-overlapping row.
      CARDS.forEach((_, i) => {
        const offset = i - CENTER_INDEX;
        tl.to(
          cardRefs.current[i],
          {
            x: offset * dispersedSpacing,
            z: 0,
            rotationY: 0,
            scale: dispersedScale,
            duration: 1,
          },
          1.8 + Math.abs(offset) * 0.1
        );
      });
      tl.to(fanGroupRef.current, { rotationY: 0, duration: 0.6 }, 1.8);

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        animation: tl,
      });

      return () => {
        idleTweens.forEach((t) => t?.kill());
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative isolate h-[300vh]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <img
          ref={baseImgRef}
          src="/assets/higgsfield-generated/hero-cinematic-cars-ebike.jpg"
          alt="The white Supra and BMW M3 with a Surron-style e-bike, the starting point of the transformation into printed products"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink"
        />

        <svg
          aria-hidden
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <path
            ref={outlineLeftRef}
            d="M120,380 q0,-140 220,-150 h180 q160,10 170,150 v140 q-10,120 -170,130 h-180 q-210,-10 -220,-130 z"
            fill="none"
            stroke="#d81f26"
            strokeWidth="4"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 6px rgba(216,31,38,0.7))" }}
          />
          <path
            ref={outlineRightRef}
            d="M1000,380 q0,-140 220,-150 h180 q160,10 170,150 v140 q-10,120 -170,130 h-180 q-210,-10 -220,-130 z"
            fill="none"
            stroke="#d81f26"
            strokeWidth="4"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 6px rgba(216,31,38,0.7))" }}
          />
        </svg>

        <div
          className="relative flex h-full w-full items-center justify-center"
          style={{ perspective: "1400px" }}
        >
          <div
            ref={fanGroupRef}
            className="relative h-[60%] w-[92%] max-w-[1200px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {CARDS.map((card, i) => (
              <div
                key={card.src}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="absolute left-1/2 top-1/2 w-[46%] max-w-[320px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.8)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img src={card.src} alt={card.alt} className="aspect-square w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {CAPTIONS.map((text, i) => (
          <p
            key={text}
            ref={(el) => {
              captionRefs.current[i] = el;
            }}
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6 text-center font-display text-4xl uppercase text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] sm:text-6xl"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
