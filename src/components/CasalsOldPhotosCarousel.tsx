"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/** Imatges de la carpeta public/images/casals/old photos (ordre de llistat). */
const OLD_PHOTOS = [
  "FOTO 1.png",
  "FOTO 2.png",
  "FOTO 3.png",
  "FOTO 4.png",
  "Captura de pantalla 2026-03-05 142555.png",
  "Captura de pantalla 2026-03-05 142626.png",
  "Captura de pantalla 2026-03-05 142729.png",
  "Captura de pantalla 2026-03-05 142758.png",
  "Captura de pantalla 2026-03-05 142827.png",
  "Captura de pantalla 2026-03-05 142838.png",
  "Captura de pantalla 2026-03-05 142853.png",
  "Captura de pantalla 2026-03-05 142915.png",
  "Captura de pantalla 2026-03-05 142936.png",
  "Captura de pantalla 2026-03-05 142950.png",
  "Captura de pantalla 2026-03-05 143001.png",
  "Captura de pantalla 2026-03-05 143010.png",
  "Captura de pantalla 2026-03-05 143018.png",
  "Captura de pantalla 2026-03-05 143026.png",
  "Captura de pantalla 2026-03-05 143115.png",
  "Captura de pantalla 2026-03-05 143131.png",
  "Captura de pantalla 2026-03-05 143141.png",
  "Captura de pantalla 2026-03-05 143152.png",
  "Captura de pantalla 2026-03-05 143200.png",
  "Captura de pantalla 2026-03-05 143208.png",
  "Captura de pantalla 2026-03-05 143217.png",
];

const BASE_PATH = "/images/casals/old%20photos/";
const VISIBLE_LG = 3;
const GAP_REM = 1.5;
const MAX_PAGE = Math.max(0, OLD_PHOTOS.length - VISIBLE_LG);

function getImageSrc(filename: string): string {
  return BASE_PATH + encodeURIComponent(filename);
}

export function CasalsOldPhotosCarousel() {
  const [page, setPage] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [offsetPx, setOffsetPx] = useState(0);
  const [itemWidthPx, setItemWidthPx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goPrev = useCallback(() => setPage((p) => (p <= 0 ? MAX_PAGE : p - 1)), []);
  const goNext = useCallback(() => setPage((p) => (p >= MAX_PAGE ? 0 : p + 1)), []);
  const closeLightbox = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const update = () => {
      const width = container.offsetWidth;
      const gapPx = GAP_REM * 16;
      const item = (width - (VISIBLE_LG - 1) * gapPx) / VISIBLE_LG;
      setItemWidthPx(item);
      const step = item + gapPx;
      setOffsetPx(page * step);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(container);
    return () => ro.disconnect();
  }, [page]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? null : i === 0 ? OLD_PHOTOS.length - 1 : i - 1));
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? null : (i + 1) % OLD_PHOTOS.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, closeLightbox]);

  return (
    <>
      <section className="mt-14 border-t border-slate-200 pt-12">
        <h2 className="mb-6 text-center text-xl font-semibold text-slate-900 sm:text-2xl">
          Les nostres fotos de l&apos;any passat
        </h2>
        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Imatges anteriors"
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/95 p-2 shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 sm:left-4"
          >
            <svg className="h-5 w-5 text-slate-700 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Imatges següents"
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/95 p-2 shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 sm:right-4"
          >
            <svg className="h-5 w-5 text-slate-700 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div ref={containerRef} className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                gap: `${GAP_REM}rem`,
                width: itemWidthPx > 0 ? `${OLD_PHOTOS.length * itemWidthPx + (OLD_PHOTOS.length - 1) * GAP_REM * 16}px` : "auto",
                transform: `translateX(-${offsetPx}px)`,
              }}
            >
              {OLD_PHOTOS.map((filename, index) => (
                <div
                  key={filename}
                  className="flex flex-shrink-0"
                  style={{
                    width: itemWidthPx > 0 ? `${itemWidthPx}px` : undefined,
                    minWidth: itemWidthPx > 0 ? `${itemWidthPx}px` : undefined,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-slate-100 shadow-md transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label={`Obrir imatge ${index + 1}`}
                  >
                    <Image
                      src={getImageSrc(filename)}
                      alt={`Casal – foto ${index + 1}`}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 33vw"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-1.5">
            {Array.from({ length: MAX_PAGE + 1 }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Pàgina ${i + 1}`}
                className={`h-1.5 w-1.5 rounded-full transition-colors sm:h-2 sm:w-2 ${
                  i === page ? "bg-blue-600" : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Imatge en pantalla completa"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Tancar"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i === 0 ? OLD_PHOTOS.length - 1 : (i ?? 0) - 1));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Imatge anterior"
          >
            <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => ((i ?? 0) + 1) % OLD_PHOTOS.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Imatge següent"
          >
            <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="relative max-h-full max-w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={getImageSrc(OLD_PHOTOS[openIndex])}
              alt={`Casal – foto ${openIndex + 1}`}
              width={1200}
              height={900}
              className="max-h-[90vh] w-auto max-w-full object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
