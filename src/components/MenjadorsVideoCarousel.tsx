"use client";

import { useState, useEffect } from "react";

const MENJADOR_VIDEOS = [
  "/images/menjadors/menjador%20video1.mp4",
  "/images/menjadors/menjador%20video2.mp4",
  "/images/menjadors/menjador%20video3.mp4",
];

const INTERVAL_MS = 6000;

export function MenjadorsVideoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MENJADOR_VIDEOS.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black aspect-[21/9] min-h-[260px] max-h-[420px] sm:min-h-[300px] lg:max-h-[520px]">
      {MENJADOR_VIDEOS.map((src, i) => (
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
            className="h-full w-full object-cover object-bottom"
            src={src}
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {MENJADOR_VIDEOS.map((_, i) => (
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
