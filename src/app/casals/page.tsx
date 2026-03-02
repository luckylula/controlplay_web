import type { Metadata } from "next";
import Image from "next/image";
import { CasalsVideoCarousel } from "@/components/CasalsVideoCarousel";

export const metadata: Metadata = {
  title: "Casals",
  description:
    "Casals de Control Play – Tour Estiufest. Aquest estiu el casal es transforma en una gran aventura musical.",
};

export default function CasalsPage() {
  return (
    <>
      {/* Carrusel de vídeos de casals a dalt – mateixa mida que la resta de subcategories */}
      <CasalsVideoCarousel />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Casals</h1>
        <Image
          src="/images/logos/CP%20CASALS.png"
          alt="Control Play Casals"
          width={280}
          height={80}
          className="mt-3 h-20 w-auto sm:h-24"
        />

        {/* Bloc superior: il·lustració esquerra + dos paràgrafs dreta (amb vora) */}
        <section className="mt-10 rounded-xl border border-slate-200 p-4 sm:p-6">
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.25fr_1fr]">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-slate-100">
              <Image
                src="/images/casals/casals%20logo%20ok.png"
                alt="Casal Estiufest 2026 – Escola Abat Oliba"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1023px) 100vw, 55vw"
                priority
              />
            </div>
            <div className="space-y-4">
              <p className="text-slate-600">
                Aquest estiu el casal es transforma en una gran aventura musical amb l&apos;emocionant
                Tour Estiufest. Els nens i nenes viatjaran per diferents països descobrint ritmes, balls
                i cultures d&apos;arreu del món. A través de la història de DJ Tempo, es convertiran en
                protagonistes d&apos;un repte ple de creativitat i diversió.
              </p>
              <p className="text-slate-600">
                Cada setmana superaran desitjaments, crearan manualitats, participaran en gimcanes i
                prepararan actuacions sorprenents. Gaudiran de piscina, sortides especials i activitats
                esportives adaptades a cada edat. Fomentem el treball en equip, l&apos;expressió
                artística i la imaginació com a motors d&apos;aprenentatge.
              </p>
            </div>
          </div>
        </section>

        {/* Dos paràgrafs sota el bloc – amplada completa, justificats */}
        <section className="mt-8 w-full">
          <p className="text-justify text-slate-600">
            A més, incorporem valors com la sostenibilitat i el respecte per l&apos;entorn utilitzant
            materials reciclats en moltes activitats. Tot plegat en un entorn segur, amb un equip
            professional i proper que acompanya cada grup.
          </p>
          <p className="mt-4 text-justify text-slate-600">
            El casal culminarà amb el gran festival final &quot;Estiufest&quot;, creat pels propis nens
            i nenes. Un estiu ple de música, experiències inoblidables i moments que recordaran tot
            l&apos;any.
          </p>
        </section>
      </div>
    </>
  );
}

