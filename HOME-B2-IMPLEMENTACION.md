# iKontrol Solutions — Home B2

Fecha: 22 de septiembre de 2026. Home oficial implementada: `index.html`.
Estado: implementación local y capturas listas para auditoría visual; no se ha publicado en un servidor.

## 1. Archivos modificados

| Archivo | Trabajo de B2 |
| --- | --- |
| `index.html` | Sustituye la demo pública por la nueva composición B2, con contenido comercial de B1, assets oficiales, capturas reales, SEO y eventos. No es una copia de B1. |
| `assets/css/ikontrol-home.css` | Nuevo estilo exclusivo de `.ik-b2`: paleta, tipografía, composiciones de screenshots, directorio de soluciones, conexiones, experiencia editorial, contacto, responsive y movimiento. |
| `assets/js/ikontrol.js` | Inicialización B2 de AOS, GSAP/ScrollTrigger y CounterUp; reducción de movimiento y navegación por teclado. Conserva configuración y eventos B1. |
| `HOME-B2-IMPLEMENTACION.md` | Este reporte. |
| `audit/b2/*.png` | Capturas locales de hero y página completa en 1440, 768 y 390 px, más dos detalles móviles. |
| `audit/b2/checks.json` | Resultados de la auditoría automatizada en navegador. |

La raíz utilizada es `C:/Users/iKontrol/Documents/template/sasstechhtml-10/SassTech/ikontrowebsite`. No se crearon respaldos ni otra copia del website. Los archivos temporales de trabajo y del navegador se retiraron.

Los cambios de B1 que ya estaban sin commit (`index-4.html`, `assets/css/ikontrol.css` y `HOME-IMPLEMENTACION.md`) se conservaron; B2 no los editó. El JS sí recibe la nueva inicialización, condicionada a `.ik-b2`.

Los PNG oficiales fueron incorporados por el usuario durante esta fase. Se utilizan sin modificar, renombrar, recomprimir ni reemplazar los originales.

## 2. Estructura final de index.html

1. Header fijo: logo horizontal oficial sobre superficie blanca, navegación clara, CTA comercial y acceso secundario. Fondo navy translúcido al hacer scroll.
2. Hero navy con profundidad, retícula tenue y geometría; H1 con «control» en aqua; dashboard, Kanban y plan en capas.
3. Franja de experiencia: contador 18 y tres conceptos sin cifras.
4. Soluciones: necesidad + solución + destino. Software tiene mayor peso; las otras seis áreas forman un directorio compacto con iconos y líneas divisorias.
5. Gran bloque iKontrol: título, capacidades aprobadas, CTA y composición amplia de tres capturas reales.
6. Equipamiento: texto lateral y diagrama de operación/equipos, sin fotos genéricas.
7. Desarrollo: implementar → integrar → desarrollar, mediante nodos conectados.
8. Industrias: iconografía sobre fondo claro; sin nombres de clientes ni cantidades.
9. Experiencia: gran 18 estático y cuatro argumentos editoriales; no otra cuadrícula de tarjetas.
10. Soporte: franja contrastante, iconografía y CTA.
11. Contacto: propuesta, WhatsApp/datos a la izquierda y formulario preparado a la derecha.
12. Footer compacto: logo, navegación, soluciones, contacto, sistema y espacio legal sin enlaces ficticios.

La identidad visual se centraliza en custom properties: navy `#071f2b`, navy profundo `#04141e`, teal `#00958f`, aqua `#52d9ce`, blanco y superficies claras. Los tonos se apoyan en la identidad recibida; el logo conserva sus colores originales y no tiene filtros.

## 3. Componentes reutilizados de SassTech

Se inspeccionaron todas las páginas HTML existentes, sus secciones y los scripts/estilos del template. Referencias aprovechadas:

- `index-2.html`: banner oscuro a dos columnas, capas de fondo y transición hacia la siguiente sección.
- Demo original de `index.html`: roadmap, composición editorial, patrones de CTA y elementos decorativos.
- `index-5.html`: composición visual de aplicación/screenshots y proceso conectado.
- `app-intigration.html`: idea de conexiones entre tecnología y operación.
- `about.html`: tratamiento de experiencia y contadores.
- `contact.html`: distribución de información y formulario.
- Bootstrap local: grid, helpers responsive, formulario y Collapse del menú.
- AOS, GSAP, ScrollTrigger y CounterUp locales: movimiento y contador.
- `ikontrol.css`: primitives compartidos de B1, formulario, header y accesibilidad; B2 aplica sus overrides en archivo separado.

La Home no carga `main.js` ni `custom-gsap.js`: inicializan sliders/demo, cursor y ScrollSmoother que no corresponden a esta página. Se reutilizan sus librerías y patrones mediante una inicialización B2 pequeña y condicionada. No se añadieron librerías ni se eliminaron archivos del template.

Se mantuvo la familia visual de iconos de línea, implementada como SVG inline liviano para no depender del CDN de Phosphor. Son iconos funcionales; no recrean el logo ni interfaces.

## 4. Animaciones

| Elemento | Movimiento |
| --- | --- |
| Eyebrow, H1, texto, CTA y refuerzo del hero | GSAP: entrada progresiva de 18 px, 650 ms, stagger de 100 ms. Tras la entrada los CTA quedan estables. |
| Capturas del hero | GSAP: entrada escalonada, 900 ms, stagger de 140 ms. |
| Screenshots del bloque iKontrol | ScrollTrigger: entrada de 24 px al entrar al viewport. |
| Secciones, soluciones e iconos agrupados | AOS activa reveal suave y stagger moderado. El contenido no queda oculto si JS falla. |
| Contador 18 | CounterUp original, una vez al entrar en pantalla, 1200 ms. |
| Decoración | Desplazamiento suave de 6 px en órbitas/anillos; sin mover controles. |
| Composición del hero en desktop con puntero fino | Parallax limitado a 12 px, ScrollTrigger con scrub. |
| Header y hover | Transiciones de fondo, borde y sombra; iconos y flechas con movimiento pequeño. |

`prefers-reduced-motion` desactiva entradas, parallax y animaciones CSS. El contador presenta directamente 18; también se detiene si cambia la preferencia durante la sesión. Sin ScrollSmoother ni desplazamiento forzado del documento.

## 5. Assets utilizados

- `assets/images/ikontrol/brand/logo.png`: header y footer, 1800 × 600, sin alteraciones.
- `assets/images/ikontrol/brand/icon.png`: favicon, 561 × 578.
- `assets/images/ikontrol/brand/app-icon.png`: identidad de la aplicación en la solución destacada y referencia de icono de inicio, 494 × 534. Se omite visualmente en móvil para no sobrecargar.
- Fondos, conexiones y marcos: HTML/CSS, sin representar interfaces ficticias ni redibujar la marca.
- Iconografía SVG inline con tamaño reservado y `aria-hidden` cuando es decorativa.

No se generaron imágenes ni se añadieron fotos de stock.

## 6. Screenshots utilizados

| Archivo real recibido | Dimensiones | Uso y revisión |
| --- | --- | --- |
| `dashboard.PNG` | 1916 × 948 | Principal de hero y software. Marca iKontrol y entorno de pruebas; no se ven nombres/contactos de terceros. |
| `kabnan.PNG` | 1900 × 873 | Panel secundario de proyectos/tareas. Nombre recibido con esta ortografía; se respeta exactamente. |
| `plan-tareas.PNG` | 1640 × 441 | Panel de planeación de tareas. Sin información identificable de terceros observada. |

Se revisaron visualmente las tres capturas completas antes de utilizarlas. Se mantiene el contenido íntegro: no se borraron, pintaron, recortaron ni modificaron píxeles. Las capas pueden superponerse por composición; no se usaron recortes para ocultar datos. Todas incluyen alt, width y height reales. Hero prioritario/eager; imágenes debajo del fold con lazy loading.

Las cifras que aparecen dentro del dashboard son las de la captura recibida del entorno de pruebas, no nuevas métricas comerciales. La composición se etiqueta como captura real del entorno de pruebas.

## 7. Screenshots descartados y ausentes

- **`cotizacion.PNG`: descartada.** Contiene datos identificables de persona/empresa, direcciones, correo y firma. No se utiliza ni se enlaza desde la Home, y no se alteró para ocultarlos. El original recibido permanece en su carpeta; debe excluirse del paquete público al desplegar mientras contenga esos datos.
- **`clientes.png`: no recibido.** No se inventó un panel equivalente.
- `kanban.png` no existe con ese nombre: el archivo recibido es `kabnan.PNG` y se referencia respetando mayúsculas y ortografía, compatible con Linux.
- No se utilizó ninguna captura con NAVIKA ni material visual de clientes reales.

## 8. Responsive

- 1440 px: hero a dos zonas, capas amplias, soluciones en tres columnas con software destacado y contacto lateral.
- 1024 px: dos zonas del hero más compactas, menú colapsable y composiciones ajustadas.
- 768 px: hero y producto apilados, soluciones en dos columnas, industrias en cuatro columnas y contacto apilado.
- 390/320 px: H1 de escala moderada, botones cómodos a todo ancho, composición de capturas compacta, soluciones como lista visual, proceso vertical, industrias a dos columnas y campos apilados.
- Header con menú colapsable, nombre accesible, foco visible y cierre con Escape; también cierra al elegir navegación.
- Dimensiones reservadas en imágenes, escenas y contador para evitar saltos por carga. No se deforman los PNG.

Capturas para auditar:

- [Desktop 1440, completa](audit/b2/home-1440-full.png) · [Hero](audit/b2/home-1440-hero.png)
- [Tablet 768, completa](audit/b2/home-768-full.png) · [Hero](audit/b2/home-768-hero.png)
- [Móvil 390, completa](audit/b2/home-390-full.png) · [Hero](audit/b2/home-390-hero.png)
- [Detalle móvil: iKontrol](audit/b2/home-390-ikontrol.png) · [Detalle móvil: contacto](audit/b2/home-390-contacto.png)

## 9. WhatsApp

Se conserva `524779194384` y la configuración central de `IKONTROL_CONFIG`. Enlaces HTML de fallback reales, mensajes mediante `data-wa-message`, nueva pestaña con `noopener noreferrer`.

Demostración: «Hola, vi iKontrol en su página y me gustaría conocer el sistema.» Servicios y proyecto usan mensajes contextuales. Se verificaron número, construcción y codificación de URLs; no se enviaron mensajes reales.

## 10. Formulario

Mantiene nombre, empresa, teléfono/WhatsApp, correo, necesidad y descripción; siete opciones aprobadas. Validación HTML nativa, labels, autocomplete y límites de longitud.

No existe backend y no se conectó ninguno. El aviso es visible antes de introducir datos; al intentar enviar se indica que la información **no se ha enviado**. Los campos no se borran ni se afirma éxito. Sin JS, el fieldset queda deshabilitado para impedir un envío GET accidental. No se almacena información personal en eventos ni localStorage.

Pendiente: endpoint, destinatario/CRM, validación de servidor, antiabuso, privacidad aplicable, estados de error y éxito respaldados por respuesta real. La inicialización segura de B1 se conserva.

## 11. Tracking

Se conservan los 14 nombres:

`hero_find_solution`, `hero_whatsapp`, `solution_erp`, `solution_pos`, `solution_billing`, `solution_security`, `solution_hardware`, `solution_custom`, `ikontrol_landing`, `ikontrol_demo`, `services_click`, `contact_whatsapp`, `contact_form_submit`, `client_login`.

`data-event` delega los clics a `window.ikontrolTrack`. La lista permitida emite `ikontrol:interaction` con `{ event, page: "home" }`. Sin URLs, nombres, correos, teléfonos ni campos del formulario en el payload. Sin GA4, Meta Pixel o Google Ads.

`contact_form_submit` sigue significando intento validado, no lead recibido. No debe configurarse como conversión de contacto exitoso mientras no haya backend.

## 12. Fontshare y solución

`satoshi.css` usa fuentes remotas de Fontshare mediante URLs relativas al protocolo. El `main.css` global también importa varias familias de Google Fonts que esta Home no utiliza.

B2 deja de cargar ambos archivos en `index.html`; utiliza Bootstrap local, `ikontrol.css` y su hoja específica. La pila es `"Segoe UI", Arial, sans-serif`, coherente en títulos, cuerpo, controles y navegación. La Home no depende de una fuente remota ni incorpora otra dependencia externa.

No se modificaron las hojas globales ni las páginas demo para evitar una migración tipográfica imprevista del resto del sitio. Las pruebas de B2 registraron **cero solicitudes a Fontshare y cero hosts externos**.

## 13. Arquitectura y destinos

`index.html` es ahora la Home. Inicio usa `#inicio`; no hay enlaces de B2 a `index-4.html`. Canonical y `og:url`: `https://ikontrol.solutions/`. Recursos relativos, probados bajo `/website/index.html` y en `/` mediante servidor local.

| CTA | Destino |
| --- | --- |
| Encuentra tu solución | `#soluciones` |
| Software / Conocer iKontrol | `#ikontrol` |
| Punto de venta, autocobro, seguridad y hardware | `#equipamiento` |
| Facturación | `index-3.html#facturacion`, provisional |
| Desarrollo e integraciones | `#desarrollo` |
| Conoce iKontrol, bloque de producto | `index-3.html#myadmin`, provisional |
| Solicitar demostración | WhatsApp con mensaje aprobado |
| Cuéntanos tu proyecto | WhatsApp contextual |
| Conocer nuestros servicios | WhatsApp sobre soporte e infraestructura |
| Hablemos de lo que necesitas | `#contacto` |
| Hablar con un asesor / WhatsApp flotante | WhatsApp configurado |
| Ingresar | `https://fc2.factucare.com` |
| Teléfono | `tel:+524779194384` |

No se reconstruyó ni editó `index-3.html`. Hash Git antes/después: `e89df4364d2c25ddb3e93ef688b679ec2f28b996`.
`index-4.html` permanece como referencia B1: hash antes/después de B2 `13d73894ec6800dfc9fede4953a11b0cd34348e1`.

Las variantes siguen existiendo físicamente como referencias; no se añadieron redirecciones globales ni se modificó configuración del servidor. Los enlaces de regreso dentro de `index-3.html` se mantienen tal como estaban por la instrucción explícita de no editarlo; se actualizarán al abordar esa landing.

## 14. Assets recomendados para otra fase

- Foto oficial de una instalación de punto de venta: equipo, impresora, báscula/escáner, fondo limpio y sin clientes ni información en pantallas. Puede sustituir el diagrama lateral de equipamiento.
- Captura de clientes y nueva cotización con datos de demostración no identificables, tomadas directamente del software.
- Exportación oficial del logo con transparencia, si se desea integrarlo directamente al fondo navy. No se fabricó una versión ni se eliminó el fondo de los archivos recibidos.
- Imagen Open Graph aprobada para compartir la Home. No se inventó una imagen social.

## 15. Pruebas realizadas

- Chrome headless, servidor HTTP local y resolución de assets sensible a mayúsculas, como un despliegue Linux.
- Anchos 1440, 1024, 768, 390 y 320; sin desbordamiento horizontal ni desbordamientos detectados en títulos, botones, soluciones y campos.
- Anchors internos completos; PNG visibles cargados con dimensiones correctas. El app-icon del panel destacado queda oculto en móvil y su lazy loading no necesita dispararse allí.
- Inspección visual de capturas desktop/tablet/móvil y página completa. Ajustes en altura de escenas y separación de paneles antes de generar los archivos finales.
- Menú: abre, cierra por Escape y por navegación. Foco visible en controles.
- Contador termina en 18; reducción de movimiento desactiva decoración/entradas y mantiene la cifra.
- Los 14 nombres de evento se verificaron con clics e intento de formulario; nombres no permitidos se ignoran. Payload sin PII.
- Formulario: rechaza campos vacíos, conserva bloqueo de envío y aviso de no envío tras datos válidos. Sin JS queda deshabilitado.
- Sin excepciones JS, errores HTTP locales ni fallos de carga en B2; cero hosts externos en la ejecución final.
- Sintaxis JS con `node --check`, integridad de anchors/rutas y `git diff --check`.
- `index-3.html` y `index-4.html` sin cambios respecto al inicio de B2.

La evidencia estructurada está en [checks.json](audit/b2/checks.json). Las pruebas no sustituyen recepción real en WhatsApp, una auditoría Lighthouse ni pruebas físicas en Safari/iOS.

## 16. Pendientes

- Aprobación visual B2 a partir de las capturas y del HTML real.
- Backend del formulario: fuera de alcance por instrucción.
- URLs oficiales de Facebook/Instagram y textos legales. No se muestran enlaces sociales ficticios ni se enlaza el aviso demo.
- Capturas adicionales y fotografía de equipamiento, según lo descrito.
- Excluir del despliegue la cotización descartada con datos de terceros; no está enlazada en B2.
- Publicación y configuración real del dominio. Confirmar vigencia de dirección, teléfono y acceso heredados antes de publicar.
- Reconstrucción de la landing iKontrol y actualización de sus regresos a Inicio: fase posterior, no realizada.

No se continuó automáticamente con otras páginas.
