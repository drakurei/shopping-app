<?php
require_once __DIR__ . '/auth.php';

if (is_logged_in()) {
    redirect('index.php');
}

$name = '';
$email = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    $confirm = $_POST['confirm_password'] ?? '';

    if ($password !== $confirm) {
        set_flash('error', 'Passwords do not match.');
    } else {
        $result = register_user($name, $email, $password);
        if ($result['ok']) {
            set_flash('success', $result['message']);
            redirect('index.php');
        }
        set_flash('error', $result['message']);
    }
}

$pageTitle = 'Create Account';
include __DIR__ . '/includes/header.php';
?>

<section class="auth-wrapper">
    <h2>Create Account</h2>
    <form method="post" novalidate>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required value="<?= htmlspecialchars($name); ?>">

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required value="<?= htmlspecialchars($email); ?>">

        <label for="password">Password</label>
        <input type="password" id="password" name="password" required minlength="8">

        <label for="confirm_password">Confirm Password</label>
        <input type="password" id="confirm_password" name="confirm_password" required minlength="8">

        <button type="submit" class="btn btn-primary">Create Account</button>
    </form>
    <p>Already registered? <a href="login.php">Login instead</a>.</p>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
