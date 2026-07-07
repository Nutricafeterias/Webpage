'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const styles = [
  {
    name: 'NutriMarket',
    tagline: 'Estilo mercado fresco',
    emoji: '🥬',
    gradient: 'from-emerald-700/80',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=700&h=460&fit=crop&q=85',
    ideal: 'Ideal para escuelas con enfoque en bienestar y naturaleza',
    features: [
      'Barras de fruta y productos frescos a la vista',
      'Madera natural, pizarras y plantas',
      'Ambiente de mercado artesanal',
      'Los alumnos ven cómo se prepara su comida',
    ],
  },
  {
    name: 'NutriPop',
    tagline: 'Color y diversión',
    emoji: '🎨',
    gradient: 'from-fuchsia-700/80',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=700&h=460&fit=crop&q=85',
    ideal: 'Ideal para primarias y secundarias con comunidades vibrantes',
    features: [
      'Colores vivos y arte tipo pop en muros',
      'Zonas instagrameables que los alumnos aman',
      'Mobiliario divertido y flexible',
      'La cafetería más fotografiada de la escuela',
    ],
  },
  {
    name: 'NutriStudio',
    tagline: 'Moderno minimalista',
    emoji: '✨',
    gradient: 'from-stone-900/85',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&h=460&fit=crop&q=85',
    ideal: 'Ideal para preparatorias y escuelas de perfil internacional',
    features: [
      'Líneas limpias estilo food hall premium',
      'Tótems y tecnología como protagonistas',
      'Iluminación cálida y materiales de calidad',
      'Un espacio que eleva la imagen institucional',
    ],
  },
]

export function CafeteriaStyles() {
  return (
    <section id="estilos" className="py-24 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-bold text-sm mb-6 border border-violet-200">
            🎨 Diseño de espacios
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
            Elige el estilo de{' '}
            <span className="gradient-text-primary">tu cafetería</span>
          </h2>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto text-lg">
            Como los grandes operadores del mundo: tres conceptos de diseño probados.
            Tu escuela elige el que va con su personalidad — nosotros lo construimos,
            sin costo para la institución.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {styles.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group card-lift rounded-3xl overflow-hidden border-2 border-stone-100 bg-white shadow-md flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={s.image}
                  alt={`Cafetería escolar estilo ${s.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${s.gradient} to-transparent`} />
                <div className="absolute bottom-4 left-5 flex items-center gap-2.5">
                  <span className="text-3xl drop-shadow">{s.emoji}</span>
                  <div>
                    <div className="text-white font-black text-xl tracking-tight leading-none">{s.name}</div>
                    <div className="text-white/80 text-xs font-bold mt-1">{s.tagline}</div>
                  </div>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <ul className="space-y-2.5 flex-1">
                  {s.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-stone-600 leading-relaxed">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-black">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 pt-4 border-t border-stone-100 text-xs font-bold text-stone-400">
                  {s.ideal}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-stone-500"
        >
          ¿No sabes cuál va con tu escuela? En la visita inicial te ayudamos a elegir
          — y también diseñamos conceptos 100% a la medida. 🤝
        </motion.p>
      </div>
    </section>
  )
}
