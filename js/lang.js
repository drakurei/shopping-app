// lang.js - Handles multi-language support
const translations = {
    fr: {
        welcome: "Bienvenue sur Shopping App",
        intro: "Organisez vos courses facilement.",
        home: "Accueil",
        products: "Produits",
        lists: "Liste de courses",
        contact: "Contact",
        auth: "Inscription / Connexion",       // Auth page main title
        signupTitle: "Inscription",            // Registration section title
        loginTitle: "Connexion",               // Login section title
        signup: "S'inscrire",                  // Registration button
        login: "Se connecter",                 // Login button
        toggleTheme: "Thème",
        footer: "© 2025 Shopping App.",
        cgv: "CGV",
        legal: "Mentions légales",
        'Fruits et Légumes': "Fruits et Légumes",
        'Viandes': "Viandes",
        'Produits Laitiers': "Produits Laitiers",
        'Poisson': "Poisson",
        'Boissons': "Boissons",
        'Objets Ménagers': "Objets Ménagers",
        'Outils de Cuisine': "Outils de Cuisine",
        'Pomme': "Pomme",
        'Banane': "Banane",
        'Tomate': "Tomate",
        'Brocoli': "Brocoli",
        'Carotte': "Carotte",
        'Courgette': "Courgette",
        'Poulet': "Poulet",
        'Boeuf': "Boeuf",
        'Lait': "Lait",
        'Fromage': "Fromage",
        'Saumon': "Saumon",
        'Thon': "Thon",
        'Eau': "Eau",
        'Jus d\'Orange': "Jus d'Orange",
        'Détergent': "Détergent",
        'Papier Toilette': "Papier Toilette",
        'Couteau': "Couteau",
        'Poêle': "Poêle",
        profile: "Profil",
        logout: "Déconnexion",
        remove: "Supprimer",
        name: "Nom",
        quantity: "Quantité",
        price: "Prix",
        actions: "Actions",
        noItems: "Aucun article dans la liste"
    },
    en: {
        welcome: "Welcome to Shopping App",
        intro: "Organize your shopping easily.",
        home: "Home",
        products: "Products",
        lists: "Shopping Lists",
        contact: "Contact",
        auth: "Sign Up / Login",               // Auth page main title
        signupTitle: "Sign Up",                 // Registration section title
        loginTitle: "Login",                    // Login section title
        signup: "Sign Up",                      // Registration button
        login: "Login",                         // Login button
        toggleTheme: "Theme",
        footer: "© 2025 Shopping App.",
        cgv: "Terms",
        legal: "Legal",
        'Fruits et Légumes': "Fruits and Vegetables",
        'Viandes': "Meats",
        'Produits Laitiers': "Dairy Products",
        'Poisson': "Fish",
        'Boissons': "Beverages",
        'Objets Ménagers': "Household Items",
        'Outils de Cuisine': "Kitchen Tools",
        'Pomme': "Apple",
        'Banane': "Banana",
        'Tomate': "Tomato",
        'Brocoli': "Broccoli",
        'Carotte': "Carrot",
        'Courgette': "Zucchini",
        'Poulet': "Chicken",
        'Boeuf': "Beef",
        'Lait': "Milk",
        'Fromage': "Cheese",
        'Saumon': "Salmon",
        'Thon': "Tuna",
        'Eau': "Water",
        'Jus d\'Orange': "Orange Juice",
        'Détergent': "Detergent",
        'Papier Toilette': "Toilet Paper",
        'Couteau': "Knife",
        'Poêle': "Pan",
        profile: "Profile",
        logout: "Logout",
        remove: "Remove",
        name: "Name",
        quantity: "Quantity",
        price: "Price",
        actions: "Actions",
        noItems: "No items in list"
    },
    es: {  // Spanish
        welcome: "Bienvenido a Shopping App",
        intro: "Organiza tus compras fácilmente.",
        home: "Inicio",
        products: "Productos",
        lists: "Lista de compras",
        contact: "Contacto",
        auth: "Registro/Inicio de sesión",
        toggleTheme: "Tema",
        footer: "© 2025 Shopping App.",
        cgv: "Términos",
        legal: "Legal",
        'Fruits et Légumes': "Frutas y Verduras",
        'Viandes': "Carnes",
        'Produits Laitiers': "Productos Lácteos",
        'Poisson': "Pescado",
        'Boissons': "Bebidas",
        'Objets Ménagers': "Artículos del Hogar",
        'Outils de Cuisine': "Herramientas de Cocina",
        'Pomme': "Manzana",
        'Banane': "Plátano",
        'Tomate': "Tomate",  // Ajouté
        'Brocoli': "Brócoli",  // Ajouté
        'Carotte': "Zanahoria",  // Ajouté
        'Courgette': "Calabacín",  // Ajouté
        'Poulet': "Pollo",
        'Boeuf': "Carne de res",
        'Lait': "Leche",
        'Fromage': "Queso",
        'Saumon': "Salmón",
        'Thon': "Atún",
        'Eau': "Agua",
        'Jus d\'Orange': "Jugo de Naranja",
        'Détergent': "Detergente",
        'Papier Toilette': "Papel Higiénico",
        'Couteau': "Cuchillo",
        'Poêle': "Sartén",
        profile: "Perfil",
        logout: "Cerrar sesión",
        remove: "Eliminar",
        name: "Nombre",
        quantity: "Cantidad",
        price: "Precio",
        actions: "Acciones",  // Ajouté
        noItems: "No hay artículos en la lista"  // Ajouté
    },
    de: {  // German
        welcome: "Willkommen bei Shopping App",
        intro: "Organisiere deine Einkäufe einfach.",
        home: "Startseite",
        products: "Produkte",
        lists: "Einkaufslisten",
        contact: "Kontakt",
        auth: "Registrierung/Anmeldung",
        toggleTheme: "Thema",
        footer: "© 2025 Shopping App.",
        cgv: "AGB",
        legal: "Impressum",
        'Fruits et Légumes': "Obst und Gemüse",
        'Viandes': "Fleisch",
        'Produits Laitiers': "Milchprodukte",
        'Poisson': "Fisch",
        'Boissons': "Getränke",
        'Objets Ménagers': "Haushaltsartikel",
        'Outils de Cuisine': "Küchenwerkzeuge",
        'Pomme': "Apfel",
        'Banane': "Banane",
        'Tomate': "Tomate",  // Ajouté
        'Brocoli': "Brokkoli",  // Ajouté
        'Carotte': "Karotte",  // Ajouté
        'Courgette': "Zucchini",  // Ajouté
        'Poulet': "Hähnchen",
        'Boeuf': "Rindfleisch",
        'Lait': "Milch",
        'Fromage': "Käse",
        'Saumon': "Lachs",
        'Thon': "Thunfisch",
        'Eau': "Wasser",
        'Jus d\'Orange': "Orangensaft",
        'Détergent': "Waschmittel",
        'Papier Toilette': "Toilettenpapier",
        'Couteau': "Messer",
        'Poêle': "Pfanne",
        profile: "Profil",
        logout: "Abmelden",
        remove: "Entfernen",
        name: "Name",
        quantity: "Menge",
        price: "Preis",
        actions: "Aktionen",  // Ajouté
        noItems: "Keine Artikel in der Liste"  // Ajouté
    },
    pt: {  // Portuguese
        welcome: "Bem-vindo ao Shopping App",
        intro: "Organize suas compras facilmente.",
        home: "Início",
        products: "Produtos",
        lists: "Lista de compras",
        contact: "Contato",
        auth: "Cadastro/Entrar",
        toggleTheme: "Tema",
        footer: "© 2025 Shopping App.",
        cgv: "Termos",
        legal: "Legal",
        'Fruits et Légumes': "Frutas e Legumes",
        'Viandes': "Carnes",
        'Produits Laitiers': "Produtos Lácteos",
        'Poisson': "Peixe",
        'Boissons': "Bebidas",
        'Objets Ménagers': "Artigos Domésticos",
        'Outils de Cuisine': "Ferramentas de Cozinha",
        'Pomme': "Maçã",
        'Banane': "Banana",
        'Tomate': "Tomate",  // Ajouté
        'Brocoli': "Brócolis",  // Ajouté
        'Carotte': "Cenoura",  // Ajouté
        'Courgette': "Abobrinha",  // Ajouté
        'Poulet': "Frango",
        'Boeuf': "Carne bovina",
        'Lait': "Leite",
        'Fromage': "Queijo",
        'Saumon': "Salmão",
        'Thon': "Atum",
        'Eau': "Água",
        'Jus d\'Orange': "Suco de Laranja",
        'Détergent': "Detergente",
        'Papier Toilette': "Papel Higiênico",
        'Couteau': "Faca",
        'Poêle': "Panela",
        profile: "Perfil",
        logout: "Sair",
        remove: "Remover",
        name: "Nome",
        quantity: "Quantidade",
        price: "Preço",
        actions: "Ações",  // Ajouté
        noItems: "Nenhum item na lista"  // Ajouté
    },
    ko: {  // Korean
        welcome: "쇼핑 앱에 오신 것을 환영합니다",
        intro: "쇼핑을 쉽게 정리하세요.",
        home: "홈",
        products: "제품",
        lists: "쇼핑 목록",
        contact: "연락처",
        auth: "회원가입/로그인",
        toggleTheme: "테마",
        footer: "© 2025 Shopping App.",
        cgv: "약관",
        legal: "법적 고지",
        'Fruits et Légumes': "과일과 채소",
        'Viandes': "고기",
        'Produits Laitiers': "유제품",
        'Poisson': "생선",
        'Boissons': "음료",
        'Objets Ménagers': "가정 용품",
        'Outils de Cuisine': "주방 도구",
        'Pomme': "사과",
        'Banane': "바나나",
        'Tomate': "토마토",  // Ajouté
        'Brocoli': "브로콜리",  // Ajouté
        'Carotte': "당근",  // Ajouté
        'Courgette': "애호박",  // Ajouté
        'Poulet': "닭고기",
        'Boeuf': "소고기",
        'Lait': "우유",
        'Fromage': "치즈",
        'Saumon': "연어",
        'Thon': "참치",
        'Eau': "물",
        'Jus d\'Orange': "오렌지 주스",
        'Détergent': "세제",
        'Papier Toilette': "화장지",
        'Couteau': "칼",
        'Poêle': "프라이팬",
        profile: "프로필",
        logout: "로그아웃",
        remove: "제거",
        name: "이름",
        quantity: "수량",
        price: "가격",
        actions: "작업",  // Ajouté
        noItems: "목록에 항목 없음"  // Ajouté
    }
};

// Current language from localStorage or default to French
let currentLang = localStorage.getItem('lang') || 'fr';

/**
 * Sets the current language and updates the UI.
 * @param {string} lang - The language code (e.g., 'fr', 'en').
 */
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateUI();
}

/**
 * Gets the translated text for a given key.
 * @param {string} key - The translation key.
 * @returns {string} - The translated text or the key if not found.
 */
function getText(key) {
    return translations[currentLang] && translations[currentLang][key] ? translations[currentLang][key] : key;
}

/**
 * Updates all elements with data-lang attributes.
 */
function updateUI() {
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.textContent = getText(el.getAttribute('data-lang'));
    });
    // Also update products if on products page
    if (document.getElementById('products-page').classList.contains('active')) {
        loadProducts(); // Your existing function to reload product names with correct language
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', updateUI);