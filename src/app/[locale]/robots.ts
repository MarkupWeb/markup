import type { MetadataRoute } from 'next'



export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://markup.vip"



    return {
      rules: {
        userAgent: '*',
        allow: ['/', '/blog'],
        disallow: [],
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    }
  }