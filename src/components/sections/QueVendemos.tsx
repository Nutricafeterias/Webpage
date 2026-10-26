import Link from 'next/link'

const columnas = [
  {
    emoji: '🌮',
    t: 'A la carta',
    d: 'Platillos del día preparados en la escuela (chilaquiles, tacos, ensaladas, baguettes, bowls), al horno, a la plancha o al vapor.',
  },
  {
    emoji: '🥨',
    t: 'Snacks empaquetados',
    d: 'Solo productos que cumplen los lineamientos de la SEP. Revisamos cada etiqueta antes de que entre a la vitrina.',
  },
  {
    emoji: '💧',
    t: 'Bebidas',
    d: 'Agua natural siempre disponible, aguas del día sin azúcar añadida y bebidas permitidas por la SEP.',
  },
]

/** Bloque «Qué vendemos» de la cafetería, con enlace cruzado al comedor. */
export function QueVendemos() {
  return (
    <section data-seccion="cafeteria_que_vendemos" className="py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
          Qué <span className="gradient-text-primary">vendemos</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {columnas.map(c => (
            <div key={c.t} className="card-lift p-7 rounded-2xl border-2 border-stone-100 bg-white shadow-sm">
              <div className="text-4xl mb-3">{c.emoji}</div>
              <h3 className="font-black text-stone-900 mb-2">{c.t}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-stone-600">
          Cada producto se revisa contra los lineamientos de la SEP (DOF 30-sep-2024, vigentes desde el
          29-mar-2025).{' '}
          <Link href="/lineamientos-sep" className="text-emerald-600 font-bold hover:underline">
            Ver cómo cumplimos →
          </Link>
        </p>
        <div className="mt-8 p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-center">
          <p className="text-stone-700">
            <strong>Cafetería y comedor son servicios distintos.</strong> En la cafetería el alumno elige
            y paga en cada compra; en el comedor se sirve un menú del día de 3 o 4 tiempos, por turnos.
            Una escuela puede tener los dos.
          </p>
          <Link
            href="/comedores-escolares"
            data-cta="cruce_a_comedor"
            className="mt-3 inline-flex items-center gap-1 text-emerald-700 font-black hover:underline"
          >
            ¿Buscas un comedor con menú del día? →
          </Link>
        </div>
      </div>
    </section>
  )
}
