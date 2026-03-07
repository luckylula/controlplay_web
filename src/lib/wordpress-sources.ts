/**
 * Fonts WordPress per a notícies.
 * WordPress.com (*.wordpress.com) usa l’API pública; la URL és la del blog.
 */
export const WORDPRESS_SOURCES = [
  { id: "espai3", url: "https://menjadorespai3.wordpress.com", name: "Escola Espai 3" },
] as const;

export function getWordPressSourceById(id: string) {
  return WORDPRESS_SOURCES.find((s) => s.id === id) ?? null;
}

/** URL per llistar posts (WordPress.com public API). Inclou fields per obtenir attachments (imatges). */
export function getWpComPostsListUrl(hostname: string, number = 6): string {
  const fields = "ID,title,slug,date,excerpt,content,featured_image,post_thumbnail,attachments";
  return `https://public-api.wordpress.com/rest/v1.1/sites/${hostname}/posts?number=${number}&fields=${fields}`;
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
