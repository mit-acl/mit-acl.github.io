import { getCollection, type CollectionEntry } from 'astro:content';
import { site } from '../data/site';

/** News posts, newest first. */
export async function getNews(): Promise<CollectionEntry<'news'>[]> {
  const posts = await getCollection('news');
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || b.id.localeCompare(a.id));
}

/** Home page `n` (1-based): `/` for the first page, `/page<n>/` after that. */
export const newsPagePath = (n: number) => (n === 1 ? '/' : `/page${n}/`);

/** Splits news posts into home-page-sized chunks. */
export async function getNewsPages(): Promise<CollectionEntry<'news'>[][]> {
  const posts = await getNews();
  const pages = [];
  for (let i = 0; i < posts.length; i += site.postsPerPage) pages.push(posts.slice(i, i + site.postsPerPage));
  return pages;
}

/** URL of a post's own page: /YYYY/MM/DD/<title>.html. */
export function postPath(post: CollectionEntry<'news'>): string {
  const [, y, m, d, title] = post.id.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/)!;
  return `/${y}/${m}/${d}/${title}.html`;
}

/** e.g. "24 May 2019" (Jekyll's date_to_long_string). */
export const longDate = (date: Date) =>
  date.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' });
