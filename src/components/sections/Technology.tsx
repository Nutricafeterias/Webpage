'use client'

import { motion } from 'framer-motion'

const techs = [
  { emoji: '👆', title: 'Pago con huella digital', desc: 'Los alumnos pagan en segundos con su huella. Sin efectivo, sin filas innecesarias.', bg: 'bg-violet-50', border: 'border-violet-200', badge: 'bg-violet-500' },
  { emoji: '🖥️', title: 'Tótems de autoservicio', desc: 'Pantallas táctiles intuitivas que agilizan el flujo y reducen los tiempos de espera.', bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-500' },
  { emoji: '📱', title: 'App para padres y alumnos', desc: 'Control del saldo, historial de compras y recargas desde el celular en segundos.', bg: 'bg-emerald-50', border: 'border-emerald-200', badge: 'bg-emerald-500' },
]

export function Technology() {
  return (
    <section id="tecnologia" className="py-24 bg-gradient-to-b from-emerald-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6 border border-blue-200">
            📱 Tecnología que hace todo más fácil
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
            La cafetería más{' '}
            <span className="gradient-text-primary">moderna</span>{' '}
            de la ciudad 🚀
          </h2>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto text-lg">
            Integrada de forma invisible. Fácil de usar para alumnos de cualquier edad.
            Sin complicaciones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {techs.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`card-lift p-6 rounded-2xl border-2 ${t.border} ${t.bg} text-center relative overflow-hidden`}
            >
              <div className="text-5xl mb-4 block">{t.emoji}</div>
              <h3 className="font-black text-stone-900 mb-2 text-base">{t.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 p-8 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200 relative overflow-hidden"
        >
          <div className="absolute -top-8 -right-8 text-[120px] opacity-10 select-none">⚡</div>
          <p className="text-2xl md:text-3xl font-black text-white relative z-10">
            Menos de <span className="bg-white text-emerald-600 px-2 rounded-lg">3 minutos</span> desde que el alumno llega hasta que recibe su pedido
          </p>
          <p className="mt-2 text-emerald-100 relative z-10">Incluso en horas pico 🎉</p>
        </motion.div>
      </div>
    </section>
  )
}
