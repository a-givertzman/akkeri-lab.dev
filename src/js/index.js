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

  const objToStick = document.querySelector(".first-screen-body");
  const objToStick_logo = document.querySelector(".first-screen-menu-logo");

  if (objToStick && objToStick_logo) {
    let topOfObjToStick = objToStick.offsetTop;
    window.addEventListener("scroll", function () {
      if (window.scrollY >= topOfObjToStick) {
        objToStick.classList.add("active");
        objToStick_logo.classList.add("logo-active");
      } else {
        objToStick.classList.remove("active");
        objToStick_logo.classList.remove("logo-active");
      }
    });
  }
});