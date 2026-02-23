import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avís Legal",
  description: "Avís legal – Control Play. Informació legal i condicions d'ús del lloc web.",
};

export default function AvisLegalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">AVÍS LEGAL</h1>

      <p className="mt-8 text-slate-700 leading-relaxed">
        Amb la finalitat de donar compliment a l&apos;article 10 de la Llei 34/2002 de Serveis de la Societat de la Informació i Comerç Electrònic, informem a l&apos;usuari de les nostres dades:
      </p>
      <ul className="mt-4 space-y-1 text-slate-700">
        <li><strong>Denominació Social:</strong> CONTROL PLAY SPORTS, S L</li>
        <li><strong>Domicili Social:</strong> C L SANT MIQUEL 63 – 08620 – SANT VICENÇ DELS HORTS – BARCELONA</li>
        <li><strong>NIF:</strong> G65565228</li>
        <li><strong>Telèfon:</strong> 930102191</li>
        <li><strong>e-Mail:</strong> noelia@controlplaysports.com</li>
        <li><strong>Pàgina Web:</strong> <a href="https://www.controlplaysports.com/" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.controlplaysports.com/</a></li>
      </ul>

      <h2 className="mt-12 text-xl font-bold text-slate-900">Objecte</h2>
      <p className="mt-3 text-slate-700 leading-relaxed">
        El prestador, responsable del lloc web, posa a disposició dels usuaris el present document amb el qual pretén donar compliment a les obligacions disposades en la Llei 34/2002, de Serveis de la Societat de la Informació i del Comerç Electrònic (LSSI-CE), així com informar a tots els usuaris del lloc web respecte a quines són les condicions d&apos;ús del lloc web.
      </p>
      <p className="mt-3 text-slate-700 leading-relaxed">
        Tota persona que accedeixi a aquest lloc web assumeix el paper d&apos;usuari, comprometent-se a l&apos;observança i compliment rigorós de les disposicions aquí disposades, així com a qualsevol altra disposició legal que fora d&apos;aplicació.
      </p>
      <p className="mt-3 text-slate-700 leading-relaxed">
        El prestador es reserva el dret a modificar qualsevol tipus d&apos;informació que pogués aparèixer al lloc web, sense que hi hagi obligació de preavisar o posar en coneixement dels usuaris aquestes obligacions, entenent-se com suficient amb la publicació al lloc web del prestador.
      </p>

      <h2 className="mt-12 text-xl font-bold text-slate-900">Responsabilitat</h2>
      <p className="mt-3 text-slate-700 leading-relaxed">
        El prestador s&apos;eximeix de qualsevol tipus de responsabilitat derivada de la informació publicada al seu lloc web, sempre que aquesta informació hagi estat manipulada o introduïda per un tercer aliè a aquest.
      </p>
      <p className="mt-3 text-slate-700 leading-relaxed">
        El lloc web del prestador pot utilitzar cookies (petits arxius d&apos;informació que el servidor envia a l&apos;ordinador de qui accedeix a la pàgina) per dur a terme determinades funcions que són considerades imprescindibles per al correcte funcionament i visualització del lloc. Les cookies utilitzades en el lloc web tenen, en tot cas, caràcter temporal amb l&apos;única finalitat de fer més eficaç la seva transmissió ulterior i desapareixen en acabar la sessió de l&apos;usuari. En cap cas s&apos;utilitzaran les cookies per recollir informació de caràcter personal.
      </p>
      <p className="mt-3 text-slate-700 leading-relaxed">
        Des del lloc web del client és possible que es redirigeixi a continguts de tercers llocs web. Atès que el prestador no pot controlar sempre els continguts introduïts pels tercers en els seus llocs web, aquest no assumeix cap tipus de responsabilitat respecte a aquests continguts. En tot cas, el prestador manifesta que procedirà a la retirada immediata de qualsevol contingut que pogués contravenir la legislació nacional o internacional, la moral o l&apos;ordre públic, procedint a la retirada immediata de la redirecció a dit lloc web, posant en coneixement de les autoritats competents el contingut en qüestió.
      </p>
      <p className="mt-3 text-slate-700 leading-relaxed">
        El prestador no es fa responsable de la informació i continguts emmagatzemats, a títol enunciatiu però no limitatiu, en fòrums, xats, generadors de blogs, comentaris, xarxes socials o qualsevol altre mitjà que permeti a tercers publicar continguts de forma independent en la pàgina web del prestador. No obstant això i en compliment del que disposa l&apos;art. 11 i 16 de la LSSI-CE, el prestador es posa a disposició de tots els usuaris, autoritats i forces de seguretat, i col·laborant de forma activa en la retirada o si escau bloqueig de tots aquells continguts que puguin afectar o contravenir la legislació nacional, o internacional, drets de tercers o la moral i l&apos;ordre públic.
      </p>
      <p className="mt-3 text-slate-700 leading-relaxed">
        En el cas que l&apos;usuari consideri que existeix en el lloc web algun contingut que pogués ser susceptible d&apos;aquesta classificació, es prega ho faci saber de forma immediata a l&apos;administrador del lloc web. Aquest lloc web ha estat revisat i provat perquè funcioni correctament. En principi, pot garantir-se el correcte funcionament els 365 dies de l&apos;any, 24 hores al dia. No obstant això, el prestador no descarta la possibilitat que existeixin certs errors de programació, o que esdevinguin causes de força major, catàstrofes naturals, vagues, o circumstàncies semblants que facin impossible l&apos;accés a la pàgina web.
      </p>

      <h2 className="mt-12 text-xl font-bold text-slate-900">Propietat Intel·lectual i industrial</h2>
      <p className="mt-3 text-slate-700 leading-relaxed">
        El lloc web, incloent a títol enunciatiu però no limitatiu la seva programació, edició, compilació i altres elements necessaris per al seu funcionament, els dissenys, logotips, text i/o gràfics són propietat del prestador o si escau disposa de llicència o autorització expressa per part dels autors. Tots els continguts del lloc web es troben degudament protegits per la normativa de propietat intel·lectual i industrial, així com inscrits en els registres públics corresponents.
      </p>
      <p className="mt-3 text-slate-700 leading-relaxed">
        Independentment de la finalitat per a la qual fossin destinats, la reproducció total o parcial, ús, explotació, distribució i comercialització, requereix en tot cas de l&apos;autorització escrita prèvia per part del prestador. Qualsevol ús no autoritzat prèviament per part del prestador serà considerat un incompliment greu dels drets de propietat intel·lectual o industrial de l&apos;autor.
      </p>
      <p className="mt-3 text-slate-700 leading-relaxed">
        Els dissenys, logotips, text i/o gràfics aliens al prestador i que poguessin aparèixer en el lloc web, pertanyen als seus respectius propietaris, sent ells mateixos responsables de qualsevol possible controvèrsia que pogués suscitar respecte a aquests. En tot cas, el prestador compta amb l&apos;autorització expressa i prèvia per part dels mateixos.
      </p>
      <p className="mt-3 text-slate-700 leading-relaxed">
        El prestador NO AUTORITZA expressament a que tercers puguin redirigir directament als continguts concrets del lloc web, i en tot cas redirigir al lloc web principal del prestador.
      </p>
      <p className="mt-3 text-slate-700 leading-relaxed">
        El prestador reconeix a favor dels seus titulars els corresponents drets de propietat industrial i intel·lectual, no implicant el seu sol esment o aparició en el lloc web l&apos;existència de drets o responsabilitat alguna del prestador sobre els mateixos, com tampoc respatller, patrocini o recomanació per part del mateix.
      </p>
      <p className="mt-3 text-slate-700 leading-relaxed">
        Per realitzar qualsevol tipus d&apos;observació respecte a possibles incompliments dels drets de propietat intel·lectual o industrial, així com sobre qualsevol dels continguts del lloc web, pot fer-ho a través del següent correu electrònic.
      </p>

      <h2 className="mt-12 text-xl font-bold text-slate-900">Veracitat de la informació</h2>
      <p className="mt-3 text-slate-700 leading-relaxed">
        Tota la informació que facilita l&apos;Usuari ha de ser veraç. A aquests efectes, l&apos;Usuari garanteix l&apos;autenticitat de les dades comunicades a través dels formularis per a la subscripció dels Serveis. Serà responsabilitat de l&apos;Usuari mantenir tota la informació facilitada a CONTROL PLAY SPORTS, S.L. permanentment actualitzada de manera que respongui, en cada moment, a la seva situació real. En tot cas, l&apos;Usuari serà l&apos;únic responsable de les manifestacions falses o inexactes que realitzi i dels perjudicis que causi al prestador o a tercers.
      </p>

      <h2 className="mt-12 text-xl font-bold text-slate-900">Menors d&apos;edat</h2>
      <p className="mt-3 text-slate-700 leading-relaxed">
        Per a l&apos;ús dels serveis, els menors d&apos;edat han d&apos;obtenir sempre prèviament el consentiment dels pares, tutors o representants legals, responsables últims de tots els actes realitzats pels menors al seu càrrec. La responsabilitat en la determinació de continguts concrets als quals accedeixen els menors correspon a aquells, és per això que si accedeixen a continguts no apropiats per Internet, s&apos;hauran d&apos;establir en els seus ordinadors mecanismes, en particular programes informàtics, filtres i bloquejos, que permetin limitar els continguts disponibles i, tot i que no siguin infal·libles, són d&apos;especial utilitat per controlar i restringir els materials als quals poden accedir els menors.
      </p>

      <h2 className="mt-12 text-xl font-bold text-slate-900">Obligació de fer un ús correcte de la web</h2>
      <p className="mt-3 text-slate-700 leading-relaxed">
        L&apos;Usuari es compromet a utilitzar la web de conformitat a la Llei i al present Avís Legal, així com a la moral i als bons costums. A aquest efecte, l&apos;Usuari s&apos;abstindrà d&apos;utilitzar la pàgina amb finalitats il·lícites o prohibides, lesives de drets i interessos de tercers, o que de qualsevol forma puguin danyar, inutilitzar, sobrecarregar, deteriorar o impedir la normal utilització d&apos;equips informàtics o documents, arxius i tota classe de continguts emmagatzemats en qualsevol equip informàtic del prestador.
      </p>
      <p className="mt-3 text-slate-700 leading-relaxed">
        En particular, i a títol indicatiu però no exhaustiu, l&apos;Usuari es compromet a no transmetre, difondre o posar a disposició de tercers informacions, dades, continguts, missatges, gràfics, dibuixos, arxius de so o imatge, fotografies, enregistraments, programari i, en general, qualsevol classe de material que:
      </p>
      <ul className="mt-3 list-inside list-disc space-y-1 text-slate-700">
        <li>(A) sigui contrària, menyspreï o atempti contra els drets fonamentals i les llibertats públiques reconegudes constitucionalment, en tractats internacionals i altres normes vigents;</li>
        <li>(B) indueixi, inciti o promogui actuacions delictives, denigrants, difamatòries, violentes o, en general, contràries a la llei, a la moral i l&apos;ordre públic;</li>
        <li>(C) indueixi, inciti o promogui actuacions, actituds o pensaments discriminatoris per raó de sexe, raça, religió, creences, edat o condició;</li>
        <li>(D) sigui contrari al dret a l&apos;honor, a la intimitat personal o familiar o a la pròpia imatge de les persones;</li>
        <li>(E) de qualsevol manera perjudiqui la credibilitat del prestador o de tercers; i</li>
        <li>(F) constitueixi publicitat il·lícita, enganyosa o deslleial.</li>
      </ul>

      <h2 className="mt-12 text-xl font-bold text-slate-900">Llei Aplicable i Jurisdicció</h2>
      <p className="mt-3 text-slate-700 leading-relaxed">
        Per a la resolució de totes les controvèrsies o qüestions relacionades amb el present lloc web o de les activitats en ell desenvolupades, serà d&apos;aplicació la legislació espanyola, a la qual se sotmeten expressament les parts, sent competents per a la resolució de tots els conflictes derivats o relacionats amb el seu ús els Jutjats i Tribunals de SANT VICENÇ DELS HORTS.
      </p>

      <p className="mt-16 text-sm text-slate-500">
        <a href="/" className="text-emerald-600 hover:underline">← Tornar a la pàgina principal</a>
      </p>
    </div>
  );
}
