'use client'

import { useEffect } from 'react'
import { capturarAtribucion } from '@/lib/atribucion'

/** Registra la primera página de entrada, referrer y UTM de la visita. */
export function AtribucionTracker() {
  useEffect(() => {
    capturarAtribucion()
  }, [])
  return null
}
