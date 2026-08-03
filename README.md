# Kunal Shrestha Portfolio

An editable one-page portfolio built with Next.js, TypeScript, Tailwind CSS,
Framer Motion, and Lucide icons.

## Start locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Edit your content

Most personal content lives in one file:

`src/data/portfolio.ts`

Change the name, initials, role, email, location, biography, stats, projects,
experience, skills, and social links there.

The page metadata (browser title and search description) lives in:

`src/app/layout.tsx`

Replace `public/resume-sample.txt` with your own PDF, for example
`public/resume.pdf`, and change `resumeUrl` in `src/data/portfolio.ts` to
`/resume.pdf`.

## Edit the design

- Layout and page sections: `src/app/page.tsx`
- Colors, typography, spacing, and responsive styles: `src/app/globals.css`
- Navigation: `src/components/navigation.tsx`
- Project card: `src/components/project-card.tsx`
- Scroll animation: `src/components/reveal.tsx`

The main colors are CSS variables at the top of `src/app/globals.css`, so the
visual theme can be changed in one place.

## Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```
