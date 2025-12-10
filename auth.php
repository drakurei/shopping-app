<?php
// auth.php - Registration and login helpers

require_once __DIR__ . '/config.php';

function register_user(string $name, string $email, string $password): array {
    $name = sanitize($name);
    $email = filter_var(trim($email), FILTER_VALIDATE_EMAIL);
    $password = trim($password);

    if ($name === '' || !$email || strlen($password) < 8) {
        return ['ok' => false, 'message' => 'Provide a name, valid email, and password (8+ characters).'];
    }

    $pdo = db();

    $stmt = $pdo->prepare('SELECT id FROM users WHERE email = ? LIMIT 1');
    $stmt->execute([$email]);
    if ($stmt->fetch()) {
        return ['ok' => false, 'message' => 'Email already registered.'];
    }

    $hash = password_hash($password, PASSWORD_DEFAULT);
    $insert = $pdo->prepare('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)');
    $insert->execute([$name, $email, $hash]);

    $userId = (int) $pdo->lastInsertId();
    log_in_user(['id' => $userId, 'name' => $name, 'email' => $email]);

    return ['ok' => true, 'message' => 'Welcome to Shopping App!'];
}

function attempt_login(string $email, string $password): array {
    $email = filter_var(trim($email), FILTER_VALIDATE_EMAIL);
    $password = trim($password);

    if (!$email || $password === '') {
        return ['ok' => false, 'message' => 'Enter a valid email and password.'];
    }

    $pdo = db();
    $stmt = $pdo->prepare('SELECT id, name, email, password_hash FROM users WHERE email = ? LIMIT 1');
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($password, $user['password_hash'])) {
        return ['ok' => false, 'message' => 'Invalid credentials.'];
    }

    log_in_user($user);
    return ['ok' => true, 'message' => 'Logged in successfully.'];
}
?>
