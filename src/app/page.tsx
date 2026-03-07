import Image from "next/image";
import Link from "next/link";
import { HeroVideoCarousel } from "@/components/HeroVideoCarousel";
import { CategoriesWithMascot } from "@/components/CategoriesWithMascot";
import { ContactForm } from "@/components/ContactForm";
import { ExtraescolarsPortadaCarousel } from "@/components/ExtraescolarsPortadaCarousel";
import { NoticiesWithWordPress } from "@/components/NoticiesWithWordPress";
import { contact } from "@/lib/navigation";
import { COVER_STRIP_HEIGHT, CONTENT_SECTION_HEIGHT } from "@/lib/layout";

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
    playVideo: "/images/play/play%20video%20menjadors.mp4",
  },
  {
    title: "Activitats Extraescolars",
    description:
      "Dissenyem i organitzem un ampli ventall d'activitats extraescolars, tant esportives com formatives i lúdiques, fomentant el desenvolupament i els talents de cada infant perquè descobreixi, aprengui i gaudeixi al seu ritme.",
    href: "/activitats-extraescolars",
    video: "/images/portada/activitats%20extraescolars.mp4",
    fallback: "/images/logos/CP%20EXTRAESCOLARS.png",
    logo: "/images/logos/CP%20EXTRAESCOLARS.png",
    playVideo: "/images/play/play%20video%20activitats%20extraescolars.mp4",
  },
  {
    title: "Casals",
    description:
      "Els nostres casals estan dissenyats perquè els infants gaudeixin intensament de les seves vacances, amb activitats pensades per divertir-se, descobrir i aprendre en un entorn segur i acollidor.",
    href: "/casals",
    video: "/images/portada/casals.mp4",
    fallback: "/images/logos/CP%20CASALS.png",
    logo: "/images/logos/CP%20CASALS.png",
    playVideo: "/images/play/play%20video%20casals.mp4",
  },
  {
    title: "Botiga On-line",
    description:
      "Distribuïm material esportiu a tot Espanya per a col·lectius com escoles, clubs esportius, ajuntaments, instal·lacions esportives, piscines i gimnasos, amb productes de qualitat i un servei professional d'assessorament de confiança.",
    href: "https://cpmaterialdeportivo.com/",
    video: "/images/portada/botiga.mp4",
    fallback: "/images/logos/logo%20cp%20material%20azul.png",
    logo: "/images/logos/logo%20cp%20material%20azul.png",
    external: true,
    videoScale: 1.4,
    playVideo: "/images/play/play%20video%20botiga.mp4",
  },
] as const;

export default function Home() {
  return (
    <>
      {/* Hero – carrusel de vídeos (videoportada1, 2, 3...) amb el text al damunt */}
      <HeroVideoCarousel />

      {/* Categories – 4 icons – d’costat a costat; arriben als vores de la pàgina */}
      <section className={`flex flex-col w-full overflow-visible ${CONTENT_SECTION_HEIGHT} lg:overflow-hidden`}>
        <div className="mx-auto flex w-full flex-col px-4 pt-6 pb-2 sm:px-6 sm:pt-8 lg:pt-[2cm] lg:px-8">
          <CategoriesWithMascot categories={CATEGORIES} />
        </div>
      </section>

      {/* Equip Control Play – mateix alt que la resta de franjes; s’expandeix en pantalles grans */}
      <section className={`flex flex-col w-full overflow-visible border-t border-slate-200 bg-white ${CONTENT_SECTION_HEIGHT} lg:overflow-hidden`}>
        <div className="mx-auto flex w-full flex-1 flex-col justify-center px-4 py-6 sm:px-6 sm:py-8 lg:min-h-0 lg:overflow-hidden lg:px-8 lg:py-10">
          <h2 className="shrink-0 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
            Equip Control Play
          </h2>
          <div className="mt-4 grid min-h-0 flex-1 grid-cols-1 items-stretch gap-4 sm:mt-6 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_1.2fr] lg:gap-8">
            <div className="relative min-h-[200px] min-w-0 flex-1 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 sm:min-h-[260px] lg:min-h-0">
              <Image
                src="/images/portada/staff.png"
                alt="Equip Control Play"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) 100vw, 40vw"
              />
            </div>
            <div className="min-h-0 min-w-0 space-y-3 overflow-y-auto text-slate-600 sm:space-y-4">
              <p className="text-sm leading-relaxed lg:text-base">
                A Control Play Sports som un equip compromès amb el món educatiu, esportiu i lúdic. Treballem cada dia amb l&apos;objectiu de donar resposta a les necessitats dels centres educatius, de les famílies i de les entitats, sempre amb proximitat, responsabilitat i una gran passió per la nostra feina.
              </p>
              <p className="text-sm leading-relaxed lg:text-base">
                La nostra tasca es desenvolupa en el dia a dia dels centres escolars, formant part activa de la seva comunitat educativa. Col·laborem estretament amb les AFAs i amb els equips directius dels centres, treballant conjuntament per construir projectes educatius i activitats que aportin valor real als infants i a les seves famílies. Aquesta relació de confiança i cooperació ens permet adaptar-nos a cada realitat i garantir un servei coherent amb els valors i objectius de cada escola.
              </p>
              <p className="text-sm leading-relaxed lg:text-base">
                Comptem amb un equip multidisciplinari de professionals amb més de 20 anys d&apos;experiència, format per persones amb vocació educativa, coneixement pedagògic i una gran responsabilitat en la seva tasca. Creiem fermament que l&apos;educació, l&apos;esport i el joc són eines fonamentals per al desenvolupament integral dels infants, i per això treballem perquè cada activitat sigui una experiència enriquidora.
              </p>
              <p className="text-sm leading-relaxed lg:text-base">
                A Control Play Sports posem especial ènfasi en la qualitat dels serveis, la seguretat i les garanties professionals. Tots els nostres projectes es desenvolupen amb rigor, complint amb la normativa vigent i assegurant entorns segurs i cuidats per als infants. La tranquil·litat de les famílies i dels centres és una prioritat per a nosaltres.
              </p>
              <p className="text-sm leading-relaxed lg:text-base">
                Per sobre de tot, treballem amb una finalitat clara: contribuir a la felicitat, el benestar i el creixement dels nens i nenes. Volem que cada espai educatiu, esportiu o lúdic sigui un lloc on els infants se sentin segurs, valorats i motivats per aprendre, jugar i créixer.
              </p>
              <p className="text-sm leading-relaxed lg:text-base">
                Aquesta manera de treballar, basada en la confiança, la proximitat i la professionalitat, és el que ens permet seguir construint cada dia projectes educatius de qualitat al costat de les escoles i les seves comunitats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Franja Extraescolars – carrusel de 3 vídeos */}
      <ExtraescolarsPortadaCarousel />

      {/* Notícies – targetes desplaçables (estàtiques + WordPress); la fletxa enllaça a Totes les notícies */}
      <NoticiesWithWordPress
        title="Descobreix les nostres notícies"
        description="Novetats i informació del nostre dia a dia."
        ctaHref="/noticies"
        ctaLabel="Totes les notícies"
      />

      {/* Contacte – en mòbil creix amb el contingut; en desktop franja fixa */}
      <section id="contacte" className="flex min-h-0 w-full flex-col overflow-visible py-10 sm:py-12 lg:h-[640px] xl:h-[720px] lg:min-h-[640px] lg:items-center lg:overflow-hidden bg-slate-900 text-white">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:gap-6 lg:px-8">
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
          <div className="flex min-h-0 flex-col justify-center overflow-hidden rounded-lg bg-slate-800/50 px-4 py-3 lg:pl-[1cm] lg:pr-5 lg:py-4">
            <h2 className="text-center text-3xl font-bold sm:text-4xl lg:text-5xl">Contacte</h2>
            <p className="mt-0 text-[15px] font-semibold text-white sm:text-[17px]">
              Teniu preguntes? Estem aquí per ajudar-vos.
            </p>
            <dl className="mt-6 space-y-1.5 text-left text-sm">
              <div>
                <dt className="font-medium text-slate-400">Control Play</dt>
                <dd className="mt-0.5 text-slate-200">{contact.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-400">Telèfon oficina</dt>
                <dd>
                  <a href={`tel:${contact.officePhone.replace(/\s/g, "")}`} className="text-slate-200 hover:text-white">
                    {contact.officePhone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-400">Telèfon mòbil</dt>
                <dd>
                  <a href={`tel:+34${contact.phone.replace(/\s/g, "")}`} className="text-slate-200 hover:text-white">
                    +34 {contact.phone}
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
            <h2 className="text-base font-bold uppercase tracking-wide text-white sm:text-lg">
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
