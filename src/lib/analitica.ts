/**
 * Analítica de comportamiento (PostHog), solo si hay llave.
 * Sin NEXT_PUBLIC_POSTHOG_KEY y NEXT_PUBLIC_POSTHOG_HOST no se descarga ni se
 * ejecuta nada. Nombres de eventos estables: ver docs/analitica.md.
 */

type PostHogLike = { capture: (evento: string, props?: Record<string, unknown>) => void }

let ph: PostHogLike | null = null
const pendientes: Array<[string, Record<string, unknown> | undefined]> = []

export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || ''
export const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || ''
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
