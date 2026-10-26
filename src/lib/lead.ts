/**
 * Envío de leads desde formularios cortos (recursos descargables, barra móvil).
 * Mismo camino que el formulario de contacto: `/api/lead` (CRM del ERP) con la
 * atribución completa, y Formspree en paralelo como respaldo.
 *
 * El CRM acepta el lead con (nombre o escuela) + (teléfono o correo).
 */
import { atribucionParaEnvio, textoOrigen } from '@/lib/atribucion'

const FORMSPREE = 'https://formspree.io/f/xrejlppw'

export type LeadCorto = {
  nombre: string
  escuela: string
  /** Lo que la persona escribió: WhatsApp o correo. */
  contacto: string
  cargo?: string
  /** Qué pidió (p. ej. «Descargó: menú semanal SEP (PDF)»). Va al CRM. */
  mensaje: string
  sitio_web?: string
}

/** Separa «WhatsApp o correo» en el campo correcto. */
export function partirContacto(v: string): { telefono: string; email: string } {
  const t = v.trim()
  if (t.includes('@')) return { telefono: '', email: t }
  return { telefono: t, email: '' }
}

export function contactoValido(v: string): boolean {
  const t = v.trim()
  if (t.includes('@')) return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(t)
  return t.replace(/\D/g, '').length >= 10
}

/** Devuelve true si al menos uno de los dos destinos recibió el lead. */
export async function enviarLeadCorto(l: LeadCorto): Promise<boolean> {
  const atribucion = atribucionParaEnvio()
  const { telefono, email } = partirContacto(l.contacto)
  const datos = {
    nombre: l.nombre.trim(),
    escuela: l.escuela.trim(),
    cargo: (l.cargo ?? '').trim(),
    telefono,
    email,
    mensaje: l.mensaje,
    sitio_web: l.sitio_web ?? '',
  }
  const erp = fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...datos, ...atribucion }),
  })
    .then(r => r.json())
    .then((j: { ok?: boolean }) => Boolean(j?.ok))
    .catch(() => false)
  const respaldo = fetch(FORMSPREE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ ...datos, origen_web: textoOrigen(atribucion), _subject: `Lead web: ${l.mensaje.slice(0, 60)}` }),
  })
    .then(r => r.ok)
    .catch(() => false)
  const [a, b] = await Promise.all([erp, respaldo])
  return a || b
}
