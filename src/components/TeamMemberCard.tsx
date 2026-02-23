"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  name: string;
  role: string;
  text: string;
  image: string;
};

export function TeamMemberCard({ name, role, text, image }: Props) {
  const [imgError, setImgError] = useState(false);

  return (
    <li className="flex flex-col">
      <div className="relative min-h-[260px] w-full overflow-hidden rounded-xl bg-slate-200 sm:min-h-[320px]">
        {!imgError ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-400">
            <span className="text-4xl font-semibold">
              {name
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </span>
          </div>
        )}
      </div>
      <h3 className="mt-4 font-semibold text-slate-900">{name}</h3>
      <p className="mt-0.5 text-sm font-medium text-emerald-600">{role}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
    </li>
  );
}
