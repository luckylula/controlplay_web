import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWordPressSourceById, getWpComPostByIdUrl, getHostname } from "@/lib/wordpress-sources";
import { NoticiaImageCarousel } from "@/components/NoticiaImageCarousel";

type WPComPost = {
  ID: number;
  title: string;
  content: string;
  date: string;
  featured_image?: string;
  post_thumbnail?: { URL?: string };
};

/** Hostnames permitits per next/image (ha de coincidir amb next.config) */
const ALLOWED_IMAGE_HOSTNAMES = new Set([
  "menjadorespai3.wordpress.com",
  "menjadormartamataviladecans.wordpress.com",
  "menjadorvicenteferrer.wordpress.com",
  "menjadormarianaosantboi.wordpress.com",
  "menjadorabreraernestlluch.wordpress.com",
  "menjadorelspins.wordpress.com",
  "menjadordolorsalmeda.wordpress.com",
  "menjadorsantantoni.wordpress.com",
  "menjadorietorrelles.wordpress.com",
  "menjadorfredericmistral.wordpress.com",
  "i0.wp.com",
  "i1.wp.com",
  "i2.wp.com",
  "s0.wp.com",
  "s1.wp.com",
  "s2.wp.com",
  "wp.com",
  "img.youtube.com",
]);

function isAllowedImageUrl(url: string): boolean {
  try {
    return ALLOWED_IMAGE_HOSTNAMES.has(new URL(url).hostname);
  } catch {
    return false;
  }
}

function extractImageUrlsFromHtml(html: string): string[] {
  const urls: string[] = [];
  const regex = /<img[^>]+src=["']([^"']+)["']/gi;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(html)) !== null) {
    const src = m[1].trim();
    if (src.startsWith("http") && isAllowedImageUrl(src)) urls.push(src);
  }
  return urls;
}

function stripImagesFromHtml(html: string): string {
  return html.replace(/<img[^>]*>/gi, "");
}

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

  const contentImages = extractImageUrlsFromHtml(post.content ?? "");
  const allImages: string[] = [];
  if (featuredUrl && isAllowedImageUrl(featuredUrl)) allImages.push(featuredUrl);
  for (const src of contentImages) {
    if (!allImages.includes(src)) allImages.push(src);
  }
  const contentWithoutImages = stripImagesFromHtml(post.content ?? "");

  return (
    <div className="w-full">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/noticies"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <span aria-hidden>←</span> Tornar a les notícies
        </Link>

        <article className="mt-6 sm:mt-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
          {formattedDate && <p className="mt-2 text-sm text-slate-500">{formattedDate}</p>}

          <div
            className="noticia-content mt-6 text-slate-700 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:mt-3 [&_p]:leading-relaxed [&_a]:text-blue-600 [&_a]:underline [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_blockquote]:border-l-4 [&_blockquote]:border-slate-300 [&_blockquote]:pl-4 [&_blockquote]:italic"
            dangerouslySetInnerHTML={{ __html: contentWithoutImages }}
          />
        </article>
      </div>

      {allImages.length > 0 && (
        <section className="mt-8 w-full px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <NoticiaImageCarousel images={allImages} />
        </section>
      )}
    </div>
  );
}
