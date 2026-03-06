import type { Metadata } from "next";
import Image from "next/image";
import { CasalsGallery } from "@/components/CasalsGallery";
import { CasalsVideoCarousel } from "@/components/CasalsVideoCarousel";

export const metadata: Metadata = {
  title: "Casals",
  description:
    "Casals de Control Play – Tour Estiufest. Aquest estiu el casal es transforma en una gran aventura musical al voltant del món.",
};

export default function CasalsPage() {
  return (
    <>
      <CasalsVideoCarousel />

      <div className="mx-auto w-full max-w-[1920px] px-4 py-16 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Casals</h1>
          <Image
            src="/images/logos/CP%20CASALS.png"
            alt="Control Play Casals"
            width={280}
            height={80}
            className="mt-3 h-20 w-auto sm:h-24"
          />
        </div>

        {/* Foto esquerra | Tot el text dreta */}
        <section className="mt-10 rounded-xl border border-slate-200 p-4 sm:p-6">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            {/* Columna esquerra: tres imatges (mateix mida, sense sticky) */}
            <div className="space-y-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-100">
                <Image
                  src="/images/casals/casals%20foto.png"
                  alt="Casal Tour Estiufest"
                  fill
                  className="object-cover object-left"
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  priority
                />
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-100">
                <Image
                  src="/images/casals/casals%20foto%20piscina.jpg"
                  alt="Nens i nenes a la piscina del casal"
                  fill
                  className="object-cover object-left"
                  sizes="(max-width: 1023px) 100vw, 42vw"
                />
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-100">
                <Image
                  src="/images/casals/11.png"
                  alt="Calendari activitats Casal Estiufest"
                  fill
                  className="object-cover object-[20%_50%]"
                  sizes="(max-width: 1023px) 100vw, 42vw"
                />
              </div>
            </div>

            {/* Columna dreta: tot el text */}
            <div className="min-w-0 space-y-10 lg:pl-2">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  Aquest estiu arriba el TOUR ESTIUFEST!
                </h2>
                <p className="mt-3 text-slate-600">
                  El casal es transforma en una gran aventura musical al voltant del món. Els nens i nenes viatjaran per diferents països descobrint ritmes, balls i cultures mentre viuen experiències úniques.
                </p>
                <p className="mt-3 text-slate-600">
                  Tot comença amb la història de DJ Tempo, que els proposarà un repte ple de música, creativitat i diversió.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  Cada setmana, una nova aventura
                </h2>
                <p className="mt-3 text-slate-600">
                  Durant l&apos;estiu els nens i nenes viuran activitats emocionants:
                </p>
                <ul className="mt-3 space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                    Reptes i missions setmanals
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                    Manualitats creatives
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                    Gimcanes i jocs en equip
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                    Preparació d&apos;actuacions musicals
                  </li>
                </ul>
                <p className="mt-4 text-slate-600 font-medium">
                  Cada setmana serà diferent!
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  Diversió assegurada
                </h2>
                <p className="mt-3 text-slate-600">
                  A més de les activitats del Tour Estiufest, gaudiran de:
                </p>
                <ul className="mt-3 space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                    Piscina
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                    Sortides especials
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                    Activitats esportives adaptades a cada edat
                  </li>
                </ul>
                <p className="mt-4 text-slate-600">
                  Un equilibri perfecte entre aprendre, moure&apos;s i passar-ho en gran.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  Aprendre també forma part de l&apos;aventura
                </h2>
                <p className="mt-3 text-slate-600">Al nostre casal fomentem:</p>
                <ul className="mt-3 space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                    Treball en equip
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                    Expressió artística
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                    Imaginació i creativitat
                  </li>
                </ul>
                <p className="mt-4 text-slate-600">
                  També promovem valors com la sostenibilitat, utilitzant materials reciclats en moltes activitats.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  Gran Festival Final: ESTIUFEST
                </h2>
                <p className="mt-3 text-slate-600">
                  L&apos;estiu acabarà amb un festival espectacular creat pels propis nens i nenes.
                </p>
                <p className="mt-3 text-slate-600">
                  Un moment únic on podran mostrar tot el que han après i viscut durant el casal.
                </p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <p className="text-lg font-medium text-slate-700">
                  Un estiu ple de música, aventures i records inoblidables.
                </p>
                <p className="mt-3 text-xl font-semibold text-slate-900 sm:text-2xl">
                  Apunta els teus fills i que comenci el Tour Estiufest!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CasalsGallery />
    </>
  );
}
