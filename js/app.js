// js/app.js - Main application logic

/**
 * Main application class for the Shopping App SPA.
 */
class ShoppingApp {
    constructor() {
        this.currentUser = null;
        this.lists = [];
        this.cart = [];
        this.init();
    }

    /**
     * Initializes the application.
     */
    init() {
        this.bindEvents();
        this.checkAuthStatus();
        this.loadStoredData();
    }

    /**
     * Binds event listeners to UI elements.
     */
    bindEvents() {
        // Navigation
        const navHome = document.getElementById('nav-home');
        if (navHome) navHome.addEventListener('click', () => this.showSection('home-section'));

        const navHomeAlt = document.getElementById('nav-home-alt');
        if (navHomeAlt) navHomeAlt.addEventListener('click', () => this.showSection('home-section'));

        const navProducts = document.getElementById('nav-products');
        if (navProducts) navProducts.addEventListener('click', () => this.showSection('products-section'));

        const navLogin = document.getElementById('nav-login');
        if (navLogin) navLogin.addEventListener('click', () => this.showSection('login-section'));

        const navRegister = document.getElementById('nav-register');
        if (navRegister) navRegister.addEventListener('click', () => this.showSection('register-section'));

        const navLists = document.getElementById('nav-lists');
        if (navLists) navLists.addEventListener('click', () => this.showSection('lists-section'));

        const navCart = document.getElementById('nav-cart');
        if (navCart) navCart.addEventListener('click', () => this.showSection('cart-section'));

        const navLogout = document.getElementById('nav-logout');
        if (navLogout) navLogout.addEventListener('click', this.logout.bind(this));

        // Auth buttons
        const loginBtn = document.getElementById('login-btn');
        if (loginBtn) loginBtn.addEventListener('click', () => this.showSection('login-section'));

        const registerBtn = document.getElementById('register-btn');
        if (registerBtn) registerBtn.addEventListener('click', () => this.showSection('register-section'));

        const shopBtn = document.getElementById('shop-btn');
        if (shopBtn) shopBtn.addEventListener('click', () => this.showSection('products-section'));

        // Language selector
        const langSelector = document.getElementById('lang-selector');
        if (langSelector) langSelector.addEventListener('change', (e) => setLanguage(e.target.value));

        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) themeToggle.addEventListener('click', this.toggleTheme.bind(this));

        const heroThemeToggle = document.getElementById('hero-theme-toggle');
        if (heroThemeToggle) heroThemeToggle.addEventListener('click', this.toggleTheme.bind(this));

        // Form switches
        const switchToRegister = document.getElementById('switch-to-register');
        if (switchToRegister) switchToRegister.addEventListener('click', () => this.showSection('register-section'));

        const switchToLogin = document.getElementById('switch-to-login');
        if (switchToLogin) switchToLogin.addEventListener('click', () => this.showSection('login-section'));

        // Forms
        const loginForm = document.getElementById('login-form');
        if (loginForm) loginForm.addEventListener('submit', this.handleLogin.bind(this));

        const registerForm = document.getElementById('register-form');
        if (registerForm) registerForm.addEventListener('submit', this.handleRegister.bind(this));

        // Form validation
        document.querySelectorAll('input[required]').forEach(input => {
            input.addEventListener('input', () => this.validateForm(input.form));
        });

        // Lists
        const createListBtn = document.getElementById('create-list-btn');
        if (createListBtn) createListBtn.addEventListener('click', this.createList.bind(this));

        // Section navigation
        const listsHomeBtn = document.getElementById('lists-home-btn');
        if (listsHomeBtn) listsHomeBtn.addEventListener('click', () => this.showSection('home-section'));

        const listsLogoutBtn = document.getElementById('lists-logout-btn');
        if (listsLogoutBtn) listsLogoutBtn.addEventListener('click', this.logout.bind(this));

        // Products
        const productsHomeBtn = document.getElementById('products-home-btn');
        if (productsHomeBtn) productsHomeBtn.addEventListener('click', () => this.showSection('home-section'));

        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.addEventListener('input', this.filterProducts.bind(this));

        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) categoryFilter.addEventListener('change', this.filterProducts.bind(this));

        const clearFiltersBtn = document.getElementById('clear-filters-btn');
        if (clearFiltersBtn) clearFiltersBtn.addEventListener('click', this.clearFilters.bind(this));

        // Cart
        const continueShoppingBtn = document.getElementById('continue-shopping-btn');
        if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', () => this.showSection('products-section'));

        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn) checkoutBtn.addEventListener('click', this.checkout.bind(this));
    }

    /**
     * Shows a specific section and hides others.
     * @param {string} sectionId - The ID of the section to show.
     */
    showSection(sectionId) {
        document.querySelectorAll('main > section').forEach(section => {
            section.classList.add('hidden');
            section.classList.remove('active');
        });
        toggleVisibility('#' + sectionId, true);

        // Load data for specific sections
        if (sectionId === 'products-section') {
            this.loadProducts();
        } else if (sectionId === 'cart-section') {
            this.loadCart();
        }
    }

    /**
     * Checks authentication status on load.
     */
    async checkAuthStatus() {
        try {
            const response = await fetch(LANG.API_BASE + LANG.API_AUTH, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ action: 'validate' })
            });
            const data = await response.json();
            if (data.valid) {
                this.currentUser = data.user_id;
                this.updateNav(true);
                this.loadLists();
            } else {
                this.updateNav(false);
            }
        } catch (error) {
            console.error('Auth check failed:', error);
        }
    }

    /**
     * Updates navigation based on auth status.
     * @param {boolean} loggedIn - Whether user is logged in.
     */
    updateNav(loggedIn) {
        const loggedInNav = document.querySelectorAll('#nav-lists, #nav-cart, #nav-logout');
        const loggedOutNav = document.querySelectorAll('#nav-login, #nav-register');
        loggedInNav.forEach(el => el.style.display = loggedIn ? 'block' : 'none');
        loggedOutNav.forEach(el => el.style.display = loggedIn ? 'none' : 'block');
    }

    /**
     * Handles login form submission.
     * @param {Event} event - The form submit event.
     */
    async handleLogin(event) {
        event.preventDefault();
        const identifier = document.getElementById('login-identifier').value;
        const password = document.getElementById('login-password').value;

        try {
            const response = await fetch(LANG.API_BASE + LANG.API_AUTH, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ action: 'login', identifier, password })
            });
            const data = await response.json();
            if (data.success) {
                this.currentUser = data.user_id;
                this.updateNav(true);
                this.showSection('lists-section');
                this.loadLists();
            } else {
                showMessage(data.message || LANG.LOGIN_FAILED);
            }
        } catch (error) {
            showMessage(LANG.ERROR);
        }
    }

    /**
     * Handles register form submission.
     * @param {Event} event - The form submit event.
     */
    async handleRegister(event) {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        try {
            const response = await fetch(LANG.API_BASE + LANG.API_AUTH, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ action: 'register', username, email, password })
            });
            const data = await response.json();
            if (data.success) {
                showMessage(LANG.REGISTER_SUCCESS);
                this.showSection('login-section');
            } else {
                showMessage(data.message || LANG.REGISTER_FAILED);
            }
        } catch (error) {
            showMessage(LANG.ERROR);
        }
    }

    /**
     * Logs out the user.
     */
    async logout() {
        try {
            await fetch(LANG.API_BASE + LANG.API_AUTH, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ action: 'logout' })
            });
            this.currentUser = null;
            this.updateNav(false);
            this.showSection('home-section');
        } catch (error) {
            showMessage(LANG.ERROR);
        }
    }

    /**
     * Loads shopping lists from API.
     */
    async loadLists() {
        try {
            const response = await fetch(LANG.API_BASE + LANG.API_LISTS, {
                credentials: 'include'
            });
            const data = await response.json();
            this.lists = data.lists || [];
            this.renderLists();

            // Update quick add form lists
            if (typeof populateListSelect === 'function') {
                populateListSelect();
            }
        } catch (error) {
            showMessage(LANG.ERROR);
        }
    }

    /**
     * Renders the lists in the UI.
     */
    renderLists() {
            const container = document.getElementById('lists-container');
            container.innerHTML = '';
            this.lists.forEach(list => {
                        const listEl = document.createElement('div');
                        listEl.className = 'list-item';
                        listEl.innerHTML = `
                <h3>${list.name}</h3>
                <div class="item-controls">
                    <button onclick="app.sortList('${list.id}', 'name', true)">Sort A-Z</button>
                    <button onclick="app.sortList('${list.id}', 'name', false)">Sort Z-A</button>
                    <button onclick="app.addItem('${list.id}')">Add Item</button>
                    <button onclick="app.deleteList('${list.id}')">Delete List</button>
                </div>
                <div class="items">
                    ${list.items.map(item => `
                        <div class="item">
                            <h4>${item.name} (${item.category}) - Qty: ${item.quantity}</h4>
                            <div class="item-controls">
                                <button onclick="app.editItem('${item.id}', '${list.id}')">Edit</button>
                                <button onclick="app.deleteItem('${item.id}')">Delete</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            container.appendChild(listEl);
        });
    }

    /**
     * Creates a new list.
     */
    async createList() {
        const name = prompt('Enter list name:');
        if (name) {
            try {
                const response = await fetch(LANG.API_BASE + LANG.API_LISTS, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({ name })
                });
                const data = await response.json();
                if (data.success) {
                    this.loadLists();
                }
            } catch (error) {
                showMessage(LANG.ERROR);
            }
        }
    }

    /**
     * Sorts a list by key.
     * @param {string} listId - The list ID.
     * @param {string} key - The sort key.
     * @param {boolean} ascending - Sort order.
     */
    sortList(listId, key, ascending) {
        const list = this.lists.find(l => l.id == listId);
        if (list) {
            list.items = sortByKey(list.items, key, ascending);
            this.renderLists();
        }
    }

    /**
     * Adds an item to a list.
     * @param {string} listId - The list ID.
     */
    async addItem(listId) {
        const name = prompt('Item name:');
        const category = prompt('Category:');
        const quantity = parseInt(prompt('Quantity:', 1)) || 1;
        if (name) {
            try {
                const response = await fetch(LANG.API_BASE + LANG.API_LISTS, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({ list_id: listId, name, category, quantity })
                });
                const data = await response.json();
                if (data.success) {
                    this.loadLists();
                }
            } catch (error) {
                showMessage(LANG.ERROR);
            }
        }
    }

    /**
     * Edits an item.
     * @param {string} itemId - The item ID.
     * @param {string} listId - The list ID.
     */
    async editItem(itemId, listId) {
        const list = this.lists.find(l => l.id == listId);
        const item = list ? list.items.find(i => i.id == itemId) : null;
        if (!item) return;

        const name = prompt('Item name:', item.name);
        const category = prompt('Category:', item.category);
        const quantity = parseInt(prompt('Quantity:', item.quantity)) || 1;

        if (name) {
            try {
                const response = await fetch(LANG.API_BASE + LANG.API_LISTS, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({ item_id: itemId, name, category, quantity })
                });
                const data = await response.json();
                if (data.success) {
                    this.loadLists();
                }
            } catch (error) {
                showMessage(LANG.ERROR);
            }
        }
    }

    /**
     * Deletes an item.
     * @param {string} itemId - The item ID.
     */
    async deleteItem(itemId) {
        try {
            const response = await fetch(LANG.API_BASE + LANG.API_LISTS, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ item_id: itemId })
            });
            const data = await response.json();
            if (data.success) {
                this.loadLists();
            }
        } catch (error) {
            showMessage(LANG.ERROR);
        }
    }

    /**
     * Deletes a list.
     * @param {string} listId - The list ID.
     */
    async deleteList(listId) {
        try {
            const response = await fetch(LANG.API_BASE + LANG.API_LISTS, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ list_id: listId })
            });
            const data = await response.json();
            if (data.success) {
                this.loadLists();
            }
        } catch (error) {
            showMessage(LANG.ERROR);
        }
    }

    /**
     * Updates the cart counter.
     */
    async updateCartCounter() {
        try {
            const response = await fetch(LANG.API_BASE + LANG.API_PANIER);
            const data = await response.json();
            updateCartCounter(data.total_count || 0);
        } catch (error) {
            console.error('Counter update failed:', error);
        }
    }

    /**
     * Validates a form and toggles submit button.
     * @param {HTMLFormElement} form - The form element.
     */
    validateForm(form) {
        const button = form.querySelector('button[type="submit"]');
        toggleSubmitButton('#' + form.id, '#' + button.id);
    }

    /**
     * Loads stored data from localStorage.
     */
    loadStoredData() {
        // Load theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.classList.add(savedTheme);
            this.updateThemeButton(savedTheme === 'dark-theme');
        }

        // Initialize language
        initLanguage();

        // Load products if on products page
        if (document.getElementById('products-section').classList.contains('active')) {
            this.loadProducts();
        }
    }

    /**
     * Toggles between light and dark themes.
     */
    toggleTheme() {
        const body = document.body;
        const isDark = body.classList.contains('dark-theme');

        if (isDark) {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', '');
        } else {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }

        this.updateThemeButton(!isDark);
    }

    /**
     * Updates the theme toggle button icon.
     * @param {boolean} isDark - Whether dark theme is active.
     */
    updateThemeButton(isDark) {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.textContent = isDark ? '☀️' : '🌙';
        }

        const heroThemeToggle = document.getElementById('hero-theme-toggle');
        if (heroThemeToggle) {
            heroThemeToggle.textContent = isDark ? '☀️' : '🌙';
        }
    }

    /**
     * Loads products from API.
     */
    async loadProducts() {
        try {
            const response = await fetch(LANG.API_BASE + LANG.API_PRODUCTS);
            const data = await response.json();
            this.products = data.products || [];
            this.renderProducts();
        } catch (error) {
            showMessage(LANG.ERROR);
        }
    }

    /**
     * Renders products in the UI.
     */
    renderProducts() {
        const container = document.getElementById('products-grid');
        container.innerHTML = '';

        const filteredProducts = this.filterProductsList();

        if (filteredProducts.length === 0) {
            container.innerHTML = '<p>No products found.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const productEl = document.createElement('div');
            productEl.className = 'product-card';
            productEl.innerHTML = `
                <img src="${product.image || 'assets/default-product.jpg'}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <p class="product-price">$${product.price}</p>
                    <p class="product-category">${product.category}</p>
                    <button onclick="app.addToCart('${product.id}')" class="btn btn-primary">${LANG.ADD_TO_CART}</button>
                </div>
            `;
            container.appendChild(productEl);
        });
    }

    /**
     * Filters products based on search and category.
     */
    filterProducts() {
        this.renderProducts();
    }

    /**
     * Gets filtered products list.
     * @returns {Array} Filtered products.
     */
    filterProductsList() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const categoryFilter = document.getElementById('category-filter').value;

        return this.products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                                product.description.toLowerCase().includes(searchTerm);
            const matchesCategory = !categoryFilter || product.category === categoryFilter;
            return matchesSearch && matchesCategory;
        });
    }

    /**
     * Clears all filters.
     */
    clearFilters() {
        document.getElementById('search-input').value = '';
        document.getElementById('category-filter').value = '';
        this.renderProducts();
    }

    /**
     * Adds a product to cart.
     * @param {string} productId - The product ID.
     */
    async addToCart(productId) {
        try {
            const response = await fetch(LANG.API_BASE + LANG.API_PANIER, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ product_id: productId, quantity: 1 })
            });
            const data = await response.json();
            if (data.success) {
                this.updateCartCounter();
                // Removed the "Item added to cart" message
            } else {
                showMessage(data.message || LANG.ERROR);
            }
        } catch (error) {
            showMessage(LANG.ERROR);
        }
    }

    /**
     * Loads cart items.
     */
    async loadCart() {
        try {
            const response = await fetch(LANG.API_BASE + LANG.API_PANIER);
            const data = await response.json();
            this.cart = data.cart || [];
            this.renderCart();
        } catch (error) {
            showMessage(LANG.ERROR);
        }
    }

    /**
     * Renders cart items.
     */
    renderCart() {
        const container = document.getElementById('cart-items');
        container.innerHTML = '';

        if (this.cart.length === 0) {
            container.innerHTML = '<p>Your cart is empty.</p>';
            document.getElementById('cart-total-items').textContent = '0';
            document.getElementById('cart-total-price').textContent = '0.00';
            return;
        }

        let totalItems = 0;
        let totalPrice = 0;

        this.cart.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${item.image || 'assets/default-product.jpg'}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price} x ${item.quantity}</p>
                    <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div class="cart-item-controls">
                    <button onclick="app.updateCartItem('${item.id}', ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="app.updateCartItem('${item.id}', ${item.quantity + 1})">+</button>
                    <button onclick="app.removeFromCart('${item.id}')" class="btn btn-secondary">Remove</button>
                </div>
            `;
            container.appendChild(itemEl);

            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;
        });

        document.getElementById('cart-total-items').textContent = totalItems;
        document.getElementById('cart-total-price').textContent = totalPrice.toFixed(2);
    }

    /**
     * Updates cart item quantity.
     * @param {string} itemId - The cart item ID.
     * @param {number} quantity - New quantity.
     */
    async updateCartItem(itemId, quantity) {
        if (quantity <= 0) {
            this.removeFromCart(itemId);
            return;
        }

        try {
            const response = await fetch(LANG.API_BASE + LANG.API_PANIER, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ item_id: itemId, quantity })
            });
            const data = await response.json();
            if (data.success) {
                this.loadCart();
                this.updateCartCounter();
            }
        } catch (error) {
            showMessage(LANG.ERROR);
        }
    }

    /**
     * Removes item from cart.
     * @param {string} itemId - The cart item ID.
     */
    async removeFromCart(itemId) {
        try {
            const response = await fetch(LANG.API_BASE + LANG.API_PANIER, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ item_id: itemId })
            });
            const data = await response.json();
            if (data.success) {
                this.loadCart();
                this.updateCartCounter();
            }
        } catch (error) {
            showMessage(LANG.ERROR);
        }
    }

    /**
     * Handles checkout process.
     */
    checkout() {
        alert('Checkout functionality would be implemented here. This would typically redirect to a payment processor.');
    }
}

// Initialize the app
const app = new ShoppingApp();