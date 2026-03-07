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
  readonly logoBelowVideo?: boolean;
  readonly logoAlsoAtBottom?: boolean;
  readonly external?: boolean;
  readonly videoScale?: number;
  /** Vídeo de la mascota Play per a aquesta categoria (carpeta /images/play/) */
  readonly playVideo?: string;
};

type Props = {
  categories: readonly CategoryItem[];
};

export function CategoriesWithMascot({ categories }: Props) {
  return (
    <div className="grid gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
      {categories.map((item) => {
        const logoOnVideo = "logoOnVideo" in item && item.logoOnVideo;
        const logoBelowVideo = "logoBelowVideo" in item && item.logoBelowVideo;
        const logoAlsoAtBottom = "logoAlsoAtBottom" in item && item.logoAlsoAtBottom;
        const showLogoOnTop = !logoOnVideo && !logoBelowVideo && !logoAlsoAtBottom;
        const content = (
          <>
            {showLogoOnTop && (
              <div className="flex h-16 shrink-0 items-center justify-center overflow-hidden rounded-t-xl border border-b-0 border-slate-200 bg-white px-2 py-2 sm:h-16 sm:py-3 lg:h-20 lg:py-4">
                <Image
                  src={item.logo}
                  alt=""
                  width={240}
                  height={80}
                  className="h-12 w-full max-w-full object-contain sm:h-12 lg:h-14"
                />
              </div>
            )}
            <div
              className={`relative min-h-[200px] w-full flex-1 overflow-hidden bg-slate-100 sm:min-h-0 lg:min-h-[220px] lg:flex-none lg:shrink-0 ${logoOnVideo || logoBelowVideo || logoAlsoAtBottom ? "rounded-t-xl" : ""}`}
            >
              <CoverVideo
                src={item.video}
                fallbackSrc={item.fallback}
                className="object-cover object-center transition group-hover:scale-105"
                scale={"videoScale" in item ? item.videoScale : undefined}
              />
              {logoOnVideo && (
                <div className="absolute right-3 top-3 z-10 h-16 w-16 overflow-hidden rounded-full shadow-md sm:h-16 lg:h-16">
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
            {logoBelowVideo && (
              <div className="flex min-h-[80px] items-center justify-center overflow-hidden border border-t-0 border-slate-200 bg-white py-6 sm:py-8">
                <Image
                  src={item.logo}
                  alt=""
                  width={200}
                  height={64}
                  className="h-14 w-auto max-w-full object-contain sm:h-16"
                  style={{ transform: "scale(1.35)" }}
                />
              </div>
            )}
            <div
              className={`flex min-h-0 flex-1 flex-col border border-t-0 border-slate-200 bg-white shadow-sm pt-3 pr-3 pb-4 pl-3 sm:pt-4 sm:pr-4 sm:pb-5 sm:pl-4 lg:pt-5 lg:pr-5 lg:pb-6 lg:pl-5 ${logoAlsoAtBottom ? "" : "rounded-b-xl"}`}
            >
              <h3 className="shrink-0 font-semibold text-slate-900 sm:text-base lg:text-lg">{item.title}</h3>
              <p className="mt-1 shrink-0 overflow-hidden text-xs leading-relaxed text-slate-600 line-clamp-3 sm:line-clamp-4 lg:line-clamp-5 lg:text-sm">{item.description}</p>
              <div className="min-h-0 flex-1" aria-hidden />
            </div>
            {logoAlsoAtBottom && (
              <div className="flex min-h-[60px] items-center justify-center overflow-hidden rounded-b-xl border border-t-0 border-slate-200 bg-white py-4">
                <div style={{ transform: "scale(2)" }} className="flex shrink-0 items-center justify-center">
                  <Image
                    src={item.logo}
                    alt=""
                    width={140}
                    height={50}
                    className="h-10 w-auto object-contain sm:h-12"
                  />
                </div>
              </div>
            )}
          </>
        );
        const className =
          "group flex h-full min-h-0 flex-col overflow-hidden rounded-xl transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2";
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
