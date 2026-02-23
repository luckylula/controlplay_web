import type { Metadata } from "next";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { TEAM } from "@/lib/team";

export const metadata: Metadata = {
  title: "Equip CP",
  description: "Control Play – Qui som. Equip compromès amb el món educatiu, esportiu i lúdic.",
};

export default function EquipCPPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="border-b border-slate-200 pb-8">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Sobre nosaltres</h1>
        <h2 className="mt-2 text-xl font-semibold text-slate-700">Qui Som?</h2>
      </header>

      <div id="qui-som-text" className="mt-8 space-y-6 text-slate-600">
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

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-900">Equip</h2>
        <p className="mt-2 text-slate-600">
          Les persones que formen part de Control Play Sports.
        </p>
        <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
}
