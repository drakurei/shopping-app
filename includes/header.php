<?php
// includes/header.php - Reusable header with navigation

require_once '../session.php';
$isLoggedIn = isLoggedIn();
?>
<header>
    <div class="header-container">
        <h1 id="app-title">Shopping App</h1>
        <nav>
            <ul class="nav-menu">
                <li><a href="#" id="nav-home">Home</a></li>
                <li><a href="#" id="nav-products">Products</a></li>
                <?php if ($isLoggedIn): ?>
                    <li><a href="#" id="nav-lists">My Lists</a></li>
                    <li><a href="#" id="nav-cart">Cart <span id="total-count">0</span></a></li>
                    <li><a href="#" id="nav-logout">Logout</a></li>
                <?php else: ?>
                    <li><a href="#" id="nav-login">Login</a></li>
                    <li><a href="#" id="nav-register">Register</a></li>
                <?php endif; ?>
            </ul>
            <div class="nav-home-link">
                <a href="#" id="nav-home-alt" class="btn btn-secondary">Home</a>
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
            <button id="theme-toggle" class="theme-toggle-btn">🌙</button>
        </div>
    </div>
</header>
