'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    emoji: '🍽️',
    title: 'Cafetería escolar',
    desc: 'Platillos a la carta, snacks y bebidas que cumplen con la SEP, con tótems, app para familias y reconocimiento facial para que nadie pierda el receso en la fila. Y siempre efectivo en caja.',
    href: '/cafeterias-escolares',
    cta: 'Conoce el servicio',
    alt: 'Alumnos en la barra de la cafetería escolar Nutri del Campus Ciudad UP',
    image: '/img/cafeteria/barra.jpg',
    badge: 'El más solicitado ⭐',
  },
  {
    emoji: '🍲',
    title: 'Comedor escolar',
    desc: 'Un menú completo de 3 o 4 tiempos, recién hecho, con la porción de cada edad y el mismo sabor del primer turno al último. Comedores escolares conforme a la SEP.',
    href: '/comedores-escolares',
    cta: 'Ver el servicio de comedor escolar',
    alt: 'Servicio de comedor escolar con menú completo recién hecho',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=520&fit=crop&q=85',
    badge: null,
  },
  {
    emoji: '🎉',
    title: 'Eventos escolares',
    desc: 'Complemento para tu contrato: graduaciones, juntas de consejo, coffee breaks y desayunos con padres, con el mismo estándar de cocina e higiene.',
    href: '/catering-escolar',
    cta: 'Ver eventos',
    alt: 'Servicio de eventos escolares y coffee break',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=520&fit=crop&q=85',
    badge: null,
  },
]

export function ServicesSplit() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6 border border-emerald-200">
            🌟 Nuestros servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
            Un aliado integral para{' '}
            <span className="gradient-text-primary">la alimentación de tu escuela</span>
          </h2>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto text-lg">
            Dos líneas de servicio y un complemento, con el mismo estándar: menús conforme a los
            Lineamientos de la SEP, higiene según la NOM-251 y tecnología propia. Una escuela puede tener las dos. 🏆
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={s.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative rounded-3xl overflow-hidden border-2 border-stone-100 bg-white shadow-md card-lift flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-3 left-4 text-4xl drop-shadow">{s.emoji}</span>
                {s.badge && (
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-amber-400 text-amber-900 text-xs font-black shadow">
                    {s.badge}
                  </span>
                )}
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-black text-stone-900 group-hover:text-emerald-700 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed flex-1">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-emerald-600 font-black text-sm">
                  {s.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
        <p className="mt-8 text-center text-stone-600">
          ¿Prepa o universidad?{' '}
          <a href="/universidades" data-cta="cruce_a_universidades_home" className="text-emerald-700 font-black hover:underline underline-offset-2">
            Conoce la cafetería universitaria que operamos en Campus Ciudad UP →
          </a>
        </p>
      </div>
    </section>
  )
}
