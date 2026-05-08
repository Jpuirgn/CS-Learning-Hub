"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type SearchableNote = {
  slug: string;
  title: string;
  week: number;
  tags: string[];
  summary: string;
  content: string;
};

export function SearchNotes({ notes }: { notes: SearchableNote[] }) {
  const [query, setQuery] = useState("");

  const filteredNotes = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return notes;
    }

    return notes.filter((note) => {
      const haystack = [note.title, note.summary, note.tags.join(" "), note.content]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalized);
    });
  }, [notes, query]);

  return (
    <section className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6 shadow-sm">
      <div className="mb-4 flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-neutral-900">Search notes</h2>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by title, concept, tag, or note content..."
          className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--accent)]"
        />
      </div>

      <div className="space-y-3">
        {filteredNotes.map((note) => (
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

        {filteredNotes.length === 0 ? (
          <p className="rounded-xl border border-dashed border-[var(--line)] px-4 py-6 text-sm text-[var(--muted)]">
            No notes matched this search yet.
          </p>
        ) : null}
      </div>
    </section>
  );
}
