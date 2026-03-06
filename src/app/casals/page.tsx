import type { Metadata } from "next";
import Image from "next/image";
import { CasalsOldPhotosCarousel } from "@/components/CasalsOldPhotosCarousel";
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
                  src="/images/casals/horarios%20casals.png"
                  alt="Horari setmanal del casal"
                  fill
                  className="object-contain"
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

        {/* 6 targetes: estructura bento (2 grans + 4 en fila) per diferenciar de Canal Ètic */}
        <section className="mt-14 rounded-2xl bg-blue-600 px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
          {/* Fila 1: dues targetes grans */}
          <div className="grid gap-8 md:grid-cols-2">
            <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 text-left shadow-lg sm:p-7">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600" aria-hidden>
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h2 className="text-lg font-bold text-black sm:text-xl">
                  Equip humà
                </h2>
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Control Play té una dilatada experiència en l&apos;àmbit del lleure. És per això que l&apos;equip encarregat de la preparació, el disseny, la programació i la intervenció del casal d&apos;estiu està format per un conjunt de professionals experts en cada àmbit.
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-800">Coordinador/a casal</p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Vetllar pel bon funcionament del casal.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Supervisar l&apos;equip de monitors i monitores i garantir unitat de criteris.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Mantenir reunions de seguiment setmanal amb l&apos;equip educatiu.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Vetllar pel seguiment correcte de la normativa sanitària.
                </li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-slate-800">Monitors/es</p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Vetllar per l&apos;assoliment dels objectius proposats.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Dinamitzar les activitats amb els infants.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Ser la persona de referència del grup i atendre les necessitats de l&apos;infant.
                </li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-slate-800">Monitors/es de suport</p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Donar suport als infants i joves a l&apos;hora de realitzar aquelles activitats quotidianes que no puguin fer per si mateixos.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Treballar perquè tots els infants puguin participar a totes les activitats.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Fomentar l&apos;autonomia dels infants amb NESE.
                </li>
              </ul>
            </article>
            <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 text-left shadow-lg sm:p-7">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-violet-600" aria-hidden>
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h2 className="text-lg font-bold text-black sm:text-xl">
                  Concepte, horari i preu
                </h2>
              </div>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[280px] text-sm text-slate-600">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="pb-2 pr-2 text-left font-semibold text-slate-800">Concepte</th>
                      <th className="pb-2 pr-2 text-left font-semibold text-slate-800">Horari</th>
                      <th className="pb-2 text-right font-semibold text-slate-800">Preu</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b border-slate-100"><td className="py-1.5 pr-2">1 Setmana Matins</td><td className="py-1.5 pr-2">9 a 14 h</td><td className="py-1.5 text-right">79 €</td></tr>
                    <tr className="border-b border-slate-100"><td className="py-1.5 pr-2">1 Setmana amb Menjador</td><td className="py-1.5 pr-2">9 a 16.30 h</td><td className="py-1.5 text-right">120 €</td></tr>
                    <tr className="border-b border-slate-100"><td className="py-1.5 pr-2">6 Setmanes Matins</td><td className="py-1.5 pr-2">9 a 14 h</td><td className="py-1.5 text-right">360 €</td></tr>
                    <tr className="border-b border-slate-100"><td className="py-1.5 pr-2">6 Setmanes amb Menjador</td><td className="py-1.5 pr-2">9 a 16.30 h</td><td className="py-1.5 text-right">560 €</td></tr>
                    <tr className="border-b border-slate-100"><td className="py-1.5 pr-2">1 Setmana Acollida</td><td className="py-1.5 pr-2">8.30 a 9 h / 8 a 9 h</td><td className="py-1.5 text-right">9 / 13 €</td></tr>
                    <tr className="border-b border-slate-100"><td className="py-1.5 pr-2">6 Setmanes Acollida</td><td className="py-1.5 pr-2">8.30 a 9 h / 8 a 9 h</td><td className="py-1.5 text-right">45 / 65 €</td></tr>
                    <tr className="border-b border-slate-100"><td className="py-1.5 pr-2">Acollida Puntual</td><td className="py-1.5 pr-2">8.30 a 9 h / 8 a 9 h</td><td className="py-1.5 text-right">4 / 5 €</td></tr>
                    <tr><td className="py-1.5 pr-2">Menjador Puntual + Casal Tarda</td><td className="py-1.5 pr-2">–</td><td className="py-1.5 text-right">9 €</td></tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>
          {/* Fila 2: quatre targetes en una fila */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 text-left shadow-lg sm:p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-600" aria-hidden>
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h2 className="text-lg font-bold text-black sm:text-xl">
                  Procediment d&apos;inscripcions
                </h2>
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-800">Període d&apos;inscripcions</p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Del 20 al 27 de maig: Infants escola Abat Oliba.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  A partir del 28 de maig: Fins a exhaurir places.
                </li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-slate-800">Pagaments</p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  30% en el moment de formalitzar la inscripció.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Pagament de la resta del casal el 9 de juny.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Becats: Informar en el procés d&apos;inscripcions. Cal informar de la targeta bancària, però no es realitza cap cobrament.
                </li>
              </ul>
            </article>
            <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 text-left shadow-lg sm:p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600" aria-hidden>
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                </div>
                <h2 className="text-lg font-bold text-black sm:text-xl">
                  Material pels inscrits
                </h2>
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-800">
                Per a tots els inscrits a qualsevol opció del casal
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Gorra.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Samarreta tècnica del casal.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Polsera identificativa per les sortides.
                </li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-slate-800">
                Per a inscrits a 4 o 6 setmanes del casal
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Gorra.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  2 samarretes tècniques del casal.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Polsera identificativa per les sortides.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Motxilla de cordes.
                </li>
              </ul>
            </article>
            <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 text-left shadow-lg sm:p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-rose-600" aria-hidden>
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h2 className="text-lg font-bold text-black sm:text-xl">
                  Què entra amb el preu
                </h2>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Monitors/es contractats amb alta a la S.S..
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Garantia del compliment de la nova normativa de la Generalitat de Catalunya (Decret 267/2016, de 5 de juliol).
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Mútua d&apos;accidents.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  10% de descompte a aplicar al segon germà/na.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Gestió d&apos;inscripcions i cobraments (famílies i beques).
                </li>
              </ul>
            </article>
            <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 text-left shadow-lg sm:p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600" aria-hidden>
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <h2 className="text-lg font-bold text-black sm:text-xl">
                  Què cal portar a la motxilla?
                </h2>
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Segons l&apos;activitat programada, no t&apos;oblidis de preparar el següent material:
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-800">Dia de Piscina (Dimarts)</p>
              <ul className="mt-1.5 space-y-1 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />Samarreta del casal i esmorzar.</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />Aigua i gorra.</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />Tovallola, xancletes i banyador.</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />Crema solar i muda per canviar-se.</li>
              </ul>
              <p className="mt-3 text-sm font-semibold text-slate-800">Dia d&apos;Excursió (Dijous)</p>
              <ul className="mt-1.5 space-y-1 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />Samarreta del casal.</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />Esmorzar.</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />Aigua i gorra.</li>
              </ul>
              <p className="mt-3 text-sm font-semibold text-slate-800">Quan ens quedem a l&apos;escola</p>
              <ul className="mt-1.5 space-y-1 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />Esmorzar, aigua i gorra.</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />Tovallola, xancletes i banyador (pels jocs d&apos;aigua).</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />Crema solar i muda de recanvi.</li>
              </ul>
            </article>
          </div>
        </section>

        <CasalsOldPhotosCarousel />

        {/* Casals realitzats: targetes individuals, estètica diferenciada */}
        <section className="mt-14 border-t border-slate-200 pt-12">
          <h2 className="mb-8 text-center text-2xl font-semibold text-slate-800 sm:text-3xl">
            Casals realitzats
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <article
                key={n}
                className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg sm:p-7"
              >
                {n === 1 ? (
                  <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-lg sm:h-52 sm:w-52">
                    <Image
                      src="/images/casals/Casals%20realizats/casals%20illa.png"
                      alt="L'Illa del Tresor"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 176px, 208px"
                    />
                  </div>
                ) : n === 2 ? (
                  <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-lg sm:h-52 sm:w-52">
                    <Image
                      src="/images/casals/Casals%20realizats/casals%20maquina.png"
                      alt="La Màquina del Temps del Dr. Mc Filby"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 176px, 208px"
                    />
                  </div>
                ) : n === 3 ? (
                  <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-lg sm:h-52 sm:w-52">
                    <Image
                      src="/images/casals/Casals%20realizats/casals%204%20elem.png"
                      alt="Els 4 Elements del Xaman"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 176px, 208px"
                    />
                  </div>
                ) : n === 4 ? (
                  <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-lg sm:h-52 sm:w-52">
                    <Image
                      src="/images/casals/Casals%20realizats/casals%2019.png"
                      alt="World Tour / La Sherlick i en Watson"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 176px, 208px"
                    />
                  </div>
                ) : n === 5 ? (
                  <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-lg sm:h-52 sm:w-52">
                    <Image
                      src="/images/casals/Casals%20realizats/casals%20explo.png"
                      alt="Escola d'Exploradors/es"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 176px, 208px"
                    />
                  </div>
                ) : n === 6 ? (
                  <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-lg sm:h-52 sm:w-52">
                    <Image
                      src="/images/casals/Casals%20realizats/casals%2023.png"
                      alt="Super Emòtics"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 176px, 208px"
                    />
                  </div>
                ) : n === 7 ? (
                  <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-lg sm:h-52 sm:w-52">
                    <Image
                      src="/images/casals/Casals%20realizats/casals%2021.png"
                      alt="Esperit Olímpic 2021"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 176px, 208px"
                    />
                  </div>
                ) : n === 8 ? (
                  <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-lg sm:h-52 sm:w-52">
                    <Image
                      src="/images/casals/Casals%20realizats/casals%20festa.png"
                      alt="Alegría, és Festa Major!"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 176px, 208px"
                    />
                  </div>
                ) : (
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </div>
                )}
                <h2 className="mt-4 text-base font-bold text-black sm:text-lg">
                  {n === 1 ? "L'Illa del Tresor" : n === 2 ? "La Màquina del Temps del Dr. Mc Filby" : n === 3 ? "Els 4 Elements del Xaman" : n === 4 ? "World Tour / La Sherlick i en Watson" : n === 5 ? "Escola d'Exploradors/es" : n === 6 ? "Super Emòtics" : n === 7 ? "Esperit Olímpic 2021" : n === 8 ? "Alegría, és Festa Major!" : `Títol ${n}`}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {n === 1
                    ? "Una aventura pirata para conocer el fondo marino y encontrar un gran tesoro."
                    : n === 2
                    ? "Construcción de una máquina para viajar a momentos clave de la historia."
                    : n === 3
                    ? "Ayudaremos a un joven Chamán que domina el aire, fuego, tierra y agua a encontrar a su discípulo para que perdure su fuerza."
                    : n === 4
                    ? "Un viaje por ciudades del mundo junto a dos detectives que llegan de vacaciones a Barcelona."
                    : n === 5
                    ? "Creada para entender sucesos sorprendentes del mundo como volcanes que reviven, huracanes e inundaciones."
                    : n === 6
                    ? "Descubriremos de la mano de superhéroes y superheroínas que todos tenemos superpoderes que nos hacen únicos, aunque ellos tienen problemas para gestionar sus emociones."
                    : n === 7
                    ? "Un viaje por los valores del torneo más conocido del mundo (igualdad, superación, salud) acompañados cada semana por una mascota diferente."
                    : n === 8
                    ? "El gran reto de organizar nuestra propia \"Festa Major\". Desde el primer día, los participantes son los encargados de pensar y preparar la gran fiesta del casal."
                    : "Text a omplir."}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
