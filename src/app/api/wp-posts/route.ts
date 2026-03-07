import { NextResponse } from "next/server";
import { fetchWpPosts } from "@/lib/fetch-wp-posts";

export type WPPostFromApi = Awaited<ReturnType<typeof fetchWpPosts>>[number];

export async function GET() {
  const posts = await fetchWpPosts(1);
  return NextResponse.json({ posts });
}
