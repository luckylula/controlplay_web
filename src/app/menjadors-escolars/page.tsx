import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Menjadors Escolars",
  description:
    "Control Play Cuina – Gestió de menjadors escolars. Continuïtat educativa, alimentació saludable i menús de qualitat. Transparència amb famílies i escola.",
};

const MENJADOR_VIDEO = "/images/menjadors/menjador%20video.mp4";

export default function MenjadorsEscolarsPage() {
  return (
    <>
      {/* Vídeo a dalt – mateixa mida que la franja de vídeo de la portada */}
      <section className="relative w-full overflow-hidden bg-black aspect-[21/9] min-h-[260px] max-h-[420px] sm:min-h-[300px] lg:max-h-[520px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-bottom"
          src={MENJADOR_VIDEO}
        />
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Servei de Menjador Escolar
        </h1>
        <Image
          src="/images/logos/CP%20CUINA.png"
          alt="Control Play Cuina"
          width={280}
          height={80}
          className="mt-3 h-20 w-auto sm:h-24"
        />

        {/* Bloc 1: Foto esquerra (lleu rotació) | Text dreta, desplaçat una mica */}
        <section className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-amber-50/80 lg:-rotate-2">
            <Image
              src="/images/menjadors/menjador1.png"
              alt="Menjador escolar"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:pl-6">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Molt més que un menjador escolar
            </h2>
            <p className="mt-4 space-y-1 text-slate-600">
              Aquí no només es dina.<br />
              Aquí s&apos;aprèn.<br />
              Aquí es comparteix.<br />
              Aquí es creix.
            </p>
            <p className="mt-4 text-slate-600">
              Convertim el temps de menjador en un espai educatiu, saludable i ple de valors.
            </p>
          </div>
        </section>

        {/* Bloc 2: Text esquerra, una mica més a la dreta | Foto dreta (rotació oposada) */}
        <section className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1 lg:pr-4 lg:translate-x-2">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Alimentem el seu futur
            </h2>
            <p className="mt-3 text-slate-600">
              Sabem que cada àpat compta. Per això oferim:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-slate-600">
              <li>Producte fresc i de temporada</li>
              <li>Cuina amb oli d&apos;oliva</li>
              <li>Carn fresca, sense congelats</li>
              <li>Peix adequat a l&apos;etapa escolar</li>
              <li>Productes Km0 i ecològics</li>
            </ul>
            <p className="mt-4 text-slate-600">
              Qualitat real. Sense artificis. Sense improvisacions.
            </p>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl bg-amber-50/80 lg:order-2 lg:rotate-2 lg:mt-6">
            <Image
              src="/images/menjadors/menjador2.png"
              alt="Menjador i alimentació"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Bloc 3: Foto esquerra (desplaçada cap a l’esquerra) | Text dreta (més cap a la dreta) */}
        <section className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-amber-50/80 lg:-ml-4">
            <Image
              src="/images/menjadors/menjador3.png"
              alt="Menjador i famílies"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:pl-10">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Tranquil·litat per a les famílies
            </h2>
            <p className="mt-3 text-slate-600">
              La confiança no es promet. Es demostra.
            </p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-black" aria-hidden>✔</span>
                Dietista-nutricionista col·legiada
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-black" aria-hidden>✔</span>
                Compliment estricte de normativa sanitària
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-black" aria-hidden>✔</span>
                Controls i auditories periòdiques
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-black" aria-hidden>✔</span>
                Personal format i qualificat
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-black" aria-hidden>✔</span>
                Supervisió constant del servei
              </li>
            </ul>
            <p className="mt-4 text-slate-600">
              Seguretat, rigor i transparència.
            </p>
          </div>
        </section>

        {/* Fila: Paràgraf esquerra | Vídeo | Paràgraf dreta */}
        <section className="mt-16 border-t border-slate-200 pt-12">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.9fr_2.2fr_0.9fr] lg:gap-6">
            {/* Esquerra: només el paràgraf Educació també a taula */}
            <div>
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Educació també a taula
              </h2>
              <p className="mt-3 text-slate-600">
                El menjador és una aula més. Treballem:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-slate-600">
                <li>Hàbits saludables</li>
                <li>Autonomia personal</li>
                <li>Convivència i respecte</li>
                <li>Responsabilitat</li>
                <li>Educació emocional</li>
              </ul>
              <p className="mt-4 text-slate-600">
                Perquè menjar bé també és educar bé.
              </p>
            </div>

            {/* Centre: vídeo Play Menjadors – més alt, sense franges */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
                src="/images/play/play%20video%20menjadors.mp4"
              />
            </div>

            {/* Dreta: paràgraf Equip amb vocació */}
            <div>
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Equip amb vocació
              </h2>
              <p className="mt-3 text-slate-600">
                Som mestres. Som professionals de la restauració. Som educadors.
              </p>
              <p className="mt-2 text-slate-600">
                I sobretot, som persones amb passió pel que fem.
              </p>
              <p className="mt-3 text-slate-600">
                Ens adaptem a cada escola. Ens integrem al seu projecte educatiu. Caminem al costat de la direcció i les famílies.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-center text-xl font-semibold text-slate-900 sm:text-2xl">
            Dinàmic. Organitzat. Viu.
          </h2>
          <p className="mt-4 text-slate-600">
            Activitats setmanals. Projectes especials. Tallers d&apos;alimentació. Assemblees amb els infants. Festes escolars. Aprenentatge en anglès.
          </p>
          <p className="mt-4 text-slate-600">
            Un menjador actiu, participatiu i amb sentit.
          </p>
        </section>

        {/* Franja amb foto (com a la portada) – text al damunt */}
      </div>

      <section className="relative min-h-[280px] w-full overflow-hidden border-t border-slate-200 sm:min-h-[320px] lg:min-h-[360px]">
        <Image
          src="/images/menjadors/menjador4.png"
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
