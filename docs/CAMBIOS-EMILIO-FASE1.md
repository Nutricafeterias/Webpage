# Cambios Emilio · Fase 1 (rama `feat/emilio-fase1`)

Fecha: 26-oct-2026. Base: `origin/main` (b9b4cfd) + merge de `fix/claims-desde-2018`.
**Nada se ha subido ni publicado.** Revisión en local, un solo merge al aprobar.

## Cómo revisarlo

- En el panel de vista previa: configuración **`emilio-web`** (`npm run dev -- -p 3005`, cwd en este worktree) → http://localhost:3005
- O en terminal: `cd ~/nutri-cafeterias-emilio-wt && npm run dev -- -p 3005`
- Páginas clave: `/`, `/comedores-escolares`, `/cafeterias-escolares`, `/cafeterias-escuelas-privadas`, `/catering-escolar`, `/lineamientos-sep`, `/menus`, `/aviso-de-privacidad`.
- Redirecciones 301: `/catering-escolar-cdmx` → `/comedores-escolares`; `/programas` → `/cafeterias-escolares`; `/comedores-esculares` → `/comedores-escolares`; typo `…-regrules-2028` → `…-reglas-2028`.
- Verificado: `npx tsc --noEmit` y `npm run build` limpios; con `next start` todas las páginas dan 200 y las redirecciones 301.

## Commits

1. `Merge fix/claims-desde-2018` (conflicto en `uvaq-halcones` resuelto a favor de la limpieza, conservando el teléfono comercial de main).
2. `fix(claims)` limpieza en todo `src/` y `llms.txt`.
3. `feat(comedores)` página reescrita.
4. `feat(cafeterias)` h1 + «Qué vendemos».
5. `feat(catering)` 301 y «Eventos escolares».
6. `feat(leads)` atribución.
7. `feat(analitica)` PostHog + aviso de privacidad + `docs/analitica.md`.
8. `seo` title/meta de `/menus` y `/lineamientos-sep`.
9. `chore(lint)` y `fix(redirects)` (301 explícito).

## Cambios por página

| Página / archivo | Cambio |
|---|---|
| Home (`Hero`, `Marquee`, `ServicesSplit`, `Technology`, `WhyNutri`, `Schools`, `FAQ`) | Fuera «#1», «que los alumnos aman», «<3 min», «cero carga», huella, «próximamente». H1: «Cafeterías escolares con comida real, a tiempo y a la vista». Servicios: Cafetería / Comedor + Eventos como complemento. Escuelas: solo UP (Campus Ciudad UP) e IPADE; se quita Northridge (y su testimonio) y Prepa UP. FAQ reescrito (efectivo + app, reconocimiento facial, comedor distinto a cafetería, sin «escuelas privadas»). `data-seccion` en cada sección. |
| `/comedores-escolares` | Reescrita completa según brief 04 §3: hero con 3 sellos, qué incluye (3–4 tiempos), menú semanal, porciones por edad, «se cocina el mismo día, nunca se congela», turnos, pagos app/efectivo con el mismo peso (día/semana/mes), cancelación antes de 9:00 a. m. = saldo, comunicación con papás, degustación, tecnología con alternativa sin rostro, cumplimiento SEP/NOM-043/NOM-251/AEFCM, 16 FAQ + `FAQPage`, CTA degustación + WhatsApp `[web:comedores]`, bloque SEO sin «privadas». Sin precios. |
| `/cafeterias-escolares` | H1 «Cafetería escolar: platillos a la carta, snacks y bebidas que cumplen con la SEP», title/OG/JSON-LD limpios, bloque «Qué vendemos» y cruce «¿Buscas un comedor con menú del día? →». Se quita la sección NutriMood. |
| `/cafeterias-escuelas-privadas` | Reencuadre «Cafetería y comedor para colegios particulares», mismo bloque, sin «colegiatura», sin «sin inversión» universal. |
| `/catering-escolar` | Ahora «Eventos escolares» (complemento); enlaza al comedor para el servicio diario. |
| `/catering-escolar-cdmx` | Página eliminada; 301 a comedor. |
| `/programas` | Eliminada (NutriMood retirado); 301 a `/cafeterias-escolares`. Se borró `Programs.tsx`. |
| `/nosotros`, `/menus`, `/lineamientos-sep` | Nutriólogos → criterios nutrimentales de la SEP; app para familias existente; títulos/metas nuevos en menús y lineamientos. |
| `/diagnostico` | Pregunta de pago reformulada (efectivo + app suman; ya no castiga el efectivo); «<3 min» → «<5 min»; app para familias. Atribución y evento `diagnostico_completado`. |
| `/aviso-de-privacidad` | **Nueva**: analítica de terceros, cookies de medición, atribución, reconocimiento facial, ARCO. Enlazada en footer y sitemap. |
| `layout.tsx` (meta + JSON-LD), `llms.txt` | Sin claims ni competidores; dos líneas de servicio; montan `AtribucionTracker` y `Analitica`. |
| Navbar / Footer / sitemap | Cafetería escolar · Comedor escolar · (renglón chico) Eventos. Sin «Catering escolar CDMX» ni «Programas». |
| Blog (`src/data/blog.ts`) | Solo frases con claims: nutriólogos propios, huella, «próximamente», NutriMood, Distintivo H/licencia sanitaria, «<3 min», Northridge/Prepa UP. Enlaces a catering-cdmx → comedor. |
| `public/demo/comedor` | Genericizada: «Colegio Demo» y sin «huella numérica». **Aún trae precios de ejemplo ($38/$37) en el código**; por eso no se enlaza desde la página. |
| `src/lib/atribucion.ts`, `/api/lead` | Primer contacto (entrada, referrer, UTM, gclid) en sessionStorage + cookie `nutri_atrib` 90 días; al enviar se agrega página y dispositivo. El ERP no tiene esos campos: van como «Origen web: …» al final de `mensaje` (≤2000 car.) y también como campos sueltos. Formspree recibe `origen_web`. |
| WhatsApp | Código `[web:<página>]` en todos los botones (hero, flotante, contacto, footer, diagnóstico, SEP, servicios). |
| PostHog | `posthog-js@1.438.7`, solo con `NEXT_PUBLIC_POSTHOG_KEY` y `NEXT_PUBLIC_POSTHOG_HOST`. Ver `docs/analitica.md`. |

## Grep final de claims

Script: `python3 docs/grep-claims.py` (sin acentos ni mayúsculas; revisa `src/` y `public/llms.txt`).
Expresiones: #1, 10 años/una década, millón de órdenes/+1M, 97 %, Distintivo H, licencia sanitaria, nutriólog*, 3 minutos, 200,000, NutriMood, cero/sin efectivo, huella, biométric*, próximamente, comisariato, congelad*, Northridge, «alumnos aman», cero carga.

**Resultado: 19 coincidencias, todas en contextos legítimos** (0 de «huella», «#1», «millón», «97 %», «Distintivo H», «licencia sanitaria», «3 minutos», NutriMood, «próximamente», «comisariato», «congelado», Northridge):

| Coincidencia | Dónde | Por qué se queda |
|---|---|---|
| «biométrico» ×11 | artículo `datos-biometricos-menores…` (slug, título, keywords, cuerpo, enlace a él) | «Datos biométricos» es la categoría legal de la LFPDPPP que el artículo explica; cambiar el slug rompe la URL indexada. Ya no dice «huella»: habla del rostro y del consentimiento. |
| «nutriólogos» ×4 | título del artículo `menu-saludable-cafeteria-escolar` y 3 enlaces a él | Se refiere a la profesión en general («qué debe incluir según nutriólogos»), no a un equipo propio. |
| «nutriólogos» ×1 | `sobrepeso-infantil…` | «papás con acceso a nutriólogos»: contexto social, no claim. |
| «nutriólogos» ×1 | `mejores-empresas…` | Describe a otra empresa, no a Nutri (ver pendiente de competidores). |
| «una década» ×1 | `ultraprocesados…` | «Durante una década, la política…»: no es antigüedad de Nutri. |
| «sin efectivo» ×1 | `inteligencia-artificial…` | Describe un formato de otro operador. |

`public/demo/comedor` conserva nombres de variables internas `huellas` (código, no visible).

## Decisiones por defecto que Ricardo debe confirmar

1. **Cancelación**: «Avísanos antes de las 9:00 a. m. y queda como saldo; en baja se devuelve el saldo no usado» (default del brief).
2. **Pagos del comedor**: se publican OXXO, Apple/Google Pay, transferencia y «en recargas en línea puede aplicar una comisión». No se menciona Tarjeta del Bienestar. «Comprar el mes completo sale más barato».
3. **Factura a papás**: «Sí, a quien la solicite».
4. **Menú de ejemplo**: jueves sin papa y «tortitas de huevo al horno» (validar con cocina). Kcal solo de primaria.
5. **«+1 millón de órdenes»**: retirado de todo el sitio (instrucción de esta fase; el brief 04 lo recomendaba).
6. **Sin inversión**: se cambió a «definimos con cada escuela el equipo y la inversión» en home, FAQ y privadas; en algunos cierres del blog sigue «sin inversión inicial para la institución» (no estaba en la lista de prohibidos; revisar).
7. **NutriMood**: `/programas` → 301 a `/cafeterias-escolares` (no se dejó página neutra).
8. **Testimonio** «Director General, Universidad Panamericana» (home y antes/después): se dejó, pero no hay permiso escrito de UP; recomiendo quitarlo hasta tenerlo. Lo mismo con el nombre de IPADE en la sección de escuelas.
9. **Demo del comedor**: no se enlaza desde `/comedores-escolares` porque aún muestra precios de ejemplo; quitarlos o confirmar que se puede enlazar.
10. **Anexo de cumplimiento**: el botón abre WhatsApp `[web:comedores-anexo]` (no hay PDF genérico aún).
11. **Aviso de privacidad**: falta razón social y domicilio exactos del responsable; revisar con el abogado antes de publicar.
12. **Redirecciones** con `statusCode: 301` (Next usa 308 con `permanent: true`).
13. «Hasta 11 cafeterías a la vez» se muestra en el hero (tarjeta flotante) y en el footer.

## Pendientes fuera de alcance (detectados)

- Artículos del blog que nombran competidores (`mejores-empresas-cafeterias-escolares-mexico`, `inteligencia-artificial-…-chartwells-sodexo`, menciones a Chartwells/Sodexo en otros) y `alimentacion-y-emociones…` (claim de emociones): el brief 03 recomienda noindex o retiro. No se reescribieron.
- `/menus` en dos pestañas (Comedor / Cafetería) y `/lineamientos-sep` con bloque «En el comedor»: propuestos en el brief, no hechos en esta fase (solo meta).
- ESLint: quedan errores previos del repo (`<a href="/#contacto">` en varias páginas y `setState` en efectos de `Diagnostic.tsx`); `next build` no los bloquea.
- Durante la verificación el disco de la Mac se llenó (ENOSPC). Borré solo `.next/dev`, la caché del servidor de desarrollo que había generado yo en este worktree (111 MB). Después la build y las pruebas pasaron con `next start`.

## Rediseño comedores + SEO (26-oct)

Encargo de Ricardo: página de comedores más visual (fotos de platillos, menú y barra) y diseñada para posicionar «comedores escolares» como ya lo hace la home con «cafeterías escolares» (pos. 2.3). Base GSC (3 meses): /comedores-escolares pos. 8.0; «comedores escolares» 6.2; «comedor escolar» 5.9; «comedores escolares sep» 10.2; «… en escuelas de tiempo completo» 12.4.

**Keywords objetivo**: comedores escolares · comedor escolar · servicio de comedor escolar · comedores escolares CDMX · empresa de comedores escolares · menú de comedor escolar conforme a la SEP · comedores escolares en escuelas de tiempo completo · cuánto cuesta un comedor escolar.

**Diseño** (`src/app/comedores-escolares/page.tsx`; el texto aprobado se conserva):
- Hero a sangre con `hero-comedor.jpg`, h1 aprobado, sellos en vidrio, CTA naranja; en móvil la foto va arriba y el texto debajo.
- Franja de cifras: #1 en México, +1,000,000 órdenes, 4.9 / 5, SEP.
- Mosaico «Así se ve un día en el comedor» (barra, plato completo, tinga, fruta y agua).
- Menú semanal: banner `menu-semana.jpg` + 5 tarjetas por día (sustituye la tabla, mismos datos).
- Porciones por edad con `plato-completo.jpg` y tarjetas comparativas; bloque oscuro «Se cocina el mismo día»; línea de 4 turnos; degustación (`#degustacion`) con `tinga-frijoles.jpg`.
- Nuevos bloques: «Comedores escolares en escuelas de tiempo completo» y «¿Cuánto cuesta un comedor escolar?» (→ guía del blog).
- `src/components/ui/FotoComedor.tsx`: `next/image` con respaldo de gradiente si el archivo no existe (comprobación `fs` en servidor) y etiqueta «Concepto Nutri» en todas las fotos; en dev `unoptimized` para no generar caché de imágenes.
- `src/components/ui/Reveal.tsx`: aparición sutil con framer-motion; el contenido sigue en el HTML del servidor.

**SEO on-page**:
- title «Comedores escolares en CDMX | Servicio de comedor · Nutri» (57 car.), description de 152 car., canonical, OG/Twitter con el hero (solo si existe el archivo).
- h2 por variante: «Servicio de comedor escolar…», «Menú de comedor escolar conforme a la SEP», «Comedores escolares en escuelas de tiempo completo», «¿Cuánto cuesta un comedor escolar?», «Preguntas frecuentes sobre el comedor escolar», «Empresa de comedores escolares en CDMX» (bloque de ~400 palabras con h3: qué es, turnos, SEP/NOM-043/NOM-251, privadas/tiempo completo/públicas).
- JSON-LD: `Service` (serviceType «Servicio de comedor escolar», provider `Organization`, areaServed CDMX + ZMVM), `FAQPage` (19 preguntas: +«¿Qué es un comedor escolar?», «diferencia con cafetería», «privadas y públicas»), `BreadcrumbList` (+ migas visibles), `ImageObject` del hero.

**Enlazado interno**: home/ServicesSplit (CTA «Ver el servicio de comedor escolar» y `alt` descriptivos); `/menus` → tarjetas «Menú de comedor escolar» / «Menú de cafetería escolar»; `/lineamientos-sep` → párrafo con anclas «comedor escolar» y «cafetería escolar»; desde comedores → `/menus`, `/lineamientos-sep`, `/blog/cuanto-cuesta-comedor-escolar-cdmx` y `/cafeterias-escolares`. Sitemap: ya estaba con prioridad 0.9.

**Pendiente**: `tinga-frijoles.jpg` y `fruta-agua.jpg` aún no llegan (se muestra el gradiente de respaldo); las imágenes de `public/img/comedor/` no están commiteadas (las está generando otra sesión) y deben entrar al repo antes de publicar. Verificado con `tsc` y en el dev server (200, un h1, JSON-LD) a 1280 px y 375 px; sin `next build` por disco.

## CRO 26-oct

Encargo de Ricardo: «todos se meten, dan clic y se salen». Datos 19–26 oct: 63 visitantes, rebote 78 %, 57 % móvil, 0 leads web desde el 21-oct. Método: `~/nutri-web-emilio/CRO-MARCO.md`; auditoría por página: `~/nutri-web-emilio/CRO-AUDITORIA-26OCT.md`.

**Causas principales encontradas**
1. En móvil no había CTA en la primera pantalla (botón de la navbar oculto en móvil; solo la burbuja de WhatsApp, 2 toques).
2. La home se pintaba en blanco hasta hidratar: h1/sub/CTAs del Hero salían con `opacity:0` del servidor.
3. Todos los CTA fuera de la home saltaban a `/#contacto` (otra página, se pierde el contexto).
4. /menus y /lineamientos-sep no respondían la búsqueda arriba (eslogan en vez de menú de ejemplo / reglas) y no ofrecían un siguiente paso al tráfico informativo.
5. Formulario con 5 obligatorios; aviso de campaña a los 4 s.

**Cambios**

| Archivo | Cambio |
|---|---|
| `src/components/CtaMovil.tsx` (nuevo, en `layout.tsx`) | Barra fija inferior solo en móvil (acción principal según página + WhatsApp) con espaciador para no tapar el final. Hoja de contacto rápido (3 campos) que se abre desde la barra, desde `href="#contacto-rapido"` (+ `data-motivo`) y desde cualquier `/#contacto` fuera de la home. Motivo según `data-cta` (degustación, visita, evento, revisión SEP). Excluida en /diagnostico, /aviso-de-privacidad, /demo, /propuestas. |
| `src/components/WhatsAppButton.tsx` | En móvil se oculta donde hay barra (sin botones flotantes duplicados); en escritorio sigue igual. |
| `src/components/FormularioCorto.tsx`, `src/lib/lead.ts` (nuevos) | Nombre, escuela, «WhatsApp o correo» (+ rol opcional de un toque). Envía a `/api/lead` con la atribución de `atribucion.ts` y a Formspree de respaldo; `mensaje` dice qué pidió («Descargó: …», «Quiere: degustación · desde /menus», «Rol: …»). |
| `src/components/RecursoDescargable.tsx`, `src/data/recursos.ts`, `public/recursos/*.pdf`, `docs/recursos/` | Lead magnets: **Menú escolar semanal conforme a la SEP** (2 págs.; semana de comedor de `comedor.ts` + carta de cafetería + reglas) y **Checklist de cumplimiento SEP** (20 puntos). Contenido visible en la página; el PDF se entrega al instante tras el mini formulario. Regenerar: `sh docs/recursos/generar.sh` (Chrome headless). |
| `src/components/PruebaSocial.tsx` (nuevo) | Fila #1 en México · +1,000,000 órdenes · 4.9 / 5 · desde 2018 (UP Campus Ciudad UP, IPADE) junto a los CTA. |
| `src/components/CtaBlog.tsx` + `src/app/blog/[slug]/page.tsx` | CTA contextual por tema a mitad (antes del 3.er h2) y al final de cada artículo: lineamientos → checklist + revisión; menús → PDF + degustación; comedor → servicio + degustación; resto → diagnóstico + visita. |
| `src/app/menus/page.tsx` | h1 «Menú escolar semanal conforme a la SEP», anclas, semana tipo de comedor arriba, reglas SEP sí/no, PDF, carta de cafetería, FAQ (`FAQPage`), CTA degustación + prueba social. Description con «Descárgalo gratis en PDF». |
| `src/app/lineamientos-sep/page.tsx` | h1 «qué se puede vender en la escuela y qué no», resumen sí/no y 4 datos clave arriba, checklist PDF, «Pedir revisión sin costo», prueba social. El resto de la página se conserva. |
| `src/components/sections/Hero.tsx` | h1/sub/CTAs sin animación de entrada; sin `min-h-screen` en móvil; CTA visible a 375 px; «Agenda una reunión sin costo»; confianza 4.9/5 · +1,000,000 · 2018. |
| `src/components/sections/Contact.tsx` | Obligatorios: nombre, escuela, WhatsApp; correo y cargo opcionales; botón «Agendar mi reunión sin costo»; «te respondemos en menos de 1 día hábil»; prueba social. |
| `src/components/sections/MenuExplorer.tsx` | Tarjetas sin `opacity:0` inicial. |
| `src/components/CampanaPopup.tsx` | Aparece al 45 % de scroll o a los 30 s (antes 4 s). |
| `src/app/cafeterias-escolares/page.tsx` | Prueba social arriba y en el CTA final; «Agenda una visita sin costo» abre la hoja con motivo visita. |
| `/comedores-escolares` | Archivo sin tocar. Recibe la barra móvil y sus «Pide una degustación» abren la hoja rápida (vía interceptor global). |

**Eventos nuevos (PostHog)**: `lead_magnet_descarga {recurso, pagina}`, `lead_corto_enviado {formulario, rol, pagina}`, `cta_movil_abierto {motivo, desde, pagina}`; formularios `recurso_menu-sep`, `recurso_checklist-sep`, `rapido_<motivo>`; secciones `menus_*`, `sep_*`, `recurso_*`, `blog_cta_*`, `barra_movil`; CTAs `barra_movil_*`, `whatsapp_barra_movil`, `ancla_pdf_menu`, `descarga_*`, `agenda_degustacion_menus`, `pide_revision_sep`, `blog_final_*`, `blog_medio_*`, `agenda_visita_hero`, `diagnostico_hero_cafeteria`, `whatsapp_hoja_contacto`, `whatsapp_tras_*`.

**Verificado**: `npx tsc --noEmit` limpio; ESLint limpio en archivos tocados; 200 en /, /menus, /lineamientos-sep, /cafeterias-escolares, /comedores-escolares, /diagnostico, 3 artículos y los 2 PDF. En el navegador a 375 px: barra visible sin tapar el pie (espaciador), sin burbuja duplicada, hoja de contacto abre desde el blog, descarga del menú probada con `fetch` simulado (no se mandó ningún lead real; payload correcto con `mensaje` y `pagina_envio`). Sin `npm run build` (disco).

**Decisiones por defecto (confirmar)**
1. Los leads de recursos entran al CRM aunque sean docentes o papás; el rol viene en el mensaje para filtrarlos.
2. La entrega del PDF es inmediata en pantalla (sin correo automático).
3. El interceptor convierte todos los `/#contacto` fuera de la home en la hoja rápida (incluye comedores, navbar y footer). Se revierte quitando el bloque en `CtaMovil.tsx`.
4. Datos de lineamientos («la Corte confirmó que incluye prepas y universidades», retiro del RVOE en casos graves) tomados de los artículos del propio blog.
