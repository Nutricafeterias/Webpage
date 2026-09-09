import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/propuestas/'],
    },
    sitemap: 'https://cafeteriasescolares.com.mx/sitemap.xml',
  }
}
