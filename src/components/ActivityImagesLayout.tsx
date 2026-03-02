"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  imageLeft: string;
  imageRight: string;
  description: ReactNode;
  objectives: ReactNode;
};

/** Layout com a Menjadors: primera franja imatge esquerra + text dreta, segona franja objectius + imatge dreta. */
export function ActivityImagesLayout({ imageLeft, imageRight, description, objectives }: Props) {
  return (
    <>
      {/* Bloc 1: Foto esquerra (lleu rotació) | Text dreta */}
      <section className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-emerald-50/70 lg:-rotate-2">
          <Image
            src={imageLeft}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="lg:pl-6">
          {description}
        </div>
      </section>

      {/* Bloc 2: Objectius esquerra | Foto dreta (rotació oposada) */}
      <section className="mt-16 grid grid-cols-1 items-center gap-8 border-t border-slate-200 pt-10 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 lg:order-1 lg:pr-6">
          {objectives}
        </div>
        <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl bg-emerald-50/70 lg:order-2 lg:rotate-2 lg:mt-6">
          <Image
            src={imageRight}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>
    </>
  );
}

