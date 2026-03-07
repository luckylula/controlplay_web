import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWordPressSourceById, getWpComPostByIdUrl, getHostname } from "@/lib/wordpress-sources";

type WPComPost = {
  ID: number;
  title: string;
  content: string;
  date: string;
  featured_image?: string;
  post_thumbnail?: { URL?: string };
};

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ source?: string }>;
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { source } = await searchParams;
  const sourceConfig = source ? getWordPressSourceById(source) : null;
  if (!sourceConfig) return { title: "Notícia" };
  const hostname = getHostname(sourceConfig.url);
  const url = getWpComPostByIdUrl(hostname, slug);
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) return { title: "Notícia" };
  const post: WPComPost = await res.json();
  const title = typeof post.title === "string" ? post.title.replace(/<[^>]*>/g, "").trim() : "";
  return { title: `${title} | Notícies` };
}

export default async function NoticiaSlugPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { source } = await searchParams;
  const sourceConfig = source ? getWordPressSourceById(source) : null;

  if (!sourceConfig) notFound();

  const hostname = getHostname(sourceConfig.url);
  const url = getWpComPostByIdUrl(hostname, slug);
  let res: Response;
  try {
    res = await fetch(url, { next: { revalidate: 60 } });
  } catch {
    notFound();
  }
  if (!res.ok) notFound();

  const post: WPComPost = await res.json();
  const title = typeof post.title === "string" ? post.title.replace(/<[^>]*>/g, "").trim() : "";
  const featuredUrl =
    (post.featured_image || post.post_thumbnail?.URL) ?? null;
  const dateStr = post.date;
  const formattedDate = dateStr
    ? new Date(dateStr).toLocaleDateString("ca-CA", { day: "numeric", month: "long", year: "numeric" })
    : null;

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <span aria-hidden>←</span> Tornar a les notícies
      </Link>

      <article className="mt-6 sm:mt-8">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
        {formattedDate && <p className="mt-2 text-sm text-slate-500">{formattedDate}</p>}

        {featuredUrl && (
          <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-lg bg-slate-100">
            <Image
              src={featuredUrl}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
              priority
              unoptimized
            />
          </div>
        )}

        <div
          className="noticia-content mt-6 text-slate-700 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:mt-3 [&_p]:leading-relaxed [&_a]:text-blue-600 [&_a]:underline [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_img]:mt-4 [&_img]:rounded-lg [&_img]:max-w-full [&_blockquote]:border-l-4 [&_blockquote]:border-slate-300 [&_blockquote]:pl-4 [&_blockquote]:italic"
          dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
        />
      </article>
    </div>
  );
}
