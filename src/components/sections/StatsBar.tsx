'use client'

import { useCounter } from '@/hooks/useCounter'
import { motion } from 'framer-motion'

const stats = [
  { value: 1000000, prefix: '+', suffix: '',      label: 'Órdenes servidas',    emoji: '🍽️', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { value: 10,      prefix: '+', suffix: ' años', label: 'De experiencia',      emoji: '🏆', color: 'text-amber-600',   bg: 'bg-amber-50' },
  { value: 10,      prefix: '+', suffix: '',       label: 'Escuelas operando',   emoji: '🏫', color: 'text-orange-600',  bg: 'bg-orange-50' },
  { value: 97,      prefix: '',  suffix: '%',      label: 'Satisfacción',        emoji: '😊', color: 'text-rose-600',    bg: 'bg-rose-50' },
  { value: 3,       prefix: '<', suffix: ' min',   label: 'Tiempo de espera',   emoji: '⚡', color: 'text-blue-600',    bg: 'bg-blue-50' },
]

function StatItem({ s, delay }: { s: typeof stats[0]; delay: number }) {
  const { count, ref } = useCounter(s.value, 2000)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-2 py-8 px-6 flex-1 border-r border-stone-100 last:border-r-0 group hover:bg-stone-50 transition-colors duration-200 cursor-default"
    >
      <span className="text-3xl group-hover:animate-wiggle inline-block">{s.emoji}</span>
      <div className={`text-3xl md:text-4xl font-black tabular-nums ${s.color}`}>
        {s.prefix}{count.toLocaleString()}{s.suffix}
      </div>
      <div className="text-xs text-stone-500 uppercase tracking-widest font-medium">{s.label}</div>
    </motion.div>
  )
}

export function StatsBar() {
  return (
    <section className="bg-white border-b border-stone-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap divide-y md:divide-y-0 divide-stone-100">
        {stats.map((s, i) => (
          <StatItem key={s.label} s={s} delay={i * 0.08} />
        ))}
      </div>
    </section>
  )
}
