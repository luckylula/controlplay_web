import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avís Legal",
  description: "Avís legal – Control Play Sports.",
};

export default function AvisLegalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Avís Legal</h1>
      <p className="mt-4 text-slate-600">El contingut legal es pot afegir aquí.</p>
    </div>
  );
}
