'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const menus = [
  {
    label: 'Servicios',
    items: [
      { href: '/cafeterias-escolares', label: 'Cafeterías escolares', desc: 'Operación integral premium' },
      { href: '/comedores-escolares',  label: 'Comedores escolares', desc: 'Desayuno y comida completos' },
      { href: '/catering-escolar',     label: 'Catering para eventos', desc: 'Graduaciones, kermés y más' },
    ],
  },
  {
    label: 'Recursos',
    items: [
      { href: '/diagnostico', label: 'Evalúa tu escuela', desc: 'Diagnóstico gratis en 2 minutos' },
      { href: '/lineamientos-sep', label: 'Lineamientos SEP', desc: 'Cumplimiento garantizado' },
      { href: '/blog',        label: 'Blog', desc: 'Guías para directores' },
      { href: '/#faq',        label: 'Preguntas frecuentes', desc: 'Respuestas claras' },
    ],
  },
]

const links = [
  { href: '/programas', label: 'Programas' },
  { href: '/menus',     label: 'Menús' },
  { href: '/nosotros',  label: 'Nosotros' },
]

function Dropdown({
  menu,
  scrolled,
}: {
  menu: (typeof menus)[number]
  scrolled: boolean
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-700 ${
          scrolled ? 'text-stone-600' : 'text-stone-700'
        } ${open ? 'bg-emerald-50 text-emerald-700' : ''}`}
        aria-expanded={open}
      >
        {menu.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full mt-2 w-72 rounded-2xl bg-white border-2 border-emerald-100 shadow-xl overflow-hidden p-2"
          >
            {menu.items.map(s => (
              <a
                key={s.href}
                href={s.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl hover:bg-emerald-50 transition-colors group"
              >
                <span className="block text-sm font-bold text-stone-800 group-hover:text-emerald-700">
                  {s.label}
                </span>
                <span className="block text-xs text-stone-400 mt-0.5">{s.desc}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b-2 border-emerald-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo-trimmed.png"
            alt="Nutri Cafetería"
            width={180}
            height={79}
            className="h-10 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          <Dropdown menu={menus[0]} scrolled={scrolled} />
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-700 ${
                scrolled ? 'text-stone-600' : 'text-stone-700'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Dropdown menu={menus[1]} scrolled={scrolled} />
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/#contacto"
            className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold transition-all duration-200 shadow-md shadow-emerald-200 hover:shadow-emerald-300 hover:scale-[1.03]"
          >
            Agenda una reunión
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-xl text-stone-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t-2 border-emerald-100 bg-white/95 backdrop-blur-md overflow-hidden shadow-lg max-h-[80vh] overflow-y-auto"
          >
            <div className="px-6 py-4 space-y-1">
              {menus.map(m => (
                <div key={m.label}>
                  <div className="py-2 text-xs font-black text-stone-400 uppercase tracking-wider">
                    {m.label}
                  </div>
                  {m.items.map(s => (
                    <a
                      key={s.href}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center py-3 pl-3 text-stone-700 hover:text-emerald-600 text-sm font-medium transition-colors border-b border-stone-100"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              ))}
              <div className="py-2 text-xs font-black text-stone-400 uppercase tracking-wider">
                Conócenos
              </div>
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center py-3 pl-3 text-stone-700 hover:text-emerald-600 text-sm font-medium transition-colors border-b border-stone-100"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="/#contacto"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center py-3.5 rounded-xl bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-200"
                >
                  Agenda una reunión gratis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
