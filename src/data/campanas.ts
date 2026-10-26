/**
 * Campañas del sitio (aviso emergente). Las administra Emilio; Dirección
 * General aprueba cada una antes de activarla (decisión 26-oct-2026).
 *
 * Reglas:
 * - Una sola campaña activa por página a la vez: gana la primera de la lista
 *   cuya vigencia incluya hoy y cuyo `paginas` coincida.
 * - El `id` se usa igual en el aviso, en el `utm_campaign` del blog y de redes,
 *   y llega al CRM en el bloque «Origen web» del lead. Así se mide cuántos
 *   leads trae cada campaña.
 * - Se muestra una vez por visitante cada `cadaDias` días y nunca en las
 *   páginas de `excluir`.
 * - Para cambiar de campaña se edita esta lista (no el componente).
 */
export type Campana = {
  id: string
  titulo: string
  texto: string
  boton: string
  destino: string
  /** ISO 'YYYY-MM-DD', inclusive. */
  desde: string
  hasta: string
  /** Prefijos de ruta donde aparece ('/' = solo inicio; '*' = todo el sitio). */
  paginas: string[]
  pilar: string
}

export const CADA_DIAS = 7
export const EXCLUIR = ['/aviso-de-privacidad', '/diagnostico', '/demo']

export const campanas: Campana[] = [
  {
    id: 'degustacion-comedor-nov26',
    titulo: '¿Buscas comedor para el próximo ciclo?',
    texto: 'Hacemos la degustación en tu escuela: prueban la comida de un día completo y votan, también los niños.',
    boton: 'Pide una degustación',
    destino: '/comedores-escolares#degustacion',
    desde: '2026-10-26',
    hasta: '2026-12-15',
    paginas: ['/comedores-escolares', '/menus'],
    pilar: 'Comedor y comida del día',
  },
  {
    id: 'lineamientos-campus-nov26',
    titulo: 'La Corte confirmó: los lineamientos de la SEP también aplican en prepas y universidades',
    texto: 'Revisa en unos minutos si la cafetería de tu escuela ya cumple y qué tendrías que cambiar.',
    boton: 'Haz el diagnóstico gratis de tu cafetería',
    destino: '/diagnostico',
    desde: '2026-10-26',
    hasta: '2026-11-30',
    paginas: ['/', '/cafeterias-escolares', '/cafeterias-escuelas-privadas', '/lineamientos-sep', '/blog'],
    pilar: 'Lineamientos y regulación',
  },
]

/** Campaña vigente para una ruta (o null). `hoy` en 'YYYY-MM-DD'. */
export function campanaPara(ruta: string, hoy: string): Campana | null {
  if (EXCLUIR.some(e => ruta.startsWith(e))) return null
  return (
    campanas.find(
      c =>
        c.desde <= hoy &&
        hoy <= c.hasta &&
        c.paginas.some(p => p === '*' || (p === '/' ? ruta === '/' : ruta === p || ruta.startsWith(p + '/'))),
    ) ?? null
  )
}
