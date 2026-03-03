"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  imageLeft: string;
  imageRight: string;
  description: ReactNode;
  objectives: ReactNode;
};

/** Layout com a Menjadors: primera franja text esquerra + foto dreta, segona franja foto esquerra + text dreta. */
export function ActivityImagesLayout({ imageLeft, imageRight, description, objectives }: Props) {
  return (
    <>
      {/* Bloc 1: Text esquerra | Foto dreta (lleu rotació) – mateixa mida que Menjadors */}
      <section className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <div className="lg:pr-6">
          {description}
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-emerald-50/70 lg:rotate-2">
          <Image
            src={imageRight}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 46vw"
          />
        </div>
      </section>

      {/* Bloc 2: Foto esquerra (lleu rotació oposada) | Objectius dreta – mateixa mida que Menjadors */}
      <section className="mt-16 grid grid-cols-1 items-center gap-8 border-t border-slate-200 pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-emerald-50/70 lg:-rotate-2 lg:mt-6">
          <Image
            src={imageLeft}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 46vw"
          />
        </div>
        <div className="lg:pl-6">
          {objectives}
        </div>
      </section>
    </>
  );
}

