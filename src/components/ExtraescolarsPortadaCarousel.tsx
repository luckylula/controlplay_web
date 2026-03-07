"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { COVER_STRIP_HEIGHT } from "@/lib/layout";

const EXTRA_VIDEOS = [
  "/images/portada/extra1%20video.mp4",
  "/images/portada/extra2%20video.mp4",
  "/images/portada/extra3%20video.mp4",
];

const INTERVAL_MS = 6000;

export function ExtraescolarsPortadaCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % EXTRA_VIDEOS.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className={`relative ${COVER_STRIP_HEIGHT} w-full overflow-hidden border-t border-slate-200`}
    >
      {EXTRA_VIDEOS.map((src, i) => (
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
      <div className="absolute inset-0 z-10 bg-black/40" aria-hidden />
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 pt-24 pb-24 text-center sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 sm:text-base">
          Durant tot l&apos;any !
        </p>
        <h2 className="mt-1 text-2xl font-bold text-white drop-shadow-sm sm:text-3xl lg:text-4xl">
          Extraescolars
        </h2>
        <p className="mt-2 text-lg text-white/95 drop-shadow-sm">Apuntat !</p>
        <Link
          href="/activitats-extraescolars"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Descobreix les activitats
        </Link>
      </div>
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2 pb-[env(safe-area-inset-bottom)]">
        {EXTRA_VIDEOS.map((_, i) => (
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
