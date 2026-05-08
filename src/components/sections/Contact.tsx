'use client'

import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import { ArrowRight, Clock, Phone, CheckCircle, Mail, Loader2 } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

export function Contact() {
  const [state, handleSubmit] = useForm('xrejlppw')

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-emerald-50/40 to-emerald-100/60 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full opacity-30 blur-3xl -translate-y-32 translate-x-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200 rounded-full opacity-30 blur-3xl translate-y-24 -translate-x-24 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-200 text-emerald-800 font-bold text-sm mb-6 border border-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Abriendo espacios para nuevas escuelas este ciclo
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
            ¿Listo para transformar
            <br />
            <span className="gradient-text-primary">la cafetería de tu escuela?</span> 🚀
          </h2>
          <p className="mt-4 text-stone-600 max-w-xl mx-auto text-lg">
            Agenda una reunión gratuita de 20 minutos. Sin compromiso.
            Te mostramos exactamente cómo funcionaría en tu institución.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="p-6 rounded-2xl bg-white border-2 border-emerald-200 shadow-sm">
              <h3 className="text-lg font-black text-stone-900 mb-4">¿Qué pasa después? 👇</h3>
              <div className="space-y-4">
                {[
                  { icon: Clock,       text: 'Te contactamos en menos de 24 horas',        color: 'bg-amber-100 text-amber-600' },
                  { icon: Phone,       text: 'Agendamos una llamada de 20 minutos',         color: 'bg-blue-100 text-blue-600' },
                  { icon: CheckCircle, text: 'Te mostramos cómo funcionaría en tu escuela', color: 'bg-emerald-100 text-emerald-600' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`p-2 rounded-xl flex-shrink-0 ${item.color}`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <p className="text-stone-700 text-sm font-medium leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border-2 border-stone-200 italic text-stone-600 text-sm leading-relaxed shadow-sm">
              &ldquo;No se trata solo de cambiar proveedor. Se trata de tener una cafetería que
              <strong className="text-stone-800"> realmente funcione</strong>.&rdquo;
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/5215567034269"
                className="flex items-center gap-3 p-4 rounded-2xl border-2 border-emerald-200 bg-white hover:bg-emerald-50 transition-colors group shadow-sm"
              >
                <div className="p-2 rounded-xl bg-emerald-100">
                  <WhatsAppIcon className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <div className="text-stone-800 text-sm font-bold">Hablar por WhatsApp</div>
                  <div className="text-stone-400 text-xs">Respuesta inmediata</div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
              </a>
              <a
                href="mailto:contacto@nutricafeterias.com"
                className="flex items-center gap-3 p-4 rounded-2xl border-2 border-stone-200 bg-white hover:bg-blue-50 hover:border-blue-200 transition-colors group shadow-sm"
              >
                <div className="p-2 rounded-xl bg-blue-100">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="text-stone-800 text-sm font-bold">Enviar correo</div>
                  <div className="text-stone-400 text-xs">contacto@nutricafeterias.com</div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-3xl bg-white border-2 border-emerald-200 shadow-lg shadow-emerald-100">

              {/* SUCCESS */}
              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-black text-stone-900 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-stone-500 text-lg">
                    Te contactamos en menos de 24 horas.
                    Estamos listos para transformar tu cafetería. 🚀
                  </p>
                </motion.div>

              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-black text-stone-900 text-lg mb-5">Agenda tu reunión gratis 🗓️</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nombre */}
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-bold text-stone-700 mb-1.5">Tu nombre</label>
                      <input
                        id="nombre" name="nombre" type="text" placeholder="Juan García"
                        required disabled={state.submitting}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border-2 border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-emerald-400 focus:bg-white transition-all disabled:opacity-50"
                      />
                      <ValidationError field="nombre" errors={state.errors} className="text-xs text-red-500 mt-1" />
                    </div>

                    {/* Escuela */}
                    <div>
                      <label htmlFor="escuela" className="block text-sm font-bold text-stone-700 mb-1.5">Escuela / Institución</label>
                      <input
                        id="escuela" name="escuela" type="text" placeholder="Colegio San Patricio"
                        required disabled={state.submitting}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border-2 border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-emerald-400 focus:bg-white transition-all disabled:opacity-50"
                      />
                      <ValidationError field="escuela" errors={state.errors} className="text-xs text-red-500 mt-1" />
                    </div>

                    {/* Cargo */}
                    <div>
                      <label htmlFor="cargo" className="block text-sm font-bold text-stone-700 mb-1.5">Tu cargo</label>
                      <input
                        id="cargo" name="cargo" type="text" placeholder="Director, Coordinador…"
                        required disabled={state.submitting}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border-2 border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-emerald-400 focus:bg-white transition-all disabled:opacity-50"
                      />
                      <ValidationError field="cargo" errors={state.errors} className="text-xs text-red-500 mt-1" />
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-bold text-stone-700 mb-1.5">Teléfono / WhatsApp</label>
                      <input
                        id="telefono" name="telefono" type="tel" placeholder="+52 55 0000 0000"
                        required disabled={state.submitting}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border-2 border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-emerald-400 focus:bg-white transition-all disabled:opacity-50"
                      />
                      <ValidationError field="telefono" errors={state.errors} className="text-xs text-red-500 mt-1" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-stone-700 mb-1.5">Correo electrónico</label>
                    <input
                      id="email" name="email" type="email" placeholder="director@escuela.edu.mx"
                      required disabled={state.submitting}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border-2 border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:border-emerald-400 focus:bg-white transition-all disabled:opacity-50"
                    />
                    <ValidationError field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
                  </div>

                  {/* Form-level errors */}
                  <ValidationError errors={state.errors} className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3" />

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-400 text-white font-black text-base transition-all duration-200 shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:scale-[1.02] active:scale-[0.98] disabled:scale-100 disabled:cursor-not-allowed group"
                  >
                    {state.submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Enviando…
                      </>
                    ) : (
                      <>
                        ¡Agendar reunión gratis ahora! 🎉
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-stone-400 text-xs">
                    Sin compromiso · Sin costo · Respuesta en menos de 24h
                  </p>
                </form>
              )}

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
