"use client";

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

        {/* Horizontal scroll container – drag/scroll like Campos Estela */}
        <div className="mt-8 overflow-x-auto overscroll-x-contain pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 scroll-smooth">
          <ul className="flex gap-4 sm:gap-5" style={{ scrollSnapType: "x mandatory" }}>
            {activities.map((item, index) => (
              <li
                key={item.href}
                className="shrink-0 w-[520px] sm:w-[560px]"
                style={{ scrollSnapAlign: "start" }}
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
      </div>
    </section>
  );
}
