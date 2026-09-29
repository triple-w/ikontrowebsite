/* ==========================================================
   CONFIGURACIÓN CENTRAL DE iKONTROL
   Cambiar aquí la URL de ingreso y el WhatsApp principal.
   ========================================================== */
const IKONTROL_CONFIG = Object.freeze({
  loginUrl: "https://fc2.factucare.com",
  whatsappNumber: "524779194384",
  whatsappDefaultMessage: "Hola, me interesa conocer las soluciones de iKontrol para mi negocio."
});

/* Local event bridge. No analytics SDK, network request, form values or URL
   parameters are collected. Future consent-aware adapters can subscribe to
   window's "ikontrol:interaction" event and map names to GA4/Meta/Google Ads.
   contact_form_submit means a validated attempt, never a confirmed lead. */
const IKONTROL_EVENTS = new Set([
  "hero_find_solution", "hero_whatsapp", "solution_erp", "solution_pos",
  "solution_billing", "solution_security", "solution_hardware", "solution_custom",
  "ikontrol_landing", "ikontrol_demo", "services_click", "contact_whatsapp",
  "contact_form_submit", "client_login",
  "erp_hero_demo", "erp_whatsapp", "erp_modules_view", "erp_starter_interest",
  "erp_pro_interest", "erp_compare_view", "erp_screenshot_view", "erp_final_demo"
]);
window.ikontrolTrack = function (name) {
  if (!IKONTROL_EVENTS.has(name)) return;
  window.dispatchEvent(new CustomEvent("ikontrol:interaction", {
    detail: Object.freeze({ event: name, page: document.body.classList.contains("ik-erp") ? "erp" : "home" })
  }));
};

document.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("ik-b2")) initIkontrolB2();
  const isHome = document.body.classList.contains("ik-home") || document.body.classList.contains("ik-erp");
  if (isHome) {
    document.addEventListener("click", (event) => {
      const link = event.target.closest("[data-event]");
      if (link) window.ikontrolTrack(link.dataset.event);
    });
    // Enable the prepared form only after installing the submit guard. Without
    // JavaScript it stays disabled so a native GET cannot expose contact data.
    const homeForm = document.querySelector("[data-home-contact]");
    if (homeForm) {
      homeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (homeForm.checkValidity()) window.ikontrolTrack("contact_form_submit");
      });
    }
  }
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

  document.querySelectorAll(isHome ? ".ik-navbar a" : ".ik-navbar .nav-link").forEach((link) => {
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
        status.textContent = form.hasAttribute("data-home-contact")
          ? "Tu información no se ha enviado. El envío por formulario aún no está disponible; contáctanos por WhatsApp."
          : "El formulario está listo visualmente, pero aún necesita conectarse a un servicio de envío. Mientras tanto, contáctanos por WhatsApp.";
      }
    });
    if (form.hasAttribute("data-home-contact")) form.querySelector("fieldset").disabled = false;
  });
});

/* B2 keeps SassTech's AOS, GSAP/ScrollTrigger and CounterUp, without its demo
   initializers, custom cursor, smooth-scroll hijacking or unused sliders. */
function initIkontrolB2() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let animations;
  let counterObserver;
  const counter = document.querySelector("[data-b2-counter]");
  let counterStarted = false;

  if (window.AOS) window.AOS.init({ once: true, offset: 35, duration: 650 });

  const configureMotion = () => {
    animations?.revert();
    counterObserver?.disconnect();
    document.body.classList.toggle("b2-motion", !reducedMotion.matches);
    if (reducedMotion.matches) {
      if (counter && window.counterUp?.default) window.counterUp.default(counter, { action: "stop" });
      return;
    }

    if (window.gsap) {
      animations = window.gsap.context(() => {
        window.gsap.from("[data-hero-enter]", {
          y: 18, opacity: 0, duration: .65, stagger: .1, ease: "power2.out",
          clearProps: "opacity,transform"
        });
        window.gsap.from(".b2-hero-stage [data-screen-enter]", {
          y: 28, opacity: 0, duration: .9, stagger: .14, delay: .2,
          ease: "power2.out", clearProps: "opacity,transform"
        });
        if (window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);
          window.gsap.from(".b2-software-stage [data-screen-enter]", {
            y: 24, duration: .8, stagger: .12, ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: { trigger: ".b2-software-stage", start: "top 85%", once: true }
          });
          if (window.matchMedia("(min-width: 1200px) and (pointer: fine)").matches) {
            window.gsap.to(".b2-hero-stage .b2-screen-composition", {
              y: -12, ease: "none",
              scrollTrigger: { trigger: ".b2-hero", start: "top top", end: "bottom top", scrub: 1 }
            });
          }
        }
      });
    }
    if (counter && !counterStarted && window.counterUp?.default && "IntersectionObserver" in window) {
      counterObserver = new IntersectionObserver((entries) => {
        if (entries.some(entry => entry.isIntersecting)) {
          counterStarted = true;
          window.counterUp.default(counter, { duration: 1200, delay: 32 });
          counterObserver.disconnect();
        }
      }, { threshold: .8 });
      counterObserver.observe(counter);
    }
  };
  configureMotion();
  reducedMotion.addEventListener("change", configureMotion);

  const menu = document.getElementById("ikMainMenu");
  const toggle = document.querySelector(".navbar-toggler");
  menu?.addEventListener("shown.bs.collapse", () => toggle.setAttribute("aria-label", "Cerrar menú"));
  menu?.addEventListener("hidden.bs.collapse", () => toggle.setAttribute("aria-label", "Abrir menú"));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menu?.classList.contains("show") && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
      toggle.focus();
    }
  });
}
