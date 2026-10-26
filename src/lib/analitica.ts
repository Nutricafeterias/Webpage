/**
 * Analítica de comportamiento (PostHog), proyecto «Nutri web» (us.posthog.com,
 * id 689664). La llave del proyecto es pública por diseño (va en el navegador).
 * Solo se activa en el build de producción, para no mezclar pruebas locales con
 * visitas reales; NEXT_PUBLIC_POSTHOG_KEY / _HOST la sobrescriben si existen.
 * Nombres de eventos estables: ver docs/analitica.md.
 */

type PostHogLike = { capture: (evento: string, props?: Record<string, unknown>) => void }

let ph: PostHogLike | null = null
const pendientes: Array<[string, Record<string, unknown> | undefined]> = []

const PRODUCCION = process.env.NODE_ENV === 'production'
export const POSTHOG_KEY =
  process.env.NEXT_PUBLIC_POSTHOG_KEY || (PRODUCCION ? 'phc_qTrC2tJZtPph978JdHgmFgCEBKo5Xq5zTzpDinMXMDa2' : '')
export const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || (PRODUCCION ? 'https://us.i.posthog.com' : '')
export const analiticaActiva = Boolean(POSTHOG_KEY && POSTHOG_HOST)

export function registrarCliente(cliente: PostHogLike) {
  ph = cliente
  while (pendientes.length) {
    const [e, p] = pendientes.shift()!
    cliente.capture(e, p)
  }
}

export type EventoNutri =
  | 'cta_click'
  | 'whatsapp_click'
  | 'form_start'
  | 'form_submit'
  | 'diagnostico_completado'
  | 'seccion_vista'
  | 'campana_vista'
  | 'campana_click'
  | 'campana_cerrada'

/** Envía un evento a PostHog; si aún no carga, lo encola (máx. 50). */
export function capturar(evento: EventoNutri, props?: Record<string, unknown>) {
  if (!analiticaActiva) return
  try {
    if (ph) ph.capture(evento, props)
    else if (pendientes.length < 50) pendientes.push([evento, props])
  } catch {
    /* la analítica nunca debe romper la página */
  }
}
