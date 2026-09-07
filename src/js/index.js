window.addEventListener('load', function () {
  AOS.init({
    offset: 120,
    duration: 900,
    easing: 'ease',
    delay: 100,
    once: true
  });
  AOS.refreshHard();
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const url = new URL(this.href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) {
        return;
      }
      const target = document.querySelector(url.hash);
      if (!target) {
        return;
      }
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});