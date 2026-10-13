# Enactus BITS Pilani Website

The public website for Enactus BITS Pilani: a single-page React site with sections for the hero, about, journey, projects, PoR holders, partners and contact.

## Tech stack

- React 18 with TypeScript, built with Vite
- Tailwind CSS for styling
- Framer Motion for animation
- React Router for navigation
- lucide-react for icons

## Running locally

Requires Node.js 18 or newer.

```bash
npm ci
npm run dev
```

The site is served at `http://localhost:5173`.

Other scripts:

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

## Project structure

```
index.html                     page shell, fonts, meta tags
public/                        favicon, background silhouettes, robots.txt, host redirects
src/main.tsx                   entry point
src/App.tsx                    router and page layout
src/pages/Home.tsx             the home page, composed of the sections below
src/components/Navbar.tsx      top navigation
src/components/Footer.tsx      footer
src/components/Avatar.tsx      member photo with initials fallback
src/components/sections/       Hero, About, Timeline, Projects, Team, Partners, Contact
src/data/team.ts               PoR holders (name, role, photo, LinkedIn, email)
src/assets/partners/           partner logos
tailwind.config.js             colour palette and theme tokens
```

## Editing content

- **PoR holders:** edit `src/data/team.ts`. Keep the President first. Put photos in `public/team/` and set `image` to `/team/<file>`.
- **Projects:** edit the `projects` array in `src/components/sections/Projects.tsx`. Leave `image` empty to show the yellow placeholder.
- **Journey milestones:** edit the `milestones` array in `src/components/sections/Timeline.tsx`.
- **Partners:** edit the `partners` array in `src/components/sections/Partners.tsx`.
- **Colours:** the palette lives in `tailwind.config.js`.

## Contact form

The form in the contact section posts to [FormSubmit](https://formsubmit.co), which forwards messages to `contact@enactusbitsp.org`. The first submission sends an activation email to that inbox; the link in it must be clicked once before messages are delivered.

## Deployment

`npm run build` produces a static site in `dist/` that can be hosted on any static host. The site expects to be served from the root of its domain.

Unknown paths need to fall back to `index.html`. This is already configured for Netlify (`public/_redirects`) and Vercel (`vercel.json`); other hosts need the equivalent setting.

## Contact form

The form in the contact section posts to [FormSubmit](https://formsubmit.co), which forwards messages to `contact@enactusbitsp.org`. The first submission sends an activation email to that inbox; the link in it must be clicked once before messages are delivered.

## Deployment

`npm run build` produces a static site in `dist/` that can be hosted on any static host. The site expects to be served from the root of its domain.

Unknown paths need to fall back to `index.html`. This is already configured for Netlify (`public/_redirects`) and Vercel (`vercel.json`); other hosts need the equivalent setting.

## Not in use

- `backend/` and `server/` contain two unfinished Express/MongoDB API drafts. The site does not call them.
- `src/pages/Login.tsx`, `src/pages/Dashboard.tsx` and their helpers are a mock login that is no longer routed.

## Contact

- Email: contact@enactusbitsp.org
