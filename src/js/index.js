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

  function adjustFontSize() {
    const parentWidth = document.querySelector(".first-screen-list").offsetWidth;
    let imageSizePercentage = 15.5;
    let scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      imageSizePercentage = 15.5;
    } else {
      imageSizePercentage = 50;
    }
    let imageSize = (parentWidth * imageSizePercentage) / 100;
    document.querySelector(".first-screen-menu-logo a img").style.width = imageSize + 'px';
  }
  adjustFontSize();
  window.addEventListener('resize', function () {
    adjustFontSize();
  });
  window.addEventListener('scroll', function () {
    adjustFontSize();
  });
  const objToStick = document.querySelector(".first-screen-body");
  const objToHide = document.querySelector(".first-screen__theses");
  if (objToStick) {
    let topOfObjToStick = objToStick.offsetTop;
    window.addEventListener("scroll", function () {
      let windowScroll = window.scrollY || window.pageYOffset;
      if (windowScroll > topOfObjToStick) {
        objToStick.classList.add("active");
        objToHide && objToHide.classList.add("hide");
      } else {
        objToStick.classList.remove("active");
        objToHide && objToHide.classList.remove("hide");
      }
    });
  }
});

