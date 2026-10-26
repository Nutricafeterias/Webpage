/**
 * Recursos descargables (lead magnets). Los PDF viven en `public/recursos/` y
 * se regeneran con `docs/recursos/generar.sh` (HTML → PDF con Chrome headless).
 */
export type ClaveRecurso = 'menu-sep' | 'checklist-sep'

export type Recurso = {
  id: ClaveRecurso
  titulo: string
  descripcion: string
  incluye: string[]
  paginas: string
  archivo: string
  boton: string
  siguientePaso: string
  mensajeWa: string
}

export const RECURSOS: Record<ClaveRecurso, Recurso> = {
  'menu-sep': {
    id: 'menu-sep',
    titulo: 'Menú escolar semanal conforme a la SEP, listo para imprimir',
    descripcion:
      'La semana tipo de comedor (entrada, plato fuerte, verdura, fruta y agua) y una carta de cafetería escolar con productos permitidos, en un PDF que puedes imprimir o compartir con tu equipo.',
    incluye: [
      'Menú de comedor de lunes a viernes, en 3 o 4 tiempos',
      'Carta de cafetería: desayunos, comida, snacks y bebidas sin sellos',
      'Reglas de la SEP para armar tu propio menú',
    ],
    paginas: '2 páginas',
    archivo: '/recursos/menu-escolar-semanal-sep-nutri.pdf',
    boton: 'Descargar el menú en PDF',
    siguientePaso: '¿Quieres que este menú se sirva en tu escuela? Hacemos la degustación sin costo.',
    mensajeWa: 'Hola, descargué el menú escolar de ejemplo y me interesa para mi escuela',
  },
  'checklist-sep': {
    id: 'checklist-sep',
    titulo: 'Checklist de cumplimiento SEP para la cafetería escolar',
    descripcion:
      'Las preguntas que una dirección debe poder contestar con un «sí» para estar tranquila: qué se vende, cómo se documenta y qué pedirle por contrato al operador.',
    incluye: [
      '20 puntos en 4 bloques: oferta, agua, higiene y documentos',
      'Qué se puede y qué no se puede vender, en lenguaje claro',
      'Qué pedirle por escrito a tu operador',
    ],
    paginas: '2 páginas',
    archivo: '/recursos/checklist-cumplimiento-sep-cafeteria-escolar-nutri.pdf',
    boton: 'Descargar el checklist',
    siguientePaso: '¿Te salió algún «no»? Te ayudamos a resolverlo con una revisión sin costo.',
    mensajeWa: 'Hola, descargué el checklist de cumplimiento SEP y quiero una revisión para mi escuela',
  },
}
