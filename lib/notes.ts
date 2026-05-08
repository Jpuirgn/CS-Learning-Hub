import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const notesDirectory = path.join(process.cwd(), "content", "algorithms");

export type NoteFrontmatter = {
  title: string;
  course: string;
  week: number;
  tags: string[];
  summary: string;
};

export type TocItem = {
  level: number;
  text: string;
  id: string;
};

export type Note = NoteFrontmatter & {
  slug: string;
  content: string;
  toc: TocItem[];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function extractToc(markdown: string) {
  return markdown
    .split("\n")
    .map((line) => line.match(/^(##|###)\s+(.+)$/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => ({
      level: match[1].length,
      text: match[2].trim(),
      id: slugify(match[2])
    }));
}

function readNoteFile(fileName: string): Note {
  const slug = fileName.replace(/\.mdx?$/, "");
  const fullPath = path.join(notesDirectory, fileName);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as NoteFrontmatter;

  return {
    slug,
    content,
    toc: extractToc(content),
    ...frontmatter
  };
}

export function getAllNotes() {
  if (!fs.existsSync(notesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(notesDirectory)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map(readNoteFile)
    .sort((a, b) => a.week - b.week);
}

export function getNoteBySlug(slug: string) {
  const mdxPath = path.join(notesDirectory, `${slug}.mdx`);
  const mdPath = path.join(notesDirectory, `${slug}.md`);

  if (fs.existsSync(mdxPath)) {
    return readNoteFile(`${slug}.mdx`);
  }

  if (fs.existsSync(mdPath)) {
    return readNoteFile(`${slug}.md`);
  }

  return null;
}

export function getSearchIndex() {
  return getAllNotes().map((note) => ({
    slug: note.slug,
    title: note.title,
    week: note.week,
    tags: note.tags,
    summary: note.summary,
    content: note.content
  }));
}
