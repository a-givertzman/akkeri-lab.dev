document.addEventListener('DOMContentLoaded', () => {
  // Вкладки ОПИСАНИЕ / ПОДДЕРЖКА
  document.querySelectorAll('.project-tabs').forEach((tabs) => {
    const buttons = tabs.querySelectorAll('[data-project-tab]');
    const main = tabs.closest('main');

    if (!main) {
      return;
    }

    const panels = main.querySelectorAll('[data-project-panel]');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.projectTab;

        buttons.forEach((item) => {
          item.classList.remove('project-tabs__button--active');
        });

        panels.forEach((panel) => {
          panel.classList.remove('project-tab-panel--active');
        });

        button.classList.add('project-tabs__button--active');

        const activePanel = main.querySelector(
          `[data-project-panel="${target}"]`
        );

        if (activePanel) {
          activePanel.classList.add('project-tab-panel--active');
        }
      });
    });
  });

  // Слайдер внутри вкладки ОПИСАНИЕ
  document.querySelectorAll('[data-project-slider]').forEach((slider) => {
    const slides = slider.querySelectorAll('.project-slide');
    const prevButton = slider.querySelector('[data-slide-prev]');
    const nextButton = slider.querySelector('[data-slide-next]');
    const currentLabel = slider.querySelector('[data-slide-current]');
    const totalLabel = slider.querySelector('[data-slide-total]');

    if (!slides.length || !prevButton || !nextButton) {
      return;
    }

    let currentSlide = 0;

    if (totalLabel) {
      totalLabel.textContent = slides.length;
    }

    const showSlide = (index) => {
      if (index < 0) {
        currentSlide = slides.length - 1;
      } else if (index >= slides.length) {
        currentSlide = 0;
      } else {
        currentSlide = index;
      }

      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle(
          'project-slide--active',
          slideIndex === currentSlide
        );
      });

      if (currentLabel) {
        currentLabel.textContent = currentSlide + 1;
      }
    };

    prevButton.addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });

    nextButton.addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });

    showSlide(0);
  });
});