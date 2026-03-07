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
};

export async function fetchWpPosts(limit = 50): Promise<WPPostItem[]> {
  const results: WPPostItem[] = [];

  for (const source of WORDPRESS_SOURCES) {
    try {
      const hostname = getHostname(source.url);
      const url = getWpComPostsListUrl(hostname, limit);
      const res = await fetch(url, { next: { revalidate: 60 } });
      if (!res.ok) continue;
      const data = await res.json();
      const posts = data?.posts ?? [];
      for (const post of posts) {
        const title = typeof post.title === "string" ? post.title.trim() : "";
        const slug = typeof post.slug === "string" ? decodeURIComponent(post.slug) : String(post.ID ?? "");
        const imgMatch =
          typeof post.content === "string"
            ? post.content.replace(/\n/g, " ").match(/<img[^>]+src=["']([^"']+)["']/)
            : null;
        const attachmentImage = post.attachments
          ? Object.values(post.attachments as Record<string, { URL?: string }>)[0]?.URL
          : undefined;
        const youtubeMatch = post.content?.match(
          /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/
        );
        const youtubeThumbnail = youtubeMatch
          ? `https://img.youtube.com/vi/${youtubeMatch[1]}/hqdefault.jpg`
          : undefined;
        const rawImage =
          post.featured_image && post.featured_image !== ""
            ? post.featured_image
            : post.post_thumbnail?.URL ||
              imgMatch?.[1] ||
              attachmentImage ||
              youtubeThumbnail ||
              undefined;
        const image = getAllowedImageUrl(rawImage);

        // TODO: eliminar quan deixi de fer falta depurar
        console.log("[wp-posts]", {
          sourceId: source.id,
          postId: post.ID,
          featured_image: post.featured_image ?? "(empty)",
          imageInContent: !!imgMatch?.[1],
          imgSrc: imgMatch?.[1] ?? "(none)",
          attachmentImage: attachmentImage ?? "(none)",
          youtubeThumbnail: youtubeThumbnail ?? "(none)",
          finalImage: image ?? "(none)",
        });

        results.push({
          id: post.ID,
          slug,
          sourceId: source.id,
          sourceName: source.name,
          title,
          image,
        });
      }
    } catch {
      // skip failed source
    }
  }

  return results;
}
