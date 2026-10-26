import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Aviso de privacidad | Nutri Cafeterías',
  description:
    'Cómo Nutri Cafeterías trata los datos personales que recibe por su sitio web, la analítica de uso y las cookies de medición, y cómo ejercer tus derechos ARCO.',
  alternates: { canonical: 'https://cafeteriasescolares.com.mx/aviso-de-privacidad' },
  robots: { index: true, follow: true },
}

const ACTUALIZADO = '26 de octubre de 2026'

export default function AvisoPrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 bg-[#F7F3EA] min-h-screen">
        <article className="max-w-3xl mx-auto px-6 lg:px-8 space-y-6 text-stone-700 leading-relaxed">
          <h1 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">Aviso de privacidad</h1>
          <p className="text-sm text-stone-500">Última actualización: {ACTUALIZADO}</p>

          <section className="space-y-3">
            <h2 className="text-2xl font-black text-stone-900">Quién es responsable de tus datos</h2>
            <p>
              Nutri Cafeterías («Nutri»), con domicilio en la Ciudad de México, es responsable del
              tratamiento de los datos personales que recibe a través de cafeteriasescolares.com.mx,
              conforme a la Ley Federal de Protección de Datos Personales en Posesión de los
              Particulares. Para cualquier tema de privacidad escríbenos a{' '}
              <a href="mailto:contacto@nutricafeteria.com.mx" className="text-emerald-600 font-bold hover:underline">
                contacto@nutricafeteria.com.mx
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-black text-stone-900">Qué datos recabamos en el sitio y para qué</h2>
            <p>
              Cuando llenas el formulario de contacto o el diagnóstico recabamos tu nombre, el nombre
              de tu escuela, tu cargo, teléfono, correo y el mensaje que nos dejes. Los usamos para
              responderte, preparar una propuesta, agendar una visita o degustación y dar seguimiento
              comercial. No vendemos tus datos ni los compartimos para fines de mercadotecnia de
              terceros.
            </p>
            <p>
              Junto con tu solicitud registramos cómo llegaste al sitio (página de entrada, sitio de
              procedencia, parámetros de campaña como utm o gclid, la página desde la que enviaste y
              el tipo de dispositivo) para saber qué canales nos traen solicitudes. Si nos escribes
              por WhatsApp desde el sitio, el mensaje prellenado incluye un código corto de la página
              de origen, por ejemplo «[web:comedores]».
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-black text-stone-900">Analítica de uso y cookies de medición</h2>
            <p>
              Para entender cómo se usa el sitio y mejorarlo utilizamos herramientas de analítica de
              terceros (Vercel Analytics y, cuando está activada, PostHog). Estas herramientas
              registran de forma agregada las páginas que visitas, los clics, la profundidad de
              desplazamiento y mapas de calor, y pueden grabar sesiones de navegación para revisar
              problemas de uso. En esas grabaciones <strong>todo lo que escribes en los campos de los
              formularios se oculta</strong>; no usamos esta información para identificarte.
            </p>
            <p>
              Usamos cookies y almacenamiento local de primera parte para medir visitas y recordar
              cómo llegaste al sitio (la cookie «nutri_atrib» dura 90 días). Puedes borrarlas o
              bloquearlas desde la configuración de tu navegador; el sitio sigue funcionando sin ellas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-black text-stone-900">Reconocimiento facial en nuestras cafeterías y comedores</h2>
            <p>
              En las escuelas donde operamos, el pago o el acceso con reconocimiento facial es
              opcional. El registro del rostro de un alumno requiere el consentimiento expreso de su
              madre, padre o tutor, no guardamos la fotografía y siempre existe una alternativa sin
              rostro (app, efectivo en caja o lista del grupo), sin penalización. Las condiciones
              específicas se entregan a cada familia en el aviso de privacidad del servicio de su
              escuela.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-black text-stone-900">Tus derechos ARCO</h2>
            <p>
              Puedes acceder a tus datos, rectificarlos, cancelarlos u oponerte a su tratamiento, así
              como revocar tu consentimiento, escribiendo a contacto@nutricafeteria.com.mx con tu
              nombre, el dato o la solicitud concreta y un medio para responderte. Te contestamos en
              un plazo máximo de 20 días hábiles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-black text-stone-900">Cambios a este aviso</h2>
            <p>
              Si cambiamos este aviso, publicaremos la versión vigente en esta misma página con su
              fecha de actualización.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
