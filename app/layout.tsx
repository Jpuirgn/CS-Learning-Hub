import type { Metadata } from "next";
import "./globals.css";

const fallbackStyles = `
:root {
  --background: #f7f6f2;
  --foreground: #171717;
  --muted: #66604f;
  --line: #d9d2c3;
  --panel: #fffdfa;
  --accent: #1f4b99;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  background: radial-gradient(circle at top, #fcfbf8 0%, var(--background) 60%);
  color: var(--foreground);
  font-family: Georgia, "Times New Roman", serif;
  line-height: 1.5;
}

a {
  color: inherit;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

.block { display: block; }
.flex { display: flex; }
.grid { display: grid; }
.h-fit { height: fit-content; }
.min-h-screen { min-height: 100vh; }
.w-full { width: 100%; }
.max-w-2xl { max-width: 42rem; }
.max-w-3xl { max-width: 48rem; }
.max-w-6xl { max-width: 72rem; }
.max-w-7xl { max-width: 80rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 0.75rem; }
.gap-4 { gap: 1rem; }
.gap-5 { gap: 1.25rem; }
.gap-8 { gap: 2rem; }
.rounded-xl { border-radius: 0.75rem; }
.rounded-2xl { border-radius: 1rem; }
.rounded-3xl { border-radius: 1.5rem; }
.rounded-full { border-radius: 9999px; }
.border { border: 1px solid; }
.border-b { border-bottom: 1px solid; }
.border-dashed { border-style: dashed; }
.border-\\[var\\(--line\\)\\] { border-color: var(--line); }
.bg-\\[var\\(--panel\\)\\] { background-color: var(--panel); }
.bg-blue-50 { background-color: #eff6ff; }
.bg-white { background-color: #fff; }
.p-5 { padding: 1.25rem; }
.p-6 { padding: 1.5rem; }
.p-8 { padding: 2rem; }
.px-2\\.5 { padding-left: 0.625rem; padding-right: 0.625rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
.py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
.py-4 { padding-top: 1rem; padding-bottom: 1rem; }
.py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
.py-10 { padding-top: 2.5rem; padding-bottom: 2.5rem; }
.pb-6 { padding-bottom: 1.5rem; }
.pl-4 { padding-left: 1rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-5 { margin-top: 1.25rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 0.75rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-5 { margin-bottom: 1.25rem; }
.mb-8 { margin-bottom: 2rem; }
.mb-10 { margin-bottom: 2.5rem; }
.space-y-3 > :not(:last-child) { margin-bottom: 0.75rem; }
.space-y-4 > :not(:last-child) { margin-bottom: 1rem; }
.text-xs { font-size: 0.75rem; line-height: 1rem; }
.text-sm { font-size: 0.875rem; line-height: 1.25rem; }
.text-base { font-size: 1rem; line-height: 1.5rem; }
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.leading-7 { line-height: 1.75rem; }
.leading-8 { line-height: 2rem; }
.font-semibold { font-weight: 600; }
.tracking-tight { letter-spacing: -0.025em; }
.tracking-\\[0\\.18em\\] { letter-spacing: 0.18em; }
.tracking-\\[0\\.2em\\] { letter-spacing: 0.2em; }
.tracking-\\[0\\.22em\\] { letter-spacing: 0.22em; }
.tracking-\\[0\\.25em\\] { letter-spacing: 0.25em; }
.text-\\[var\\(--accent\\)\\] { color: var(--accent); }
.text-\\[var\\(--muted\\)\\] { color: var(--muted); }
.text-neutral-900 { color: #171717; }
.text-neutral-950 { color: #0a0a0a; }
.uppercase { text-transform: uppercase; }
.underline-offset-4 { text-underline-offset: 4px; }
.shadow-sm { box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06); }
.transition { transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, transform 0.15s ease; }
.outline-none { outline: none; }

@media (hover: hover) {
  .hover\\:-translate-y-0\\.5:hover { transform: translateY(-0.125rem); }
  .hover\\:border-\\[var\\(--accent\\)\\]:hover { border-color: var(--accent); }
  .hover\\:bg-stone-50:hover { background-color: #fafaf9; }
  .hover\\:text-\\[var\\(--accent\\)\\]:hover { color: var(--accent); }
  .hover\\:underline:hover { text-decoration: underline; }
}

.focus\\:border-\\[var\\(--accent\\)\\]:focus { border-color: var(--accent); }

@media (min-width: 48rem) {
  .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .md\\:p-10 { padding: 2.5rem; }
  .md\\:px-10 { padding-left: 2.5rem; padding-right: 2.5rem; }
}

@media (min-width: 64rem) {
  .lg\\:sticky { position: sticky; }
  .lg\\:top-6 { top: 1.5rem; }
  .lg\\:grid-cols-\\[1\\.1fr_0\\.9fr\\] { grid-template-columns: 1.1fr 0.9fr; }
  .lg\\:grid-cols-\\[240px_minmax\\(0\\,1fr\\)\\] { grid-template-columns: 240px minmax(0, 1fr); }
}

.prose-academic h1,
.prose-academic h2,
.prose-academic h3,
.prose-academic h4 {
  color: #111111;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.prose-academic h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.prose-academic h2 {
  font-size: 1.4rem;
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
  border-bottom: 1px solid var(--line);
  padding-bottom: 0.35rem;
}

.prose-academic h3 {
  font-size: 1.1rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.prose-academic p,
.prose-academic li {
  color: #2f2b23;
  line-height: 1.8;
}

.prose-academic ul,
.prose-academic ol {
  margin: 0.8rem 0;
  padding-left: 1.2rem;
}

.prose-academic ul {
  list-style: disc;
}

.prose-academic ol {
  list-style: decimal;
}

.prose-academic code {
  background: #f2ede2;
  border-radius: 0.25rem;
  padding: 0.15rem 0.35rem;
  font-size: 0.92em;
}

.prose-academic pre {
  background: #141414;
  color: #f8f8f2;
  padding: 1rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  margin: 1rem 0;
}

.prose-academic pre code {
  background: transparent;
  padding: 0;
}
`;

export const metadata: Metadata = {
  title: "CS Learning Hub",
  description: "A personal course dashboard and note hub for computer science study."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: fallbackStyles }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
