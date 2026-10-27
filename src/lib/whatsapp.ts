/**
 * Enlaces de WhatsApp con código corto de origen, p. ej. «[web:comedores]».
 * El código permite saber desde qué página llegó la conversación.
 */
export const WA_COMERCIAL = '522219251954'

export function waHref(mensaje: string, origen: string): string {
  const texto = `${mensaje} [web:${origen}]`
  return `https://wa.me/${WA_COMERCIAL}?text=${encodeURIComponent(texto)}`
}

/** Deriva un código de origen corto a partir de la ruta actual. */
export function origenDesdeRuta(pathname: string | null | undefined): string {
  if (!pathname || pathname === '/') return 'home'
  const limpio = pathname.replace(/^\/+|\/+$/g, '')
  const mapa: Record<string, string> = {
    'comedores-escolares': 'comedores',
    'cafeterias-escolares': 'cafeterias',
    'cafeterias-escuelas-privadas': 'privadas',
    'catering-escolar': 'eventos',
    'lineamientos-sep': 'sep',
    diagnostico: 'diagnostico',
    menus: 'menus',
    nosotros: 'nosotros',
    universidades: 'universidades',
  }
  if (mapa[limpio]) return mapa[limpio]
  if (limpio.startsWith('blog/')) return `blog:${limpio.slice(5, 40)}`
  return limpio.slice(0, 30) || 'home'
}
