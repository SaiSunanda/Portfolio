# Sunanda Vempati — Blockchain Architecture & Technical Leadership Portfolio

Next.js 15 (App Router) + TypeScript. Fully static: every route is prerendered.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Editing content

All copy lives in `src/content/` — components never hard-code claims.

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, contact links, nav, education, skills, training |
| `experience.ts` | Current role, blockchain roles, earlier IT roles, Infosys award, career journey |
| `leadership.ts` | Leadership pillars (with evidence lines), leadership model, `/leadership` sections |
| `architecture.ts` | Architecture blueprints, architecture decisions (ADRs), security lifecycle |
| `caseStudies.ts` | The four case studies (shared 01–13 template) and additional projects |

Adding a case study = adding an object to `caseStudies` — the route, sitemap entry and cards are generated.

The downloadable resume is `public/Sunanda_Vempati_Resume.pdf`; replace the file to update it.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://your-domain.com`) so canonical URLs, Open Graph and the sitemap use the real domain. Deploys as-is to Vercel, Netlify or any Node host.
