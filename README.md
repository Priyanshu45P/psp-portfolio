# Priyanshu Pawar – Software Engineer Portfolio

React + TypeScript + Vite + Tailwind CSS + Framer Motion + React Router.

## Run
```
npm install
npm run dev        # development
npm run build      # type-check + production build
npm run preview    # preview production build
```

## Before you publish (required)
1. **CV**: copy your CV to `public/documents/Priyanshu-Pawar-Software-Engineer-CV.pdf`.
2. **Email**: set `email` in `src/config.ts` (left empty, not invented).
3. **Contact form**: set `VITE_FORM_ENDPOINT` (see `.env.example`, e.g. a Formspree endpoint). Without it the form validates but honestly reports that nothing was sent.
4. **Screenshots**: project images are labelled "Illustrative preview". Replace `Preview` with real screenshots in `public/projects/` when ready.
5. **Review project text**: challenges, solutions and testing sections are drafted from your brief; edit them in `src/data/projects.ts` so they match what you actually did.
6. Add `sitemap.xml` and canonical URLs once you have a domain.

## Deploy (Vercel)
Import the repo; framework preset Vite; build `npm run build`; output `dist`. `vercel.json` handles route rewrites. Add `VITE_FORM_ENDPOINT` as an environment variable.

## Visual design
The portfolio uses a dark navy visual system with cyan/blue accents, a Java code-editor hero, responsive glass-effect surfaces, motion-based section reveals, interactive project cards, and mobile navigation. The project data, case-study routes, architecture diagrams, contact form behaviour, and existing content model are retained.
