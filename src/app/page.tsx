import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero – similar to cpmaterialdeportivo.com */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Control Play
            </h1>
            <p className="mt-4 text-xl text-slate-300">
              Al servei del món educatiu i esportiu!
            </p>
            <p className="mt-6 text-lg text-slate-400">
              Oferim menjadors escolars, activitats extraescolars, casals i material esportiu per a centres educatius i col·lectius.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contacte"
                className="rounded-lg bg-emerald-500 px-6 py-3 font-medium text-white shadow-lg transition hover:bg-emerald-600"
              >
                Contacta&apos;ns
              </Link>
              <Link
                href="/qui-som"
                className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
              >
                Qui som?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories – 4 blocks like cpmaterialdeportivo */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Els nostres serveis
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
            Tot el que el teu centre necessita, amb garanties de qualitat i formalitat.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/menjadors-escolars"
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">Menjadors escolars</h3>
              <p className="mt-2 text-sm text-slate-600">
                Continuïtat del Plà Educatiu del Centre durant l&apos;espai del menjador. Menú de qualitat.
              </p>
            </Link>
            <Link
              href="/activitats-extraescolars"
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white">
                <span className="text-2xl">⚽</span>
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">Activitats extraescolars</h3>
              <p className="mt-2 text-sm text-slate-600">
                Esportives, formatives i lúdiques. Un ventall d&apos;opcions per a l&apos;escola.
              </p>
            </Link>
            <Link
              href="/casals"
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 text-sky-600 group-hover:bg-sky-500 group-hover:text-white">
                <span className="text-2xl">🏕️</span>
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">Casals</h3>
              <p className="mt-2 text-sm text-slate-600">
                Dissenyats perquè els nens gaudeixin les vacances. Divertir-se, descobrir i aprendre.
              </p>
            </Link>
            <Link
              href="https://cpmaterialdeportivo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 text-violet-600 group-hover:bg-violet-500 group-hover:text-white">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">Botiga on-line</h3>
              <p className="mt-2 text-sm text-slate-600">
                Material esportiu per a col·legis, clubs, ajuntaments i instal·lacions. Tot Espanya.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Contacta&apos;ns</h2>
          <p className="mt-2 text-slate-600">622 61 33 93 · info@controlplaysports.com</p>
          <Link
            href="/contacte"
            className="mt-6 inline-block rounded-lg bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800"
          >
            Enviar missatge
          </Link>
        </div>
      </section>
    </>
  );
}
