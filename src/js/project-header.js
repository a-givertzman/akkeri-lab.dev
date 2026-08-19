document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.project-header');
    const burger = document.getElementById('projectHeaderBurger');
    const nav = document.getElementById('projectHeaderNav');
    if (!header || !burger || !nav) return;
    // Открытие / закрытие меню
    burger.addEventListener('click', () => {
      const isOpen = header.classList.toggle('project-header--open');
      burger.setAttribute('aria-expanded', isOpen);
    });
    // Закрываем меню после выбора раздела
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        header.classList.remove('project-header--open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  });