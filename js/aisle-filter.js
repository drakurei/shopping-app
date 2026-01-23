// aisle-filter.js - Filters cards by aisle for demo purposes

document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('[data-aisle-select]');
    const cards = Array.from(document.querySelectorAll('[data-aisle]'));
    if (!select || cards.length === 0) return;

    select.addEventListener('change', (event) => {
        const aisle = event.target.value;
        cards.forEach((card) => {
            const cardAisle = card.getAttribute('data-aisle');
            const visible = aisle === 'all' || cardAisle === aisle;
            card.style.display = visible ? '' : 'none';
        });
    });
});
