import Link from "next/link";

const courses = [
  {
    title: "Data Structures and Algorithms",
    href: "/courses/algorithms",
    description: "Weekly notes, concept reviews, complexity summaries, and exam practice."
  },
  {
    title: "Computer Architecture and Operating Systems",
    href: "#",
    description: "Reserved space for lectures, revision notes, and architecture diagrams."
  },
  {
    title: "Numerical Methods",
    href: "#",
    description: "A future section for iterative methods, error analysis, and worked examples."
  },
  {
    title: "Databases",
    href: "#",
    description: "A future section for schemas, SQL patterns, normalization, and transactions."
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-8 shadow-sm">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
            Personal CS Learning Hub
          </p>
          <h1 className="mb-4 max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950">
            A calm, organized place to keep course notes, summaries, and revision material.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
            Start with your algorithms course now, then expand the same structure to your other
            university subjects over time.
          </p>
        </header>

        <section className="grid gap-5 md:grid-cols-2">
          {courses.map((course) => (
            <Link
              key={course.title}
              href={course.href}
              className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
            >
              <h2 className="mb-3 text-2xl font-semibold text-neutral-950">{course.title}</h2>
              <p className="text-sm leading-7 text-[var(--muted)]">{course.description}</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
