<?php
// includes/header.php - Page header and navigation

$pageTitle = $pageTitle ?? 'Shopping App';
$user = current_user();
$userInitial = '';
$cartCount = 0;
$hasUser = $user !== null;
if ($hasUser) {
    $name = trim((string) ($user['name'] ?? ''));
    if ($name !== '') {
        $userInitial = strtoupper(substr($name, 0, 1));
    }
    $cartCount = cart_item_count((int) $user['id']);
}
$flashes = get_flashes();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($pageTitle); ?></title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <header class="site-header">
        <div class="container header-inner">
            <h1 class="logo">
                <a href="index.php">
                    <span class="logo-mark" aria-hidden="true">
                        <svg viewBox="0 0 32 32" role="img" focusable="false">
                            <rect x="3" y="6" width="26" height="20" rx="6" fill="#2b7a78"></rect>
                            <path d="M9 13h14l-1.2 7.5H10.2L9 13z" fill="#ffffff"></path>
                            <circle cx="13" cy="23" r="1.7" fill="#ffffff"></circle>
                            <circle cx="20" cy="23" r="1.7" fill="#ffffff"></circle>
                        </svg>
                    </span>
                    Shopping App
                </a>
            </h1>
            <nav>
                <ul class="nav-list">
                    <li>
                        <a href="index.php" class="nav-link">
                            <span class="nav-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" role="img" focusable="false">
                                    <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor"></rect>
                                    <rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor"></rect>
                                    <rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor"></rect>
                                    <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor"></rect>
                                </svg>
                            </span>
                            Products
                        </a>
                    </li>
                    <?php if ($hasUser): ?>
                        <li>
                            <a href="cart.php" class="nav-link" aria-label="Cart">
                                <span class="nav-emoji" aria-hidden="true">🛒</span>
                                <span class="cart-count" aria-label="Items in cart"><?= (int) $cartCount; ?></span>
                            </a>
                        </li>
                        <li><a href="logout.php" class="nav-link">Logout</a></li>
                    <?php else: ?>
                        <li><a href="login.php" class="nav-link">Login</a></li>
                        <li><a href="register.php" class="nav-link">Create Account</a></li>
                    <?php endif; ?>
                </ul>
            </nav>
        </div>
    </header>
    <main class="container">
        <?php if ($flashes): ?>
            <div class="flash-wrapper">
                <?php foreach ($flashes as $type => $messages): ?>
                    <?php foreach ($messages as $message): ?>
                        <div class="flash flash-<?= htmlspecialchars($type); ?>">
                            <span><?= htmlspecialchars($message); ?></span>
                            <button type="button" class="flash-close" data-dismiss="flash">&times;</button>
                        </div>
                    <?php endforeach; ?>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
