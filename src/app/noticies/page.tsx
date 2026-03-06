import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NOTICIES } from "@/lib/noticies";

export const metadata: Metadata = {
  title: "Notícies",
  description: "Notícies i novetats de Control Play: activitats extraescolars, menjadors, casals i més.",
};

export default function NoticiesPage() {
  return (
    <div className="mx-auto w-full max-w-[1920px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Notícies</h1>
        <p className="mt-3 text-lg text-slate-600">
          Novetats, activitats i informació del nostre dia a dia.
        </p>
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {NOTICIES.map((item) => (
          <li key={item.href + item.label}>
            <Link
              href={item.href}
              className="group block overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div
                className="relative w-full overflow-hidden bg-slate-100"
                style={{ aspectRatio: "400/240" }}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-500 to-blue-600">
                    <span className="text-4xl font-bold text-white/90">
                      {item.label.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-5">
                <h2 className="text-base font-semibold text-slate-900 line-clamp-2 group-hover:text-blue-700 sm:text-lg">
                  {item.label}
                </h2>
                <span className="mt-2 inline-block text-sm font-medium text-blue-600 sm:text-base">
                  Saber més →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
