import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {

    const baseUrl = "https://markup.vip"


  return [
    {
      url: 'https://markup.vip',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://markup.vip/en',
          ar: 'https://markup.vip/ar',
        },
      },
    },
    {
      url: 'https://markup.vip/about',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://markup.vip/en/about',
          ar: 'https://markup.vip/ar/about',
        },
      },
    },
    {
      url: 'https://acme.com/blog',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://markup.vip/en/blog',
          ar: 'https://markup.vip/ar/blog',
        },
      },
    },
  ]
}