"use client";

import Image from "next/image";
import Link from "next/link";

export type ValorCard = {
  title: string;
  description: string;
  image?: string;
  /** Si és true, no es mostra el quadrat d'imatge/lletra a la part superior */
  hideImage?: boolean;
  /** Posició de la imatge: esquerra (per defecte) o dreta */
  imagePosition?: "left" | "right";
  /** Si és true, el quadrat de la imatge és més ample (format rectangle) */
  imageWide?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
};

const VALORS: ValorCard[] = [
  {
    title: "Per què treballar amb nosaltres?",
    description:
      "A Control Play fomentem un entorn de treball dinàmic, humà i orientat a l'excel·lència, on cada professional aporta el seu talent i construeix el seu creixement professional. Aquí podràs:\n\n✔ Participar en projectes formatius, esportius i recreatius que impacten positivament en la comunitat.\n✔ Col·laborar amb un equip divers i motivat.\n✔ Desenvolupar la teva carrera amb oportunitats d'aprenentatge continu.\n✔ Formar part d'una empresa amb visió educativa, social i professional.",
    hideImage: true,
  },
  {
    title: "Qui busquem?",
    description:
      "Busquem persones:\n\n✔ Amb passió per l'educació, l'esport i l'entreteniment.\n✔ Professionals responsables, proactius i amb capacitat per treballar en equip.\n✔ Amb empatia, creativitat i ganes d'aportar solucions.\n✔ Amb disponibilitat per adaptar-se a projectes diversos i desafiadors.\n\nSi t'agrada fer que cada dia compti, aquest és el teu lloc.",
    hideImage: true,
  },
  {
    title: "Vols formar part del nostre equip?",
    description:
      "Si t'entusiasma treballar en un entorn on el teu esforç es tradueix en experiències memorables per a infants, joves i centres educatius… volem conèixer-te!\n\nEnvia'ns el teu CV juntament amb una carta on ens expliquis què et motiva de Control Play i com pots aportar valor al nostre equip.",
    image: "/images/unete-a-lequip/unete3.png",
    imageWide: true,
  },
  {
    title: "Contacte",
    description:
      "Teniu preguntes o voleu enviar-nos el vostre CV? Omple el formulari de contacte i et respondrem el més aviat possible. Estem aquí per ajudar-vos.",
    image: "/images/unete-a-lequip/unete2.png",
    imagePosition: "right",
    ctaHref: "/contacte",
    ctaLabel: "Anar al formulari de contacte",
  },
];

export function ValorsEmpresa({ valors = VALORS }: { valors?: ValorCard[] }) {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
      aria-label="Valors de l'empresa"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.18fr_0.82fr] md:grid-rows-[1.12fr_0.88fr] md:gap-8">
        {valors.map((valor) => (
          <article
            key={valor.title}
            className={`relative flex min-h-0 flex-col overflow-visible rounded-3xl bg-blue-900 shadow-xl ${
              valor.cardWide
                ? "p-6 pb-20 sm:p-8 sm:pb-24 md:p-8 md:pb-28 lg:p-10 lg:pb-32"
                : "p-6 pb-10 sm:p-8 sm:pb-12 md:p-8 md:pb-14 lg:p-10 lg:pb-[60px]"
            } ${
              valor.hideImage ? "pt-6 sm:pt-8 md:pt-8 lg:pt-10" : "pt-24 sm:pt-28 md:pt-28 lg:pt-32"
            } ${valor.cardWide ? "md:col-span-2 md:min-h-[28rem] lg:min-h-[30rem]" : ""}`}
          >
            {!valor.hideImage && (
              <div
                className={`absolute top-0 z-10 -translate-y-1/2 ${
                  valor.imagePosition === "right"
                    ? "right-6 sm:right-8"
                    : "left-6 sm:left-8"
                }`}
              >
                {valor.image ? (
                  <div
                    className={`relative overflow-hidden rounded-2xl border-4 border-white shadow-lg ${
                      valor.imageWide
                        ? "h-36 w-52 sm:h-40 sm:w-60 lg:h-44 lg:w-72"
                        : "h-36 w-36 sm:h-40 sm:w-40 lg:h-44 lg:w-44"
                    }`}
                  >
                    <Image
                      src={valor.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes={valor.imageWide ? "288px" : "176px"}
                    />
                  </div>
                ) : (
                  <div
                    className={`flex items-center justify-center rounded-2xl border-4 border-white bg-blue-700 shadow-lg ${
                      valor.imageWide
                        ? "h-36 w-52 sm:h-40 sm:w-60 lg:h-44 lg:w-72"
                        : "h-36 w-36 sm:h-40 sm:w-40 lg:h-44 lg:w-44"
                    }`}
                    aria-hidden
                  >
                    <span className="text-4xl font-bold text-white sm:text-5xl">
                      {valor.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            )}

            <h3 className="text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
              {valor.title}
            </h3>
            <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-white/95">
              {valor.description}
            </p>
            {valor.ctaHref && valor.ctaLabel && (
              <Link
                href={valor.ctaHref}
                className="mt-6 inline-flex w-fit items-center justify-center rounded-lg border-2 border-white/80 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                {valor.ctaLabel}
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
