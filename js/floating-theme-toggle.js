// js/floating-theme-toggle.js - Floating theme toggle functionality

document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('floating-theme-toggle');
    if (!themeToggleBtn) return;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateToggleButton(savedTheme);

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleButton(newTheme);
    });

    function updateToggleButton(theme) {
        themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
});