import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacitat",
  description: "Política de privacitat – Control Play Sports.",
};

export default function PoliticaPrivacitatPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Política de Privacitat</h1>
      <p className="mt-4 text-slate-600">El contingut de la política de privacitat es pot afegir aquí.</p>
    </div>
  );
}
