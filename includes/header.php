<!-- includes/header.php - Reusable header for PHP pages -->
<header>
    <nav class="navbar">
        <div class="logo">Shopping App</div>
        <button id="menu-toggle" class="menu-toggle">☰</button>
        <ul class="nav-links" id="nav-links">
            <li><a href="index.php" data-lang="home">Accueil</a></li>
            <li><a href="lists.php" data-lang="lists">Liste de courses</a></li>
            <li><a href="contact.php" data-lang="contact">Contact</a></li>
            <li><a href="auth.php" data-lang="auth">Inscription/Connexion</a></li>
        </ul>
        <div class="nav-controls">
            <button id="theme-toggle" data-lang="toggle-theme">Thème</button>
            <select id="lang-select">
                <option value="fr">Français</option>
                <option value="en">English</option>
                <!-- Add more options -->
            </select>
        </div>
    </nav>
</header>
