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
      setTimeout(function() {
        window.scrollTo({
          top: destination,
          behavior: 'smooth'
        });
      }, 50);
  });
});

  function adjustFontSize() {
    const parentWidth = document.querySelector(".first-screen-list").offsetWidth;
    let fontSizePercentage = 19.5;
      let scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        fontSizePercentage = 12;
      } else {
        fontSizePercentage = 19.5;
      }
      let fontSize = (parentWidth * fontSizePercentage) / 100;
      document.querySelector(".first-screen-menu-logo a").style.fontSize = fontSize + 'px';
    }
  adjustFontSize();
  window.addEventListener('resize', function () {
    adjustFontSize();
  });
  window.addEventListener('scroll', function () {
    adjustFontSize();
  });
  const objToStick = document.querySelector(".first-screen-body");
  if (objToStick) {
    let topOfObjToStick = objToStick.offsetTop;
      window.addEventListener("scroll", function () {
        let windowScroll = window.scrollY || window.pageYOffset;
          if (windowScroll > topOfObjToStick) {
              objToStick.classList.add("active");
          } else {
              objToStick.classList.remove("active");
          }
      });
  }
});

