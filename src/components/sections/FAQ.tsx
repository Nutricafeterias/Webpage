'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { q: '¿La escuela tiene que hacer alguna inversión?',           a: 'No. Nuestro modelo permite operar sin inversión inicial para la escuela. Nos encargamos de toda la implementación, equipo y tecnología necesaria desde el primer día.' },
  { q: '¿La escuela tiene que involucrarse en la operación?',     a: 'Para nada. Nos encargamos completamente del día a día: personal, proveedores, calidad, tecnología y supervisión constante. La escuela puede enfocarse 100% en lo académico.' },
  { q: '¿Qué tan rápido es el servicio?',                        a: 'Menos de 3 minutos desde que el alumno se forma hasta que recibe su pedido, incluso en horas pico. La operación está diseñada para fluidez total.' },
  { q: '¿Cuánto tiempo tardan en implementar el servicio?',       a: 'El proceso es rápido y ordenado. Evaluamos la escuela, definimos el menú, instalamos el equipo y capacitamos al personal sin interrumpir la operación normal.' },
  { q: '¿Qué tecnología incluye el servicio?',                   a: 'Huella digital para pagos, tótems de autoservicio, app para padres y alumnos, y un sistema centralizado de monitoreo en tiempo real. Todo integrado y fácil de usar.' },
  { q: '¿Qué pasa si hay un problema en la operación?',          a: 'Se atiende de forma inmediata sin involucrar a la escuela. Tenemos protocolos claros para resolver cualquier situación antes de que escale.' },
  { q: '¿Qué tipo de alimentos ofrecen?',                        a: 'Opciones balanceadas, atractivas y adaptadas a las preferencias reales de los alumnos. Diseñadas con nutriólogos y con ingredientes frescos seleccionados.' },
  { q: '¿La escuela recibe algún beneficio económico?',          a: 'Se puede definir un esquema personalizado según la institución. En cada caso buscamos una alianza que beneficie a ambas partes.' },
]

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`rounded-2xl overflow-hidden border-2 transition-colors duration-200 ${isOpen ? 'border-emerald-300 bg-emerald-50' : 'border-stone-200 bg-white hover:border-emerald-200'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        aria-expanded={isOpen}
      >
        <span className={`font-bold text-base transition-colors ${isOpen ? 'text-emerald-700' : 'text-stone-800'}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 p-1.5 rounded-lg transition-colors ${isOpen ? 'bg-emerald-500 text-white' : 'bg-stone-100 text-stone-500'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 text-stone-600 text-sm leading-relaxed border-t-2 border-emerald-100 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-bold text-sm mb-6 border border-purple-200">
            ❓ Preguntas frecuentes
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900">
            Resolvemos tus dudas{' '}
            <span className="gradient-text-primary">antes de que las tengas</span>
          </h2>
          <p className="mt-4 text-stone-500 text-lg">
            Elegir quién opera la cafetería de tu escuela es una decisión importante.
            Aquí respondemos todo con total claridad. 👇
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-stone-500 text-sm">
            ¿Tienes otra pregunta?{' '}
            <a href="#contacto" className="text-emerald-600 font-bold hover:underline">
              Escríbenos directamente →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
