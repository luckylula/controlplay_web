"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const VISIBLE_LG = 3;
const GAP_REM = 1.5;

type Props = {
  images: string[];
};

export function NoticiaImageCarousel({ images }: Props) {
  const len = images.length;
  const maxPage = Math.max(0, len - VISIBLE_LG);
  const [page, setPage] = useState(0);
  const [offsetPx, setOffsetPx] = useState(0);
  const [itemWidthPx, setItemWidthPx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goPrev = useCallback(() => setPage((p) => (p <= 0 ? maxPage : p - 1)), [maxPage]);
  const goNext = useCallback(() => setPage((p) => (p >= maxPage ? 0 : p + 1)), [maxPage]);

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
  }, [page, len]);

  if (len === 0) return null;

  return (
    <section className="relative mt-6 w-full">
      <button
        type="button"
        onClick={goPrev}
        aria-label="Imatges anteriors"
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/95 p-2 shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:left-4"
      >
        <svg className="h-5 w-5 text-slate-700 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Imatges següents"
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/95 p-2 shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:right-4"
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
            width:
              itemWidthPx > 0
                ? `${len * itemWidthPx + (len - 1) * GAP_REM * 16}px`
                : "auto",
            transform: `translateX(-${offsetPx}px)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={src + index}
              className="flex flex-shrink-0"
              style={{
                width: itemWidthPx > 0 ? `${itemWidthPx}px` : undefined,
                minWidth: itemWidthPx > 0 ? `${itemWidthPx}px` : undefined,
              }}
            >
              <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-slate-100 shadow-md">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 33vw"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {len > VISIBLE_LG && (
        <div className="mt-4 flex justify-center gap-1.5">
          {Array.from({ length: maxPage + 1 }, (_, i) => (
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
      )}
    </section>
  );
}
