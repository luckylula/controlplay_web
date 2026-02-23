"use client";

import Link from "next/link";
import Image from "next/image";
import { CoverVideo } from "@/components/CoverVideo";

type CategoryItem = {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly video: string;
  readonly fallback: string;
  readonly logo: string;
  readonly logoOnVideo?: boolean;
  readonly external?: boolean;
  readonly videoScale?: number;
};

type Props = {
  categories: readonly CategoryItem[];
};

export function CategoriesWithMascot({ categories }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((item) => {
        const logoOnVideo = "logoOnVideo" in item && item.logoOnVideo;
        const content = (
          <>
            {!logoOnVideo && (
              <div className="flex justify-center rounded-t-xl border border-b-0 border-slate-200 bg-white py-4">
                <Image
                  src={item.logo}
                  alt=""
                  width={140}
                  height={44}
                  className="h-10 w-auto object-contain"
                />
              </div>
            )}
            <div
              className={`relative aspect-[4/3] w-full overflow-hidden bg-slate-100 ${logoOnVideo ? "rounded-t-xl" : ""}`}
            >
              <CoverVideo
                src={item.video}
                fallbackSrc={item.fallback}
                className="object-cover object-center transition group-hover:scale-105"
                scale={"videoScale" in item ? item.videoScale : undefined}
              />
              {logoOnVideo && (
                <div className="absolute right-3 top-3 z-10 h-14 w-14 overflow-hidden rounded-full shadow-md sm:h-16 sm:w-16">
                  <Image
                    src={item.logo}
                    alt=""
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </div>
            <div className="rounded-b-xl border border-t-0 border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          </>
        );
        const className =
          "group block rounded-xl overflow-hidden transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2";
        if ("external" in item && item.external) {
          return (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {content}
            </a>
          );
        }
        return (
          <Link key={item.title} href={item.href} className={className}>
            {content}
          </Link>
        );
      })}
    </div>
  );
}
