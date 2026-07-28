'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { track } from '@vercel/analytics'
import { ArrowRight, ArrowLeft, Loader2, CheckCircle, Lock } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

type Option = { label: string; emoji: string; points: number }
type Question = {
  key: string
  area: string
  q: string
  emoji: string
  options: Option[]
  fix: string
}

const QUESTIONS: Question[] = [
  {
    key: 'fila',
    area: 'Velocidad de servicio',
    emoji: '⏱️',
    q: '¿Cuánto tiempo esperan tus alumnos en la fila de la cafetería?',
    options: [
      { label: 'Menos de 3 minutos', emoji: '⚡', points: 2 },
      { label: 'Entre 5 y 10 minutos', emoji: '🚶', points: 1 },
      { label: 'Más de 10 minutos', emoji: '🐢', points: 0 },
      { label: 'No lo hemos medido', emoji: '🤷', points: 0 },
    ],
    fix: 'Con tótems de autoservicio y pago biométrico, el estándar Nutri es menos de 3 minutos incluso en hora pico.',
  },
  {
    key: 'pago',
    area: 'Tecnología de pago',
    emoji: '💳',
    q: '¿Cómo pagan los alumnos en la cafetería?',
    options: [
      { label: 'Huella digital o app, sin efectivo', emoji: '👆', points: 2 },
      { label: 'Tarjeta o monedero escolar', emoji: '💳', points: 1 },
      { label: 'Efectivo', emoji: '💵', points: 0 },
    ],
    fix: 'El pago con huella digital elimina el efectivo del plantel: sin robos, sin pérdidas, cobro en 2 segundos.',
  },
  {
    key: 'quejas',
    area: 'Satisfacción de la comunidad',
    emoji: '😊',
    q: '¿Qué tan seguido recibe la dirección quejas sobre la cafetería?',
    options: [
      { label: 'Casi nunca', emoji: '🌟', points: 2 },
      { label: 'De vez en cuando', emoji: '😐', points: 1 },
      { label: 'Con frecuencia', emoji: '😤', points: 0 },
    ],
    fix: 'Nuestro modelo resuelve los problemas antes de que lleguen a dirección — 97% de satisfacción en +10 escuelas.',
  },
  {
    key: 'menu',
    area: 'Calidad nutricional',
    emoji: '🥗',
    q: '¿Quién diseña el menú de tu cafetería?',
    options: [
      { label: 'Nutriólogos, alineado a lineamientos SEP', emoji: '👩‍⚕️', points: 2 },
      { label: 'El cocinero o encargado', emoji: '👨‍🍳', points: 1 },
      { label: 'El proveedor decide qué vender', emoji: '📦', points: 0 },
    ],
    fix: 'Cada menú Nutri pasa doble filtro: nutriólogos + lineamientos SEP, y platillos que los alumnos sí eligen.',
  },
  {
    key: 'padres',
    area: 'Transparencia con padres',
    emoji: '📱',
    q: '¿Los padres pueden ver qué comieron sus hijos y controlar su gasto?',
    options: [
      { label: 'Sí, desde una app en tiempo real', emoji: '📲', points: 2 },
      { label: 'Solo pueden consultar el menú', emoji: '📋', points: 1 },
      { label: 'No tienen visibilidad', emoji: '🙈', points: 0 },
    ],
    fix: 'La app Nutri da a los papás historial de consumo, límites de gasto, recargas y alertas de alérgenos.',
  },
  {
    key: 'higiene',
    area: 'Seguridad alimentaria',
    emoji: '🧼',
    q: '¿Tu cafetería tiene protocolos de higiene documentados y auditables (NOM-251)?',
    options: [
      { label: 'Sí, con bitácoras y auditorías', emoji: '📋', points: 2 },
      { label: 'Creo que sí, pero no me consta', emoji: '🤔', points: 1 },
      { label: 'No lo sé / no existen', emoji: '⚠️', points: 0 },
    ],
    fix: 'Operamos alineados a NOM-251 con bitácoras, trazabilidad y auditorías que la escuela puede revisar cuando quiera.',
  },
  {
    key: 'carga',
    area: 'Carga operativa',
    emoji: '🏫',
    q: '¿Cuánto tiempo dedica la dirección a temas de la cafetería?',
    options: [
      { label: 'Prácticamente nada', emoji: '😌', points: 2 },
      { label: 'Algunas horas al mes', emoji: '⏳', points: 1 },
      { label: 'Demasiado — es un dolor de cabeza', emoji: '🤯', points: 0 },
    ],
    fix: 'Con Nutri la dirección se olvida de la operación: personal, proveedores, calidad y quejas son nuestro problema, no el tuyo.',
  },
]

const ANALYZING_STEPS = [
  'Analizando tiempos de servicio…',
  'Comparando con +10 escuelas premium…',
  'Evaluando estándares de seguridad alimentaria…',
  'Generando tu diagnóstico personalizado…',
]

function scoreLabel(pct: number) {
  if (pct >= 80) return { title: '¡Tu cafetería va muy bien! 🎉', color: 'text-emerald-600', ring: '#1F5D3B', desc: 'Estás por encima del promedio. Aun así, detectamos áreas donde podrías llegar a nivel premium.' }
  if (pct >= 50) return { title: 'Tu cafetería está en zona amarilla ⚠️', color: 'text-amber-500', ring: '#F39C12', desc: 'Hay varias áreas importantes por mejorar. La buena noticia: todas tienen solución probada.' }
  return { title: 'Tu cafetería necesita atención urgente 🚨', color: 'text-rose-500', ring: '#f43f5e', desc: 'Los puntos débiles detectados afectan la experiencia de tus alumnos y la reputación de tu escuela — hoy.' }
}

export function Diagnostic() {
  const [stage, setStage] = useState<'intro' | 'quiz' | 'analyzing' | 'lead' | 'result'>('intro')
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, Option>>({})
  const [analyzeStep, setAnalyzeStep] = useState(0)
  const [displayPct, setDisplayPct] = useState(0)
  const [lead, setLead] = useState({ nombre: '', escuela: '', email: '' })
  const [sending, setSending] = useState(false)

  const maxPoints = QUESTIONS.length * 2
  const points = useMemo(
    () => Object.values(answers).reduce((acc, o) => acc + o.points, 0),
    [answers],
  )
  const pct = Math.round((points / maxPoints) * 100)
  const result = scoreLabel(pct)
  const weakAreas = QUESTIONS.filter(q => (answers[q.key]?.points ?? 0) < 2)

  useEffect(() => {
    if (stage !== 'analyzing') return
    setAnalyzeStep(0)
    const int = setInterval(() => setAnalyzeStep(s => s + 1), 900)
    const done = setTimeout(() => setStage('lead'), 900 * ANALYZING_STEPS.length + 400)
    return () => { clearInterval(int); clearTimeout(done) }
  }, [stage])

  useEffect(() => {
    if (stage !== 'result') return
    setDisplayPct(0)
    let raf: number
    const start = performance.now()
    const dur = 1400
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplayPct(Math.round(eased * pct))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [stage, pct])

  const answer = (q: Question, o: Option) => {
    setAnswers(prev => ({ ...prev, [q.key]: o }))
    if (step < QUESTIONS.length - 1) setStep(step + 1)
    else setStage('analyzing')
  }

  const restart = () => {
    setStage('intro'); setStep(0); setAnswers({})
    setLead({ nombre: '', escuela: '', email: '' })
  }

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      const detail = QUESTIONS.map(q => `${q.area}: ${answers[q.key]?.label ?? '—'} (${answers[q.key]?.points ?? 0}/2)`).join('\n')
      // Directo al CRM de Nutri: crea escuela+contacto+acción y notifica a Ricardo.
      await fetch('https://crm.nutricafeteria.com.mx/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nombre: lead.nombre,
          escuela: lead.escuela,
          email: lead.email,
          puntaje: `${pct}/100`,
          detalle: detail,
          origen: 'Diagnóstico interactivo',
        }),
      })
    } catch {
      // No bloqueamos el resultado por un error de red — el lead ya invirtió su tiempo
    }
    setSending(false)
    track('diagnostico_completado', { puntaje: pct, escuela: lead.escuela })
    setStage('result')
  }

  const waText = encodeURIComponent(
    `¡Hola! Hice el diagnóstico de mi cafetería escolar en su página y obtuve ${pct}/100. Me gustaría platicar sobre cómo mejorarlo.`,
  )

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8">
      {stage === 'intro' && (
        <motion.div
          key="intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6 border border-emerald-200">
            📊 Diagnóstico gratuito
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight">
            ¿Qué tan buena es{' '}
            <span className="gradient-text-primary">la cafetería de tu escuela?</span>
          </h1>
          <p className="mt-5 text-stone-500 max-w-xl mx-auto text-lg">
            Responde 7 preguntas rápidas y recibe un diagnóstico instantáneo comparado
            contra el estándar de las mejores escuelas privadas de México. 🎯
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg mx-auto">
            {[
              { emoji: '⏱️', t: 'Menos de 2 minutos' },
              { emoji: '📋', t: '7 preguntas simples' },
              { emoji: '🎯', t: 'Resultado al instante' },
            ].map(b => (
              <div key={b.t} className="p-4 rounded-2xl bg-white border-2 border-stone-100 shadow-sm">
                <div className="text-2xl mb-1">{b.emoji}</div>
                <div className="text-xs font-bold text-stone-600">{b.t}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setStage('quiz')}
            className="group mt-10 inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-lg transition-all duration-200 shadow-xl shadow-emerald-200 hover:shadow-emerald-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Comenzar mi diagnóstico
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-stone-400 text-sm">
            Usado por directores y administradores de escuelas privadas 🏫
          </p>
        </motion.div>
      )}

      {stage === 'quiz' && (
        <motion.div
          key={`q-${step}`}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <button
              onClick={() => (step === 0 ? setStage('intro') : setStep(step - 1))}
              className="p-2 rounded-xl text-stone-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
              aria-label="Regresar"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1 h-3 rounded-full bg-stone-100 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                initial={false}
                animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <span className="text-sm font-bold text-stone-400">
              {step + 1}/{QUESTIONS.length}
            </span>
          </div>

          <div className="text-center mb-8">
            <div className="text-5xl mb-4">{QUESTIONS[step].emoji}</div>
            <h2 className="text-2xl md:text-3xl font-black text-stone-900">
              {QUESTIONS[step].q}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {QUESTIONS[step].options.map(o => (
              <button
                key={o.label}
                onClick={() => answer(QUESTIONS[step], o)}
                className="group flex items-center gap-4 p-5 rounded-2xl border-2 border-stone-200 bg-white hover:border-emerald-400 hover:bg-emerald-50 text-left transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                <span className="text-3xl">{o.emoji}</span>
                <span className="font-bold text-stone-700 group-hover:text-emerald-800 text-sm leading-snug">
                  {o.label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {stage === 'analyzing' && (
        <motion.div
          key="analyzing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <Loader2 className="w-14 h-14 text-emerald-500 animate-spin mx-auto mb-8" />
          <div className="space-y-3 max-w-sm mx-auto">
            {ANALYZING_STEPS.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: i <= analyzeStep ? 1 : 0.15, y: 0 }}
                className="flex items-center gap-3 text-left"
              >
                {i < analyzeStep ? (
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                ) : (
                  <span className="w-5 h-5 rounded-full border-2 border-stone-200 flex-shrink-0" />
                )}
                <span className={`text-sm font-semibold ${i <= analyzeStep ? 'text-stone-700' : 'text-stone-300'}`}>
                  {s}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {stage === 'lead' && (
        <motion.div
          key="lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100 mb-5">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-900">
              ¡Tu diagnóstico está listo! 🎉
            </h2>
            <p className="mt-3 text-stone-500">
              Dinos a dónde enviarte el <strong className="text-stone-700">plan de acción personalizado</strong>{' '}
              y ve tus resultados al instante.
            </p>
          </div>

          <form onSubmit={submitLead} className="space-y-3">
            <input
              required value={lead.nombre}
              onChange={e => setLead({ ...lead, nombre: e.target.value })}
              placeholder="Tu nombre"
              className="w-full px-5 py-4 rounded-2xl border-2 border-stone-200 bg-white text-stone-800 font-medium placeholder:text-stone-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            />
            <input
              required value={lead.escuela}
              onChange={e => setLead({ ...lead, escuela: e.target.value })}
              placeholder="Nombre de tu escuela"
              className="w-full px-5 py-4 rounded-2xl border-2 border-stone-200 bg-white text-stone-800 font-medium placeholder:text-stone-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            />
            <input
              required type="email" value={lead.email}
              onChange={e => setLead({ ...lead, email: e.target.value })}
              placeholder="Tu correo"
              className="w-full px-5 py-4 rounded-2xl border-2 border-stone-200 bg-white text-stone-800 font-medium placeholder:text-stone-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            />
            <button
              type="submit" disabled={sending}
              className="group w-full inline-flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-lg transition-all duration-200 shadow-xl shadow-emerald-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
            >
              {sending ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Preparando resultados…</>
              ) : (
                <>Ver mis resultados <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>
          <p className="mt-4 text-center text-stone-400 text-xs flex items-center justify-center gap-1.5">
            <Lock className="w-3 h-3" /> Tus datos solo se usan para enviarte tu diagnóstico. Cero spam.
          </p>
        </motion.div>
      )}

      {stage === 'result' && (
        <motion.div
          key="result"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-6">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#D8CDB6" strokeWidth="10" />
                <circle
                  cx="50" cy="50" r="42" fill="none"
                  stroke={result.ring} strokeWidth="10" strokeLinecap="round"
                  strokeDasharray={`${(displayPct / 100) * 264} 264`}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-black text-stone-900">{displayPct}</span>
                <span className="text-stone-400 text-sm font-bold">/ 100</span>
              </div>
            </div>
            <h2 className={`text-3xl md:text-4xl font-black ${result.color}`}>{result.title}</h2>
            <p className="mt-3 text-stone-500 max-w-xl mx-auto">{result.desc}</p>
            <p className="mt-2 text-stone-400 text-sm">
              📬 {lead.nombre ? `${lead.nombre.split(' ')[0]}, tu` : 'Tu'} plan de acción completo va en camino a tu correo.
            </p>
          </div>

          {weakAreas.length > 0 && (
            <div className="mt-10 space-y-3">
              <h3 className="font-black text-stone-900 text-lg text-center mb-5">
                🔍 Áreas detectadas para mejorar
              </h3>
              {weakAreas.map((q, i) => (
                <motion.div
                  key={q.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className="p-5 rounded-2xl bg-white border-2 border-stone-100 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{q.emoji}</span>
                    <div>
                      <div className="font-black text-stone-900 text-sm">{q.area}</div>
                      <div className="text-stone-500 text-xs mt-0.5">
                        Tu respuesta: {answers[q.key]?.label}
                      </div>
                      <div className="mt-2 text-sm text-emerald-800 bg-emerald-50 rounded-xl px-3 py-2 leading-relaxed">
                        <strong>✅ Cómo lo resuelve Nutri:</strong> {q.fix}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="mt-10 p-8 rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-xl shadow-emerald-200 text-center">
            <p className="text-white font-black text-2xl">
              ¿Quieres estos resultados en verde? 🚀
            </p>
            <p className="text-emerald-100 text-sm mt-2 mb-6 max-w-md mx-auto">
              Agenda una reunión gratis y te mostramos cómo transformamos cafeterías
              exactamente como la tuya — sin inversión para tu escuela.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:scale-[1.03]"
              >
                Agendar reunión gratis →
              </a>
              <a
                href={`https://wa.me/5215567034269?text=${waText}`}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-emerald-700/60 text-white font-bold hover:bg-emerald-700 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" /> Platicar por WhatsApp
              </a>
            </div>
            <button
              onClick={restart}
              className="mt-5 text-emerald-100 text-sm font-bold hover:text-white transition-colors underline decoration-emerald-300/50"
            >
              Volver a hacer el diagnóstico
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
