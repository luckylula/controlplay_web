import type { Metadata } from "next";
import Image from "next/image";
import { CasalsGallery } from "@/components/CasalsGallery";
import { CasalsVideoCarousel } from "@/components/CasalsVideoCarousel";

export const metadata: Metadata = {
  title: "Casals",
  description:
    "Casals de Control Play – Tour Estiufest. Este verano el casal se transforma en una gran aventura musical alrededor del mundo.",
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

        {/* Bloc intro: imatge + text Tour Estiufest */}
        <section className="mt-10 rounded-xl border border-slate-200 p-4 sm:p-6">
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.25fr_1fr]">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-slate-100">
              <Image
                src="/images/casals/casals%20foto.png"
                alt="Casal Tour Estiufest"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) 100vw, 55vw"
                priority
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                ¡Este verano llega el TOUR ESTIUFEST!
              </h2>
              <p className="text-slate-600">
                El casal se transforma en una gran aventura musical alrededor del mundo. Niños y niñas viajarán por distintos países descubriendo ritmos, bailes y culturas mientras viven experiencias únicas.
              </p>
              <p className="text-slate-600">
                Todo comienza con la historia de DJ Tempo, que les propondrá un reto lleno de música, creatividad y diversión.
              </p>
            </div>
          </div>
        </section>

        {/* Cada semana, una nueva aventura */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Cada semana, una nueva aventura
          </h2>
          <p className="mt-3 text-slate-600">
            Durante el verano los niños vivirán actividades emocionantes:
          </p>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 text-emerald-600" aria-hidden>✔</span>
              Retos y misiones semanales
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 text-emerald-600" aria-hidden>✔</span>
              Manualidades creativas
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 text-emerald-600" aria-hidden>✔</span>
              Gimcanas y juegos en equipo
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 text-emerald-600" aria-hidden>✔</span>
              Preparación de actuaciones musicales
            </li>
          </ul>
          <p className="mt-4 text-slate-600 font-medium">
            ¡Cada semana será diferente!
          </p>
        </section>

        {/* Diversión asegurada */}
        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Diversión asegurada
          </h2>
          <p className="mt-3 text-slate-600">
            Además de las actividades del Tour Estiufest, disfrutarán de:
          </p>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 text-emerald-600" aria-hidden>✔</span>
              Piscina
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 text-emerald-600" aria-hidden>✔</span>
              Salidas especiales
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 text-emerald-600" aria-hidden>✔</span>
              Actividades deportivas adaptadas a cada edad
            </li>
          </ul>
          <p className="mt-4 text-slate-600">
            Un equilibrio perfecto entre aprender, moverse y pasarlo en grande.
          </p>
        </section>

        {/* Aprender también forma parte de la aventura */}
        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Aprender también forma parte de la aventura
          </h2>
          <p className="mt-3 text-slate-600">En nuestro casal fomentamos:</p>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 text-emerald-600" aria-hidden>✔</span>
              Trabajo en equipo
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 text-emerald-600" aria-hidden>✔</span>
              Expresión artística
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 text-emerald-600" aria-hidden>✔</span>
              Imaginación y creatividad
            </li>
          </ul>
          <p className="mt-4 text-slate-600">
            También promovemos valores como la sostenibilidad, utilizando materiales reciclados en muchas actividades.
          </p>
        </section>

        {/* Gran Festival Final: ESTIUFEST */}
        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Gran Festival Final: ESTIUFEST
          </h2>
          <p className="mt-3 text-slate-600">
            El verano terminará con un festival espectacular creado por los propios niños y niñas.
          </p>
          <p className="mt-3 text-slate-600">
            Un momento único donde podrán mostrar todo lo que han aprendido y vivido durante el casal.
          </p>
        </section>

        {/* Tancament i CTA */}
        <section className="mt-12 border-t border-slate-200 pt-10 text-center">
          <p className="text-lg font-medium text-slate-700">
            Un verano lleno de música, aventuras y recuerdos inolvidables.
          </p>
          <p className="mt-3 text-xl font-semibold text-slate-900 sm:text-2xl">
            ¡Apunta a tus hijos y que empiece el Tour Estiufest!
          </p>
        </section>
      </div>

      <CasalsGallery />
    </>
  );
}
