import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canal Etic",
  description: "Canal Etic – Control Play Sports.",
};

export default function CanalEticPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Canal Etic</h1>
      <p className="mt-4 text-lg text-slate-600">
        Contingut del Canal Etic. Es pot afegir la informació específica aquí.
      </p>
    </div>
  );
}
