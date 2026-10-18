# HASEEB — THE SERIES

A cinematic, streaming-inspired portfolio for **Mohd Haseeb Hanif**: Software Engineer and AI/ML engineer, final-year B.Tech CSE at Delhi Technological University (DTU ’27).
Every section is an episode, every project is an Original, and the whole site plays like a series.

**▶ Watch it live: [mohd-haseeb-hanif.vercel.app](https://mohd-haseeb-hanif.vercel.app)**

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.
> Built on the open "Portfolio Series" layout by [Sushmita Dasari](https://github.com/Sushmitadasari/Portfolio_series), re-written with Haseeb's own story, projects and artwork.

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/`. It is deployed on Vercel, which redeploys automatically on every push to `main`.

## Updating the content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** It was generated from the resumes, the GitHub profile and the repository READMEs, and every component reads from it.

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `profile` |
| Internships | `experience` |
| A project, or a new one | `projects` (add an object; it appears in Originals, the overlay, the resume sheet and the counts). `demo` adds a Live button, `github` a GitHub button. |
| Leadership / highlights | `achievements` |
| "More from the studio" repo rail | `shelf` |
| Skills and their "where it's used" notes | `skillCategories`, `skillEvidence` |
| Seasons and episodes (My Journey) | `seasons` |
| Top 10 row | `topPicks` |
| ▶ Play Intro highlight reel | `introSlides` |
| Profile order (Haseeb / Recruiter / Developer / AI-ML) | `viewerProfiles` |

**Resumes:** replace `public/assets/Mohd_Haseeb_Hanif_Resume.pdf` (Software Engineer) and `public/assets/Mohd_Haseeb_Hanif_AI_ML_Resume.pdf`.

**Photo:** replace `photo/pic.png` (background-removed cutout, transparent PNG), then run:

```bash
npm run images
```

This rebuilds the responsive WebP portraits and the social share image in `public/assets/`.

## What's inside

```
src/
  data/portfolio.ts        ← single source of truth
  App.tsx                  ← stages: opening → profile select → home; overlays
  components/
    OpeningSequence        ← black → studio card → HASEEB → THE SERIES → portrait → ▶ PLAY
    ProfileSelector        ← "Who's watching?" (changes section order only)
    Hero                   ← billboard: parallax portrait, particles, floating chips
    PlayIntro              ← ▶ Play Intro highlight reel
    Seasons / EpisodeCard  ← My Journey as seasons and episodes
    Originals / ProjectCard← pinned horizontal sequence on desktop, swipe rail on touch
    ProjectModal           ← full-screen project overlay (Live Demo + GitHub)
    Poster                 ← generated key art for each project
    Skills, Achievements, ResumeViewer, FinalCTA
scripts/build-images.mjs   ← portrait/share-image pipeline (sharp)
```
