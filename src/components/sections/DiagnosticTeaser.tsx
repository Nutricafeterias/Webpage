'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function DiagnosticTeaser() {
  return (
    <section id="diagnostico" className="py-20 bg-gradient-to-b from-emerald-50/40 to-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-stone-900 p-8 md:p-14 overflow-hidden shadow-2xl"
        >
          {/* Glow effects */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-sm mb-6 border border-emerald-500/30">
                📊 Diagnóstico gratuito · 2 minutos
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                ¿Qué calificación sacaría{' '}
                <span className="text-emerald-400">la cafetería de tu escuela?</span>
              </h2>
              <p className="mt-4 text-stone-400 text-lg leading-relaxed">
                Responde 7 preguntas y descubre al instante cómo se compara tu cafetería
                contra el estándar de las mejores escuelas privadas de México — con un
                plan de acción personalizado.
              </p>
              <a
                href="/diagnostico"
                className="group mt-8 inline-flex items-center gap-2 px-9 py-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-lg transition-all duration-200 shadow-xl shadow-emerald-900/50 hover:scale-[1.03] active:scale-[0.98]"
              >
                Evaluar mi cafetería gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mock score preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex flex-col items-center gap-4"
            >
              <div className="relative w-44 h-44">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#292524" strokeWidth="10" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#f59e0b" strokeWidth="10" strokeLinecap="round" strokeDasharray="150 264" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black text-white">57</span>
                  <span className="text-stone-500 text-xs font-bold">/ 100</span>
                </div>
              </div>
              <div className="space-y-2 w-full max-w-xs">
                {[
                  { emoji: '⏱️', t: 'Velocidad de servicio', ok: false },
                  { emoji: '💳', t: 'Tecnología de pago', ok: false },
                  { emoji: '🥗', t: 'Calidad nutricional', ok: true },
                ].map(r => (
                  <div key={r.t} className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span>{r.emoji}</span>
                    <span className="text-stone-300 text-xs font-bold flex-1">{r.t}</span>
                    <span className="text-sm">{r.ok ? '✅' : '⚠️'}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
