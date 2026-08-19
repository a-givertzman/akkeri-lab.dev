window.addEventListener('load', function () {
  AOS.init({
    offset: 120,
    duration: 900,
    easing: 'ease',
    delay: 100,
    once: true
  });
  AOS.refreshHard();
});