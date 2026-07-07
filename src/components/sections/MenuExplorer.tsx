'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type MenuItem = {
  name: string
  cat: 'Desayuno' | 'Comida' | 'Snacks' | 'Bebidas'
  kcal: number
  protein: number
  tags: string[]
  emoji: string
  desc: string
}

const ITEMS: MenuItem[] = [
  { name: 'Bowl de yogurt, granola y frutos rojos', cat: 'Desayuno', kcal: 320, protein: 14, tags: ['Vegetariano'], emoji: '🥣', desc: 'Yogurt natural, granola de avena horneada en casa y frutos rojos de temporada.' },
  { name: 'Molletes integrales con pico de gallo', cat: 'Desayuno', kcal: 380, protein: 16, tags: ['Vegetariano'], emoji: '🍞', desc: 'Bolillo integral, frijoles de la olla, queso gratinado y pico de gallo fresco.' },
  { name: 'Huevo revuelto con espinacas y tortilla de maíz', cat: 'Desayuno', kcal: 290, protein: 18, tags: ['Sin gluten', 'Alto en proteína'], emoji: '🍳', desc: 'Huevos de rancho con espinaca salteada y tortillas de maíz nixtamalizado.' },
  { name: 'Bowl de pollo, arroz integral y verduras', cat: 'Comida', kcal: 450, protein: 32, tags: ['Sin lácteos', 'Alto en proteína'], emoji: '🍗', desc: 'Pechuga a la plancha, arroz integral, brócoli, zanahoria y aderezo ligero.' },
  { name: 'Tacos de pescado con ensalada de col', cat: 'Comida', kcal: 420, protein: 26, tags: ['Sin lácteos'], emoji: '🌮', desc: 'Pescado blanco empanizado al horno, tortilla de maíz y col morada fresca.' },
  { name: 'Pasta integral con albóndigas de res', cat: 'Comida', kcal: 480, protein: 28, tags: ['Alto en proteína'], emoji: '🍝', desc: 'Pasta integral, salsa de jitomate natural y albóndigas horneadas.' },
  { name: 'Ensalada de garbanzo, aguacate y elote', cat: 'Comida', kcal: 360, protein: 15, tags: ['Vegetariano', 'Sin gluten', 'Sin lácteos'], emoji: '🥗', desc: 'Garbanzos, aguacate, elote amarillo, jitomate cherry y vinagreta cítrica.' },
  { name: 'Fruta de temporada con chile en polvo natural', cat: 'Snacks', kcal: 90, protein: 1, tags: ['Vegetariano', 'Sin gluten', 'Sin lácteos'], emoji: '🍉', desc: 'Cortada al momento: sandía, jícama, pepino, mango según temporada.' },
  { name: 'Palomitas naturales hechas en casa', cat: 'Snacks', kcal: 110, protein: 3, tags: ['Vegetariano', 'Sin gluten', 'Sin lácteos'], emoji: '🍿', desc: 'Maíz palomero con una pizca de sal — sin mantequilla artificial.' },
  { name: 'Hummus con bastones de verdura', cat: 'Snacks', kcal: 150, protein: 6, tags: ['Vegetariano', 'Sin gluten', 'Sin lácteos'], emoji: '🥕', desc: 'Hummus de garbanzo con zanahoria, pepino y apio.' },
  { name: 'Agua fresca del día (baja en azúcar)', cat: 'Bebidas', kcal: 45, protein: 0, tags: ['Vegetariano', 'Sin gluten', 'Sin lácteos'], emoji: '🥤', desc: 'Jamaica, horchata ligera o fruta natural — con 70% menos azúcar.' },
  { name: 'Licuado de plátano con avena', cat: 'Bebidas', kcal: 210, protein: 9, tags: ['Vegetariano'], emoji: '🥛', desc: 'Leche, plátano, avena y canela. Sin azúcar añadida.' },
]

const CATS = ['Todos', 'Desayuno', 'Comida', 'Snacks', 'Bebidas'] as const
const FILTERS = ['Vegetariano', 'Sin gluten', 'Sin lácteos', 'Alto en proteína'] as const

export function MenuExplorer() {
  const [cat, setCat] = useState<(typeof CATS)[number]>('Todos')
  const [filters, setFilters] = useState<string[]>([])

  const toggleFilter = (f: string) =>
    setFilters(prev => (prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]))

  const visible = ITEMS.filter(i =>
    (cat === 'Todos' || i.cat === cat) &&
    filters.every(f => i.tags.includes(f)),
  )

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
        {CATS.map(c => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
              cat === c
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-200'
                : 'bg-white text-stone-600 border-2 border-stone-200 hover:border-emerald-300'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Dietary filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => toggleFilter(f)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
              filters.includes(f)
                ? 'bg-stone-900 text-white'
                : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
            }`}
          >
            {filters.includes(f) ? '✓ ' : ''}{f}
          </button>
        ))}
      </div>

      {/* Items */}
      {visible.length === 0 ? (
        <p className="text-center text-stone-400 py-16">
          No hay platillos con esa combinación de filtros — pero en tu menú personalizado sí los habría.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(i * 0.05, 0.4) }}
              className="card-lift p-6 rounded-2xl bg-white border-2 border-stone-100 shadow-sm flex flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-4xl">{item.emoji}</span>
                <span className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-500 text-[11px] font-bold">
                  {item.cat}
                </span>
              </div>
              <h3 className="mt-3 font-black text-stone-900 leading-snug">{item.name}</h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed flex-1">{item.desc}</p>
              <div className="mt-4 flex items-center gap-4 text-xs font-bold text-stone-600">
                <span>🔥 {item.kcal} kcal</span>
                <span>💪 {item.protein} g proteína</span>
              </div>
              {item.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-100">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
