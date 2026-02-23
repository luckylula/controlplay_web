import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui Som?",
  description: "Control Play Sports – Presentació i història. Serveis per al món educatiu, esportiu i lúdic.",
};

export default function QuiSomPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Qui Som?</h1>
      <div className="mt-8 prose prose-slate max-w-none">
        <p className="text-lg text-slate-600">
          Tenim el plaer de presentar Control Play Sports. Som una empresa de serveis amb l&apos;objectiu de cobrir les necessitats del món educatiu, esportiu i lúdic.
        </p>
        <p className="text-slate-600">
          Oferim el nostre servei amb les màximes garanties de legalitat i formalitat.
        </p>
        <p className="text-slate-600">
          Més contingut es pot afegir aquí progressivament (textos, imatges, equips, etc.).
        </p>
      </div>
    </div>
  );
}
