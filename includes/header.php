<?php
// includes/header.php - Reusable header with navigation

require_once '../session.php';
$isLoggedIn = isLoggedIn();
?>
<header>
    <div class="header-container">
        <h1 id="app-title" data-lang="WELCOME">Shopping App</h1>
        <nav>
            <ul class="nav-menu">
                <li><a href="#" id="nav-home" data-lang="HOME">Home</a></li>
                <li><a href="#" id="nav-products" data-lang="SHOP_PRODUCTS">Products</a></li>
                <li><a href="#" id="nav-cart" data-lang="SHOPPING_CART">🛒 Cart <span id="total-count">0</span></a></li>
                <?php if ($isLoggedIn): ?>
                    <li><a href="#" id="nav-lists" data-lang="MY_LISTS">My Lists</a></li>
                    <li><a href="#" id="nav-logout" data-lang="LOGOUT">Logout</a></li>
                <?php else: ?>
                    <li><a href="#" id="nav-login" data-lang="LOGIN">Login</a></li>
                    <li><a href="#" id="nav-register" data-lang="REGISTER">Register</a></li>
                <?php endif; ?>
            </ul>
            <div class="nav-home-link">
                <a href="#" id="nav-home-alt" class="btn btn-secondary" data-lang="HOME">Home</a>
            </div>
        </nav>
        <div class="header-controls">
            <select id="lang-selector" class="lang-selector">
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="pt">PT</option>
                <option value="es">ES</option>
                <option value="de">DE</option>
                <option value="ko">KO</option>
            </select>
            <button id="theme-toggle" class="theme-toggle-btn" data-lang="THEME_TOGGLE">🌙</button>
        </div>
    </div>
</header>
