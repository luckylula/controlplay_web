"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export type ActivityCard = {
  label: string;
  href: string;
  /** Optional image path (e.g. /images/activitats/robotica.jpg). If missing, a placeholder is shown. */
  image?: string;
};

type Props = {
  activities: readonly ActivityCard[];
  title?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

/** Placeholder gradient colors per card so each has a distinct look without images */
const CARD_COLORS = [
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-violet-500 to-purple-600",
  "from-rose-500 to-pink-600",
  "from-sky-500 to-blue-600",
  "from-lime-500 to-green-600",
  "from-fuchsia-500 to-pink-600",
  "from-cyan-500 to-teal-600",
  "from-indigo-500 to-blue-600",
  "from-orange-500 to-amber-600",
  "from-emerald-600 to-green-700",
  "from-violet-600 to-purple-700",
  "from-rose-600 to-red-600",
  "from-sky-600 to-indigo-600",
  "from-amber-600 to-yellow-600",
];

export function ExtraescolarsCards({
  activities,
  title = "Descobreix les nostres activitats",
  ctaHref = "/activitats-extraescolars",
  ctaLabel = "Totes les activitats",
}: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    const i = Math.max(0, Math.min(index, activities.length - 1));
    setCurrentIndex(i);
  }, [activities.length]);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < activities.length - 1;

  // Mida del pas per al desplaçament (amplada targeta + gap)
  const slideStep = 540; // 520px card + 20px gap (sm: 560+20)

  return (
    <section className="border-t border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-1 text-slate-600">
              Activitats lúdiques, esportives i formatives per a tot l&apos;any.
            </p>
          </div>
          <Link
            href={ctaHref}
            className="shrink-0 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
          >
            {ctaLabel} →
          </Link>
        </div>

        {/* Carrusel: àrea de targetes a dalt */}
        <div ref={scrollContainerRef} className="mt-8 overflow-x-hidden">
          <ul
            className="flex gap-4 sm:gap-5 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * slideStep}px)` }}
          >
            {activities.map((item, index) => (
            <li
              key={item.href}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="shrink-0 w-[520px] sm:w-[560px]"
            >
                <Link
                  href={item.href}
                  className="group block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover transition group-hover:scale-105"
                        sizes="560px"
                      />
                    ) : (
                      <div
                        className={`h-full w-full bg-gradient-to-br ${CARD_COLORS[index % CARD_COLORS.length]} flex items-center justify-center`}
                      >
                        <span className="text-6xl font-bold text-white/90">
                          {item.label.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-semibold text-slate-900 line-clamp-2 group-hover:text-emerald-700 sm:text-xl">
                      {item.label}
                    </h3>
                    <span className="mt-3 inline-block text-base font-medium text-emerald-600">
                      Saber més →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navegació: fletxa – punts – fletxa (com a l’exemple) */}
        <div className="mt-6 flex items-center justify-center gap-4" role="tablist" aria-label="Navegació per activitats">
          <button
            type="button"
            onClick={() => goTo(currentIndex - 1)}
            disabled={!canGoPrev}
            aria-label="Activitat anterior"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-400 bg-white text-slate-700 transition hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {activities.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Anar a l'activitat ${index + 1}`}
                aria-selected={index === currentIndex}
                role="tab"
                className={`h-2.5 w-2.5 shrink-0 rounded-full border-2 transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                  index === currentIndex
                    ? "border-violet-700 bg-violet-700"
                    : "border-slate-400 bg-white hover:border-slate-500"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(currentIndex + 1)}
            disabled={!canGoNext}
            aria-label="Activitat següent"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-400 bg-white text-slate-700 transition hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
