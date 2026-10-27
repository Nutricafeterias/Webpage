import { NextResponse } from 'next/server'
import { CAMPOS_ATRIBUCION, textoOrigen, type AtribucionEnvio } from '@/lib/atribucion'
import { comoNosConocioValido } from '@/lib/lead'

// Formulario de contacto → CRM comercial del ERP de Nutri (22-oct-2026).
// Se reenvía desde el servidor (sin CORS y sin exponer el ERP al navegador).
// Formspree se queda en paralelo como respaldo: si el ERP falla, el lead no se pierde.
const ERP = process.env.ERP_LEADS_URL || 'https://erp.nutricafeteria.com.mx/api/v1/public/comercial/lead'

const CAMPOS = ['nombre', 'escuela', 'cargo', 'telefono', 'email', 'mensaje', 'sitio_web'] as const

// El ERP (validarLeadWeb) guarda `mensaje` con máximo 2000 caracteres y colapsa
// los saltos de línea; el bloque «Origen web: …» va al final, en una sola línea.
const MAX_MENSAJE = 2000

export async function POST(req: Request) {
  let cuerpo: Record<string, unknown> = {}
  try {
    cuerpo = await req.json()
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
  const lead: Record<string, string> = {}
  for (const c of CAMPOS) {
    const v = cuerpo[c]
    if (typeof v === 'string') lead[c] = v.slice(0, 2000)
  }

  // Atribución: se reenvía como campos propios (por si el ERP los adopta) y,
  // como hoy el contrato no los tiene, también dentro de `mensaje`.
  const atrib: Partial<AtribucionEnvio> = {}
  for (const c of CAMPOS_ATRIBUCION) {
    const v = cuerpo[c]
    if (typeof v === 'string' && v) (atrib as Record<string, string>)[c] = v.slice(0, 300)
  }
  // «¿Cómo nos conociste?» (opcional, lista cerrada): lo declara la persona;
  // la atribución técnica (referrer/UTM) se conserva intacta a un lado.
  const comoNosConocio = comoNosConocioValido(cuerpo.como_nos_conocio)
  const declarado = comoNosConocio ? `Cómo nos conoció: ${comoNosConocio}` : ''
  const origen = Object.keys(atrib).length ? textoOrigen(atrib).slice(0, 700) : ''
  const cola = [declarado, origen].filter(Boolean).join(' || ')
  if (cola) {
    const base = (lead.mensaje ?? '').slice(0, MAX_MENSAJE - cola.length - 4)
    lead.mensaje = base ? `${base} || ${cola}` : cola
  }
  if (Object.keys(atrib).length) Object.assign(lead, atrib)
  if (comoNosConocio) lead.como_nos_conocio = comoNosConocio

  try {
    const r = await fetch(ERP, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      cache: 'no-store',
    })
    return NextResponse.json({ ok: r.ok })
  } catch {
    return NextResponse.json({ ok: false })
  }
}
