import Link from "next/link";
import { SearchNotes } from "@/components/search-notes";
import { getAllNotes, getSearchIndex } from "@/lib/notes";

export default function AlgorithmsCoursePage() {
  const notes = getAllNotes();
  const searchIndex = getSearchIndex();

  return (
    <main className="min-h-screen px-6 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <Link href="/" className="text-sm text-[var(--accent)] underline-offset-4 hover:underline">
            Back to dashboard
          </Link>
        </div>

        <header className="mb-8 rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-8 shadow-sm">
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
            Course Page
          </p>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-neutral-950">
            Data Structures and Algorithms
          </h1>
          <p className="max-w-3xl text-base leading-8 text-[var(--muted)]">
            Weekly study notes, core ideas, pseudocode references, and exam-style prompts for
            revision.
          </p>
        </header>

        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm">
            <p className="text-sm text-[var(--muted)]">Notes available</p>
            <p className="mt-2 text-3xl font-semibold text-neutral-950">{notes.length}</p>
          </div>
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm">
            <p className="text-sm text-[var(--muted)]">Current focus</p>
            <p className="mt-2 text-lg font-semibold text-neutral-950">Foundations and sorting</p>
          </div>
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm">
            <p className="text-sm text-[var(--muted)]">Content format</p>
            <p className="mt-2 text-lg font-semibold text-neutral-950">MDX revision notes</p>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-neutral-950">Weekly notes</h2>
              <span className="text-sm text-[var(--muted)]">Stored in `content/algorithms/`</span>
            </div>

            <div className="space-y-4">
              {notes.map((note) => (
                <Link
                  key={note.slug}
                  href={`/courses/algorithms/${note.slug}`}
                  className="block rounded-xl border border-[var(--line)] px-4 py-4 transition hover:border-[var(--accent)] hover:bg-stone-50"
                >
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h3 className="text-base font-semibold text-neutral-900">{note.title}</h3>
                    <span className="text-sm text-[var(--muted)]">Week {note.week}</span>
                  </div>
                  <p className="mb-3 text-sm text-[var(--muted)]">{note.summary}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-[var(--accent)]">
                    {note.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-blue-50 px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <SearchNotes notes={searchIndex} />
        </div>
      </div>
    </main>
  );
}
