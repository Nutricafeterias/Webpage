'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { analiticaActiva, capturar, registrarCliente, POSTHOG_HOST, POSTHOG_KEY } from '@/lib/analitica'

function seccionDe(el: Element | null): string {
  return el?.closest('[data-seccion]')?.getAttribute('data-seccion') ?? ''
}

function origenWa(href: string): string {
  try {
    const t = new URL(href).searchParams.get('text') ?? ''
    return t.match(/\[web:([^\]]+)\]/)?.[1] ?? ''
  } catch {
    return ''
  }
}

/**
 * Carga PostHog (autocapture, heatmaps, scroll depth y session replay con
 * inputs enmascarados) y emite los eventos estables del plan de medición.
 * Sin llaves no hace nada.
 */
export function Analitica() {
  const pathname = usePathname()

  // Carga única de PostHog + listeners globales.
  useEffect(() => {
    if (!analiticaActiva) return
    let cancelado = false
    import('posthog-js').then(({ default: posthog }) => {
      if (cancelado) return
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        autocapture: true,
        capture_pageview: 'history_change',
        capture_pageleave: true, // incluye profundidad de scroll ($prev_pageview_max_scroll_percentage)
        enable_heatmaps: true,
        disable_session_recording: false,
        session_recording: { maskAllInputs: true },
        person_profiles: 'identified_only',
      })
      registrarCliente(posthog)
    }).catch(() => undefined)

    const formsIniciados = new WeakSet<HTMLFormElement>()

    const onClick = (e: MouseEvent) => {
      const el = e.target instanceof Element ? e.target : null
      if (!el) return
      const pagina = window.location.pathname
      const enlace = el.closest('a') as HTMLAnchorElement | null
      if (enlace && /wa\.me\//.test(enlace.href)) {
        capturar('whatsapp_click', { origen: origenWa(enlace.href), seccion: seccionDe(enlace), pagina })
      }
      const cta = el.closest('[data-cta]')
      if (cta) {
        capturar('cta_click', { cta: cta.getAttribute('data-cta'), seccion: seccionDe(cta), pagina })
      }
    }
    const nombreForm = (f: HTMLFormElement) => f.getAttribute('data-formulario') || f.id || 'formulario'
    const onFocus = (e: FocusEvent) => {
      const f = (e.target as Element | null)?.closest?.('form') as HTMLFormElement | null
      if (!f || formsIniciados.has(f)) return
      formsIniciados.add(f)
      capturar('form_start', { formulario: nombreForm(f), pagina: window.location.pathname })
    }
    const onSubmit = (e: SubmitEvent) => {
      const f = e.target as HTMLFormElement | null
      if (!f) return
      capturar('form_submit', { formulario: nombreForm(f), pagina: window.location.pathname })
    }
    document.addEventListener('click', onClick, true)
    document.addEventListener('focusin', onFocus, true)
    document.addEventListener('submit', onSubmit, true)
    return () => {
      cancelado = true
      document.removeEventListener('click', onClick, true)
      document.removeEventListener('focusin', onFocus, true)
      document.removeEventListener('submit', onSubmit, true)
    }
  }, [])

  // seccion_vista: una vez por sección y por página vista.
  useEffect(() => {
    if (!analiticaActiva || typeof IntersectionObserver === 'undefined') return
    const vistas = new Set<string>()
    const io = new IntersectionObserver(
      entries => {
        for (const en of entries) {
          if (!en.isIntersecting) continue
          const s = en.target.getAttribute('data-seccion') || ''
          if (!s || vistas.has(s)) continue
          vistas.add(s)
          capturar('seccion_vista', { seccion: s, pagina: window.location.pathname })
          io.unobserve(en.target)
        }
      },
      { threshold: 0.35 },
    )
    const t = setTimeout(() => document.querySelectorAll('[data-seccion]').forEach(el => io.observe(el)), 300)
    return () => {
      clearTimeout(t)
      io.disconnect()
    }
  }, [pathname])

  return null
}
