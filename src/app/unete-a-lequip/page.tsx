import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Uneix-te a l'Equip",
  description:
    "Control Play – On l'educació, l'esport i la diversió es converteixen en oportunitats. Uneix-te al nostre equip.",
};

export default function UneteALEquipPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
        Uneix-te a l&apos;Equip Control Play
      </h1>
      <p className="mt-4 text-lg font-medium text-slate-700">
        On l&apos;Educació, l&apos;Esport i la Diversió es converteixen en Oportunitats
      </p>

      <section className="mt-10">
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

      <section className="mt-10 border-t border-slate-200 pt-10">
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
  );
}
