// flash.js - Handles dismissible flash messages

document.addEventListener('DOMContentLoaded', () => {
    const flashes = document.querySelectorAll('.flash');

    flashes.forEach((flash) => {
        const closeBtn = flash.querySelector('[data-dismiss="flash"]');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => flash.remove());
        }

        setTimeout(() => {
            if (flash.parentElement) {
                flash.classList.add('flash-hide');
                setTimeout(() => flash.remove(), 400);
            }
        }, 4500);
    });
});
