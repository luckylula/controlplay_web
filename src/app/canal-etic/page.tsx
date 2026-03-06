import type { Metadata } from "next";
import Link from "next/link";
import { CanalEticVideoCarousel } from "@/components/CanalEticVideoCarousel";

export const metadata: Metadata = {
  title: "Canal Ètic – Control Play",
  description:
    "Sistema Intern d'Informació de Control Play Services S.L. conforme a la Llei 2/2023. Canal Ètic per a la comunicació d'infraccions normatives.",
};

/** Enllaç al formulari de denúncia (Microsoft Forms) */
const FORMULARI_URL =
  "https://emea01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fforms.office.com%2Fpages%2Fresponsepage.aspx%3Fid%3D8-RLI9jiG0e8C_nPdBkFF19Rih_YYnRJh-jJFVFPGRpUNTVNWjFPQTNQVDJRUVlWMEFVTTZVSzkzTS4u%26route%3Dshorturl&data=05%7C02%7C%7C9559cfa56a914e2f108e08de7ab4d9f6%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C639083114351113880%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=WUYHftcGFRh%2BxKtF5zOCoor1XwiWh4ZP73gNK14zono%3D&reserved=0";

export default function CanalEticPage() {
  return (
    <>
      {/* Franja vídeos a dalt – carrusel de 3 vídeos */}
      <section className="relative w-full overflow-hidden bg-slate-900 aspect-[21/9] min-h-[260px] max-h-[420px] sm:min-h-[300px] lg:max-h-[520px]">
        <div className="absolute inset-0">
          <CanalEticVideoCarousel />
        </div>
      </section>

    <div className="mx-auto w-full max-w-[1920px] px-4 py-16 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Canal Ètic
        </h1>
        <p className="mt-2 text-lg font-medium text-slate-700">
          CONTROL PLAY SERVICES S.L.
        </p>
        <p className="mt-1 text-base text-slate-600">
          Sistema Intern d&apos;Informació conforme a la Llei 2/2023
        </p>
      </div>

      {/* Bloc 1: Text a l'esquerra */}
      <section className="mt-10">
        <p className="text-slate-700 leading-relaxed">
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
      </section>

      {/* Tres seccions en format targeta – fons blau, targetes blanques */}
      <section className="mt-14 rounded-2xl bg-blue-600 px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Targeta 1: Àmbit d'aplicació – mateix estil que 2 i 3, títol a dalt i fix */}
          <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 text-left shadow-lg sm:p-7">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Llei 2/2023
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl font-bold text-black">
                01
              </div>
              <h2 className="text-lg font-bold text-black sm:text-xl">
                Àmbit d&apos;aplicació
              </h2>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              El Canal Ètic és accessible a totes les persones vinculades a l&apos;organització:
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
              {["Personal laboral i col·laboradors", "Monitors/es i personal de cuina", "Coordinadors/es", "Proveïdors i subcontractistes", "Famílies usuàries dels serveis", "Ex-treballadors/es", "Qualsevol persona relacionada amb l'activitat de l'empresa"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs font-medium text-slate-500">
              Sistema d&apos;informació
            </p>
          </article>

          {/* Targeta 2: Fets susceptibles */}
          <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 text-left shadow-lg sm:p-7">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Llei 2/2023
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl font-bold text-black">
                02
              </div>
              <h2 className="text-lg font-bold text-black sm:text-xl">
                Fets susceptibles de comunicació
              </h2>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Podran comunicar-se, entre altres, els següents fets:
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
              {["Infraccions del dret de la UE o de l'ordenament jurídic espanyol", "Conductes d'infracció penal o administrativa greu", "Incompliments del Codi Ètic o normativa interna", "Assetjament laboral o sexual", "Conductes de risc envers menors", "Incompliments en seguretat alimentària", "Prevenció de riscos laborals", "Irregularitats econòmiques o ús indegut de recursos", "Protecció de dades", "Pràctiques anticompetitives", "Conductes contràries als drets humans"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-600">
              Les queixes no constitutives d&apos;infracció es canalitzaran pels canals ordinaris.
            </p>
            <p className="mt-4 text-xs font-medium text-slate-500">
              Infraccions normatives
            </p>
          </article>

          {/* Targeta 3: Garanties */}
          <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 text-left shadow-lg sm:p-7">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Llei 2/2023
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl font-bold text-black">
                03
              </div>
              <h2 className="text-lg font-bold text-black sm:text-xl">
                Garanties del sistema
              </h2>
            </div>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div>
                <strong className="text-black">Confidencialitat.</strong> La identitat es tracta amb la màxima reserva; s&apos;admeten comunicacions anònimes.
              </div>
              <div>
                <strong className="text-black">Independència.</strong> Responsable designat formalment, amb autonomia i imparcialitat.
              </div>
              <div>
                <strong className="text-black">Protecció contra represàlies.</strong> Es prohibeix qualsevol represàlia contra qui informi de bona fe.
              </div>
              <div>
                <strong className="text-black">Dret de defensa.</strong> Presumpció d&apos;innocència i drets de les persones afectades.
              </div>
              <div>
                <strong className="text-black">Terminis.</strong> Acusament de recepció en 7 dies; resolució en un màxim de 3 mesos.
              </div>
            </div>
            <p className="mt-5 text-xs font-medium text-slate-500">
              Protecció garantida
            </p>
          </article>
        </div>

        {/* Segona fila: punts 4, 5 i 6 */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 text-left shadow-lg sm:p-7">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Llei 2/2023</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl font-bold text-black">04</div>
              <h2 className="text-lg font-bold text-black sm:text-xl">Procediment</h2>
            </div>
            <ol className="mt-4 space-y-1.5 text-sm text-slate-600 list-decimal list-inside">
              <li>Recepció de la comunicació.</li>
              <li>Anàlisi preliminar d&apos;admissió.</li>
              <li>Investigació reservada i objectiva.</li>
              <li>Proposta de resolució.</li>
              <li>Adopció de mesures correctores, si escau.</li>
              <li>Tancament i registre del cas.</li>
            </ol>
            <p className="mt-4 text-sm text-slate-600">
              Les comunicacions es conservaran durant el termini legalment establert.
            </p>
            <p className="mt-4 text-xs font-medium text-slate-500">Gestió del canal</p>
          </article>
          <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 text-left shadow-lg sm:p-7">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Llei 2/2023</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl font-bold text-black">05</div>
              <h2 className="text-lg font-bold text-black sm:text-xl">Protecció de dades</h2>
            </div>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Les dades personals tractades en el marc del Canal Ètic seran gestionades conforme al Reglament (UE) 2016/679 (RGPD) i la normativa aplicable en matèria de protecció de dades.
            </p>
            <p className="mt-5 text-xs font-medium text-slate-500">RGPD</p>
          </article>
          <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 text-left shadow-lg sm:p-7">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Llei 2/2023</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl font-bold text-black">06</div>
              <h2 className="text-lg font-bold text-black sm:text-xl">Compromís amb la protecció de menors</h2>
            </div>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Atesa la naturalesa dels serveis prestats per Control Play Services S.L., qualsevol comunicació relacionada amb conductes que puguin afectar la seguretat o integritat de menors serà tractada amb caràcter prioritari i immediat.
            </p>
            <p className="mt-5 text-xs font-medium text-slate-500">Prioritat</p>
          </article>
        </div>
      </section>

      <h2 className="mt-16 text-xl font-bold text-slate-900 sm:text-2xl border-t border-slate-200 pt-10">
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
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Formulari de denúncia
        </Link>
      </div>
    </div>
    </>
  );
}
