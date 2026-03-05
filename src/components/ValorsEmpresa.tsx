"use client";

import Link from "next/link";

export type ValorCard = {
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
};

const VALORS: ValorCard[] = [
  {
    title: "Per què treballar amb nosaltres?",
    description:
      "A Control Play fomentem un entorn de treball dinàmic, humà i orientat a l'excel·lència, on cada professional aporta el seu talent i construeix el seu creixement professional. Aquí podràs:\n\n✔ Participar en projectes formatius, esportius i recreatius que impacten positivament en la comunitat.\n✔ Col·laborar amb un equip divers i motivat.\n✔ Desenvolupar la teva carrera amb oportunitats d'aprenentatge continu.\n✔ Formar part d'una empresa amb visió educativa, social i professional.",
  },
  {
    title: "Qui busquem?",
    description:
      "Busquem persones:\n\n✔ Amb passió per l'educació, l'esport i l'entreteniment.\n✔ Professionals responsables, proactius i amb capacitat per treballar en equip.\n✔ Amb empatia, creativitat i ganes d'aportar solucions.\n✔ Amb disponibilitat per adaptar-se a projectes diversos i desafiadors.\n\nSi t'agrada fer que cada dia compti, aquest és el teu lloc.",
  },
  {
    title: "Vols formar part del nostre equip?",
    description:
      "Si t'entusiasma treballar en un entorn on el teu esforç es tradueix en experiències memorables per a infants, joves i centres educatius… volem conèixer-te!\n\nEnvia'ns el teu CV juntament amb una carta on ens expliquis què et motiva de Control Play i com pots aportar valor al nostre equip.",
  },
  {
    title: "Contacte",
    description:
      "Teniu preguntes o voleu enviar-nos el vostre CV? Omple el formulari de contacte i et respondrem el més aviat possible. Estem aquí per ajudar-vos.",
    ctaHref: "/contacte",
    ctaLabel: "Anar al formulari de contacte",
  },
];

export function ValorsEmpresa({ valors = VALORS }: { valors?: ValorCard[] }) {
  return (
    <section
      className="mx-auto w-full max-w-[1920px] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      aria-label="Valors de l'empresa"
    >
      <div className="rounded-2xl bg-blue-600 px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {valors.map((valor) => (
            <article
              key={valor.title}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 text-left shadow-lg sm:p-7"
            >
              <h3 className="text-center text-lg font-bold text-slate-900 sm:text-xl">
                {valor.title}
              </h3>
              <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-slate-600">
                {valor.description}
              </p>
              {valor.ctaHref && valor.ctaLabel && (
                <Link
                  href={valor.ctaHref}
                  className="mt-6 inline-flex w-fit items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {valor.ctaLabel}
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
