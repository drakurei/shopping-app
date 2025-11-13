// js/util.js - Utility functions

/**
 * Validates an email address.
 * @param {string} email - The email to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Validates a password (at least 8 characters).
 * @param {string} password - The password to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
function validatePassword(password) {
    return password.length >= 8;
}

/**
 * Sanitizes input by trimming whitespace.
 * @param {string} input - The input to sanitize.
 * @returns {string} The sanitized input.
 */
function sanitizeInput(input) {
    return input.trim();
}

/**
 * Shows or hides an element.
 * @param {string} selector - The CSS selector.
 * @param {boolean} show - True to show, false to hide.
 */
function toggleVisibility(selector, show) {
    const element = document.querySelector(selector);
    if (element) {
        element.classList.toggle('hidden', !show);
        element.classList.toggle('active', show);
    }
}

/**
 * Displays a message to the user.
 * @param {string} message - The message to display.
 * @param {string} type - The type of message ('success', 'error', etc.).
 */
function showMessage(message, type = 'info') {
    // Simple alert for now; can be enhanced with a proper notification system
    alert(message);
}

/**
 * Enables or disables a button based on form validity.
 * @param {string} formSelector - The form selector.
 * @param {string} buttonSelector - The button selector.
 */
function toggleSubmitButton(formSelector, buttonSelector) {
    const form = document.querySelector(formSelector);
    let button;
    if (buttonSelector.startsWith('#') && buttonSelector.length > 1) {
        button = document.getElementById(buttonSelector.substring(1));
    } else {
        button = document.querySelector(buttonSelector);
    }
    if (form && button) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let allValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                allValid = false;
            }
        });
        button.disabled = !allValid;
    }
}

/**
 * Sorts an array of objects by a key.
 * @param {Array} array - The array to sort.
 * @param {string} key - The key to sort by.
 * @param {boolean} ascending - True for ascending, false for descending.
 * @returns {Array} The sorted array.
 */
function sortByKey(array, key, ascending = true) {
    return array.sort((a, b) => {
        if (a[key] < b[key]) return ascending ? -1 : 1;
        if (a[key] > b[key]) return ascending ? 1 : -1;
        return 0;
    });
}

/**
 * Updates the live counter display.
 * @param {number} count - The current count.
 * @param {string} selector - The selector for the counter element.
 */
function updateCounter(count, selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = count;
    }
}

/**
 * Stores data in localStorage.
 * @param {string} key - The storage key.
 * @param {*} value - The value to store.
 */
function storeData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Retrieves data from localStorage.
 * @param {string} key - The storage key.
 * @returns {*} The retrieved value or null.
 */
function getStoredData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

/**
 * Clears data from localStorage.
 * @param {string} key - The storage key.
 */
function clearStoredData(key) {
    localStorage.removeItem(key);
}

/**
 * Updates the cart counter badge in the header.
 * @param {number} count - The current cart item count.
 */
function updateCartCounter(count) {
    const counter = document.getElementById('total-count');
    if (counter) {
        counter.textContent = count;
    }
}

/**
 * Shows a loading spinner on a button.
 * @param {string} buttonId - The button ID.
 * @param {boolean} show - True to show spinner, false to hide.
 */
function showLoadingSpinner(buttonId, show) {
    const button = document.getElementById(buttonId);
    if (button) {
        if (show) {
            button.disabled = true;
            button.innerHTML = '<span class="spinner"></span> Loading...';
        } else {
            button.disabled = false;
            button.innerHTML = button.getAttribute('data-original-text') || 'Submit';
        }
    }
}

/**
 * Debounces a function call.
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The wait time in milliseconds.
 * @returns {Function} The debounced function.
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Formats a price as currency.
 * @param {number} price - The price to format.
 * @param {string} currency - The currency symbol (default: '$').
 * @returns {string} The formatted price.
 */
function formatPrice(price, currency = '$') {
    return `${currency}${parseFloat(price).toFixed(2)}`;
}