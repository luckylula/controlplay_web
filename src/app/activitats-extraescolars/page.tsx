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

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Activitats Extraescolars</h1>
      <p className="mt-4 text-lg text-slate-600">
        Dissenyem i portem a terme un gran ventall d&apos;activitats extraescolars. Tant esportives com formatives i lúdiques.
      </p>

      {/* Finestres per activitat – mateix tipus de targeta que a la portada (aspecte 4/3 + text) */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {children.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="group block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            {/* Finestra (mateixa proporció que les targetes de la portada) */}
            <div
              className={`relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br ${CARD_COLORS[index % CARD_COLORS.length]} flex items-center justify-center`}
            >
              <span className="text-5xl font-bold text-white/90 sm:text-6xl" aria-hidden>
                {item.label.charAt(0)}
              </span>
            </div>
            <div className="border-t border-slate-200 p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 sm:text-xl">
                {item.label}
              </h2>
              <span className="mt-3 inline-block text-base font-medium text-emerald-600">
                Saber més →
              </span>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </>
  );
}
