import type { CollectionEntry } from 'astro:content';

/** Plain code-point string comparison (the old Liquid `sort` filter's order). */
export const byString = (a: string, b: string) => (a < b ? -1 : a > b ? 1 : 0);

/** Projects newest first; ties broken by file name, last first. */
export function newestFirst(projects: CollectionEntry<'projects'>[]): CollectionEntry<'projects'>[] {
  const time = (p: CollectionEntry<'projects'>) => p.data.date?.getTime() ?? 0;
  return [...projects].sort((a, b) => time(b) - time(a) || byString(b.filePath ?? b.id, a.filePath ?? a.id));
}
