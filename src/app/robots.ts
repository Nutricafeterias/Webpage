import { MetadataRoute } from 'next'

// Política explícita: el sitio se puede leer por buscadores y por los
// rastreadores de asistentes de IA (decisión de DG, 26-oct-2026). Se nombran uno
// por uno para que ninguna regla genérica los bloquee por accidente.
const PRIVADO = ['/propuestas/', '/demo/', '/api/', '/resena']

const RASTREADORES_IA = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Applebot',
  'Bingbot',
  'Googlebot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: PRIVADO },
      ...RASTREADORES_IA.map(userAgent => ({ userAgent, allow: '/', disallow: PRIVADO })),
    ],
    sitemap: 'https://cafeteriasescolares.com.mx/sitemap.xml',
    host: 'https://cafeteriasescolares.com.mx',
  }
}
