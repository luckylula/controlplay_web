import type { Metadata } from "next";
import Link from "next/link";
import { mainNav } from "@/lib/navigation";

const extraescolarsItem = mainNav.find((n) => n.label === "Activitats Extraescolars");
const children = extraescolarsItem?.children ?? [];

/** Colors per a la finestra de cada activitat (quan no hi ha imatge) */
const CARD_COLORS = [
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-violet-500 to-purple-600",
  "from-rose-500 to-pink-600",
  "from-sky-500 to-blue-600",
  "from-lime-500 to-green-600",
  "from-fuchsia-500 to-pink-600",
  "from-cyan-500 to-teal-600",
  "from-indigo-500 to-blue-600",
  "from-orange-500 to-amber-600",
  "from-emerald-600 to-green-700",
  "from-violet-600 to-purple-700",
  "from-rose-600 to-red-600",
  "from-sky-600 to-indigo-600",
  "from-amber-600 to-yellow-600",
];

export const metadata: Metadata = {
  title: "Activitats Extraescolars",
  description: "Activitats extraescolars esportives, formatives i lúdiques. English Time, Robòtica, Futbol Sala, Circ i Malabars i més.",
};

const EXTRAESCOLARS_VIDEO = "/images/extraescolars/video%20futbol%20sala.mp4";

/** Text breu sota el títol de cada activitat a la llista (slug → text). Es mostra sobre «Saber més». */
const INTRO_TEXTS: Record<string, string> = {
  "taekwondo-judo":
    "Disciplina, respecte i confiança en un mateix. En aquesta activitat els alumnes s'inicien en el Taekwondo o el Judo mentre desenvolupen la concentració, l'autocontrol i la coordinació. A través d'una metodologia adaptada a cada edat, el sensei fomenta valors com el respecte, el companyerisme i la superació personal. Una activitat perfecta per guanyar seguretat i créixer tant dins com fora del tatami.",
  "hip-hop-danses":
    "Moviment, ritme i molta energia! Una activitat pensada perquè els més petits descobreixin el món de la dansa d'una manera divertida i motivadora. A través de coreografies actuals i danses dinàmiques, treballem el sentit del ritme, la coordinació i l'expressió corporal. Ballem amb músiques variades, des de les més populars fins a les novetats del moment, perquè cada infant pugui expressar-se, guanyar confiança i gaudir compartint amb el grup. Una activitat per créixer, moure's i brillar amb llum pròpia.",
  "circ-malabars":
    "Imaginació, moviment i creativitat en acció. Una activitat pensada perquè els infants descobreixin el món del circ mentre desenvolupen el domini del cos i la coordinació amb diferents objectes. A través dels malabars, els equilibris i altres tècniques bàsiques, potenciem la concentració, l'agilitat i la confiança. El circ és un univers màgic i molt motivador que els permet expressar-se, superar reptes i gaudir aprenent en un ambient lúdic i estimulant.",
  multiesport:
    "Moure's, descobrir i aprendre jugant. L'activitat de Multiesport està pensada perquè els més petits desenvolupin les seves habilitats motrius i cognitives d'una manera divertida i natural. A través de jocs, circuits i activitats amb diferents tipus de pilota adaptades a la seva edat, treballem la coordinació, la percepció espacial i les destreses bàsiques. Una proposta variada i dinàmica que afavoreix el desenvolupament integral dels infants, tot assegurant que s'ho passin d'allò més bé mentre aprenen.",
  "hockey-mini-tennis-beisbol":
    "Descobrim nous esports, noves habilitats i nous reptes. En aquesta activitat els infants s'inicien en esports que es practiquen amb implement, com l'estic, la raqueta o el bat. A través del joc i d'activitats adaptades a l'etapa de Primària, treballem la coordinació, la precisió i el control corporal. Els implements es converteixen en una eina clau per potenciar el desenvolupament motriu, la concentració i el treball en equip, sempre en un ambient dinàmic i divertit on tothom pot aprendre i gaudir.",
  "basquet-handbol-voley":
    "Aprenem a jugar en equip i a créixer amb l'esport. Aquesta activitat d'iniciació esportiva permet als infants descobrir el bàsquet, l'handbol i el vòlei d'una manera progressiva i adaptada a la seva edat. Treballem la coordinació ull-mà, les habilitats tècniques bàsiques i la comprensió del joc. Cada trimestre ens centrem en un esport diferent, aprofundint tant en els fonaments tècnics com en els aspectes tàctics, sempre des d'una mirada educativa, participativa i motivadora.",
  patins:
    "Equilibri, autonomia i confiança sobre rodes. L'activitat de patinatge ajuda els infants a desenvolupar l'equilibri, la coordinació i el control del cos d'una manera divertida i segura. A través de jocs i exercicis adaptats a cada nivell, els nens i nenes guanyen confiança i superen nous reptes progressivament. Més enllà de la tècnica, el patinatge fomenta la constància, l'esforç i el respecte pel grup, convertint cada sessió en una oportunitat per créixer, divertir-se i sentir-se capaços.",
  "futbol-sala":
    "Passió, equip i aprenentatge en cada entrenament. El Futbol Sala és un esport col·lectiu dinàmic i apassionant, ideal per desenvolupar la coordinació, l'agilitat i la presa de decisions. A través d'una metodologia formativa i adaptada a cada edat, els infants aprenen els fonaments tècnics i tàctics mentre gaudeixen del joc en equip. El projecte compta amb la coordinació de Jordi Torras, referent del Futbol Sala, que supervisa el procés formatiu perquè cada jugador i jugadora creixi tant esportivament com personalment. Una activitat per viure l'esport amb il·lusió, compromís i esperit d'equip.",
  divertaller:
    "Creativitat i aprenentatge que sumen. El Divertaller és un espai on els infants deixen volar la imaginació a través de la pintura, el dibuix, el modelatge i activitats manuals amb materials propers i quotidians. Treballem la creativitat, la motricitat fina i la capacitat de transformar una idea en una creació pròpia. El Taller d'estudi complementa l'activitat oferint un espai tranquil i guiat per reforçar hàbits de treball, autonomia i organització. Una proposta completa per créixer, crear i avançar amb confiança.",
  minichef:
    "Descobrim la cuina jugant i experimentant. Al taller de Minichef, els infants s'endinsen en el món de la cuina a través de receptes senzilles i divertides. Experimentem amb aliments de temporada, descobrim d'on venen i aprenem la importància d'una alimentació sana i equilibrada. Mentre cuinen, desenvolupen autonomia, creativitat i hàbits saludables, tot compartint una experiència enriquidora i deliciosa amb el grup.",
  contacontes:
    "Imaginar, sentir i aprendre a través de les històries. Els contes obren la porta a la fantasia i permeten als infants viure noves experiències a través dels seus personatges. Mitjançant les històries, aprenen a entendre emocions, resoldre conflictes i descobrir diferents maneres d'actuar. Un espai màgic que estimula la imaginació, la creativitat i el creixement personal, ajudant els nens i nenes a trobar respostes als petits grans reptes del dia a dia.",
  robotica:
    "Construïm, programem i donem vida a les idees. A l'activitat de Robòtica, els infants aprenen a construir i programar robots amb materials educatius com LEGO Mindstorms. A través de reptes progressius i adaptats a cada edat, desenvolupen el pensament lògic, la creativitat i la capacitat de resolució de problemes. Cada repte combina una part de construcció i una part de programació visual i senzilla, convertint l'aprenentatge en una experiència pràctica, motivadora i plena de descobertes.",
  "english-time":
    "Aprenem anglès de manera natural i divertida. English Time és una activitat pensada perquè els infants d'Infantil es familiaritzin amb l'anglès a través del joc, les cançons i les dinàmiques participatives. Per a molts és el primer contacte amb la llengua, i ho fem d'una manera propera i motivadora. A Primària, reforcem i ampliem els coneixements treballant vocabulari, expressió oral i comprensió, ajudant-los a guanyar seguretat i confiança en l'ús de l'anglès. Una manera dinàmica d'aprendre una llengua que els obre portes al futur.",
};

function getSlug(href: string): string {
  return href.replace("/activitats-extraescolars/", "") || "";
}

export default function ActivitatsExtraescolarsPage() {
  return (
    <>
      {/* Franja de vídeo a dalt – mateixa mida que la portada i Menjadors */}
      <section className="relative w-full overflow-hidden bg-black aspect-[21/9] min-h-[260px] max-h-[420px] sm:min-h-[300px] lg:max-h-[520px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 65%" }}
          src={EXTRAESCOLARS_VIDEO}
        />
      </section>

      {/* Contenidor ample: pantalles grans (ex. 27") aprofiten tot l'ample; pantalles petites es redueixen */}
      <div className="mx-auto w-full max-w-[1920px] px-4 py-16 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Activitats Extraescolars</h1>
        <p className="mt-4 text-lg text-slate-600">
          Dissenyem i portem a terme un gran ventall d&apos;activitats extraescolars. Tant
          esportives com formatives i lúdiques.
        </p>

        {/* 4 activitats per fila a pantalla gran; finestres una mica més grans */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {children.map((item, index) => {
            const slug = getSlug(item.href);
            const introText = INTRO_TEXTS[slug];
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                {/* Finestra de color una mica més alta */}
                <div
                  className={`relative aspect-[4/3] w-full min-h-[180px] overflow-hidden bg-gradient-to-br sm:min-h-[200px] xl:min-h-[220px] ${CARD_COLORS[index % CARD_COLORS.length]} flex items-center justify-center`}
                >
                  <span className="text-5xl font-bold text-white/90 sm:text-6xl" aria-hidden>
                    {item.label.charAt(0)}
                  </span>
                </div>
                <div className="border-t border-slate-200 p-5 sm:p-6 xl:p-6">
                  <h2 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 sm:text-xl">
                    {item.label}
                  </h2>
                  {introText ? (
                    <p className="mt-2 line-clamp-4 text-slate-600 xl:line-clamp-5">{introText}</p>
                  ) : null}
                  <span className="mt-3 inline-block text-base font-medium text-emerald-600 group-hover:underline">
                    Saber més →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
