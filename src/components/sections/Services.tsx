'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    emoji: '⚡',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
    accent: 'text-amber-600',
    btnBg: 'bg-amber-500 hover:bg-amber-600',
    title: 'Servicio rápido y ordenado',
    tag: 'Operación',
    desc: 'Los alumnos no pierden el receso: tótems, app y caja trabajan juntos con un flujo diseñado para la hora pico.',
    items: ['Tótems de autoservicio', 'Pedidos para recoger', 'Operación ordenada'],
    stat: 'Receso',
  },
  {
    emoji: '❤️',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    badge: 'bg-rose-100 text-rose-700',
    accent: 'text-rose-600',
    btnBg: 'bg-rose-500 hover:bg-rose-600',
    title: 'Comida real, recién hecha',
    tag: 'Experiencia',
    desc: 'Menús atractivos, balanceados y adaptados. Porque comer bien también debe ser algo que disfruten.',
    items: ['Menús con criterios nutrimentales de la SEP', 'Opciones frescas diarias', 'Preferencias reales'],
    stat: '100% fresco',
  },
  {
    emoji: '📱',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
    accent: 'text-blue-600',
    btnBg: 'bg-blue-500 hover:bg-blue-600',
    title: 'Tecnología que lo hace fácil',
    tag: 'Tecnología',
    desc: 'Reconocimiento facial opcional, tótems de autoservicio y app para familias. También puedes pagar en efectivo en caja.',
    items: ['Reconocimiento facial (opcional)', 'Tótems de autoservicio', 'App para familias + efectivo en caja'],
    stat: '3 tech',
  },
  {
    emoji: '🛡️',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700',
    accent: 'text-emerald-600',
    btnBg: 'bg-emerald-500 hover:bg-emerald-600',
    title: 'La operación diaria es nuestra',
    tag: 'Operación',
    desc: 'Personal, proveedores, supervisión y operación: todo gestionado por nosotros. La escuela no interviene.',
    items: ['Personal seleccionado y capacitado', 'Supervisión constante', 'Resolución inmediata'],
    stat: 'Día a día',
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6 border border-emerald-200">
            🌟 Nuestra solución completa
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
            Todo lo que tu escuela necesita,
            <br />
            <span className="gradient-text-primary">sin complicaciones</span>
          </h2>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto text-lg">
            No solo operamos cafeterías — diseñamos experiencias que hacen felices a los alumnos
            y quitan carga a la escuela.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`card-lift p-8 rounded-3xl border-2 ${p.border} ${p.bg} relative overflow-hidden`}
            >
              {/* Big emoji watermark */}
              <div className="absolute -bottom-4 -right-4 text-8xl opacity-10 select-none pointer-events-none">
                {p.emoji}
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{p.emoji}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${p.badge}`}>{p.tag}</span>
                  </div>
                  <span className={`text-2xl font-black ${p.accent}`}>{p.stat}</span>
                </div>

                <h3 className="text-xl font-black text-stone-900 mb-3">{p.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-5">{p.desc}</p>

                <ul className="space-y-2">
                  {p.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-stone-700 font-medium">
                      <span className="text-emerald-500 font-black">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
