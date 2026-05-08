# CS Learning Hub

A public read-only CS learning website built with Next.js, React, Tailwind CSS, and file-based revision notes in `content/algorithms/`.

The current site includes:

- A homepage dashboard
- An Algorithms course page
- Week-by-week note pages
- A search bar for note title, tags, summary, and content
- Responsive layouts for laptop and mobile

## Production summary

- Framework: Next.js App Router
- Language: TypeScript
- Package manager: npm
- Local dev command: `npm run dev`
- Production build command: `npm run build`
- Production start command: `npm run start`

## Project structure

```text
app/
  courses/
    algorithms/
      [slug]/page.tsx
      page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  search-notes.tsx
content/
  algorithms/
    week-01-computational-complexity.mdx
    ...
lib/
  notes.ts
postcss.config.mjs
next.config.mjs
```

## Public-content policy

This website is intended to be public and read-only.

- Public content should live in `content/algorithms/` as transformed revision notes.
- Do not place raw lecture PDFs in `public/`.
- Do not link directly to raw lecture PDFs from the website unless you explicitly want them public.
- Raw lecture PDFs should stay outside the deployed app or inside ignored folders such as `sources/` or `lecture_pdfs/`.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app:

```text
http://localhost:3000
```

## Build locally

Run a production build:

```bash
npm run build
```

Optionally verify TypeScript separately:

```bash
npm run typecheck
```

To run the production build locally:

```bash
npm run start
```

## Deploy to Vercel

### Option 1: Vercel dashboard

1. Push this project to a Git repository.
2. Import the repository into Vercel.
3. Vercel should detect it as a Next.js project automatically.
4. Use the default settings:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output setting: Next.js default
5. Deploy.

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

For production deployment:

```bash
vercel --prod
```

## Adding future Week 11–13 notes

Add a new `.mdx` file inside `content/algorithms/` using the same frontmatter and section structure as the existing notes.

Example filename:

```text
content/algorithms/week-11-[short-topic-slug].mdx
```

Required frontmatter:

```md
---
title: "Week 11 — Topic Name"
course: "Data Structures and Algorithms"
week: 11
tags: ["tag1", "tag2", "tag3"]
summary: "One-sentence summary of this lecture."
---
```

Recommended body structure:

```md
# Week 11 — Topic Name

## Learning Objectives

## Core Concepts

## Key Algorithms

## Pseudocode

## Time Complexity

## Worked Example

## Common Mistakes

## Exam-Style Questions

## Quick Review Checklist
```

After adding a new note:

```bash
npm run build
```

The course page and note routes are generated automatically from the files in `content/algorithms/`.
