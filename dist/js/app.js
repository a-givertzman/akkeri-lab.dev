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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgQU9TLmluaXQoe1xyXG4gICAgZGlzYWJsZTogJ21vYmlsZSdcclxuICB9KTtcclxuICBBT1MuaW5pdCh7XHJcbiAgICBkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xyXG4gICAgICB2YXIgbWF4V2lkdGggPSA3Njg7XHJcbiAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA8IG1heFdpZHRoO1xyXG4gICAgfSxcclxuICAgIG9mZnNldDogMjAwLFxyXG4gICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICBlYXNpbmc6ICdlYXNlJyxcclxuICAgIGRlbGF5OiAxMDAsXHJcbiAgICBvbmNlOiB0cnVlXHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJykuZm9yRWFjaChhbmNob3IgPT4ge1xyXG4gICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBlbGVtZW50Q2xpY2sgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudENsaWNrKS5vZmZzZXRUb3AgLSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlyc3Qtc2NyZWVuLWJvZHknKS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgIHRvcDogZGVzdGluYXRpb24sXHJcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICB9KTtcclxuICAgICAgfSwgNTApO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbiAgZnVuY3Rpb24gYWRqdXN0Rm9udFNpemUoKSB7XHJcbiAgICBjb25zdCBwYXJlbnRXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlyc3Qtc2NyZWVuLWxpc3RcIikub2Zmc2V0V2lkdGg7XHJcbiAgICBsZXQgZm9udFNpemVQZXJjZW50YWdlID0gMTkuNTtcclxuICAgICAgbGV0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgIGlmIChzY3JvbGxQb3NpdGlvbiA+IDApIHtcclxuICAgICAgICBmb250U2l6ZVBlcmNlbnRhZ2UgPSAxMjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb250U2l6ZVBlcmNlbnRhZ2UgPSAxOS41O1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBmb250U2l6ZSA9IChwYXJlbnRXaWR0aCAqIGZvbnRTaXplUGVyY2VudGFnZSkgLyAxMDA7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlyc3Qtc2NyZWVuLW1lbnUtbG9nbyBhXCIpLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemUgKyAncHgnO1xyXG4gICAgfVxyXG4gIGFkanVzdEZvbnRTaXplKCk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGFkanVzdEZvbnRTaXplKCk7XHJcbiAgfSk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGFkanVzdEZvbnRTaXplKCk7XHJcbiAgfSk7XHJcbiAgY29uc3Qgb2JqVG9TdGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlyc3Qtc2NyZWVuLWJvZHlcIik7XHJcbiAgaWYgKG9ialRvU3RpY2spIHtcclxuICAgIGxldCB0b3BPZk9ialRvU3RpY2sgPSBvYmpUb1N0aWNrLm9mZnNldFRvcDtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB3aW5kb3dTY3JvbGwgPSB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgICBpZiAod2luZG93U2Nyb2xsID4gdG9wT2ZPYmpUb1N0aWNrKSB7XHJcbiAgICAgICAgICAgICAgb2JqVG9TdGljay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBvYmpUb1N0aWNrLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG4iXX0=
