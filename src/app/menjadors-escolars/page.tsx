import type { Metadata } from "next";
import Image from "next/image";
import { MenjadorsVideoCarousel } from "@/components/MenjadorsVideoCarousel";

export const metadata: Metadata = {
  title: "Menjadors Escolars",
  description:
    "Control Play Cuina – Gestió de menjadors escolars. Continuïtat educativa, alimentació saludable i menús de qualitat. Transparència amb famílies i escola.",
};

export default function MenjadorsEscolarsPage() {
  return (
    <>
      <MenjadorsVideoCarousel />

      <div className="mx-auto w-full max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Servei de Menjador Escolar
          </h1>
          <Image
            src="/images/logos/CP%20CUINA.png"
            alt="Control Play Cuina"
            width={280}
            height={80}
            className="mt-6 h-16 w-auto sm:h-20"
          />
        </div>

        {/* 1. Text (intro) | Photo */}
        <section className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_0.92fr] lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Molt més que un menjador escolar
            </h2>
            <p className="text-slate-600">
              Aquí no només es dina.<br />
              Aquí s&apos;aprèn.<br />
              Aquí es comparteix.<br />
              Aquí es creix.
            </p>
            <p className="text-slate-600">
              A Control Play Cuina entenem el temps de menjador com una part essencial del dia a dia a l&apos;escola. No és només un moment per alimentar-se, sinó també un espai educatiu on els infants continuen desenvolupant habilitats, valors i relacions.
            </p>
            <p className="text-slate-600">
              Convertim el menjador en un entorn acollidor, educatiu i saludable, on cada infant se sent acompanyat i respectat. Un espai on es fomenten els bons hàbits, la convivència i el respecte pels altres.
            </p>
            <p className="text-slate-600">
              Cada dia treballem perquè aquest moment sigui tranquil, organitzat i agradable, afavorint un ambient positiu on els nens i nenes puguin gaudir del menjar, compartir amb els seus companys i créixer com a persones.
            </p>
            <p className="text-slate-600">
              Perquè el menjador escolar no és només un servei.<br />
              És també un espai de vida dins l&apos;escola.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-amber-50/80 lg:-rotate-2">
            <Image
              src="/images/menjadors/menjador1.png"
              alt="Menjador escolar"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
        </section>

        {/* 2. Photo | Text (Alimentem el seu futur) */}
        <section className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.92fr_1fr] lg:gap-12">
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl bg-amber-50/80 lg:order-1 lg:rotate-2">
            <Image
              src="/images/menjadors/menjador2.png"
              alt="Menjador i alimentació"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
          <div className="order-2 space-y-4 lg:order-2 lg:pl-6">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Alimentem el seu futur
            </h2>
            <p className="text-slate-600">
              Sabem que cada àpat compta en el creixement i el desenvolupament dels infants. Per això posem una atenció especial en la qualitat dels aliments, en l&apos;equilibri nutricional i en la manera com es preparen els plats.
            </p>
            <p className="text-slate-600">
              La nostra proposta gastronòmica es basa en una cuina saludable, equilibrada i adaptada a les necessitats de l&apos;etapa escolar, pensada per ajudar els infants a créixer forts, actius i amb bons hàbits alimentaris.
            </p>
            <p className="text-slate-600">Per això oferim:</p>
            <ul className="space-y-1.5 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                Producte fresc i de temporada, prioritzant ingredients naturals i de qualitat
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                Cuina elaborada amb oli d&apos;oliva, base de la dieta mediterrània
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                Carn fresca, evitant l&apos;ús de productes congelats innecessaris
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                Peix adaptat a l&apos;etapa escolar, equilibrant nutrició i acceptació dels infants
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                Productes Km0 i ecològics sempre que és possible, fomentant la sostenibilitat i el consum responsable
              </li>
            </ul>
            <p className="text-slate-600">
              Apostem per una cuina real, honesta i equilibrada, sense artificis ni improvisacions.
            </p>
            <p className="text-slate-600">
              Perquè alimentar bé avui és invertir en la salut del demà.
            </p>
          </div>
        </section>

        {/* 3. Text (Tranquil·litat) | Photo */}
        <section className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_0.92fr] lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Tranquil·litat per a les famílies
            </h2>
            <p className="text-slate-600">
              Sabem que confiar en el servei de menjador d&apos;una escola és una decisió important per a les famílies. Per això a Control Play Cuina treballem cada dia perquè aquesta confiança es basi en fets reals, transparència i professionalitat.
            </p>
            <p className="text-slate-600">
              La tranquil·litat de saber que els infants estan ben atesos, ben alimentats i en un entorn segur és una de les nostres prioritats.
            </p>
            <p className="text-slate-600">Per això garantim:</p>
            <ul className="space-y-1.5 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                Dietista-nutricionista col·legiada, responsable de l&apos;elaboració i revisió dels menús
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                Compliment estricte de la normativa sanitària i alimentària vigent
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                Controls de qualitat i auditories periòdiques del servei
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                Personal format i qualificat, amb experiència en l&apos;àmbit educatiu i alimentari
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-blue-600" aria-hidden>✔</span>
                Supervisió constant del funcionament del menjador
              </li>
            </ul>
            <p className="text-slate-600">
              Treballem amb rigor, responsabilitat i transparència, perquè les famílies puguin confiar plenament en el servei.
            </p>
            <p className="text-slate-600">
              Seguretat, professionalitat i confiança en cada detall.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-amber-50/80 lg:-rotate-2">
            <Image
              src="/images/menjadors/menjador3.png"
              alt="Menjador i famílies"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
        </section>

        {/* 4. Photo | Text (Educació a taula) */}
        <section className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.92fr_1fr] lg:gap-12">
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl bg-amber-50/80 lg:order-1 lg:rotate-2">
            <Image
              src="/images/menjadors/menjador4.png"
              alt="Educació a taula"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
          <div className="order-2 space-y-4 lg:order-2 lg:pl-6">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Educació també a taula
            </h2>
            <p className="text-slate-600">
              El menjador escolar és també una aula més dins del centre educatiu. Un espai on els infants continuen aprenent, convivint i desenvolupant habilitats que formen part del seu creixement personal.
            </p>
            <p className="text-slate-600">
              Durant aquest temps, acompanyem els nens i nenes en l&apos;adquisició de bons hàbits i valors que els ajudaran al llarg de la seva vida.
            </p>
            <p className="text-slate-600">Treballem aspectes com:</p>
            <ul className="list-inside list-disc space-y-1 text-slate-600">
              <li>Hàbits alimentaris saludables</li>
              <li>Autonomia personal en el moment de menjar</li>
              <li>Convivència i respecte entre companys</li>
              <li>Responsabilitat i cura dels espais comuns</li>
              <li>Educació emocional i gestió de situacions quotidianes</li>
            </ul>
            <p className="text-slate-600">
              Els nostres monitors i monitores acompanyen aquest procés amb paciència, empatia i coherència educativa, adaptant-se a cada etapa i a cada infant.
            </p>
            <p className="text-slate-600">
              Perquè menjar bé també és aprendre a conviure, respectar i créixer.
            </p>
          </div>
        </section>

        {/* 5. Text (Equip amb vocació) | Photo */}
        <section className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_0.92fr] lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Equip amb vocació
            </h2>
            <p className="text-slate-600">
              Darrere de cada menjador escolar hi ha un equip humà compromès.
            </p>
            <p className="text-slate-600">
              A Control Play Cuina comptem amb professionals que combinen experiència, vocació educativa i passió per la seva feina. Persones que entenen que treballar amb infants implica responsabilitat, sensibilitat i dedicació.
            </p>
            <p className="text-slate-600">
              Som mestres.<br />
              Som professionals de la restauració.<br />
              Som educadors.<br />
              I sobretot, som un equip que treballa amb il·lusió cada dia.
            </p>
            <p className="text-slate-600">
              Ens adaptem a la realitat de cada centre i ens integrem en el seu projecte educatiu, treballant de manera coordinada amb l&apos;equip directiu i amb les famílies.
            </p>
            <p className="text-slate-600">
              Creiem en el treball en equip, la comunicació i la proximitat, perquè només així es construeixen serveis de qualitat i confiança.
            </p>
            <p className="text-slate-600">
              Caminem sempre al costat de l&apos;escola i de la seva comunitat educativa.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-amber-50/80 lg:-rotate-2">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
              src="/images/play/play%20video%20menjadors.mp4"
            />
          </div>
        </section>

        {/* 6. Photo | Text (Dinàmic. Organitzat. Viu.) */}
        <section className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.92fr_1fr] lg:gap-12">
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl bg-amber-50/80 lg:order-1 lg:rotate-2">
            <Image
              src="/images/menjadors/menjador5.png"
              alt="Menjador dinàmic"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
          <div className="order-2 space-y-4 lg:order-2 lg:pl-6">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Dinàmic. Organitzat. Viu.
            </h2>
            <p className="text-slate-600">
              El temps de menjador també pot ser un moment d&apos;experiència, participació i descobriment.
            </p>
            <p className="text-slate-600">
              Per això dissenyem un programa d&apos;activitats que fa del menjador un espai actiu, dinàmic i educatiu, adaptat a les diferents edats dels infants.
            </p>
            <p className="text-slate-600">Organitzem:</p>
            <ul className="list-inside list-disc space-y-1 text-slate-600">
              <li>Activitats setmanals i jocs educatius</li>
              <li>Projectes especials relacionats amb l&apos;alimentació i la salut</li>
              <li>Tallers sobre hàbits alimentaris i sostenibilitat</li>
              <li>Assemblees amb els infants per escoltar la seva veu</li>
              <li>Celebracions i festes escolars</li>
              <li>Activitats i dinàmiques en anglès</li>
            </ul>
            <p className="text-slate-600">
              Aquestes propostes permeten que els nens i nenes visquin el menjador com un espai participatiu, divertit i ple de sentit educatiu.
            </p>
            <p className="text-slate-600">
              Perquè el menjador també pot ser un espai per aprendre, expressar-se i compartir.
            </p>
          </div>
        </section>

      </div>

      {/* Franja final amb imatge */}
      <section className="relative min-h-[280px] w-full overflow-hidden border-t border-slate-200 sm:min-h-[320px] lg:min-h-[360px]">
        <Image
          src="/images/menjadors/menjador2.png"
          alt="Menjador escolar"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative flex min-h-[280px] flex-col items-center justify-center px-4 py-12 text-center sm:min-h-[320px] sm:py-16 lg:min-h-[360px]">
          <h2 className="text-2xl font-bold text-white drop-shadow-md sm:text-3xl lg:text-4xl">
            Perquè el menjador també és escola.
          </h2>
          <p className="mt-3 text-lg text-white/95 drop-shadow-sm sm:text-xl">
            I cada dia és una oportunitat per fer-ho millor.
          </p>
        </div>
      </section>
    </>
  );
}
