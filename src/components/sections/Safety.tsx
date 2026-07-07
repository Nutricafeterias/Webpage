'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    emoji: '🏅',
    title: 'Distintivo H y licencia sanitaria',
    desc: 'Permisos y certificaciones en regla: Distintivo H, licencia sanitaria y protocolos de higiene alineados a NOM-251 en todo el proceso.',
  },
  {
    emoji: '🥜',
    title: 'Manejo de alérgenos',
    desc: 'Identificación clara de platillos con gluten, lácteos, frutos secos y huevo. Personal capacitado y alternativas disponibles para cada alumno.',
  },
  {
    emoji: '🔍',
    title: 'Trazabilidad de proveedores',
    desc: 'Sabemos de dónde viene cada ingrediente. Proveedores seleccionados, auditados y con estándares de calidad verificables.',
  },
  {
    emoji: '👩‍⚕️',
    title: 'Menús avalados por nutriólogos',
    desc: 'Cada platillo pasa el doble filtro: balance nutricional conforme a lineamientos SEP y aceptación real de los alumnos.',
  },
  {
    emoji: '📋',
    title: 'Supervisión continua',
    desc: 'Bitácoras de higiene, auditorías internas periódicas y supervisores de calidad en operación. Todo documentado y mostrable.',
  },
  {
    emoji: '🎓',
    title: 'Personal certificado',
    desc: 'Capacitación documentada en manejo higiénico de alimentos para todo el equipo, con evaluaciones y actualizaciones constantes.',
  },
]

export function Safety() {
  return (
    <section id="seguridad" className="py-24 bg-stone-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-sm mb-6 border border-emerald-500/30">
            🛡️ Seguridad alimentaria
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            La tranquilidad de tu escuela,{' '}
            <span className="text-emerald-400">respaldada con protocolos</span>
          </h2>
          <p className="mt-4 text-stone-400 max-w-2xl mx-auto text-lg">
            No decimos &ldquo;procesos de calidad&rdquo; en abstracto: te mostramos bitácoras,
            protocolos y normas concretas. La dirección escolar duerme tranquila — de eso se trata.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700 hover:border-emerald-500/50 transition-colors duration-300"
            >
              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className="font-black text-white mb-2 text-base">{p.title}</h3>
              <p className="text-sm text-stone-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-stone-500 text-sm"
        >
          ¿Quieres auditar nuestra operación? Te abrimos las puertas de cualquiera de nuestras cocinas. 🤝
        </motion.p>
      </div>
    </section>
  )
}
