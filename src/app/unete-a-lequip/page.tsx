import type { Metadata } from "next";
import Image from "next/image";
import { ValorsEmpresa } from "@/components/ValorsEmpresa";
import { UneteVideoCarousel } from "@/components/UneteVideoCarousel";

export const metadata: Metadata = {
  title: "Uneix-te a l'Equip",
  description:
    "Control Play – On l'educació, l'esport i la diversió es converteixen en oportunitats. Uneix-te al nostre equip.",
};

export default function UneteALEquipPage() {
  return (
    <>
      {/* Hero – carrusel de vídeos */}
      <section className="relative h-[360px] w-full overflow-hidden border-b border-slate-200 sm:h-[420px] lg:h-[480px]">
        <div className="absolute inset-0">
          <UneteVideoCarousel />
        </div>
        <div className="absolute inset-0 z-10 bg-black/40" aria-hidden />
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 py-12 text-center sm:py-16">
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

      {/* Sota el vídeo: imatge a l'esquerra, text a la dreta */}
      <div className="mx-auto w-full max-w-[1920px] px-4 py-16 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-12">
          <div className="relative aspect-[4/3] max-w-md overflow-hidden rounded-2xl bg-slate-100 lg:max-w-full">
            <Image
              src="/images/unete-a-lequip/unete3.png"
              alt="Equip Control Play amb monitors i infants en activitats a l'aire lliure i a l'aula"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 46vw"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-slate-600 leading-relaxed">
              A Control Play treballem cada dia per crear experiències educatives, esportives i
              lúdiques que marquen la diferència en escoles, centres i comunitats. El nostre
              objectiu és acompanyar infants, joves i famílies a través d&apos;activitats
              extraescolars, esportives, tallers formatius i serveis integrals pensats per créixer,
              aprendre i gaudir.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Sabem que les persones són el cor dels nostres projectes. Per això, volem
              envoltar-nos de professionals compromesos, amb esperit col·laboratiu i amb ganes
              d&apos;aportar idees innovadores.
            </p>
          </div>
        </section>
      </div>

      {/* Valors de l'empresa – 4 targetes */}
      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <ValorsEmpresa />
      </section>

      {/* Imatge de l'equip i activitats sota les quatre targetes */}
      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/unete-a-lequip/unete2.png"
              alt="Uneix-te a l'Equip Control Play – educació, esport i diversió en oportunitats"
              width={1920}
              height={1080}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1920px) 100vw, 1920px"
              priority={false}
            />
          </div>
        </div>
      </section>
    </>
  );
}
