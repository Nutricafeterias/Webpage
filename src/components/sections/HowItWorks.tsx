'use client'

import { motion } from 'framer-motion'

const steps = [
  { num: '01', emoji: '🔍', title: 'Evaluamos tu escuela',       desc: 'Visitamos, entendemos sus necesidades y diseñamos un plan personalizado. Sin costo.', color: 'bg-emerald-50 border-emerald-200', num_color: 'text-emerald-500' },
  { num: '02', emoji: '🍽️', title: 'Diseñamos el menú',          desc: 'Con nutriólogos y considerando las preferencias reales de tus alumnos.', color: 'bg-amber-50 border-amber-200', num_color: 'text-amber-500' },
  { num: '03', emoji: '🤖', title: 'Instalamos la tecnología',   desc: 'Tótems, huella y app. Todo configurado y listo antes del primer día.', color: 'bg-blue-50 border-blue-200', num_color: 'text-blue-500' },
  { num: '04', emoji: '👥', title: 'Capacitamos al equipo',      desc: 'Seleccionamos, contratamos y entrenamos al personal. La escuela no interviene.', color: 'bg-purple-50 border-purple-200', num_color: 'text-purple-500' },
  { num: '05', emoji: '🚀', title: '¡Arrancamos!',               desc: 'Desde el primer día con servicio completo, fluido y al nivel de tu institución.', color: 'bg-rose-50 border-rose-200', num_color: 'text-rose-500' },
  { num: '06', emoji: '📈', title: 'Mejora continua',            desc: 'Supervisión constante y mejora permanente. La cafetería mejora cada ciclo.', color: 'bg-teal-50 border-teal-200', num_color: 'text-teal-500' },
]

export function HowItWorks() {
  return (
    <section id="modelo" className="py-24 bg-white doodle-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6 border border-emerald-200">
            🗺️ Cómo funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
            De cero a{' '}
            <span className="gradient-text-primary">cafetería perfecta</span>
            {' '}en tiempo récord ⚡
          </h2>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto text-lg">
            Un proceso ordenado y sin complicaciones. Nos encargamos de todo para que
            la transición sea invisible y sin estrés.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`card-lift p-7 rounded-2xl border-2 ${s.color}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{s.emoji}</span>
                <span className={`text-4xl font-black opacity-25 ${s.num_color}`}>{s.num}</span>
              </div>
              <h3 className="font-black text-stone-900 text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 p-6 rounded-2xl border-2 border-emerald-200 bg-emerald-50 text-center"
        >
          <p className="text-stone-700 font-bold text-lg">
            🤝 Nuestro objetivo: que la cafetería funcione excelente{' '}
            <span className="text-emerald-600">sin que la escuela tenga que preocuparse por nada</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
