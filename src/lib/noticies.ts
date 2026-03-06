/**
 * Notícies i novetats per a la secció «Descobreix les nostres notícies» i la pàgina /noticies.
 * Format compatible amb les targetes de la portada (label, href, image opcional).
 */

export type NoticiaItem = {
  label: string;
  href: string;
  image?: string;
};

/** Llista de notícies mostrades a la portada i a la pàgina Totes les notícies. */
export const NOTICIES: NoticiaItem[] = [
  {
    label: "Inscripcions obertes activitats extraescolars",
    href: "/activitats-extraescolars",
    image: "/images/extraescolars/robotica/robotica.png",
  },
  {
    label: "Menjadors escolars: Dinem en família",
    href: "/menjadors-escolars",
  },
  {
    label: "Robòtica i taller de ciència",
    href: "/activitats-extraescolars/robotica",
    image: "/images/extraescolars/robotica/robotica.png",
  },
  {
    label: "Casals d'estiu i vacances",
    href: "/casals",
  },
  {
    label: "Canteen Project i alimentació saludable",
    href: "/menjadors-escolars",
  },
  {
    label: "De l'hort al menjador",
    href: "/menjadors-escolars",
  },
  {
    label: "Futbol sala, multiesport i esports",
    href: "/activitats-extraescolars/futbol-sala",
    image: "/images/extraescolars/futbol-sala/futbol%20sala.png",
  },
  {
    label: "English Time i activitats en anglès",
    href: "/activitats-extraescolars/english-time",
    image: "/images/extraescolars/english-time/englishtime.png",
  },
  {
    label: "Taller interactiu de ciència",
    href: "/activitats-extraescolars/taller-ciencia",
    image: "/images/extraescolars/taller-ciencia/ciencia.png",
  },
];
