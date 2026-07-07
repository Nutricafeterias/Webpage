'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export function SepBanner() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.a
          href="/lineamientos-sep"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group flex flex-col md:flex-row items-center gap-5 p-6 md:p-7 rounded-3xl bg-stone-900 border border-stone-800 hover:border-emerald-500/60 transition-colors shadow-xl"
        >
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
            <ShieldCheck className="w-7 h-7 text-emerald-400" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="font-black text-white text-lg leading-snug">
              Nuevos lineamientos SEP: la comida chatarra está prohibida en las escuelas
            </p>
            <p className="text-stone-400 text-sm mt-1">
              La responsabilidad es de la institución. Con nosotros, el cumplimiento está
              garantizado por contrato — cero productos con sellos, documentación auditable.
            </p>
          </div>
          <span className="flex-shrink-0 inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-emerald-500 text-white text-sm font-black group-hover:bg-emerald-400 transition-colors">
            Cómo lo garantizamos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </motion.a>
      </div>
    </section>
  )
}
