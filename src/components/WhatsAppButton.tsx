'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { useState } from 'react'
import Image from 'next/image'

export function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl border-2 border-emerald-100 p-5 w-72"
          >
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/logo.png"
                alt="Nutri Cafetería"
                width={120}
                height={61}
                className="h-8 w-auto object-contain"
              />
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                En línea ahora
              </div>
            </div>
            <p className="text-stone-600 text-sm mb-4 bg-stone-50 rounded-xl p-3 leading-relaxed">
              👋 ¡Hola! ¿Quieres transformar la cafetería de tu escuela?
              Escríbenos y te respondemos en segundos.
            </p>
            <a
              href="https://wa.me/5215567034269?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20Nutri%20Cafeterías"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-all shadow-md shadow-emerald-200 hover:scale-[1.02]"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Iniciar conversación
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-300 flex items-center justify-center transition-colors"
        aria-label="Chat por WhatsApp"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <WhatsAppIcon className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulse ring */}
      {!open && (
        <motion.div
          className="absolute bottom-0 right-0 w-14 h-14 rounded-full border-2 border-emerald-400 pointer-events-none"
          animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
        />
      )}
    </div>
  )
}
