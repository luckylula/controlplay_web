import Link from "next/link";
import { CoverVideo } from "@/components/CoverVideo";
import { HeroVideoCarousel } from "@/components/HeroVideoCarousel";

/** Vídeos del carrusel del hero (videoportada1, videoportada2, videoportada3, ...). Afegeix més rutes quan en tinguis. */
const HERO_VIDEOS = [
  "/images/portada/videoportada1.mp4",
  "/images/portada/videoportada2.mp4",
  "/images/portada/videoportada3.mp4",
];

/** Vídeos de portada en public/images/portada/. Mismo tamaño que cpmaterialdeportivo.com */
const CATEGORIES = [
  {
    title: "Menjadors escolars",
    description: "Continuïtat del Plà Educatiu del Centre durant l'espai del menjador. Menú de qualitat.",
    href: "/menjadors-escolars",
    video: "/images/portada/menjadors%20escolars.mp4",
    fallback: "/images/logos/CP%20CUINA.png",
  },
  {
    title: "Activitats extraescolars",
    description: "Esportives, formatives i lúdiques. Un ventall d'opcions per a l'escola.",
    href: "/activitats-extraescolars",
    video: "/images/portada/activitats%20extraescolars.mp4",
    fallback: "/images/logos/CP%20EXTRAESCOLARS.png",
  },
  {
    title: "Casals",
    description: "Dissenyats perquè els nens gaudeixin les vacances. Divertir-se, descobrir i aprendre.",
    href: "/casals",
    video: "/images/portada/casals.mp4",
    fallback: "/images/logos/CP%20SERVEIS%20EDUCATIUS.png",
  },
  {
    title: "Botiga on-line",
    description: "Material esportiu per a col·legis, clubs, ajuntaments i instal·lacions. Tot Espanya.",
    href: "https://cpmaterialdeportivo.com/",
    video: "/images/portada/botiga.mp4",
    fallback: "/images/logos/CP%20SERVEIS%20EDUCATIUS.png",
    external: true,
    videoScale: 1.35,
  },
] as const;

export default function Home() {
  return (
    <>
      {/* Hero – carrusel de vídeos (videoportada1, 2, 3, ...) amb el text al damunt */}
      <HeroVideoCarousel videos={HERO_VIDEOS} />

      {/* Categories – 4 blocks with video + text, like cpmaterialdeportivo.com */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((item) => {
              const content = (
                <>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl bg-slate-100">
                    <CoverVideo
                      src={item.video}
                      fallbackSrc={item.fallback}
                      className="object-cover object-center transition group-hover:scale-105"
                      scale={"videoScale" in item ? item.videoScale : undefined}
                    />
                  </div>
                  <div className="rounded-b-xl border border-t-0 border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                  </div>
                </>
              );
              const className =
                "group block rounded-xl overflow-hidden transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2";
              if (item.external) {
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {content}
                  </a>
                );
              }
              return (
                <Link key={item.title} href={item.href} className={className}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Contacta&apos;ns</h2>
          <p className="mt-2 text-slate-600">622 61 33 93 · info@controlplaysports.com</p>
          <Link
            href="/contacte"
            className="mt-6 inline-block rounded-lg bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800"
          >
            Enviar missatge
          </Link>
        </div>
      </section>
    </>
  );
}
