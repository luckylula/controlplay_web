import type { Metadata } from "next";
import Link from "next/link";
import { mainNav } from "@/lib/navigation";

const extraescolarsItem = mainNav.find((n) => n.label === "Activitats Extraescolars");
const children = extraescolarsItem?.children ?? [];

export const metadata: Metadata = {
  title: "Activitats Extraescolars",
  description: "Activitats extraescolars esportives, formatives i lúdiques. English Time, Robòtica, Futbol Sala, Circ i Malabars i més.",
};

export default function ActivitatsExtraescolarsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Activitats Extraescolars</h1>
      <p className="mt-4 text-lg text-slate-600">
        Dissenyem i portem a terme un gran ventall d&apos;activitats extraescolars. Tant esportives com formatives i lúdiques.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {children.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
          >
            <span className="font-medium text-slate-900">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
