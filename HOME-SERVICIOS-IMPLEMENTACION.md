# Home comercial de iKontrol Solutions

## Resultado y alcance

Se rediseñó `index.html` para presentar a la empresa y sus servicios. Se conserva la identidad navy/turquesa, el header responsive, las dependencias locales del template y la funcionalidad existente. La Home no incluye precios ni una comparación Starter/ERP Pro.

Esta entrega reemplaza visualmente a B2 en `index.html`. Los reportes y capturas de B2 permanecen como evidencia de esa fase anterior.

## Archivos de esta fase

- `index.html`: estructura, textos, imágenes, enlaces y metadata actualizados.
- `assets/css/ikontrol-home.css`: estilos de la composición comercial, bajo `.ik-commercial`, y ajustes para desktop, tablet y móvil.
- `assets/images/ikontrol/optimized/`: 14 derivados JPEG (600 y 1200 px) de las siete piezas promocionales. Originales PNG intactos. Compresión de calidad 88, sin retoques, cambios de contenido ni nuevos elementos.
- `audit/home-services/`: capturas finales de hero y página completa a 1440, 768 y 390 px, más `checks.json`.
- Este reporte.

`assets/js/ikontrol.js` se reutiliza sin cambios en esta fase: conserva animaciones, WhatsApp, formulario y tracking. Los selectores de las composiciones siguen siendo compatibles. `assets/css/ikontrol.css` tampoco cambió durante esta fase.

## Estructura

1. Header fijo: Inicio, Soluciones, iKontrol ERP, Servicios, Nosotros, Contacto, asesor e ingreso.
2. Hero de ecosistema: tecnología empresarial, composición de punto de venta/videovigilancia y CTA de asesoría/WhatsApp.
3. Franja de experiencia: 18 años, venta/instalación, configuración/soporte y soluciones a la medida.
4. Siete servicios visuales: ERP, kits PDV, cómputo, impresoras, rollos, cámaras e instalación.
5. Teaser de ERP: resumen breve, una captura real, enlace de planes/versiones y demostración.
6. Servicios editoriales: software, punto de venta, facturación, seguridad, equipamiento, impresión, soporte y desarrollo.
7. Implementación: elección, instalación/configuración y acompañamiento. Espacio preparado para galería real, pendiente de fotografías verificadas.
8. Por qué iKontrol: siete argumentos claros, sin cifras ni testimonios nuevos.
9. Sobre nosotros: presentación breve de empresa y experiencia.
10. CTA final fuerte.
11. Contacto y formulario seguro.
12. Footer con navegación, servicios, ERP, teléfono y acceso al sistema.

## Imágenes integradas

| Imagen original | Uso |
| --- | --- |
| `kit-pdv.png` | Hero y tarjeta de punto de venta. |
| `camaras.png` | Composición secundaria del hero y tarjeta de cámaras. |
| `ikontrol-erp.png` | Pieza promocional de la tarjeta ERP. No se describe como screenshot real. |
| `venta-equipo.png` | Tarjeta de computadoras. |
| `impresoras.png` | Tarjeta de impresoras de ticket. |
| `rollos-termicos.png` | Tarjeta de insumos. |
| `instalacion.png` | Tarjeta de instalación y bloque de implementación, identificado como ilustrativo. |
| `screenshots/dashboard.PNG` | Captura real del entorno de pruebas, exclusivamente en el teaser ERP. |
| `brand/logo.png`, `brand/icon.png`, `brand/app-icon.png` | Identidad oficial y referencias de iconos existentes. Sin recoloración. |

Las imágenes promocionales se encuadran mediante CSS para destacar los equipos, evitando convertir cada tarjeta en un cartel completo repetido. La tarjeta ERP conserva la composición promocional completa. Se usan dimensiones, `srcset`, `sizes`, carga prioritaria del visual principal y lazy loading debajo del primer bloque. Los originales no fueron recortados ni sobrescritos.

No se utilizaron `cotizacion.PNG` (datos de terceros, ya identificados en B2), fotos genéricas del template ni logotipos inventados de clientes.

## Trabajo real: pendiente explícito

En la carpeta disponible se encontraron piezas promocionales y screenshots, pero no un conjunto de fotos originales verificables de instalaciones, clientes o trabajo en campo. Se solicitó su ubicación durante la implementación.

No se presentó una imagen promocional como evidencia de un trabajo realizado. El bloque muestra cómo se acompaña la implementación y etiqueta su imagen como ilustrativa. El contenedor `data-field-gallery` permanece oculto y preparado para fotografías autorizadas; no hay placeholders visibles ni una falsa galería de clientes.

Para completar este punto se necesitan fotos reales de instalaciones/equipos y, si se desea, logos autorizados. Conviene indicar qué se muestra y confirmar que se pueden publicar, sin pantallas con información personal ni datos de terceros.

## CTA y destinos

- Solicitar asesoría (hero y cierre): `#contacto`.
- Explora nuestras soluciones: `#soluciones`; conserva `hero_find_solution` con su significado original.
- Hablar por WhatsApp: número existente `524779194384`.
- ERP (tarjeta, teaser y footer): `index-3.html#myadmin`, destino provisional hasta la landing ERP definitiva.
- Facturación editorial: `index-3.html#facturacion`, provisional.
- Conocer más de cada equipo/instalación: WhatsApp con mensaje contextual. Sus imágenes llevan al formulario, salvo ERP que abre su landing.
- Demostración: WhatsApp con el mensaje aprobado de B2.
- Servicios/desarrollo: secciones internas o WhatsApp contextual.
- Ingresar: `https://fc2.factucare.com`.
- Teléfono: `tel:+524779194384`.

El texto «Ver planes y versiones» queda preparado hacia la página de software existente; ésta no fue reconstruida ni se afirma que ya contenga la nueva comparación Starter/ERP Pro.

No se encontraron URLs oficiales verificadas de Facebook/Instagram: no se añadieron enlaces ficticios. Los espacios legales continúan preparados; no se enlazaron políticas demo.

## Funcionalidad y animación

- Bootstrap Collapse, AOS, GSAP/ScrollTrigger y CounterUp locales, sin nuevas dependencias.
- Entrada suave del hero, composición escalonada, reveal por sección, hover de imagen y contador 18.
- Movimiento reducido según preferencia del sistema. Los botones no se desplazan durante la interacción.
- Los 14 eventos anteriores se mantienen. Payload exclusivo `{event, page}`; no hay datos personales ni analytics externos.
- Formulario con validación y aviso de que no se envía: sin backend, sin simulación de éxito y deshabilitado si no carga JavaScript.
- Sin solicitudes a Fontshare ni carga de fuentes/CDN externos.

## Verificación

Se comprobó en Chrome con servidor HTTP bajo `/website/index.html`, a 1440, 1024, 768, 390 y 320 px:

- siete servicios presentes y un único H1;
- anchors completos e imágenes visibles cargadas;
- ausencia de desbordamiento horizontal y de títulos/botones/campos;
- menú móvil, eventos, URLs de WhatsApp y bloqueo del formulario;
- preferencia de movimiento reducido y formulario sin JS;
- ausencia de errores JS y solicitudes externas;
- inspección visual de hero y página completa.

Las capturas están en `audit/home-services/`, diferenciadas de las capturas B2 anteriores. No se enviaron mensajes reales ni se conectó un backend. No se realizó despliegue ni prueba en dispositivos físicos.

`index-3.html` permanece intacto: `e89df4364d2c25ddb3e93ef688b679ec2f28b996`.
`index-4.html` permanece intacto respecto al inicio de esta fase: `13d73894ec6800dfc9fede4953a11b0cd34348e1`.

## Pendientes

1. Fotos originales para completar la galería de trabajos reales.
2. URLs oficiales de redes y documentos legales aprobados.
3. Landing ERP definitiva; no se tocó en esta fase.
4. Backend del formulario, cuando se autorice e implemente.

La Home está implementada para revisión local. El apartado de evidencia fotográfica real queda condicionado a recibir esos materiales, sin sustituirlos por trabajos ficticios.
