# Home comercial de iKontrol Solutions

Fecha: 22 de septiembre de 2026. Alcance: `index-4.html`, sin publicación ni cambios en otras páginas.

## 1. Copia y archivos

Raíz Git utilizada: `C:/Users/iKontrol/Documents/template/sasstechhtml-10/SassTech/ikontrowebsite`.
La copia de la carpeta superior no se editó. El árbol estaba limpio al comenzar.

| Archivo | Cambio |
| --- | --- |
| `index-4.html` | Home comercial, navegación, necesidades, soluciones, producto, acompañamiento, sectores, experiencia, servicios, contacto y footer. SEO básico, semántica y atributos de eventos. |
| `assets/css/ikontrol.css` | Estilos adicionales limitados a `.ik-home`: composición tecnológica, producto, tarjetas, responsive, foco visible, animación progresiva y reducción de movimiento. |
| `assets/js/ikontrol.js` | Puente local de eventos, instrumentación exclusiva de la Home y protección del formulario. Conserva configuración de WhatsApp/login y comportamiento de otras páginas. |
| `HOME-IMPLEMENTACION.md` | Este reporte y los puntos de conexión pendientes; añadido para documentar la entrega. |

`index-3.html` permanece intacto. Hash Git antes/después: `e89df4364d2c25ddb3e93ef688b679ec2f28b996`.

## 2. Template reutilizado y contenido retirado

Se reutilizan Bootstrap, tipografía, paleta, gradientes, navegación colapsable, botones, tarjetas, paneles, formulario, footer, AOS y componente de retorno al inicio. Se conservan las dependencias existentes que usa `main.js`; no se eliminaron archivos globales ni se añadió un framework o biblioteca.

Se retiraron de esta Home: dashboard ilustrado, cifras de 500 clientes/15 años de facturación, nombres de clientes, afirmaciones de cobertura/horarios no solicitadas, catálogo anterior, placeholders visibles de máquinas de autocobro, mapa decorativo, cursor y preloader. Autocobro sigue como área de solución. No hay dashboards, testimonios ni imágenes generadas.

## 3. Destinos de CTA

| Ubicación / CTA | Destino |
| --- | --- |
| Inicio / logo | `#inicio` |
| Navegación Soluciones, iKontrol, Servicios, Nosotros, Contacto | `#soluciones`, `#ikontrol`, `#servicios`, `#nosotros`, `#contacto` |
| Header: Hablar con un asesor | WhatsApp configurado |
| Hero: Encuentra tu solución | `#soluciones` |
| Hero: Hablar con un asesor | WhatsApp configurado |
| Administrar: Conocer iKontrol | `#ikontrol` |
| Vender: Ver soluciones de venta | `#punto-de-venta` |
| Facturar: Conocer Facturación | `index-3.html#facturacion` |
| Proteger: Ver soluciones de seguridad | `#seguridad` |
| Equipar: Ver equipos y servicios | `#servicios` |
| Necesidad especial: Cuéntanos tu proyecto | WhatsApp, mensaje sobre un proyecto para el negocio |
| Producto: Descubre iKontrol | `index-3.html#myadmin` |
| Producto: Solicitar demostración | WhatsApp: «Hola, vi iKontrol en su página y me gustaría conocer el sistema.» |
| Conocer nuestros servicios | WhatsApp, mensaje sobre soporte e infraestructura |
| CTA final: Hablar con un asesor por WhatsApp | WhatsApp configurado |
| CTA final: Enviar mi información | `#contacto` |
| Contacto / footer / botón flotante: WhatsApp | WhatsApp configurado |
| Ingresar, header y footer | `https://fc2.factucare.com` |
| Teléfono | `tel:+524779194384` |
| Soluciones del footer | Secciones internas de software, venta, facturación, autocobro, seguridad, servicios y adaptación |
| Quiero que me contacten | Validación local y aviso de que los datos NO se enviaron |
| Volver arriba / Saltar al contenido | Inicio del documento / `#contenido` |

No existen páginas específicas verificadas de servicios, POS o seguridad: se utilizan secciones o una conversación contextual, sin crear landings ni rutas ficticias.

## 4. Formulario

No había backend, endpoint ni envío funcional. Se conserva el bloqueo de envío y se incluyen los seis campos y las siete opciones solicitadas. Nombre, empresa, teléfono, correo, necesidad y descripción tienen validación nativa; autocomplete y límites de longitud donde aplican.

Un aviso visible informa de la indisponibilidad antes de llenar datos. Tras un intento válido se muestra «Tu información no se ha enviado…», sin borrar campos, enviar peticiones, almacenar datos ni simular éxito. Sin JavaScript, el fieldset queda deshabilitado para impedir el GET nativo con datos personales en la URL.

Para conectarlo: definir endpoint y destinatario/CRM, publicar aviso de privacidad aplicable, implementar validación de servidor y protección antiabuso; sustituir el listener de bloqueo **sólo para `[data-home-contact]`** por el envío real; gestionar errores y confirmar éxito únicamente tras respuesta válida. Actualizar el aviso inicial y habilitar el modo sin JS sólo si se configura un `action`/`method` real y seguro.

## 5. WhatsApp

Se reutiliza `524779194384`, centralizado en `IKONTROL_CONFIG`. Los enlaces conservan fallback HTML real, se configuran al cargar y usan `noopener noreferrer` al abrir una pestaña. Mensajes contextuales mediante `data-wa-message`. Se verificaron URLs y codificación; no se enviaron mensajes ni se probó la recepción del negocio.

## 6. Eventos

Implementados: `hero_find_solution`, `hero_whatsapp`, `solution_erp`, `solution_pos`, `solution_billing`, `solution_security`, `solution_hardware`, `solution_custom`, `ikontrol_landing`, `ikontrol_demo`, `services_click`, `contact_whatsapp`, `contact_form_submit`, `client_login`.

`data-event` identifica los clics. `window.ikontrolTrack(nombre)` acepta exclusivamente nombres permitidos y emite el CustomEvent `ikontrol:interaction` en `window`. Payload: `{ event: nombre, page: "home" }`. No contiene valores de formulario, teléfono, correo, URL ni parámetros. No hay almacenamiento, SDK, cola ilimitada ni solicitudes de analítica.

Ejemplo de punto de conexión futuro:

```js
window.addEventListener('ikontrol:interaction', ({ detail }) => {
  // Conectar aquí adaptadores y consentimiento aplicable para GA4, Meta o Ads.
  // Utilizar exclusivamente detail.event y detail.page.
});
```

`contact_form_submit` significa intento validado, NO lead recibido ni conversión exitosa. No mapearlo a una conversión de contacto confirmado mientras no exista backend. Ausencia de proveedores de analítica: sin errores.

## 7. Assets y placeholders

Se reutilizan `assets/images/ikontrol/logo.svg` e `icon.svg`. Su README los identifica como temporales: sustituir posteriormente por archivos oficiales de iKontrol Solutions. No se modificaron estos recursos compartidos.

No se encontraron capturas reales de iKontrol. El panel del producto muestra un resumen de áreas, no una pantalla ficticia; un comentario identifica dónde insertar una captura validada, manteniendo columna, proporciones, dimensiones y lazy loading. Tampoco se agregaron fotos de stock ni de máquinas inexistentes. Las cuatro categorías de experiencia pueden evolucionar a casos autorizados.

## 8. Datos por confirmar

- Logo e icono oficiales y capturas reales autorizadas.
- URLs oficiales de Facebook e Instagram: no encontradas; se muestran como pendientes, sin enlaces. YouTube y LinkedIn no se enlazan.
- Aviso de privacidad y términos aplicables: el archivo `policy-privacy.html` sigue siendo demo y no se enlaza. Footer preparado, sin políticas inventadas.
- Confirmar vigencia de la dirección existente Júpiter 407, León, Guanajuato, y del número/login heredados antes de publicar.
- Los 18 años y el alcance funcional de esta Home provienen del brief. La landing existente usa «MyAdmin»: se conserva como destino provisional hasta la fase de producto solicitada.

## 9. SEO y arquitectura

Title, descripción, un único H1 solicitado, H2 por sección y H3 por concepto; idioma español, landmarks, labels, alt del logo y navegación por anchors reales. Open Graph: tipo, idioma, nombre, título y descripción. No se inventa imagen social.

Se prepara mediante comentario `canonical`/`og:url` para `https://ikontrol.solutions/`; no se activan mientras ésta no sea la Home publicada. Recursos y links entre páginas son relativos y fueron probados bajo `/website`. No se cambia `index.html`, routing, despliegue ni la entrada del servidor: decidir cómo publicar `index-4.html` en `/` corresponde a una fase posterior y podría afectar al resto del sitio.

## 10. Pruebas

- Chrome headless con servidor HTTP local bajo `/website/index-4.html`, anchos 1440, 1024, 768, 390 y 320 px, altura 900 px.
- En los cinco tamaños, ancho del documento igual al ancho disponible: sin scroll horizontal. Tarjetas, títulos y botones sin desbordamientos detectados.
- Inspección visual de capturas de hero en desktop y móvil. Menú móvil abre y cierra al elegir un anchor.
- Todos los anchors internos resuelven; logos cargan, incluido footer al hacer scroll (lazy loading).
- Clics instrumentados: 13 nombres de clic; intento de formulario: evento número 14. Nombres inválidos se ignoran, payload sin datos personales.
- Formulario con datos de prueba: aviso de no envío y ninguna petición de formulario. JavaScript deshabilitado: fieldset deshabilitado y composición del hero visible.
- URLs de WhatsApp: número configurado correcto en todos los enlaces y mensaje de demo correctamente codificado.
- Sin excepciones JS ni respuestas HTTP >= 400 observadas durante las pruebas. `node --check assets/js/ikontrol.js` y `git diff --check` pasan.
- Hash de `index-3.html` idéntico antes/después. Ninguna otra página modificada.

Las pruebas no equivalen a recepción real de WhatsApp, backend operativo, auditoría Lighthouse ni validación en Safari/dispositivos físicos.

## 11. Pendientes

Backend del formulario, materiales oficiales, URLs sociales, textos legales y publicación/routing final. El template conserva fuentes externas de Google/Fontshare e iconos de unpkg; requieren conectividad y pueden cargar con retraso o usar fallback. Menú y botón flotante tienen indicadores independientes del CDN. No se emprendió optimización global de estas dependencias compartidas para evitar efectos en otras páginas.

La fase termina en esta Home. No se continuó automáticamente con ninguna otra página.
