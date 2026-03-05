"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { COVER_STRIP_HEIGHT } from "@/lib/layout";

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
  title = "Descobreix les nostres notícies",
  ctaHref = "/activitats-extraescolars",
  ctaLabel = "Totes les activitats",
}: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const restActivities = activities.length > 1 ? activities.slice(1) : [];
  const restLength = restActivities.length;
  const middleStart = restLength;
  const slideStep = 416;

  const [slideOffset, setSlideOffset] = useState(() =>
    restLength > 0 ? middleStart + 0 : 0
  );
  const [disableTransition, setDisableTransition] = useState(false);

  useEffect(() => {
    if (restLength === 0) return;
    setSlideOffset(middleStart + (currentIndex === 0 ? 0 : currentIndex - 1));
  }, [restLength, middleStart]); // only on mount / when rest changes

  const handleTransitionEnd = useCallback(() => {
    if (restLength === 0) return;
    setDisableTransition(true);
    if (slideOffset >= middleStart + restLength) {
      setCurrentIndex(0);
      setSlideOffset(middleStart);
    } else if (slideOffset === middleStart - 1) {
      setCurrentIndex(activities.length - 1);
      setSlideOffset(middleStart + restLength - 1);
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setDisableTransition(false));
    });
  }, [restLength, middleStart, slideOffset, activities.length]);

  const goTo = useCallback((index: number) => {
    if (activities.length === 0) return;
    const i = ((index % activities.length) + activities.length) % activities.length;
    if (restLength === 0) {
      setCurrentIndex(i);
      return;
    }
    if (i === 0 && currentIndex === activities.length - 1) {
      setSlideOffset(middleStart + restLength);
      return;
    }
    if (i === activities.length - 1 && currentIndex === 0) {
      setSlideOffset(middleStart - 1);
      return;
    }
    setCurrentIndex(i);
    setSlideOffset(middleStart + (i === 0 ? 0 : i - 1));
  }, [activities.length, restLength, middleStart, currentIndex]);

  const canGoPrev = activities.length > 0;
  const canGoNext = activities.length > 0;

  const restTriple = restLength > 0 ? [...restActivities, ...restActivities, ...restActivities] : [];

  return (
    <section className={`flex ${COVER_STRIP_HEIGHT} flex-col justify-center overflow-hidden border-t border-slate-200 bg-white py-4 sm:py-6`}>
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
            className="shrink-0 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            {ctaLabel} →
          </Link>
        </div>

        {/* Carrusel: primera targeta fixa (només vídeo) + la resta que es desplacen */}
        <div ref={scrollContainerRef} className="mt-4 flex gap-3 sm:gap-4 overflow-hidden">
          {/* Primera targeta fixa: només vídeo */}
          {activities.length > 0 && (
            <div className="shrink-0 w-[320px] sm:w-[400px]">
              <Link
                href={activities[0].href}
                className="group block overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {/* Vídeo ocupa tota l’alçada de la targeta (mateix total que imatge + text de la resta) */}
                <div className="relative w-full overflow-hidden bg-slate-100" style={{ aspectRatio: "400/462" }}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition group-hover:scale-105"
                    src="/images/play/play%20multideportes.mp4"
                  />
                </div>
              </Link>
            </div>
          )}

          {/* Resta d’activitats: es desplacen amb les fletxes/punts */}
          {restActivities.length > 0 && (
            <div className="min-w-0 flex-1 overflow-x-hidden">
              <ul
                className={`flex gap-3 sm:gap-4 ${disableTransition ? "" : "transition-transform duration-300 ease-out"}`}
                style={{ transform: `translateX(-${slideOffset * slideStep}px)` }}
                onTransitionEnd={handleTransitionEnd}
              >
                {restTriple.map((item, index) => {
                  const originalIndex = index % restLength;
                  return (
                    <li
                      key={`${item.href}-${index}`}
                      ref={index < restLength ? (el) => { cardRefs.current[originalIndex + 1] = el; } : undefined}
                      className="shrink-0 w-[320px] sm:w-[400px]"
                    >
                      <Link
                        href={item.href}
                        className="group block overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        <div className="relative w-full overflow-hidden bg-slate-100" style={{ aspectRatio: "400/360" }}>
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt=""
                              fill
                              className="object-cover transition group-hover:scale-105"
                              sizes="400px"
                            />
                          ) : (
                            <div
                              className={`h-full w-full bg-gradient-to-br ${CARD_COLORS[(originalIndex + 1) % CARD_COLORS.length]} flex items-center justify-center`}
                            >
                              <span className="text-5xl font-bold text-white/90">
                                {item.label.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="p-4 sm:p-5">
                          <h3 className="text-base font-semibold text-slate-900 line-clamp-2 group-hover:text-blue-700 sm:text-lg">
                            {item.label}
                          </h3>
                          <span className="mt-2 inline-block text-sm font-medium text-blue-600 sm:text-base">
                            Saber més →
                          </span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        {/* Navegació: fletxa – punts – fletxa (com a l’exemple) */}
        <div className="mt-3 flex items-center justify-center gap-3 sm:mt-4" role="tablist" aria-label="Navegació per activitats">
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
                className={`h-2.5 w-2.5 shrink-0 rounded-full border-2 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
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
