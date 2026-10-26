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
