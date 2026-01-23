// cart-count.js - Fetches cart count from the API

document.addEventListener('DOMContentLoaded', () => {
    const countEl = document.querySelector('.cart-count');
    if (!countEl) return;

    fetch('api/cart-count.php', { headers: { 'Accept': 'application/json' } })
        .then((response) => response.json())
        .then((data) => {
            if (data && typeof data.count === 'number') {
                countEl.textContent = String(data.count);
            }
        })
        .catch(() => {
            // Silent fail to avoid breaking the UI
        });
});
