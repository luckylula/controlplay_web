import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casals",
  description: "Casals de Control Play – Dissenyats perquè els nens gaudeixin les vacances. Activitats per divertir-se, descobrir i aprendre.",
};

export default function CasalsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Casals</h1>
      <p className="mt-4 text-lg text-slate-600">
        Els nostres casals estan dissenyats perquè els nens gaudeixin intensament de les seves vacances. Activitats per divertir-se, descobrir i aprendre.
      </p>
      <p className="mt-4 text-slate-600">
        Es poden afegir aquí les fitxes dels casals (Estiu Exprés, Escola Joan Juncadella, Casal els Pins, Casal Marta Mata, etc.).
      </p>
    </div>
  );
}
