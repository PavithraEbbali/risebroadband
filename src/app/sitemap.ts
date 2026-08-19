import type { MetadataRoute } from 'next';

/*
 * Required by `output: 'export'` (next.config.mjs §8.1). Without it Next treats
 * this as a dynamic route handler and the build fails rather than emitting a
 * static sitemap.xml.
 */
export const dynamic = 'force-static';
import { legalPages } from '@/lib/legalNav';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date('2026-08-06');

  return [
    {
      url: site.url,
      lastModified: updated,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...legalPages.map((page) => ({
      url: `${site.url}${page.href}`,
      lastModified: updated,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ];
}
