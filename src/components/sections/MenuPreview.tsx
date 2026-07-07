'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const menuItems = [
  { name: 'Bowl de proteína y verduras', tag: '💪 Alto en proteína', badge: 'bg-emerald-500', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop' },
  { name: 'Tacos frescos del día',       tag: '🌮 Favorito',         badge: 'bg-orange-500', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop' },
  { name: 'Ensalada fresca',             tag: '🥗 Vegetariano',      badge: 'bg-green-500',  image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&h=400&fit=crop' },
  { name: 'Sándwich artesanal',          tag: '⚡ Rápido',           badge: 'bg-yellow-500', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=400&fit=crop' },
  { name: 'Fruta fresca de temporada',   tag: '🍊 100% natural',     badge: 'bg-amber-500',  image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&h=400&fit=crop' },
  { name: 'Pasta con proteína',          tag: '🍝 Opción caliente',  badge: 'bg-rose-500',   image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&h=400&fit=crop' },
]

export function MenuPreview() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mb-6 border border-amber-200">
            🍽️ Nuestros menús
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
            Comida que los alumnos{' '}
            <span className="gradient-text-orange">realmente quieren comer</span>
          </h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto text-lg">
            Equilibramos nutrición con preferencias reales. Diseñada con nutriólogos,
            adaptada a cada escuela, fresca todos los días.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-white"
            >
              <div className="relative h-44 md:h-52">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className={`inline-block px-2.5 py-0.5 rounded-full ${item.badge} text-white text-xs font-bold mb-1.5`}>
                  {item.tag}
                </span>
                <div className="font-bold text-white text-sm leading-tight">{item.name}</div>
              </div>
              {hovered === i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 border-4 border-white/60 rounded-2xl pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-stone-400 text-sm">
            Diseñados con nutriólogos · Ingredientes frescos · Adaptados a cada institución
          </p>
        </motion.div>
      </div>
    </section>
  )
}
