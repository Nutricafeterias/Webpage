import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog'

// Fecha de la última revisión de contenido de las páginas fijas. Se actualiza a
// mano cuando cambian (un lastmod que cambia en cada build no le dice nada a nadie).
const ACTUALIZADO = new Date('2026-10-26')

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://cafeteriasescolares.com.mx'

  return [
    {
      url: base,
      lastModified: ACTUALIZADO,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/diagnostico`,
      lastModified: ACTUALIZADO,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/cafeterias-escolares`,
      lastModified: ACTUALIZADO,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/cafeterias-escuelas-privadas`,
      lastModified: ACTUALIZADO,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/universidades`,
      lastModified: ACTUALIZADO,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/comedores-escolares`,
      lastModified: ACTUALIZADO,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/catering-escolar`,
      lastModified: ACTUALIZADO,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/aviso-de-privacidad`,
      lastModified: ACTUALIZADO,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/menus`,
      lastModified: ACTUALIZADO,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/nosotros`,
      lastModified: ACTUALIZADO,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/lineamientos-sep`,
      lastModified: ACTUALIZADO,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: ACTUALIZADO,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogPosts.map(post => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.updated ?? post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
