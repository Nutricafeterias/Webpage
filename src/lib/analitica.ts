/**
 * Analítica de comportamiento (PostHog), proyecto «Nutri web» (us.posthog.com,
 * id 689664). La llave del proyecto es pública por diseño (va en el navegador).
 * Solo se activa en el build de producción, para no mezclar pruebas locales con
 * visitas reales; NEXT_PUBLIC_POSTHOG_KEY / _HOST la sobrescriben si existen.
 * Nombres de eventos estables: ver docs/analitica.md.
 */

type PostHogLike = {
  capture: (evento: string, props?: Record<string, unknown>) => void
  getFeatureFlag?: (flag: string) => string | boolean | undefined
  onFeatureFlags?: (cb: () => void) => unknown
}

let ph: PostHogLike | null = null
const pendientes: Array<[string, Record<string, unknown> | undefined]> = []
const esperandoCliente: Array<(c: PostHogLike) => void> = []

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
  while (esperandoCliente.length) esperandoCliente.shift()!(cliente)
}

/**
 * Pruebas A/B con feature flags de PostHog (multivariante control/test).
 * Fallback seguro: si PostHog no está activo, no carga, o los flags no llegan
 * antes de `esperaMs`, el visitante ve el control y NO se registra exposición
 * (no se llama a getFeatureFlag, que es lo que PostHog cuenta como exposición).
 * Devuelve una función para cancelar.
 */
export function varianteAB(
  flag: string,
  alResolver: (variante: string) => void,
  esperaMs = 2000,
): () => void {
  if (!analiticaActiva || typeof window === 'undefined') return () => undefined
  let vigente = true
  const limite = setTimeout(() => {
    vigente = false
  }, esperaMs)
  const conCliente = (c: PostHogLike) => {
    if (!c.onFeatureFlags || !c.getFeatureFlag) return
    c.onFeatureFlags(() => {
      if (!vigente) return
      vigente = false
      clearTimeout(limite)
      try {
        const v = c.getFeatureFlag!(flag)
        if (typeof v === 'string' && v) alResolver(v)
      } catch {
        /* control */
      }
    })
  }
  if (ph) conCliente(ph)
  else esperandoCliente.push(conCliente)
  return () => {
    vigente = false
    clearTimeout(limite)
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
  | 'lead_magnet_descarga'
  | 'lead_corto_enviado'
  | 'cta_movil_abierto'
  | 'lead_contacto_enviado'
  | 'ab_expuesto'

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
