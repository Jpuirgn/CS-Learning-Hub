import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getAllNotes, getNoteBySlug } from "@/lib/notes";

export function generateStaticParams() {
  return getAllNotes().map((note) => ({
    slug: note.slug
  }));
}

export default async function AlgorithmNotePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap gap-3 text-sm">
          <Link href="/" className="text-[var(--accent)] underline-offset-4 hover:underline">
            Dashboard
          </Link>
          <span className="text-[var(--muted)]">/</span>
          <Link
            href="/courses/algorithms"
            className="text-[var(--accent)] underline-offset-4 hover:underline"
          >
            Data Structures and Algorithms
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="h-fit rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm lg:sticky lg:top-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Table of Contents
            </p>
            <nav className="space-y-3 text-sm">
              {note.toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block text-[var(--muted)] hover:text-[var(--accent)] ${
                    item.level === 3 ? "pl-4" : ""
                  }`}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          </aside>

          <article className="rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-6 shadow-sm md:p-10">
            <header className="mb-8 border-b border-[var(--line)] pb-6">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                Week {note.week}
              </p>
              <h1 className="mb-4 text-4xl font-semibold tracking-tight text-neutral-950">
                {note.title}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-[var(--muted)]">
                {note.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-[var(--accent)]">
                {note.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-blue-50 px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="prose-academic">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
                {note.content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
