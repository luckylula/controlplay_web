import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Equip CP",
  description: "Control Play – Equip. Més de 200 professionals al servei de l’educació, l’esport i el lleure.",
};

export default function EquipCPPage() {
  return (
    <>
      {/* Franja superior – vídeo (com a les altres seccions) */}
      <section className="relative h-[360px] w-full overflow-hidden border-b border-slate-200 sm:h-[420px] lg:h-[480px]">
        <video
          src="/images/equip/staff%20video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          aria-label="Equip Control Play"
        />
      </section>

      <div className="mx-auto w-full max-w-[1920px] px-4 py-16 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <header className="border-b border-slate-200 pb-8">
        <h1 className="text-3xl font-bold uppercase tracking-tight text-slate-900 sm:text-4xl">
          Equip Control Play
        </h1>
        <h2 className="mt-3 text-xl font-semibold text-slate-700">El nostre equip</h2>
      </header>

      <div className="mt-8 w-full space-y-6 text-slate-600">
        <p className="text-base leading-relaxed">
          A Control Play Sports som un equip compromès amb l&apos;educació, l&apos;esport i el desenvolupament integral dels infants i joves. Treballem per donar resposta a les necessitats reals dels centres educatius, adaptant-nos als nous temps i a les noves inquietuds de les famílies i les escoles.
        </p>
        <p className="text-base leading-relaxed">
          Control Play està format per un equip de més de 200 professionals amb perfils multidisciplinaris dins els àmbits de l&apos;educació, l&apos;hostaleria, les Ciències de l&apos;Activitat Física i l&apos;Esport, el magisteri, la nutrició, la pedagogia, la psicologia i el lleure educatiu. Tots ells formen un equip sòlid, professional i vocacional, unit per la passió pel que fem.
        </p>
        <p className="text-base leading-relaxed">
          Ens esforcem cada dia per millorar, innovar i oferir els millors serveis en menjadors escolars, activitats extraescolars i casals d&apos;estiu, sempre amb responsabilitat, qualitat i un tracte proper que generi confiança i tranquil·litat.
        </p>
      </div>

      <section className="mt-16 border-t border-slate-200 pt-12">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.2fr_minmax(0,1fr)]">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-slate-900 sm:text-3xl">
              Control Play – Oficines
            </h2>
            <div className="mt-6 space-y-6 text-slate-600">
            <p className="leading-relaxed">
              La nostra seu es troba a Sant Vicenç dels Horts (Baix Llobregat), on centralitzem l&apos;administració i la gestió general al Carrer Sant Miquel, 63. Estarem encantats de rebre-us sempre que vulgueu venir a conèixer-nos.
            </p>
            <p className="leading-relaxed">
              Tot i això, la nostra manera de treballar va molt més enllà de la nostra oficina. Ens desplacem als centres educatius per conèixer de prop la seva realitat i les seves necessitats, perquè creiem que només així podem oferir un servei realment personalitzat i de qualitat.
            </p>
            <p className="leading-relaxed">
              Sempre comptareu amb el nostre equip humà en tots els centres on treballem, garantint presència, proximitat i un acompanyament constant.
            </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 lg:aspect-[3/2]">
            <Image
              src="/images/categories/contacto.png"
              alt="Seu Control Play – Sant Vicenç dels Horts"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="mt-16 border-t border-slate-200 pt-12">
        <h2 className="text-2xl font-bold uppercase tracking-tight text-slate-900 sm:text-3xl">
          Situació
        </h2>
        <div className="mt-8 w-full max-w-xl">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200 lg:aspect-[3/2]">
            <iframe
              title="Ubicació Control Play – Carrer Sant Miquel 63, Sant Vicenç dels Horts"
              src="https://maps.google.com/maps?q=Carrer+Sant+Miquel+63,+08620+Sant+Vicen%C3%A7+dels+Horts,+Barcelona&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
