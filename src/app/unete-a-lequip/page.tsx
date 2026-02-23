import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unete a l'Equip",
  description: "Control Play – Uneix-te a l'equip. Oportunitats laborals i col·laboració.",
};

export default function UneteALEquipPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Unete a l&apos;Equip</h1>
      <p className="mt-4 text-lg text-slate-600">
        Vols formar part de Control Play? Busquem persones amb passió per l&apos;educació, l&apos;esport i el temps lliure.
      </p>
      <p className="mt-4 text-slate-600">
        Contacta&apos;ns per conèixer les oportunitats actuals o per enviar-nos el teu CV.
      </p>
      <Link
        href="/contacte"
        className="mt-8 inline-block rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700"
      >
        Contacta&apos;ns
      </Link>
    </div>
  );
}
