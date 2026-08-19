document.addEventListener('DOMContentLoaded', () => {
  const startVideo = document.getElementById('startVideo');
  const startVideoArrow = document.getElementById('startVideoArrow');
  const menuLinks = document.querySelectorAll(
    '.start-video__menu [data-arrow-position]'
  );
  if (!startVideo || !startVideoArrow) return;
  let menuHover = false;
  // Движение бегунка по времени видео
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
  // Наведение на пункты меню
  menuLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      menuHover = true;
      const position = link.dataset.arrowPosition;
      startVideoArrow.style.left = `${position}%`;
    });
    link.addEventListener('mouseleave', () => {
      menuHover = false;
    });
  });
  updateStartVideoProgress();
});