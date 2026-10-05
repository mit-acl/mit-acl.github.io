// /sitemap.xml for search engines (replaces the jekyll-sitemap plugin).
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getNewsPages, postPath } from '../lib/news';

export const GET: APIRoute = async ({ site }) => {
  const paths = [
    '/',
    ...(await getNewsPages()).slice(1).map((_, i) => `/page${i + 2}/`),
    '/people/',
    ...(await getCollection('members')).map((m) => `/people/${m.id}`),
    '/projects/',
    ...(await getCollection('projects')).map((p) => `/projects/${p.id}`),
    '/publications/',
    '/contact/',
    '/highbay-west/',
    ...(await getCollection('news')).map(postPath),
  ];
  const urls = paths.map((p) => `<url>\n<loc>${new URL(p, site)}</loc>\n</url>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
