# Implementación de iKontrol ERP y ajustes finales de Home

## 1. Archivos creados y modificados

- `index.html`: destinos ERP corregidos, fondo inicial navy y ajuste del título/texto de trabajos reales. Se conserva la composición aprobada y el formulario.
- `ikontrol-erp.html`: nueva landing oficial, creada sobre el sistema visual compartido, sin copiar la antigua landing.
- `assets/css/ikontrol-erp.css`: estilos exclusivos de ERP, composición de screenshots, áreas, planes, comparación, proceso y responsive.
- `assets/js/ikontrol-erp.js`: configuración única de precios, tabs accesibles y observación de secciones para eventos.
- `assets/js/ikontrol.js`: incorpora ocho eventos ERP y distingue `page: erp` de `page: home`; conserva WhatsApp, acceso y protección del formulario.
- `assets/images/ikontrol/field/README.md` y README de cinco categorías: estructura/documentación para fotografías reales.
- `audit/erp/`: cinco capturas solicitadas y resultados JSON de pruebas.

`index-3.html` e `index-4.html` permanecen sin cambios durante esta fase. No se borraron assets ni se crearon respaldos del website.

## 2. Destinos corregidos en Home

Navegación ERP, tarjeta (imagen y CTA), teaser «Ver planes y versiones», bloque editorial de software y enlaces ERP del footer → `ikontrol-erp.html`.
El enlace de facturación → `ikontrol-erp.html#areas`, donde se puede seleccionar Fiscal.
La demostración continúa por WhatsApp. No quedan enlaces a `index-3.html` en Home.
Desde ERP, Inicio lleva a `index.html`; Soluciones, Servicios, Nosotros y Contacto a sus anchors de Home. ERP apunta al inicio de la propia landing.

## 3. Estructura de la landing

Hero con dashboard/Kanban; propuesta rápida de valor; problema de información dispersa; seis áreas interactivas; planes Starter/ERP Pro; comparación agrupada; crecimiento modular; tipos de negocio; galería real del sistema; implementación en seis pasos; desarrollo/adaptación; ocho preguntas frecuentes; CTA final; footer compartido.

## 4. Funciones presentadas

Comercial (clientes, prospectos, cotizaciones, propuestas, ventas), administración (pagos, cobranza, cuentas, bancos, caja), fiscal (CFDI, facturación, complementos, notas), inventarios/compras (productos, proveedores, costos, compras, inventarios, almacenes, movimientos), organización (tareas, Kanban, proyectos, calendario, recordatorios, archivos), información (dashboards, reportes, indicadores, seguimiento). Se utiliza exclusivamente el alcance proporcionado para esta fase.

## 5. Comparación Starter / ERP Pro

Starter: clientes, ventas, cotizaciones básicas, pagos/cobros, CFDI 4.0 y facturación. **El propietario confirmó durante esta fase que complementos de pago y notas de crédito también están incluidos**, y así aparecen en la tabla.
ERP Pro incluye las funciones operativas descritas. Personalización e integraciones aparecen «Según proyecto» en ambas versiones, sin prometer que estén incluidas en una mensualidad.
El resto de Starter figura «Por confirmar»: no se inventaron inclusiones ni exclusiones. No se usa «— no incluida» mientras una exclusión no esté confirmada. Esta es una desviación deliberada respecto al formato binario solicitado para preservar la exactitud comercial.

## 6. Precios

No hay precios confirmados para estos dos planes. La antigua página contiene importes históricos para otra oferta y timbres; no se reutilizaron como precios de Starter/ERP Pro.
Fuente única: `IKONTROL_ERP_PLANS` en `assets/js/ikontrol-erp.js`. `price: null` muestra «Consultar precio». Los marcadores internos `STARTER_PRICE_PENDING` y `ERP_PRO_PRICE_PENDING` nunca se imprimen al visitante. Al confirmar importes, actualizar `price` con texto completo, incluyendo periodicidad y condiciones fiscales aplicables.

## 7–8. Screenshots utilizados y descartados

- `screenshots/dashboard.PNG`: hero y galería; entorno de pruebas identificado en la captura.
- `screenshots/kabnan.PNG`: hero y galería. Se respeta el nombre real del archivo.
- `screenshots/plan-tareas.PNG`: galería de planeación.
- No se utiliza `cotizacion.PNG`: contiene información identificable y datos personales. El original no fue alterado ni borrado; excluirlo del despliegue público si no está autorizado.
- No existe captura oficial de clientes en el repositorio revisado.

No se inventó UI ni se alteró el contenido de las capturas. La navegación de galería tiene tabs con teclado, foco y estados ARIA. Las capturas bajo el primer pliegue usan carga diferida y dimensiones explícitas.

## 9. Animaciones e identidad

Se reutilizan Bootstrap, AOS, GSAP y ScrollTrigger locales de SassTech mediante la inicialización compartida de Home: entrada escalonada del hero y screenshots, reveal de secciones, transición de tabs y parallax moderado en escritorio. Se respeta `prefers-reduced-motion`.
No se carga el inicializador demo ni su preloader. El fondo inicial de HTML es navy; las hojas de estilo locales se cargan antes del contenido. No se introduce Fontshare ni otra fuente externa. Se conserva Segoe UI/Arial.
El header/footer comparten el logo oficial. La carpeta brand contiene únicamente `logo.png`, `icon.png` y `app-icon.png`, sin una versión horizontal apta para eliminar el fondo blanco. Se conserva la marca sin filtros, redibujos ni eliminación artificial del fondo. Para integrar el logo directamente sobre navy falta una versión oficial transparente/apta para fondo oscuro.

## 10. WhatsApp y formulario

Se conserva el número central `524779194384`. Los CTA abren mensajes codificados y diferenciados para Starter, ERP Pro y demostración, en nueva pestaña con `noopener noreferrer`.
No se conectó backend. El formulario de Home conserva validación y bloqueo de envío: informa explícitamente que la información no se envió. Sin JavaScript permanece deshabilitado para evitar un GET con datos personales. ERP dirige la conversión a WhatsApp y el enlace Contacto al formulario existente.

## 11. Tracking

Continúan los eventos B1/Home. Nuevos: `erp_hero_demo`, `erp_whatsapp`, `erp_modules_view`, `erp_starter_interest`, `erp_pro_interest`, `erp_compare_view`, `erp_screenshot_view`, `erp_final_demo`.
Los eventos de módulos/comparación se emiten al entrar la sección en viewport; módulos y capturas también al activar tabs. Cada observación de sección se registra una vez por carga. Payload únicamente `{event, page}` mediante `ikontrol:interaction`. No PII, SDK de analytics ni solicitudes de tracking externas.

## 12. SEO

Title y meta description solicitados, canonical `https://ikontrol.solutions/ikontrol-erp.html`, Open Graph básico, español, H1 único, headings semánticos, alt descriptivos y rutas relativas compatibles con `/website/`. No se añadieron ratings, ofertas ni schema comercial con datos no confirmados.

## 13–14. Responsive y pruebas

Chrome headless local, anchuras 1440, 1024, 768, 390 y 320. Pruebas de dimensiones del documento y elementos visibles, imágenes visibles, H1 único, errores JS y recursos HTTP. Sin overflow horizontal ni errores JS/HTTP registrados. Las imágenes de tabs ocultos se cargan al activarse: también se comprobó su decodificación.
Tabla de tres columnas con texto que se ajusta, contenedor accesible y tipografía móvil de 13 px; no se recortan columnas. Hero, capturas, planes y proceso se reorganizan en pantallas pequeñas.
Se probaron eventos y selección de áreas/capturas, número de WhatsApp, reduced motion, menú móvil con apertura y Escape, formulario válido sin envío y bloqueo sin JavaScript. Home no conserva enlaces a la antigua landing.
`node --check` para ambos JS y `git diff --check`. Hashes de index-3/index-4 iguales a los de inicio de fase.
Capturas: `erp-1440-full.png`, `erp-768-full.png`, `erp-390-full.png`, `erp-1440-hero.png`, `erp-1440-comparison.png` dentro de `audit/erp/`.

## 15. Pendientes y trabajos reales

- Confirmar precios, periodicidad, impuestos y condiciones de ambos planes.
- Confirmar inclusiones/exclusiones restantes de Starter. Hasta entonces la comparación no es completamente binaria.
- Confirmar requisitos de acceso/instalación y alcance contractual de soporte. FAQ evita inventarlos.
- Proporcionar logo horizontal oficial transparente o variante autorizada para fondo oscuro.
- No hay fotografías reales en `field/`. Copiarlas exactamente en:
  - `assets/images/ikontrol/field/security/`: Videovigilancia.
  - `assets/images/ikontrol/field/pos/`: Punto de venta.
  - `assets/images/ikontrol/field/hardware/`: Equipo de cómputo.
  - `assets/images/ikontrol/field/printing/`: Impresión.
  - `assets/images/ikontrol/field/installations/`: Instalaciones.
- La sección Home ya presenta el título y texto solicitados. El contenedor editorial `[data-field-gallery]` sigue oculto hasta recibir fotos autorizadas. La ilustración existente mantiene su leyenda explícita «Imagen ilustrativa», no se presenta como prueba de trabajo real. No hay logos/nombres de clientes inventados.
- Backend del formulario, URLs sociales oficiales y documentos legales siguen pendientes, fuera del alcance de esta fase.

No se continuó con otras páginas.
