"use client";

import { useState, useEffect } from "react";

const HERO_VIDEOS = [
  "/images/portada/videoportada1.mp4",
  "/images/portada/videoportada2.mp4",
  "/images/portada/videoportada3.mp4",
];

const MASCOT_VIDEO = "/images/categories/play%20corriendo%20transp.mp4";

const INTERVAL_MS = 6000;

export function HeroVideoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_VIDEOS.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 aspect-[21/9] min-h-[260px] max-h-[420px] sm:min-h-[300px] lg:max-h-[520px]">
      {HERO_VIDEOS.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            src={src}
          />
        </div>
      ))}
      {/* Overlay oscuro (sin recorte: sin marco visible alrededor de la mascota) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/30">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight drop-shadow-lg sm:text-5xl lg:text-6xl">
            Control Play
          </h1>
          <p className="mt-4 text-xl text-white/95 drop-shadow-md sm:text-2xl">
            Al servei del món educatiu i esportiu!
          </p>
        </div>
      </div>
      {/* Mascota encima del overlay, con multiply y filtro para que se vea sin marco feo */}
      <div
        className="pointer-events-none absolute bottom-4 left-4 z-30 w-24 bg-transparent sm:left-6 sm:w-28 md:w-32 lg:left-8 lg:w-36"
        style={{
          mixBlendMode: "multiply",
          background: "transparent",
          backgroundColor: "transparent",
          opacity: 1,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-contain object-bottom bg-transparent"
          style={{
            mixBlendMode: "multiply",
            background: "transparent",
            backgroundColor: "transparent",
            opacity: 1,
            filter: "contrast(2) brightness(1.35)",
          }}
          src={MASCOT_VIDEO}
        />
      </div>
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {HERO_VIDEOS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Vídeo ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-colors sm:h-2.5 sm:w-2.5 ${
              i === index ? "bg-white" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
