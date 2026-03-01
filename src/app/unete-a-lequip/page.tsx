import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Únete al Equipo",
  description:
    "Control Play – Donde la educación, el deporte y la diversión se convierten en oportunidades. Únete a nuestro equipo.",
};

export default function UneteALEquipPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
        Únete al Equipo Control Play
      </h1>
      <p className="mt-4 text-lg font-medium text-slate-700">
        Donde la Educación, el Deporte y la Diversión se Convierten en Oportunidades
      </p>

      <section className="mt-10">
        <p className="text-slate-600">
          En Control Play trabajamos cada día para crear experiencias educativas, deportivas y
          lúdicas que marcan la diferencia en escuelas, centros y comunidades. Nuestro objetivo es
          acompañar a niños, jóvenes y familias a través de actividades extraescolares, deportivas,
          talleres formativos y servicios integrales pensados para crecer, aprender y disfrutar.
        </p>
        <p className="mt-3 text-slate-600">
          Sabemos que las personas son el corazón de nuestros proyectos. Por eso queremos rodearnos
          de profesionales comprometidos, con espíritu colaborativo y con ganas de aportar ideas
          innovadoras.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          ¿Por qué trabajar con nosotros?
        </h2>
        <p className="mt-3 text-slate-600">
          En Control Play fomentamos un entorno de trabajo dinámico, humano y orientado a la
          excelencia, donde cada profesional aporta su talento y construye su crecimiento
          profesional. Aquí podrás:
        </p>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-black" aria-hidden="true">✔</span>
            Participar en proyectos formativos, deportivos y recreativos que impactan positivamente
            en la comunidad.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-black" aria-hidden="true">✔</span>
            Colaborar con un equipo diverso y motivado.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-black" aria-hidden="true">✔</span>
            Desarrollar tu carrera con oportunidades de aprendizaje continuo.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-black" aria-hidden="true">✔</span>
            Formar parte de una empresa con visión educativa, social y profesional.
          </li>
        </ul>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">¿A quién buscamos?</h2>
        <p className="mt-3 text-slate-600">Buscamos personas:</p>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-black" aria-hidden="true">✔</span>
            Con pasión por la educación, el deporte y el entretenimiento.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-black" aria-hidden="true">✔</span>
            Profesionales responsables, proactivos y con capacidad para trabajar en equipo.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-black" aria-hidden="true">✔</span>
            Con empatía, creatividad y ganas de aportar soluciones.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 text-black" aria-hidden="true">✔</span>
            Con disponibilidad para adaptarse a proyectos diversos y retadores.
          </li>
        </ul>
        <p className="mt-6 text-slate-600">
          Si te gusta hacer que cada día cuente, este es tu lugar.
        </p>
      </section>

      <section className="mt-10 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          ¿Quieres ser parte de nuestro equipo?
        </h2>
        <p className="mt-3 text-slate-600">
          Si te entusiasma trabajar en un entorno donde tu esfuerzo se traduce en experiencias
          memorables para niños, jóvenes y centros educativos… ¡queremos conocerte!
        </p>
        <p className="mt-3 text-slate-600">
          Envíanos tu CV junto con una carta donde nos cuentes qué te motiva de Control Play y cómo
          puedes aportar valor a nuestro equipo.
        </p>
        <p className="mt-6 text-slate-600">
          Control Play es más que un empleo — es un proyecto donde tú también puedes crecer. ¡Anímate
          a formar parte de nuestra familia!
        </p>
        <Link
          href="/contacte"
          className="mt-8 inline-block rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700"
        >
          Contacta con nosotros
        </Link>
      </section>
    </div>
  );
}
