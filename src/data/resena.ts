// Destino del QR de reseñas impreso en la caja y el tótem de Ciudad UP
// (cafeteriasescolares.com.mx/resena). El QR nunca cambia: solo cambia este valor.
//
// Mientras la ficha de Google no esté verificada no existe enlace de reseña, así
// que se queda en null y /resena muestra una página de espera.
// Al verificarse: Perfil de Negocio → «Pedir reseñas» → copiar el enlace
// (g.page/r/... o search.google.com/local/writereview?placeid=...) y pegarlo aquí.
export const GOOGLE_RESENA_URL: string | null = 'https://g.page/r/CSacotuNpUuqEAI/review'
