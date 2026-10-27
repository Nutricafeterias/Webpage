# Plan de medición del sitio (cafeteriasescolares.com.mx)

Objetivo: medir el embudo **visita → interacción → lead** de punta a punta y
saber qué página, canal y sección producen solicitudes de escuelas.

## Herramientas

| Herramienta | Qué mide | Estado |
|---|---|---|
| Vercel Analytics (`@vercel/analytics`) | Visitas por página y eventos `track()` existentes (`whatsapp_click`, `diagnostico_completado`) | Activa (se mantiene) |
| PostHog (`posthog-js` 1.438.7) | Autocapture de clics, pageviews SPA, pageleave con profundidad de scroll, mapas de calor, grabación de sesiones con `maskAllInputs: true`, eventos propios | **Apagado hasta configurar llaves** |
| Atribución propia (`src/lib/atribucion.ts`) | Página de entrada, referrer, UTM, gclid, página de envío y dispositivo en cada lead | Activa |
| Search Console | Impresiones, clics y CTR orgánicos | Externa |

### Activar PostHog

1. Crear el proyecto en PostHog (región US o EU).
2. En Vercel → Settings → Environment Variables (Production y Preview):
   - `NEXT_PUBLIC_POSTHOG_KEY` = Project API key (`phc_…`)
   - `NEXT_PUBLIC_POSTHOG_HOST` = `https://us.i.posthog.com` (o `https://eu.i.posthog.com`)
3. Redeploy. Sin **ambas** variables el sitio no descarga ni ejecuta PostHog.
4. En PostHog: activar *Session replay* y *Heatmaps* en Project settings, y
   agregar el dominio a *Authorized URLs* para la barra de heatmaps.

Código: `src/lib/analitica.ts` (cliente y cola de eventos) y
`src/components/Analitica.tsx` (carga diferida, listeners globales e
IntersectionObserver). Se monta una sola vez en `src/app/layout.tsx`.

## Eventos (nombres estables, no renombrar)

| Evento | Cuándo se dispara | Propiedades |
|---|---|---|
| `$pageview` / `$pageleave` | Automáticos de PostHog (cambio de ruta y salida) | `$prev_pageview_max_scroll_percentage` = scroll depth |
| `cta_click` | Clic en cualquier elemento con `data-cta` | `cta` (id del botón), `seccion` (el `data-seccion` más cercano), `pagina` |
| `whatsapp_click` | Clic en cualquier enlace a `wa.me` | `origen` (código `[web:…]` del mensaje), `seccion`, `pagina` |
| `form_start` | Primer foco dentro de un formulario | `formulario` (`contacto`, `diagnostico`), `pagina` |
| `form_submit` | Envío de un formulario | `formulario`, `pagina` |
| `diagnostico_completado` | Al terminar el diagnóstico y dejar datos | `puntaje`, `pagina` |
| `lead_magnet_descarga` | Clic en «Descargar el PDF» tras el mini formulario | `recurso`, `pagina` |
| `lead_corto_enviado` | Envío correcto de un formulario corto (recurso u hoja rápida) | `formulario`, `rol`, `como_nos_conocio`, `pagina` |
| `cta_movil_abierto` | Se abre la hoja de contacto rápido | `motivo`, `desde`, `pagina` |
| `lead_contacto_enviado` | Envío del formulario de contacto (#contacto) | `como_nos_conocio` (o `sin_respuesta`), `pagina` |
| `$feature_flag_called` | Automático de PostHog cuando una prueba A/B resuelve su variante (exposición). Solo se emite si el flag llega a tiempo (2 s); si no, el visitante ve el control y no cuenta | `$feature_flag`, `$feature_flag_response` |
| `seccion_vista` | Una sección con `data-seccion` entra 35 % en pantalla (una vez por vista de página) | `seccion`, `pagina` |

Nunca se envían a PostHog nombre, correo, teléfono ni escuela.

### Secciones instrumentadas (`data-seccion`)

- **Home:** `home_hero`, `home_stats`, `home_problema`, `home_sep`, `home_diagnostico`,
  `home_servicios`, `home_tecnologia`, `home_por_que`, `home_escuelas`, `home_faq`, `home_contacto`.
- **Cafetería (rediseño nov-2026):** `cafeteria_hero`, `cafeteria_galeria`, `cafeteria_que_vendemos`,
  `cafeteria_cumplimiento`, `cafeteria_tecnologia`, `cafeteria_para_quien`, `cafeteria_como_funciona`,
  `cafeteria_costo`, `cafeteria_faq`, `cafeteria_cta_final`, `cafeteria_seo`.
- **Universidades:** `uni_hero`, `uni_pruebas`, `uni_reto`, `uni_servicios`, `uni_encuesta`, `uni_galeria`,
  `uni_faq`, `uni_cta_final`, `uni_seo`.

### Pruebas A/B

- **AB-01** (`ab-01-cta-hero`): botón principal del hero del inicio. `control` = «Agenda una reunión sin costo» → `#contacto` (`data-cta="agenda_reunion"`); `test` = «Evalúa tu cafetería en 2 minutos» → `/diagnostico` (`data-cta="diagnostico_hero_ab01"`). Código: `varianteAB()` en `src/lib/analitica.ts` y `Hero.tsx`. Diseño y criterio de cierre: `~/nutri-web-emilio/AB-01.md`.
- **Comedor:** `comedor_hero`, `comedor_que_incluye`, `comedor_menu_semanal`, `comedor_porciones`,
  `comedor_recien_hecho`, `comedor_turnos`, `comedor_pagos`, `comedor_cancelaciones`,
  `comedor_comunicacion`, `comedor_degustacion`, `comedor_tecnologia`, `comedor_cumplimiento`,
  `comedor_faq`, `comedor_cta_final`.
- **Colegios particulares:** `privadas_hero` (+ `cafeteria_que_vendemos`).

### CTAs con `data-cta`

`agenda_degustacion`, `agenda_reunion`, `agenda_visita`, `cotiza_evento`,
`whatsapp_hero`, `whatsapp_cta_final`, `whatsapp_contacto`, `whatsapp_footer`,
`whatsapp_diagnostico`, `whatsapp_revision_sep`, `solicita_anexo_cumplimiento`,
`cruce_a_comedor`. Para un botón nuevo basta agregar `data-cta="…"`.

## Embudo

1. **Visita** — `$pageview` por página de entrada (y canal: UTM / referrer).
2. **Interacción** — `seccion_vista` (qué secciones se leen), scroll depth,
   `cta_click`, `form_start`.
3. **Lead** — `form_submit` (contacto), `diagnostico_completado`,
   `whatsapp_click`.
4. **Cierre (fuera del sitio)** — el lead llega al CRM del ERP con el bloque
   «Origen web: enviado desde … · entrada … · referrer … · utm … · gclid … ·
   dispositivo …» en el campo de mensaje; las conversaciones de WhatsApp
   traen el código `[web:<página>]`. Con eso se cruza lead → oportunidad →
   contrato por página y canal.

Embudos sugeridos en PostHog:
- `$pageview (/comedores-escolares)` → `seccion_vista (comedor_pagos)` → `cta_click (agenda_degustacion)` → `form_submit (contacto)`.
- `$pageview (/cafeterias-escolares)` → `cta_click` → `form_start` → `form_submit`.
- `$pageview (/diagnostico)` → `form_start (diagnostico)` → `diagnostico_completado`.

## KPI semanales

- Leads por página de entrada y por canal (CRM + PostHog).
- Tasa visita→lead por página de servicio.
- Abandono de formulario: `form_start` sin `form_submit`.
- Secciones con más lectura en comedor (para ordenar la página).
- WhatsApp por código de origen.
