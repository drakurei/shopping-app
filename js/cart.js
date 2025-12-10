// cart.js - Small enhancements for the cart view

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-quantity-input]').forEach((input) => {
        input.addEventListener('change', (event) => {
            const target = event.currentTarget;
            const form = target.closest('form');
            if (form && Number(target.value) > 0) {
                form.submit();
            }
        });
    });

    document.querySelectorAll('[data-confirm-remove]').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            if (!confirm('Remove this item from your cart?')) {
                event.preventDefault();
            }
        });
    });
});
