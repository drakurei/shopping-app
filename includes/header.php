<?php
// includes/header.php - Page header and navigation

$pageTitle = $pageTitle ?? 'Shopping App';
$user = current_user();
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
            <h1 class="logo"><a href="index.php">Shopping App</a></h1>
            <nav>
                <ul class="nav-list">
                    <li><a href="index.php" class="nav-link">Products</a></li>
                    <?php if ($user): ?>
                        <li><a href="cart.php" class="nav-link">My Cart</a></li>
                        <li class="nav-user">Hi, <?= htmlspecialchars($user['name']); ?></li>
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
