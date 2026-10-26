// Contenido de /comedores-escolares (brief 04 §3). Sin precios públicos.

export const comedorFaqs = [
  { q: '¿Qué es un comedor escolar?', a: 'Es el servicio que da a los alumnos una comida completa al día —entrada, plato fuerte con proteína, verdura, fruta y agua—, servida por turnos y con la porción de cada edad. A diferencia de la cafetería, no se elige a la carta: hay un menú del día, igual para todos.' },
  { q: '¿Qué diferencia hay entre comedor escolar y cafetería escolar?', a: 'En el comedor, cada niño recibe el menú completo del día en su turno. En la cafetería, los alumnos eligen platillos a la carta, snacks y bebidas. Una escuela puede tener las dos.' },
  { q: '¿Atienden colegios privados y escuelas públicas?', a: 'Sí. Atendemos colegios privados, escuelas de tiempo completo y universidades, públicas o privadas, y nos adaptamos al proceso de contratación que defina cada escuela.' },
  { q: '¿Pueden atender a 800 o 900 alumnos?', a: 'Sí. Organizamos el servicio en turnos por grupo, y en uno o varios comedores. Cocinamos por tandas para que cada turno coma recién hecho.' },
  { q: '¿Qué incluye la comida?', a: 'Entrada (sopa o ensalada), plato fuerte con proteína todos los días, verdura, fruta de postre y agua. Tortillas de maíz o pasta según el día. En 3 o 4 tiempos, según lo que decida la escuela.' },
  { q: '¿A todos les toca lo mismo?', a: 'Sí. Servimos con utensilios medidos y, al cerrar cada turno, revisamos que nadie se haya quedado sin plato fuerte o sin postre. La porción cambia por edad, no por turno.' },
  { q: '¿El último turno come igual que el primero?', a: 'Sí. Recetas estandarizadas, sal medida y cocina por tandas: el último grupo come recién hecho.' },
  { q: '¿La comida se congela o llega de otro lado?', a: 'No. Se cocina el mismo día, en la cocina de la escuela o, si no tiene, se prepara ese mismo día y llega caliente. Nunca se congela.' },
  { q: '¿Les van a gustar las aguas sin azúcar?', a: 'Usamos frutas que ya son dulces (piña, melón, sandía, guayaba) y no añadimos azúcar. El agua natural siempre está disponible.' },
  { q: '¿Cómo pago si no uso apps?', a: 'En efectivo, en la caja del comedor, por día, semana o mes, sin comisión. Te damos tu comprobante y queda registrado igual que en la app.' },
  { q: '¿Qué pasa si mi hijo falta?', a: 'Si nos avisas con anticipación (cada escuela fija la hora límite), la comida se queda como saldo para otro día.' },
  { q: '¿Cómo sé que comió?', a: 'Recibes un aviso cuando entra al comedor, y cada día mandamos la foto del plato.' },
  { q: 'Mi hijo tiene alergias, ¿qué hacen?', a: 'Regístralas en la app o avísanos. La cocina las ve antes de servir y preparamos su plato aparte. Con constancia médica atendemos dietas especiales.' },
  { q: '¿Los papás podemos opinar?', a: 'Sí. Cada mes hay una encuesta y ajustamos el menú con los resultados.' },
  { q: '¿Cuánto cuesta?', a: 'Depende del número de alumnos, de los tiempos del menú y de lo que la escuela necesite. Cotizamos rápido después de una llamada o una visita.' },
  { q: '¿Qué necesita tener la escuela?', a: 'Idealmente una cocina con gas, tarja y extracción. Si no la hay, revisamos opciones: equiparla o cocinar cerca. Lo definimos juntos en la visita.' },
  { q: '¿Pueden entrar a mitad del ciclo escolar?', a: 'Sí. Arrancamos en la fecha que la escuela defina, con el menú del primer mes entregado por adelantado.' },
  { q: '¿Trabajan con escuelas de tiempo completo y con procesos de licitación?', a: 'Sí. Conocemos los documentos de la AEFCM, presentamos propuesta, hacemos degustación y platicamos con los papás. También nos adaptamos a condiciones como becas, comida para docentes o aportaciones que defina la escuela.' },
  { q: '¿Dan factura?', a: 'Sí, a quien la solicite. Te explicamos el proceso al inscribirte.' },
]

export const tiempos = [
  { n: '1', titulo: 'Entrada', lleva: 'Sopa o ensalada fresca', ej: 'Sopa de fideo, de letras o de verduras; arroz rojo; ensalada con vinagreta de limón' },
  { n: '2', titulo: 'Plato fuerte con proteína, todos los días', lleva: 'Pollo, res, pescado, huevo o leguminosas con queso, rotando en la semana; con guarnición de verdura', ej: 'Albóndigas en salsa de jitomate, tinga de pollo, picadillo, tacos suaves de pollo con frijoles' },
  { n: '3', titulo: 'Postre: fruta', lleva: 'Fruta de temporada, picada y lista para comer', ej: 'Sandía con chile piquín y limón, guayaba, papaya, naranja' },
  { n: '4', titulo: 'Versión de 4 tiempos', lleva: 'Sopa y ensalada, o una segunda entrada', ej: 'Sopa de verduras + ensalada fresca' },
]

export const menuSemana = [
  { dia: 'Lunes', entrada: 'Ensalada fresca con vinagreta de limón (+ sopa de verduras en 4 tiempos)', fuerte: 'Albóndigas de res en salsa de jitomate con espagueti', verdura: 'En la ensalada', postre: 'Sandía con chile piquín y limón', agua: 'Agua de piña, sin azúcar añadida' },
  { dia: 'Martes', entrada: 'Sopa de fideo', fuerte: 'Tinga de pollo con frijoles y tortillas de maíz', verdura: 'Pepino y zanahoria con limón', postre: 'Guayaba', agua: 'Natural' },
  { dia: 'Miércoles', entrada: 'Sopa de verduras', fuerte: 'Tacos suaves de pollo con frijoles', verdura: 'Nopales asados', postre: 'Plátano', agua: 'Natural' },
  { dia: 'Jueves', entrada: 'Arroz rojo', fuerte: 'Picadillo de res con zanahoria y calabacita', verdura: 'Jícama y pepino', postre: 'Papaya', agua: 'Agua de limón con chía' },
  { dia: 'Viernes', entrada: 'Sopa de coditos', fuerte: 'Tortitas de huevo con verduras al horno, frijoles y panela', verdura: 'Lechuga y jitomate', postre: 'Naranja', agua: 'Natural' },
]
