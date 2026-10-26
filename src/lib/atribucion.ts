/**
 * Atribución de leads de punta a punta (solo navegador).
 *
 * Guarda la PRIMERA visita (página de entrada, referrer, UTM, gclid) en
 * sessionStorage y en una cookie de primera parte (90 días, solo se escribe si
 * no existe), y al enviar un formulario arma el payload con la página desde la
 * que se envía y el tipo de dispositivo. No recaba datos personales.
 */

export type Atribucion = {
  primera_pagina: string
  referrer: string
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_term: string
  utm_content: string
  gclid: string
  primera_visita: string
}

export type AtribucionEnvio = Atribucion & {
  /** Última campaña del sitio (aviso emergente, blog, redes) en la que dio clic. */
  campana: string
  pagina_envio: string
  dispositivo: 'movil' | 'tablet' | 'escritorio'
}

const CLAVE = 'nutri_atrib'
const CLAVE_CAMPANA = 'nutri_campana'

/** Registra la campaña en la que el visitante dio clic (vive en la sesión). */
export function registrarCampana(id: string): void {
  try {
    sessionStorage.setItem(CLAVE_CAMPANA, id.slice(0, 80))
  } catch {
    /* ignorar */
  }
}

function campanaActual(): string {
  try {
    const guardada = sessionStorage.getItem(CLAVE_CAMPANA)
    if (guardada) return guardada
    const desdeUrl = new URL(window.location.href).searchParams.get('utm_campaign')
    if (desdeUrl) return desdeUrl.slice(0, 80)
  } catch {
    /* ignorar */
  }
  return ''
}
const UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const
const DIAS_COOKIE = 90

function leerCookie(nombre: string): string | null {
  try {
    const m = document.cookie.match(new RegExp('(?:^|; )' + nombre + '=([^;]*)'))
    return m ? decodeURIComponent(m[1]) : null
  } catch {
    return null
  }
}

function escribirCookie(nombre: string, valor: string) {
  try {
    const exp = new Date(Date.now() + DIAS_COOKIE * 864e5).toUTCString()
    document.cookie = `${nombre}=${encodeURIComponent(valor)}; expires=${exp}; path=/; SameSite=Lax`
  } catch {
    /* sin cookies: seguimos con sessionStorage */
  }
}

function parsear(v: string | null): Atribucion | null {
  if (!v) return null
  try {
    const o = JSON.parse(v)
    return o && typeof o === 'object' && typeof o.primera_pagina === 'string' ? (o as Atribucion) : null
  } catch {
    return null
  }
}

function corto(v: string | null | undefined, max = 200): string {
  return (v ?? '').slice(0, max)
}

/** Se llama una vez por carga de página; solo escribe si aún no hay registro. */
export function capturarAtribucion(): void {
  if (typeof window === 'undefined') return
  let enSesion: Atribucion | null = null
  try {
    enSesion = parsear(sessionStorage.getItem(CLAVE))
  } catch {
    /* sessionStorage bloqueado */
  }
  const enCookie = parsear(leerCookie(CLAVE))
  if (enSesion && enCookie) return

  const url = new URL(window.location.href)
  const p = url.searchParams
  const ref = document.referrer && !document.referrer.startsWith(window.location.origin) ? document.referrer : ''
  const nueva: Atribucion = {
    primera_pagina: corto(url.pathname + (url.search ? url.search : ''), 300),
    referrer: corto(ref, 300),
    utm_source: corto(p.get('utm_source')),
    utm_medium: corto(p.get('utm_medium')),
    utm_campaign: corto(p.get('utm_campaign')),
    utm_term: corto(p.get('utm_term')),
    utm_content: corto(p.get('utm_content')),
    gclid: corto(p.get('gclid')),
    primera_visita: new Date().toISOString(),
  }
  // La cookie conserva el primer contacto entre sesiones; la sesión, el de esta visita.
  if (!enCookie) escribirCookie(CLAVE, JSON.stringify(nueva))
  if (!enSesion) {
    try {
      sessionStorage.setItem(CLAVE, JSON.stringify(nueva))
    } catch {
      /* ignorar */
    }
  }
}

function dispositivo(): AtribucionEnvio['dispositivo'] {
  try {
    const ua = navigator.userAgent
    if (/iPad|Tablet/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua))) return 'tablet'
    if (/Mobi|iPhone|Android/i.test(ua) || window.innerWidth < 768) return 'movil'
  } catch {
    /* ignorar */
  }
  return 'escritorio'
}

/** Datos de atribución para adjuntar a un envío de formulario. */
export function atribucionParaEnvio(): AtribucionEnvio {
  capturarAtribucion()
  let a: Atribucion | null = null
  try {
    a = parsear(sessionStorage.getItem(CLAVE))
  } catch {
    /* ignorar */
  }
  a = a ?? parsear(leerCookie(CLAVE))
  const base: Atribucion = a ?? {
    primera_pagina: '',
    referrer: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    gclid: '',
    primera_visita: '',
  }
  return { ...base, campana: campanaActual(), pagina_envio: corto(window.location.pathname, 300), dispositivo: dispositivo() }
}

/** Bloque legible de una línea para el campo de notas del CRM. */
export function textoOrigen(a: Partial<AtribucionEnvio>): string {
  const partes: string[] = []
  if (a.campana) partes.push(`campaña ${a.campana}`)
  if (a.pagina_envio) partes.push(`enviado desde ${a.pagina_envio}`)
  if (a.primera_pagina) partes.push(`entrada ${a.primera_pagina}`)
  partes.push(`referrer ${a.referrer || 'directo'}`)
  const utm = UTM.filter(k => a[k]).map(k => `${k.replace('utm_', '')}=${a[k]}`)
  if (utm.length) partes.push(`utm ${utm.join(', ')}`)
  if (a.gclid) partes.push(`gclid ${a.gclid}`)
  if (a.dispositivo) partes.push(`dispositivo ${a.dispositivo}`)
  return `Origen web: ${partes.join(' · ')}`
}

export const CAMPOS_ATRIBUCION = [
  'primera_pagina',
  'referrer',
  ...UTM,
  'gclid',
  'primera_visita',
  'campana',
  'pagina_envio',
  'dispositivo',
] as const
