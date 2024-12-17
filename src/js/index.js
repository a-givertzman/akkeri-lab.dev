document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    disable: 'mobile'
  });
  AOS.init({
    disable: function disable() {
      var maxWidth = 768;
      return window.innerWidth < maxWidth;
    },
    offset: 200,
    duration: 1000,
    easing: 'ease',
    delay: 100,
    once: true
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const elementClick = this.getAttribute('href');
      const destination = document.querySelector(elementClick).offsetTop - document.querySelector('.first-screen-body').offsetHeight;
      setTimeout(function () {
        window.scrollTo({
          top: destination,
          behavior: 'smooth'
        });
      }, 50);
    });
  });

  const nav = document.querySelector(".first-screen-body");
  const logo = document.querySelector(".first-screen-menu-logo");
  const navOffset = nav.getBoundingClientRect().top + window.scrollY;
  const placeholder = document.createElement('div');
  const navMarginBottom = parseInt(window.getComputedStyle(nav).marginBottom);

  placeholder.style.height = `${nav.offsetHeight + navMarginBottom}px`;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= navOffset) {
      nav.classList.add("active");
      nav.style.transition = "box-shadow 0.3s ease-in";
      nav.parentNode.insertBefore(placeholder, nav);
      logo.classList.add("logo-active");
    } else {
      nav.classList.remove("active");
      logo.classList.remove("logo-active");

      nav.style.transition = "none";
      if (placeholder.parentNode) {
        placeholder.parentNode.removeChild(placeholder);
      }
    }
  });
});