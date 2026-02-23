"use client";

import { useEffect, useState } from "react";

const AUTO_ADVANCE_MS = 6000;

type Props = {
  /** Rutes dels vídeos (ex: videoportada1.mp4, videoportada2.mp4, ...) */
  videos: string[];
};

export function HeroVideoCarousel({ videos }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (videos.length <= 1) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % videos.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [videos.length]);

  if (videos.length === 0) return null;

  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-slate-900">
      <video
        key={currentIndex}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
        src={videos[currentIndex]}
      >
        <source src={videos[currentIndex]} type="video/mp4" />
      </video>
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
        {videos.length > 1 && (
          <div className="mt-8 flex gap-2" aria-label="Vídeos del carrusel">
            {videos.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
                }`}
                aria-current={i === currentIndex ? "true" : undefined}
                aria-label={`Vídeo ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
