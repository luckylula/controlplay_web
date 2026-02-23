import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { mainNav } from "@/lib/navigation";

const extraescolarsItem = mainNav.find((n) => n.label === "Activitats Extraescolars");
const children = extraescolarsItem?.children ?? [];

const slugToItem = Object.fromEntries(
  children.map((c) => [c.href.replace("/activitats-extraescolars/", ""), c])
);

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return children.map((c) => ({
    slug: c.href.replace("/activitats-extraescolars/", ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = slugToItem[slug];
  if (!item) return { title: "Activitat" };
  return { title: item.label };
}

export default async function ActivitatPage({ params }: Props) {
  const { slug } = await params;
  const item = slugToItem[slug];
  if (!item) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/activitats-extraescolars" className="text-sm text-emerald-600 hover:underline">
        ← Activitats extraescolars
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{item.label}</h1>
      <p className="mt-6 text-slate-600">
        Pàgina de l&apos;activitat <strong>{item.label}</strong>. El contingut específic es pot afegir aquí progressivament.
      </p>
    </div>
  );
}
