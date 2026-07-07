'use client'

import { motion } from 'framer-motion'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

const features = [
  { emoji: '💳', title: 'Recargas desde tu celular', desc: 'Saldo siempre disponible sin enviar efectivo a la escuela.' },
  { emoji: '👀', title: 'Ve qué comió tu hijo', desc: 'Historial de consumo en tiempo real: qué, cuándo y cuánto.' },
  { emoji: '🚦', title: 'Límites de gasto', desc: 'Tú decides cuánto puede gastar al día. La app lo respeta.' },
  { emoji: '📅', title: 'Menú de la semana', desc: 'Consulta platillos e información nutricional con anticipación.' },
  { emoji: '🥜', title: 'Alertas de alérgenos', desc: 'Identifica platillos con gluten, lácteos, frutos secos y huevo.' },
  { emoji: '💬', title: 'Canal directo', desc: '¿Dudas o casos especiales? Hablas directo con nuestro equipo.' },
]

export function Parents() {
  return (
    <section id="padres" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-bold text-sm mb-6 border border-sky-200">
              👨‍👩‍👧‍👦 Para papás y mamás
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
              Transparencia total,{' '}
              <span className="gradient-text-primary">aunque no estés ahí</span>
            </h2>
            <p className="mt-5 text-stone-500 text-lg leading-relaxed">
              Sabemos lo que es dejar a tus hijos en la escuela y preguntarte si comieron bien.
              Por eso nuestra app te da visibilidad completa de su alimentación — algo que
              ninguna cafetería tradicional te puede ofrecer.
            </p>
            <div className="mt-8 p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-200">
              <p className="text-sm text-emerald-900 leading-relaxed">
                <strong>¿Tu hijo tiene alergias o necesidades especiales?</strong> Nuestro equipo
                de nutriólogos trabaja contigo un plan personalizado. Escríbenos por WhatsApp
                y te atendemos directamente.
              </p>
              <a
                href="https://wa.me/5215567034269"
                className="mt-3 inline-flex items-center gap-2 text-emerald-700 font-bold text-sm hover:underline"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Hablar con un nutriólogo →
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-lift p-5 rounded-2xl border-2 border-stone-100 bg-white shadow-sm"
              >
                <div className="text-3xl mb-2">{f.emoji}</div>
                <h3 className="font-black text-stone-900 text-sm mb-1">{f.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
