"use client";

import { useState, useEffect } from "react";

const CANAL_ETIC_VIDEOS = [
  "/images/canal-etic/etic%20video1.mp4",
  "/images/canal-etic/etic%20video2.mp4",
  "/images/canal-etic/etic%20video3.mp4",
];

const INTERVAL_MS = 6000;

export function CanalEticVideoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % CANAL_ETIC_VIDEOS.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {CANAL_ETIC_VIDEOS.map((src, i) => (
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
            className="h-full w-full object-cover object-center"
            src={src}
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2 pb-[env(safe-area-inset-bottom)]">
        {CANAL_ETIC_VIDEOS.map((_, i) => (
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
    </>
  );
}
