import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menjadors Escolars",
  description: "Menjadors escolars – Continuïtat del Plà Educatiu del Centre. Menú de qualitat per als alumnes.",
};

export default function MenjadorsEscolarsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Menjadors escolars</h1>
      <p className="mt-4 text-lg text-slate-600">
        Partim del Plà Educatiu del Centre per donar continuïtat durant l&apos;espai del menjador. Menú de qualitat per a clients exigents: els alumnes!
      </p>
      <p className="mt-4 text-slate-600">
        El contingut específic (menús, normativa, etc.) es pot incorporar aquí més endavant.
      </p>
    </div>
  );
}
