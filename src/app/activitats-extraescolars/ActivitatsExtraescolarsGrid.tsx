"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type CategoryKey = "Infantil" | "Primària" | "I5";

type NavChild = { label: string; href: string };

function getCategoryLabel(cat: CategoryKey): string {
  return cat === "I5" ? "A partir de I5" : `Educació ${cat}`;
}

function getSlug(href: string): string {
  return href.replace("/activitats-extraescolars/", "") || "";
}

const FILTER_OPTIONS: { value: "all" | CategoryKey; label: string }[] = [
  { value: "all", label: "Totes" },
  { value: "Primària", label: "Educació Primària" },
  { value: "Infantil", label: "Educació Infantil" },
  { value: "I5", label: "A partir de I5" },
];

type Props = {
  items: NavChild[];
  categories: Record<string, CategoryKey[]>;
  introTexts: Record<string, string>;
  cardColors: string[];
  cardImages: Record<string, string>;
};

export function ActivitatsExtraescolarsGrid({
  items,
  categories,
  introTexts,
  cardColors,
  cardImages,
}: Props) {
  const [filter, setFilter] = useState<"all" | CategoryKey>("all");

  const filteredItems = filter === "all"
    ? items
    : items.filter((item) => {
        const slug = getSlug(item.href);
        const cats = categories[slug];
        return cats && cats.includes(filter);
      });

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        {FILTER_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => setFilter(opt.value)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
              filter === opt.value
                ? "border-emerald-600 bg-emerald-600 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredItems.map((item, index) => {
          const slug = getSlug(item.href);
          const introText = introTexts[slug];
          const itemCategories = categories[slug];
          const imageSrc = cardImages[slug];
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <div
                className={`relative aspect-[4/3] w-full min-h-[180px] overflow-hidden sm:min-h-[200px] xl:min-h-[220px] ${
                  !imageSrc ? `bg-gradient-to-br ${cardColors[index % cardColors.length]} flex items-center justify-center` : ""
                }`}
              >
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    unoptimized
                  />
                ) : (
                  <span className="text-5xl font-bold text-white/90 sm:text-6xl" aria-hidden>
                    {item.label.charAt(0)}
                  </span>
                )}
                {itemCategories && itemCategories.length > 0 ? (
                  <div className="absolute bottom-2 right-2 flex flex-wrap justify-end gap-1">
                    {itemCategories.map((cat) => (
                      <span
                        key={cat}
                        className="rounded border border-slate-800/80 bg-white px-2 py-0.5 text-xs font-medium text-slate-900"
                      >
                        {getCategoryLabel(cat)}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="border-t border-slate-200 p-5 sm:p-6 xl:p-6">
                <h2 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 sm:text-xl">
                  {item.label}
                </h2>
                {introText ? (
                  <p className="mt-2 line-clamp-4 text-slate-600 xl:line-clamp-5">{introText}</p>
                ) : null}
                <span className="mt-3 inline-block text-base font-medium text-emerald-600 group-hover:underline">
                  Saber més →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
