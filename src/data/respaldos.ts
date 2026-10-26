/**
 * Respaldos de Nutri que se pueden publicar (confirmados por Dirección General
 * el 26-oct-2026). Fuente única: cualquier página que hable de cumplimiento
 * usa esta lista; si un respaldo cambia o vence, se corrige aquí.
 *
 * Reglas: nada «en trámite» se presenta como vigente; las opiniones de
 * cumplimiento vencen cada 15–30 días, por eso se ofrecen «cuando la escuela
 * las pide» y no como dato fijo.
 */
export type Respaldo = { clave: string; emoji: string; titulo: string; texto: string }

export const respaldos: Respaldo[] = [
  {
    clave: 'distintivo_h',
    emoji: '🏅',
    titulo: 'Estándares del Distintivo H',
    texto: 'Operamos bajo los estándares del Distintivo H y todo nuestro equipo está capacitado en ellos. Según el proyecto de cada escuela, tramitamos el Distintivo H para su cafetería.',
  },
  {
    clave: 'nom251',
    emoji: '🧼',
    titulo: 'NOM-251-SSA1-2009',
    texto: 'Higiene, temperaturas y bitácoras diarias, con un programa propio de capacitación en NOM-251 para todo el personal.',
  },
  {
    clave: 'cofepris',
    emoji: '🏛️',
    titulo: 'Aviso de funcionamiento COFEPRIS',
    texto: 'Cada cafetería que operamos cuenta con su aviso de funcionamiento ante COFEPRIS.',
  },
  {
    clave: 'repse',
    emoji: '📑',
    titulo: 'Registro REPSE vigente',
    texto: 'Registro de servicios especializados ante la STPS. El padrón es público y lo puedes consultar.',
  },
  {
    clave: 'poliza_rc',
    emoji: '🛡️',
    titulo: 'Póliza de responsabilidad civil',
    texto: 'Seguro de responsabilidad civil vigente para nuestra operación en la escuela.',
  },
  {
    clave: 'opiniones',
    emoji: '✅',
    titulo: 'Al corriente con SAT, IMSS e INFONAVIT',
    texto: 'Entregamos las opiniones de cumplimiento positivas del SAT, el IMSS y el INFONAVIT cuando la escuela las pide.',
  },
  {
    clave: 'empresa_formal',
    emoji: '🧾',
    titulo: 'Empresa formal y factura',
    texto: 'Nutricafeterías, S.A. Facturamos a la escuela y a las familias que lo pidan, y cuidamos sus datos con nuestro aviso de privacidad.',
  },
  {
    clave: 'sep',
    emoji: '🍎',
    titulo: 'Lineamientos de la SEP',
    texto: 'Cero productos con sellos de exceso, agua natural siempre disponible y menús revisados contra los lineamientos vigentes.',
  },
]
