import { WORDPRESS_SOURCES, getWpComPostsListUrl, getHostname } from "@/lib/wordpress-sources";

/** Hostnames permitits per next/image (han de coincidir amb next.config images.remotePatterns) */
const ALLOWED_IMAGE_HOSTNAMES = new Set([
  "menjadormartamataviladecans.wordpress.com",
  "i0.wp.com",
  "i1.wp.com",
  "i2.wp.com",
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
        const rawImage =
          post.featured_image && post.featured_image !== ""
            ? post.featured_image
            : post.post_thumbnail?.URL ||
              (typeof post.content === "string" && post.content?.match(/<img[^>]+src=["']([^"']+)["']/)?.[1]) ||
              undefined;
        const image = getAllowedImageUrl(rawImage);
        results.push({
          id: post.ID,
          slug,
          sourceId: source.id,
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
