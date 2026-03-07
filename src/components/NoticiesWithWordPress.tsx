"use client";

import { useState, useEffect } from "react";
import { ExtraescolarsCards, type ActivityCard } from "@/components/ExtraescolarsCards";
import type { WPPostFromApi } from "@/app/api/wp-posts/route";

type Props = {
  title?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function NoticiesWithWordPress({
  title = "Descobreix les nostres notícies",
  description = "Novetats i informació del nostre dia a dia.",
  ctaHref = "/noticies",
  ctaLabel = "Totes les notícies",
}: Props) {
  const [activities, setActivities] = useState<ActivityCard[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/wp-posts")
      .then((res) => {
        if (!res.ok) {
          console.warn("API wp-posts no OK:", res.status, res.statusText);
          return null;
        }
        return res.json();
      })
      .then((data: { posts: WPPostFromApi[] } | null) => {
        console.log("Posts rebuts de WordPress:", data?.posts);
        if (cancelled || !data?.posts?.length) return;
        const wpCardColors = ["#F97316", "#EC4899", "#3B82F6", "#10B981"];
        const wpCards: ActivityCard[] = data.posts.map((p, i) => ({
          label: p.title,
          href: `/noticies/${p.id}?source=${p.sourceId}`,
          image: p.image || undefined,
          bgColor: !p.image ? wpCardColors[i % 4] : undefined,
          subtitle: p.sourceName,
        }));
        setActivities(wpCards);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  return (
    <ExtraescolarsCards
      activities={activities}
      title={title}
      description={description}
      ctaHref={ctaHref}
      ctaLabel={ctaLabel}
    />
  );
}
