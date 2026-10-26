'use client'

import { useCallback, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarCheck, CheckCircle2, Download, X } from 'lucide-react'
import { FormularioCorto } from '@/components/FormularioCorto'
import { PruebaSocial } from '@/components/PruebaSocial'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { capturar } from '@/lib/analitica'
import { origenDesdeRuta, waHref } from '@/lib/whatsapp'

/**
 * CTA de conversión global:
 * 1. Barra fija inferior en móvil (acción principal + WhatsApp). En móvil
 *    sustituye al botón flotante de WhatsApp; en escritorio no se muestra.
 * 2. Hoja de contacto rápido (3 campos) que se abre desde la barra, desde
 *    cualquier enlace a `#contacto-rapido` o desde los enlaces a `/#contacto`
 *    fuera de la home, para que nadie salte a otra página para escribirnos.
 */

const EXCLUIR = ['/diagnostico', '/aviso-de-privacidad', '/demo', '/propuestas']

export function ctaMovilActivo(ruta: string | null | undefined): boolean {
  const r = ruta || '/'
  return !EXCLUIR.some(e => r === e || r.startsWith(e + '/'))
}

type Motivo = 'reunion' | 'degustacion' | 'visita' | 'evento' | 'revision'

const MOTIVOS: Record<Motivo, { titulo: string; texto: string; boton: string; mensaje: string }> = {
  reunion: {
    titulo: 'Platiquemos de la cafetería de tu escuela',
    texto: 'Déjanos tus datos y te llamamos para ver qué necesita tu escuela. Sin costo y sin compromiso.',
    boton: 'Quiero que me contacten',
    mensaje: 'Quiere: reunión',
  },
  degustacion: {
    titulo: 'Pide una degustación en tu escuela',
    texto: 'Llevamos la comida de un día completo para que la prueben la dirección, los papás y los alumnos. Sin costo.',
    boton: 'Pedir mi degustación',
    mensaje: 'Quiere: degustación',
  },
  visita: {
    titulo: 'Agenda una visita',
    texto: 'Vamos a tu escuela a ver el espacio y te proponemos cómo funcionaría la cafetería o el comedor. Sin costo.',
    boton: 'Agendar mi visita',
    mensaje: 'Quiere: visita a la escuela',
  },
  evento: {
    titulo: 'Cotiza tu evento escolar',
    texto: 'Graduaciones, juntas de consejo, coffee breaks y desayunos institucionales.',
    boton: 'Pedir cotización',
    mensaje: 'Quiere: cotización de evento',
  },
  revision: {
    titulo: 'Revisión de cumplimiento SEP sin costo',
    texto: 'Revisamos lo que hoy se vende en tu cafetería y te decimos qué cambiar para cumplir con los lineamientos.',
    boton: 'Pedir mi revisión',
    mensaje: 'Quiere: revisión de cumplimiento SEP',
  },
}

function motivoDeCta(cta: string | null): Motivo {
  if (!cta) return 'reunion'
  if (cta.includes('degustacion')) return 'degustacion'
  if (cta.includes('visita')) return 'visita'
  if (cta.includes('evento')) return 'evento'
  if (cta.includes('sep') || cta.includes('revision')) return 'revision'
  return 'reunion'
}

type Primaria = { etiqueta: string; ancla?: string; motivo?: Motivo }

/** Acción principal de la barra según la página (y los recursos presentes). */
function primariaPara(ruta: string): Primaria {
  if (typeof document !== 'undefined') {
    if (document.getElementById('recurso-menu-sep')) return { etiqueta: 'Menú en PDF gratis', ancla: 'recurso-menu-sep' }
    if (document.getElementById('recurso-checklist-sep')) return { etiqueta: 'Checklist SEP gratis', ancla: 'recurso-checklist-sep' }
  }
  if (ruta === '/') return { etiqueta: 'Agenda una reunión', ancla: 'contacto' }
  if (ruta.startsWith('/comedores-escolares')) return { etiqueta: 'Pide una degustación', motivo: 'degustacion' }
  if (ruta.startsWith('/catering-escolar')) return { etiqueta: 'Cotiza tu evento', motivo: 'evento' }
  return { etiqueta: 'Agenda una visita', motivo: 'visita' }
}

export function CtaMovil() {
  const ruta = usePathname() || '/'
  const activo = ctaMovilActivo(ruta)
  const [primaria, setPrimaria] = useState<Primaria>({ etiqueta: 'Agenda una visita', motivo: 'visita' })
  const [hoja, setHoja] = useState<Motivo | null>(null)
  const [enviado, setEnviado] = useState(false)

  const abrir = useCallback(
    (m: Motivo, desde: string) => {
      setEnviado(false)
      setHoja(m)
      capturar('cta_movil_abierto', { motivo: m, desde, pagina: ruta })
    },
    [ruta],
  )

  // Recalcula la acción principal al cambiar de página (espera a que pinte).
  useEffect(() => {
    const t = setTimeout(() => setPrimaria(primariaPara(ruta)), 200)
    return () => clearTimeout(t)
  }, [ruta])

  // Intercepta «/#contacto» fuera de la home y «#contacto-rapido» en todo el sitio.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return
      const a = (e.target instanceof Element ? e.target : null)?.closest('a') as HTMLAnchorElement | null
      if (!a) return
      const href = a.getAttribute('href') || ''
      const esRapido = href === '#contacto-rapido'
      const esContactoHome = (href === '/#contacto' || href === '#contacto') && window.location.pathname !== '/'
      if (!esRapido && !esContactoHome) return
      e.preventDefault()
      const m = (a.getAttribute('data-motivo') as Motivo | null) ?? motivoDeCta(a.getAttribute('data-cta'))
      abrir(MOTIVOS[m] ? m : 'reunion', a.getAttribute('data-cta') || 'enlace')
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [abrir])

  // Escape cierra la hoja.
  useEffect(() => {
    if (!hoja) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setHoja(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [hoja])

  const clicPrimaria = () => {
    if (primaria.ancla) {
      const el = document.getElementById(primaria.ancla)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    abrir(primaria.motivo ?? 'visita', 'barra_movil')
  }

  const origen = origenDesdeRuta(ruta)
  const m = hoja ? MOTIVOS[hoja] : null

  return (
    <>
      {activo && (
        <>
          {/* Reserva el alto de la barra para que no tape el final de la página. */}
          <div className="h-[76px] lg:hidden" aria-hidden="true" />
          <div
            data-seccion="barra_movil"
            className="lg:hidden fixed bottom-0 inset-x-0 z-40 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur border-t border-stone-200 shadow-[0_-6px_20px_rgba(0,0,0,0.06)]"
          >
            <div className="flex gap-2 max-w-md mx-auto">
              <button
                type="button"
                onClick={clicPrimaria}
                data-cta={`barra_movil_${primaria.ancla ? primaria.ancla.replace('recurso-', 'pdf_') : primaria.motivo}`}
                className="flex-1 inline-flex items-center justify-center gap-2 min-h-[50px] rounded-2xl bg-emerald-500 active:bg-emerald-600 text-white font-black text-[15px]"
              >
                {primaria.ancla?.startsWith('recurso-') ? <Download className="w-4 h-4" /> : <CalendarCheck className="w-4 h-4" />}
                {primaria.etiqueta}
              </button>
              <a
                href={waHref('Hola, me interesa conocer más sobre Nutri Cafeterías para mi escuela', origen)}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp_barra_movil"
                aria-label="Escribir por WhatsApp"
                className="inline-flex items-center justify-center gap-1.5 min-h-[50px] px-4 rounded-2xl border-2 border-emerald-200 bg-white text-emerald-700 font-bold text-[15px]"
              >
                <WhatsAppIcon className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>
        </>
      )}

      <AnimatePresence>
        {m && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setHoja(null)}
              className="fixed inset-0 z-[95] bg-stone-950/50"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={m.titulo}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed z-[96] inset-x-0 bottom-0 md:inset-x-auto md:bottom-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full md:max-w-md max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-3xl bg-white shadow-2xl p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
            >
              <button
                type="button"
                onClick={() => setHoja(null)}
                className="absolute top-4 right-4 p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
              {enviado ? (
                <div className="text-center py-6">
                  <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-500" />
                  <p className="mt-3 text-xl font-black text-stone-900">Gracias, ya tenemos tus datos</p>
                  <p className="mt-2 text-stone-600">Te escribimos en menos de 1 día hábil. Si lo prefieres, adelántate por WhatsApp.</p>
                  <a
                    href={waHref(`Hola, acabo de dejar mis datos en la página (${m.mensaje.replace('Quiere: ', '')})`, origen)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp_tras_formulario"
                    className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-emerald-200 text-emerald-700 font-bold"
                  >
                    <WhatsAppIcon className="w-4 h-4" /> Escribir por WhatsApp
                  </a>
                </div>
              ) : (
                <>
                  <p className="pr-8 text-xl font-black text-stone-900 leading-snug">{m.titulo}</p>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">{m.texto}</p>
                  <div className="mt-5">
                    <FormularioCorto
                      id={`rapido_${hoja}`}
                      mensaje={`${m.mensaje} · desde ${ruta}`}
                      boton={m.boton}
                      onExito={() => setEnviado(true)}
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-3 text-xs text-stone-400">
                    <span className="h-px flex-1 bg-stone-200" /> o si prefieres <span className="h-px flex-1 bg-stone-200" />
                  </div>
                  <a
                    href={waHref(`Hola, me interesa: ${m.mensaje.replace('Quiere: ', '')}`, origen)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp_hoja_contacto"
                    className="mt-3 w-full inline-flex items-center justify-center gap-2 min-h-[48px] rounded-2xl border-2 border-emerald-200 text-emerald-700 font-bold"
                  >
                    <WhatsAppIcon className="w-4 h-4" /> Escríbenos por WhatsApp
                  </a>
                  <PruebaSocial className="mt-5 !justify-start" />
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
