const base = [
  '🍎 Menús conforme a los Lineamientos SEP',
  '🤖 Tótems de autoservicio',
  '🏫 Universidad Panamericana, Campus Ciudad UP',
  '🙂 Pago con reconocimiento facial (opcional)',
  '📱 App para familias + efectivo en caja',
  '🥇 Operador #1 en México',
  '🎉 +1,000,000 comidas servidas',
  '🏆 Desde 2018',
  '🧾 ERP y punto de venta propios',
  '🛡️ Seguimos la NOM-251',
  '🍽️ Comedor escolar de 3 o 4 tiempos',
  '🍊 Se cocina el mismo día',
]
const items = [...base, ...base]

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
