import type { MetadataRoute } from 'next';

/*
 * Required by `output: 'export'` (next.config.mjs §8.1). Without it Next treats
 * this as a dynamic route handler and the build fails rather than emitting a
 * static robots.txt.
 */
export const dynamic = 'force-static';
import { site } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
