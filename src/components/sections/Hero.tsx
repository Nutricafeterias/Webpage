'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import Image from 'next/image'
import { waHref } from '@/lib/whatsapp'
import { useEffect, useState } from 'react'
import { varianteAB } from '@/lib/analitica'

/**
 * AB-01 (ver ~/nutri-web-emilio/AB-01.md): oferta del botón principal del hero.
 * control = «Agenda una reunión sin costo» → #contacto
 * test    = «Evalúa tu cafetería en 2 minutos» → /diagnostico
 * Sin PostHog (o si tarda) se muestra siempre el control.
 */
export const AB01_FLAG = 'ab-01-cta-hero'
const AB01 = {
  control: { texto: 'Agenda una reunión sin costo', href: '#contacto', cta: 'agenda_reunion' },
  test: { texto: 'Evalúa tu cafetería en 2 minutos', href: '/diagnostico', cta: 'diagnostico_hero_ab01' },
} as const

export function Hero() {
  const [variante, setVariante] = useState<keyof typeof AB01>('control')
  useEffect(() => varianteAB(AB01_FLAG, v => setVariante(v === 'test' ? 'test' : 'control')), [])
  const boton = AB01[variante]

  return (
    <section className="relative lg:min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50 flex items-center pt-20">

      {/* Big blob backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100 rounded-full opacity-40 animate-blob blur-3xl -translate-y-32 translate-x-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100 rounded-full opacity-40 animate-blob blur-3xl translate-y-24 -translate-x-24 pointer-events-none" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-orange-50 rounded-full opacity-50 blur-3xl pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-6 pb-12 lg:py-16">

        {/* LEFT */}
        <div>
          {/* Badge */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-semibold mb-6 shadow-sm"
          >
            <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
            Operador de cafeterías escolares #1 en México
          </motion.div>

          {/* Headline */}
          {/* Sin animación de entrada: el h1 (LCP) se pinta sin esperar a JavaScript. */}
          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black leading-[1.05] text-stone-900 tracking-tight">
            Cafeterías escolares
            <br />
            <span className="gradient-text-primary">con comida real,</span>
            <br />
            a tiempo y a la vista
          </h1>

          {/* Sub */}
          <p className="mt-4 lg:mt-5 text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
            Operamos <strong className="text-stone-900">cafeterías y comedores escolares</strong> de forma integral en colegios y escuelas de México.
            Menús conforme a los Lineamientos de la SEP, ERP y punto de venta propios, tótems de autoservicio
            y app para familias, sin dejar de aceptar efectivo en caja. En CDMX desde 2018.
          </p>

          {/* CTAs */}
          <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={boton.href}
              data-cta={boton.cta}
              data-ab={`${AB01_FLAG}:${variante}`}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base transition-all duration-200 shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              {boton.texto}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={waHref('Hola, me interesa conocer más sobre Nutri Cafeterías para mi escuela', 'home')}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp_hero"
              className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-green-50 border-2 border-stone-200 hover:border-green-300 text-stone-800 font-semibold transition-all duration-200 shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 text-green-500" />
              Hablar por WhatsApp
            </a>
          </div>

          {/* Trust row */}
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            className="mt-6 lg:mt-8 flex flex-wrap items-center gap-3"
          >
            {/* Avatars stack */}
            <div className="flex -space-x-2">
              {['👨‍🏫','👩‍🏫','👨‍💼','👩‍💼','🧑‍🎓'].map((e, i) => (
                <span key={i} className="w-9 h-9 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-lg shadow-sm">{e}</span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-stone-500 mt-0.5">
                <strong className="text-stone-700">4.9 / 5</strong> de satisfacción · <strong className="text-stone-700">+1,000,000</strong> comidas · desde 2018
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT – layered photo composition */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[540px] hidden lg:block"
        >
          {/* Main photo */}
          <div className="absolute top-0 right-0 w-[82%] h-[78%] rounded-[2rem] overflow-hidden shadow-2xl shadow-emerald-200/60 border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900&h=700&fit=crop&q=85"
              alt="Alimentación fresca y saludable en cafeterías escolares"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Secondary overlapping photo */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute bottom-2 left-0 w-[52%] h-[46%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src="https://images.unsplash.com/photo-1543353071-873f17a7a088?w=600&h=450&fit=crop&q=85"
              alt="Ingredientes frescos de nuestros menús escolares"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Floating stat card 1 */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-16 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-emerald-100"
          >
            <span className="text-3xl">🤖</span>
            <div>
              <div className="text-xl font-black text-stone-900">Tótems</div>
              <div className="text-xs text-stone-500">Pide y paga sin fila larga</div>
            </div>
          </motion.div>

          {/* Floating stat card 2 */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-6 -left-2 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-amber-100"
          >
            <span className="text-3xl">🏫</span>
            <div>
              <div className="text-xl font-black text-stone-900">Desde 2018</div>
              <div className="text-xs text-stone-500">4.9 / 5 de satisfacción</div>
            </div>
          </motion.div>

          {/* Floating badge — SEP */}
          <motion.a
            href="/lineamientos-sep"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-[42%] -right-2 bg-stone-900 text-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5 hover:bg-stone-800 transition-colors"
          >
            <span className="text-xl">🛡️</span>
            <div>
              <div className="text-sm font-black leading-tight">Lineamientos SEP</div>
              <div className="text-[11px] text-emerald-400 font-bold">Así cumplimos</div>
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* Wave bottom */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
