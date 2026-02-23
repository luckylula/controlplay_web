import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Canal Ètic – Control Play",
  description:
    "Sistema Intern d'Informació de Control Play Services S.L. conforme a la Llei 2/2023. Canal Ètic per a la comunicació d'infraccions normatives.",
};

/** Enllaç al formulari de denúncia (podeu canviar la URL quan el tengueu) */
const FORMULARI_URL = "/canal-etic/formulari";

export default function CanalEticPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
        CANAL ÈTIC
      </h1>
      <p className="mt-2 text-lg font-medium text-slate-700">
        CONTROL PLAY SERVICES S.L.
      </p>
      <p className="mt-1 text-base text-slate-600">
        Sistema Intern d&apos;Informació conforme a la Llei 2/2023
      </p>

      <p className="mt-8 text-slate-700 leading-relaxed">
        Control Play Services S.L., en el marc del seu compromís amb la
        legalitat, la transparència i la protecció dels drets fonamentals,
        disposa d&apos;un Sistema Intern d&apos;Informació (Canal Ètic) en
        compliment de la Llei 2/2023, de 20 de febrer, reguladora de la
        protecció de les persones que informin sobre infraccions normatives i de
        lluita contra la corrupció.
      </p>
      <p className="mt-4 text-slate-700 leading-relaxed">
        Aquest sistema constitueix un mecanisme formal i estructurat per a la
        comunicació d&apos;infraccions normatives o conductes contràries als
        principis ètics de l&apos;organització.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 sm:text-2xl">
        1. Àmbit d&apos;aplicació
      </h2>
      <p className="mt-2 text-slate-700 leading-relaxed">
        El Canal Ètic és accessible a:
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-700">
        <li>Personal laboral i col·laboradors</li>
        <li>Monitors/es i personal de cuina</li>
        <li>Coordinadors/es</li>
        <li>Proveïdors i subcontractistes</li>
        <li>Famílies usuàries dels serveis</li>
        <li>Ex-treballadors/es</li>
        <li>Qualsevol persona relacionada amb l&apos;activitat de l&apos;empresa</li>
      </ul>

      <h2 className="mt-10 text-xl font-bold text-slate-900 sm:text-2xl">
        2. Fets susceptibles de comunicació
      </h2>
      <p className="mt-2 text-slate-700 leading-relaxed">
        Podran comunicar-se, entre altres, els següents fets:
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-700">
        <li>Infraccions del dret de la Unió Europea o de l&apos;ordenament jurídic espanyol</li>
        <li>Conductes constitutives d&apos;infracció penal o administrativa greu o molt greu</li>
        <li>Incompliments del Codi Ètic o normativa interna</li>
        <li>Assetjament laboral o sexual</li>
        <li>Conductes inadequades o de risc envers menors</li>
        <li>Incompliments en matèria de seguretat alimentària</li>
        <li>Vulneracions en matèria de prevenció de riscos laborals</li>
        <li>Irregularitats econòmiques o ús indegut de recursos públics</li>
        <li>Vulneracions de la normativa de protecció de dades</li>
        <li>Pràctiques anticompetitives</li>
        <li>Conductes contràries als drets humans</li>
      </ul>
      <p className="mt-4 text-slate-700 leading-relaxed">
        Queden excloses les queixes o suggeriments que no constitueixin
        infracció normativa, que hauran de canalitzar-se a través dels canals
        ordinaris de contacte.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 sm:text-2xl">
        3. Garanties del Sistema Intern d&apos;Informació
      </h2>
      <ul className="mt-3 space-y-4 text-slate-700">
        <li>
          <strong className="text-slate-900">Confidencialitat</strong>
          <br />
          La identitat de la persona informant serà tractada amb la màxima
          reserva. S&apos;admeten comunicacions anònimes.
        </li>
        <li>
          <strong className="text-slate-900">Independència</strong>
          <br />
          El sistema és gestionat per un Responsable del Sistema designat
          formalment, amb autonomia i imparcialitat en l&apos;exercici de les
          seves funcions.
        </li>
        <li>
          <strong className="text-slate-900">Protecció contra represàlies</strong>
          <br />
          Es prohibeix qualsevol acte de represàlia contra les persones que
          informin de bona fe. La vulneració d&apos;aquesta garantia podrà
          comportar responsabilitats disciplinàries.
        </li>
        <li>
          <strong className="text-slate-900">Dret de defensa</strong>
          <br />
          Es garantirà la presumpció d&apos;innocència i els drets de les
          persones afectades durant el procediment.
        </li>
        <li>
          <strong className="text-slate-900">Terminis</strong>
          <br />
          Acusament de recepció en 7 dies (si procedeix). Resolució en un
          termini màxim de 3 mesos.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-bold text-slate-900 sm:text-2xl">
        4. Procediment
      </h2>
      <ol className="mt-3 list-decimal space-y-1 pl-6 text-slate-700">
        <li>Recepció de la comunicació.</li>
        <li>Anàlisi preliminar d&apos;admissió.</li>
        <li>Investigació reservada i objectiva.</li>
        <li>Proposta de resolució.</li>
        <li>Adopció de mesures correctores, si escau.</li>
        <li>Tancament i registre del cas.</li>
      </ol>
      <p className="mt-4 text-slate-700 leading-relaxed">
        Les comunicacions es conservaran durant el termini legalment establert.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 sm:text-2xl">
        5. Protecció de dades
      </h2>
      <p className="mt-2 text-slate-700 leading-relaxed">
        Les dades personals tractades en el marc del Canal Ètic seran
        gestionades conforme al Reglament (UE) 2016/679 (RGPD) i la normativa
        aplicable en matèria de protecció de dades.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 sm:text-2xl">
        6. Compromís amb la protecció de menors
      </h2>
      <p className="mt-2 text-slate-700 leading-relaxed">
        Atesa la naturalesa dels serveis prestats per Control Play Services
        S.L., qualsevol comunicació relacionada amb conductes que puguin
        afectar la seguretat o integritat de menors serà tractada amb caràcter
        prioritari i immediat.
      </p>

      <h2 className="mt-10 text-xl font-bold text-slate-900 sm:text-2xl">
        Presentació de comunicacions
      </h2>
      <p className="mt-2 text-slate-700 leading-relaxed">
        Les comunicacions poden realitzar-se:
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-700">
        <li>A través del formulari habilitat a la web corporativa</li>
        <li>Mitjançant reunió presencial prèvia sol·licitud</li>
        <li>Telefònicament al 930 102 191</li>
      </ul>

      <p className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        <strong>Advertiment:</strong> Aquest canal no constitueix un servei
        d&apos;emergència. En cas de risc immediat per a persones o béns, cal
        contactar amb les autoritats competents.
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href={FORMULARI_URL}
          className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Formulari de denúncia
        </Link>
      </div>
    </div>
  );
}
