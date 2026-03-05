import type { Metadata } from "next";
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

      <div className="mx-auto w-full max-w-[1920px] px-4 py-16 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
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

      {/* Valors de l'empresa – 4 targetes en grid 2x2 (blau, imatge flotant) – ample complet fins a 1920px */}
      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto w-full max-w-[1920px] px-4 text-center sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Els nostres valors
          </h2>
        </div>
        <ValorsEmpresa />
      </section>
    </>
  );
}
