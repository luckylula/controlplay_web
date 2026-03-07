import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fetchWpPosts } from "@/lib/fetch-wp-posts";

export const metadata: Metadata = {
  title: "Notícies",
  description: "Notícies i novetats de Control Play: activitats extraescolars, menjadors, casals i més.",
};

/** Revalidar la pàgina com a màxim cada 60 s per mostrar notícies actualitzades (mateix que l’API) */
export const revalidate = 60;

const CARD_COLORS = ["#F97316", "#EC4899", "#3B82F6", "#10B981"];

export default async function NoticiesPage() {
  const posts = await fetchWpPosts(50);

  return (
    <div className="mx-auto w-full max-w-[1920px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Notícies</h1>
        <p className="mt-3 text-lg text-slate-600">
          Novetats, activitats i informació del nostre dia a dia.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="mt-10 text-center text-slate-600">No hi ha notícies per mostrar.</p>
      ) : (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <li key={`${post.sourceId}-${post.id}`}>
              <Link
                href={`/noticies/${post.id}?source=${post.sourceId}`}
                className="group block overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <div
                  className="relative w-full overflow-hidden bg-slate-100"
                  style={{ aspectRatio: "400/240" }}
                >
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full items-center justify-center"
                      style={{ backgroundColor: CARD_COLORS[i % 4] }}
                    >
                      <span className="text-4xl font-bold text-white/90">
                        {post.title.charAt(0) || "?"}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-5">
                  <h2 className="text-base font-semibold text-slate-900 line-clamp-2 group-hover:text-blue-700 sm:text-lg">
                    {post.title}
                  </h2>
                  <span className="mt-2 inline-block text-sm font-medium text-blue-600 sm:text-base">
                    Saber més →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
