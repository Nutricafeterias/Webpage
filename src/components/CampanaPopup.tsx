'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Megaphone } from 'lucide-react'
import { track } from '@vercel/analytics'
import { campanaPara, CADA_DIAS, type Campana } from '@/data/campanas'
import { capturar } from '@/lib/analitica'
import { registrarCampana } from '@/lib/atribucion'

const CLAVE = 'nutri_campana_vista'

function hoyCDMX(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Mexico_City' }).format(new Date())
}

function yaVista(id: string): boolean {
  try {
    const visto = JSON.parse(localStorage.getItem(CLAVE) || '{}') as Record<string, number>
    const t = visto[id]
    return typeof t === 'number' && Date.now() - t < CADA_DIAS * 86_400_000
  } catch {
    return false
  }
}

function marcarVista(id: string) {
  try {
    const visto = JSON.parse(localStorage.getItem(CLAVE) || '{}') as Record<string, number>
    visto[id] = Date.now()
    localStorage.setItem(CLAVE, JSON.stringify(visto))
  } catch {
    /* sin almacenamiento: se puede volver a mostrar, no pasa nada */
  }
}

function conUtm(destino: string, id: string): string {
  const [ruta, ancla] = destino.split('#')
  const sep = ruta.includes('?') ? '&' : '?'
  return `${ruta}${sep}utm_source=sitio&utm_medium=aviso&utm_campaign=${encodeURIComponent(id)}${ancla ? `#${ancla}` : ''}`
}

/** Aviso emergente de la campaña vigente para esta página (ver src/data/campanas.ts). */
export function CampanaPopup() {
  const ruta = usePathname() || '/'
  const [campana, setCampana] = useState<Campana | null>(null)

  useEffect(() => {
    const c = campanaPara(ruta, hoyCDMX())
    if (!c || yaVista(c.id)) return
    // CRO 26-oct: nunca a los pocos segundos (interrumpe al que vino a leer y
    // Google castiga los intersticiales en móvil). Se muestra cuando el visitante
    // ya leyó (45 % de scroll) o tras 30 s en la página, lo que pase primero.
    let mostrado = false
    const mostrar = () => {
      if (mostrado) return
      mostrado = true
      setCampana(c)
      marcarVista(c.id)
      capturar('campana_vista', { campana: c.id, pagina: ruta })
      limpiar()
    }
    const onScroll = () => {
      const alto = document.documentElement.scrollHeight - window.innerHeight
      if (alto > 0 && window.scrollY / alto >= 0.45) mostrar()
    }
    const t = setTimeout(mostrar, 30_000)
    window.addEventListener('scroll', onScroll, { passive: true })
    function limpiar() {
      clearTimeout(t)
      window.removeEventListener('scroll', onScroll)
    }
    return limpiar
  }, [ruta])

  const cerrar = () => {
    if (campana) capturar('campana_cerrada', { campana: campana.id, pagina: ruta })
    setCampana(null)
  }

  const clic = () => {
    if (!campana) return
    registrarCampana(campana.id)
    capturar('campana_click', { campana: campana.id, pagina: ruta })
    track('campana_click', { campana: campana.id })
  }

  return (
    <AnimatePresence>
      {campana && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={cerrar}
            className="fixed inset-0 z-[90] bg-stone-950/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed z-[100] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label={campana.titulo}
            data-campana={campana.id}
          >
            <div className="bg-stone-900 p-6 relative">
              <button
                onClick={cerrar}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-4">
                <Megaphone className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-white font-black text-xl leading-snug pr-6">{campana.titulo}</p>
              <p className="text-stone-400 text-sm mt-2 leading-relaxed">{campana.texto}</p>
            </div>
            <div className="p-6 space-y-3">
              <a
                href={conUtm(campana.destino, campana.id)}
                onClick={clic}
                data-cta={`campana_${campana.id}`}
                className="group flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black transition-all duration-200 shadow-lg shadow-emerald-200"
              >
                {campana.boton}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={cerrar}
                className="block w-full text-center text-stone-400 text-sm font-semibold hover:text-stone-600 transition-colors"
              >
                Ahora no
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
