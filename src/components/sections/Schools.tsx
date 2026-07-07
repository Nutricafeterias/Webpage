'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

const schools = [
  { name: 'Universidad Panamericana', location: 'Ciudad de México', initials: 'UP',  image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&q=85' },
  { name: 'Northridge School',        location: 'Ciudad de México', initials: 'NS',  image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop&q=85' },
  { name: 'Prepa UP',                 location: 'Ciudad de México', initials: 'PUP', image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop&q=85' },
]

const testimonials = [
  {
    quote: 'Desde que Nutri Cafeterías opera nuestra cafetería, el servicio mejoró significativamente en rapidez, organización y satisfacción de los alumnos.',
    author: 'Director General',
    school: 'Universidad Panamericana',
    emoji: '🎓',
    bg: 'bg-emerald-50 border-emerald-200',
  },
  {
    quote: 'El cambio fue inmediato. Hoy la cafetería funciona de forma ordenada y sin generar problemas para la escuela. Los alumnos están felices.',
    author: 'Coordinador Académico',
    school: 'Northridge School',
    emoji: '📚',
    bg: 'bg-amber-50 border-amber-200',
  },
]

export function Schools() {
  return (
    <section id="escuelas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6 border border-blue-200">
            🏫 Escuelas que nos eligen
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900">
            Ya confían en nosotros{' '}
            <span className="gradient-text-primary">más de 10 instituciones</span>
          </h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto text-lg">
            Escuelas privadas de primer nivel en México que transformaron su cafetería con nosotros.
          </p>
        </motion.div>

        {/* School cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {schools.map((school, i) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-lift relative rounded-2xl overflow-hidden group shadow-md"
            >
              <div className="relative h-48">
                <Image
                  src={school.image}
                  alt={school.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent" />
              </div>
              <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center">
                <span className="text-white font-black text-sm tracking-tight">{school.initials}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="font-black text-white">{school.name}</div>
                <div className="text-xs text-white/70 mt-0.5">{school.location}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`p-8 rounded-3xl border-2 ${t.bg} card-lift`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-stone-700 italic leading-relaxed mb-6 font-medium">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{t.emoji}</span>
                <div>
                  <div className="text-stone-900 font-bold text-sm">{t.author}</div>
                  <div className="text-stone-500 text-xs">{t.school}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA inline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-center shadow-lg shadow-emerald-200"
        >
          <p className="font-bold text-lg">
            🚀 ¿Quieres ver estos resultados en tu escuela?{' '}
            <a href="#contacto" className="underline decoration-white/50 hover:decoration-white transition-colors">
              Agenda una reunión gratis →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
