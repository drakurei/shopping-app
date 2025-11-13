// js/lang.js - Language utilities and constants

/**
 * Object containing language constants and messages for different languages.
 * @type {Object}
 */
const LANGUAGES = {
    en: {
        // General messages
        WELCOME: 'Welcome to Shopping App',
        WELCOME_DESC: 'Manage your shopping lists efficiently and shop smarter.',
        LOGIN: 'Login',
        REGISTER: 'Register',
        SHOP_NOW: 'Shop Now',
        HOME: 'Home',
        LOGOUT: 'Logout',
        LOADING: 'Loading...',
        ERROR: 'An error occurred. Please try again.',
        SUCCESS: 'Operation successful.',

        // Authentication
        LOGIN_SUCCESS: 'Login successful.',
        LOGIN_FAILED: 'Login failed. Check your credentials.',
        REGISTER_SUCCESS: 'Registration successful. You can now log in.',
        REGISTER_FAILED: 'Registration failed. Please try again.',
        NO_ACCOUNT: 'Don\'t have an account?',
        REGISTER_HERE: 'Register here',
        HAVE_ACCOUNT: 'Already have an account?',
        LOGIN_HERE: 'Login here',
        USERNAME_EMAIL: 'Username or Email:',
        ENTER_USERNAME_EMAIL: 'Enter your username or email.',
        PASSWORD: 'Password:',
        ENTER_PASSWORD: 'Enter your password.',
        USERNAME: 'Username:',
        CHOOSE_USERNAME: 'Choose a unique username.',
        EMAIL: 'Email:',
        ENTER_EMAIL: 'Enter a valid email address.',
        PASSWORD_MIN: 'Password must be at least 8 characters.',

        // Lists
        MY_LISTS: 'My Shopping Lists',
        CREATE_LIST: 'Create New List',
        QUICK_ADD: 'Quick Add Item',
        ITEM_NAME: 'Item Name:',
        CATEGORY: 'Category:',
        QUANTITY: 'Quantity:',
        ADD_TO_LIST: 'Add to List:',
        SELECT_LIST: 'Select a list...',
        ADD_ITEM: 'Add Item',

        // Products
        SHOP_PRODUCTS: 'Shop Products',
        SEARCH_PLACEHOLDER: 'Search products...',
        ALL_CATEGORIES: 'All Categories',
        FRUITS: 'Fruits',
        DAIRY: 'Dairy',
        MEAT: 'Meat',
        BAKERY: 'Bakery',
        BEVERAGES: 'Beverages',
        CLEAR_FILTERS: 'Clear Filters',
        ADD_TO_CART: 'Add to Cart',

        // Cart
        SHOPPING_CART: 'Shopping Cart',
        CONTINUE_SHOPPING: 'Continue Shopping',
        TOTAL_ITEMS: 'Total Items: ',
        TOTAL_PRICE: 'Total Price: $',
        PROCEED_TO_CHECKOUT: 'Proceed to Checkout',

        // Features
        FRESH_PRODUCE: 'Fresh Produce',
        FRESH_PRODUCE_DESC: 'Find the best fruits and vegetables for your meals.',
        DAIRY_PRODUCTS: 'Dairy Products',
        DAIRY_PRODUCTS_DESC: 'Quality dairy items for your daily needs.',
        MEAT_POULTRY: 'Meat & Poultry',
        MEAT_POULTRY_DESC: 'Fresh meat options for delicious meals.',

        // Pages
        CONTACT_US: 'Contact Us',
        NAME: 'Name:',
        ENTER_NAME: 'Enter your full name.',
        MESSAGE: 'Message:',
        DESCRIBE_INQUIRY: 'Describe your inquiry.',
        SEND_MESSAGE: 'Send Message',
        LEGAL_NOTICE: 'Legal Notice',
        LEGAL_DESC: 'This is a sample legal notice page. In a real application, this would contain detailed legal information about the website, its terms of use, privacy policy, and other legal requirements.',
        LEGAL_DESC2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        FOLLOW_US: 'Follow Us on Social Media',
        SOCIAL_DESC: 'Stay connected with us on social media for the latest updates, tips, and promotions.',
        FACEBOOK: 'Facebook',
        TWITTER: 'Twitter',
        INSTAGRAM: 'Instagram',
        YOUTUBE: 'YouTube',
        TERMS_CONDITIONS: 'Terms & Conditions',
        TERMS_DESC: 'These are the terms and conditions for using the Shopping App. By using this application, you agree to these terms.',
        ACCEPTANCE: '1. Acceptance of Terms',
        ACCEPTANCE_DESC: 'By accessing and using this application, you accept and agree to be bound by the terms and provision of this agreement.',
        USE_LICENSE: '2. Use License',
        USE_LICENSE_DESC: 'Permission is granted to temporarily download one copy of the materials on Shopping App\'s website for personal, non-commercial transitory viewing only.',
        DISCLAIMER: '3. Disclaimer',
        DISCLAIMER_DESC: 'The materials on Shopping App\'s website are provided on an \'as is\' basis. Shopping App makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',

        // API endpoints
        API_BASE: 'php/',
        API_AUTH: 'api_auth.php',
        API_LISTS: 'api_lists.php',
        API_PANIER: 'api_panier.php',
        API_PRODUCTS: 'api_products.php',

        // Theme
        THEME_TOGGLE: '🌙 Theme'
    },
    fr: {
        // General messages
        WELCOME: 'Bienvenue dans Shopping App',
        WELCOME_DESC: 'Gérez vos listes de courses efficacement et faites vos achats plus intelligemment.',
        LOGIN: 'Connexion',
        REGISTER: 'S\'inscrire',
        SHOP_NOW: 'Acheter maintenant',
        HOME: 'Accueil',
        LOGOUT: 'Déconnexion',
        LOADING: 'Chargement...',
        ERROR: 'Une erreur s\'est produite. Veuillez réessayer.',
        SUCCESS: 'Opération réussie.',

        // Authentication
        LOGIN_SUCCESS: 'Connexion réussie.',
        LOGIN_FAILED: 'Échec de la connexion. Vérifiez vos identifiants.',
        REGISTER_SUCCESS: 'Inscription réussie. Vous pouvez maintenant vous connecter.',
        REGISTER_FAILED: 'Échec de l\'inscription. Veuillez réessayer.',
        NO_ACCOUNT: 'Vous n\'avez pas de compte ?',
        REGISTER_HERE: 'Inscrivez-vous ici',
        HAVE_ACCOUNT: 'Vous avez déjà un compte ?',
        LOGIN_HERE: 'Connectez-vous ici',
        USERNAME_EMAIL: 'Nom d\'utilisateur ou Email :',
        ENTER_USERNAME_EMAIL: 'Entrez votre nom d\'utilisateur ou email.',
        PASSWORD: 'Mot de passe :',
        ENTER_PASSWORD: 'Entrez votre mot de passe.',
        USERNAME: 'Nom d\'utilisateur :',
        CHOOSE_USERNAME: 'Choisissez un nom d\'utilisateur unique.',
        EMAIL: 'Email :',
        ENTER_EMAIL: 'Entrez une adresse email valide.',
        PASSWORD_MIN: 'Le mot de passe doit contenir au moins 8 caractères.',

        // Lists
        MY_LISTS: 'Mes listes de courses',
        CREATE_LIST: 'Créer une nouvelle liste',
        QUICK_ADD: 'Ajout rapide d\'article',
        ITEM_NAME: 'Nom de l\'article :',
        CATEGORY: 'Catégorie :',
        QUANTITY: 'Quantité :',
        ADD_TO_LIST: 'Ajouter à la liste :',
        SELECT_LIST: 'Sélectionnez une liste...',
        ADD_ITEM: 'Ajouter l\'article',

        // Products
        SHOP_PRODUCTS: 'Acheter des produits',
        SEARCH_PLACEHOLDER: 'Rechercher des produits...',
        ALL_CATEGORIES: 'Toutes les catégories',
        FRUITS: 'Fruits',
        DAIRY: 'Produits laitiers',
        MEAT: 'Viande',
        BAKERY: 'Boulangerie',
        BEVERAGES: 'Boissons',
        CLEAR_FILTERS: 'Effacer les filtres',
        ADD_TO_CART: 'Ajouter au panier',

        // Cart
        SHOPPING_CART: 'Panier d\'achat',
        CONTINUE_SHOPPING: 'Continuer les achats',
        TOTAL_ITEMS: 'Articles totaux : ',
        TOTAL_PRICE: 'Prix total : $',
        PROCEED_TO_CHECKOUT: 'Procéder au paiement',

        // Features
        FRESH_PRODUCE: 'Produits frais',
        FRESH_PRODUCE_DESC: 'Trouvez les meilleurs fruits et légumes pour vos repas.',
        DAIRY_PRODUCTS: 'Produits laitiers',
        DAIRY_PRODUCTS_DESC: 'Articles laitiers de qualité pour vos besoins quotidiens.',
        MEAT_POULTRY: 'Viande et volaille',
        MEAT_POULTRY_DESC: 'Options de viande fraîche pour des repas délicieux.',

        // Pages
        CONTACT_US: 'Contactez-nous',
        NAME: 'Nom :',
        ENTER_NAME: 'Entrez votre nom complet.',
        MESSAGE: 'Message :',
        DESCRIBE_INQUIRY: 'Décrivez votre demande.',
        SEND_MESSAGE: 'Envoyer le message',
        LEGAL_NOTICE: 'Mention légale',
        LEGAL_DESC: 'Ceci est un exemple de page de mention légale. Dans une vraie application, cela contiendrait des informations juridiques détaillées sur le site web, ses conditions d\'utilisation, sa politique de confidentialité et d\'autres exigences légales.',
        LEGAL_DESC2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        FOLLOW_US: 'Suivez-nous sur les réseaux sociaux',
        SOCIAL_DESC: 'Restez connecté avec nous sur les réseaux sociaux pour les dernières mises à jour, conseils et promotions.',
        FACEBOOK: 'Facebook',
        TWITTER: 'Twitter',
        INSTAGRAM: 'Instagram',
        YOUTUBE: 'YouTube',
        TERMS_CONDITIONS: 'Termes et conditions',
        TERMS_DESC: 'Ce sont les termes et conditions d\'utilisation de Shopping App. En utilisant cette application, vous acceptez ces termes.',
        ACCEPTANCE: '1. Acceptation des termes',
        ACCEPTANCE_DESC: 'En accédant et utilisant cette application, vous acceptez et vous engagez à respecter les termes et dispositions de cet accord.',
        USE_LICENSE: '2. Licence d\'utilisation',
        USE_LICENSE_DESC: 'L\'autorisation est accordée de télécharger temporairement une copie des matériaux sur le site web de Shopping App pour une visualisation personnelle, non commerciale et transitoire uniquement.',
        DISCLAIMER: '3. Avertissement',
        DISCLAIMER_DESC: 'Les matériaux sur le site web de Shopping App sont fournis \'tels quels\'. Shopping App ne donne aucune garantie, expresse ou implicite, et nie par la présente et rejette toutes les autres garanties, y compris sans limitation les garanties implicites ou conditions de qualité marchande, d\'adéquation à un usage particulier ou de non-violation des droits de propriété intellectuelle ou d\'autres violations de droits.',

        // API endpoints
        API_BASE: 'php/',
        API_AUTH: 'api_auth.php',
        API_LISTS: 'api_lists.php',
        API_PANIER: 'api_panier.php',
        API_PRODUCTS: 'api_products.php',

        // Theme
        THEME_TOGGLE: '🌙 Thème'
    }
};

/**
 * Current language setting.
 * @type {string}
 */
let currentLang = 'en';

/**
 * Gets the current language object.
 * @returns {Object} The current language object.
 */
function getCurrentLang() {
    return LANGUAGES[currentLang] || LANGUAGES.en;
}

/**
 * Gets a language string by key for the current language.
 * @param {string} key - The language key.
 * @returns {string} The language string or the key if not found.
 */
function getLang(key) {
    const lang = getCurrentLang();
    return lang[key] || key;
}

/**
 * Sets the current language.
 * @param {string} lang - The language code (e.g., 'en', 'es', 'fr').
 */
function setLanguage(lang) {
    if (LANGUAGES[lang]) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        updateUILanguage();
    }
}

/**
 * Updates the UI with the current language.
 */
function updateUILanguage() {
    const lang = getCurrentLang();

    // Update text content based on data-lang attributes
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (lang[key]) {
            element.textContent = lang[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        if (lang[key]) {
            element.placeholder = lang[key];
        }
    });

    // Update select options
    document.querySelectorAll('[data-lang-option]').forEach(element => {
        const key = element.getAttribute('data-lang-option');
        if (lang[key]) {
            element.textContent = lang[key];
        }
    });
}

/**
 * Initializes language settings from localStorage.
 */
function initLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang && LANGUAGES[savedLang]) {
        currentLang = savedLang;
        document.getElementById('lang-selector').value = savedLang;
    }
    updateUILanguage();
}

// Global LANG object for easy access
const LANG = getCurrentLang();