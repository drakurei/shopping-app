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
        API_BASE: '/shopping-app/php/',
        API_AUTH: 'api_auth.php',
        API_LISTS: 'api_lists.php',
        API_PANIER: 'api_panier.php',
        API_PRODUCTS: 'api_products.php',

        // Theme
        THEME_TOGGLE: '🌙 Theme',
        REMOVE: 'Remove'
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
        API_BASE: '/shopping-app/php/',
        API_AUTH: 'api_auth.php',
        API_LISTS: 'api_lists.php',
        API_PANIER: 'api_panier.php',
        API_PRODUCTS: 'api_products.php',

        // Theme
        THEME_TOGGLE: '🌙 Thème',
        REMOVE: 'Supprimer'
    },
    pt: {
        // General messages
        WELCOME: 'Bem-vindo ao Shopping App',
        WELCOME_DESC: 'Gerencie suas listas de compras de forma eficiente e compre de forma mais inteligente.',
        LOGIN: 'Entrar',
        REGISTER: 'Registrar',
        SHOP_NOW: 'Comprar agora',
        HOME: 'Início',
        LOGOUT: 'Sair',
        LOADING: 'Carregando...',
        ERROR: 'Ocorreu um erro. Tente novamente.',
        SUCCESS: 'Operação bem-sucedida.',

        // Authentication
        LOGIN_SUCCESS: 'Login bem-sucedido.',
        LOGIN_FAILED: 'Falha no login. Verifique suas credenciais.',
        REGISTER_SUCCESS: 'Registro bem-sucedido. Você pode fazer login agora.',
        REGISTER_FAILED: 'Falha no registro. Tente novamente.',
        NO_ACCOUNT: 'Não tem uma conta?',
        REGISTER_HERE: 'Registre-se aqui',
        HAVE_ACCOUNT: 'Já tem uma conta?',
        LOGIN_HERE: 'Faça login aqui',
        USERNAME_EMAIL: 'Nome de usuário ou Email:',
        ENTER_USERNAME_EMAIL: 'Digite seu nome de usuário ou email.',
        PASSWORD: 'Senha:',
        ENTER_PASSWORD: 'Digite sua senha.',
        USERNAME: 'Nome de usuário:',
        CHOOSE_USERNAME: 'Escolha um nome de usuário único.',
        EMAIL: 'Email:',
        ENTER_EMAIL: 'Digite um endereço de email válido.',
        PASSWORD_MIN: 'A senha deve ter pelo menos 8 caracteres.',

        // Lists
        MY_LISTS: 'Minhas listas de compras',
        CREATE_LIST: 'Criar nova lista',
        QUICK_ADD: 'Adicionar item rapidamente',
        ITEM_NAME: 'Nome do item:',
        CATEGORY: 'Categoria:',
        QUANTITY: 'Quantidade:',
        ADD_TO_LIST: 'Adicionar à lista:',
        SELECT_LIST: 'Selecione uma lista...',
        ADD_ITEM: 'Adicionar item',

        // Products
        SHOP_PRODUCTS: 'Comprar produtos',
        SEARCH_PLACEHOLDER: 'Buscar produtos...',
        ALL_CATEGORIES: 'Todas as categorias',
        FRUITS: 'Frutas',
        DAIRY: 'Laticínios',
        MEAT: 'Carne',
        BAKERY: 'Padaria',
        BEVERAGES: 'Bebidas',
        CLEAR_FILTERS: 'Limpar filtros',
        ADD_TO_CART: 'Adicionar ao carrinho',

        // Cart
        SHOPPING_CART: 'Carrinho de compras',
        CONTINUE_SHOPPING: 'Continuar comprando',
        TOTAL_ITEMS: 'Itens totais: ',
        TOTAL_PRICE: 'Preço total: $',
        PROCEED_TO_CHECKOUT: 'Ir para o checkout',

        // Features
        FRESH_PRODUCE: 'Produtos frescos',
        FRESH_PRODUCE_DESC: 'Encontre as melhores frutas e vegetais para suas refeições.',
        DAIRY_PRODUCTS: 'Produtos lácteos',
        DAIRY_PRODUCTS_DESC: 'Itens lácteos de qualidade para suas necessidades diárias.',
        MEAT_POULTRY: 'Carne e aves',
        MEAT_POULTRY_DESC: 'Opções de carne fresca para refeições deliciosas.',

        // Pages
        CONTACT_US: 'Entre em contato',
        NAME: 'Nome:',
        ENTER_NAME: 'Digite seu nome completo.',
        MESSAGE: 'Mensagem:',
        DESCRIBE_INQUIRY: 'Descreva sua consulta.',
        SEND_MESSAGE: 'Enviar mensagem',
        LEGAL_NOTICE: 'Aviso legal',
        LEGAL_DESC: 'Esta é uma página de aviso legal de exemplo. Em um aplicativo real, isso conteria informações legais detalhadas sobre o site, seus termos de uso, política de privacidade e outros requisitos legais.',
        LEGAL_DESC2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        FOLLOW_US: 'Siga-nos nas redes sociais',
        SOCIAL_DESC: 'Mantenha-se conectado conosco nas redes sociais para as últimas atualizações, dicas e promoções.',
        FACEBOOK: 'Facebook',
        TWITTER: 'Twitter',
        INSTAGRAM: 'Instagram',
        YOUTUBE: 'YouTube',
        TERMS_CONDITIONS: 'Termos e condições',
        TERMS_DESC: 'Estes são os termos e condições para usar o Shopping App. Ao usar este aplicativo, você concorda com estes termos.',
        ACCEPTANCE: '1. Aceitação dos termos',
        ACCEPTANCE_DESC: 'Ao acessar e usar este aplicativo, você aceita e concorda em cumprir os termos e disposições deste acordo.',
        USE_LICENSE: '2. Licença de uso',
        USE_LICENSE_DESC: 'É concedida permissão para baixar temporariamente uma cópia dos materiais no site do Shopping App para visualização pessoal, não comercial e transitória apenas.',
        DISCLAIMER: '3. Isenção de responsabilidade',
        DISCLAIMER_DESC: 'Os materiais no site do Shopping App são fornecidos "como estão". O Shopping App não oferece garantias, expressas ou implícitas, e por este meio isenta e nega todas as outras garantias, incluindo sem limitação garantias ou condições implícitas de comercialização, adequação a um propósito específico ou não violação de direitos de propriedade intelectual ou outras violações de direitos.',

        // API endpoints
        API_BASE: '/shopping-app/php/',
        API_AUTH: 'api_auth.php',
        API_LISTS: 'api_lists.php',
        API_PANIER: 'api_panier.php',
        API_PRODUCTS: 'api_products.php',

        // Theme
        THEME_TOGGLE: '🌙 Tema',
        REMOVE: 'Remover'
    },
    es: {
        // General messages
        WELCOME: 'Bienvenido a Shopping App',
        WELCOME_DESC: 'Gestiona tus listas de compras de manera eficiente y compra de forma más inteligente.',
        LOGIN: 'Iniciar sesión',
        REGISTER: 'Registrarse',
        SHOP_NOW: 'Comprar ahora',
        HOME: 'Inicio',
        LOGOUT: 'Cerrar sesión',
        LOADING: 'Cargando...',
        ERROR: 'Ocurrió un error. Inténtalo de nuevo.',
        SUCCESS: 'Operación exitosa.',

        // Authentication
        LOGIN_SUCCESS: 'Inicio de sesión exitoso.',
        LOGIN_FAILED: 'Error en el inicio de sesión. Verifica tus credenciales.',
        REGISTER_SUCCESS: 'Registro exitoso. Ahora puedes iniciar sesión.',
        REGISTER_FAILED: 'Error en el registro. Inténtalo de nuevo.',
        NO_ACCOUNT: '¿No tienes una cuenta?',
        REGISTER_HERE: 'Regístrate aquí',
        HAVE_ACCOUNT: '¿Ya tienes una cuenta?',
        LOGIN_HERE: 'Inicia sesión aquí',
        USERNAME_EMAIL: 'Nombre de usuario o Email:',
        ENTER_USERNAME_EMAIL: 'Ingresa tu nombre de usuario o email.',
        PASSWORD: 'Contraseña:',
        ENTER_PASSWORD: 'Ingresa tu contraseña.',
        USERNAME: 'Nombre de usuario:',
        CHOOSE_USERNAME: 'Elige un nombre de usuario único.',
        EMAIL: 'Email:',
        ENTER_EMAIL: 'Ingresa una dirección de email válida.',
        PASSWORD_MIN: 'La contraseña debe tener al menos 8 caracteres.',

        // Lists
        MY_LISTS: 'Mis listas de compras',
        CREATE_LIST: 'Crear nueva lista',
        QUICK_ADD: 'Agregar artículo rápidamente',
        ITEM_NAME: 'Nombre del artículo:',
        CATEGORY: 'Categoría:',
        QUANTITY: 'Cantidad:',
        ADD_TO_LIST: 'Agregar a la lista:',
        SELECT_LIST: 'Selecciona una lista...',
        ADD_ITEM: 'Agregar artículo',

        // Products
        SHOP_PRODUCTS: 'Comprar productos',
        SEARCH_PLACEHOLDER: 'Buscar productos...',
        ALL_CATEGORIES: 'Todas las categorías',
        FRUITS: 'Frutas',
        DAIRY: 'Lácteos',
        MEAT: 'Carne',
        BAKERY: 'Panadería',
        BEVERAGES: 'Bebidas',
        CLEAR_FILTERS: 'Limpiar filtros',
        ADD_TO_CART: 'Agregar al carrito',

        // Cart
        SHOPPING_CART: 'Carrito de compras',
        CONTINUE_SHOPPING: 'Continuar comprando',
        TOTAL_ITEMS: 'Artículos totales: ',
        TOTAL_PRICE: 'Precio total: $',
        PROCEED_TO_CHECKOUT: 'Proceder al pago',

        // Features
        FRESH_PRODUCE: 'Productos frescos',
        FRESH_PRODUCE_DESC: 'Encuentra las mejores frutas y verduras para tus comidas.',
        DAIRY_PRODUCTS: 'Productos lácteos',
        DAIRY_PRODUCTS_DESC: 'Artículos lácteos de calidad para tus necesidades diarias.',
        MEAT_POULTRY: 'Carne y aves',
        MEAT_POULTRY_DESC: 'Opciones de carne fresca para comidas deliciosas.',

        // Pages
        CONTACT_US: 'Contáctanos',
        NAME: 'Nombre:',
        ENTER_NAME: 'Ingresa tu nombre completo.',
        MESSAGE: 'Mensaje:',
        DESCRIBE_INQUIRY: 'Describe tu consulta.',
        SEND_MESSAGE: 'Enviar mensaje',
        LEGAL_NOTICE: 'Aviso legal',
        LEGAL_DESC: 'Esta es una página de aviso legal de ejemplo. En una aplicación real, esto contendría información legal detallada sobre el sitio web, sus términos de uso, política de privacidad y otros requisitos legales.',
        LEGAL_DESC2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        FOLLOW_US: 'Síguenos en redes sociales',
        SOCIAL_DESC: 'Mantente conectado con nosotros en redes sociales para las últimas actualizaciones, consejos y promociones.',
        FACEBOOK: 'Facebook',
        TWITTER: 'Twitter',
        INSTAGRAM: 'Instagram',
        YOUTUBE: 'YouTube',
        TERMS_CONDITIONS: 'Términos y condiciones',
        TERMS_DESC: 'Estos son los términos y condiciones para usar Shopping App. Al usar esta aplicación, aceptas estos términos.',
        ACCEPTANCE: '1. Aceptación de términos',
        ACCEPTANCE_DESC: 'Al acceder y usar esta aplicación, aceptas y acuerdas cumplir con los términos y disposiciones de este acuerdo.',
        USE_LICENSE: '2. Licencia de uso',
        USE_LICENSE_DESC: 'Se concede permiso para descargar temporalmente una copia de los materiales en el sitio web de Shopping App para visualización personal, no comercial y transitoria únicamente.',
        DISCLAIMER: '3. Descargo de responsabilidad',
        DISCLAIMER_DESC: 'Los materiales en el sitio web de Shopping App se proporcionan "tal cual". Shopping App no ofrece garantías, expresas o implícitas, y por este medio exime y niega todas las demás garantías, incluyendo sin limitación garantías o condiciones implícitas de comerciabilidad, idoneidad para un propósito particular o no infracción de derechos de propiedad intelectual u otras violaciones de derechos.',

        // API endpoints
        API_BASE: '/shopping-app/php/',
        API_AUTH: 'api_auth.php',
        API_LISTS: 'api_lists.php',
        API_PANIER: 'api_panier.php',
        API_PRODUCTS: 'api_products.php',

        // Theme
        THEME_TOGGLE: '🌙 Tema'
    },
    de: {
        // General messages
        WELCOME: 'Willkommen bei Shopping App',
        WELCOME_DESC: 'Verwalten Sie Ihre Einkaufslisten effizient und einkaufen Sie smarter.',
        LOGIN: 'Anmelden',
        REGISTER: 'Registrieren',
        SHOP_NOW: 'Jetzt einkaufen',
        HOME: 'Startseite',
        LOGOUT: 'Abmelden',
        LOADING: 'Laden...',
        ERROR: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
        SUCCESS: 'Operation erfolgreich.',

        // Authentication
        LOGIN_SUCCESS: 'Anmeldung erfolgreich.',
        LOGIN_FAILED: 'Anmeldung fehlgeschlagen. Überprüfen Sie Ihre Anmeldedaten.',
        REGISTER_SUCCESS: 'Registrierung erfolgreich. Sie können sich jetzt anmelden.',
        REGISTER_FAILED: 'Registrierung fehlgeschlagen. Bitte versuchen Sie es erneut.',
        NO_ACCOUNT: 'Haben Sie kein Konto?',
        REGISTER_HERE: 'Hier registrieren',
        HAVE_ACCOUNT: 'Haben Sie bereits ein Konto?',
        LOGIN_HERE: 'Hier anmelden',
        USERNAME_EMAIL: 'Benutzername oder Email:',
        ENTER_USERNAME_EMAIL: 'Geben Sie Ihren Benutzernamen oder Ihre Email ein.',
        PASSWORD: 'Passwort:',
        ENTER_PASSWORD: 'Geben Sie Ihr Passwort ein.',
        USERNAME: 'Benutzername:',
        CHOOSE_USERNAME: 'Wählen Sie einen eindeutigen Benutzernamen.',
        EMAIL: 'Email:',
        ENTER_EMAIL: 'Geben Sie eine gültige Email-Adresse ein.',
        PASSWORD_MIN: 'Das Passwort muss mindestens 8 Zeichen lang sein.',

        // Lists
        MY_LISTS: 'Meine Einkaufslisten',
        CREATE_LIST: 'Neue Liste erstellen',
        QUICK_ADD: 'Artikel schnell hinzufügen',
        ITEM_NAME: 'Artikelname:',
        CATEGORY: 'Kategorie:',
        QUANTITY: 'Menge:',
        ADD_TO_LIST: 'Zur Liste hinzufügen:',
        SELECT_LIST: 'Wählen Sie eine Liste...',
        ADD_ITEM: 'Artikel hinzufügen',

        // Products
        SHOP_PRODUCTS: 'Produkte einkaufen',
        SEARCH_PLACEHOLDER: 'Produkte suchen...',
        ALL_CATEGORIES: 'Alle Kategorien',
        FRUITS: 'Früchte',
        DAIRY: 'Milchprodukte',
        MEAT: 'Fleisch',
        BAKERY: 'Bäckerei',
        BEVERAGES: 'Getränke',
        CLEAR_FILTERS: 'Filter löschen',
        ADD_TO_CART: 'In den Warenkorb',

        // Cart
        SHOPPING_CART: 'Einkaufswagen',
        CONTINUE_SHOPPING: 'Weiter einkaufen',
        TOTAL_ITEMS: 'Gesamtartikel: ',
        TOTAL_PRICE: 'Gesamtpreis: $',
        PROCEED_TO_CHECKOUT: 'Zur Kasse gehen',

        // Features
        FRESH_PRODUCE: 'Frische Produkte',
        FRESH_PRODUCE_DESC: 'Finden Sie die besten Früchte und Gemüse für Ihre Mahlzeiten.',
        DAIRY_PRODUCTS: 'Milchprodukte',
        DAIRY_PRODUCTS_DESC: 'Qualitätsmilchprodukte für Ihren täglichen Bedarf.',
        MEAT_POULTRY: 'Fleisch und Geflügel',
        MEAT_POULTRY_DESC: 'Frische Fleischoptionen für köstliche Mahlzeiten.',

        // Pages
        CONTACT_US: 'Kontaktieren Sie uns',
        NAME: 'Name:',
        ENTER_NAME: 'Geben Sie Ihren vollständigen Namen ein.',
        MESSAGE: 'Nachricht:',
        DESCRIBE_INQUIRY: 'Beschreiben Sie Ihre Anfrage.',
        SEND_MESSAGE: 'Nachricht senden',
        LEGAL_NOTICE: 'Impressum',
        LEGAL_DESC: 'Dies ist eine Beispielseite für rechtliche Hinweise. In einer echten Anwendung würde dies detaillierte rechtliche Informationen über die Website, ihre Nutzungsbedingungen, Datenschutzrichtlinie und andere rechtliche Anforderungen enthalten.',
        LEGAL_DESC2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        FOLLOW_US: 'Folgen Sie uns in sozialen Medien',
        SOCIAL_DESC: 'Bleiben Sie mit uns in sozialen Medien verbunden für die neuesten Updates, Tipps und Angebote.',
        FACEBOOK: 'Facebook',
        TWITTER: 'Twitter',
        INSTAGRAM: 'Instagram',
        YOUTUBE: 'YouTube',
        TERMS_CONDITIONS: 'Allgemeine Geschäftsbedingungen',
        TERMS_DESC: 'Dies sind die Allgemeinen Geschäftsbedingungen für die Nutzung von Shopping App. Durch die Nutzung dieser Anwendung stimmen Sie diesen Bedingungen zu.',
        ACCEPTANCE: '1. Annahme der Bedingungen',
        ACCEPTANCE_DESC: 'Durch den Zugriff auf und die Nutzung dieser Anwendung akzeptieren Sie die Bedingungen und Bestimmungen dieser Vereinbarung und verpflichten sich, diese einzuhalten.',
        USE_LICENSE: '2. Nutzungslizenz',
        USE_LICENSE_DESC: 'Es wird die Erlaubnis erteilt, vorübergehend eine Kopie der Materialien auf der Shopping App-Website für persönliche, nicht-kommerzielle, vorübergehende Betrachtung herunterzuladen.',
        DISCLAIMER: '3. Haftungsausschluss',
        DISCLAIMER_DESC: 'Die Materialien auf der Shopping App-Website werden "wie sie sind" bereitgestellt. Shopping App gibt keine Garantien, weder ausdrücklich noch stillschweigend, und schließt hiermit alle anderen Garantien aus, einschließlich ohne Einschränkung stillschweigender Garantien oder Bedingungen der Marktgängigkeit, Eignung für einen bestimmten Zweck oder Nichtverletzung von geistigen Eigentumsrechten oder anderen Rechtsverletzungen.',

        // API endpoints
        API_BASE: '/shopping-app/php/',
        API_AUTH: 'api_auth.php',
        API_LISTS: 'api_lists.php',
        API_PANIER: 'api_panier.php',
        API_PRODUCTS: 'api_products.php',

        // Theme
        THEME_TOGGLE: '🌙 Thema'
    },
    ko: {
        // General messages
        WELCOME: 'Shopping App에 오신 것을 환영합니다',
        WELCOME_DESC: '쇼핑 목록을 효율적으로 관리하고 더 스마트하게 쇼핑하세요.',
        LOGIN: '로그인',
        REGISTER: '등록',
        SHOP_NOW: '지금 쇼핑하기',
        HOME: '홈',
        LOGOUT: '로그아웃',
        LOADING: '로딩 중...',
        ERROR: '오류가 발생했습니다. 다시 시도해 주세요.',
        SUCCESS: '작업이 성공적으로 완료되었습니다.',

        // Authentication
        LOGIN_SUCCESS: '로그인 성공.',
        LOGIN_FAILED: '로그인 실패. 자격 증명을 확인하세요.',
        REGISTER_SUCCESS: '등록 성공. 이제 로그인할 수 있습니다.',
        REGISTER_FAILED: '등록 실패. 다시 시도해 주세요.',
        NO_ACCOUNT: '계정이 없으신가요?',
        REGISTER_HERE: '여기에서 등록',
        HAVE_ACCOUNT: '이미 계정이 있으신가요?',
        LOGIN_HERE: '여기에서 로그인',
        USERNAME_EMAIL: '사용자 이름 또는 이메일:',
        ENTER_USERNAME_EMAIL: '사용자 이름 또는 이메일을 입력하세요.',
        PASSWORD: '비밀번호:',
        ENTER_PASSWORD: '비밀번호를 입력하세요.',
        USERNAME: '사용자 이름:',
        CHOOSE_USERNAME: '고유한 사용자 이름을 선택하세요.',
        EMAIL: '이메일:',
        ENTER_EMAIL: '유효한 이메일 주소를 입력하세요.',
        PASSWORD_MIN: '비밀번호는 최소 8자 이상이어야 합니다.',

        // Lists
        MY_LISTS: '내 쇼핑 목록',
        CREATE_LIST: '새 목록 만들기',
        QUICK_ADD: '빠른 항목 추가',
        ITEM_NAME: '항목 이름:',
        CATEGORY: '카테고리:',
        QUANTITY: '수량:',
        ADD_TO_LIST: '목록에 추가:',
        SELECT_LIST: '목록 선택...',
        ADD_ITEM: '항목 추가',

        // Products
        SHOP_PRODUCTS: '제품 쇼핑',
        SEARCH_PLACEHOLDER: '제품 검색...',
        ALL_CATEGORIES: '모든 카테고리',
        FRUITS: '과일',
        DAIRY: '유제품',
        MEAT: '육류',
        BAKERY: '제과점',
        BEVERAGES: '음료',
        CLEAR_FILTERS: '필터 지우기',
        ADD_TO_CART: '장바구니에 추가',

        // Cart
        SHOPPING_CART: '쇼핑 카트',
        CONTINUE_SHOPPING: '쇼핑 계속하기',
        TOTAL_ITEMS: '총 항목: ',
        TOTAL_PRICE: '총 가격: $',
        PROCEED_TO_CHECKOUT: '결제 진행',

        // Features
        FRESH_PRODUCE: '신선한 농산물',
        FRESH_PRODUCE_DESC: '식사에 가장 좋은 과일과 채소를 찾아보세요.',
        DAIRY_PRODUCTS: '유제품',
        DAIRY_PRODUCTS_DESC: '일상적인 필요를 위한 고품질 유제품.',
        MEAT_POULTRY: '육류 및 가금류',
        MEAT_POULTRY_DESC: '맛있는 식사를 위한 신선한 육류 옵션.',

        // Pages
        CONTACT_US: '문의하기',
        NAME: '이름:',
        ENTER_NAME: '전체 이름을 입력하세요.',
        MESSAGE: '메시지:',
        DESCRIBE_INQUIRY: '문의를 설명하세요.',
        SEND_MESSAGE: '메시지 보내기',
        LEGAL_NOTICE: '법적 고지',
        LEGAL_DESC: '이것은 법적 고지 페이지의 예입니다. 실제 애플리케이션에서는 웹사이트, 이용 약관, 개인정보 보호 정책 및 기타 법적 요구 사항에 대한 자세한 법적 정보를 포함합니다.',
        LEGAL_DESC2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        FOLLOW_US: '소셜 미디어에서 팔로우',
        SOCIAL_DESC: '최신 업데이트, 팁 및 프로모션을 위해 소셜 미디어에서 저희와 연결하세요.',
        FACEBOOK: 'Facebook',
        TWITTER: 'Twitter',
        INSTAGRAM: 'Instagram',
        YOUTUBE: 'YouTube',
        TERMS_CONDITIONS: '이용 약관',
        TERMS_DESC: 'Shopping App 사용을 위한 이용 약관입니다. 이 애플리케이션을 사용함으로써 귀하는 이 약관에 동의합니다.',
        ACCEPTANCE: '1. 약관 수락',
        ACCEPTANCE_DESC: '이 애플리케이션에 액세스하고 사용함으로써 귀하는 이 계약의 약관 및 조항을 수락하고 준수하는 데 동의합니다.',
        USE_LICENSE: '2. 사용 라이선스',
        USE_LICENSE_DESC: 'Shopping App 웹사이트의 자료 사본을 개인적, 비상업적, 일시적 전용으로 다운로드할 수 있는 권한이 부여됩니다.',
        DISCLAIMER: '3. 면책 조항',
        DISCLAIMER_DESC: 'Shopping App 웹사이트의 자료는 "있는 그대로" 제공됩니다. Shopping App은 명시적 또는 묵시적 보증을 제공하지 않으며, 이에 따라 상업성, 특정 목적에의 적합성 또는 지적 재산권 또는 기타 권리 침해에 대한 묵시적 보증이나 조건을 포함한 모든 다른 보증을 면제하고 부인합니다.',

        // API endpoints
        API_BASE: '/shopping-app/php/',
        API_AUTH: 'api_auth.php',
        API_LISTS: 'api_lists.php',
        API_PANIER: 'api_panier.php',
        API_PRODUCTS: 'api_products.php',

        // Theme
        THEME_TOGGLE: '🌙 테마',
        REMOVE: '제거'
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
        const langSelector = document.getElementById('lang-selector');
        if (langSelector) langSelector.value = savedLang;
        const heroLangSelector = document.getElementById('hero-lang-selector');
        if (heroLangSelector) heroLangSelector.value = savedLang;
    }
    updateUILanguage();
}

// Global LANG object for easy access
const LANG = getCurrentLang();

// Make functions globally accessible
window.setLanguage = setLanguage;
window.getLang = getLang;
window.initLanguage = initLanguage;
window.updateUILanguage = updateUILanguage;