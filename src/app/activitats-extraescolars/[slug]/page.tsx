import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { mainNav } from "@/lib/navigation";

const extraescolarsItem = mainNav.find((n) => n.label === "Activitats Extraescolars");
const children = extraescolarsItem?.children ?? [];

const slugToItem = Object.fromEntries(
  children.map((c) => [c.href.replace("/activitats-extraescolars/", ""), c])
);

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return children.map((c) => ({
    slug: c.href.replace("/activitats-extraescolars/", ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = slugToItem[slug];
  if (!item) return { title: "Activitat" };
  return {
    title: item.label,
    description:
      slug === "taekwondo-judo"
        ? "Taekwondo i Judo a l'escola. Arts marcials com a escola de vida: respecte, disciplina, concentració i creixement personal."
        : slug === "hip-hop-danses"
          ? "Hip-Hop i danses modernes a l'escola. Coreografies, ritme, coordinació i expressió corporal per a Infantil i Primària."
          : slug === "circ-malabars"
            ? "Circ i Malabars a l'escola. Malabars, equilibris, coordinació, creativitat i superació personal per a Infantil i Primària."
            : slug === "multiesport"
              ? "Multiesport a l'escola. Desenvolupament global mitjançant moviment, joc i iniciació esportiva per a Infantil i Primària."
              : slug === "hockey-mini-tennis-beisbol"
                ? "Hockey, Mini-Tennis i Beisbol a l'escola. Iniciació amb implement: coordinació, precisió i treball en equip per a Primària."
                : slug === "basquet-handbol-voley"
                  ? "Bàsquet, Handbol i Vòlei a l'escola. Iniciació esportiva col·lectiva, coordinació ull-mà i treball en equip per a Primària."
                  : slug === "patins"
                    ? "Patins a l'escola. Iniciació al patinatge de manera progressiva i segura: equilibri, coordinació i autonomia per a Infantil i Primària."
                    : slug === "futbol-sala"
                      ? "Escola de Futbol Sala Jordi Torras. Formació esportiva de qualitat, coordinació, treball en equip i valors. Modalitat formativa i competitiva."
                      : slug === "divertaller"
                        ? "Divertaller + Taller d'estudi. Creativitat, pintura, dibuix, modelatge i tècniques manuals vinculades a l'escola."
                        : slug === "minichef"
                          ? "Minichef. Taller de cuina educativa amb aliments de temporada i proximitat, receptes adaptades i educació alimentària."
                          : slug === "contacontes"
                            ? "Contacontes. Espai de narració i històries per treballar emocions, valors, imaginació i llenguatge."
                            : slug === "robotica"
                              ? "Robòtica a l'escola. Construcció i programació amb LEGO WeDo i Mindstorms, pensament lògic i creativitat."
                              : slug === "english-time"
                                ? "English Time. Aprenentatge d'anglès natural i progressiu per Infantil i Primària, amb joc, cançons i expressió oral."
                                : slug === "taller-ciencia"
                                  ? "Taller Interactiu de Ciència. Experimentació, descoberta i mètode científic amb materials quotidianos i reciclats."
                                  : slug === "escacs"
                                    ? "Taller d'Escacs. Introducció al joc des d'I5, concentració, pensament lògic i valors: paciència, respecte i esportivitat."
                                    : slug === "ballem-ritme"
                                      ? "Ballem al Ritme. Dansa, ritme i expressió corporal per Infantil i Cicle Inicial: coordinació, creativitat i treball en equip."
                                      : slug === "teatre"
                                        ? "Taller de Teatre. Expressió, imaginació i confiança a través del joc dramàtic i la interpretació per Infantil i Primària."
                                        : undefined,
  };
}

/** Contingut específic per a Taekwondo / Judo */
function TaekwondoJudoContent() {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Descripció</h2>
        <p className="mt-3 text-slate-600">
          Les arts marcials són molt més que un esport: són una autèntica escola de vida. A través
          del Taekwondo i el Judo, els infants aprenen a afrontar reptes amb seguretat, constància i
          autocontrol. No treballem només la tècnica, sinó també valors fonamentals com el respecte,
          la tolerància, la humilitat i la disciplina.
        </p>
        <p className="mt-3 text-slate-600">
          Durant les sessions, la concentració és una peça clau. El Sensei guia els alumnes en un
          entorn estructurat i positiu, fomentant el respecte cap als companys, el treball en equip i
          el creixement personal. Tot l&apos;aprenentatge es realitza de manera progressiva i
          adaptada a cada edat, combinant exercicis tècnics amb dinàmiques motivadores perquè els
          infants aprenguin gaudint.
        </p>
        <p className="mt-3 text-slate-600">
          Proposem dues modalitats d&apos;iniciació: <strong>Taekwondo</strong> i <strong>Judo</strong>.
        </p>
        <p className="mt-4 text-slate-600">
          Una activitat ideal perquè nens i nenes guanyin confiança, canalitzin la seva energia i
          creixin tant físicament com emocionalment.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Destinataris</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Educació Infantil
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Educació Primària
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Objectius</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Potenciar la concentració i la disciplina, creant hàbits positius aplicables dins i fora
            de l&apos;escola.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Fomentar el respecte i la comprensió cap als altres.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Reforçar l&apos;autoestima i la seguretat personal.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Millorar la forma física general, treballant força, flexibilitat, coordinació, reflexos i
            control postural.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Instal·lacions</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Gimnàs del centre amb màrfegues convencionals d&apos;educació física.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Material</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            La iniciació es pot realitzar sense vestimenta específica.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Opcionalment, es pot proposar l&apos;ús d&apos;equipació adequada.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Perfil del monitor</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a especialista en iniciació al Taekwondo o al Judo, amb experiència en l&apos;àmbit
            educatiu.
          </li>
        </ul>
      </section>
    </>
  );
}

/** Contingut específic per a Hip-Hop / Danses Modernes */
function HipHopDansesContent() {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Descripció</h2>
        <p className="mt-3 text-slate-600">
          El Hip-Hop és una activitat de dansa moderna amb una gran acceptació entre els infants que
          gaudeixen de la música i el moviment. A través d&apos;estils com el Hip-Hop, el Funky i
          altres danses urbanes, els nens i nenes descobreixen una manera divertida d&apos;expressar-se
          i guanyar confiança.
        </p>
        <p className="mt-3 text-slate-600">
          Les sessions es basen en la creació i el treball de coreografies adaptades a cada edat,
          combinant ritme, coordinació i expressió corporal. Treballem en un ambient dinàmic i
          motivador, on cada infant pot desenvolupar el seu estil propi mentre aprèn a treballar en
          equip i a seguir el ritme del grup.
        </p>
        <p className="mt-4 text-slate-600">
          És una activitat que potencia l&apos;energia, la creativitat i l&apos;autoestima, tot
          aprenent d&apos;una manera lúdica i participativa.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Ballem amb Ritme (Educació Infantil)
        </h2>
        <p className="mt-3 text-slate-600">
          Pensada especialment per als més petits, aquesta proposta introdueix els infants al món de
          la dansa a través del joc i les músiques més alegres i actuals. Mitjançant coreografies
          senzilles i dinàmiques adaptades, desenvolupem el sentit del ritme, la coordinació i la
          consciència corporal.
        </p>
        <p className="mt-3 text-slate-600">
          Un espai per moure&apos;s, gaudir i començar a estimar la dansa des de ben petits.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Destinataris</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Educació Infantil
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Educació Primària
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Objectius</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Gaudir del moviment i la música a través de les danses modernes.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Millorar la coordinació general i el sentit del ritme.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Crear i interpretar coreografies adaptades a l&apos;edat dels participants.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Fomentar l&apos;expressió corporal i la confiança en un mateix.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Instal·lacions</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Gimnàs o sala interior polivalent amb equip de música.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Material</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Material bàsic d&apos;educació física per a escalfaments i tornada a la calma.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Perfil del monitor</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a amb domini de danses modernes i capacitat per crear coreografies motivadores,
            amb experiència en l&apos;àmbit educatiu.
          </li>
        </ul>
      </section>
    </>
  );
}

/** Contingut específic per a Circ i Malabars */
function CircMalabarsContent() {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Descripció</h2>
        <p className="mt-3 text-slate-600">
          L&apos;activitat de Circ i Malabars convida els infants a endinsar-se en un univers
          creatiu, dinàmic i ple de reptes emocionants. A través de tècniques bàsiques de malabars,
          equilibris, manipulació d&apos;objectes i expressió corporal, els nens i nenes desenvolupen
          la coordinació, la concentració i el domini del cos.
        </p>
        <p className="mt-3 text-slate-600">
          El circ és un entorn altament motivador que fomenta la superació personal i la constància.
          Cada infant avança al seu ritme, descobrint noves habilitats i guanyant confiança en les
          seves capacitats. Les sessions combinen aprenentatge tècnic amb dinàmiques lúdiques,
          assegurant que aprenguin mentre gaudeixen.
        </p>
        <p className="mt-4 text-slate-600">
          És una activitat que potencia la creativitat, l&apos;agilitat i l&apos;autoestima en un
          ambient cooperatiu i respectuós.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Destinataris</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Educació Infantil
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Educació Primària
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Objectius</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Desenvolupar la coordinació i el control corporal.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Millorar la concentració i la constància davant nous reptes.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Potenciar la creativitat i l&apos;expressió corporal.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Afavorir la confiança i la superació personal.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Instal·lacions</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Gimnàs o sala polivalent àmplia i segura.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Material</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Material específic de malabars (pilotes, plats xinesos, diàbolos, etc.).
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Material bàsic d&apos;educació física per a escalfaments i jocs inicials.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Perfil del monitor</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a amb formació en activitats de circ i malabars, amb experiència en dinamització
            de grups infantils i enfocament educatiu.
          </li>
        </ul>
      </section>
    </>
  );
}

/** Contingut específic per a Multiesport */
function MultiesportContent() {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Descripció</h2>
        <p className="mt-3 text-slate-600">
          Multiesport és una activitat pensada per afavorir el desenvolupament global dels infants a
          través del moviment i el joc. Mitjançant propostes variades, jocs dinàmics i activitats amb
          diferents tipus de pilota adaptades a cada edat, els nens i nenes milloren les seves
          habilitats motrius, la coordinació i la percepció espacial d&apos;una manera divertida i
          natural.
        </p>
        <p className="mt-3 text-slate-600">
          A l&apos;etapa d&apos;Educació Infantil, també incorporem jocs cooperatius, activitats
          d&apos;activació sensorial i joc simbòlic, elements fonamentals per al creixement emocional
          i social. L&apos;activitat física de base és clau en la construcció de l&apos;esquema
          corporal, ja que és a través del cos i del moviment que els infants descobreixen,
          comprenen i interactuen amb el món que els envolta.
        </p>
        <p className="mt-4 text-slate-600">
          La iniciació esportiva treballa les capacitats cognitives, afectives, socials i personals,
          convertint cada sessió en un espai d&apos;aprenentatge actiu, estimulant i motivador.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Objectius</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Descobrir i experimentar les possibilitats del propi cos.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Adquirir noves habilitats motrius de manera progressiva.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Desenvolupar les habilitats físiques bàsiques mitjançant el joc.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Fomentar el joc cooperatiu i el joc simbòlic.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Millorar la coordinació i el control corporal.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Identificar i prendre consciència de les parts del cos.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Destinataris</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Educació Infantil
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Educació Primària
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Instal·lacions</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Gimnàs o espai interior ampli.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Pista exterior.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Material</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Pilotes de diferents mides i textures, aros, piques, cons, màrfegues, bancs i material
            psicomotriu variat.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Perfil del monitor</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a amb titulació en activitats fisicoesportives i experiència amb infants
            d&apos;Educació Infantil i Primària, amb enfocament educatiu i lúdic.
          </li>
        </ul>
      </section>
    </>
  );
}

/** Contingut específic per a Hockey, Mini-Tennis i Beisbol */
function HockeyMiniTennisBeisbolContent() {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Descripció</h2>
        <p className="mt-3 text-slate-600">
          Aquesta activitat agrupa esports que es practiquen amb implement, com l&apos;hoquei, el
          mini-tennis o el beisbol. L&apos;ús d&apos;sticks, raquetes, pales o bats es converteix en
          una eina fonamental per potenciar el desenvolupament motriu dels infants de Primària.
        </p>
        <p className="mt-3 text-slate-600">
          A través del joc i de situacions jugades adaptades a l&apos;edat, els alumnes milloren la
          coordinació, la precisió i el control corporal, tot aprenent les bases tècniques
          d&apos;aquests esports d&apos;una manera dinàmica i motivadora. Les sessions fomenten
          també el treball en equip, el respecte i l&apos;esperit esportiu, en un ambient
          participatiu on tothom té el seu espai per aprendre i gaudir.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Objectius</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Desenvolupar les habilitats motrius mitjançant l&apos;ús de diferents implements (stick
            d&apos;hoquei, pales, raquetes, bat i guant de beisbol).
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Gaudir del moviment i del joc en el temps de lleure.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Millorar la coordinació i la precisió en la manipulació d&apos;implements esportius.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Fomentar el treball en equip i el respecte per les normes del joc.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Destinataris</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Cicle Mitjà de Primària
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Cicle Superior de Primària
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Instal·lacions</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Espais exteriors.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Miniporteries per al desenvolupament d&apos;activitats d&apos;hoquei.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Material</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Sticks, pilotes d&apos;hoquei, pales, raquetes, pilotes de tennis, bat i guant de
            beisbol, cons, piques i petos.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Perfil del monitor</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a amb titulació de Grau Mig en activitats fisicoesportives i experiència en
            iniciació esportiva en edat escolar.
          </li>
        </ul>
      </section>
    </>
  );
}

/** Contingut específic per a Bàsquet, Handbol i Voley */
function BasquetHandbolVoleyContent() {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Descripció</h2>
        <p className="mt-3 text-slate-600">
          Aquesta activitat d&apos;iniciació esportiva permet als infants descobrir diferents
          esports col·lectius que treballen especialment la coordinació ull-mà, com el Bàsquet,
          l&apos;Handbol i el Vòlei. Cada trimestre es treballa una disciplina diferent,
          aprofundint progressivament tant en els aspectes tècnics com tàctics, sempre adaptats a
          l&apos;edat dels participants.
        </p>
        <p className="mt-3 text-slate-600">
          Les sessions combinen aprenentatge i joc, afavorint que els alumnes entenguin les
          normes, desenvolupin habilitats específiques i aprenguin a prendre decisions dins del
          joc. També hi ha la possibilitat de centrar el curs en una sola disciplina, segons les
          necessitats del centre.
        </p>
        <p className="mt-4 text-slate-600">
          És una proposta ideal perquè els infants millorin la coordinació, el treball en equip i
          la confiança, tot gaudint de l&apos;esport en un ambient educatiu i motivador.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Objectius</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Iniciar els alumnes en les habilitats tècniques del Bàsquet, Handbol i Vòlei.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Desenvolupar la percepció espacial i la comprensió del joc col·lectiu.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Fomentar la col·laboració i el treball en equip per assolir objectius comuns.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Potenciar la coordinació i la presa de decisions en situacions reals de joc.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Destinataris</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Educació Primària
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Instal·lacions</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Pista exterior amb cistelles, porteries i xarxa de vòlei.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Material</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Pilotes de Bàsquet, Handbol i Vòlei; cons, piques i petos.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Perfil del monitor</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a amb titulació específica en algun dels esports i experiència en formació
            esportiva amb alumnes de Primària.
          </li>
        </ul>
      </section>
    </>
  );
}

/** Contingut específic per a Patins a l'escola */
function PatinsContent() {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Descripció</h2>
        <p className="mt-3 text-slate-600">
          L&apos;activitat de Patinatge té com a objectiu iniciar els infants en aquest esport
          d&apos;una manera progressiva, segura i motivadora. A través de jocs dinàmics i exercicis
          tècnics adaptats a cada edat, els alumnes aprenen a mantenir l&apos;equilibri,
          desplaçar-se amb confiança i dominar els moviments bàsics sobre rodes.
        </p>
        <p className="mt-3 text-slate-600">
          El patinatge és una activitat molt completa que ajuda a millorar la coordinació, el
          control corporal i la resistència, tot fomentant l&apos;autonomia i la superació
          personal. Sempre treballem en un entorn segur i estructurat, prioritzant la protecció i la
          confiança dels infants.
        </p>
        <p className="mt-4 text-slate-600">
          Es recomana l&apos;ús de patins de quatre rodes en les etapes inicials per facilitar
          l&apos;estabilitat.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Objectius</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Lliscar de manera autònoma i segura.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Desenvolupar habilitats pròpies del patinatge com la remada, el gir i la frenada.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Millorar l&apos;equilibri i la coordinació general.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Participar en jocs i circuits adaptats mitjançant el patinatge.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Destinataris</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Educació Infantil
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Educació Primària
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Instal·lacions</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Espais exteriors pavimentats i segurs.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Material</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Material individual dels alumnes: patins i proteccions.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Cons, piques, cordes, pilotes i petos.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Perfil del monitor</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a amb titulació de Grau Mig en Activitats Físico-Esportives i experiència en
            patinatge i treball amb infants.
          </li>
        </ul>
      </section>
    </>
  );
}

/** Contingut específic per a Futbol Sala */
function FutbolSalaContent() {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Descripció</h2>
        <p className="mt-3 text-slate-600">
          <strong>ACTIVITAT: ESCOLA DE FUTBOL SALA &quot;JORDI TORRAS&quot;</strong>
        </p>
        <p className="mt-3 text-slate-600">
          L&apos;Escola de Futbol Sala Jordi Torras neix amb la voluntat d&apos;oferir una formació
          esportiva de qualitat, coordinada per un referent del Futbol Sala professional. Aquesta
          activitat permet als infants iniciar-se en un esport col·lectiu dinàmic i motivador, que
          potencia la coordinació, l&apos;agilitat, la presa de decisions i el treball en equip.
        </p>
        <p className="mt-3 text-slate-600">
          El projecte es desenvolupa sota la supervisió de Jordi Torras, garantint una metodologia
          formativa estructurada, adaptada a cada edat i centrada tant en el creixement esportiu com
          personal dels alumnes.
        </p>
        <p className="mt-4 text-slate-600 font-medium">L&apos;activitat s&apos;ofereix en dos formats:</p>
        <p className="mt-2 text-slate-600">
          <strong>Modalitat formativa</strong> (sense competició regular): una sessió setmanal
          orientada a l&apos;aprenentatge tècnic i al gaudi del joc. Es realitza una trobada
          trimestral amb altres escoles per compartir experiències i fomentar els valors de
          l&apos;esport.
        </p>
        <p className="mt-2 text-slate-600">
          <strong>Modalitat competitiva:</strong> dues sessions setmanals amb participació en
          competicions locals o dins el marc del Consell Comarcal. Aquesta opció permet als infants
          viure l&apos;experiència de la competició de manera educativa i respectuosa, aprenent a
          gestionar l&apos;esforç, el compromís i el treball en equip.
        </p>
        <p className="mt-4 text-slate-600">
          Una activitat que combina passió, formació i valors.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Objectius</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Iniciar els alumnes en la tècnica i la tàctica bàsica del Futbol Sala.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Conèixer i comprendre les normes del joc.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Desenvolupar el treball en equip i el respecte pels companys i rivals.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Participar en trobades esportives i competicions adaptades a l&apos;edat.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Fomentar l&apos;esforç, la constància i l&apos;esperit esportiu.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Destinataris</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            P5
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Educació Primària
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Instal·lacions</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Pista de Futbol Sala adequada per a la pràctica esportiva.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Material</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Pilotes de Futbol Sala.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Petos, aros, cons i piques.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Perfil del monitor</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a amb titulació oficial de Futbol Sala i experiència en formació esportiva en
            edat escolar, seguint la metodologia de l&apos;Escola Jordi Torras.
          </li>
        </ul>
      </section>
    </>
  );
}

/** Contingut específic per a Divertaller + Taller d'estudi */
function DivertallerContent() {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Descripció</h2>
        <p className="mt-3 text-slate-600">
          El Divertaller és un espai pensat perquè els infants desenvolupin la seva creativitat
          d&apos;una manera lliure, guiada i estimulant. A partir de materials propers i quotidians,
          els nens i nenes experimenten amb la pintura, el dibuix, el modelatge i diferents tècniques
          manuals, transformant una idea inicial en una creació pròpia.
        </p>
        <p className="mt-3 text-slate-600">
          Les activitats estan vinculades a les temàtiques trimestrals i a les festes que es
          treballen a l&apos;escola, reforçant així els aprenentatges del centre des d&apos;una
          vessant artística i manipulativa.
        </p>
        <p className="mt-4 text-slate-600">
          A més de potenciar la imaginació, el Divertaller ajuda a millorar la motricitat fina, la
          concentració i la capacitat de planificació, sempre en un ambient relaxat, motivador i ple
          d&apos;expressió.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Objectius</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Desenvolupar la creativitat a través de tallers artístics variats.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Millorar les habilitats manuals com retallar, enganxar i modelar.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Experimentar amb diferents tècniques de dibuix i expressió artística.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Fomentar la concentració i l&apos;autonomia en el procés creatiu.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Instal·lacions</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Aula d&apos;estudi o aula ordinària adaptada per a activitats plàstiques.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Material</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Material escolar no fungible (tisores, pinzells, etc.) i materials diversos per a les
            creacions.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Perfil del monitor</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a en formació en el Grau d&apos;Educació Primària.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a de lleure amb experiència en dinamització de tallers creatius.
          </li>
        </ul>
      </section>
    </>
  );
}

/** Contingut específic per a Minichef */
function MinichefContent() {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Descripció</h2>
        <p className="mt-3 text-slate-600">
          El taller de Minichef és una proposta educativa i divertida on els infants descobreixen el
          món de la cuina a través de l&apos;experimentació amb aliments de temporada i productes de
          proximitat. Mitjançant receptes senzilles i adaptades a la seva edat, aprenen les bases de
          l&apos;alimentació saludable mentre gaudeixen cuinant.
        </p>
        <p className="mt-3 text-slate-600">
          Durant les sessions, els nens i nenes descobreixen d&apos;on provenen els aliments, com es
          transformen i quina importància té mantenir una dieta equilibrada. A més de fomentar
          hàbits saludables, l&apos;activitat potencia l&apos;autonomia, la responsabilitat i el
          treball en equip en un entorn segur i engrescador.
        </p>
        <p className="mt-4 text-slate-600">
          Una experiència pràctica que combina aprenentatge, creativitat i educació alimentària.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Objectius</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Conèixer la piràmide dels aliments i els principis d&apos;una dieta equilibrada.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Aprendre a utilitzar correctament i amb seguretat els estris bàsics de cuina.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Elaborar receptes variades utilitzant diferents tipus d&apos;ingredients.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Fomentar hàbits d&apos;alimentació saludables des de petits.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Instal·lacions</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Aula taller o menjador escolar adaptat per a l&apos;activitat.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Material</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Amb la matrícula, cada alumne rebrà el seu kit personal de «Minichef».
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Ingredients i material necessari per a l&apos;elaboració de les receptes.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Perfil del monitor</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a creatiu/va, amb experiència i coneixements en hostaleria i treball educatiu
            amb infants.
          </li>
        </ul>
      </section>
    </>
  );
}

/** Contingut específic per a Contacontes */
function ContacontesContent() {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Descripció</h2>
        <p className="mt-3 text-slate-600">
          L&apos;activitat de Contacontes és un espai màgic on els infants viatgen a través de les
          històries per descobrir emocions, valors i noves maneres d&apos;entendre el món.
          Mitjançant personatges i situacions diverses, aprenen a resoldre conflictes, a posar-se en
          el lloc dels altres i a reflexionar sobre quina és la millor manera d&apos;actuar.
        </p>
        <p className="mt-3 text-slate-600">
          El conte es converteix en una eina educativa molt potent: ajuda a alliberar pors, transmet
          valors culturals i socials, estimula la imaginació i afavoreix el desenvolupament de la
          lectoescriptura. A més, amplia el vocabulari i millora la capacitat d&apos;expressió oral
          dels infants.
        </p>
        <p className="mt-4 text-slate-600">
          Les sessions combinen narració, dinàmiques participatives i petites activitats creatives,
          fent que cada història sigui una experiència viva i significativa.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Objectius</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Treballar els valors socials i emocionals a través de la narració de contes.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Conèixer diferents cultures i tradicions mitjançant històries del món.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Estimular la imaginació i la creativitat creant nous contes i il·lustracions.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Afavorir el desenvolupament del llenguatge i la comprensió lectora.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Instal·lacions</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Aula amb projector d&apos;imatges o biblioteca escolar.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Material</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Catifa o espai còmode per seure i afavorir un ambient acollidor.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Contes, àlbums il·lustrats i material per a activitats creatives.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Perfil del monitor</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a de lleure, preferiblement estudiant del Grau de Mestre de Primària o amb
            formació en educació i animació lectora.
          </li>
        </ul>
      </section>
    </>
  );
}

/** Contingut específic per a Robòtica */
function RoboticaContent() {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Descripció</h2>
        <p className="mt-3 text-slate-600">
          La Robòtica a l&apos;escola és una activitat extraescolar innovadora que combina
          construcció, programació i creativitat. Mitjançant materials educatius com LEGO WeDo i
          LEGO Mindstorms, els infants construeixen i programen els seus propis robots mentre
          resolen reptes plantejats pel monitor amb dificultat progressiva.
        </p>
        <p className="mt-3 text-slate-600">
          Cada projecte inclou una part de construcció i una part de programació visual i intuïtiva
          amb ordinador, adaptada a l&apos;edat dels participants. A través de la metodologia de
          &quot;joves inventors&quot;, estimulem la imaginació dels nens i nenes, despertant el seu
          desig de crear i fer realitat les seves idees.
        </p>
        <p className="mt-4 text-slate-600">
          Quan aconsegueixen superar un repte, experimenten una gran satisfacció que reforça la
          seva autoestima i la confiança en les seves capacitats. Aprenen a pensar, provar,
          equivocar-se i tornar-ho a intentar en un entorn segur i motivador.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Objectius</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Desenvolupar el pensament lògic-matemàtic mitjançant reptes pràctics.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Fomentar el treball en equip i el respecte per les idees dels companys.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Potenciar la creativitat, l&apos;autonomia i la capacitat de resolució de problemes.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Promoure el respecte i la cura del material tecnològic.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Estructura de les sessions
        </h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Assemblea inicial per presentar el repte i connectar amb els coneixements previs.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Assignació de rols i repartiment del material, fomentant la responsabilitat
            compartida.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Desenvolupament del projecte (construcció i programació).
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Exposició i explicació de les solucions trobades.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Recollida del material i plantejament de nous reptes.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Instal·lacions</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Aula de ciències o aula adaptada amb ordinadors.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Material</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Kits de LEGO WeDo i LEGO Mindstorms.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Fitxes de seguiment i material de suport per a les activitats.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Perfil del monitor</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a dinàmic/a i didàctic/a, amb estudis superiors en àmbits científics (Ciències
            Ambientals, Biologia, Química o similars) i experiència en treball amb infants.
          </li>
        </ul>
      </section>
    </>
  );
}

/** Contingut específic per a English Time */
function EnglishTimeContent() {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Descripció</h2>
        <p className="mt-3 text-slate-600">
          English Time és una activitat extraescolar pensada perquè els infants aprenguin anglès
          d&apos;una manera natural, progressiva i motivadora. A Educació Infantil, l&apos;objectiu
          és que es familiaritzin amb la llengua a través del joc, les cançons i les rutines
          quotidianes, ja que per a molts és el primer contacte amb l&apos;anglès.
        </p>
        <p className="mt-3 text-slate-600">
          A Educació Primària, l&apos;activitat permet reforçar i ampliar els coneixements
          adquirits a l&apos;aula, aprofundint tant en la comprensió com en l&apos;expressió oral i
          escrita. Per garantir un aprenentatge adequat, es realitzen proves de nivell inicials
          perquè cada alumne s&apos;incorpori al grup que millor s&apos;adapti als seus
          coneixements.
        </p>
        <p className="mt-4 text-slate-600">
          Les sessions combinen contingut acadèmic amb activitats lúdiques i participatives,
          afavorint que els infants aprenguin amb seguretat i confiança, especialment en
          l&apos;expressió oral.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Objectius</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Ampliar el vocabulari en diferents àmbits temàtics.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Millorar la pronunciació i la comprensió oral.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Relacionar paraules i conceptes de manera significativa.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Aprendre expressions quotidianes i estructures bàsiques de comunicació.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Practicar els continguts mitjançant jocs, cançons i activitats dinàmiques.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Potenciar especialment l&apos;expressió oral i la confiança en parlar anglès.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Instal·lacions</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Aula assignada dins de l&apos;escola per garantir continuïtat i comoditat durant tot el
            curs.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Material</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Flashcards, fitxes d&apos;activitats, material audiovisual i recursos interactius.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Elaboració d&apos;un àlbum-dossier trimestral amb les activitats realitzades.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Perfil del monitor</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a dinàmic/a amb bon domini de la llengua anglesa.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Mestre/a o estudiant del Grau d&apos;Educació Primària amb titulació mínima First
            Certificate o equivalent.
          </li>
        </ul>
      </section>
    </>
  );
}

/** Contingut específic per a Taller Interactiu de Ciència */
function TallerCienciaContent() {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Descripció</h2>
        <p className="mt-3 text-slate-600">
          El Taller Interactiu de Ciència és un espai on els infants descobreixen el món que els
          envolta a través de l&apos;experimentació i la descoberta. Mitjançant activitats pràctiques
          i dinàmiques, els nens i nenes formulen preguntes, fan hipòtesis i comproven resultats,
          apropant-se al mètode científic d&apos;una manera natural i engrescadora.
        </p>
        <p className="mt-3 text-slate-600">
          Treballarem amb materials senzills, molts d&apos;ells reciclats o d&apos;ús quotidià,
          demostrant que la ciència és a tot arreu. L&apos;activitat potencia la curiositat, la
          imaginació i l&apos;esperit crític, ajudant els infants a comprendre millor el seu entorn
          i a desenvolupar una mirada més analítica i reflexiva.
        </p>
        <p className="mt-4 text-slate-600">
          Una proposta que combina aprenentatge, experimentació i diversió, despertant vocacions i
          fomentant el pensament científic des de ben petits.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Objectius</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Experimentar amb elements de l&apos;entorn per donar resposta a preguntes i inquietuds.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Desenvolupar la curiositat i l&apos;esperit crític.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Fomentar una connexió més conscient amb l&apos;entorn natural.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Utilitzar correctament els materials bàsics de l&apos;aula de ciències.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Instal·lacions</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Aula de ciències adaptada per a la realització d&apos;experiments.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Material</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Material no fungible propi de l&apos;aula de ciències i materials quotidians per a
            l&apos;experimentació.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Perfil del monitor</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a dinàmic/a i didàctic/a, amb estudis superiors en Ciències Ambientals,
            Biologia, Química o àmbits científics similars i experiència en treball educatiu amb
            infants.
          </li>
        </ul>
      </section>
    </>
  );
}

/** Contingut específic per a Escacs */
function EscacsContent() {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Descripció</h2>
        <p className="mt-3 text-slate-600">
          El Taller d&apos;Escacs és una activitat pensada per introduir els infants en aquest joc
          mil·lenari d&apos;una manera dinàmica i adaptada a la seva edat, a partir d&apos;I5.
          Mitjançant el joc i reptes progressius, els nens i nenes aprenen els moviments de les
          peces, les normes bàsiques i les primeres estratègies, sempre en un ambient lúdic i
          motivador.
        </p>
        <p className="mt-3 text-slate-600">
          Els escacs potencien la concentració, la memòria i el pensament lògic, ajudant els infants
          a planificar, prendre decisions i anticipar conseqüències. A més, fomenten la paciència, el
          respecte pel torn de paraula i l&apos;acceptació del resultat, treballant valors
          essencials per al seu creixement personal.
        </p>
        <p className="mt-4 text-slate-600">
          Cada sessió combina explicacions pràctiques, partides adaptades i jocs d&apos;estratègia
          perquè aprendre escacs sigui una experiència divertida i enriquidora.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Objectius</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Desenvolupar la concentració i el pensament lògic.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Aprendre les normes i moviments bàsics del joc.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Fomentar la capacitat d&apos;anticipació i resolució de problemes.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Potenciar la paciència, el respecte i l&apos;esportivitat.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Destinataris</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            I5 (Educació Infantil)
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Educació Primària
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Instal·lacions</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Aula ordinària o espai tranquil adequat per al joc.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Material</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Taulers i peces d&apos;escacs.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Materials de suport visual i fitxes didàctiques adaptades a cada edat.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Perfil del monitor</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a amb coneixements d&apos;escacs i experiència en dinamització educativa amb
            infants.
          </li>
        </ul>
      </section>
    </>
  );
}

/** Contingut específic per a Ballem al Ritme */
function BallemRitmeContent() {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Descripció</h2>
        <p className="mt-3 text-slate-600">
          Ballem al Ritme és una activitat pensada perquè els infants descobreixin el plaer de
          moure&apos;s amb la música d&apos;una manera natural i divertida. A través de coreografies
          senzilles, jocs musicals i dinàmiques rítmiques, els nens i nenes desenvolupen la
          coordinació, el sentit del ritme i l&apos;expressió corporal.
        </p>
        <p className="mt-3 text-slate-600">
          Les sessions combinen músiques actuals amb cançons adaptades a cada edat, creant un espai
          ple d&apos;energia i creativitat. Ballar no només millora la forma física, sinó que també
          reforça la confiança, la memòria i la capacitat de treballar en grup.
        </p>
        <p className="mt-4 text-slate-600">
          És una activitat ideal perquè els infants s&apos;expressin, guanyin seguretat i gaudeixin
          del moviment en un ambient positiu i motivador.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Objectius</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Desenvolupar el sentit del ritme i la coordinació corporal.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Potenciar l&apos;expressió corporal i la creativitat.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Millorar la memòria a través de coreografies adaptades.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Fomentar la confiança i el treball en equip.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Destinataris</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Educació Infantil
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Cicle Inicial de Primària
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Instal·lacions</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Gimnàs o sala polivalent amb equip de música.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Material</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Equip de música i material bàsic d&apos;educació física per a dinàmiques i jocs
            rítmics.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Perfil del monitor</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a amb experiència en dansa o expressió corporal i capacitat per dinamitzar grups
            infantils amb energia i sensibilitat educativa.
          </li>
        </ul>
      </section>
    </>
  );
}

/** Contingut específic per a Teatre */
function TeatreContent() {
  return (
    <>
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Descripció</h2>
        <p className="mt-3 text-slate-600">
          El Taller de Teatre és un espai on els infants poden expressar-se lliurement, desenvolupar
          la imaginació i guanyar confiança davant dels altres. A través de jocs dramàtics, petites
          representacions i dinàmiques d&apos;expressió corporal i verbal, els nens i nenes descobreixen
          el món de la interpretació d&apos;una manera divertida i adaptada a la seva edat.
        </p>
        <p className="mt-3 text-slate-600">
          El teatre ajuda a millorar la comunicació, la memòria i la creativitat, alhora que reforça
          l&apos;autoestima i la capacitat de treballar en equip. Mitjançant històries, personatges i
          situacions quotidianes, els infants aprenen a gestionar emocions, posar-se en el lloc dels
          altres i parlar en públic amb seguretat.
        </p>
        <p className="mt-4 text-slate-600">
          Cada sessió es converteix en una experiència vivencial on aprendre jugant és el veritable
          protagonista.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Objectius</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Potenciar l&apos;expressió oral i corporal.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Desenvolupar la imaginació i la creativitat.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Millorar la confiança i la seguretat en un mateix.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Fomentar el treball en equip i el respecte pels companys.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black shrink-0" aria-hidden>✔</span>
            Aprendre a gestionar emocions a través de la interpretació.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Destinataris</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Educació Infantil
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Educació Primària
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Instal·lacions</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Aula polivalent o espai ampli que permeti el moviment i la representació.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Material</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Material d&apos;expressió (robes, complements simbòlics, elements escènics senzills).
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Equip de música per a dinàmiques i ambientació.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Perfil del monitor</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-black" aria-hidden>✔</span>
            Monitor/a amb formació en teatre o expressió corporal i experiència en dinamització de
            grups infantils.
          </li>
        </ul>
      </section>
    </>
  );
}

export default async function ActivitatPage({ params }: Props) {
  const { slug } = await params;
  const item = slugToItem[slug];
  if (!item) notFound();

  const customContent =
    slug === "taekwondo-judo" ? (
      <TaekwondoJudoContent />
    ) : slug === "hip-hop-danses" ? (
      <HipHopDansesContent />
    ) : slug === "circ-malabars" ? (
      <CircMalabarsContent />
    ) : slug === "multiesport" ? (
      <MultiesportContent />
    ) : slug === "hockey-mini-tennis-beisbol" ? (
      <HockeyMiniTennisBeisbolContent />
    ) : slug === "basquet-handbol-voley" ? (
      <BasquetHandbolVoleyContent />
    ) : slug === "patins" ? (
      <PatinsContent />
    ) : slug === "futbol-sala" ? (
      <FutbolSalaContent />
    ) : slug === "divertaller" ? (
      <DivertallerContent />
    ) : slug === "minichef" ? (
      <MinichefContent />
    ) : slug === "contacontes" ? (
      <ContacontesContent />
    ) : slug === "robotica" ? (
      <RoboticaContent />
    ) : slug === "english-time" ? (
      <EnglishTimeContent />
    ) : slug === "taller-ciencia" ? (
      <TallerCienciaContent />
    ) : slug === "escacs" ? (
      <EscacsContent />
    ) : slug === "ballem-ritme" ? (
      <BallemRitmeContent />
    ) : slug === "teatre" ? (
      <TeatreContent />
    ) : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/activitats-extraescolars"
        className="text-sm font-medium text-emerald-600 hover:underline"
      >
        ← Activitats extraescolars
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{item.label}</h1>

      {customContent ? (
        customContent
      ) : (
        <p className="mt-6 text-slate-600">
          Pàgina de l&apos;activitat <strong>{item.label}</strong>. El contingut específic es pot
          afegir aquí progressivament.
        </p>
      )}
    </div>
  );
}
