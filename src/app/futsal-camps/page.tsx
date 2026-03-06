import type { Metadata } from "next";
import Image from "next/image";
import { FutsalVideoCarousel } from "@/components/FutsalVideoCarousel";

export const metadata: Metadata = {
  title: "Futsal Camps",
  description:
    "Barcelona Futsal Camps – Estades de Futbol Sala a Barcelona. Entrenament d'alt nivell i experiències d'oci.",
};

export default function FutsalCampsPage() {
  return (
    <>
      <FutsalVideoCarousel />

      <div className="mx-auto w-full max-w-[1920px] px-4 pt-10 pb-16 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14 xl:px-10 2xl:px-12">
        <h1 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Futsal Camps</h1>

        {/* Espai en blanc entre el títol i el contingut (equivalent a l’espai entre vídeo i títol) */}
        <div className="mt-14 sm:mt-16 lg:mt-24" aria-hidden />

        {/* Bloc 1: Text esquerra | Foto dreta – alineats al mateix nivell, foto una mica més petita */}
        <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="lg:pr-6">
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
            <a
              href="https://www.barcelonafutsalcamps.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Descobreix la web de Barcelona Futsal Camps
              <span className="text-white/80" aria-hidden>→</span>
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-emerald-50/70 lg:rotate-2">
            <Image
              src="/images/futsal/futsal2.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
        </section>
      </div>

      <div className="mx-auto w-full max-w-[1920px] px-4 py-16 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Bloc 2: Foto esquerra | Objectius dreta – foto una mica més petita */}
        <section className="mt-0 grid grid-cols-1 items-center gap-8 border-t border-slate-200 pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-emerald-50/70 lg:-rotate-2 lg:mt-6">
            <Image
              src="/images/futsal/futsal1.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
          <div className="lg:pl-6">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Què oferim?</h2>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden="true">✔</span>
                Planificació d&apos;estades a mida
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden="true">✔</span>
                Entrenaments específics adaptats al nivell i objectius del grup
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden="true">✔</span>
                Staff tècnic qualificat i amb experiència
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden="true">✔</span>
                Instal·lacions adequades i logística completa
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden="true">✔</span>
                Programa d&apos;activitats d&apos;oci per complementar l&apos;experiència esportiva
              </li>
            </ul>
            <p className="mt-6 text-slate-600">
              Ens encarreguem de tots els detalls perquè jugadors i equips puguin centrar-se en el que
              realment importa: aprendre, competir, gaudir i créixer.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
