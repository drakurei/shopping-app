// utils.js - Utility functions for the shopping app

/**
 * Validates an email address using regex.
 * @param {string} email - The email to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Validates a password (at least 8 characters, with numbers and letters).
 * @param {string} password - The password to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function validatePassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
}

/**
 * Checks if a form is valid (example for login/register).
 * @param {HTMLFormElement} form - The form element.
 * @returns {boolean} - True if all fields are valid.
 */
function isFormValid(form) {
    const email = form.querySelector('#email').value;
    const password = form.querySelector('#password').value;
    return validateEmail(email) && validatePassword(password);
}

/**
 * Displays an error message for a field.
 * @param {HTMLElement} field - The input field.
 * @param {string} message - The error message.
 */
function showError(field, message) {
    const errorEl = field.nextElementSibling;
    if (errorEl && errorEl.classList.contains('error')) {
        errorEl.textContent = message;
        errorEl.style.display = 'block';
    }
}

/**
 * Hides error messages for a field.
 * @param {HTMLElement} field - The input field.
 */
function hideError(field) {
    const errorEl = field.nextElementSibling;
    if (errorEl && errorEl.classList.contains('error')) {
        errorEl.style.display = 'none';
    }
}

// Example usage in a form event listener (add this to app.js if needed)
// document.getElementById('login-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (!isFormValid(e.target)) {
//         alert('Form is invalid');
//     }
// });
