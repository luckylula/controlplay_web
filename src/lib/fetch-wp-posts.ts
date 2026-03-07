import { WORDPRESS_SOURCES, getWpComPostsListUrl, getHostname } from "@/lib/wordpress-sources";

/** Hostnames permitits per next/image (han de coincidir amb next.config images.remotePatterns) */
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

function getAllowedImageUrl(url: string | undefined): string | undefined {
  if (!url || !url.startsWith("http")) return undefined;
  try {
    const host = new URL(url).hostname;
    return ALLOWED_IMAGE_HOSTNAMES.has(host) ? url : undefined;
  } catch {
    return undefined;
  }
}

export type WPPostItem = {
  id: number;
  slug: string;
  sourceId: string;
  sourceName: string;
  title: string;
  image?: string;
  excerpt?: string;
};

/** Processa un post de l'API WordPress i retorna WPPostItem */
function processPost(
  post: Record<string, unknown>,
  source: (typeof WORDPRESS_SOURCES)[number]
): WPPostItem | null {
  const title = typeof post.title === "string" ? post.title.trim() : "";
  const slug = typeof post.slug === "string" ? decodeURIComponent(post.slug) : String(post.ID ?? "");
  const imgMatch =
    typeof post.content === "string"
      ? post.content.replace(/\n/g, " ").match(/<img[^>]+src=["']([^"']+)["']/)
      : null;
  const attachmentImage = post.attachments
    ? Object.values(post.attachments as Record<string, { URL?: string }>)[0]?.URL
    : undefined;
  const youtubeMatch =
    typeof post.content === "string"
      ? post.content.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/)
      : null;
  const youtubeThumbnail = youtubeMatch
    ? `https://img.youtube.com/vi/${youtubeMatch[1]}/hqdefault.jpg`
    : undefined;
  const postThumbnail = post.post_thumbnail as { URL?: string } | undefined;
  const featured = typeof post.featured_image === "string" && post.featured_image !== "" ? post.featured_image : undefined;
  const rawImage: string | undefined =
    featured ??
    postThumbnail?.URL ??
    imgMatch?.[1] ??
    attachmentImage ??
    youtubeThumbnail;
  const image = getAllowedImageUrl(rawImage);
  const cleanExcerpt = ((post.excerpt as string) ?? "")
    .replace(/<[^>]+>/g, "")
    .replace(/\[&hellip;\]/g, "")
    .trim();

  const dotIndex = cleanExcerpt.indexOf(".", 40);
  const excerpt =
    dotIndex !== -1 && dotIndex < 150
      ? cleanExcerpt.slice(0, dotIndex + 1)
      : cleanExcerpt.length > 150
        ? cleanExcerpt.slice(0, 150).replace(/\s\S+$/, "").trim() + "…"
        : cleanExcerpt;
  return {
    id: post.ID as number,
    slug,
    sourceId: source.id,
    sourceName: source.name,
    title,
    image,
    excerpt: excerpt || undefined,
  };
}

/** Obté posts d'una sola font (per cridar en paral·lel) */
async function fetchPostsFromSource(
  source: (typeof WORDPRESS_SOURCES)[number],
  limit: number
): Promise<WPPostItem[]> {
  try {
    const hostname = getHostname(source.url);
    const url = getWpComPostsListUrl(hostname, limit);
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const data = await res.json();
    const posts = data?.posts ?? [];
    return posts
      .map((post: Record<string, unknown>) => processPost(post, source))
      .filter((item): item is WPPostItem => item !== null);
  } catch {
    return [];
  }
}

export async function fetchWpPosts(limit = 50): Promise<WPPostItem[]> {
  const batches = await Promise.all(
    WORDPRESS_SOURCES.map((source) => fetchPostsFromSource(source, limit))
  );
  return batches.flat();
}
