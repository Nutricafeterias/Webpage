'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section ref={ref} className="relative h-[85vh] overflow-hidden flex items-center">
      <motion.div style={{ y }} className="absolute inset-[-15%] z-0">
        <Image
          src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1800&h=1000&fit=crop&q=90"
          alt="Cafetería escolar feliz"
          fill
          className="object-cover"
          priority
        />
        {/* Warm overlay instead of dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/85 via-emerald-800/70 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-bold text-sm mb-6 border border-white/30">
              ✨ Inspirado en las mejores cafeterías del mundo
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.05] mb-5">
              Hacemos de la cafetería el{' '}
              <span className="text-emerald-300">
                lugar más feliz
              </span>{' '}
              de tu escuela 🎉
            </h2>
            <p className="text-xl text-white/85 leading-relaxed mb-8">
              Un espacio que <strong className="text-white">funciona bien</strong>, se{' '}
              <strong className="text-white">ve bien</strong> y se{' '}
              <strong className="text-white">siente bien</strong> — todos los días, sin excepción.
            </p>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white text-emerald-700 font-bold text-base hover:bg-emerald-50 transition-all duration-200 shadow-xl hover:scale-[1.03]"
            >
              Transforma tu cafetería hoy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {[
              { icon: '👩‍🎓', text: '+10,000 alumnos felices' },
              { icon: '⭐', text: '97% de satisfacción' },
              { icon: '⚡', text: 'Menos de 3 min' },
            ].map(s => (
              <div key={s.text} className="px-4 py-2.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center gap-2">
                <span>{s.icon}</span>
                <span className="text-white font-semibold text-sm">{s.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
