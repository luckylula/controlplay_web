# Control Play Sports – Web renovada

Renovación del sitio [controlplaysports.com](https://www.controlplaysports.com/) con un diseño similar a [cpmaterialdeportivo.com](https://cpmaterialdeportivo.com/). Se mantiene la misma estructura de páginas, enlaces y subcategorías; el contenido se puede ir actualizando poco a poco.

## Stack

- **Next.js** (App Router)
- **Tailwind CSS**
- **TypeScript**

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Estructura del sitio (igual que la original)

- **Inici** – Portada con hero y bloques de servicios
- **Qui Som?** – Presentación
- **Menjadors Escolars**
- **Activitats Extraescolars** – Página índice + una página por cada actividad:
  - English Time, Robòtica, Taller Interactiu de Ciència, Minichef, Divertaller + Taller d'estudi, Contacontes
  - Futbol Sala, Circ i Malabars, Patins a l'escola, Bàsquet/Handbol/Voley, Hip-Hop/Danses, Hockey/Mini-Tennis/Beisbol, Taekwondo/Judo, Multiesport
- **Casals**
- **Futsal Camps**
- **Canal Etic**
- **Contacte**
- **Botiga Online** → enlace externo a cpmaterialdeportivo.com
- **Avís Legal**, **Política de Privacitat**, **Política de Galetes**

La navegación y los enlaces se definen en `src/lib/navigation.ts`. Para añadir o cambiar páginas, edita ahí y crea las rutas correspondientes en `src/app/`.

## GitHub

1. Crea un repositorio nuevo en GitHub (ej: `controlplay_web`).
2. Inicializa git y enlaza el origen:

```bash
git init
git add .
git commit -m "Initial commit – Next.js + Tailwind, estructura controlplaysports"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/controlplay_web.git
git push -u origin main
```

3. Trabaja en ramas y haz push con normalidad.

## Vercel

1. Entra en [vercel.com](https://vercel.com) e inicia sesión (con GitHub si quieres).
2. **Add New** → **Project** e importa el repositorio `controlplay_web`.
3. Deja las opciones por defecto (Framework: Next.js, Root: `.`).
4. Pulsa **Deploy**. Vercel detectará Next.js y hará el build y el despliegue.
5. Para dominios personalizados (ej: `www.controlplaysports.com`), en **Project → Settings → Domains** añade el dominio y sigue las instrucciones de DNS.

Cada push a `main` (o la rama que elijas) generará un nuevo despliegue automático.
