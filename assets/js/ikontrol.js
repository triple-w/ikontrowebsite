/* ==========================================================
   CONFIGURACIÓN CENTRAL DE iKONTROL
   Cambiar aquí la URL de ingreso y el WhatsApp principal.
   ========================================================== */
const IKONTROL_CONFIG = Object.freeze({
  loginUrl: "https://fc2.factucare.com",
  whatsappNumber: "524779194384",
  whatsappDefaultMessage: "Hola, me interesa conocer las soluciones de iKontrol para mi negocio."
});

document.addEventListener("DOMContentLoaded", () => {
  const buildWhatsAppUrl = (message) =>
    `https://wa.me/${IKONTROL_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

  document.querySelectorAll("[data-login-link]").forEach((link) => {
    link.href = IKONTROL_CONFIG.loginUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    const message = link.dataset.waMessage || IKONTROL_CONFIG.whatsappDefaultMessage;
    link.href = buildWhatsAppUrl(message);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const header = document.querySelector(".ik-header");
  const updateHeader = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  document.querySelectorAll(".ik-navbar .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.querySelector(".ik-navbar .navbar-collapse.show");
      if (menu && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  /* FORMULARIO:
     Este bloqueo evita fingir un envío. Sustituir este listener por la
     conexión real a PHP, API, CRM o servicio de correo. */
  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector(".ik-form-status");
      if (status) {
        status.style.display = "block";
        status.textContent = "El formulario está listo visualmente, pero aún necesita conectarse a un servicio de envío. Mientras tanto, contáctanos por WhatsApp.";
      }
    });
  });
});
