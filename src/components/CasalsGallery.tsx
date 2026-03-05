"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const CASALS_IMAGES = 11;
const VISIBLE_LG = 4;
const MAX_PAGE = Math.max(0, CASALS_IMAGES - VISIBLE_LG);

export function CasalsGallery() {
  const [page, setPage] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const goPrev = useCallback(() => setPage((p) => (p <= 0 ? MAX_PAGE : p - 1)), []);
  const goNext = useCallback(() => setPage((p) => (p >= MAX_PAGE ? 0 : p + 1)), []);
  const closeLightbox = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? null : i === 0 ? CASALS_IMAGES - 1 : i - 1));
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? null : (i + 1) % CASALS_IMAGES));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, closeLightbox]);

  const itemPercent = 100 / CASALS_IMAGES;

  return (
    <>
      <section className="mt-14 border-t border-slate-200 pt-12">
        <div className="relative mx-auto max-w-3xl">
          {/* Fletxes */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Imatges anteriors"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow-md transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 -left-2 sm:-left-3"
          >
            <svg className="h-5 w-5 text-slate-700 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Imatges següents"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow-md transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 -right-2 sm:-right-3"
          >
            <svg className="h-5 w-5 text-slate-700 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carrusel: 4 visibles, cada imatge amb el seu espai (sense solapar) */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                width: `${(CASALS_IMAGES / VISIBLE_LG) * 100}%`,
                transform: `translateX(-${page * itemPercent}%)`,
              }}
            >
              {Array.from({ length: CASALS_IMAGES }, (_, n) => n + 1).map((n) => (
                <div
                  key={n}
                  className="flex flex-shrink-0 px-1"
                  style={{ width: `${itemPercent}%` }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(n - 1)}
                    className="relative block aspect-square w-full overflow-hidden rounded-lg bg-slate-100 shadow transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    aria-label={`Obrir imatge ${n}`}
                  >
                    <Image
                      src={`/images/casals/${n}.png`}
                      alt={`Casal Estiufest – imatge ${n}`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 50vw, 200px"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Dots (una per "pàgina" del carrusel) */}
          <div className="mt-4 flex justify-center gap-1.5">
            {Array.from({ length: MAX_PAGE + 1 }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Pàgina ${i + 1}`}
                className={`h-1.5 w-1.5 rounded-full transition-colors sm:h-2 sm:w-2 ${
                  i === page ? "bg-emerald-600" : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
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
              setOpenIndex((i) => (i === 0 ? CASALS_IMAGES - 1 : (i ?? 0) - 1));
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
              setOpenIndex((i) => ((i ?? 0) + 1) % CASALS_IMAGES);
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
              src={`/images/casals/${openIndex + 1}.png`}
              alt={`Casal Estiufest – imatge ${openIndex + 1}`}
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
