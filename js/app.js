// app.js - Main application logic for SPA and interactions
document.addEventListener('DOMContentLoaded', () => {
    // SPA Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    const pages = document.querySelectorAll('.page');
    const footer = document.querySelector('footer');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page') + '-page';
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');

            // Auth page isolation: remove scroll ONLY here
            if (pageId === "auth-page") {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }

            // Toggle footer class based on page
            if (pageId === 'products-page' || pageId === 'auth-page' || pageId === 'lists-page') {
                footer.classList.add('scrollable');
            } else {
                footer.classList.remove('scrollable');
            }

            // Close hamburger menu after navigation
            document.getElementById('nav-links').classList.remove('active');
        });
    });

    // Hamburger Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksEl = document.getElementById('nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (navLinksEl) navLinksEl.classList.toggle('active');
        });
    }

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
        themeToggleMobile.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
        themeToggleMobile.textContent = '🌙';
    }

    const toggleTheme = () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        themeToggleMobile.textContent = isDark ? '☀️' : '🌙';
    };

    themeToggle.addEventListener('click', toggleTheme);
    themeToggleMobile.addEventListener('click', toggleTheme);

    // Language Switch
    const langSelect = document.getElementById('lang-select');
    const langSelectMobile = document.getElementById('lang-select-mobile');

    const savedLang = localStorage.getItem('lang') || 'fr';
    langSelect.value = savedLang;
    langSelectMobile.value = savedLang;
    updateLanguage(savedLang);

    const changeLanguage = (lang) => {
        localStorage.setItem('lang', lang);
        updateLanguage(lang);
    };

    langSelect.addEventListener('change', (e) => changeLanguage(e.target.value));
    langSelectMobile.addEventListener('change', (e) => changeLanguage(e.target.value));

    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    // Load Products
    loadProducts();

    function loadProducts() {
        const productsContainer = document.getElementById('products-container');
        const categories = [
            {
                name: 'Fruits et Légumes',
                products: [
                    { name: 'Pomme', price: '1.50 €', image: 'assets/apple.jpg' },
                    { name: 'Banane', price: '0.80 €', image: 'assets/banana.jpg' },
                    { name: 'Tomate', price: '2.00 €', image: 'assets/tomato.jpg' },
                    { name: 'Brocoli', price: '1.80 €', image: 'assets/broccoli.jpg' },
                    { name: 'Carotte', price: '1.20 €', image: 'assets/carrot.jpg' },
                    { name: 'Courgette', price: '1.50 €', image: 'assets/zucchini.jpg' }
                ]
            },
            {
                name: 'Viandes',
                products: [
                    { name: 'Poulet', price: '5.00 €', image: 'assets/chicken.jpg' },
                    { name: 'Boeuf', price: '7.00 €', image: 'assets/beef.jpg' }
                ]
            },
            {
                name: 'Produits Laitiers',
                products: [
                    { name: 'Lait', price: '1.20 €', image: 'assets/milk.jpg' },
                    { name: 'Fromage', price: '3.50 €', image: 'assets/cheese.jpg' }
                ]
            },
            {
                name: 'Poisson',
                products: [
                    { name: 'Saumon', price: '8.00 €', image: 'assets/salmon.jpg' },
                    { name: 'Thon', price: '4.00 €', image: 'assets/tuna.jpg' }
                ]
            },
            {
                name: 'Boissons',
                products: [
                    { name: 'Eau', price: '0.50 €', image: 'assets/water.jpg' },
                    { name: 'Jus d\'Orange', price: '2.00 €', image: 'assets/orangejuice.jpg' }
                ]
            },
            {
                name: 'Objets Ménagers',
                products: [
                    { name: 'Détergent', price: '2.50 €', image: 'assets/detergent.jpg' },
                    { name: 'Papier Toilette', price: '1.00 €', image: 'assets/toiletpaper.jpg' }
                ]
            },
            {
                name: 'Outils de Cuisine',
                products: [
                    { name: 'Couteau', price: '10.00 €', image: 'assets/knife.jpg' },
                    { name: 'Poêle', price: '15.00 €', image: 'assets/pan.jpg' }
                ]
            }
        ];

        categories.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category';
            categoryDiv.innerHTML = `<h2 data-lang="${category.name}">${category.name}</h2>`;
            const gridDiv = document.createElement('div');
            gridDiv.className = 'products-grid';

            category.products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3 data-lang="${product.name}">${product.name}</h3>
                    <p data-lang="price">${product.price}</p>
                    <button data-lang="addToCart">Ajouter au panier</button>
                `;

                const button = card.querySelector('button');
                button.addEventListener('click', () => {
                    console.log('Attempting to add to cart for:', product.name);
                    fetch('api.php', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: `action=add&product_name=${encodeURIComponent(product.name)}&price=${parseFloat(product.price.replace(' €', ''))}`,
                        credentials: 'include' // Add to send session cookies
                    })
                    .then(async response => {
                        console.log('Response received:', response);
                        const text = await response.text();
                        const contentType = response.headers.get('content-type') || '';
                        if (!response.ok) {
                            console.error('HTTP error', response.status, text);
                            throw new Error('HTTP Error: ' + response.status);
                        }
                        // Sometimes PHP sets Content-Type: application/json even when it outputs HTML (errors).
                        // Detect obvious HTML responses and treat them as non-JSON to avoid JSON.parse on HTML.
                        const trimmed = text.trim();
                        if (trimmed.startsWith('<')) {
                            console.error('Server returned HTML (likely PHP error):', text);
                            throw new Error('Server response non-JSON (HTML) — see console for details');
                        }

                        if (contentType.includes('application/json')) {
                            try {
                                return JSON.parse(text);
                            } catch (e) {
                                console.error('JSON parse failed, server returned:', text);
                                throw e;
                            }
                        } else {
                            console.error('Server returned non-JSON response:', text);
                            throw new Error('Server response non-JSON (see console)');
                        }
                    })
                    .then(data => {
                        console.log('JSON data:', data);
                        if (data.success) {
                            alert(data.message);
                        } else {
                            alert('Error: ' + data.message);
                        }
                    })
                    .catch(error => {
                        console.error('Fetch error:', error);
                        alert('Network error: ' + error.message);
                    });
                });

                gridDiv.appendChild(card);
            });

            categoryDiv.appendChild(gridDiv);
            productsContainer.appendChild(categoryDiv);
        });

        // Login
        const loginForm = document.getElementById('login-form');
        const loginMessage = document.getElementById('login-message');

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(loginForm);
                fetch('auth.php', {
                    method: 'POST',
                    body: formData,
                    credentials: 'include' // Add to send session cookies
                })
                .then(res => res.json())
                .then(data => {
                    loginMessage.textContent = data.message;
                    loginMessage.style.color = data.success ? 'green' : 'red';
                    if (data.success) {
                        showWelcome();
                    }
                })
                .catch(err => {
                    loginMessage.textContent = 'Network error';
                    loginMessage.style.color = 'red';
                    console.error(err);
                });
            });
        }

        // Registration
        const registerForm = document.getElementById('register-form');
        const registerMessage = document.getElementById('register-message');

        if (registerForm) {
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(registerForm);
                fetch('auth.php', {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(data => {
                    registerMessage.textContent = data.message;
                    registerMessage.style.color = data.success ? 'green' : 'red';
                    if (data.success) {
                        showWelcome();
                    }
                })
                .catch(err => {
                    registerMessage.textContent = 'Network error';
                    registerMessage.style.color = 'red';
                    console.error(err);
                });
            });
        }

        // Function to show welcome message and hide forms
        function showWelcome() {
            const authPage = document.getElementById('auth-page');
            authPage.innerHTML = `
                <h2>Welcome 👋</h2>
                <p>You are now logged in to Shopping App.</p>
                <button id="logout-button">Logout</button>
            `;

            const logoutButton = document.getElementById('logout-button');
            logoutButton.addEventListener('click', () => {
                fetch('auth.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: 'action=logout'
                })
                .then(res => res.json())
                .then(data => {
                    authPage.innerHTML = `
                        <h2>Registration / Login</h2>
                        <p style="color:green;">${data.message}</p>
                        <p>Reload the page or log in again to continue.</p>
                    `;
                });
            });
        }

        // Load shopping lists
        function loadLists() {
    fetch('api.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'action=get',
        credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
        const tbody = document.getElementById('lists-body');
        tbody.innerHTML = '';
        if (data.success && data.lists.length > 0) {
            data.lists.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.product_name}</td>
                    <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)"></td>
                    <td>${item.price} €</td>
                    <td><button onclick="removeItem(${item.id})" data-lang="remove">Remove</button></td>
                `;
                tbody.appendChild(row);
            });
        } else {
            tbody.innerHTML = '<tr><td colspan="4" data-lang="noItems">No items in the list</td></tr>';
        }
    })
    .catch(error => console.error('Error loading lists:', error));
}

        // Update quantity
        function updateQuantity(id, quantity) {
            fetch('api.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `action=update&id=${id}&quantity=${quantity}`,
                credentials: 'include'
            })
            .then(response => response.json())
            .then(data => {
                if (!data.success) alert('Update error');
            });
        }

        // Remove item
        function removeItem(id) {
            fetch('api.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `action=remove&id=${id}`,
                credentials: 'include'
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) loadLists(); // Reload the list
                else alert('Removal error');
            });
        }

        // Add new item
        document.getElementById('add-new-item')?.addEventListener('click', () => {
            const productName = prompt('Product name:');
            const price = parseFloat(prompt('Price (€):'));
            if (productName && price > 0) {
                fetch('api.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: `action=add&product_name=${encodeURIComponent(productName)}&price=${price}`,
                    credentials: 'include'
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) loadLists(); // Reload the list
                    else alert('Add error');
                });
            }
        });

        // User profile
        const userProfile = document.getElementById('user-profile');
        const userInitial = document.getElementById('user-initial');
        const profileMenu = document.getElementById('profile-menu');

        if (userProfile) {
            userProfile.addEventListener('click', () => {
                profileMenu.style.display = profileMenu.style.display === 'none' ? 'block' : 'none';
            });
        }

        document.getElementById('view-lists')?.addEventListener('click', (e) => {
            e.preventDefault();
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById('lists-page').classList.add('active');
            loadLists();
        });

        document.getElementById('view-profile')?.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Profile to implement');
        });

        document.getElementById('logout')?.addEventListener('click', (e) => {
            e.preventDefault();
            fetch('auth.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: 'action=logout',
                credentials: 'include'
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) location.reload();
            });
        });

        // After successful login, show the initial (pass the username from the response)
        function showUserProfile(username) {
            if (userProfile) userProfile.style.display = 'inline-block';
            if (userInitial) userInitial.textContent = username.charAt(0).toUpperCase();
        }

        // In the login function, after data.success:
        // showUserProfile(username); // Retrieve the username from DB or store it

        // Load lists when going to the Lists page
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // ... existing code ...
                if (pageId === 'lists-page') {
                    loadLists();
                }
            });
        });
    }
});