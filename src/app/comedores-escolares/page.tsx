import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { comedorFaqs, tiempos, menuSemana } from '@/data/comedor'
import { waHref } from '@/lib/whatsapp'
import { Respaldos } from '@/components/sections/Respaldos'

const URL = 'https://cafeteriasescolares.com.mx/comedores-escolares'

export const metadata: Metadata = {
  title: 'Comedor escolar · Servicio de comedor para colegios y escuelas en CDMX | Nutri Cafeterías',
  description:
    'Comedor escolar con menú de 3 o 4 tiempos, recién hecho todos los días, porción por edad y conforme a los lineamientos de la SEP. Turnos sin filas, pago en app o en efectivo y foto del plato del día para los papás.',
  keywords: [
    'comedor escolar',
    'comedores escolares',
    'servicio de comedor escolar',
    'servicio de comedor para colegios',
    'empresa de comedor escolar',
    'empresa de comedores escolares',
    'proveedor de comedor escolar',
    'comedor escolar CDMX',
    'menú de comedor escolar',
    'servicio de alimentos para escuelas',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Comedor escolar: comida completa, recién hecha, para cada niño, todos los días',
    description:
      'Menú de 3 o 4 tiempos por turnos, porción por edad, conforme a la SEP. Pago en app o en efectivo. Agenda una degustación en tu escuela.',
    url: URL,
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Servicio de comedor escolar',
  serviceType: 'Comedor escolar',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Nutri Cafeterías',
    url: 'https://cafeteriasescolares.com.mx',
    telephone: '+52-221-925-1954',
  },
  areaServed: [
    { '@type': 'City', name: 'Ciudad de México' },
    { '@type': 'AdministrativeArea', name: 'Área Metropolitana del Valle de México' },
  ],
  description:
    'Comedor escolar con menú del día de 3 o 4 tiempos, recién hecho y servido por turnos, con porción por edad y conforme a los Lineamientos generales de alimentos y bebidas en las escuelas (SEP). Pago en app o en efectivo en caja, por día, semana o mes.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: comedorFaqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const WA_MSG = 'Hola, me interesa el servicio de comedor escolar para mi escuela'

const sellos = [
  { t: 'Plato completo', d: 'a ningún niño le falta nada' },
  { t: 'Porción por edad', d: 'la misma para todos los de su grupo' },
  { t: 'Mismo sabor', d: 'del primer turno al último' },
]

const recienHecho = [
  { emoji: '🍳', t: 'En la cocina de tu escuela', d: 'Cocinamos ahí mismo, por tandas, para que cada turno reciba comida recién hecha.' },
  { emoji: '🚚', t: '¿Tu escuela no tiene cocina?', d: 'Te proponemos cómo resolverlo: equipar un espacio en la escuela o traer la comida caliente, preparada el mismo día, en contenedores térmicos con la temperatura controlada. Llega a servirse, no a calentarse.' },
  { emoji: '🌡️', t: 'Temperaturas con bitácora', d: 'Lo caliente, a 60 °C o más; ensalada, fruta y agua, a 4 °C o menos (NOM-251-SSA1-2009).' },
  { emoji: '🧂', t: 'Recetas estandarizadas', d: 'Sal medida en cada receta: así el sabor no depende del turno ni de quién cocine.' },
]

const turnos = [
  'Cada grupo entra en su horario. Por ejemplo: 4 turnos de 45 minutos (13:00, 13:45, 14:30 y 15:15), primero los más chicos.',
  'El plato se sirve al momento, con utensilios medidos: la misma porción para todos los niños del grupo.',
  'Revisión al cerrar cada turno: confirmamos que todos recibieron entrada, plato fuerte, verdura, fruta y agua.',
  'Un equipo fijo que conoce a los niños, les sirve con paciencia y tiene a la vista sus alergias.',
  'Funciona con 100 alumnos o con 900, en uno o varios comedores.',
]

const comunicacion = [
  { emoji: '📸', t: 'Foto del plato del día', d: 'Por WhatsApp, todos los días.' },
  { emoji: '🗓️', t: 'Menú del mes por adelantado', d: 'Por WhatsApp y en la app.' },
  { emoji: '✅', t: 'Aviso de «ya comió»', d: 'Cuando tu hijo entra al comedor y recibe su comida.' },
  { emoji: '📝', t: 'Encuesta mensual a los papás', d: 'Sabor, porciones y servicio. Compartimos los resultados con la escuela y ajustamos el menú con ellos.' },
  { emoji: '📊', t: 'Reporte mensual a la escuela', d: 'Platos servidos, resultados de la encuesta y menú. Si hay becas o aportación, también van ahí.' },
  { emoji: '🌮', t: 'Un día temático al mes', d: 'Cocina mexicana, sabores del mundo o «los niños eligen el plato fuerte».' },
]

const cumplimiento = [
  'Porción por edad (primaria: 450 a 540 kcal)',
  'Nada frito, capeado ni empanizado',
  'Sin azúcar añadida ni consomé en polvo, con sal al mínimo',
  'Agua natural como bebida principal',
  'De postre, solo fruta',
  'Máximo dos cereales por menú',
]

export default function ComedoresEscolaresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />
      <main className="pt-28 pb-24 bg-[#F7F3EA] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* 3.2 Hero */}
          <section data-seccion="comedor_hero" className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6 border border-emerald-200">
              🍽️ Comedor escolar
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight">
              Comedor escolar:{' '}
              <span className="gradient-text-primary">comida completa, recién hecha,</span>{' '}
              para cada niño, todos los días
            </h1>
            <p className="mt-5 text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Sopa o ensalada, plato fuerte con proteína, verdura, fruta y agua. Cocinamos el mismo
              día, servimos por turnos y cuidamos que el último grupo coma igual de rico que el
              primero. Conforme a los lineamientos de la SEP.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {sellos.map(s => (
                <div key={s.t} className="p-4 rounded-2xl bg-white border-2 border-emerald-100 shadow-sm">
                  <p className="font-black text-emerald-700">{s.t}</p>
                  <p className="text-sm text-stone-500 mt-0.5">{s.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contacto"
                data-cta="agenda_degustacion"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black transition-all duration-200 shadow-xl shadow-emerald-200 hover:scale-[1.03]"
              >
                Agenda una degustación
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={waHref(WA_MSG, 'comedores')}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp_hero"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-emerald-200 bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4" /> Escríbenos por WhatsApp
              </a>
            </div>
          </section>

          {/* 3.3 Qué incluye */}
          <section data-seccion="comedor_que_incluye" className="mt-24">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-4">
              Un menú, igual para todos,{' '}
              <span className="gradient-text-primary">en 3 o 4 tiempos</span>
            </h2>
            <p className="text-center text-stone-500 max-w-2xl mx-auto mb-10">
              3 o 4 tiempos, según lo que decida tu escuela. Agua natural todos los días; agua de
              fruta sin azúcar añadida 2 veces por semana; tortillas de maíz o pasta según el día.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {tiempos.map(t => (
                <div key={t.n} className="card-lift p-6 rounded-2xl border-2 border-stone-100 bg-white shadow-sm">
                  <span className="inline-flex w-9 h-9 rounded-xl bg-emerald-500 text-white font-black items-center justify-center mb-3">{t.n}</span>
                  <h3 className="font-black text-stone-900 mb-1">{t.titulo}</h3>
                  <p className="text-sm text-stone-700">{t.lleva}</p>
                  <p className="text-xs text-stone-500 mt-2 leading-relaxed">Ej.: {t.ej}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-stone-600 max-w-2xl mx-auto">
              Con alergias o dieta especial con constancia médica, preparamos su plato aparte. Para
              colegios con horario extendido podemos sumar desayuno o colación.
            </p>
          </section>

          {/* 3.4 Menú semanal */}
          <section data-seccion="comedor_menu_semanal" className="mt-24">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              Así come un niño{' '}
              <span className="gradient-text-primary">en una semana</span>
            </h2>
            <div className="overflow-x-auto rounded-3xl border-2 border-stone-100 bg-white shadow-sm">
              <table className="w-full min-w-[760px] text-sm text-left">
                <thead className="bg-emerald-50 text-emerald-800">
                  <tr>
                    {['', 'Entrada', 'Plato fuerte', 'Verdura', 'Postre', 'Agua'].map(h => (
                      <th key={h} scope="col" className="px-4 py-3 font-black">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {menuSemana.map(d => (
                    <tr key={d.dia} className="border-t border-stone-100 align-top">
                      <th scope="row" className="px-4 py-3 font-black text-stone-900">{d.dia}</th>
                      <td className="px-4 py-3 text-stone-600">{d.entrada}</td>
                      <td className="px-4 py-3 text-stone-800 font-semibold">{d.fuerte}</td>
                      <td className="px-4 py-3 text-stone-600">{d.verdura}</td>
                      <td className="px-4 py-3 text-stone-600">{d.postre}</td>
                      <td className="px-4 py-3 text-stone-600">{d.agua}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-stone-500 max-w-3xl mx-auto text-center">
              Porción de primaria de 450 a 540 kcal. Nada frito, capeado ni empanizado. Sin azúcar
              añadida y con sal al mínimo. Máximo dos cereales por menú. De postre, solo fruta.{' '}
              <strong className="text-stone-700">El menú cambia cada semana en un ciclo de 4 semanas</strong> y
              lo mandamos a los papás por adelantado.
            </p>
          </section>

          {/* 3.5 Porciones por edad */}
          <section data-seccion="comedor_porciones" className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              Mismo menú,{' '}
              <span className="gradient-text-primary">la porción que le toca a cada edad</span>
            </h2>
            <div className="rounded-3xl border-2 border-emerald-200 bg-white shadow-sm overflow-hidden">
              <div className="px-6 py-4 bg-emerald-50 font-black text-emerald-800">
                Plato del lunes: albóndigas de res en salsa de jitomate con espagueti
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left min-w-[480px]">
                  <thead>
                    <tr className="text-stone-500">
                      <th scope="col" className="px-6 py-3"></th>
                      <th scope="col" className="px-6 py-3 font-black">1.° a 3.° de primaria (6 a 8 años)</th>
                      <th scope="col" className="px-6 py-3 font-black">4.° a 6.° de primaria (9 a 12 años)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Plato fuerte', '2 albóndigas', '3 albóndigas'],
                      ['Cereal', '1 taza de espagueti', '1 taza de espagueti'],
                      ['Energía aprox.', '~460 kcal', '~500 kcal'],
                    ].map(r => (
                      <tr key={r[0]} className="border-t border-stone-100">
                        <th scope="row" className="px-6 py-3 font-bold text-stone-700">{r[0]}</th>
                        <td className="px-6 py-3 text-stone-600">{r[1]}</td>
                        <td className="px-6 py-3 text-stone-600">{r[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 text-sm text-stone-600 text-center">
              Plato de 4.° a 6.°: 500 kcal · 20 g de proteína · 5 g de fibra · 320 mg de sodio ·{' '}
              <strong>0 g de azúcar añadida</strong>. Cada platillo tiene su ficha técnica con porción,
              kilocalorías y alérgenos, y la escuela la recibe con el menú. En kínder, secundaria y
              prepa ajustamos la porción al rango de cada nivel que marcan los lineamientos.
            </p>
          </section>

          {/* 3.6 Recién hecho */}
          <section data-seccion="comedor_recien_hecho" className="mt-24">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              Se cocina el mismo día.{' '}
              <span className="gradient-text-primary">Nunca se congela.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {recienHecho.map(r => (
                <div key={r.t} className="card-lift p-6 rounded-2xl border-2 border-stone-100 bg-white shadow-sm">
                  <div className="text-4xl mb-3">{r.emoji}</div>
                  <h3 className="font-black text-stone-900 mb-2">{r.t}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{r.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3.7 Turnos */}
          <section data-seccion="comedor_turnos" className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              Por turnos, por grupo,{' '}
              <span className="gradient-text-primary">sin filas</span>
            </h2>
            <ul className="space-y-3">
              {turnos.map(t => (
                <li key={t} className="flex items-start gap-3 p-5 rounded-2xl bg-white border-2 border-stone-100 shadow-sm text-stone-700">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-black">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </section>

          {/* 3.8 Pagos: app y efectivo con el mismo peso */}
          <section data-seccion="comedor_pagos" className="mt-24 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-4">
              Paga como te acomode:{' '}
              <span className="gradient-text-primary">en la app o en efectivo</span>
            </h2>
            <p className="text-center text-stone-600 mb-10">
              <strong>Por día, por semana o por mes</strong>, como prefieras. Pregunta por los paquetes semanales y mensuales de tu escuela.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl border-2 border-emerald-200 bg-white shadow-sm">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="text-xl font-black text-stone-900 mb-3">En la app para familias</h3>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li>✓ Tarjeta de débito o crédito, transferencia, Apple Pay y Google Pay, o efectivo en tiendas de la red Paynet (7-Eleven, Walmart, farmacias)</li>
                  <li>✓ Un saldo por cada hijo, con su historial</li>
                  <li>✓ Límite diario y alergias registradas</li>
                </ul>
              </div>
              <div className="p-8 rounded-3xl border-2 border-emerald-200 bg-white shadow-sm">
                <div className="text-4xl mb-3">💵</div>
                <h3 className="text-xl font-black text-stone-900 mb-3">En efectivo, en la caja del comedor</h3>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li>✓ Pagas en la caja, sin comisión y sin necesidad de celular</li>
                  <li>✓ Te damos tu comprobante y queda registrado igual que en la app</li>
                  <li>✓ Por día, semana o mes, igual que en la app</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-stone-500 text-center">
              En recargas en línea puede aplicar una comisión; en caja y por transferencia, sin comisión.
            </p>
          </section>

          {/* 3.9 Cancelaciones */}
          <section data-seccion="comedor_cancelaciones" className="mt-24 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-6">
              ¿Tu hijo va a faltar?{' '}
              <span className="gradient-text-primary">No pierdes tu dinero.</span>
            </h2>
            <div className="p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-200">
              <p className="text-lg text-emerald-900">
                <strong>Avísanos con anticipación</strong> desde la app, por WhatsApp o en la
                caja, y esa comida <strong>se queda como saldo</strong> para otro día. Así de simple.
              </p>
              <p className="mt-3 text-sm text-stone-600">
                Cada escuela fija la hora límite del aviso. Si no nos avisas a tiempo, la comida ya se preparó para él y se cuenta como servida. Los
                paquetes de semana o mes siguen la misma regla. ¿Te cambias de escuela o das de baja
                el servicio? Te devolvemos el saldo que no hayas usado.
              </p>
            </div>
          </section>

          {/* 3.10 Comunicación */}
          <section data-seccion="comedor_comunicacion" className="mt-24">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              Los papás ven todo,{' '}
              <span className="gradient-text-primary">todos los días</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {comunicacion.map(c => (
                <div key={c.t} className="card-lift p-6 rounded-2xl border-2 border-stone-100 bg-white shadow-sm">
                  <div className="text-3xl mb-2">{c.emoji}</div>
                  <h3 className="font-black text-stone-900 mb-1">{c.t}</h3>
                  <p className="text-sm text-stone-600">{c.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3.11 Degustación */}
          <section id="degustacion" data-seccion="comedor_degustacion" className="mt-24 max-w-4xl mx-auto p-10 rounded-3xl bg-white border-2 border-emerald-200 shadow-sm text-center">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
              Pruébalo <span className="gradient-text-primary">antes de decidir</span>
            </h2>
            <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto">
              Hacemos la degustación en tu escuela para la dirección, los maestros, el comité y los
              papás. Prueban la comida de un día completo, ven la ficha técnica del plato y{' '}
              <strong>votan con una boleta, también los niños</strong>: qué les gustó más y qué
              calificación le dan. Ahí mismo mostramos el tótem y la app funcionando.
            </p>
            <Link
              href="/#contacto"
              data-cta="agenda_degustacion"
              className="mt-6 inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black transition-all duration-200 shadow-lg shadow-emerald-200 hover:scale-[1.03]"
            >
              Agenda una degustación <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* 3.12 Tecnología */}
          <section data-seccion="comedor_tecnologia" className="mt-24 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              Paga con Face ID.{' '}
              <span className="gradient-text-primary">Tú recibes el aviso.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { t: 'Tótem con reconocimiento facial', d: 'A la entrada del comedor: el niño se para frente a la cámara y entra, sin tarjetas ni boletos. Si no tiene comida comprada, su profesor lo revisa contigo.' },
                { t: 'Voluntario y con consentimiento', d: 'Como desbloquear su celular con la cara. Su foto nunca se guarda: tú decides si lo activas, con tu consentimiento, y lo borras cuando quieras desde la app.' },
                { t: '¿No quieres registrar su rostro?', d: 'Entra con la lista de su grupo. Nadie se queda sin comer por la tecnología.' },
                { t: 'App para familias', d: 'Compra por día, semana o mes, saldo por hijo, límite diario, alergias que la cocina ve antes de servir, y avisos. También puedes pagar en efectivo en caja.' },
              ].map(c => (
                <div key={c.t} className="p-6 rounded-2xl bg-white border-2 border-stone-100 shadow-sm">
                  <h3 className="font-black text-stone-900 mb-1">{c.t}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm">
              <Link href="/aviso-de-privacidad" className="text-emerald-600 font-bold hover:underline">Aviso de privacidad →</Link>
            </p>
          </section>

          {/* 3.13 Cumplimiento */}
          <section data-seccion="comedor_cumplimiento" className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              Conforme a la SEP,{' '}
              <span className="gradient-text-primary">con papeles en mano</span>
            </h2>
            <div className="p-8 rounded-3xl bg-white border-2 border-stone-100 shadow-sm space-y-5 text-stone-700">
              <div>
                <h3 className="font-black text-stone-900">Lineamientos generales de alimentos y bebidas en las escuelas</h3>
                <p className="text-xs text-stone-500 mb-3">DOF 30-sep-2024, vigentes desde el 29-mar-2025</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {cumplimiento.map(c => <li key={c}>✓ {c}</li>)}
                </ul>
              </div>
              <p className="text-sm"><strong>NOM-043-SSA2-2012:</strong> los tres grupos del Plato del Bien Comer en cada comida.</p>
              <p className="text-sm"><strong>NOM-251-SSA1-2009:</strong> higiene, temperaturas y bitácoras diarias.</p>
              <p className="text-sm">
                <strong>Escuelas de tiempo completo:</strong> respondemos uno por uno los documentos de
                la AEFCM sobre alimentación (higiene, menú, gas y protección civil) y entregamos el
                expediente del personal antes de iniciar.
              </p>
              <a
                href={waHref('Hola, me gustaría recibir su anexo de cumplimiento para comedor escolar', 'comedores-anexo')}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="solicita_anexo_cumplimiento"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-emerald-200 bg-emerald-50 text-emerald-700 font-black hover:bg-emerald-100 transition-colors"
              >
                Solicita nuestro anexo de cumplimiento →
              </a>
            </div>
          </section>

          {/* 3.13b Respaldos */}
          <section className="mt-16 max-w-6xl mx-auto">
            <Respaldos />
          </section>

          {/* 3.14 FAQ */}
          <section data-seccion="comedor_faq" className="mt-24 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              Preguntas <span className="gradient-text-primary">frecuentes</span>
            </h2>
            <div className="space-y-3">
              {comedorFaqs.map(f => (
                <details key={f.q} className="group rounded-2xl border-2 border-stone-200 bg-white open:border-emerald-300 open:bg-emerald-50">
                  <summary className="cursor-pointer list-none px-6 py-5 font-bold text-stone-800 flex items-center justify-between gap-4">
                    {f.q}
                    <span className="flex-shrink-0 text-emerald-600 font-black group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="px-6 pb-5 text-sm text-stone-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* 3.15 CTA final */}
          <section data-seccion="comedor_cta_final" className="mt-24 p-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
            <p className="text-2xl md:text-3xl font-black text-white">
              Que la hora de la comida sea la mejor parte del día
            </p>
            <p className="text-emerald-100 mt-2 mb-6">
              Agenda una degustación en tu escuela: prueban la comida, votan los niños y ven cómo funciona.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/#contacto"
                data-cta="agenda_degustacion"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:scale-[1.03]"
              >
                Agendar degustación →
              </Link>
              <a
                href={waHref(WA_MSG, 'comedores')}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp_cta_final"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-emerald-700/60 text-white font-bold hover:bg-emerald-700 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
              </a>
            </div>
            <p className="mt-5 text-sm text-emerald-50">
              <Link href="/cafeterias-escolares" className="font-bold underline underline-offset-2">
                ¿Buscas cafetería con platillos a la carta? →
              </Link>
            </p>
          </section>

          {/* 3.16 Bloque SEO */}
          <section className="mt-20 max-w-3xl mx-auto space-y-5 text-stone-600 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-black text-stone-900">
              ¿Qué hace una empresa de comedor escolar?
            </h2>
            <p>
              Una empresa de comedor escolar se encarga del servicio completo de alimentos para la
              escuela. Diseña el menú con criterios nutrimentales de la SEP y lo organiza en un ciclo
              de 4 semanas; compra y recibe los insumos con trazabilidad de proveedores, y cocina el
              mismo día, en la cocina de la escuela o, si no tiene, preparada ese mismo día y llevada caliente, siguiendo la NOM-251.
            </p>
            <p>
              Después sirve por turnos, con la porción que corresponde a cada edad, cobra a las
              familias en la app o en efectivo en caja y se comunica con los papás: menú del mes, foto
              del plato del día, aviso de «ya comió» y encuesta mensual. Al cierre de cada mes entrega
              a la escuela un reporte con platos servidos, resultados de la encuesta y menú.
            </p>
            <p>
              Damos servicio de comedor escolar en la Ciudad de México —Miguel Hidalgo, Cuajimalpa,
              Álvaro Obregón, Benito Juárez, Coyoacán, Tlalpan, Iztapalapa, La Magdalena Contreras y
              más alcaldías— y en el área metropolitana del Valle de México, como Naucalpan,
              Huixquilucan, Atizapán y Valle de Chalco. Atendemos colegios, escuelas de tiempo
              completo y universidades.
            </p>
            <p>
              Si lo que buscas es un punto de venta con platillos a la carta, snacks y bebidas, conoce
              nuestra{' '}
              <Link href="/cafeterias-escolares" className="text-emerald-600 font-bold hover:underline">cafetería escolar</Link>.
              Para graduaciones o juntas de consejo, revisa{' '}
              <Link href="/catering-escolar" className="text-emerald-600 font-bold hover:underline">eventos escolares</Link>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
