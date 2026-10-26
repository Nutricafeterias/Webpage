'use client'

import { useState } from 'react'
import { ArrowRight, Loader2, Lock } from 'lucide-react'
import { capturar } from '@/lib/analitica'
import { contactoValido, enviarLeadCorto } from '@/lib/lead'

const ROLES = ['Dirección o dueño', 'Administración', 'Docente', 'Mamá o papá', 'Otro'] as const

const campo =
  'w-full px-4 py-3 min-h-[48px] rounded-xl bg-stone-50 border-2 border-stone-200 text-stone-900 placeholder-stone-400 text-base focus:outline-none focus:border-emerald-400 focus:bg-white transition-all disabled:opacity-50'

/**
 * Formulario de 3 campos (nombre, escuela, WhatsApp o correo) + rol opcional
 * de un toque. Lo usan los recursos descargables y la hoja de contacto rápido.
 */
export function FormularioCorto({
  id,
  mensaje,
  boton,
  conRol = false,
  nota = 'Te respondemos en menos de 1 día hábil. No compartimos tus datos.',
  onExito,
}: {
  /** Nombre estable del formulario para PostHog (`data-formulario`). */
  id: string
  /** Qué pidió la persona; llega al CRM en `mensaje`. */
  mensaje: string
  boton: string
  conRol?: boolean
  nota?: string
  onExito?: () => void
}) {
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState('')
  const [rol, setRol] = useState('')

  const enviar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const nombre = String(fd.get('nombre') ?? '')
    const escuela = String(fd.get('escuela') ?? '')
    const contacto = String(fd.get('contacto') ?? '')
    if (!contactoValido(contacto)) {
      setError('Escribe un WhatsApp de 10 dígitos o un correo válido.')
      return
    }
    setError('')
    setEnviando(true)
    const ok = await enviarLeadCorto({
      nombre,
      escuela,
      contacto,
      cargo: rol,
      mensaje: rol ? `${mensaje} · Rol: ${rol}` : mensaje,
      sitio_web: String(fd.get('sitio_web') ?? ''),
    })
    setEnviando(false)
    if (!ok) {
      setError('No pudimos enviar tus datos. Intenta de nuevo o escríbenos por WhatsApp.')
      return
    }
    capturar('lead_corto_enviado', { formulario: id, rol: rol || 'sin_rol', pagina: window.location.pathname })
    onExito?.()
  }

  return (
    <form onSubmit={enviar} data-formulario={id} className="space-y-3 text-left">
      <input type="text" name="sitio_web" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div>
        <label htmlFor={`${id}-nombre`} className="block text-sm font-bold text-stone-700 mb-1">Tu nombre</label>
        <input id={`${id}-nombre`} name="nombre" type="text" autoComplete="name" required disabled={enviando} placeholder="Ej. Laura Martínez" className={campo} />
      </div>
      <div>
        <label htmlFor={`${id}-escuela`} className="block text-sm font-bold text-stone-700 mb-1">Escuela</label>
        <input id={`${id}-escuela`} name="escuela" type="text" autoComplete="organization" required disabled={enviando} placeholder="Ej. Colegio Insurgentes" className={campo} />
      </div>
      <div>
        <label htmlFor={`${id}-contacto`} className="block text-sm font-bold text-stone-700 mb-1">WhatsApp o correo</label>
        <input id={`${id}-contacto`} name="contacto" type="text" inputMode="email" autoComplete="email" required disabled={enviando} placeholder="55 1234 5678 o nombre@escuela.mx" className={campo} />
      </div>
      {conRol && (
        <fieldset>
          <legend className="block text-sm font-bold text-stone-700 mb-1.5">Soy… <span className="font-medium text-stone-400">(opcional)</span></legend>
          <div className="flex flex-wrap gap-2">
            {ROLES.map(r => (
              <button
                key={r}
                type="button"
                onClick={() => setRol(rol === r ? '' : r)}
                aria-pressed={rol === r}
                className={`px-3 py-2 min-h-[40px] rounded-full text-sm font-semibold border-2 transition-colors ${
                  rol === r ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-stone-200 text-stone-600 hover:border-emerald-300'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </fieldset>
      )}
      {error && <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">{error}</p>}
      <button
        type="submit"
        disabled={enviando}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 min-h-[52px] rounded-2xl bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-400 text-white font-black text-base transition-colors shadow-lg shadow-emerald-200"
      >
        {enviando ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Enviando…
          </>
        ) : (
          <>
            {boton} <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
      <p className="flex items-center justify-center gap-1.5 text-center text-stone-500 text-xs">
        <Lock className="w-3 h-3" /> {nota}
      </p>
    </form>
  )
}
