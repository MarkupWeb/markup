import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://markup.vip" || "https://markupagency.net";

    return {
      rules: {
        userAgent: '*',
        allow: ['/', '/blog'],
        disallow: ['/admin', '/login'], // Example of restricted paths
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    };
}
