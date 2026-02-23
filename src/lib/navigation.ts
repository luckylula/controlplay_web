/**
 * Site navigation – mirrors controlplaysports.com structure.
 * All links and subcategories preserved for gradual migration.
 */

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export const siteName = "Control Play";

export const mainNav: NavItem[] = [
  { label: "Inici", href: "/" },
  { label: "Equip CP", href: "/equip-cp" },
  { label: "Menjadors Escolars", href: "/menjadors-escolars" },
  {
    label: "Activitats Extraescolars",
    href: "/activitats-extraescolars",
    children: [
      // Activitats Lúdico-educatives
      { label: "English Time", href: "/activitats-extraescolars/english-time" },
      { label: "Robòtica", href: "/activitats-extraescolars/robotica" },
      {
        label: "Taller Interactiu de Ciència",
        href: "/activitats-extraescolars/taller-ciencia",
      },
      { label: "Minichef", href: "/activitats-extraescolars/minichef" },
      {
        label: "Divertaller + Taller d'estudi",
        href: "/activitats-extraescolars/divertaller",
      },
      { label: "Contacontes", href: "/activitats-extraescolars/contacontes" },
      // Activitats Esportives
      { label: "Futbol Sala", href: "/activitats-extraescolars/futbol-sala" },
      {
        label: "Circ i Malabars",
        href: "/activitats-extraescolars/circ-malabars",
      },
      {
        label: "Patins a l'escola",
        href: "/activitats-extraescolars/patins",
      },
      {
        label: "Bàsquet, Handbol i Voley",
        href: "/activitats-extraescolars/basquet-handbol-voley",
      },
      {
        label: "Hip-Hop / Danses Modernes",
        href: "/activitats-extraescolars/hip-hop-danses",
      },
      {
        label: "Hockey, Mini-Tennis i Beisbol",
        href: "/activitats-extraescolars/hockey-mini-tennis-beisbol",
      },
      {
        label: "Taekwondo / Judo",
        href: "/activitats-extraescolars/taekwondo-judo",
      },
      { label: "Multiesport", href: "/activitats-extraescolars/multiesport" },
    ],
  },
  { label: "Casals", href: "/casals" },
  { label: "Futsal Camps", href: "/futsal-camps" },
  { label: "Canal Etic", href: "/canal-etic" },
  { label: "Unete a l'Equip", href: "/unete-a-lequip" },
  { label: "Contacte", href: "/contacte" },
  {
    label: "Botiga Online",
    href: "https://cpmaterialdeportivo.com/",
    external: true,
  },
];

export const footerNav: NavLink[] = [
  { label: "Equip CP", href: "/equip-cp" },
  { label: "Menjadors Escolars", href: "/menjadors-escolars" },
  { label: "Activitats Extraescolars", href: "/activitats-extraescolars" },
  { label: "Casals", href: "/casals" },
  { label: "Futsal Camps", href: "/futsal-camps" },
  { label: "Canal Etic", href: "/canal-etic" },
  { label: "Unete a l'Equip", href: "/unete-a-lequip" },
  { label: "Contacte", href: "/contacte" },
  { label: "Avís Legal", href: "/avis-legal" },
  { label: "Política de Privacitat", href: "/politica-privacitat" },
  { label: "Política de Galetes", href: "/politica-galetes" },
];

export const contact = {
  phone: "622 61 33 93",
  email: "info@controlplaysports.com",
  address: "Carrer Sant Miquel 63, 08620 Sant Vicenç dels Horts, Barcelona.",
  officeHours: [
    "Dilluns - Dijous: 9:00 a 13:00 i 15:00 a 19:00",
    "Divendres: 9:00 a 13:00 i 15:00 a 18:00",
  ],
};
