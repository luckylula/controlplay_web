/**
 * Fonts WordPress per a notícies.
 * WordPress.com (*.wordpress.com) usa l’API pública; la URL és la del blog.
 */
export const WORDPRESS_SOURCES = [
  { id: "menjador", url: "https://menjadormartamataviladecans.wordpress.com" },
] as const;

export function getWordPressSourceById(id: string) {
  return WORDPRESS_SOURCES.find((s) => s.id === id) ?? null;
}

/** URL per llistar posts (WordPress.com public API) */
export function getWpComPostsListUrl(hostname: string, number = 6): string {
  return `https://public-api.wordpress.com/rest/v1.1/sites/${hostname}/posts?number=${number}`;
}

/** URL per un sol post per ID (WordPress.com public API) */
export function getWpComPostByIdUrl(hostname: string, postId: string | number): string {
  return `https://public-api.wordpress.com/rest/v1.1/sites/${hostname}/posts/${postId}`;
}

export function getHostname(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/\/.*/, "");
  }
}
