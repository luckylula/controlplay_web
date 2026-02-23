import type { Metadata } from "next";
import Image from "next/image";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { TEAM } from "@/lib/team";

export const metadata: Metadata = {
  title: "Equip CP",
  description: "Control Play – Equip. Més de 200 professionals al servei de l’educació, l’esport i el lleure.",
};

export default function EquipCPPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="border-b border-slate-200 pb-8">
        <h1 className="text-3xl font-bold uppercase tracking-tight text-slate-900 sm:text-4xl">
          Equip Control Play
        </h1>
        <h2 className="mt-3 text-xl font-semibold text-slate-700">El nostre equip</h2>
      </header>

      <div className="mt-8 space-y-6 text-slate-600">
        <p className="text-lg leading-relaxed">
          A Control Play Sports som un equip compromès amb l&apos;educació, l&apos;esport i el desenvolupament integral dels infants i joves. Treballem per donar resposta a les necessitats reals dels centres educatius, adaptant-nos als nous temps i a les noves inquietuds de les famílies i les escoles.
        </p>
        <p className="leading-relaxed">
          Control Play està format per un equip de més de 200 professionals amb perfils multidisciplinaris dins els àmbits de l&apos;educació, l&apos;hostaleria, les Ciències de l&apos;Activitat Física i l&apos;Esport, el magisteri, la nutrició, la pedagogia, la psicologia i el lleure educatiu. Tots ells formen un equip sòlid, professional i vocacional, unit per la passió pel que fem.
        </p>
        <p className="leading-relaxed">
          Ens esforcem cada dia per millorar, innovar i oferir els millors serveis en menjadors escolars, activitats extraescolars i casals d&apos;estiu, sempre amb responsabilitat, qualitat i un tracte proper que generi confiança i tranquil·litat.
        </p>
      </div>

      <section className="mt-16">
        <p className="text-lg font-semibold text-slate-800">
          Les persones que formen part de Control Play Sports
        </p>
        <ul className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((person) => (
            <TeamMemberCard
              key={person.name}
              name={person.name}
              role={person.role}
              text={person.text}
              image={person.image}
            />
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t border-slate-200 pt-12">
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

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
            <Image
              src="/images/categories/contacto.png"
              alt="Seu Control Play – Sant Vicenç dels Horts"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] min-h-[280px] overflow-hidden rounded-xl bg-slate-200">
            <iframe
              title="Ubicació Control Play – Carrer Sant Miquel 63, Sant Vicenç dels Horts"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.894133731814!2d2.0066!3d41.3934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4be2e5d7b3b5f%3A0x0!2sCarrer%20Sant%20Miquel%2C%2063%2C%2008620%20Sant%20Vicen%C3%A7%20dels%20Horts%2C%20Barcelona!5e0!3m2!1sca!2ses!4v1"
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
  );
}
