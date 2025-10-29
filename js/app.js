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
    console.log('Tentative d\'ajout au panier pour :', product.name);
    fetch('api.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `action=add&product_name=${encodeURIComponent(product.name)}&price=${parseFloat(product.price.replace(' €', ''))}`,
        credentials: 'include' // Add to send session cookies
    })
    .then(async response => {
        console.log('Réponse reçue :', response);
        const text = await response.text();
        const contentType = response.headers.get('content-type') || '';
        if (!response.ok) {
            console.error('HTTP error', response.status, text);
            throw new Error('Erreur HTTP : ' + response.status);
        }
        // Sometimes PHP sets Content-Type: application/json even when it outputs HTML (errors).
        // Detect obvious HTML responses and treat them as non-JSON to avoid JSON.parse on HTML.
        const trimmed = text.trim();
        if (trimmed.startsWith('<')) {
            console.error('Server returned HTML (likely PHP error):', text);
            throw new Error('Réponse serveur non-JSON (HTML) — voir console pour le détail');
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
            throw new Error('Réponse serveur non-JSON (voir console)');
        }
    })
    .then(data => {
        console.log('Données JSON :', data);
        if (data.success) {
            alert(data.message);
        } else {
            alert('Erreur : ' + data.message);
        }
    })
    .catch(error => {
        console.error('Erreur fetch :', error);
        alert('Erreur réseau : ' + error.message);
    });
});

                gridDiv.appendChild(card);
            });

            categoryDiv.appendChild(gridDiv);
            productsContainer.appendChild(categoryDiv);
        });

        // Connexion
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
            loginMessage.textContent = 'Erreur réseau';
            loginMessage.style.color = 'red';
            console.error(err);
        });
    });
}

// Inscription
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
            registerMessage.textContent = 'Erreur réseau';
            registerMessage.style.color = 'red';
            console.error(err);
        });
    });
}

// Fonction pour afficher le message de bienvenue et masquer les formulaires
function showWelcome() {
    const authPage = document.getElementById('auth-page');
    authPage.innerHTML = `
        <h2>Bienvenue 👋</h2>
        <p>Tu es maintenant connecté à Shopping App.</p>
        <button id="logout-button">Se déconnecter</button>
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
                <h2>Inscription / Connexion</h2>
                <p style="color:green;">${data.message}</p>
                <p>Recharge la page ou reconnecte-toi pour continuer.</p>
            `;
        });
    });
}


    }
});