/* Only confirmed prices belong here. Pending markers never appear in the UI. */
const IKONTROL_ERP_PLANS = Object.freeze({
  starter: { price: null, status: 'STARTER_PRICE_PENDING' },
  pro: { price: null, status: 'ERP_PRO_PRICE_PENDING' }
});
document.querySelectorAll('[data-plan-price]').forEach(el => {
  el.textContent = IKONTROL_ERP_PLANS[el.dataset.planPrice].price || 'Consultar precio';
});
document.querySelectorAll('[role="tablist"]').forEach(list => {
  const tabs = [...list.querySelectorAll('[role="tab"]')];
  function activate(tab, focus = false) {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
    if (focus) tab.focus();
    window.ikontrolTrack(list.classList.contains('erp-shot-tabs') ? 'erp_screenshot_view' : 'erp_modules_view');
    window.ScrollTrigger?.refresh();
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      let target;
      if (['ArrowRight', 'ArrowDown'].includes(event.key)) target = (i + 1) % tabs.length;
      if (['ArrowLeft', 'ArrowUp'].includes(event.key)) target = (i - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = tabs.length - 1;
      if (target !== undefined) { event.preventDefault(); activate(tabs[target], true); }
    });
  });
});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      window.ikontrolTrack(entry.target.dataset.viewEvent);
      observer.unobserve(entry.target);
    }
  }), { threshold: 0, rootMargin: '0px 0px -100px 0px' });
  document.querySelectorAll('[data-view-event]').forEach(el => observer.observe(el));
}
