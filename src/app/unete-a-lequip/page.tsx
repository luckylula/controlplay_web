import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ValorsEmpresa } from "@/components/ValorsEmpresa";

export const metadata: Metadata = {
  title: "Uneix-te a l'Equip",
  description:
    "Control Play – On l'educació, l'esport i la diversió es converteixen en oportunitats. Uneix-te al nostre equip.",
};

export default function UneteALEquipPage() {
  return (
    <>
      {/* Hero – franja amb foto (com el vídeo a altres pàgines) */}
      <section className="relative h-[360px] w-full overflow-hidden border-b border-slate-200 sm:h-[420px] lg:h-[480px]">
        <Image
          src="/images/unete-a-lequip/unete1.png"
          alt="Uneix-te a l'equip Control Play"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative flex h-full flex-col items-center justify-center px-4 py-12 text-center sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400 sm:text-base">
            Oportunitats professionals
          </p>
          <h1 className="mt-1 text-3xl font-bold text-white drop-shadow-sm sm:text-4xl lg:text-5xl">
            Uneix-te a l&apos;Equip Control Play
          </h1>
          <p className="mt-2 text-lg text-white/95 drop-shadow-sm">
            On l&apos;educació, l&apos;esport i la diversió es converteixen en oportunitats
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="mt-0">
        <p className="text-slate-600">
          A Control Play treballem cada dia per crear experiències educatives, esportives i lúdiques
          que marquen la diferència en escoles, centres i comunitats. El nostre objectiu és acompanyar
          infants, joves i famílies a través d&apos;activitats extraescolars, esportives, tallers
          formatius i serveis integrals pensats per créixer, aprendre i gaudir.
        </p>
        <p className="mt-3 text-slate-600">
          Sabem que les persones són el cor dels nostres projectes. Per això, volem envoltar-nos de
          professionals compromesos, amb esperit col·laboratiu i amb ganes d&apos;aportar idees
          innovadores.
        </p>
      </section>
      </div>

      {/* Valors de l'empresa – 4 targetes en grid 2x2 (blau, imatge flotant) */}
      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Els nostres valors
          </h2>
        </div>
        <ValorsEmpresa />
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="mt-0 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Per què treballar amb nosaltres?
        </h2>
        <p className="mt-3 text-slate-600">
          A Control Play fomentem un entorn de treball dinàmic, humà i orientat a l&apos;excel·lència,
          on cada professional aporta el seu talent i construeix el seu creixement professional.
          Aquí podràs:
        </p>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-black" aria-hidden="true">✔</span>
            Participar en projectes formatius, esportius i recreatius que impacten positivament en la
            comunitat.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-black" aria-hidden="true">✔</span>
            Col·laborar amb un equip divers i motivat.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-black" aria-hidden="true">✔</span>
            Desenvolupar la teva carrera amb oportunitats d&apos;aprenentatge continu.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-black" aria-hidden="true">✔</span>
            Formar part d&apos;una empresa amb visió educativa, social i professional.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Qui busquem?</h2>
        <p className="mt-3 text-slate-600">Busquem persones:</p>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-black" aria-hidden="true">✔</span>
            Amb passió per l&apos;educació, l&apos;esport i l&apos;entreteniment.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-black" aria-hidden="true">✔</span>
            Professionals responsables, proactius i amb capacitat per treballar en equip.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-black" aria-hidden="true">✔</span>
            Amb empatia, creativitat i ganes d&apos;aportar solucions.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-black" aria-hidden="true">✔</span>
            Amb disponibilitat per adaptar-se a projectes diversos i desafiadors.
          </li>
        </ul>
        <p className="mt-6 text-slate-600">
          Si t&apos;agrada fer que cada dia compti, aquest és el teu lloc.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Vols formar part del nostre equip?
        </h2>
        <p className="mt-3 text-slate-600">
          Si t&apos;entusiasma treballar en un entorn on el teu esforç es tradueix en experiències
          memorables per a infants, joves i centres educatius… volem conèixer-te!
        </p>
        <p className="mt-3 text-slate-600">
          Envia&apos;ns el teu CV juntament amb una carta on ens expliquis què et motiva de Control
          Play i com pots aportar valor al nostre equip.
        </p>
        <p className="mt-6 text-slate-600">
          Control Play és més que una feina — és un projecte on tu també pots créixer. Anima&apos;t a
          formar part de la nostra família!
        </p>
        <Link
          href="/contacte"
          className="mt-8 inline-block rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700"
        >
          Contacta amb nosaltres
        </Link>
      </section>
      </div>
    </>
  );
}
