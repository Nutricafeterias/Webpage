import { NextResponse } from 'next/server'

// Formulario de contacto → CRM comercial del ERP de Nutri (22-oct-2026).
// Se reenvía desde el servidor (sin CORS y sin exponer el ERP al navegador).
// Formspree se queda en paralelo como respaldo: si el ERP falla, el lead no se pierde.
const ERP = process.env.ERP_LEADS_URL || 'https://erp.nutricafeteria.com.mx/api/v1/public/comercial/lead'

const CAMPOS = ['nombre', 'escuela', 'cargo', 'telefono', 'email', 'mensaje', 'sitio_web'] as const

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
