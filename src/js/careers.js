document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-careers-tab]');
    const panels = document.querySelectorAll('[data-careers-panel]');
    if (!buttons.length || !panels.length) return;
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const target = button.dataset.careersTab;
            buttons.forEach((item) => {
                item.classList.remove('careers-tabs__button--active');
            });
            panels.forEach((panel) => {
                panel.classList.remove('careers-panel--active');
            });
            button.classList.add('careers-tabs__button--active');
            const targetPanel = document.querySelector(
                `[data-careers-panel="${target}"]`
            );
            if (targetPanel) {
                targetPanel.classList.add('careers-panel--active');
            }
            if (typeof AOS !== 'undefined') {
                AOS.refreshHard();
            }
        });
    });
});