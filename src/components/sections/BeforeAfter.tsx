'use client'

import { motion } from 'framer-motion'

const before = [
  '😤 Filas largas en horas pico',
  '🐢 Servicio lento y desorganizado',
  '😡 Quejas constantes de alumnos y padres',
  '🍔 Opciones poco saludables y aburridas',
  '😰 La escuela cargando con el problema',
  '🎲 Operación improvisada cada día',
]

const after = [
  '⚡ Menos de 3 minutos de espera',
  '🚀 Servicio rápido, ordenado y consistente',
  '😊 97% de satisfacción de alumnos',
  '🥗 Menús equilibrados que los alumnos aman',
  '🛡️ Cero carga operativa para la escuela',
  '✅ Procesos claros que funcionan siempre',
]

export function BeforeAfter() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-rose-50/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-stone-600 font-bold text-sm mb-6 border border-stone-200">
            📊 La diferencia en el día a día
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900">
            Antes vs{' '}
            <span className="gradient-text-primary">Después</span> 🎉
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl border-2 border-red-200 bg-red-50"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">😰</span>
              <h3 className="text-xl font-black text-red-600">Sin Nutri Cafeterías</h3>
            </div>
            <ul className="space-y-3">
              {before.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="flex items-center gap-3 text-stone-600 text-sm font-medium bg-white/60 rounded-xl px-4 py-2.5"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl border-2 border-emerald-200 bg-emerald-50"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🎉</span>
              <h3 className="text-xl font-black text-emerald-600">Con Nutri Cafeterías</h3>
            </div>
            <ul className="space-y-3">
              {after.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="flex items-center gap-3 text-stone-700 text-sm font-medium bg-white/70 rounded-xl px-4 py-2.5"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 p-8 rounded-3xl border-2 border-emerald-200 bg-white text-center shadow-md"
        >
          <p className="text-xl text-stone-700 italic leading-relaxed font-medium">
            &ldquo;Desde que Nutri Cafeterías opera nuestra cafetería, el servicio mejoró
            significativamente en rapidez, organización y satisfacción de los alumnos.&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-2xl">🏫</span>
            <span className="text-stone-500 text-sm font-semibold">— Director, Universidad Panamericana</span>
          </div>
        </motion.blockquote>
      </div>
    </section>
  )
}
