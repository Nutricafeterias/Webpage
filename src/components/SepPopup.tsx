'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldCheck, ArrowRight } from 'lucide-react'

export function SepPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('sep-popup-shown')) return
    const t = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem('sep-popup-shown', '1')
    }, 3000)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[90] bg-stone-950/50 backdrop-blur-sm"
          />
          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed z-[100] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Aviso sobre lineamientos SEP"
          >
            <div className="bg-stone-900 p-6 relative">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-white font-black text-xl leading-snug">
                La comida chatarra ya está prohibida en las escuelas de México
              </p>
              <p className="text-stone-400 text-sm mt-2 leading-relaxed">
                Los nuevos lineamientos de la SEP hacen responsable a la institución.
                ¿Tu cafetería cumple?
              </p>
            </div>
            <div className="p-6 space-y-3">
              <a
                href="/lineamientos-sep"
                className="group flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black transition-all duration-200 shadow-lg shadow-emerald-200"
              >
                Ver cómo garantizamos el cumplimiento
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => setOpen(false)}
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
