import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Futsal Camps",
  description:
    "Barcelona Futsal Camps – Estades de Futbol Sala a Barcelona. Entrenament d'alt nivell i experiències d'oci.",
};

export default function FutsalCampsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Futsal Camps</h1>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Què és Barcelona Futsal Camps?
        </h2>
        <p className="mt-3 text-slate-600">
          Barcelona Futsal Camps és un projecte internacional especialitzat en estades de Futbol
          Sala a Barcelona durant tot l&apos;any. Oferim un concepte únic que combina entrenament
          d&apos;alt nivell amb experiències d&apos;oci en una de les ciutats més atractives
          d&apos;Europa.
        </p>
        <p className="mt-3 text-slate-600">
          El nostre programa està dirigit a Federacions, Clubs, Escoles, grups d&apos;entrenadors i
          jugadors apassionats pel Futbol Sala que vulguin viure una experiència esportiva completa
          en un entorn professional i inspirador.
        </p>
        <p className="mt-3 text-slate-600">
          Coneixem Barcelona en profunditat i el Futbol Sala és la nostra especialitat. Aquesta
          combinació ens permet dissenyar estades totalment personalitzades, adaptades a les
          necessitats tècniques i objectives de cada equip o grup.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Què oferim?</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden="true">✔</span>
            Planificació d&apos;estades a mida
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden="true">✔</span>
            Entrenaments específics adaptats al nivell i objectius del grup
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden="true">✔</span>
            Staff tècnic qualificat i amb experiència
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden="true">✔</span>
            Instal·lacions adequades i logística completa
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden="true">✔</span>
            Programa d&apos;activitats d&apos;oci per complementar l&apos;experiència esportiva
          </li>
        </ul>
        <p className="mt-6 text-slate-600">
          Ens encarreguem de tots els detalls perquè jugadors i equips puguin centrar-se en el que
          realment importa: aprendre, competir, gaudir i créixer.
        </p>
      </section>

      <div className="mt-10 border-t border-slate-200 pt-10">
        <a
          href="https://www.barcelonafutsalcamps.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-5 py-3 font-medium text-white transition hover:bg-slate-700"
        >
          Descobreix la web de Barcelona Futsal Camps
          <span className="text-slate-400" aria-hidden="true">→</span>
        </a>
      </div>

      <p className="mt-10 text-lg font-medium text-slate-700">
        Contacta amb nosaltres i et dissenyarem una estada única, professional i inoblidable a
        Barcelona.
      </p>
    </div>
  );
}
