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

  function switchLogoSize() {
    const parentWidth = document.querySelector(".first-screen-list").offsetWidth;
    let logoHeight = '';
    let logoSizePercentage = 15.5;
    let iconSizePercentage = 0.0;
    let scrollPosition = window.scrollY;
    if (scrollPosition > 250) {
      logoSizePercentage = 0.0;
      logoHeight = '0px'
      if (window.screen.width < 550) {
        iconSizePercentage = 10.0;
      } else {
        iconSizePercentage = 5.0;
      }
    } else if (scrollPosition < 210) {
      logoSizePercentage = 50.0;
      logoHeight = '';
      iconSizePercentage = 0.0;
    }
    let logoSize = (parentWidth * logoSizePercentage) / 100;
    let iconSize = (parentWidth * iconSizePercentage) / 100;
    document.querySelector(".first-screen-menu-logo a img").style.width = logoSize + 'px';
    document.querySelector(".first-screen-menu-logo-icon").style.width = (iconSize + 1.0) + 'px';
    document.querySelector(".first-screen-menu-logo-icon").style.maxWidth = (iconSize + 1.0) + 'px';
    document.querySelector(".first-screen-menu-logo-icon a img").style.width = iconSize + 'px';
    document.querySelector(".first-screen-menu-logo").style.height = logoHeight;
  }
  switchLogoSize();
  window.addEventListener('resize', function () {
    switchLogoSize();
  });
  window.addEventListener('scroll', function () {
    switchLogoSize();
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

