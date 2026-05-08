'use client'

import { motion } from 'framer-motion'

const comparisons = [
  { feature: 'Operación consistente todos los días',         nutri: '✅', trad: '❌' },
  { feature: 'Tecnología (huella, app, tótems)',             nutri: '✅', trad: '❌' },
  { feature: 'Cero carga operativa para la escuela',         nutri: '✅', trad: '❌' },
  { feature: 'Gestión de personal incluida',                 nutri: '✅', trad: '❌' },
  { feature: 'Menos de 3 minutos de espera',                 nutri: '✅', trad: '❌' },
  { feature: 'Procesos claros y definidos',                  nutri: '✅', trad: '⚠️' },
  { feature: 'Experiencia del alumno como prioridad',        nutri: '✅', trad: '❌' },
  { feature: 'Adaptación al nivel de la escuela',            nutri: '✅', trad: '⚠️' },
]

const reasons = [
  { num: '+10', label: 'Años de experiencia', emoji: '🏆', bg: 'bg-amber-50 border-amber-200', text: 'text-amber-600' },
  { num: '10K+', label: 'Alumnos diarios', emoji: '👩‍🎓', bg: 'bg-emerald-50 border-emerald-200', text: 'text-emerald-600' },
  { num: '97%', label: 'Satisfacción', emoji: '😊', bg: 'bg-blue-50 border-blue-200', text: 'text-blue-600' },
  { num: '0', label: 'Carga para la escuela', emoji: '🛡️', bg: 'bg-rose-50 border-rose-200', text: 'text-rose-600' },
]

export function WhyNutri() {
  return (
    <section id="por-que" className="py-24 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mb-6 border border-amber-200">
            🏆 ¿Por qué Nutri Cafeterías?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
            No todas las cafeterías{' '}
            <span className="gradient-text-orange">operan igual</span>
          </h2>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto text-lg">
            La diferencia está en la operación, la experiencia y la consistencia —
            no en lo que prometen.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {reasons.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`card-lift text-center p-6 rounded-2xl border-2 ${r.bg}`}
            >
              <span className="text-4xl block mb-2">{r.emoji}</span>
              <div className={`text-4xl font-black mb-1 ${r.text}`}>{r.num}</div>
              <div className="font-bold text-stone-700 text-sm">{r.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl border-2 border-stone-200 overflow-hidden shadow-lg bg-white"
        >
          {/* Header */}
          <div className="grid grid-cols-3 px-6 py-4 border-b-2 border-stone-100">
            <div className="text-sm font-bold text-stone-500 uppercase tracking-wide">Característica</div>
            <div className="text-center">
              <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-sm font-black">Nutri Cafeterías</span>
            </div>
            <div className="text-center text-sm font-bold text-stone-400">Modelo tradicional</div>
          </div>
          {comparisons.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className={`grid grid-cols-3 px-6 py-4 border-b border-stone-100 hover:bg-emerald-50/50 transition-colors ${i % 2 === 0 ? 'bg-stone-50/50' : 'bg-white'}`}
            >
              <div className="text-sm text-stone-700 font-medium">{row.feature}</div>
              <div className="text-center text-xl">{row.nutri}</div>
              <div className="text-center text-xl">{row.trad}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-stone-500 italic text-lg">
            "La mejor cafetería no es la que promete más.{' '}
            <strong className="text-stone-700">Es la que no genera problemas.</strong>"
          </p>
        </motion.div>
      </div>
    </section>
  )
}
