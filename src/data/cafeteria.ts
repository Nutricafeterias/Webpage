// Contenido de /cafeterias-escolares (línea Cafeterías: a la carta + snacks y
// bebidas que cumplen SEP + tótems, app, POS y reconocimiento facial opcional).
// Fotos: REALES, de la cafetería que operamos en la Universidad Panamericana,
// Campus Ciudad UP (no llevan la etiqueta «Concepto Nutri»). Sin precios públicos.

export const FOTO_DIR = '/img/cafeteria'

export const cafeteriaFaqs = [
  { q: '¿Qué es una cafetería escolar?', a: 'Es el punto de venta de comida dentro de la escuela, abierto en recesos y durante el día. El alumno elige y paga en cada compra: platillos a la carta, snacks empaquetados y bebidas. A diferencia del comedor, no hay un menú único servido por turnos.' },
  { q: '¿Qué venden en la cafetería?', a: 'Platillos del día preparados en la escuela (al horno, a la plancha o al vapor), snacks empaquetados y bebidas. Solo entran a la vitrina productos que cumplen los Lineamientos de la SEP: revisamos cada etiqueta antes de venderla y el agua natural siempre está disponible.' },
  { q: '¿Cómo se paga en la cafetería?', a: 'En la caja, en efectivo o con tarjeta; en los tótems de autoservicio; o con saldo de la App Nutri para familias. El reconocimiento facial es opcional. Siempre se puede pagar en efectivo en caja.' },
  { q: '¿El reconocimiento facial es obligatorio?', a: 'No. Es opcional y, en menores de edad, requiere el consentimiento del padre, madre o tutor. Quien no lo activa compra igual en caja, sin ninguna penalización, y la familia lo puede borrar desde la app cuando quiera.' },
  { q: '¿Los papás pueden ver qué compra su hijo?', a: 'Sí. En la App Nutri para familias ven el saldo y el historial de cada hijo, ponen un límite diario y registran alergias.' },
  { q: '¿Cómo bajan las filas en el receso?', a: 'Con tótems de autoservicio para pedir y pagar, pedidos anticipados en la app para recoger y un punto de venta propio que cobra rápido. La caja atendida sigue abierta para quien prefiera pagar en efectivo.' },
  { q: '¿Cuánto cuesta tener una cafetería escolar con Nutri?', a: 'Depende de la matrícula, del horario y del equipo que ya tenga la escuela. En el modelo de concesión no requiere inversión de la escuela. No publicamos precios cerrados: cotizamos después de una llamada o una visita.' },
  { q: '¿Atienden universidades y prepas?', a: 'Sí. Hoy operamos la cafetería de la Universidad Panamericana, Campus Ciudad UP, y de IPADE Business School, con horario extendido, tótems y pedidos para recoger.' },
  { q: '¿Atienden escuelas públicas?', a: 'Nuestro enfoque son universidades, prepas y colegios privados, pero no excluimos a nadie. ¿Escuela pública o de tiempo completo? Escríbenos: te decimos con honestidad si hoy podemos ayudarte.' },
  { q: '¿Quién responde ante la SEP por la cafetería?', a: 'Nosotros. Revisamos cada producto contra los Lineamientos de la SEP, seguimos la NOM-251 en higiene y entregamos la documentación a la dirección para cualquier revisión.' },
]

export const galeriaCafeteria = [
  {
    archivo: 'barra.jpg',
    alt: 'Alumnos universitarios haciendo fila en la barra de la cafetería Nutri del Campus Ciudad UP, con refrigeradores de bebidas y anaqueles de snacks',
    titulo: 'La barra, a media mañana',
    texto: 'Cafetería Nutri en la Universidad Panamericana, Campus Ciudad UP.',
    grande: true,
    posicion: 'object-center',
  },
  {
    archivo: 'productos.jpg',
    alt: 'Snacks empaquetados, semillas, cacahuates y bebidas sobre la barra de la cafetería escolar Nutri',
    titulo: 'Productos revisados',
    texto: 'Cada etiqueta se revisa contra los Lineamientos de la SEP.',
    posicion: 'object-center',
  },
  {
    archivo: 'caja-equipo.jpg',
    alt: 'Colaboradora de Nutri en la caja de la cafetería, con el punto de venta propio',
    titulo: 'Caja con punto de venta propio',
    texto: 'Efectivo, tarjeta, app o tótem: cada venta queda registrada.',
    posicion: 'object-[center_35%]',
  },
  {
    archivo: 'alumnos.jpg',
    alt: 'Dos alumnos universitarios sonriendo con sus snacks frente a la cafetería Nutri',
    titulo: 'Comunidad UP',
    texto: '4.9 / 5 de satisfacción en una encuesta a 500 personas (2025).',
    ancho: true,
    posicion: 'object-[center_30%]',
  },
]

export const queVendemos = [
  {
    archivo: 'barra.jpg',
    alt: 'Barra de la cafetería escolar donde los alumnos piden platillos a la carta',
    t: 'A la carta',
    d: 'Platillos del día preparados en la escuela —al horno, a la plancha o al vapor— y una carta que se ajusta con lo que piden los alumnos.',
  },
  {
    archivo: 'snacks.jpg',
    alt: 'Snacks empaquetados ordenados por anaquel en la cafetería escolar',
    t: 'Snacks empaquetados',
    d: 'Solo productos que cumplen los Lineamientos de la SEP. Revisamos cada etiqueta antes de que entre a la vitrina.',
  },
  {
    archivo: 'aguas.jpg',
    alt: 'Aguas de fruta embotelladas en la cafetería escolar',
    t: 'Bebidas',
    d: 'Agua natural siempre disponible y bebidas permitidas por la SEP.',
  },
]

export const tecnologiaCafeteria = [
  { emoji: '🖥️', t: 'Tótems de autoservicio', d: 'El alumno pide y paga en la pantalla y recoge en la barra. La caja atendida sigue abierta.' },
  { emoji: '⏱️', t: 'Pedidos anticipados para recoger', d: 'Desde la app se pide antes del receso y se recoge listo, sin esperar en la fila.' },
  { emoji: '📱', t: 'App Nutri para familias', d: 'Saldo e historial por hijo, límite diario y alergias registradas. Y siempre se puede pagar en efectivo en caja.' },
  { emoji: '🧾', t: 'Punto de venta propio', d: 'Desarrollado por Nutri: cobra rápido, registra cada venta y alimenta los reportes que recibe la escuela.' },
  { emoji: '🙂', t: 'Reconocimiento facial opcional', d: 'Para pagar sin tarjeta ni efectivo. Con consentimiento del tutor, se borra desde la app y nunca es obligatorio.' },
  { emoji: '💵', t: 'Efectivo, siempre', d: 'Quien no usa la app ni el reconocimiento facial compra igual en caja, sin penalización.' },
]

export const cumplimientoCafeteria = [
  'Sin productos con sellos de exceso en la vitrina',
  'Agua natural siempre disponible',
  'Cada etiqueta revisada antes de venderse',
  'Platillos al horno, a la plancha o al vapor',
  'Higiene según la NOM-251, con bitácoras diarias',
  'Documentación lista para la dirección',
]

export const pasosCafeteria = [
  { n: '1', t: 'Platicamos', d: 'Una llamada o una visita para conocer tu escuela, tu matrícula y tus horarios.' },
  { n: '2', t: 'Visita y propuesta', d: 'Te llevamos a ver una cafetería operando y te proponemos la carta, el equipo y la tecnología.' },
  { n: '3', t: 'Arranque', d: 'Montamos la operación en la fecha que defina la escuela, también a mitad del ciclo.' },
  { n: '4', t: 'Operación con reportes', d: 'La operación diaria es nuestra; la dirección recibe reportes y puede revisarla cuando quiera.' },
]
