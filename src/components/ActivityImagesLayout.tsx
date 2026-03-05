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
      {/* Bloc 1: Text esquerra | Foto dreta – sense espai respecte al títol de la pàgina, franja més compacta */}
      <section className="mt-4 grid grid-cols-1 items-start gap-4 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
        <div className="lg:pr-4">
          {description}
        </div>
        <div className="relative aspect-[4/3] max-h-[280px] w-full overflow-hidden rounded-xl bg-emerald-50/70 sm:max-h-[320px] lg:max-h-[360px] lg:rotate-2">
          <Image
            src={imageRight}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 46vw"
          />
        </div>
      </section>

      {/* Bloc 2: Foto esquerra | Objectius dreta – franja compacta */}
      <section className="mt-8 grid grid-cols-1 items-start gap-4 border-t border-slate-200 pt-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
        <div className="relative aspect-[4/3] max-h-[280px] w-full overflow-hidden rounded-xl bg-emerald-50/70 sm:max-h-[320px] lg:max-h-[360px] lg:-rotate-2">
          <Image
            src={imageLeft}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 46vw"
          />
        </div>
        <div className="lg:pl-4">
          {objectives}
        </div>
      </section>
    </>
  );
}

