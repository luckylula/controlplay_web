import Image from "next/image";
import { HeroVideoCarousel } from "@/components/HeroVideoCarousel";
import { CategoriesWithMascot } from "@/components/CategoriesWithMascot";
import { ContactForm } from "@/components/ContactForm";
import { contact } from "@/lib/navigation";

/** Vídeos de portada en public/images/portada/. Logo i text sota cada vídeo. */
const CATEGORIES = [
  {
    title: "Menjadors escolars",
    description:
      "Donem continuïtat al Projecte Educatiu del Centre també durant l'espai de menjador, convertint-lo en un moment d'aprenentatge i convivència. Oferim un menú de qualitat pensat per als clients més exigents: els vostres fills i filles.",
    href: "/menjadors-escolars",
    video: "/images/portada/menjadors%20escolars.mp4",
    fallback: "/images/logos/CP%20CUINA.png",
    logo: "/images/logos/CP%20CUINA.png",
  },
  {
    title: "Activitats Extraescolars",
    description:
      "Dissenyem i organitzem un ampli ventall d'activitats extraescolars, tant esportives com formatives i lúdiques, fomentant el desenvolupament i els talents de cada infant perquè descobreixi, aprengui i gaudeixi al seu ritme.",
    href: "/activitats-extraescolars",
    video: "/images/portada/activitats%20extraescolars.mp4",
    fallback: "/images/logos/logo%20extraescolars%20circulo.png",
    logo: "/images/logos/logo%20extraescolars%20circulo.png",
    logoOnVideo: true, // logo a la cantonada superior dreta del vídeo (prova)
  },
  {
    title: "Casals",
    description:
      "Els nostres casals estan dissenyats perquè els infants gaudeixin intensament de les seves vacances, amb activitats pensades per divertir-se, descobrir i aprendre en un entorn segur i acollidor.",
    href: "/casals",
    video: "/images/portada/casals.mp4",
    fallback: "/images/logos/CP%20CASALS.png",
    logo: "/images/logos/CP%20CASALS.png",
    logoBelowVideo: true, // prova: logo sota el vídeo en lloc de damunt
  },
  {
    title: "Botiga On-line",
    description:
      "Distribuïm material esportiu a tot Espanya per a col·lectius com escoles, clubs esportius, ajuntaments, instal·lacions esportives, piscines i gimnasos, amb productes de qualitat i un servei professional d'assessorament de confiança.",
    href: "https://cpmaterialdeportivo.com/",
    video: "/images/portada/botiga.mp4",
    fallback: "/images/logos/CP%20SERVEIS%20EDUCATIUS.png",
    logo: "/images/logos/CP%20SERVEIS%20EDUCATIUS.png",
    external: true,
    videoScale: 1.35,
    logoAlsoAtBottom: true, // prova: logo també sota el text
  },
] as const;

export default function Home() {
  return (
    <>
      {/* Hero – carrusel de vídeos (videoportada1, 2, 3...) amb el text al damunt */}
      <HeroVideoCarousel />

      {/* Categories – 4 icons: ocupa tota l’amplada (escala amb la pantalla) */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <CategoriesWithMascot categories={CATEGORIES} />
        </div>
      </section>

      {/* Sobre nosaltres – només text (les fotos de l&apos;equip estan a /equip-cp) */}
      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Sobre nosaltres – Equip Control Play
          </h2>
          <div className="mt-8 space-y-6 text-slate-600">
            <p className="text-lg leading-relaxed">
              A Control Play Sports som un equip compromès amb el món educatiu, esportiu i lúdic. Treballem cada dia per donar resposta a les necessitats de centres, famílies i entitats, amb proximitat, responsabilitat i passió pel que fem.
            </p>
            <p className="leading-relaxed">
              Comptem amb un equip multidisciplinari de professionals amb més de 20 anys d&apos;experiència, que aporta coneixement, vocació i responsabilitat en cada projecte.
            </p>
            <p className="leading-relaxed">
              Oferim els nostres serveis amb les màximes garanties de professionalitat, legalitat i rigor, perquè la confiança i la tranquil·litat de les famílies i dels centres són la nostra prioritat.
            </p>
          </div>
        </div>
      </section>

      {/* Contacte – tres blocs mateixa mida, compactes */}
      <section className="bg-slate-900 py-6 text-white lg:py-8">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-5 px-4 sm:px-6 lg:h-[300px] lg:grid-cols-3 lg:gap-6 lg:px-6">
          <div className="relative min-h-[140px] overflow-hidden rounded-lg lg:min-h-0 lg:h-full">
            <Image
              src="/images/categories/contacto.png"
              alt="Control Play"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="flex min-h-0 flex-col justify-center overflow-hidden rounded-lg bg-slate-800/50 px-4 py-3 lg:px-5 lg:py-4">
            <h2 className="text-lg font-bold sm:text-xl">Contacte</h2>
            <p className="mt-0.5 text-xs text-slate-300">
              Teniu preguntes? Estem aquí per ajudar-vos.
            </p>
            <dl className="mt-2 space-y-1.5 text-xs">
              <div>
                <dt className="text-sm font-medium text-slate-400">Control Play</dt>
                <dd className="mt-0.5 text-slate-200">{contact.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-400">Telèfon oficina</dt>
                <dd>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-slate-200 hover:text-white">
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-400">Email</dt>
                <dd>
                  <a href={`mailto:${contact.email}`} className="text-slate-200 hover:text-white">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-400">Horari d&apos;oficina</dt>
                <dd className="mt-0.5 space-y-0.5 text-slate-300">
                  {contact.officeHours.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex min-h-0 flex-col justify-center overflow-hidden rounded-lg bg-slate-800/50 px-4 py-3 lg:px-5 lg:py-4">
            <h2 className="text-sm font-bold uppercase tracking-wide text-white sm:text-base">
              Envieu-nos el vostre missatge
            </h2>
            <div className="mt-2 min-h-0 flex-1 overflow-y-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
