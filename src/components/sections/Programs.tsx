'use client'

import { motion } from 'framer-motion'

const moods = [
  { emoji: '⚡', label: 'Alerta',  food: 'Frutos rojos y cacao' },
  { emoji: '😌', label: 'Calma',   food: 'Avena y plátano' },
  { emoji: '😄', label: 'Feliz',   food: 'Cítricos y garbanzo' },
  { emoji: '💪', label: 'Fuerte',  food: 'Proteína y frijol' },
  { emoji: '🧠', label: 'Listo',   food: 'Aguacate y nueces' },
  { emoji: '🌟', label: 'Seguro',  food: 'Fresa y yogurt' },
]

const programs = [
  {
    emoji: '🍳',
    title: 'Cocina Aventura',
    desc: 'Demostraciones de cocina en vivo, degustaciones y aprendizaje nutricional divertido. Los alumnos descubren de dónde viene su comida y cómo se prepara.',
    bg: 'bg-amber-50', border: 'border-amber-200',
  },
  {
    emoji: '🌎',
    title: 'Sabores del Mundo',
    desc: 'Cada mes, la cafetería viaja a un país distinto: platillos auténticos, ambientación y cultura gastronómica de Italia, Japón, India y más.',
    bg: 'bg-blue-50', border: 'border-blue-200',
  },
  {
    emoji: '🗳️',
    title: 'Tú Eliges',
    desc: 'Los alumnos votan los platillos que quieren ver en el menú. La cafetería se construye con su voz — y por eso la sienten suya.',
    bg: 'bg-violet-50', border: 'border-violet-200',
  },
  {
    emoji: '🏃',
    title: 'NutriEnergía',
    desc: 'Nutrición de alto rendimiento para alumnos deportistas: menús y talleres que enseñan cómo comer para entrenar, competir y recuperarse.',
    bg: 'bg-rose-50', border: 'border-rose-200',
  },
  {
    emoji: '🌱',
    title: 'Planeta Sano',
    desc: 'Reducción de desperdicio de alimentos, proveedores locales e ingredientes de temporada. Cuidamos a los alumnos y al planeta que van a heredar.',
    bg: 'bg-emerald-50', border: 'border-emerald-200',
  },
]

export function Programs() {
  return (
    <section id="programas" className="py-24 bg-gradient-to-b from-white to-amber-50/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 font-bold text-sm mb-6 border border-rose-200">
            🎓 Programas exclusivos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
            Mucho más que comida:{' '}
            <span className="gradient-text-orange">experiencias que educan</span>
          </h2>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto text-lg">
            Programas del nivel de los grandes operadores del mundo — diseñados para escuelas
            privadas de México. La cafetería se convierte en el aula más divertida de la escuela. ✨
          </p>
        </motion.div>

        {/* NutriMood — featured program */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 p-8 md:p-12 mb-10 shadow-2xl shadow-emerald-200 relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 text-[160px] opacity-10 select-none pointer-events-none">🧠</div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-xs mb-5 backdrop-blur">
                ⭐ Programa insignia · Comida y emociones
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                NutriMood™
              </h3>
              <p className="mt-4 text-emerald-50 leading-relaxed">
                Lo que comen los alumnos afecta cómo se sienten, se concentran y aprenden.
                NutriMood conecta la alimentación con las emociones: menús con ingredientes
                que impulsan cada estado de ánimo, señalización divertida en la cafetería,
                activaciones mensuales y tarjetas coleccionables con recetas para replicar en casa.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  'Menús diseñados por nutriólogos con ingredientes que impulsan ánimo y concentración',
                  'Activaciones y retos mensuales para alumnos de todas las edades',
                  'Tarjetas coleccionables con recetas — el aprendizaje llega hasta casa',
                  'Contenido para padres: cómo continuar los hábitos en familia',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-white/90 text-sm">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-black">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {moods.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-4 rounded-2xl bg-white/15 backdrop-blur border border-white/20 text-center"
                >
                  <div className="text-3xl mb-1.5">{m.emoji}</div>
                  <div className="font-black text-white text-sm">{m.label}</div>
                  <div className="text-emerald-100 text-[11px] mt-0.5 leading-tight">{m.food}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Other programs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`card-lift p-6 rounded-2xl border-2 ${p.border} ${p.bg}`}
            >
              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className="font-black text-stone-900 mb-2 text-base">{p.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
