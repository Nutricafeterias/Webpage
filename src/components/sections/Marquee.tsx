const items = [
  '🍎 Alimentación saludable',
  '⚡ Menos de 3 minutos de espera',
  '🏫 Universidad Panamericana',
  '😊 97% de satisfacción',
  '💳 Pago con huella digital',
  '🌮 Menús que los alumnos aman',
  '📱 App para padres y alumnos',
  '🏆 +10 años de experiencia',
  '🤖 Tótems de autoservicio',
  '✅ Cero carga para la escuela',
  '🏫 Northridge School',
  '🍊 100% ingredientes frescos',
  '🎉 +1,000,000 órdenes servidas',
  '👨‍🍳 Equipo profesional',
  '🍎 Alimentación saludable',
  '⚡ Menos de 3 minutos de espera',
  '🏫 Universidad Panamericana',
  '😊 97% de satisfacción',
  '💳 Pago con huella digital',
  '🌮 Menús que los alumnos aman',
  '📱 App para padres y alumnos',
  '🏆 +10 años de experiencia',
  '🤖 Tótems de autoservicio',
  '✅ Cero carga para la escuela',
  '🏫 Northridge School',
  '🍊 100% ingredientes frescos',
  '🎉 +1,000,000 órdenes servidas',
  '👨‍🍳 Equipo profesional',
]

export function Marquee() {
  return (
    <div className="relative overflow-hidden bg-emerald-500 py-3.5 border-y-4 border-emerald-600">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-emerald-500 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-emerald-500 to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-1 mx-5 text-white font-bold text-sm">
            {item}
            <span className="text-white/40 ml-4">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
