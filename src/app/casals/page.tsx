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

        {/* Franja de 6 targetes (estil Canal Ètic) */}
        <section className="mt-14 rounded-2xl bg-blue-600 px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 text-left shadow-lg sm:p-7">
              <div className="text-center">
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
              <div className="text-center">
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
            <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 text-left shadow-lg sm:p-7">
              <div className="text-center">
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
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 text-left shadow-lg sm:p-7">
              <div className="text-center">
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
            <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 text-left shadow-lg sm:p-7">
              <div className="text-center">
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
            <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 text-left shadow-lg sm:p-7">
              <div className="text-center">
                <h2 className="text-lg font-bold text-black sm:text-xl">
                  Activitats diàries
                </h2>
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                El dia es divideix en franjes horàries, prioritzant activitats relaxades en les hores de més calor.
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-800">
                Exemple d&apos;horari setmanal:
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  <strong>08:00 – 09:00:</strong> Acollida.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  <strong>09:00:</strong> Recepció.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  Activitats destacades: Piscina (dimarts), Sortida/Excursió (dijous), Gimcana d&apos;aigua (dilluns, dimecres i divendres).
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  <strong>14:00 – 15:00:</strong> Dinar.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-800" />
                  <strong>15:00 – 16:30:</strong> Tallers de tarda (pel·lícula, manualitats, música, jocs de taula i relaxació).
                </li>
              </ul>
            </article>
          </div>
        </section>

        <CasalsOldPhotosCarousel />

        {/* Franja de 8 icones (estil com les 6 targetes de dalt) */}
        <section className="mt-14 rounded-2xl bg-blue-600 px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <article
                key={n}
                className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 text-center shadow-lg sm:p-7"
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
