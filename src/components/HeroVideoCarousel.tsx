"use client";

import { useEffect, useState } from "react";

const HERO_VIDEOS = [
  "/images/portada/videoportada1.mp4",
  "/images/portada/videoportada2.mp4",
  "/images/portada/videoportada3.mp4",
];

const AUTOPLAY_INTERVAL_MS = 6000;

export function HeroVideoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_VIDEOS.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const currentSrc = HERO_VIDEOS[index];

  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <video
          key={currentSrc}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          aria-hidden
        >
          <source src={currentSrc} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative flex min-h-[50vh] flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight drop-shadow-lg sm:text-5xl lg:text-6xl">
            Control Play
          </h1>
          <p className="mt-4 text-xl text-white/95 drop-shadow-md sm:text-2xl">
            Al servei del món educatiu i esportiu!
          </p>
        </div>
        <div className="mt-8 flex gap-2">
          {HERO_VIDEOS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all sm:h-2.5 sm:w-2.5 ${
                i === index ? "scale-125 bg-white" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Vídeo ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
