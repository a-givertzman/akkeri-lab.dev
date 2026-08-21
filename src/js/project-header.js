document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.project-header');
  const burger = document.getElementById('projectHeaderBurger');
  const nav = document.getElementById('projectHeaderNav');
  const overlay = document.getElementById('projectHeaderOverlay');
  if (!header || !burger || !nav || !overlay) return;
  let scrollPosition = 0;
  const openMenu = () => {
    scrollPosition = window.scrollY;
    header.classList.add('project-header--open');
    document.documentElement.classList.add('project-menu-open');
    document.body.classList.add('project-menu-open');
    document.body.style.top = `-${scrollPosition}px`;
    burger.setAttribute('aria-expanded', 'true');
  };
  const closeMenu = () => {
    header.classList.remove('project-header--open');
    document.documentElement.classList.remove('project-menu-open');
    document.body.classList.remove('project-menu-open');
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition);
    burger.setAttribute('aria-expanded', 'false');
  };
  burger.addEventListener('click', () => {
    if (header.classList.contains('project-header--open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  overlay.addEventListener('click', closeMenu);
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
});