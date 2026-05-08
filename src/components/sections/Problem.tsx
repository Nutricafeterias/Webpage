'use client'

import { motion } from 'framer-motion'

const problems = [
  { emoji: '⏰', title: 'Filas interminables',    desc: 'Los alumnos pierden tiempo valioso en horas pico y llegan tarde a clases.', color: 'border-red-200 bg-red-50 hover:bg-red-100' },
  { emoji: '😤', title: 'Quejas constantes',       desc: 'Padres y alumnos insatisfechos que afectan la reputación de la institución.', color: 'border-orange-200 bg-orange-50 hover:bg-orange-100' },
  { emoji: '🍔', title: 'Opciones poco saludables', desc: 'Menús que no equilibran nutrición con las preferencias reales de los alumnos.', color: 'border-amber-200 bg-amber-50 hover:bg-amber-100' },
  { emoji: '📋', title: 'Carga operativa',          desc: 'La escuela termina gestionando un problema que no debería ser suyo.', color: 'border-rose-200 bg-rose-50 hover:bg-rose-100' },
  { emoji: '📉', title: 'Falta de control',         desc: 'Sin visibilidad clara del día a día ni de los resultados del servicio.', color: 'border-purple-200 bg-purple-50 hover:bg-purple-100' },
  { emoji: '🔧', title: 'Servicio desorganizado',   desc: 'Operación improvisada que genera fricción todos los días.', color: 'border-pink-200 bg-pink-50 hover:bg-pink-100' },
]

export function Problem() {
  return (
    <section className="py-24 bg-white doodle-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-6 border border-red-200">
            😰 El problema real
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
            La cafetería no debería ser{' '}
            <span className="gradient-text-orange">una preocupación</span>
          </h2>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto text-lg">
            En muchas escuelas, la cafetería genera más problemas que soluciones.
            Todo esto impacta directamente en la experiencia del alumno y la reputación de la institución.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`card-lift p-6 rounded-2xl border-2 ${p.color} transition-all duration-200 cursor-default`}
            >
              <span className="text-4xl block mb-3">{p.emoji}</span>
              <h3 className="font-bold text-stone-800 text-lg mb-2">{p.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-center shadow-lg shadow-emerald-200"
        >
          <p className="text-lg font-bold">
            ✨ Nutri Cafeterías existe para que <span className="underline decoration-white/50">nunca más</span> tengas que lidiar con esto
          </p>
        </motion.div>
      </div>
    </section>
  )
}
