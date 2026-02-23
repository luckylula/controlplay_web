import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Futsal Camps",
  description: "Futsal Camps – Campaments i activitats de futbol sala.",
};

export default function FutsalCampsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Futsal Camps</h1>
      <p className="mt-4 text-lg text-slate-600">
        Informació sobre els Futsal Camps. El contingut es pot completar aquí progressivament.
      </p>
    </div>
  );
}
