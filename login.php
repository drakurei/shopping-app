<?php
require_once __DIR__ . '/auth.php';

if (is_logged_in()) {
    redirect('index.php');
}

$email = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    $result = attempt_login($email, $password);

    if ($result['ok']) {
        set_flash('success', $result['message']);
        redirect('index.php');
    }

    set_flash('error', $result['message']);
}

$pageTitle = 'Login';
include __DIR__ . '/includes/header.php';
?>

<section class="auth-wrapper">
    <h2>Login</h2>
    <form method="post" novalidate>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required value="<?= htmlspecialchars($email); ?>">

        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>

        <button type="submit" class="btn btn-primary">Sign In</button>
    </form>
    <p>Need an account? <a href="register.php">Register here</a>.</p>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
