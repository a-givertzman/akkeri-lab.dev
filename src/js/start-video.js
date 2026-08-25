document.addEventListener('DOMContentLoaded', () => {
  const startVideo = document.getElementById('startVideo');
  const startVideoArrow = document.getElementById('startVideoArrow');
  const startVideoScale = document.querySelector('.start-video__scale');
  const menuLinks = document.querySelectorAll('.start-video__menu a');
  if (!startVideo || !startVideoArrow || !startVideoScale) return;
  let menuHover = false;
  // =========================
  // AUTOPLAY ДЛЯ МОБИЛЬНЫХ
  // =========================
  startVideo.muted = true;
  startVideo.defaultMuted = true;
  startVideo.playsInline = true;
  startVideo.setAttribute('muted', '');
  startVideo.setAttribute('playsinline', '');
  startVideo.setAttribute('webkit-playsinline', '');
  const tryPlayVideo = () => {
    const playPromise = startVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Safari/iOS может запретить autoplay.
        // Тогда видео запустится при первом касании страницы.
      });
    }
  };
  // Сразу пробуем запустить
  tryPlayVideo();
  // И ещё раз, когда видео готово к воспроизведению
  startVideo.addEventListener('canplay', tryPlayVideo, { once: true });
  // Если iPhone всё-таки заблокировал autoplay,
  // первое касание страницы запустит видео.
  const startOnInteraction = () => {
    if (startVideo.paused) {
      startVideo.play().catch(() => {});
    }
  };
  document.addEventListener('touchstart', startOnInteraction, {
    once: true,
    passive: true
  });
  document.addEventListener('click', startOnInteraction, {
    once: true
  });
  // =========================
  // ДВИЖЕНИЕ ПО ВРЕМЕНИ ВИДЕО
  // =========================
  const updateStartVideoProgress = () => {
    if (
      !menuHover &&
      startVideo.duration &&
      Number.isFinite(startVideo.duration)
    ) {
      const progress = startVideo.currentTime / startVideo.duration;
      startVideoArrow.style.left = `${progress * 100}%`;
    }
    requestAnimationFrame(updateStartVideoProgress);
  };
  // =========================
  // НАВЕДЕНИЕ НА МЕНЮ
  // =========================
  menuLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      menuHover = true;
      const linkRect = link.getBoundingClientRect();
      const scaleRect = startVideoScale.getBoundingClientRect();
      // Центр выбранного пункта меню
      const linkCenter = linkRect.left + linkRect.width / 2;
      // Его положение относительно шкалы
      let position =
        ((linkCenter - scaleRect.left) / scaleRect.width) * 100;
      // Не даём стрелке выйти за шкалу
      position = Math.max(0, Math.min(100, position));
      startVideoArrow.style.left = `${position}%`;
    });
    link.addEventListener('mouseleave', () => {
      menuHover = false;
    });
  });
  updateStartVideoProgress();
});